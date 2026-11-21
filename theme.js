/* Theme: follows the system by default. The visitor can choose Light or Dark. The choice is saved in localStorage (key dk-theme). */
(function(){
  var KEY='dk-theme',root=document.documentElement;
  var MODES=['auto','light','dark'],NAMES={auto:'Auto',light:'Light',dark:'Dark'};
  var COLORS={light:'#f6efe6',dark:'#0b0c10'};
  var get=function(){try{var v=localStorage.getItem(KEY);return MODES.indexOf(v)>-1?v:'auto'}catch(e){return 'auto'}};
  var save=function(v){try{if(v==='auto')localStorage.removeItem(KEY);else localStorage.setItem(KEY,v)}catch(e){}};
  var origin=null;
  function meta(mode){
    var m=document.querySelectorAll('meta[name="theme-color"]');
    if(!m.length)return;
    if(!origin)origin=[].map.call(m,function(x){return x.getAttribute('content')});
    [].forEach.call(m,function(x,i){x.setAttribute('content',mode==='auto'?origin[i]:COLORS[mode])});
  }
  function apply(mode){
    if(mode==='auto')root.removeAttribute('data-theme');else root.setAttribute('data-theme',mode);
    meta(mode);
    var next=MODES[(MODES.indexOf(mode)+1)%MODES.length];
    [].forEach.call(document.querySelectorAll('.js-theme'),function(b){
      b.textContent='Theme: '+NAMES[mode];
      b.setAttribute('aria-label','Theme: '+NAMES[mode]+(mode==='auto'?' (follows your device)':'')+'. Switch to '+NAMES[next]);
    });
  }
  apply(get());
  document.addEventListener('DOMContentLoaded',function(){
    apply(get());
    document.addEventListener('click',function(e){
      var b=e.target.closest('.js-theme');if(!b)return;
      var next=MODES[(MODES.indexOf(get())+1)%MODES.length];
      save(next);apply(next);
    });
  });
})();
