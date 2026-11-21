var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
document.addEventListener('click',function(e){
  var a=e.target.closest('a[target="_blank"]');
  if(a&&window.dkAnalytics)dkAnalytics.track('outbound_click',{link_url:a.href,link_domain:a.hostname});
});
