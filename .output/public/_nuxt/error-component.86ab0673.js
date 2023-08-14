import{_ as a}from"./entry.147c678c.js";import{defineAsyncComponent as c,openBlock as g,createBlock as E,unref as r,normalizeProps as k,guardReactiveProps as P}from"vue";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var o;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const s=Number(t.statusCode||500),n=s===404,i=(o=t.statusMessage)!=null?o:n?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,l=c(()=>a(()=>import("./error-404.b4a25571.js"),["./error-404.b4a25571.js","./entry.147c678c.js","./entry.fed867a8.css","./composables.81f64ddd.js","./error-404.95c28eb4.css"],import.meta.url).then(e=>e.default||e)),m=c(()=>a(()=>import("./error-500.b8b3ad45.js"),["./error-500.b8b3ad45.js","./composables.81f64ddd.js","./entry.147c678c.js","./entry.fed867a8.css","./error-500.e798523c.css"],import.meta.url).then(e=>e.default||e)),d=n?l:m;return(e,f)=>(g(),E(r(d),k(P({statusCode:r(s),statusMessage:r(i),description:r(p),stack:r(_)})),null,16))}},C=v;export{C as default};
