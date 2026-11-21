/* Analytics (Google Analytics 4). Nothing loads until the visitor accepts cookies.
   Paste your Measurement ID below (looks like G-AB12CD34EF). Until then, no tracking runs. */
(function(){
  var GA_ID='G-SF9PGPRCSH';
  var on=false,loaded=false;
  var valid=function(){return /^G-[A-Z0-9]{6,}$/.test(GA_ID)&&GA_ID!=='G-XXXXXXXXXX'};
  window.dkAnalytics={
    load:function(){
      if(!valid())return;
      window['ga-disable-'+GA_ID]=false;on=true;
      if(loaded)return;loaded=true;
      window.dataLayer=window.dataLayer||[];
      window.gtag=function(){window.dataLayer.push(arguments)};
      gtag('js',new Date());gtag('config',GA_ID);
      var s=document.createElement('script');s.async=true;
      s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s);
    },
    track:function(name,params){if(on&&window.gtag)gtag('event',name,params||{})},
    disable:function(){window['ga-disable-'+GA_ID]=true;on=false}
  };
})();
