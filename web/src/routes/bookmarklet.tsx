import { createFileRoute, Link } from '@tanstack/react-router';
import { BookmarkletButton, PageShell } from '@/components/site-chrome';

export const Route = createFileRoute('/bookmarklet')({
  head: () => ({ meta: [
    { title: 'Bookmarklet — Get started with RecordSeek in seconds' },
    { name: 'description', content: 'Source any website you visit with the RecordSeek bookmarklet — no install needed.' },
    { property: 'og:title', content: 'Bookmarklet — RecordSeek' },
    { property: 'og:description', content: 'Source any website you visit with the RecordSeek bookmarklet — no install needed.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: GetStarted,
});

function GetStarted() {
  return <PageShell eyebrow="Bookmarklet" title="Source any website, anytime." intro="Use the RecordSeek bookmarklet — no install needed.">
    <section className="container-wide page-section">
      <ol className="start-steps">
        <li><strong>Show your bookmarks bar</strong><span>In most browsers press Ctrl+Shift+B (⌘+Shift+B on Mac).</span></li>
        <li><strong>Drag the button below onto it</strong><span>It works on public and shared computers too.</span><div className="start-bookmarklet"><BookmarkletButton /></div></li>
        <li><strong>Click it on any page worth keeping</strong><span>RecordSeek opens with the page’s details ready to save as a source.</span></li>
      </ol>
      <p className="download-note">Prefer an extension? <Link to="/" hash="extensions">Get RecordSeek for your browser</Link></p>
    </section>
  </PageShell>;
}
