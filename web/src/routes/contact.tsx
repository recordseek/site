import { createFileRoute } from '@tanstack/react-router';
import { Mail } from 'lucide-react';
import { ExternalLink, PageShell } from '@/components/site-chrome';

const SUPPORT_EMAIL = 'me@dovy.io';

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [
    { title: 'Contact RecordSeek — We’d love to hear from you' },
    { name: 'description', content: 'Questions, ideas or press inquiries? Email the RecordSeek team directly.' },
    { property: 'og:title', content: 'Contact RecordSeek' },
    { property: 'og:description', content: 'Questions, ideas or press inquiries? Email the RecordSeek team directly.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Contact,
});

function Contact() {
  return <PageShell eyebrow="Contact us" title="We’d love to hear from you." intro="Questions, ideas, or a great discovery story — send it our way.">
    <section className="container-wide page-section contact-grid">
      <div className="contact-details">
        <a href={`mailto:${SUPPORT_EMAIL}`}><Mail className="size-4" /> {SUPPORT_EMAIL}</a>
        <ExternalLink href="https://twitter.com/RecordSeek">@RecordSeek</ExternalLink>
        <ExternalLink href="https://www.facebook.com/RecordSeek">facebook.com/RecordSeek</ExternalLink>
      </div>
    </section>
  </PageShell>;
}
