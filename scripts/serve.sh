#!/usr/bin/env bash
# Serves the repo root like GitHub Pages does (dir/index.html, 404.html) for local checks.
PORT="${PORT:-8080}"
cd "$(dirname "$0")/.." && exec python3 -I - "$PORT" <<'PY'
import http.server, sys, os
class H(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404 and os.path.exists("404.html"):
            body = open("404.html", "rb").read()
            self.send_response(404); self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)
        else:
            super().send_error(code, message, explain)
port = int(sys.argv[1])
print(f"Serving http://localhost:{port}/", flush=True)
http.server.ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
PY
