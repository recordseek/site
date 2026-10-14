import { createFileRoute, Link } from '@tanstack/react-router';
import { PageShell } from '@/components/site-chrome';
import dovyImage from '@/assets/dovy.jpg';

export const Route = createFileRoute('/about')({
  head: () => ({ meta: [
    { title: 'About RecordSeek — Our story' },
    { name: 'description', content: 'How RecordSeek began in 2012 to make adding web sources to FamilySearch and Ancestry simple.' },
    { property: 'og:title', content: 'About RecordSeek — Our story' },
    { property: 'og:description', content: 'How RecordSeek began in 2012 to make adding web sources to FamilySearch and Ancestry simple.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: About,
});

function About() {
  return <PageShell eyebrow="Our story" title="Made to make family history easier.">
    <section className="container-wide page-section about-grid">
      <figure className="founder"><img src={dovyImage} alt="Dovy Paukstys, founder of RecordSeek" width={400} height={400} loading="lazy" /><figcaption><strong>Dovy Paukstys</strong><span>Founder & Developer</span></figcaption></figure>
      <div className="prose-block">
        <p>Back in 2012 I was the CTO (Chief Technology Officer) of Real-Time Collaboration. RTC created FamilyInsight, AncestorSync, and SharingTime. We discovered a real need to make the process of adding sources to FamilySearch much more simple. An initial version of RecordSeek was created, and has served thousands of users world-wide.</p>
        <p>In May of 2015, a rewrite of RecordSeek began, expanding our offering and feature set. We also added saving sources to Ancestry. RecordSeek works great on all devices and in all major browsers.</p>
        <p>If you would like to integrate RecordSeek into your website, I’d love that! I do, however, request you donate to the effort.</p>
        <p>My hope is that RecordSeek makes the genealogy process easier for you. Your ancestors thank you for your efforts.</p>
      </div>
    </section>
    <section className="container-wide page-section"><div className="info-card"><span className="eyebrow">Press materials · Coming soon</span><h2>Sharing the love about RecordSeek?</h2><p>Thank you! Please feel free to use any of our graphics in any press you may have. <Link to="/contact">Drop us a line</Link> if you post a review — we’d love to see it — or if you need anything more.</p></div></section>
  </PageShell>;
}
