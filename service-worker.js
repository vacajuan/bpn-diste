if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const l=e=>i(e,c),t={module:{uri:c},exports:o,require:l};s[c]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bpn-bank"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/.htaccess",revision:"54e6c2b0bff3eebc3d2b190cfaf7ffe3"},{url:"/css/app.cfe0fb60.css",revision:null},{url:"/img/certisur_logo.3b013554.png",revision:null},{url:"/img/favicon.svg",revision:"f53cdcb83d9bd5e840dd95b366a7d682"},{url:"/index.html",revision:"69729cc06bf6e1edbfc25146d043619a"},{url:"/js/app.5f34553f.js",revision:null},{url:"/js/chunk-vendors.66c98e3f.js",revision:null},{url:"/manifest.json",revision:"5d0a99cd7033d34de11a6dbb3b04afcc"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
