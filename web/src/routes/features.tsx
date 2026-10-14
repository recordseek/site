import { createFileRoute, Link } from '@tanstack/react-router';
import { ExternalLink, PageShell } from '@/components/site-chrome';
import recordseekShot from '@/assets/feature-recordseek.png';
import responsiveShot from '@/assets/feature-responsive.png';
import partnersShot from '@/assets/feature-ancestryfs.png';
import mapShot from '@/assets/feature-map.png';

export const Route = createFileRoute('/features')({
  head: () => ({ meta: [
    { title: 'RecordSeek features — Record a website as a source' },
    { name: 'description', content: 'Automatic MLA citations, works everywhere, links to FamilySearch and Ancestry, and helps researchers collaborate.' },
    { property: 'og:title', content: 'RecordSeek features' },
    { property: 'og:description', content: 'Record a website as a source, with virtually no effort.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Features,
});

const features: { title: string; image: string; text: string[]; quote?: [string, string] }[] = [
  { title: 'Save you time and effort', image: recordseekShot, text: ['We take any website on the net and convert it to a source citation automatically. Recording sources becomes a joy, rather than a struggle.', 'RecordSeek automatically creates an MLA format source citation for you, so you get the benefit of an official citation without the frustration.'], quote: ['RecordSeek was created to save time and make a broken process simple.', 'Dovy Paukstys, Creator'] },
  { title: 'Works everywhere', image: responsiveShot, text: ['RecordSeek is designed for mobile as well as desktop. With a few simple instructions you can use it on the go.', 'With the bookmarklet, you can walk into any library and use RecordSeek without installing a thing. Portability is important to us.'] },
  { title: 'FamilySearch & Ancestry', image: partnersShot, text: ['We aim to support the biggest players in the industry. RecordSeek lets you link your sources to FamilySearch or Ancestry, and we’ll gladly expand to others.', 'Working together we can build a complete solution for users and developers across the world.'] },
  { title: 'Collaborate with others', image: mapShot, text: ['The whole reason we cite sources is to avoid duplicated effort. With citations, others won’t search for the same records you already found.', 'With citations, family fiction fades away. We all want to prove our ancestors existed — so why not work together?'], quote: ['Teamwork is the fuel that allows common people to attain uncommon results.', 'Andrew Carnegie'] },
];

const press: [string, string][] = [
  ['Genea-Musings', 'http://www.geneamusings.com/2013/01/using-recordseek-to-add-sources-to.html'],
  ['Genealogy’s Star', 'http://genealogysstar.blogspot.com/2015/07/gathering-source-information-with.html'],
  ['GenealogyBank', 'http://blog.genealogybank.com/great-family-tree-genealogy-app-tree-connect-by-recordseek.html'],
  ['Free Genealogy Help', 'http://www.freegenealogyhelp.com/recordseek-add-an-online-source-to-familysearch-or-ancestry/'],
  ['Utah Valley Technology & Genealogy Group', 'http://uvtagg.org/classes/dons/dons-familytreecertifiedprograms.html'],
  ['Dovy.io', 'http://dovy.io/recordseek/recordseek-redesigned-from-the-ground-up/'],
];

function Features() {
  return <PageShell eyebrow="Features" title="Record a website as a source, with virtually no effort." intro="We make it effortless to record a source so you can spend more time researching.">
    <section className="container-wide page-section feature-list">{features.map((f, i) => <article key={f.title} className={`feature-row${i % 2 ? ' reverse' : ''}`}><img src={f.image} alt={`${f.title} illustration`} loading="lazy" /><div><h2>{f.title}</h2>{f.text.map(t => <p key={t}>{t}</p>)}{f.quote && <blockquote>“{f.quote[0]}”<cite>— {f.quote[1]}</cite></blockquote>}</div></article>)}</section>
    <section className="testimonial"><blockquote>“If you have ever found a great document, picture or website about one of your ancestors and did not know how to create a source, now you can do it with a few mouse clicks.”</blockquote><cite><strong>David Penrod</strong> · RecordSeek user</cite></section>
    <section className="container-wide page-section"><div className="info-card"><span className="eyebrow">Press coverage</span><div className="press-links">{press.map(([name, href]) => <ExternalLink key={href} href={href}>{name}</ExternalLink>)}</div><p>Have press inquiries? See <Link to="/about">press materials</Link> or <Link to="/contact">get in touch</Link>.</p></div></section>
  </PageShell>;
}
