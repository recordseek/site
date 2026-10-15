import { createFileRoute, Link } from '@tanstack/react-router';
import { PageShell } from '@/components/site-chrome';

export const Route = createFileRoute('/developers')({
  head: () => ({ meta: [
    { title: 'RecordSeek for developers — Developer toolkit' },
    { name: 'description', content: 'Add a RecordSeek button to your website with one script tag. Visitors save your records straight to FamilySearch, Ancestry or a ready-made citation.' },
    { property: 'og:title', content: 'RecordSeek developer toolkit' },
    { property: 'og:description', content: 'Add a RecordSeek button to your website with one script tag.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Developers,
});

const snippet = `<script src="https://recordseek.com/sdk/v1/recordseek.js" defer></script>

<div class="recordseek"
     data-first-name="Mary" data-last-name="Smith"
     data-birth-date="1852" data-birth-place="Ohio"></div>`;

function Developers() {
  return <PageShell eyebrow="Developer toolkit" title="Bring RecordSeek to your website." intro="One script tag adds a RecordSeek button to any page, so your visitors can save your records to FamilySearch, Ancestry or a ready-made citation.">
    <section className="container-wide page-section"><div className="info-card">
      <h2>Quick start</h2>
      <p>Add the script once, then put a <code>recordseek</code> element wherever you want a button. With no attributes it reads the current page, just like our browser extension; add <code>data-*</code> attributes to pass the person and record details yourself.</p>
      <pre><code>{snippet}</code></pre>
      <p>Every attribute, styling and icon option, and a live playground are in the <a href="/sdk/">developer kit documentation</a>. Questions or a partnership in mind? <Link to="/contact">Get in touch</Link>.</p>
    </div></section>
  </PageShell>;
}
