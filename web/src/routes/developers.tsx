import { createFileRoute, Link } from '@tanstack/react-router';
import { PageShell } from '@/components/site-chrome';

export const Route = createFileRoute('/developers')({
  head: () => ({ meta: [
    { title: 'RecordSeek for developers — Developer toolkit' },
    { name: 'description', content: 'Integrate RecordSeek on your website and connect records to FamilySearch and Ancestry. Developer toolkit coming soon.' },
    { property: 'og:title', content: 'RecordSeek developer toolkit' },
    { property: 'og:description', content: 'Integrate RecordSeek on your website. Developer toolkit coming soon.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Developers,
});

function Developers() {
  return <PageShell eyebrow="Developer toolkit · Coming soon" title="Bring RecordSeek to your website." intro="Use our technology to connect your records to the services we support.">
    <section className="container-wide page-section"><div className="info-card"><h2>The toolkit is on its way.</h2><p>Want to integrate RecordSeek now or be first to hear when the toolkit is ready? <Link to="/contact">Get in touch</Link>.</p></div></section>
  </PageShell>;
}
