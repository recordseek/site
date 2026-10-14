#!/usr/bin/env bash
# Builds everything recordseek.com serves into the repo root (GitHub Pages serves
# the `site` branch root as-is):
#   1. the marketing site from web/ (TanStack Start, prerendered to static HTML)
#   2. the share app from recordseek/recordseek-app, built fresh into share/
#
# Usage: scripts/release.sh            # build both
#        SKIP_SHARE=1 scripts/release.sh   # site only
#        APP_REF=some-branch scripts/release.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
APP_REPO="${APP_REPO:-https://github.com/recordseek/recordseek-app.git}"
APP_REF="${APP_REF:-master}"
APP_DIR="$ROOT/.release-cache/recordseek-app"
MANIFEST="$ROOT/.site-manifest"

log() { printf '\n==> %s\n' "$*"; }

# ---------------------------------------------------------------- site
log "Building marketing site (web/)"
cd "$ROOT/web"
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules ]; then
  npm ci --no-audit --no-fund
fi
rm -rf .output
npm run build
OUT="$ROOT/web/.output/public"
[ -f "$OUT/index.html" ] || { echo "Site build produced no index.html" >&2; exit 1; }

# Remove what the previous release put in the root, then copy the new build.
if [ -f "$MANIFEST" ]; then
  while IFS= read -r entry; do
    case "$entry" in ""|share|web|scripts|.git*|CNAME) continue ;; esac
    rm -rf "${ROOT:?}/$entry"
  done < "$MANIFEST"
fi
( cd "$OUT" && ls -A ) > "$MANIFEST"
cp -R "$OUT"/. "$ROOT"/

# Old URLs from the previous site.
redirect() { # <path-relative-to-root> <target>
  mkdir -p "$(dirname "$ROOT/$1")"
  cat > "$ROOT/$1" <<EOF
<!doctype html><meta charset="utf-8"><title>RecordSeek</title>
<link rel="canonical" href="$2"><meta http-equiv="refresh" content="0; url=$2">
<script>location.replace("$2")</script><a href="$2">Continue to RecordSeek</a>
EOF
  echo "${1%%/*}" >> "$MANIFEST"
}
redirect get_started/index.html /bookmarklet/
redirect mobile/index.html /#mobile
redirect blog.html /
sort -u -o "$MANIFEST" "$MANIFEST"

# ---------------------------------------------------------------- share
if [ -z "${SKIP_SHARE:-}" ]; then
  log "Building share app from $APP_REPO@$APP_REF"
  if [ -d "$APP_DIR/.git" ]; then
    git -C "$APP_DIR" fetch --quiet --depth 1 origin "$APP_REF"
    git -C "$APP_DIR" reset --quiet --hard FETCH_HEAD
    git -C "$APP_DIR" clean --quiet -fdx -e node_modules
  else
    git clone --quiet --depth 1 --branch "$APP_REF" "$APP_REPO" "$APP_DIR"
  fi
  APP_SHA="$(git -C "$APP_DIR" rev-parse --short HEAD)"
  cd "$APP_DIR"
  pnpm install --frozen-lockfile --silent
  pnpm --filter @recordseek/web build:share
  [ -f packages/web/dist/index.html ] || { echo "Share build produced no index.html" >&2; exit 1; }
  rsync -a --delete packages/web/dist/ "$ROOT/share/"
  echo "recordseek-app@$APP_SHA" > "$ROOT/share/VERSION"
fi

log "Done. Preview with: scripts/serve.sh"
cd "$ROOT" && git status --short | tail -40
