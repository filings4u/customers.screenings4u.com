/* screenings4u Customer Portal — safe published page text + metadata */
(()=>{'use strict';
 const cfg=window.PORTAL_CONFIG;
 if(!cfg?.supabaseKey)return;
 const route=location.pathname==='/'?'/index.html':location.pathname;
 const endpoint=cfg.supabaseUrl+'/rest/v1/testing_published_page_settings';
 const params=new URLSearchParams({select:'title,description,seo_title,seo_description,seo_index,canonical_url,hero',site_code:'eq.customers',route:'eq.'+route,limit:'1'});
 const setMeta=(name,value)=>{if(!value)return;let el=document.head.querySelector('meta[name="'+name+'"]');if(!el){el=document.createElement('meta');el.name=name;document.head.append(el)}el.content=value};
 const apply=(p)=>{
   const title=document.querySelector('main .hero h1');
   const sub=document.querySelector('main .hero #subtitle');
   const heading=p.hero?.heading||'';
   const description=p.hero?.description||p.description||'';
   if(title&&heading&&title.textContent!==heading)title.textContent=heading;
   if(sub&&description&&sub.textContent!==description)sub.textContent=description;
 };
 fetch(endpoint+'?'+params,{headers:{apikey:cfg.supabaseKey,Accept:'application/json'},cache:'no-store'})
 .then(r=>{if(!r.ok)throw Error('Page settings request failed: '+r.status);return r.json()})
 .then(rows=>{const p=rows?.[0];if(!p)return;
   if(p.seo_title)document.title=p.seo_title;
   setMeta('description',p.seo_description);
   if(p.seo_index===false)setMeta('robots','noindex,nofollow');
   if(p.canonical_url){try{const url=new URL(p.canonical_url);if(url.protocol==='https:'&&url.hostname===location.hostname){let e=document.head.querySelector('link[rel="canonical"]');if(!e){e=document.createElement('link');e.rel='canonical';document.head.append(e)}e.href=url.href}}catch{}}
   apply(p);
   // The portal renders asynchronously and may replace its subtitle during data loading.
   // Reapply only if its target text changes; no polling or private record reads.
   const root=document.querySelector('main')||document.body;
   const observer=new MutationObserver(()=>apply(p));
   observer.observe(root,{childList:true,subtree:true,characterData:true});
   window.addEventListener('pageshow',()=>apply(p));
 }).catch(err=>console.warn('screenings4u page settings:',err.message));
})();
