import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, PageShell } from '@/components/site-chrome';

export const Route = createFileRoute('/terms')({
  head: () => ({ meta: [
    { title: 'Terms & Conditions — RecordSeek' },
    { name: 'description', content: 'The simple terms for using RecordSeek: free to use, provided as-is, your FamilySearch and Ancestry accounts stay governed by their own agreements.' },
    { property: 'og:title', content: 'Terms & Conditions — RecordSeek' },
    { property: 'og:description', content: 'RecordSeek is free to use and provided as-is. Your FamilySearch and Ancestry accounts remain governed by their own agreements.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Terms,
});

function Terms() {
  return <PageShell
    eyebrow="Terms & conditions"
    title="Simple terms for a simple tool."
    intro="RecordSeek is free, and we've kept these terms as easy to read as the tool is to use."
  >
    <section className="container-wide page-section">
      <div className="legal">
        <p><em>Last updated: October 2026.</em> By using RecordSeek — the website, the browser extensions, or the bookmarklet — you agree to these terms. If you don't agree, please don't use the tool.</p>

        <h2>What RecordSeek is</h2>
        <p>RecordSeek is a free helper tool for family historians. It lets you quickly save citations and source notes to records you find online, through our website, browser extensions, or bookmarklet.</p>

        <h2>Your accounts</h2>
        <p>RecordSeek works with your existing FamilySearch and Ancestry accounts. Your use of those services remains governed by their own terms and privacy policies — we are not affiliated with, endorsed by, or acting for either organization.</p>
        <ul>
          <li><ExternalLink href="https://www.familysearch.org/en/legal">FamilySearch Terms of Use</ExternalLink></li>
          <li><ExternalLink href="https://www.ancestry.com/corporate/about-ancestry/legal/terms-and-conditions">Ancestry Terms and Conditions</ExternalLink></li>
        </ul>
        <p>RecordSeek never stores your sign-in credentials. You authenticate directly with the service you're saving to.</p>

        <h2>Acceptable use</h2>
        <p>Use RecordSeek to save citations for your own research — that's what it's for. Please don't:</p>
        <ul>
          <li>Use the tool to abuse, overload, or interfere with FamilySearch, Ancestry, or any other website;</li>
          <li>Attempt to scrape, redistribute, or resell content through RecordSeek;</li>
          <li>Use the tool in any way that violates the terms of the services it connects to, or any applicable law.</li>
        </ul>

        <h2>Availability and changes</h2>
        <p>RecordSeek is provided free of charge. We may update, suspend, or discontinue any part of it at any time — including when FamilySearch or Ancestry change their platforms — without notice. The mobile app mentioned on this site is coming soon and these terms will apply to it as well when it launches.</p>

        <h2>No warranty</h2>
        <p>RecordSeek is provided "as is" and "as available", without warranties of any kind, express or implied — including fitness for a particular purpose, accuracy, or uninterrupted availability. Citations are saved to third-party services that we don't control, so we can't guarantee any particular saving result.</p>

        <h2>Limitation of liability</h2>
        <p>To the fullest extent permitted by law, RecordSeek and its creator are not liable for any indirect, incidental, or consequential damages, or for any loss of data, research, or records arising from your use of the tool — including anything saved to, changed in, or lost from a third-party service.</p>

        <h2>Contact</h2>
        <p>Questions about these terms? Email <a href="mailto:me@dovy.io">me@dovy.io</a>.</p>
      </div>
    </section>
  </PageShell>;
}
