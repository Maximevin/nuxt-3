import{a as oe,u as le,b as se}from"./entry.f1d0e4f3.js";import{openBlock as b,createElementBlock as A,defineComponent as ie,ref as F,onMounted as Q,createElementVNode as w,h as $,normalizeClass as ue,createTextVNode as C,toDisplayString as O,unref as p,getCurrentScope as ce,onScopeDispose as fe,readonly as de,watch as X,shallowRef as pe,nextTick as me,computed as P,createBlock as D,withCtx as T,createCommentVNode as k,createVNode as J}from"vue";import{u as _e}from"./useCourse.af3ef2a6.js";import{u as ve}from"./composables.03e91c26.js";const ye=["src"],he={__name:"VideoPlayer",props:{videoId:{type:Number,required:!0}},setup(e){const t=e;return(r,n)=>(b(),A("iframe",{width:"560",height:"315",src:`https://player.vimeo.com/video/${t.videoId}`,title:"Video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,ye))}},ge=ie({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:r}){const n=F(!1);return Q(()=>{n.value=!0}),a=>{var s;if(n.value)return(s=t.default)==null?void 0:s.call(t);const o=t.fallback||t.placeholder;if(o)return o();const i=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return A(d,r,i)}}}),L=new WeakMap;function we(e){if(L.has(e))return L.get(e);const t={...e};return t.render?t.render=(r,...n)=>{var a;if(r.mounted$){const o=e.render(r,...n);return o.children===null||typeof o.children=="string"?w(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):$(o)}else return $("div",(a=r.$attrs)!=null?a:r._.attrs)}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(r,n)=>{var o;const a=F(!1);return Q(()=>{a.value=!0}),Promise.resolve(((o=e.setup)==null?void 0:o.call(e,r,n))||{}).then(i=>typeof i!="function"?{...i,mounted$:a}:(...d)=>{if(a.value){const s=i(...d);return s.children===null||typeof s.children=="string"?w(s.type,s.props,s.children,s.patchFlag,s.dynamicProps,s.shapeFlag):$(s)}else return $("div",n.attrs)})},L.set(e,t),t}const be=["value"],Oe={__name:"LessonCompleteButton.client",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e){return(t,r)=>(b(),A("label",{class:ue(["rounded text-white font-bold py-2 px-4 cursor-pointer",{"bg-green-500":e.modelValue,"bg-gray-500":!e.modelValue}])},[w("input",{type:"checkbox",value:e.modelValue,onInput:r[0]||(r[0]=()=>t.$emit("update:modelValue",!e.modelValue)),class:"hidden"},null,40,be),C(" "+O(e.modelValue?"Completed!":"Mark as complete"),1)],2))}},Se=oe(Oe,[["__scopeId","data-v-163c1468"]]);function $e(e){return ce()?(fe(e),!0):!1}function B(e){return typeof e=="function"?e():p(e)}const j=typeof window<"u",Pe=()=>{};function Ve(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const Y=e=>e();function xe(e=Y){const t=F(!0);function r(){t.value=!1}function n(){t.value=!0}const a=(...o)=>{t.value&&e(...o)};return{isActive:de(t),pause:r,resume:n,eventFilter:a}}var M=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Ee=(e,t)=>{var r={};for(var n in e)Ce.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&M)for(var n of M(e))t.indexOf(n)<0&&Ne.call(e,n)&&(r[n]=e[n]);return r};function Ae(e,t,r={}){const n=r,{eventFilter:a=Y}=n,o=Ee(n,["eventFilter"]);return X(e,Ve(a,t),o)}var Fe=Object.defineProperty,je=Object.defineProperties,Ie=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,De=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&R(e,r,t[r]);if(N)for(var r of N(t))ee.call(t,r)&&R(e,r,t[r]);return e},Te=(e,t)=>je(e,Ie(t)),ke=(e,t)=>{var r={};for(var n in e)Z.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&N)for(var n of N(e))t.indexOf(n)<0&&ee.call(e,n)&&(r[n]=e[n]);return r};function Le(e,t,r={}){const n=r,{eventFilter:a}=n,o=ke(n,["eventFilter"]),{eventFilter:i,pause:d,resume:s,isActive:u}=xe(a);return{stop:Ae(e,t,Te(De({},o),{eventFilter:i})),pause:d,resume:s,isActive:u}}function Be(e){var t;const r=B(e);return(t=r==null?void 0:r.$el)!=null?t:r}const E=j?window:void 0;j&&window.document;j&&window.navigator;j&&window.location;function U(...e){let t,r,n,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,n,a]=e,t=E):[t,r,n,a]=e,!t)return Pe;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],i=()=>{o.forEach(m=>m()),o.length=0},d=(m,c,v,_)=>(m.addEventListener(c,v,_),()=>m.removeEventListener(c,v,_)),s=X(()=>[Be(t),B(a)],([m,c])=>{i(),m&&o.push(...r.flatMap(v=>n.map(_=>d(m,v,_,c))))},{immediate:!0,flush:"post"}),u=()=>{s(),i()};return $e(u),u}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__",We=ze();function ze(){return x in V||(V[x]=V[x]||{}),V[x]}function Je(e,t){return We[e]||t}function Me(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Re=Object.defineProperty,H=Object.getOwnPropertySymbols,Ue=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,K=(e,t)=>{for(var r in t||(t={}))Ue.call(t,r)&&q(e,r,t[r]);if(H)for(var r of H(t))He.call(t,r)&&q(e,r,t[r]);return e};const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},G="vueuse-storage";function Ke(e,t,r,n={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:d=!0,writeDefaults:s=!0,mergeDefaults:u=!1,shallow:m,window:c=E,eventFilter:v,onError:_=l=>{console.error(l)}}=n,y=(m?pe:F)(t);if(!r)try{r=Je("getDefaultStorage",()=>{var l;return(l=E)==null?void 0:l.localStorage})()}catch(l){_(l)}if(!r)return y;const h=B(t),W=Me(h),S=(a=n.serializer)!=null?a:qe[W],{pause:te,resume:z}=Le(y,()=>re(y.value),{flush:o,deep:i,eventFilter:v});return c&&d&&(U(c,"storage",I),U(c,G,ae)),I(),y;function re(l){try{if(l==null)r.removeItem(e);else{const f=S.write(l),g=r.getItem(e);g!==f&&(r.setItem(e,f),c&&c.dispatchEvent(new CustomEvent(G,{detail:{key:e,oldValue:g,newValue:f,storageArea:r}})))}}catch(f){_(f)}}function ne(l){const f=l?l.newValue:r.getItem(e);if(f==null)return s&&h!==null&&r.setItem(e,S.write(h)),h;if(!l&&u){const g=S.read(f);return typeof u=="function"?u(g,h):W==="object"&&!Array.isArray(g)?K(K({},h),g):g}else return typeof f!="string"?f:S.read(f)}function ae(l){I(l.detail)}function I(l){if(!(l&&l.storageArea!==r)){if(l&&l.key==null){y.value=h;return}if(!(l&&l.key!==e)){te();try{y.value=ne(l)}catch(f){_(f)}finally{l?me(z):z()}}}}}function Ge(e,t,r={}){const{window:n=E}=r;return Ke(e,t,n==null?void 0:n.localStorage,r)}const Qe=we(Se),Xe={class:"mt-0 uppercase font-bold text-slate-400 mb-1"},Ye={class:"my-0"},Ze={class:"flex space-x-4 mt-2 mb-8"},at={__name:"[lessonSlug]",setup(e){const t=_e(),r=le(),n=P(()=>t.chapters.find(u=>u.slug===r.params.chapterSlug)),a=P(()=>n.value.lessons.find(u=>u.slug===r.params.lessonSlug)),o=P(()=>`${a.value.title} - ${t.title}`);ve({title:o});const i=Ge("progress",[]),d=P(()=>!i.value[n.value.number-1]||!i.value[n.value.number-1][a.value.number-1]?!1:i.value[n.value.number-1][a.value.number-1]),s=()=>{i.value[n.value.number-1]||(i.value[n.value.number-1]=[]),i.value[n.value.number-1][a.value.number-1]=!d.value};return(u,m)=>{const c=se,v=he,_=Qe,y=ge;return b(),A("div",null,[w("p",Xe," Lesson "+O(p(n).number)+" - "+O(p(a).number),1),w("h2",Ye,O(p(a).title),1),w("div",Ze,[p(a).sourceUrl?(b(),D(c,{key:0,class:"font-normal text-md text-gray-500",href:p(a).sourceUrl},{default:T(()=>[C(" Download Source Code ")]),_:1},8,["href"])):k("",!0),p(a).downloadUrl?(b(),D(c,{key:1,class:"font-normal text-md text-gray-500",href:p(a).downloadUrl},{default:T(()=>[C(" Download Video ")]),_:1},8,["href"])):k("",!0)]),p(a).videoId?(b(),D(v,{key:0,videoId:p(a).videoId},null,8,["videoId"])):k("",!0),w("p",null,O(p(a).text),1),J(y,null,{default:T(()=>[J(_,{"model-value":p(d),"onUpdate:modelValue":s},null,8,["model-value"])]),_:1}),C(" /> ")])}}};export{at as default};
