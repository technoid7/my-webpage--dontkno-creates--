/* Cookie consent: analytics stays off until the visitor accepts. The choice is saved in localStorage. */
(function(){
  var KEY='dk-consent',banner=null;
  var get=function(){try{return localStorage.getItem(KEY)}catch(e){return null}};
  var set=function(v){try{localStorage.setItem(KEY,v)}catch(e){}};
  function clearGa(){
    document.cookie.split(';').forEach(function(c){
      var n=c.split('=')[0].trim();
      if(n==='_ga'||n.indexOf('_ga_')===0){
        ['',location.hostname,'.'+location.hostname].forEach(function(d){
          document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/'+(d?';domain='+d:'');
        });
      }
    });
  }
  function hide(){if(banner){banner.remove();banner=null}}
  function decide(v){
    set(v);hide();
    if(v==='granted')window.dkAnalytics.load();
    else{window.dkAnalytics.disable();clearGa()}
  }
  function show(focus){
    if(banner)return;
    banner=document.createElement('section');
    banner.className='consent';
    banner.setAttribute('role','dialog');
    banner.setAttribute('aria-labelledby','consent-title');
    banner.innerHTML='<div><h2 id="consent-title">Cookies &amp; analytics</h2><p>I’d like to use analytics cookies to see which pages people visit. They stay off unless you accept. Read the <a href="cookies.html">Cookie policy</a> and <a href="privacy.html">Privacy policy</a>.</p></div><div class="actions"><button type="button" class="btn" id="c-yes">Accept analytics</button><button type="button" class="btn ghost" id="c-no">Decline analytics</button></div>';
    document.body.appendChild(banner);
    banner.querySelector('#c-yes').onclick=function(){decide('granted')};
    banner.querySelector('#c-no').onclick=function(){decide('denied')};
    banner.addEventListener('keydown',function(e){if(e.key==='Escape')hide()});
    if(focus)banner.querySelector('#c-yes').focus();
  }
  var v=get();
  if(v==='granted')window.dkAnalytics.load();
  else if(!v)show(false);
  document.querySelectorAll('.js-cookie-settings').forEach(function(b){b.addEventListener('click',function(){show(true)})});
})();
