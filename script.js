const W=[
{t:"Digital marketing site (Brightwave)",k:"Web design",d:"Marketing website for a digital agency.",a:3,v:17,c:"linear-gradient(135deg,#ffc93c,#ff7a59)",u:"https://www.behance.net/gallery/232562331/Digital-marketing-site-%28Brightwave%29"},
{t:"Skateboarding company landing page",k:"Landing page",d:"Landing page for a skateboard retailer.",a:3,v:34,c:"linear-gradient(135deg,#7ee8fa,#80ff72)",u:"https://www.behance.net/gallery/232188615/landing-page-for-skate-boarding-selling-company"},
{t:"Lingualoop onboarding page",k:"Onboarding",d:"Onboarding flow for a language learning app.",a:1,v:10,c:"linear-gradient(135deg,#c79bff,#ff8ad4)",u:"https://www.behance.net/gallery/232019159/lingualoop-language-learning-onboarding-page"},
{t:"Luminar Times product page",k:"Product page",d:"Product details page for a wrist watch brand.",a:3,v:36,c:"linear-gradient(135deg,#f5d58a,#a9783a)",u:"https://www.behance.net/gallery/231849679/product-details-page-wrist-watch-brand-%28luminar-times%29"}];
const g=document.getElementById('grid'),q=document.getElementById('q'),f=document.getElementById('f');
[...new Set(W.map(w=>w.k))].forEach(k=>f.add(new Option(k,k)));
function draw(){const s=q.value.toLowerCase(),c=f.value;const r=W.filter(w=>(!c||w.k===c)&&(w.t+w.d+w.k).toLowerCase().includes(s));
g.innerHTML=r.length?r.map((w,i)=>`<a class="card" style="animation-delay:${i*70}ms" href="${w.u}" target="_blank" rel="noopener" aria-label="${w.t}: view case study on Behance (opens in new tab)"><div class="ic" style="background:${w.c}"></div><div><b>${w.t}</b><p>${w.d}</p><div class="meta">${w.k} · ♥ ${w.a} · ◉ ${w.v} views</div></div><span class="btn full">View on Behance</span></a>`).join(''):'<p class="empty">No projects match.</p>'}
q.oninput=f.onchange=draw;draw();
