// The RecordSeek bookmarklet: a small loader, so it can improve without anyone
// re-dragging it. On click it opens the share popup (popups are only allowed
// during the click), keeps the selection, and loads /sdk/v1/bookmarklet.js
// (recordseek-app packages/sdk), which scrapes the page with genscrape and fills
// the popup. Sites that block outside scripts, or a slow load, fall back to the
// basic scrape below (the original bookmarklet's: title or longer h1, the
// .citation paragraph, selection or description).
//
// Bookmarks dragged from the old site keep working: /share/ still accepts them.

// VITE_RECORDSEEK_ORIGIN lets a local build point the loader at a local server.
const ORIGIN = (import.meta.env['VITE_RECORDSEEK_ORIGIN'] || 'https://recordseek.com').replace(/\/$/, '');

// Plain ES5 inside a function: it runs on any page, in any browser.
const loader = `(function(){
var w=window,d=document,o=${JSON.stringify(ORIGIN)},s='';
try{s=''+(w.getSelection?w.getSelection():'')}catch(e){}
var p=w.open('about:blank','recordseek','width=800,height=620,scrollbars=yes,resizable=yes,location=yes');
var b=w.__recordseekBookmarklet={win:p,sel:s,done:0};
function c(t){return(t||'').replace(/\\s+/g,' ').replace(/^ | $/g,'')}
function m(n){var x=d.querySelector('meta[property="'+n+'"],meta[name="'+n+'"]');return x?x.getAttribute('content'):''}
function f(){if(b.done)return;b.done=1;
var h=d.getElementsByTagName('h1')[0],t=c(d.title),x=h?c(h.textContent):'';if(x.length>t.length)t=x;
var q=d.querySelector('.citation p'),e=encodeURIComponent;
var u=o+'/share/?_='+(+new Date)+'&url='+e(location.href)+'&title='+e(t)+'&citation='+e(q?c(q.textContent):'')+'&notes='+e(c(s)||c(m('description')||m('og:description')))+'&rs_src=bookmarklet';
try{if(p&&!p.closed){p.location.href=u;p.focus();return}}catch(e){}location.href=u}
try{var j=d.createElement('script');j.src=o+'/sdk/v1/bookmarklet.js';j.async=true;j.onerror=f;(d.head||d.documentElement).appendChild(j)}catch(e){f()}
setTimeout(f,3000)})()`;

export const bookmarkletHref = 'javascript:' + encodeURIComponent(loader.replace(/\n/g, ''));
