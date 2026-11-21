const I=[
{c:"Gaming",d:"2026-11-21",t:"GTA 6 Is Here, and It Has Already Rewritten the Record Books",s:"Grand Theft Auto VI made $3.79 billion on day one, the biggest entertainment launch in history.",b:[
"Grand Theft Auto VI went on sale on November 19, 2026. Within about 24 hours it had made more money than any other entertainment launch in history.",
"# The headline number",
"Take-Two Interactive and Rockstar Games announced that day-one retail sales of Grand Theft Auto VI reached $3.79 billion, a new record for entertainment in any medium. The figure is based on company estimates through the end of November 19, worldwide. Rockstar also said the game sold 32.5 million units before release, a record across all platforms.",
"The numbers cover day one only. Take-Two has not yet published lifetime sales, and the game has been out for just two days.",
"# How it compares to GTA V",
"Grand Theft Auto V was the previous benchmark. It took in $800 million in its first 24 hours and reached $1 billion over three days when it launched in 2013. By Rockstar’s own count, GTA VI made roughly four to five times as much in its opening day as GTA V did, and it did so in one day instead of three.",
"Take-Two says GTA V alone has sold in nearly 235 million units, and the franchise as a whole nearly 480 million. GTA VI has a long way to go to catch those lifetime totals, but it has started from a much higher point.",
"# What the analysts saw",
"Third-party trackers had been watching the numbers climb before the official announcement. Market research firm Sensor Tower estimated that GTA VI had generated about $1.84 billion by its Thursday release, a figure that included months of pre-orders. By the evening, its estimate had reached around $2.36 billion and 24.58 million copies sold across all platforms.",
"Sensor Tower’s figures cover digital sales it can track, so they come in below Take-Two’s. The company’s number counts retail sales across all channels, which is why it is higher. The two measures are not directly comparable.",
"Sensor Tower also shows how the sales split by platform. The PS5 version accounts for about 18.44 million copies and $1.77 billion. Xbox Series X|S accounts for about 6.15 million copies and $588 million. That puts PlayStation at roughly 75% of sales, per the same tracker.",
"# Reviews and reach",
"Sales were helped by the reviews. The game earned a near-perfect score of 99 on Metacritic. The launch also arrived 13 years after the last wholly new installment of the series, following more than eight years of development.",
"# What it means for Take-Two",
"Investors noticed. A Wedbush analyst said the launch “should benefit Take-Two for years to come.” Analysts have been forecasting big totals for some time. Wedbush Securities estimated the game would reach $3 billion in sales and 30 million copies by the end of the year. The day-one figure has already passed that revenue forecast, and the unit count was passed before launch.",
"Analysts expect much more to come. GTA Online-style revenue from the game’s multiplayer component is likely to add to sales over time. GTA Online reportedly brought in $500 million in 2022 alone. A PC version has not been announced as part of this launch, and any later release would open another sales window.",
"# The bottom line",
"Here is where the numbers stand as of November 21, 2026:",
"* Day-one retail sales: $3.79 billion (Take-Two, company estimates)",
"* Pre-release units sold: 32.5 million (Take-Two)",
"* Independent digital estimate: about $2.36 billion and 24.6 million copies (Sensor Tower)",
"* GTA V’s launch for comparison: $800 million on day one, $1 billion over three days",
"Over the coming weeks, expect more updates from Take-Two, including a full sales figure at its next earnings report. Until then, one thing is already clear: the record for the biggest entertainment launch ever now belongs to GTA VI.",
"Figures come from company announcements and analyst estimates and may be revised.",
"# Sources",
"* [Take-Two Interactive: GTA VI day-one retail sales press release](https://www.take2games.com/ir/news/grand-theft-auto-vi-shatters-entertainment-box-office-records)",
"* [Asianet Newsable: Take-Two stock gains as GTA VI retail sales touch $3.8B](https://newsable.asianetnews.com/markets/ttwo-stock-gains-as-grand-theft-auto-vi-retail-sales-touch-3-8b-articleshow-873b3yu)",
"* [Investing News Network: GTA VI day-one retail sales](https://investingnews.com/grand-theft-auto-vi-shatters-entertainment-box-office-records-with-3-79-billion-in-day-one-retail-sales/)",
"* [Fox 5 NY: GTA VI estimated release-day revenue](https://www.fox5ny.com/news/gta-vi-pulls-estimated-1-84-billion-release-day-more-than-double-gta-vs-launch-record)",
"* [GamesRadar: GTA 6 sales near 25 million](https://www.gamesradar.com/games/grand-theft-auto/gta-6-sales-are-almost-at-25-million-as-rockstar-earns-usd2-36-billion-in-revenue-analysts-estimate/)",
"* [VICE: GTA 6 sales so far](https://www.vice.com/en/article/gta-6-sales-so-far/)",
"* [PC Guide: GTA 6 sales reportedly generate $2.36 billion](https://www.pcguide.com/news/gta-6-sales-have-reportedly-generated-2-36-billion-in-revenue/)",
"* [Notebookcheck: GTA 6 revenue projection](https://www.notebookcheck.net/Eye-watering-GTA-6-revenue-projection-suggest-another-record-breaker-for-Rockstar.939449.0.html)"
]}];
const fmt=d=>new Date(d+'T00:00:00Z').toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'});
const inline=t=>t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1<span class="sr"> (opens in new tab)</span></a>');
function body(a){let h='',l=false;
a.forEach(x=>{
if(x.startsWith('* ')){if(!l){h+='<ul>';l=true}h+='<li>'+inline(x.slice(2))+'</li>'}
else{if(l){h+='</ul>';l=false}h+=x.startsWith('# ')?'<h3>'+x.slice(2)+'</h3>':'<p>'+inline(x)+'</p>'}});
return h+(l?'</ul>':'')}
const T=document.getElementById('tabs'),IS=document.getElementById('issues');let cat="All";
function drawN(){
T.innerHTML=["All","Tech","Gaming"].map(c=>`<button class="${c===cat?'on':''}" data-c="${c}" aria-pressed="${c===cat}" aria-label="Show ${c==='All'?'all':c} posts">${c==='All'?'All posts':c}</button>`).join('');
const list=[...I].sort((a,b)=>b.d.localeCompare(a.d)).filter(i=>cat==="All"||i.c===cat);
IS.innerHTML=list.length?list.map((i,n)=>`<details class="issue" ${n===0?'open':''} style="animation-delay:${n*70}ms"><summary><span class="row"><span class="pill ${i.c==="Gaming"?'g':''}">${i.c}</span><time datetime="${i.d}">${fmt(i.d)}</time></span><b>${i.t}</b><span class="s">${i.s}</span></summary><div class="body">${body(i.b)}</div></details>`).join(''):'<p class="empty">No posts in this category yet.</p>';
T.querySelectorAll('button').forEach(b=>b.onclick=()=>{cat=b.dataset.c;drawN()})}
drawN();
