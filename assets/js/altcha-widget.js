var Mc=Object.defineProperty;var Eo=X=>{throw TypeError(X)};var Dc=(X,Q,he)=>Q in X?Mc(X,Q,{enumerable:!0,configurable:!0,writable:!0,value:he}):X[Q]=he;var I=(X,Q,he)=>Dc(X,typeof Q!="symbol"?Q+"":Q,he),Ca=(X,Q,he)=>Q.has(X)||Eo("Cannot "+he);var d=(X,Q,he)=>(Ca(X,Q,"read from private field"),he?he.call(X):Q.get(X)),F=(X,Q,he)=>Q.has(X)?Eo("Cannot add the same private member more than once"):Q instanceof WeakSet?Q.add(X):Q.set(X,he),O=(X,Q,he,Et)=>(Ca(X,Q,"write to private field"),Et?Et.call(X,he):Q.set(X,he),he),ce=(X,Q,he)=>(Ca(X,Q,"access private method"),he);var Co={},So;function Nc(){var io,oo,je,Yn,gt,an,Le,bt,ze,at,Rt,on,Yt,yn,wn,_n,It,mr,ue,$o,To,Ao,Sa,Cr,Sr,$a,it,Ot,ot,ln,Gn,yr,ha,Pt,qe,kn,xn,En,Cn,qn,We,Sn,Gt,mt,$n,Ce,Ta,Aa,Ra,Ia,Ro,lo;if(So)return Co;So=1;const X=!1;var Q=Array.isArray,he=Array.prototype.indexOf,Et=Array.prototype.includes,Io=Array.from,er=Object.keys,An=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,Oo=Object.getOwnPropertyDescriptors,Po=Object.prototype,Lo=Array.prototype,Oa=Object.getPrototypeOf,Pa=Object.isExtensible;const Lt=()=>{};function Mo(e){for(var t=0;t<e.length;t++)e[t]()}function La(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const ge=2,dn=4,tr=8,$r=1<<24,Mt=16,st=32,Dt=64,Tr=128,He=512,be=1024,we=2048,Qe=4096,ct=8192,et=16384,Nt=32768,Ar=1<<25,Ut=65536,Ma=1<<17,Do=1<<18,qt=1<<19,No=1<<20,Wt=65536,Rr=1<<21,Ir=1<<22,Ft=1<<23,hn=Symbol("$state"),Uo=Symbol("legacy props"),Fo=Symbol(""),Ct=new class extends Error{constructor(){super(...arguments);I(this,"name","StaleReactionError");I(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},Rn=!!((io=globalThis.document)!=null&&io.contentType)&&globalThis.document.contentType.includes("xml"),In=3,On=8;function Da(e){return e===this.v}function Na(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Vo(e){return!Na(e,this.v)}function jo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function zo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Bo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ho(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ko(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Yo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Go(){throw new Error("https://svelte.dev/e/hydration_failed")}function qo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Zo(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Jo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Xo=!1;const Qo=1,el=2,Or="[",Ua="[!",Fa="[?",Va="]",Zt={},me=Symbol(),ja="http://www.w3.org/1999/xhtml",tl="http://www.w3.org/2000/svg",nl="http://www.w3.org/1998/Math/MathML",rl="@attach";let Oe=null;function vn(e){Oe=e}function St(e,t=!1,n){Oe={p:Oe,i:!1,c:null,e:null,s:e,x:null,r:V,l:null}}function $t(e){var t=Oe,n=t.e;if(n!==null){t.e=null;for(var r of n)ji(r)}return e!==void 0&&(t.x=e),t.i=!0,Oe=t.p,e??{}}function za(){return!0}let Jt=[];function Ba(){var e=Jt;Jt=[],Mo(e)}function Tt(e){if(Jt.length===0&&!Un){var t=Jt;queueMicrotask(()=>{t===Jt&&Ba()})}Jt.push(e)}function al(){for(;Jt.length>0;)Ba()}function Pn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function il(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ol(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let M=!1;function ut(e){M=e}let D;function Ae(e){if(e===null)throw Pn(),Zt;return D=e}function Xt(){return Ae(dt(D))}function ee(e){if(M){if(dt(D)!==null)throw Pn(),Zt;D=e}}function Pr(e=1){if(M){for(var t=e,n=D;t--;)n=dt(n);D=n}}function Lr(e=!0){for(var t=0,n=D;;){if(n.nodeType===On){var r=n.data;if(r===Va){if(t===0)return n;t-=1}else(r===Or||r===Ua||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=dt(n);e&&n.remove(),n=a}}function Ha(e){if(!e||e.nodeType!==On)throw Pn(),Zt;return e.data}function At(e){if(typeof e!="object"||e===null||hn in e)return e;const t=Oa(e);if(t!==Po&&t!==Lo)return e;var n=new Map,r=Q(e),a=j(0),o=nn,s=l=>{if(nn===o)return l();var f=N,c=nn;Ke(null),Mi(o);var h=l();return Ke(f),Mi(c),h};return r&&n.set("length",j(e.length)),new Proxy(e,{defineProperty(l,f,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&qo();var h=n.get(f);return h===void 0?s(()=>{var g=j(c.value);return n.set(f,g),g}):E(h,c.value,!0),!0},deleteProperty(l,f){var c=n.get(f);if(c===void 0){if(f in l){const h=s(()=>j(me));n.set(f,h),Vn(a)}}else E(c,me),Vn(a);return!0},get(l,f,c){var m;if(f===hn)return e;var h=n.get(f),g=f in l;if(h===void 0&&(!g||(m=fn(l,f))!=null&&m.writable)&&(h=s(()=>{var b=At(g?l[f]:me),x=j(b);return x}),n.set(f,h)),h!==void 0){var p=i(h);return p===me?void 0:p}return Reflect.get(l,f,c)},getOwnPropertyDescriptor(l,f){var c=Reflect.getOwnPropertyDescriptor(l,f);if(c&&"value"in c){var h=n.get(f);h&&(c.value=i(h))}else if(c===void 0){var g=n.get(f),p=g==null?void 0:g.v;if(g!==void 0&&p!==me)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(l,f){var p;if(f===hn)return!0;var c=n.get(f),h=c!==void 0&&c.v!==me||Reflect.has(l,f);if(c!==void 0||V!==null&&(!h||(p=fn(l,f))!=null&&p.writable)){c===void 0&&(c=s(()=>{var m=h?At(l[f]):me,b=j(m);return b}),n.set(f,c));var g=i(c);if(g===me)return!1}return h},set(l,f,c,h){var le;var g=n.get(f),p=f in l;if(r&&f==="length")for(var m=c;m<g.v;m+=1){var b=n.get(m+"");b!==void 0?E(b,me):m in l&&(b=s(()=>j(me)),n.set(m+"",b))}if(g===void 0)(!p||(le=fn(l,f))!=null&&le.writable)&&(g=s(()=>j(void 0)),E(g,At(c)),n.set(f,g));else{p=g.v!==me;var x=s(()=>At(c));E(g,x)}var T=Reflect.getOwnPropertyDescriptor(l,f);if(T!=null&&T.set&&T.set.call(h,c),!p){if(r&&typeof f=="string"){var S=n.get("length"),G=Number(f);Number.isInteger(G)&&G>=S.v&&E(S,G+1)}Vn(a)}return!0},ownKeys(l){i(a);var f=Reflect.ownKeys(l).filter(g=>{var p=n.get(g);return p===void 0||p.v!==me});for(var[c,h]of n)h.v!==me&&!(c in l)&&f.push(c);return f},setPrototypeOf(){Wo()}})}function Ka(e){try{if(e!==null&&typeof e=="object"&&hn in e)return e[hn]}catch{}return e}function ll(e,t){return Object.is(Ka(e),Ka(t))}var Qt,Mr,Ya,Ga,qa;function Dr(){if(Qt===void 0){Qt=window,Mr=document,Ya=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Ga=fn(t,"firstChild").get,qa=fn(t,"nextSibling").get,Pa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Pa(n)&&(n.__t=void 0)}}function ft(e=""){return document.createTextNode(e)}function Ne(e){return Ga.call(e)}function dt(e){return qa.call(e)}function oe(e,t){if(!M)return Ne(e);var n=Ne(D);if(n===null)n=D.appendChild(ft());else if(t&&n.nodeType!==In){var r=ft();return n==null||n.before(r),Ae(r),r}return t&&nr(n),Ae(n),n}function pn(e,t=!1){if(!M){var n=Ne(e);return n instanceof Comment&&n.data===""?dt(n):n}if(t){if((D==null?void 0:D.nodeType)!==In){var r=ft();return D==null||D.before(r),Ae(r),r}nr(D)}return D}function re(e,t=1,n=!1){let r=M?D:e;for(var a;t--;)a=r,r=dt(r);if(!M)return r;if(n){if((r==null?void 0:r.nodeType)!==In){var o=ft();return r===null?a==null||a.after(o):r.before(o),Ae(o),o}nr(r)}return Ae(r),r}function sl(e){e.textContent=""}function Nr(e,t,n){return document.createElementNS(t??ja,e,void 0)}function nr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===In;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Wa(e){var t=V;if(t===null)return N.f|=Ft,e;if((t.f&Nt)===0&&(t.f&dn)===0)throw e;Vt(e,t)}function Vt(e,t){for(;t!==null;){if((t.f&Tr)!==0){if((t.f&Nt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const cl=-7169;function fe(e,t){e.f=e.f&cl|t}function Ur(e){(e.f&He)!==0||e.deps===null?fe(e,be):fe(e,Qe)}function Za(e){if(e!==null)for(const t of e)(t.f&ge)===0||(t.f&Wt)===0||(t.f^=Wt,Za(t.deps))}function Ja(e,t,n){(e.f&we)!==0?t.add(e):(e.f&Qe)!==0&&n.add(e),Za(e.deps),fe(e,be)}function ul(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function dl(e){return fl.includes(e)}const hl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function vl(e){return e=e.toLowerCase(),hl[e]??e}const pl=["touchstart","touchmove"];function gl(e){return pl.includes(e)}function bl(e,t){if(t){const n=document.body;e.autofocus=!0,Tt(()=>{document.activeElement===n&&e.focus()})}}let Xa=!1;function Qa(){Xa||(Xa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function rr(e){var t=N,n=V;Ke(null),vt(null);try{return e()}finally{Ke(t),vt(n)}}function ml(e,t,n,r=n){e.addEventListener(t,()=>rr(n));const a=e.__on_r;a?e.__on_r=()=>{a(),r(!0)}:e.__on_r=()=>r(!0),Qa()}const en=Symbol("events"),ei=new Set,Fr=new Set;function ti(e,t,n,r={}){function a(o){if(r.capture||Vr.call(t,o),!o.cancelBubble)return rr(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Tt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ve(e,t,n,r,a){var o={capture:r,passive:a},s=ti(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&gr(()=>{t.removeEventListener(e,s,o)})}function ar(e,t,n){(t[en]??(t[en]={}))[e]=n}function ir(e){for(var t=0;t<e.length;t++)ei.add(e[t]);for(var n of Fr)n(e)}let ni=null;function Vr(e){var T,S;var t=this,n=t.ownerDocument,r=e.type,a=((T=e.composedPath)==null?void 0:T.call(e))||[],o=a[0]||e.target;ni=e;var s=0,l=ni===e&&e[en];if(l){var f=a.indexOf(l);if(f!==-1&&(t===document||t===window)){e[en]=t;return}var c=a.indexOf(t);if(c===-1)return;f<=c&&(s=f)}if(o=a[s]||e.target,o!==t){An(e,"currentTarget",{configurable:!0,get(){return o||n}});var h=N,g=V;Ke(null),vt(null);try{for(var p,m=[];o!==null;){var b=o.assignedSlot||o.parentNode||o.host||null;try{var x=(S=o[en])==null?void 0:S[r];x!=null&&(!o.disabled||e.target===o)&&x.call(o,e)}catch(G){p?m.push(G):p=G}if(e.cancelBubble||b===t||b===null)break;o=b}if(p){for(let G of m)queueMicrotask(()=>{throw G});throw p}}finally{e[en]=t,delete e.currentTarget,Ke(h),vt(g)}}}const jr=((oo=globalThis==null?void 0:globalThis.window)==null?void 0:oo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function yl(e){return(jr==null?void 0:jr.createHTML(e))??e}function ri(e){var t=Nr("template");return t.innerHTML=yl(e.replaceAll("<!>","<!---->")),t.content}function Ue(e,t){var n=V;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ae(e,t){var n=(t&Qo)!==0,r=(t&el)!==0,a,o=!e.startsWith("<!>");return()=>{if(M)return Ue(D,null),D;a===void 0&&(a=ri(o?e:"<!>"+e),n||(a=Ne(a)));var s=r||Ya?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Ne(s),f=s.lastChild;Ue(l,f)}else Ue(s,s);return s}}function wl(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(M)return Ue(D,null),D;if(!o){var s=ri(a),l=Ne(s);o=Ne(l)}var f=o.cloneNode(!0);return Ue(f,f),f}}function zr(e,t){return wl(e,t,"svg")}function or(e=""){if(!M){var t=ft(e+"");return Ue(t,t),t}var n=D;return n.nodeType!==In?(n.before(n=ft()),Ae(n)):nr(n),Ue(n,n),n}function ai(){if(M)return Ue(D,null),D;var e=document.createDocumentFragment(),t=document.createComment(""),n=ft();return e.append(t,n),Ue(t,n),e}function z(e,t){if(M){var n=V;((n.f&Nt)===0||n.nodes.end===null)&&(n.nodes.end=D),Xt();return}e!==null&&e.before(t)}function _l(e){let t=0,n=Fn(0),r;return()=>{ia()&&(i(n),br(()=>(t===0&&(r=Bn(()=>e(()=>Vn(n)))),t+=1,()=>{Tt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Vn(n))})})))}}var kl=Ut|qt;function xl(e,t,n,r){new El(e,t,n,r)}class El{constructor(t,n,r,a){F(this,ue);I(this,"parent");I(this,"is_pending",!1);I(this,"transform_error");F(this,je);F(this,Yn,M?D:null);F(this,gt);F(this,an);F(this,Le);F(this,bt,null);F(this,ze,null);F(this,at,null);F(this,Rt,null);F(this,on,0);F(this,Yt,0);F(this,yn,!1);F(this,wn,new Set);F(this,_n,new Set);F(this,It,null);F(this,mr,_l(()=>(O(this,It,Fn(d(this,on))),()=>{O(this,It,null)})));var o;O(this,je,t),O(this,gt,n),O(this,an,s=>{var l=V;l.b=this,l.f|=Tr,r(s)}),this.parent=V.b,this.transform_error=a??((o=this.parent)==null?void 0:o.transform_error)??(s=>s),O(this,Le,Hn(()=>{if(M){const s=d(this,Yn);Xt();const l=s.data===Ua;if(s.data.startsWith(Fa)){const c=JSON.parse(s.data.slice(Fa.length));ce(this,ue,To).call(this,c)}else l?ce(this,ue,Ao).call(this):ce(this,ue,$o).call(this)}else ce(this,ue,Sa).call(this)},kl)),M&&O(this,je,D)}defer_effect(t){Ja(t,d(this,wn),d(this,_n))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!d(this,gt).pending}update_pending_count(t,n){ce(this,ue,$a).call(this,t,n),O(this,on,d(this,on)+t),!(!d(this,It)||d(this,yn))&&(O(this,yn,!0),Tt(()=>{O(this,yn,!1),d(this,It)&&vr(d(this,It),d(this,on))}))}get_effect_pending(){return d(this,mr).call(this),i(d(this,It))}error(t){var n=d(this,gt).onerror;let r=d(this,gt).failed;if(!n&&!r)throw t;d(this,bt)&&(ke(d(this,bt)),O(this,bt,null)),d(this,ze)&&(ke(d(this,ze)),O(this,ze,null)),d(this,at)&&(ke(d(this,at)),O(this,at,null)),M&&(Ae(d(this,Yn)),Pr(),Ae(Lr()));var a=!1,o=!1;const s=()=>{if(a){ol();return}a=!0,o&&Jo(),d(this,at)!==null&&Kn(d(this,at),()=>{O(this,at,null)}),ce(this,ue,Sr).call(this,()=>{ce(this,ue,Sa).call(this)})},l=f=>{try{o=!0,n==null||n(f,s),o=!1}catch(c){Vt(c,d(this,Le)&&d(this,Le).parent)}r&&O(this,at,ce(this,ue,Sr).call(this,()=>{try{return pt(()=>{var c=V;c.b=this,c.f|=Tr,r(d(this,je),()=>f,()=>s)})}catch(c){return Vt(c,d(this,Le).parent),null}}))};Tt(()=>{var f;try{f=this.transform_error(t)}catch(c){Vt(c,d(this,Le)&&d(this,Le).parent);return}f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(l,c=>Vt(c,d(this,Le)&&d(this,Le).parent)):l(f)})}}je=new WeakMap,Yn=new WeakMap,gt=new WeakMap,an=new WeakMap,Le=new WeakMap,bt=new WeakMap,ze=new WeakMap,at=new WeakMap,Rt=new WeakMap,on=new WeakMap,Yt=new WeakMap,yn=new WeakMap,wn=new WeakMap,_n=new WeakMap,It=new WeakMap,mr=new WeakMap,ue=new WeakSet,$o=function(){try{O(this,bt,pt(()=>d(this,an).call(this,d(this,je))))}catch(t){this.error(t)}},To=function(t){const n=d(this,gt).failed;n&&O(this,at,pt(()=>{n(d(this,je),()=>t,()=>()=>{})}))},Ao=function(){const t=d(this,gt).pending;if(t){this.is_pending=!0,O(this,ze,pt(()=>t(d(this,je))));var n=P;Tt(()=>{var r=O(this,Rt,document.createDocumentFragment()),a=ft();r.append(a),O(this,bt,ce(this,ue,Sr).call(this,()=>pt(()=>d(this,an).call(this,a)))),d(this,Yt)===0&&(d(this,je).before(r),O(this,Rt,null),Kn(d(this,ze),()=>{O(this,ze,null)}),ce(this,ue,Cr).call(this,n))})}},Sa=function(){var t=P;try{if(this.is_pending=this.has_pending_snippet(),O(this,Yt,0),O(this,on,0),O(this,bt,pt(()=>{d(this,an).call(this,d(this,je))})),d(this,Yt)>0){var n=O(this,Rt,document.createDocumentFragment());qi(d(this,bt),n);const r=d(this,gt).pending;O(this,ze,pt(()=>r(d(this,je))))}else ce(this,ue,Cr).call(this,t)}catch(r){this.error(r)}},Cr=function(t){this.is_pending=!1;for(const n of d(this,wn))fe(n,we),t.schedule(n);for(const n of d(this,_n))fe(n,Qe),t.schedule(n);d(this,wn).clear(),d(this,_n).clear()},Sr=function(t){var n=V,r=N,a=Oe;vt(d(this,Le)),Ke(d(this,Le)),vn(d(this,Le).ctx);try{return Bt.ensure(),t()}catch(o){return Wa(o),null}finally{vt(n),Ke(r),vn(a)}},$a=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ce(r=this.parent,ue,$a).call(r,t,n);return}O(this,Yt,d(this,Yt)+t),d(this,Yt)===0&&(ce(this,ue,Cr).call(this,n),d(this,ze)&&Kn(d(this,ze),()=>{O(this,ze,null)}),d(this,Rt)&&(d(this,je).before(d(this,Rt)),O(this,Rt,null)))};function ht(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=`${n}`)}function ii(e,t){return oi(e,t)}function Cl(e,t){Dr(),t.intro=t.intro??!1;const n=t.target,r=M,a=D;try{for(var o=Ne(n);o&&(o.nodeType!==On||o.data!==Or);)o=dt(o);if(!o)throw Zt;ut(!0),Ae(o);const s=oi(e,{...t,anchor:o});return ut(!1),s}catch(s){if(s instanceof Error&&s.message.split(`
`).some(l=>l.startsWith("https://svelte.dev/e/")))throw s;return s!==Zt&&console.warn("Failed to hydrate: ",s),t.recover===!1&&Go(),Dr(),sl(n),ut(!1),ii(e,t)}finally{ut(r),Ae(a)}}const lr=new Map;function oi(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:s=!0,transformError:l}){Dr();var f=void 0,c=hs(()=>{var h=n??t.appendChild(ft());xl(h,{pending:()=>{}},m=>{St({});var b=Oe;if(o&&(b.c=o),a&&(r.$$events=a),M&&Ue(m,null),f=e(m,r)||{},M&&(V.nodes.end=D,D===null||D.nodeType!==On||D.data!==Va))throw Pn(),Zt;$t()},l);var g=new Set,p=m=>{for(var b=0;b<m.length;b++){var x=m[b];if(!g.has(x)){g.add(x);var T=gl(x);for(const le of[t,document]){var S=lr.get(le);S===void 0&&(S=new Map,lr.set(le,S));var G=S.get(x);G===void 0?(le.addEventListener(x,Vr,{passive:T}),S.set(x,1)):S.set(x,G+1)}}}};return p(Io(ei)),Fr.add(p),()=>{var T;for(var m of g)for(const S of[t,document]){var b=lr.get(S),x=b.get(m);--x==0?(S.removeEventListener(m,Vr),b.delete(m),b.size===0&&lr.delete(S)):b.set(m,x)}Fr.delete(p),h!==n&&((T=h.parentNode)==null||T.removeChild(h))}});return Br.set(f,c),f}let Br=new WeakMap;function Sl(e,t){const n=Br.get(e);return n?(Br.delete(e),n(t)):Promise.resolve()}function Hr(e){var t=ge|we,n=N!==null&&(N.f&ge)!==0?N:null;return V!==null&&(V.f|=qt),{ctx:Oe,deps:null,effects:null,equals:Da,f:t,fn:e,reactions:null,rv:0,v:me,wv:0,parent:n??V,ac:null}}function $l(e,t,n){let r=V;r===null&&zo();var a=void 0,o=Fn(me),s=!N,l=new Map;return vs(()=>{var m;var f=V,c=La();a=c.promise;try{Promise.resolve(e()).then(c.resolve,c.reject).finally(sr)}catch(b){c.reject(b),sr()}var h=P;if(s){if((f.f&Nt)!==0)var g=ui();if(r.b.is_rendered())(m=l.get(h))==null||m.reject(Ct),l.delete(h);else{for(const b of l.values())b.reject(Ct);l.clear()}l.set(h,c)}const p=(b,x=void 0)=>{if(g){var T=x===Ct;g(T)}if(!(x===Ct||(f.f&et)!==0)){if(h.activate(),x)o.f|=Ft,vr(o,x);else{(o.f&Ft)!==0&&(o.f^=Ft),vr(o,b);for(const[S,G]of l){if(l.delete(S),S===h)break;G.reject(Ct)}}h.deactivate()}};c.promise.then(p,b=>p(null,b||"unknown"))}),gr(()=>{for(const f of l.values())f.reject(Ct)}),new Promise(f=>{function c(h){function g(){h===a?f(o):c(a)}h.then(g,g)}c(a)})}function Re(e){const t=Hr(e);return Pi(t),t}function Tl(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ke(t[n])}}function Al(e){for(var t=e.parent;t!==null;){if((t.f&ge)===0)return(t.f&et)===0?t:null;t=t.parent}return null}function Kr(e){var t,n=V;vt(Al(e));try{e.f&=~Wt,Tl(e),t=Ui(e)}finally{vt(n)}return t}function li(e){var t=Kr(e);if(!e.equals(t)&&(e.wv=Di(),(!(P!=null&&P.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){fe(e,be);return}Kt||(_e!==null?(ia()||P!=null&&P.is_fork)&&_e.set(e,t):Ur(e))}function Rl(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(Ct),r.teardown=Lt,r.ac=null,zn(r,0),la(r))}function si(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&mn(t)}function ci(e,t,n,r){const a=Hr;var o=e.filter(p=>!p.settled);if(n.length===0&&o.length===0){r(t.map(a));return}var s=V,l=Il(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(p=>p.promise)):null;function c(p){l();try{r(p)}catch(m){(s.f&et)===0&&Vt(m,s)}sr()}if(n.length===0){f.then(()=>c(t.map(a)));return}var h=ui();function g(){Promise.all(n.map(p=>$l(p))).then(p=>c([...t.map(a),...p])).catch(p=>Vt(p,s)).finally(()=>h())}f?f.then(()=>{l(),g(),sr()}):g()}function Il(){var e=V,t=N,n=Oe,r=P;return function(o=!0){vt(e),Ke(t),vn(n),o&&(e.f&et)===0&&(r==null||r.activate(),r==null||r.apply())}}function sr(e=!0){vt(null),Ke(null),vn(null),e&&(P==null||P.deactivate())}function ui(){var e=V.b,t=P,n=e.is_rendered();return e.update_pending_count(1,t),t.increment(n),(r=!1)=>{e.update_pending_count(-1,t),t.decrement(n,r)}}class cr{constructor(t,n=!0){I(this,"anchor");F(this,it,new Map);F(this,Ot,new Map);F(this,ot,new Map);F(this,ln,new Set);F(this,Gn,!0);F(this,yr,t=>{if(d(this,it).has(t)){var n=d(this,it).get(t),r=d(this,Ot).get(n);if(r)gs(r),d(this,ln).delete(n);else{var a=d(this,ot).get(n);a&&(d(this,Ot).set(n,a.effect),d(this,ot).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,s]of d(this,it)){if(d(this,it).delete(o),o===t)break;const l=d(this,ot).get(s);l&&(ke(l.effect),d(this,ot).delete(s))}for(const[o,s]of d(this,Ot)){if(o===n||d(this,ln).has(o))continue;const l=()=>{if(Array.from(d(this,it).values()).includes(o)){var c=document.createDocumentFragment();qi(s,c),c.append(ft()),d(this,ot).set(o,{effect:s,fragment:c})}else ke(s);d(this,ln).delete(o),d(this,Ot).delete(o)};d(this,Gn)||!r?(d(this,ln).add(o),Kn(s,l,!1)):l()}}});F(this,ha,t=>{d(this,it).delete(t);const n=Array.from(d(this,it).values());for(const[r,a]of d(this,ot))n.includes(r)||(ke(a.effect),d(this,ot).delete(r))});this.anchor=t,O(this,Gn,n)}ensure(t,n){var r=P;n&&!d(this,Ot).has(t)&&!d(this,ot).has(t)&&d(this,Ot).set(t,pt(()=>n(this.anchor))),d(this,it).set(r,t),M&&(this.anchor=D),d(this,yr).call(this,r)}}it=new WeakMap,Ot=new WeakMap,ot=new WeakMap,ln=new WeakMap,Gn=new WeakMap,yr=new WeakMap,ha=new WeakMap;function pe(e,t,n=!1){var r;M&&(r=D,Xt());var a=new cr(e),o=n?Ut:0;function s(l,f){if(M){var c=Ha(r);if(l!==parseInt(c.substring(1))){var h=Lr();Ae(h),a.anchor=h,ut(!1),a.ensure(l,f),ut(!0);return}}a.ensure(l,f)}Hn(()=>{var l=!1;t((f,c=0)=>{l=!0,s(c,f)}),l||s(-1,null)},o)}const Ol=Symbol("NaN");function Pl(e,t,n){M&&Xt();var r=new cr(e);Hn(()=>{var a=t();a!==a&&(a=Ol),r.ensure(a,n)})}function fi(e,t,n=!1,r=!1,a=!1,o=!1){var s=e,l="";if(n){var f=e;M&&(s=Ae(Ne(f)))}Ee(()=>{var c=V;if(l===(l=t()??"")){M&&Xt();return}if(n&&!M){c.nodes=null,f.innerHTML=l,l!==""&&Ue(Ne(f),f.lastChild);return}if(c.nodes!==null&&(Hi(c.nodes.start,c.nodes.end),c.nodes=null),l!==""){if(M){D.data;for(var h=Xt(),g=h;h!==null&&(h.nodeType!==On||h.data!=="");)g=h,h=dt(h);if(h===null)throw Pn(),Zt;Ue(D,g),s=Ae(h);return}var p=r?tl:a?nl:void 0,m=Nr(r?"svg":a?"math":"template",p);m.innerHTML=l;var b=r||a?m:m.content;if(Ue(Ne(b),b.lastChild),r||a)for(;Ne(b);)s.before(Ne(b));else s.before(b)}})}function Ll(e,t,...n){var r=new cr(e);Hn(()=>{const a=t()??null;r.ensure(a,a&&(o=>a(o,...n)))},Ut)}function Ml(e,t,n){var r;M&&(r=D,Xt());var a=new cr(e);Hn(()=>{var o=t()??null;if(M){var s=Ha(r),l=s===Or,f=o!==null;if(l!==f){var c=Lr();Ae(c),a.anchor=c,ut(!1),a.ensure(o,o&&(h=>n(h,o))),ut(!0);return}}a.ensure(o,o&&(h=>n(h,o)))},Ut)}function Dl(e,t){var n=void 0,r;zi(()=>{n!==(n=t())&&(r&&(ke(r),r=null),n&&(r=pt(()=>{oa(()=>n(e))})))})}function di(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=di(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Nl(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=di(e))&&(r&&(r+=" "),r+=t);return r}function Ul(e){return typeof e=="object"?Nl(e):e??""}const hi=[...` 	
\r\f \v\uFEFF`];function Fl(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,s=0;(s=r.indexOf(a,s))>=0;){var l=s+o;(s===0||hi.includes(r[s-1]))&&(l===r.length||hi.includes(r[l]))?r=(s===0?"":r.substring(0,s))+r.substring(l+1):s=l}}return r===""?null:r}function vi(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function Yr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Vl(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,s=0,l=!1,f=[];r&&f.push(...Object.keys(r).map(Yr)),a&&f.push(...Object.keys(a).map(Yr));var c=0,h=-1;const x=e.length;for(var g=0;g<x;g++){var p=e[g];if(l?p==="/"&&e[g-1]==="*"&&(l=!1):o?o===p&&(o=!1):p==="/"&&e[g+1]==="*"?l=!0:p==='"'||p==="'"?o=p:p==="("?s++:p===")"&&s--,!l&&o===!1&&s===0){if(p===":"&&h===-1)h=g;else if(p===";"||g===x-1){if(h!==-1){var m=Yr(e.substring(c,h).trim());if(!f.includes(m)){p!==";"&&g++;var b=e.substring(c,g).trim();n+=" "+b+";"}}c=g+1,h=-1}}}}return r&&(n+=vi(r)),a&&(n+=vi(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function jl(e,t,n,r,a,o){var s=e.__className;if(M||s!==n||s===void 0){var l=Fl(n,r,o);(!M||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e.__className=n}else if(o&&a!==o)for(var f in o){var c=!!o[f];(a==null||c!==!!a[f])&&e.classList.toggle(f,c)}return o}function Gr(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function zl(e,t,n,r){var a=e.__style;if(M||a!==t){var o=Vl(t,r);(!M||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e.__style=t}else r&&(Array.isArray(r)?(Gr(e,n==null?void 0:n[0],r[0]),Gr(e,n==null?void 0:n[1],r[1],"important")):Gr(e,n,r));return r}function qr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Q(t))return il();for(var r of e.options)r.selected=t.includes(pi(r));return}for(r of e.options){var a=pi(r);if(ll(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Bl(e){var t=new MutationObserver(()=>{qr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),gr(()=>{t.disconnect()})}function pi(e){return"__value"in e?e.__value:e.value}const Ln=Symbol("class"),Mn=Symbol("style"),gi=Symbol("is custom element"),bi=Symbol("is html"),Hl=Rn?"link":"LINK",Kl=Rn?"input":"INPUT",Yl=Rn?"option":"OPTION",Gl=Rn?"select":"SELECT",ql=Rn?"progress":"PROGRESS";function Wr(e){if(M){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;Y(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;Y(e,"checked",null),e.checked=a}}};e.__on_r=n,Tt(n),Qa()}}function Wl(e,t){var n=Zr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==ql)||(e.value=t??"")}function Zl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Y(e,t,n,r){var a=Zr(e);M&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Hl)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Fo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&yi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Jl(e,t,n,r,a=!1,o=!1){if(M&&a&&e.nodeName===Kl){var s=e,l=s.type==="checkbox"?"defaultChecked":"defaultValue";l in n||Wr(s)}var f=Zr(e),c=f[gi],h=!f[bi];let g=M&&c;g&&ut(!1);var p=t||{},m=e.nodeName===Yl;for(var b in t)b in n||(n[b]=null);n.class?n.class=Ul(n.class):n[Ln]&&(n.class=null),n[Mn]&&(n.style??(n.style=null));var x=yi(e);for(const H in n){let $=n[H];if(m&&H==="value"&&$==null){e.value=e.__value="",p[H]=$;continue}if(H==="class"){var T=e.namespaceURI==="http://www.w3.org/1999/xhtml";jl(e,T,$,r,t==null?void 0:t[Ln],n[Ln]),p[H]=$,p[Ln]=n[Ln];continue}if(H==="style"){zl(e,$,t==null?void 0:t[Mn],n[Mn]),p[H]=$,p[Mn]=n[Mn];continue}var S=p[H];if(!($===S&&!($===void 0&&e.hasAttribute(H)))){p[H]=$;var G=H[0]+H[1];if(G!=="$$")if(G==="on"){const te={},Ie="$$"+H;let L=H.slice(2);var le=dl(L);if(ul(L)&&(L=L.slice(0,-7),te.capture=!0),!le&&S){if($!=null)continue;e.removeEventListener(L,p[Ie],te),p[Ie]=null}if(le)ar(L,e,$),ir([L]);else if($!=null){let de=function(yt){p[H].call(this,yt)};p[Ie]=ti(L,e,de,te)}}else if(H==="style")Y(e,H,$);else if(H==="autofocus")bl(e,!!$);else if(!c&&(H==="__value"||H==="value"&&$!=null))e.value=e.__value=$;else if(H==="selected"&&m)Zl(e,$);else{var B=H;h||(B=vl(B));var Se=B==="defaultValue"||B==="defaultChecked";if($==null&&!c&&!Se)if(f[H]=null,B==="value"||B==="checked"){let te=e;const Ie=t===void 0;if(B==="value"){let L=te.defaultValue;te.removeAttribute(B),te.defaultValue=L,te.value=te.__value=Ie?L:null}else{let L=te.defaultChecked;te.removeAttribute(B),te.defaultChecked=L,te.checked=Ie?L:!1}}else e.removeAttribute(H);else Se||x.includes(B)&&(c||typeof $!="string")?(e[B]=$,B in f&&(f[B]=me)):typeof $!="function"&&Y(e,B,$)}}}return g&&ut(!0),p}function ur(e,t,n=[],r=[],a=[],o,s=!1,l=!1){ci(a,n,r,f=>{var c=void 0,h={},g=e.nodeName===Gl,p=!1;if(zi(()=>{var b=t(...f.map(i)),x=Jl(e,c,b,o,s,l);p&&g&&"value"in b&&qr(e,b.value);for(let S of Object.getOwnPropertySymbols(h))b[S]||ke(h[S]);for(let S of Object.getOwnPropertySymbols(b)){var T=b[S];S.description===rl&&(!c||T!==c[S])&&(h[S]&&ke(h[S]),h[S]=pt(()=>Dl(e,()=>T))),x[S]=T}c=x}),g){var m=e;oa(()=>{qr(m,c.value,!0),Bl(m)})}p=!0})}function Zr(e){return e.__attributes??(e.__attributes={[gi]:e.nodeName.includes("-"),[bi]:e.namespaceURI===ja})}var mi=new Map;function yi(e){var t=e.getAttribute("is")||e.nodeName,n=mi.get(t);if(n)return n;mi.set(t,n=[]);for(var r,a=e,o=Element.prototype;o!==a;){r=Oo(a);for(var s in r)r[s].set&&n.push(s);a=Oa(a)}return n}function Xl(e,t,n=t){var r=new WeakSet;ml(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=Jr(e)?Xr(o):o,n(o),P!==null&&r.add(P),await rn(),o!==(o=t())){var s=e.selectionStart,l=e.selectionEnd,f=e.value.length;if(e.value=o??"",l!==null){var c=e.value.length;s===l&&l===f&&c>f?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=s,e.selectionEnd=Math.min(l,c))}}}),(M&&e.defaultValue!==e.value||Bn(t)==null&&e.value)&&(n(Jr(e)?Xr(e.value):e.value),P!==null&&r.add(P)),br(()=>{var a=t();if(e===document.activeElement){var o=P;if(r.has(o))return}Jr(e)&&a===Xr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Jr(e){var t=e.type;return t==="number"||t==="range"}function Xr(e){return e===""?null:+e}function wi(e,t){return e===t||(e==null?void 0:e[hn])===t}function jt(e={},t,n,r){var a=Oe.r,o=V;return oa(()=>{var s,l;return br(()=>{s=l,l=[],Bn(()=>{e!==n(...l)&&(t(e,...l),s&&wi(n(...s),e)&&t(null,...s))})}),()=>{let f=o;for(;f!==a&&f.parent!==null&&f.parent.f&Ar;)f=f.parent;const c=()=>{l&&wi(n(...l),e)&&t(null,...l)},h=f.teardown;f.teardown=()=>{c(),h==null||h()}}}),e}const Ql={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function fr(e,t,n){return new Proxy({props:e,exclude:t},Ql)}function ie(e,t,n,r){var a=r,o=!0,s=()=>(o&&(o=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=s());var f;f=()=>{var p=e[t];return p===void 0?s():(o=!0,p)};var c=!1,h=Hr(()=>(c=!1,f())),g=V;return(function(p,m){if(arguments.length>0){const b=m?i(h):p;return E(h,b),c=!0,a!==void 0&&(a=b),p}return Kt&&c||(g.f&et)!==0?h.v:i(h)})}function es(e){return new ts(e)}class ts{constructor(t){F(this,Pt);F(this,qe);var o;var n=new Map,r=(s,l)=>{var f=Ri(l,!1,!1);return n.set(s,f),f};const a=new Proxy({...t.props||{},$$events:{}},{get(s,l){return i(n.get(l)??r(l,Reflect.get(s,l)))},has(s,l){return l===Uo?!0:(i(n.get(l)??r(l,Reflect.get(s,l))),Reflect.has(s,l))},set(s,l,f){return E(n.get(l)??r(l,f),f),Reflect.set(s,l,f)}});O(this,qe,(t.hydrate?Cl:ii)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError})),(!((o=t==null?void 0:t.props)!=null&&o.$$host)||t.sync===!1)&&Z(),O(this,Pt,a.$$events);for(const s of Object.keys(d(this,qe)))s==="$set"||s==="$destroy"||s==="$on"||An(this,s,{get(){return d(this,qe)[s]},set(l){d(this,qe)[s]=l},enumerable:!0});d(this,qe).$set=s=>{Object.assign(a,s)},d(this,qe).$destroy=()=>{Sl(d(this,qe))}}$set(t){d(this,qe).$set(t)}$on(t,n){d(this,Pt)[t]=d(this,Pt)[t]||[];const r=(...a)=>n.call(this,...a);return d(this,Pt)[t].push(r),()=>{d(this,Pt)[t]=d(this,Pt)[t].filter(a=>a!==r)}}$destroy(){d(this,qe).$destroy()}}Pt=new WeakMap,qe=new WeakMap;let _i=class{};typeof HTMLElement=="function"&&(_i=class extends HTMLElement{constructor(t,n,r){super();I(this,"$$ctor");I(this,"$$s");I(this,"$$c");I(this,"$$cn",!1);I(this,"$$d",{});I(this,"$$r",!1);I(this,"$$p_d",{});I(this,"$$l",{});I(this,"$$l_u",new Map);I(this,"$$me");I(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const s=Nr("slot");a!=="default"&&(s.name=a),z(o,s)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=ns(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=dr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=es({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=ds(()=>{br(()=>{var a;this.$$r=!0;for(const o of er(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const s=dr(o,this.$$d[o],this.$$p_d,"toAttribute");s==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,s)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const s=this.$$c.$on(a,o);this.$$l_u.set(o,s)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=dr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return er(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function dr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function ns(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function zt(e,t,n,r,a,o){let s=class extends _i{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return er(t).map(l=>(t[l].attribute||l).toLowerCase())}};return er(t).forEach(l=>{An(s.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(f){var g;f=dr(l,f,t),this.$$d[l]=f;var c=this.$$c;if(c){var h=(g=fn(c,l))==null?void 0:g.get;h?c[l]=f:c.$set({[l]:f})}}})}),r.forEach(l=>{An(s.prototype,l,{get(){var f;return(f=this.$$c)==null?void 0:f[l]}})}),e.element=s,s}function Qr(e){Oe===null&&jo(),Ve(()=>{const t=Bn(e);if(typeof t=="function")return t})}function ki(e,t,n){if(e==null)return t(void 0),Lt;const r=Bn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const gn=[];function rs(e,t=Lt){let n=null;const r=new Set;function a(l){if(Na(e,l)&&(e=l,n)){const f=!gn.length;for(const c of r)c[1](),gn.push(c,e);if(f){for(let c=0;c<gn.length;c+=2)gn[c][0](gn[c+1]);gn.length=0}}}function o(l){a(l(e))}function s(l,f=Lt){const c=[l,f];return r.add(c),r.size===1&&(n=t(a,o)||Lt),l(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:s}}function Dn(e){let t;return ki(e,n=>t=n)(),t}let ea=Symbol();function xi(e,t,n){const r=n[t]??(n[t]={store:null,source:Ri(void 0),unsubscribe:Lt});if(r.store!==e&&!(ea in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Lt;else{var a=!0;r.unsubscribe=ki(e,o=>{a?r.source.v=o:E(r.source,o)}),a=!1}return e&&ea in n?Dn(e):i(r.source)}function as(){const e={};function t(){gr(()=>{for(var n in e)e[n].unsubscribe();An(e,ea,{enumerable:!1,value:!0})})}return[e,t]}const Nn=new Set;let P=null,_e=null,ta=null,Un=!1,na=!1,bn=null,hr=null;var Ei=0;let is=1;const wr=class wr{constructor(){F(this,Ce);I(this,"id",is++);I(this,"current",new Map);I(this,"previous",new Map);F(this,kn,new Set);F(this,xn,new Set);F(this,En,0);F(this,Cn,0);F(this,qn,null);F(this,We,[]);F(this,Sn,new Set);F(this,Gt,new Set);F(this,mt,new Map);I(this,"is_fork",!1);F(this,$n,!1)}skip_effect(t){d(this,mt).has(t)||d(this,mt).set(t,{d:[],m:[]})}unskip_effect(t){var n=d(this,mt).get(t);if(n){d(this,mt).delete(t);for(var r of n.d)fe(r,we),this.schedule(r);for(r of n.m)fe(r,Qe),this.schedule(r)}}capture(t,n){n!==me&&!this.previous.has(t)&&this.previous.set(t,n),(t.f&Ft)===0&&(this.current.set(t,t.v),_e==null||_e.set(t,t.v))}activate(){P=this}deactivate(){P=null,_e=null}flush(){try{if(na=!0,P=this,!ce(this,Ce,Ta).call(this)){for(const t of d(this,Sn))d(this,Gt).delete(t),fe(t,we),this.schedule(t);for(const t of d(this,Gt))fe(t,Qe),this.schedule(t)}ce(this,Ce,Aa).call(this)}finally{Ei=0,ta=null,bn=null,hr=null,na=!1,P=null,_e=null,Ht.clear()}}discard(){for(const t of d(this,xn))t(this);d(this,xn).clear()}increment(t){O(this,En,d(this,En)+1),t&&O(this,Cn,d(this,Cn)+1)}decrement(t,n){O(this,En,d(this,En)-1),t&&O(this,Cn,d(this,Cn)-1),!(d(this,$n)||n)&&(O(this,$n,!0),Tt(()=>{O(this,$n,!1),this.flush()}))}oncommit(t){d(this,kn).add(t)}ondiscard(t){d(this,xn).add(t)}settled(){return(d(this,qn)??O(this,qn,La())).promise}static ensure(){if(P===null){const t=P=new wr;na||(Nn.add(P),Un||Tt(()=>{P===t&&t.flush()}))}return P}apply(){}schedule(t){var a;if(ta=t,(a=t.b)!=null&&a.is_pending&&(t.f&(dn|tr|$r))!==0&&(t.f&Nt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(bn!==null&&n===V&&(N===null||(N.f&ge)===0))return;if((r&(Dt|st))!==0){if((r&be)===0)return;n.f^=be}}d(this,We).push(n)}};kn=new WeakMap,xn=new WeakMap,En=new WeakMap,Cn=new WeakMap,qn=new WeakMap,We=new WeakMap,Sn=new WeakMap,Gt=new WeakMap,mt=new WeakMap,$n=new WeakMap,Ce=new WeakSet,Ta=function(){return this.is_fork||d(this,Cn)>0},Aa=function(){var l,f;Ei++>1e3&&os();const t=d(this,We);O(this,We,[]),this.apply();var n=bn=[],r=[],a=hr=[];for(const c of t)ce(this,Ce,Ra).call(this,c,n,r);if(P=null,a.length>0){var o=wr.ensure();for(const c of a)o.schedule(c)}if(bn=null,hr=null,ce(this,Ce,Ta).call(this)){ce(this,Ce,Ia).call(this,r),ce(this,Ce,Ia).call(this,n);for(const[c,h]of d(this,mt))Ti(c,h)}else{d(this,Sn).clear(),d(this,Gt).clear();for(const c of d(this,kn))c(this);d(this,kn).clear(),Ci(r),Ci(n),d(this,En)===0&&ce(this,Ce,Ro).call(this),(l=d(this,qn))==null||l.resolve()}var s=P;if(d(this,We).length>0){const c=s??(s=this);d(c,We).push(...d(this,We).filter(h=>!d(c,We).includes(h)))}s!==null&&(Nn.add(s),ce(f=s,Ce,Aa).call(f))},Ra=function(t,n,r){t.f^=be;for(var a=t.first;a!==null;){var o=a.f,s=(o&(st|Dt))!==0,l=s&&(o&be)!==0,f=l||(o&ct)!==0||d(this,mt).has(a);if(!f&&a.fn!==null){s?a.f^=be:(o&dn)!==0?n.push(a):jn(a)&&((o&Mt)!==0&&d(this,Gt).add(a),mn(a));var c=a.first;if(c!==null){a=c;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}},Ia=function(t){for(var n=0;n<t.length;n+=1)Ja(t[n],d(this,Sn),d(this,Gt))},Ro=function(){var a;if(Nn.size>1){this.previous.clear();var t=P,n=_e,r=!0;for(const o of Nn){if(o===this){r=!1;continue}const s=[];for(const[f,c]of this.current){if(o.current.has(f))if(r&&c!==o.current.get(f))o.current.set(f,c);else continue;s.push(f)}if(s.length===0)continue;const l=[...o.current.keys()].filter(f=>!this.current.has(f));if(l.length>0){o.activate();const f=new Set,c=new Map;for(const h of s)Si(h,l,f,c);if(d(o,We).length>0){o.apply();for(const h of d(o,We))ce(a=o,Ce,Ra).call(a,h,[],[])}o.deactivate()}}P=t,_e=n}d(this,mt).clear(),Nn.delete(this)};let Bt=wr;function Z(e){var t=Un;Un=!0;try{for(var n;;){if(al(),P===null)return n;P.flush()}}finally{Un=t}}function os(){try{Yo()}catch(e){Vt(e,ta)}}let tt=null;function Ci(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(et|ct))===0&&jn(r)&&(tt=new Set,mn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ki(r),(tt==null?void 0:tt.size)>0)){Ht.clear();for(const a of tt){if((a.f&(et|ct))!==0)continue;const o=[a];let s=a.parent;for(;s!==null;)tt.has(s)&&(tt.delete(s),o.push(s)),s=s.parent;for(let l=o.length-1;l>=0;l--){const f=o[l];(f.f&(et|ct))===0&&mn(f)}}tt.clear()}}tt=null}}function Si(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;(o&ge)!==0?Si(a,t,n,r):(o&(Ir|Mt))!==0&&(o&we)===0&&$i(a,t,r)&&(fe(a,we),ra(a))}}function $i(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(Et.call(t,a))return!0;if((a.f&ge)!==0&&$i(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function ra(e){P.schedule(e)}function Ti(e,t){if(!((e.f&st)!==0&&(e.f&be)!==0)){(e.f&we)!==0?t.d.push(e):(e.f&Qe)!==0&&t.m.push(e),fe(e,be);for(var n=e.first;n!==null;)Ti(n,t),n=n.next}}let aa=new Set;const Ht=new Map;let Ai=!1;function Fn(e,t){var n={f:0,v:e,reactions:null,equals:Da,rv:0,wv:0};return n}function j(e,t){const n=Fn(e);return Pi(n),n}function Ri(e,t=!1,n=!0){const r=Fn(e);return t||(r.equals=Vo),r}function E(e,t,n=!1){N!==null&&(!nt||(N.f&Ma)!==0)&&za()&&(N.f&(ge|Mt|Ir|Ma))!==0&&(Ye===null||!Et.call(Ye,e))&&Zo();let r=n?At(t):t;return vr(e,r,hr)}function vr(e,t,n=null){if(!e.equals(t)){var r=e.v;Kt?Ht.set(e,t):Ht.set(e,r),e.v=t;var a=Bt.ensure();if(a.capture(e,r),(e.f&ge)!==0){const o=e;(e.f&we)!==0&&Kr(o),Ur(o)}e.wv=Di(),Ii(e,we,n),V!==null&&(V.f&be)!==0&&(V.f&(st|Dt))===0&&(Ge===null?ss([e]):Ge.push(e)),!a.is_fork&&aa.size>0&&!Ai&&ls()}return t}function ls(){Ai=!1;for(const e of aa)(e.f&be)!==0&&fe(e,Qe),jn(e)&&mn(e);aa.clear()}function Vn(e){E(e,e.v+1)}function Ii(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var s=r[o],l=s.f,f=(l&we)===0;if(f&&fe(s,t),(l&ge)!==0){var c=s;_e==null||_e.delete(c),(l&Wt)===0&&(l&He&&(s.f|=Wt),Ii(c,Qe,n))}else if(f){var h=s;(l&Mt)!==0&&tt!==null&&tt.add(h),n!==null?n.push(h):ra(h)}}}let pr=!1,Kt=!1;function Oi(e){Kt=e}let N=null,nt=!1;function Ke(e){N=e}let V=null;function vt(e){V=e}let Ye=null;function Pi(e){N!==null&&(Ye===null?Ye=[e]:Ye.push(e))}let Pe=null,Fe=0,Ge=null;function ss(e){Ge=e}let Li=1,tn=0,nn=tn;function Mi(e){nn=e}function Di(){return++Li}function jn(e){var t=e.f;if((t&we)!==0)return!0;if(t&ge&&(e.f&=~Wt),(t&Qe)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(jn(o)&&li(o),o.wv>e.wv)return!0}(t&He)!==0&&_e===null&&fe(e,be)}return!1}function Ni(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Ye!==null&&Et.call(Ye,e)))for(var a=0;a<r.length;a++){var o=r[a];(o.f&ge)!==0?Ni(o,t,!1):t===o&&(n?fe(o,we):(o.f&be)!==0&&fe(o,Qe),ra(o))}}function Ui(e){var x;var t=Pe,n=Fe,r=Ge,a=N,o=Ye,s=Oe,l=nt,f=nn,c=e.f;Pe=null,Fe=0,Ge=null,N=(c&(st|Dt))===0?e:null,Ye=null,vn(e.ctx),nt=!1,nn=++tn,e.ac!==null&&(rr(()=>{e.ac.abort(Ct)}),e.ac=null);try{e.f|=Rr;var h=e.fn,g=h();e.f|=Nt;var p=e.deps,m=P==null?void 0:P.is_fork;if(Pe!==null){var b;if(m||zn(e,Fe),p!==null&&Fe>0)for(p.length=Fe+Pe.length,b=0;b<Pe.length;b++)p[Fe+b]=Pe[b];else e.deps=p=Pe;if(ia()&&(e.f&He)!==0)for(b=Fe;b<p.length;b++)((x=p[b]).reactions??(x.reactions=[])).push(e)}else!m&&p!==null&&Fe<p.length&&(zn(e,Fe),p.length=Fe);if(za()&&Ge!==null&&!nt&&p!==null&&(e.f&(ge|Qe|we))===0)for(b=0;b<Ge.length;b++)Ni(Ge[b],e);if(a!==null&&a!==e){if(tn++,a.deps!==null)for(let T=0;T<n;T+=1)a.deps[T].rv=tn;if(t!==null)for(const T of t)T.rv=tn;Ge!==null&&(r===null?r=Ge:r.push(...Ge))}return(e.f&Ft)!==0&&(e.f^=Ft),g}catch(T){return Wa(T)}finally{e.f^=Rr,Pe=t,Fe=n,Ge=r,N=a,Ye=o,vn(s),nt=l,nn=f}}function cs(e,t){let n=t.reactions;if(n!==null){var r=he.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&ge)!==0&&(Pe===null||!Et.call(Pe,t))){var o=t;(o.f&He)!==0&&(o.f^=He,o.f&=~Wt),Ur(o),Rl(o),zn(o,0)}}function zn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)cs(e,n[r])}function mn(e){var t=e.f;if((t&et)===0){fe(e,be);var n=V,r=pr;V=e,pr=!0;try{(t&(Mt|$r))!==0?ps(e):la(e),Bi(e);var a=Ui(e);e.teardown=typeof a=="function"?a:null,e.wv=Li;var o;X&&Xo&&(e.f&we)!==0&&e.deps}finally{pr=r,V=n}}}async function rn(){await Promise.resolve(),Z()}function i(e){var t=e.f,n=(t&ge)!==0;if(N!==null&&!nt){var r=V!==null&&(V.f&et)!==0;if(!r&&(Ye===null||!Et.call(Ye,e))){var a=N.deps;if((N.f&Rr)!==0)e.rv<tn&&(e.rv=tn,Pe===null&&a!==null&&a[Fe]===e?Fe++:Pe===null?Pe=[e]:Pe.push(e));else{(N.deps??(N.deps=[])).push(e);var o=e.reactions;o===null?e.reactions=[N]:Et.call(o,N)||o.push(N)}}}if(Kt&&Ht.has(e))return Ht.get(e);if(n){var s=e;if(Kt){var l=s.v;return((s.f&be)===0&&s.reactions!==null||Vi(s))&&(l=Kr(s)),Ht.set(s,l),l}var f=(s.f&He)===0&&!nt&&N!==null&&(pr||(N.f&He)!==0),c=(s.f&Nt)===0;jn(s)&&(f&&(s.f|=He),li(s)),f&&!c&&(si(s),Fi(s))}if(_e!=null&&_e.has(e))return _e.get(e);if((e.f&Ft)!==0)throw e.v;return e.v}function Fi(e){if(e.f|=He,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ge)!==0&&(t.f&He)===0&&(si(t),Fi(t))}function Vi(e){if(e.v===me)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Ht.has(t)||(t.f&ge)!==0&&Vi(t))return!0;return!1}function Bn(e){var t=nt;try{return nt=!0,e()}finally{nt=t}}function us(e){V===null&&(N===null&&Ko(),Ho()),Kt&&Bo()}function fs(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function rt(e,t){var n=V;n!==null&&(n.f&ct)!==0&&(e|=ct);var r={ctx:Oe,deps:null,nodes:null,f:e|we|He,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null},a=r;if((e&dn)!==0)bn!==null?bn.push(r):Bt.ensure().schedule(r);else if(t!==null){try{mn(r)}catch(s){throw ke(r),s}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&qt)===0&&(a=a.first,(e&Mt)!==0&&(e&Ut)!==0&&a!==null&&(a.f|=Ut))}if(a!==null&&(a.parent=n,n!==null&&fs(a,n),N!==null&&(N.f&ge)!==0&&(e&Dt)===0)){var o=N;(o.effects??(o.effects=[])).push(a)}return r}function ia(){return N!==null&&!nt}function gr(e){const t=rt(tr,null);return fe(t,be),t.teardown=e,t}function Ve(e){us();var t=V.f,n=!N&&(t&st)!==0&&(t&Nt)===0;if(n){var r=Oe;(r.e??(r.e=[])).push(e)}else return ji(e)}function ji(e){return rt(dn|No,e)}function ds(e){Bt.ensure();const t=rt(Dt|qt,e);return()=>{ke(t)}}function hs(e){Bt.ensure();const t=rt(Dt|qt,e);return(n={})=>new Promise(r=>{n.outro?Kn(t,()=>{ke(t),r(void 0)}):(ke(t),r(void 0))})}function oa(e){return rt(dn,e)}function vs(e){return rt(Ir|qt,e)}function br(e,t=0){return rt(tr|t,e)}function Ee(e,t=[],n=[],r=[]){ci(r,t,n,a=>{rt(tr,()=>e(...a.map(i)))})}function Hn(e,t=0){var n=rt(Mt|t,e);return n}function zi(e,t=0){var n=rt($r|t,e);return n}function pt(e){return rt(st|qt,e)}function Bi(e){var t=e.teardown;if(t!==null){const n=Kt,r=N;Oi(!0),Ke(null);try{t.call(null)}finally{Oi(n),Ke(r)}}}function la(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&rr(()=>{a.abort(Ct)});var r=n.next;(n.f&Dt)!==0?n.parent=null:ke(n,t),n=r}}function ps(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&st)===0&&ke(t),t=n}}function ke(e,t=!0){var n=!1;(t||(e.f&Do)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Hi(e.nodes.start,e.nodes.end),n=!0),fe(e,Ar),la(e,t&&!n),zn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Bi(e),e.f^=Ar,e.f|=et;var a=e.parent;a!==null&&a.first!==null&&Ki(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Hi(e,t){for(;e!==null;){var n=e===t?null:dt(e);e.remove(),e=n}}function Ki(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Kn(e,t,n=!0){var r=[];Yi(e,r,!0);var a=()=>{n&&ke(e),t&&t()},o=r.length;if(o>0){var s=()=>--o||a();for(var l of r)l.out(s)}else a()}function Yi(e,t,n){if((e.f&ct)===0){e.f^=ct;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next,s=(a.f&Ut)!==0||(a.f&st)!==0&&(e.f&Mt)!==0;Yi(a,t,s?n:!1),a=o}}}function gs(e){Gi(e,!0)}function Gi(e,t){if((e.f&ct)!==0){e.f^=ct,(e.f&be)===0&&(fe(e,we),Bt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Ut)!==0||(n.f&st)!==0;Gi(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const s of o)(s.is_global||t)&&s.in()}}function qi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:dt(n);t.append(n),n=a}}function Wi(e){const t={get:n=>Dn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Dn(t.store),{[n]:r}):Object.assign(Dn(t.store),n),t.store.set(Dn(t.store))},store:rs(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Wi({}),i18n:Wi({}),instances:new Set,plugins:new Set};const bs={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",bs);const ms="5";typeof window<"u"&&((lo=window.__svelte??(window.__svelte={})).v??(lo.v=new Set)).add(ms);var ys=ae('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function Zi(e,t){St(t,!0);let n=ie(t,"loading"),r=fr(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(h){n(h),Z()}},l=ys(),f=oe(l);ur(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),jt(f,h=>a=h,()=>a);var c=re(f,2);return Pr(2),ee(l),Ee(()=>Y(l,"data-loading",n())),ar("click",c,o),z(e,l),$t(s)}ir(["click"]),zt(Zi,{loading:{}},[],[],{mode:"open"});var ws=ae('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function Ji(e,t){St(t,!0);let n=ie(t,"loading"),r=fr(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Z()}},o=ws(),s=oe(o);return ur(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Pr(2),ee(o),Ee(()=>Y(o,"data-loading",n())),z(e,o),$t(a)}zt(Ji,{loading:{}},[],[],{mode:"open"});var _s=ae('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function sa(e,t){St(t,!0);let n=ie(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),Z()}},o=_s(),s=oe(o);return Y(s,"href",r),ee(o),Ee(()=>Y(s,"aria-label",n().ariaLinkLabel)),z(e,o),$t(a)}zt(sa,{strings:{}},[],[],{mode:"open"});var ks=ae('<div class="altcha-footer"><p></p> <!></div>');function ca(e,t){St(t,!0);let n=ie(t,"logo"),r=ie(t,"strings");var a={get logo(){return n()},set logo(c){n(c),Z()},get strings(){return r()},set strings(c){r(c),Z()}},o=ks(),s=oe(o);fi(s,()=>r().footer,!0),ee(s);var l=re(s,2);{var f=c=>{sa(c,{get strings(){return r()}})};pe(l,c=>{n()&&c(f)})}return ee(o),z(e,o),$t(a)}zt(ca,{logo:{},strings:{}},[],[],{mode:"open"});var xs=ae('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function Xi(e,t){St(t,!0);let n=ie(t,"loading"),r=fr(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var s={get loading(){return n()},set loading(h){n(h),Z()}},l=xs(),f=oe(l);ur(f,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),jt(f,h=>a=h,()=>a);var c=re(f,2);return ee(l),Ee(()=>Y(l,"data-loading",n())),ar("click",c,o),z(e,l),$t(s)}ir(["click"]),zt(Xi,{loading:{}},[],[],{mode:"open"});var xe=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(xe||{}),K=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(K||{}),Es=ae('<div class="altcha-code-challenge-title"> </div>'),Cs=ae('<div class="altcha-spinner"></div>'),Ss=zr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),$s=zr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),Ts=zr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),As=ae('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),Rs=ae('<audio hidden="" autoplay=""></audio>'),Is=ae('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function Qi(e,t){St(t,!0);let n=ie(t,"audioUrl"),r=ie(t,"codeChallenge"),a=ie(t,"config"),o=ie(t,"imageUrl"),s=ie(t,"onCancel"),l=ie(t,"onReload"),f=ie(t,"onSubmit"),c=ie(t,"strings"),h=j(void 0),g=j(void 0),p=j(void 0),m=j(!1),b=j(""),x=j(!1);Qr(()=>(a().disableAutoFocus||rn().then(()=>{var k;(k=i(p))==null||k.focus()}),()=>{i(g)&&(i(g).pause(),E(g,void 0))}));function T(){E(h,xe.PAUSED,!0)}function S(k){E(h,xe.ERROR,!0)}function G(){E(h,xe.READY,!0)}function le(){E(h,xe.LOADING,!0)}function B(){E(h,xe.PLAYING,!0)}function Se(){E(h,xe.PAUSED,!0)}function H(k){var q;k.code==="Space"?(k.preventDefault(),k.stopPropagation(),te()):k.code==="Escape"&&(k.preventDefault(),k.stopPropagation(),(q=s())==null||q())}function $(k){var q;k.preventDefault(),k.stopPropagation(),(q=f())==null||q(i(b))}function te(){i(g)?i(h)===xe.LOADING||(i(g).paused?(n()&&i(g).src!==n()&&(i(g).src=n()),i(g).currentTime=0,i(g).play()):i(g).pause()):(E(x,!0),requestAnimationFrame(()=>{i(g)&&n()&&(i(g).src=n(),i(g).play())}))}var Ie={get audioUrl(){return n()},set audioUrl(k){n(k),Z()},get codeChallenge(){return r()},set codeChallenge(k){r(k),Z()},get config(){return a()},set config(k){a(k),Z()},get imageUrl(){return o()},set imageUrl(k){o(k),Z()},get onCancel(){return s()},set onCancel(k){s(k),Z()},get onReload(){return l()},set onReload(k){l(k),Z()},get onSubmit(){return f()},set onSubmit(k){f(k),Z()},get strings(){return c()},set strings(k){c(k),Z()}},L=Is(),de=oe(L),yt=oe(de);{var Be=k=>{var q=Es(),un=oe(q,!0);ee(q),Ee(()=>ht(un,c().verificationRequired)),z(k,q)};pe(yt,k=>{a().codeChallengeDisplay!=="standard"&&k(Be)})}var Me=re(yt,2),se=oe(Me,!0);ee(Me);var wt=re(Me,2),C=re(wt,2),W=oe(C);Wr(W),W.disabled=i(m),jt(W,k=>E(p,k),()=>i(p));var $e=re(W,2);{var y=k=>{var q=As(),un=oe(q);{var pa=De=>{var _t=Cs();z(De,_t)},Xn=De=>{var _t=Ss();z(De,_t)},ga=De=>{var _t=$s();z(De,_t)},ba=De=>{var _t=Ts();z(De,_t)};pe(un,De=>{i(h)===xe.LOADING?De(pa):i(h)===xe.ERROR?De(Xn,1):i(h)===xe.PLAYING?De(ga,2):De(ba,-1)})}ee(q),Ee(()=>{Y(q,"title",c().getAudioChallenge),q.disabled=i(h)===xe.LOADING||i(h)===xe.ERROR,Y(q,"aria-label",i(h)===xe.LOADING?c().loading:c().getAudioChallenge)}),ve("click",q,()=>te(),!0),z(k,q)};pe($e,k=>{r().audio&&k(y)})}var sn=re($e,2);ee(C);var _r=re(C,2),Ze=oe(_r),va=oe(Ze,!0);ee(Ze);var cn=re(Ze,2),Wn=oe(cn,!0);ee(cn),ee(_r),ee(de);var Zn=re(de,2);{var Jn=k=>{var q=Rs();jt(q,un=>E(g,un),()=>i(g)),ve("error",q,S),ve("loadstart",q,le),ve("canplay",q,G),ve("pause",q,Se),ve("playing",q,B),ve("ended",q,T),z(k,q)};pe(Zn,k=>{i(x)&&k(Jn)})}return ee(L),Ee(()=>{ht(se,c().enterCodeFromImage),Y(wt,"src",o()),Y(W,"minlength",r().length||1),Y(W,"maxlength",r().length),Y(W,"placeholder",c().enterCode),Y(W,"aria-label",i(h)===xe.LOADING?c().loading:i(h)===xe.PLAYING?"":c().enterCodeAria),Y(W,"aria-live",i(h)?"assertive":"polite"),Y(W,"aria-busy",i(h)===xe.LOADING),Y(sn,"title",c().reload),Y(sn,"aria-label",c().reload),Y(Ze,"aria-label",c().verify),ht(va,c().verify),Y(cn,"aria-label",c().cancel),ht(Wn,c().cancel)}),ve("submit",de,$,!0),ar("keydown",W,H),Xl(W,()=>i(b),k=>E(b,k)),ve("click",sn,()=>{var k;return(k=l())==null?void 0:k()},!0),ve("click",cn,()=>{var k;return(k=s())==null?void 0:k()},!0),z(e,L),$t(Ie)}ir(["keydown"]),zt(Qi,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Os=ae('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Ps=ae('<div class="altcha-popover-arrow"></div>'),Ls=ae('<div role="button" class="altcha-popover-close">&times;</div>'),Ms=ae('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function ua(e,t){St(t,!0);let n=ie(t,"anchor"),r=ie(t,"children"),a=ie(t,"display",7,"standard"),o=ie(t,"backdrop",7,!1),s=ie(t,"onClickOutside"),l=ie(t,"onClickOutsideDelay",7,600),f=ie(t,"onClose"),c=ie(t,"placement",7,"auto"),h=ie(t,"updateUISignal"),g=ie(t,"variant",7,"neutral"),p=fr(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),m=j(void 0),b=j(void 0),x=j(!1),T=j(0);Ve(()=>{c()!=="auto"&&E(x,c()==="top")}),Ve(()=>{h()&&Se()}),Qr(()=>{const C=a()==="bottomsheet"||a()==="overlay";return C&&(i(b)&&document.body.append(i(b)),i(m)&&document.body.append(i(m))),Se(),rn().then(()=>{E(T,Date.now(),!0)}),()=>{C&&(i(b)&&document.body.removeChild(i(b)),i(m)&&document.body.removeChild(i(m)))}});function S(){var C;(C=f())==null||C()}function G(C){var $e,y;const W=C.target;!(($e=i(m))!=null&&$e.contains(W))&&(!l()||i(T)+l()<Date.now())&&((y=s())==null||y())}function le(){Se()}function B(){Se()}function Se(){if(n()&&c()==="auto"&&i(m)){const C=n().getBoundingClientRect(),$e=document.documentElement.clientHeight-(C.top+C.height)<i(m).clientHeight;i(x)!==$e&&E(x,$e)}}var H={get anchor(){return n()},set anchor(C){n(C),Z()},get children(){return r()},set children(C){r(C),Z()},get display(){return a()},set display(C="standard"){a(C),Z()},get backdrop(){return o()},set backdrop(C=!1){o(C),Z()},get onClickOutside(){return s()},set onClickOutside(C){s(C),Z()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(C=600){l(C),Z()},get onClose(){return f()},set onClose(C){f(C),Z()},get placement(){return c()},set placement(C="auto"){c(C),Z()},get updateUISignal(){return h()},set updateUISignal(C){h(C),Z()},get variant(){return g()},set variant(C="neutral"){g(C),Z()}},$=Ms();ve("click",Qt,G,!0),ve("resize",Qt,le),ve("scroll",Qt,B);var te=pn($);{var Ie=C=>{var W=Os();jt(W,$e=>E(b,$e),()=>i(b)),z(C,W)};pe(te,C=>{o()&&C(Ie)})}var L=re(te,2);ur(L,()=>({...p,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":g(),"data-top":i(x),"data-display":a()}));var de=oe(L);{var yt=C=>{var W=Ps();z(C,W)};pe(de,C=>{a()==="standard"&&C(yt)})}var Be=re(de,2);{var Me=C=>{var W=Ls();ve("click",W,S,!0),z(C,W)};pe(Be,C=>{a()!=="standard"&&C(Me)})}var se=re(Be,2),wt=oe(se);return Ll(wt,()=>r()??Lt),ee(se),ee(L),jt(L,C=>E(m,C),()=>i(m)),z(e,$),$t(H)}zt(ua,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function Ds(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Ns(e,t="altcha-css"){if(typeof document<"u"&&document&&!document.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=e,document.head.appendChild(n)}}async function eo(e){var p;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=m=>m>1?Math.floor(m/2):0,counterMode:s,timeout:l=9e4}=e,f=Math.min(16,Math.max(1,n)),c=[],h=()=>{for(const m of c)m.terminate()};for(let m=0;m<f;m++)c.push(await a(t.parameters.algorithm));let g=null;try{g=await Promise.race(c.map((m,b)=>(r.signal.addEventListener("abort",()=>{m.postMessage({type:"abort"})}),new Promise((x,T)=>{m.addEventListener("error",S=>{T(S)}),m.addEventListener("message",S=>{if(S.data){for(const G of c)G!==m&&G.postMessage({type:"abort"});if(S.data.error)return T(new Error(S.data.error))}x(S.data)}),m.postMessage({challenge:t,counterMode:s,counterStart:b,counterStep:f,timeout:l,type:"work"})}))))}catch(m){if(m instanceof Error&&!!((p=m==null?void 0:m.message)!=null&&p.includes("Out of memory"))&&o){h();const x=o(f);if(x)return eo({...e,challenge:t,controller:r,concurrency:x,createWorker:a})}throw m}finally{h()}return r.signal.aborted?null:g||null}class Us{constructor(t={}){I(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});I(this,"maxSamples");I(this,"sampleInterval");I(this,"target");I(this,"focusStartTime",0);I(this,"focusInteraction",0);I(this,"focusInteractionTimer",null);I(this,"lastPointerSample",0);I(this,"lastTouchSample",0);I(this,"lastScrollSample",0);I(this,"pendingPointer",null);I(this,"pendingTouch",null);I(this,"focus",[]);I(this,"pointer",[]);I(this,"scroll",[]);I(this,"touch",[]);I(this,"onFocus",t=>{if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)});I(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});I(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});I(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});I(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var Fs=ae('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Vs=ae('<div class="altcha-overlay-content"></div>'),js=ae('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),zs=ae('<div class="altcha-floating-arrow"></div>'),Bs=ae('<input type="hidden"/>'),Hs=ae('<div class="altcha-error">Secure context (HTTPS) required.</div>'),Ks=ae('<div class="altcha-error"> </div>'),Ys=ae('<div class="altcha-error"> </div>'),Gs=ae("<!> <!>",1),qs=ae('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function Ws(e,t){St(t,!0);const n=()=>xi(h,"$altchaDefaults",a),r=()=>xi(b,"$altchaI18nStore",a),[a,o]=as(),s='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',f=["ar","fa","he","ur"],{isSecureContext:c}=globalThis,{store:h}=globalThis.$altcha.defaults,g=navigator.hardwareConcurrency||2,p=navigator.deviceMemory||0,m=p&&p<=4?Math.min(4,g):g,b=globalThis.$altcha.i18n.store,x=t.$$host,T=(u,v)=>{rn().then(()=>{x==null||x.dispatchEvent(new CustomEvent(u,{detail:v}))})};let S=null,G=j(At(new URL(location.origin))),le=j(!1),B=j(null),Se=j(null),H=j(null),$=j(At(K.UNVERIFIED)),te=j(void 0),Ie=j(void 0),L=j(null),de=j(void 0),yt=j(null),Be=j(null),Me=j(null),se=j(null),wt=j(At([])),C=j(0),W=j(At({})),$e=j(!0);const y=Re(()=>({fetch:(u,v)=>fetch(u,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:m,...n(),...i(W)})),sn=Re(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),_r=Re(()=>Xs(i(y).type)),Ze=Re(()=>i(y).auto),va=Re(()=>i($)===K.VERIFYING),cn=Re(()=>!i(y).hideFooter),Wn=Re(()=>!i(y).hideLogo&&i(y).display!=="bar"),Zn=Re(()=>Qs(r(),[i(y).language,document.documentElement.lang,...navigator.languages])),Jn=Re(()=>f.includes(i(Zn).language)?"rtl":void 0),k=Re(()=>({...i(Zn).strings})),q=Re(()=>{var u,v,_;return(v=(u=i(B))==null?void 0:u.audio)!=null&&v.match(/^(https?:)?\//)?kr(i(B).audio,i(G),{language:i(y).audioChallengeLanguage||i(Zn).language}).toString():(_=i(B))==null?void 0:_.audio}),un=Re(()=>{var u,v,_;return(v=(u=i(B))==null?void 0:u.image)!=null&&v.match(/^(https?:)?\//)?kr(i(B).image,i(G)):(_=i(B))==null?void 0:_.image});Ve(()=>{Qn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Ve(()=>{if(t.configuration)try{Qn(JSON.parse(t.configuration))}catch{J("unable to parse the `configuration` attribute (JSON expected)")}}),Ve(()=>{i(H)!==i(y).display&&xr(i(y).display)}),Ve(()=>{i(le)&&i($)===K.VERIFYING&&E(le,!1)}),Ve(()=>{!i(le)&&i($)===K.VERIFIED&&E(le,!0)}),Ve(()=>{if(!i(le)){const u=ma();u&&u.checked&&(u.checked=!1)}}),Ve(()=>{var u;i($)===K.VERIFIED&&((u=ma())==null||u.setCustomValidity(""))}),Ve(()=>{if(i(Ze)==="onload"){const u=setTimeout(()=>{Tn()},1);return()=>{u&&clearTimeout(u)}}}),Ve(()=>{i(Be)&&J("error:",i(Be))}),Ve(()=>{i(se)&&i(y).setCookie&&hc(i(se),i(y).setCookie)}),Qr(()=>{var u,v,_,w;return J("mounted","3.0.8"),x&&globalThis.$altcha.instances.add(x),E(L,(u=i(de))==null?void 0:u.closest("form"),!0),(v=i(L))==null||v.addEventListener("reset",uo),(_=i(L))==null||_.addEventListener("submit",fo,{capture:!0}),(w=i(L))==null||w.addEventListener("focusin",co),pa(),i(y).humanInteractionSignature&&(J("human interaction signature enabled"),S=new Us),T("load"),c||J("secure context (HTTPS) required"),()=>{var R,A,U;ga(),x&&globalThis.$altcha.instances.delete(x),i(Me)&&clearTimeout(i(Me)),(R=i(L))==null||R.removeEventListener("reset",uo),(A=i(L))==null||A.removeEventListener("submit",fo,{capture:!0}),(U=i(L))==null||U.removeEventListener("focusin",co),S==null||S.destroy()}});function pa(){E(wt,[...globalThis.$altcha.plugins].map(u=>new u(x)),!0),J("activating plugins",i(wt).map(u=>u.constructor.name));for(const u of i(wt))u.activate()}async function Xn(u,...v){let _;for(const w of i(wt))_=await w[u].call(w,...v);return _}function ga(){for(const u of i(wt))u.destroy()}function ba(u){const[v,_]=u.salt.split("?"),w={};if(_)try{Object.assign(w,Object.fromEntries(new URLSearchParams(_).entries()))}catch{}const R={codeChallenge:u.codeChallenge,parameters:{algorithm:u.algorithm,cost:1,data:w,expiresAt:w!=null&&w.expires?parseInt(w.expires,10):void 0,keyLength:u.algorithm==="SHA-512"?64:u.algorithm==="SHA-384"?48:32,nonce:Ds(new TextEncoder().encode(u.salt)),keyPrefix:u.challenge,salt:""},signature:u.signature};return Object.defineProperties(R,{_originalSalt:{enumerable:!1,value:u.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),R}function De(u,v){return{algorithm:u.parameters.algorithm,challenge:u.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in u?u._originalSalt:u.parameters.nonce,signature:u.signature,took:v.time||0}}async function _t(u){await new Promise(v=>setTimeout(v,u))}async function so(u=i(y).challenge,v){const _=await Xn("onFetchChallenge",u);let w=null;if(_!==void 0)return _;if(typeof u=="string")if(u.match(/^(https?:)?\//)){J("fetching challenge from",(v==null?void 0:v.method)||"GET",u),E(G,new URL(u,location.origin),!0);const R=await i(y).fetch(u,{credentials:i(y).credentials||void 0,...v});await vo(R);const A=R.headers.get("x-altcha-config");A&&uc(A);const U=await R.json();if(U&&"his"in U&&U.his){if(J("requested HIS"),!S)throw new Error("Server requested HIS data but collector is disabled.");return so(kr(U.his.url,i(G)),{body:JSON.stringify({his:S.export()}),headers:{"content-type":"application/json"},method:"POST"})}U&&"hisResult"in U&&U.hisResult&&J("HIS result",U.hisResult),w=U}else{J("parsing JSON challenge");try{w=JSON.parse(u)}catch{throw new Error("Unable to parse JSON challenge.")}}else if(u&&typeof u=="object")try{w=JSON.parse(JSON.stringify(u))}catch{throw new Error("Unable to parse JSON challenge.")}if(Zs(w)&&(w=ba(w)),!Js(w))throw new Error("Challenge validation failed.");return w}function Zs(u){return typeof u=="object"&&"challenge"in u}function Js(u){return!!u&&typeof u=="object"&&"parameters"in u&&!!u.parameters&&typeof u.parameters=="object"&&"algorithm"in u.parameters&&"nonce"in u.parameters&&"salt"in u.parameters&&"keyPrefix"in u.parameters}function ma(){return document.getElementById(i(sn))}function Xs(u){switch(u){case"checkbox":return Zi;case"switch":return Xi;case"native":default:return Ji}}function Qs(u,v){const _=Object.keys(u).map(R=>R.toLowerCase());let w=v.reduce((R,A)=>(A=A.toLowerCase(),R||(u[A]?A:null)||_.find(U=>A.split("-")[0]===U.split("-")[0])||null),null);return u[w||""]||(w="en"),{language:w,strings:u[w]}}function ec(u){switch(u){case"bar":return i(y).barPlacement||"bottom";case"floating":return i(y).floatingPlacement||"auto";default:return}}function tc(u){var _;return[...((_=i(L))==null?void 0:_.querySelectorAll(s))||[]].reduce((w,R)=>{const A=R.name,U=R.value;return A&&U&&(w[A]=/\n/.test(U)?U.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):U),w},{})}function nc(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function kr(u,v,_){const w=new URL(u,v);if(w.search||(w.search=v.search),_)for(const R in _)_[R]!==void 0&&_[R]!==null&&w.searchParams.set(R,_[R]);return w.toString()}function rc(u){!i(le)&&u.currentTarget.checked?(u.preventDefault(),u.currentTarget.checked=!1,i($)!==K.VERIFYING&&Tn()):u.currentTarget.checked||(u.preventDefault(),Je())}function ac(u){i($)===K.VERIFYING?u.currentTarget.setCustomValidity(i(k).waitAlert):i(y).validationMessage&&u.currentTarget.setCustomValidity(i(y).validationMessage)}function ic(){xr(i(y).display),Je()}function oc(){Er()}function lc(u){const v=u.target;i(y).display==="floating"&&v&&!(x!=null&&x.contains(v))&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&i($)!==K.VERIFIED&&!i(y).floatingPersist&&ya()}function co(u){i(Ze)==="onfocus"&&i($)===K.UNVERIFIED&&Tn()}function uo(){xr(i(y).display),Je()}function fo(u){const v=u.target;(v==null?void 0:v.getAttribute("data-code-challenge"))!=="true"&&i(Ze)==="onsubmit"&&i($)===K.UNVERIFIED&&(u.preventDefault(),u.stopPropagation(),E(yt,u.submitter,!0),wa(),Tn().then(_=>{_&&!i(B)&&rn().then(()=>{ho(i(yt))})}))}function sc(u){u.persisted&&(xr(i(y).display),Je())}function cc(){Er()}function uc(u){var v,_;try{const w=JSON.parse(u);w&&typeof w=="object"&&Qn({serverVerificationFields:(v=w==null?void 0:w.sentinel)==null?void 0:v.fields,serverVerificationTimeZone:(_=w==null?void 0:w.sentinel)==null?void 0:_.timeZone,verifyUrl:w.verifyurl,...w})}catch(w){J("unable to configure from x-altcha-config header",w)}}function fc(u=20){var ye;if(!i(de))return;const v=i(y).floatingPlacement;if(!i(Ie)&&(E(Ie,(i(y).floatingAnchor instanceof HTMLElement?i(y).floatingAnchor:i(y).floatingAnchor?document.querySelector(i(y).floatingAnchor):(ye=i(L))==null?void 0:ye.querySelector(l))||i(L),!0),!i(Ie))){J("unable to find floating anchor element");return}const _=parseInt(i(y).floatingOffset,10)||12,w=i(Ie).getBoundingClientRect(),R=i(de).getBoundingClientRect(),A=document.documentElement.clientHeight,U=document.documentElement.clientWidth,Te=!v||v==="auto"?w.bottom+R.height+_+u>A:v==="top",ne=Math.max(u,Math.min(U-u-R.width,w.left+w.width/2-R.width/2));if(i(de).style.setProperty("--altcha-floating-left",`${ne}px`),i(de).style.setProperty("--altcha-floating-top",Te?`${w.top-(R.height+_)}px`:`${w.bottom+_}px`),i(de).setAttribute("data-floating-position",Te?"top":"bottom"),i(te)){const xt=i(te).getBoundingClientRect();i(te).style.left=w.left-ne+w.width/2-xt.width/2+"px"}}async function dc(u,v){const _=await Xn("onRequestServerVerification",u,v);if(_!==void 0)return _;if(J("requesting server verification from",i(y).verifyUrl),!i(y).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const w=await i(y).fetch(kr(i(y).verifyUrl,i(G)),{body:JSON.stringify({code:v,fields:i(y).serverVerificationFields?tc():void 0,payload:u,timeZone:i(y).serverVerificationTimeZone?nc():void 0}),credentials:i(y).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await vo(w);const R=await w.json();return R&&typeof R=="object"&&"payload"in R&&R.payload&&T("serververification",R),R}function ho(u){var v;i(L)&&"requestSubmit"in i(L)?i(L).requestSubmit(u):(v=i(L))!=null&&v.reportValidity()&&(u?u.click():i(L).submit())}function hc(u,v={}){const{domain:_,name:w=i(y).name,maxAge:R,path:A,sameSite:U,secure:Te}=v;let ne=`${encodeURIComponent(w)}=${encodeURIComponent(u)}`;_&&(ne+=`; Domain=${_}`),R!=null&&(ne+=`; Max-Age=${R}`),A&&(ne+=`; Path=${A}`),U&&(ne+=`; SameSite=${U}`),Te&&(ne+="; Secure"),document.cookie=ne}function xr(u){switch(u){case"bar":case"floating":case"overlay":ya(),(!i(Ze)||i(Ze)==="off")&&(i(W).auto="onsubmit");break;case"standard":wa()}i(H)!==u&&E(H,u,!0)}function vc(u){i(Me)&&clearTimeout(i(Me));const v=()=>{i($)!==K.UNVERIFIED?(E(le,!1),Xe(K.EXPIRED)):Je(),T("expired")},_=u*1e3-Date.now();_>=1?E(Me,setTimeout(v,_),!0):v()}async function vo(u){var _;if(u.status>=400){if((_=u.headers.get("content-type"))!=null&&_.includes("/json")){let w;try{w=await u.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${u.status} - ${w.error}`)}throw new Error(`Server responded with ${u.status}.`)}const v=u.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function po(u){var _;if(!i(se)){Xe(K.ERROR,"Cannot verify code challenge without PoW payload.");return}Xe(K.VERIFYING);let v=null;if(i(y).verifyUrl)v=await dc(i(se),u);else if(i(y).verifyFunction)v=await i(y).verifyFunction(i(se),u);else{Xe(K.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v!=null&&v.payload&&(E(se,v.payload,!0),J("server payload",i(se))),(v==null?void 0:v.verified)===!0?(J("verified"),Xe(K.VERIFIED),T("verified",{payload:i(se)}),i(Ze)==="onsubmit"&&rn().then(()=>{ho(i(yt))})):Xe(K.ERROR,(v==null?void 0:v.reason)||"Verification failed."),i(y).disableAutoFocus||(_=ma())==null||_.focus()}function Qn(u){Object.assign(i(W),{...Object.fromEntries(Object.entries(u).filter(([v,_])=>_!==void 0))})}function pc(){return{...i(y)}}function gc(){return i($)}function ya(){E($e,!1)}function J(...u){(i(y).debug||u.some(v=>v instanceof Error))&&console[u[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(y).name}]`,...u)}function Je(u=K.UNVERIFIED,v=null){E(le,!1),E(Be,v,!0),E(se,null),i(Se)&&i(Se).abort(),i(Me)&&(clearTimeout(i(Me)),E(Me,null)),Xe(u)}function Xe(u,v=null){E($,u,!0),E(Be,v,!0),T("statechange",{payload:i(se),state:i($)})}function wa(){E($e,!0),rn().then(()=>{Er()})}function Er(){switch(i(y).display){case"floating":return fc()}E(C,i(C)+1)}async function Tn(u={}){var ye,xt;const{concurrency:v=Math.max(1,i(y).workers),controller:_=new AbortController,minDuration:w=i(y).minDuration}=u,R=performance.now();let A=null,U=null,Te=!1;const ne=await Xn("onVerify",u);if(ne!==void 0)return ne;Je(K.VERIFYING),E(Se,_,!0);try{if(!c)throw new Error("Secure context (HTTPS) required.");if(i(y).mockError)throw new Error("Mock error.");if(i(y).test)return J("running test mode with null challenge"),await _t(Math.max(0,w-(performance.now()-R))),(ye=i(Se))!=null&&ye.signal.aborted?(Je(),null):(E(se,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),J("verified"),Xe(K.VERIFIED),T("verified",{payload:i(se)}),{payload:i(se)});if(A=await so(),!A)throw new Error("Failed to fetch challenge.");J("challenge",A),"configuration"in A&&(J("re-configuring from challenge",A.configuration),Qn(A.configuration)),A.parameters.expiresAt&&vc(A.parameters.expiresAt),Te="_version"in A&&A._version===1;const lt=globalThis.$altcha.algorithms.get(A.parameters.algorithm);if(!lt)throw new Error(`Unsupported algorithm ${A.parameters.algorithm}.`);if(U=await eo({challenge:A,concurrency:v,controller:_,createWorker:lt,counterMode:Te?"string":"uint32",onOutOfMemory:ko=>{if(J("out of memory error received"),T("outofmemory"),i(y).retryOnOutOfMemoryError&&ko>1){const xo=Math.floor(ko/2);return J(`retrying with ${xo} workers...`),xo}},timeout:i(y).timeout}),(xt=i(Se))!=null&&xt.signal.aborted)return Je(),null;if(!U)throw new Error("Failed to find solution.");J("solution",U),await _t(Math.max(0,w-(performance.now()-R))),E(B,A.codeChallenge||i(y).codeChallenge||null,!0),Te?E(se,btoa(JSON.stringify(De(A,U))),!0):E(se,btoa(JSON.stringify({challenge:{parameters:A.parameters,signature:A.signature},solution:U})),!0),i(B)?(J("requesting code verification"),Xe(K.CODE),T("codechallenge",{codeChallenge:i(B)})):i(y).verifyUrl?await po():(J("verified"),Xe(K.VERIFIED),T("verified",{payload:i(se)}))}catch(lt){return J("verification failed",lt),Xe(K.ERROR,String(lt)),null}finally{E(Se,null)}return{challenge:A,payload:i(se),solution:U}}var bc={configure:Qn,getConfiguration:pc,getState:gc,hide:ya,log:J,reset:Je,setState:Xe,show:wa,updateUI:Er,verify:Tn},go=qs();ve("scroll",Mr,oc),ve("click",Mr,lc),ve("pageshow",Qt,sc),ve("resize",Qt,cc);var bo=pn(go);{var mc=u=>{var v=Fs();z(u,v)};pe(bo,u=>{i(y).display==="overlay"&&i($e)&&u(mc)})}var kt=re(bo,2),mo=oe(kt);{var yc=u=>{var v=js(),_=pn(v),w=re(_,2);{var R=A=>{var U=Vs();fi(U,()=>{var Te;return(Te=document.querySelector(i(y).overlayContent))==null?void 0:Te.innerHTML},!0),ee(U),z(A,U)};pe(w,A=>{i(y).overlayContent&&A(R)})}ve("click",_,ic,!0),z(u,v)};pe(mo,u=>{i(y).display==="overlay"&&i($e)&&u(yc)})}var _a=re(mo,2),ka=oe(_a),xa=oe(ka),yo=oe(xa);{let u=Re(()=>i(y).display==="standard"&&i(Ze)!=="onsubmit"||i($)===K.VERIFYING);Ml(yo,()=>i(_r),(v,_)=>{_(v,{get id(){return i(sn)},name:"",get required(){return i(u)},get loading(){return i(va)},get checked(){return i(le)},onchange:rc,oninvalid:ac})})}var Ea=re(yo,2),wc=oe(Ea);{var _c=u=>{var v=or();Ee(()=>ht(v,i(k).verificationRequired)),z(u,v)},kc=u=>{var v=or();Ee(()=>ht(v,i(k).verifying)),z(u,v)},xc=u=>{var v=or();Ee(()=>ht(v,i(k).verified)),z(u,v)},Ec=u=>{var v=or();Ee(()=>ht(v,i(k).label)),z(u,v)};pe(wc,u=>{i($)===K.CODE&&i(B)?u(_c):i($)===K.VERIFYING?u(kc,1):i($)===K.VERIFIED?u(xc,2):u(Ec,-1)})}ee(Ea),ee(xa);var Cc=re(xa,2);{var Sc=u=>{sa(u,{get strings(){return i(k)}})};pe(Cc,u=>{i(Wn)&&u(Sc)})}ee(ka);var wo=re(ka,2);{var $c=u=>{{let v=Re(()=>i(y).display==="bar"&&i(Wn));ca(u,{get logo(){return i(v)},get strings(){return i(k)}})}};pe(wo,u=>{i(cn)&&u($c)})}var _o=re(wo,2);{var Tc=u=>{var v=zs();jt(v,_=>E(te,_),()=>i(te)),z(u,v)};pe(_o,u=>{i(y).display==="floating"&&u(Tc)})}var Ac=re(_o,2);{var Rc=u=>{var v=Bs();Wr(v),Ee(()=>{Y(v,"name",i(y).name),Wl(v,i(se))}),z(u,v)};pe(Ac,u=>{i(y).setCookie||u(Rc)})}ee(_a);var Ic=re(_a,2);{var Oc=u=>{ua(u,{get anchor(){return i(de)},onClickOutside:()=>{c&&Je()},get placement(){return i(y).popoverPlacement},role:"alert",variant:"error",get dir(){return i(Jn)},get updateUISignal(){return i(C)},children:(v,_)=>{var w=ai(),R=pn(w);{var A=ne=>{var ye=Hs();z(ne,ye)},U=ne=>{var ye=Ks(),xt=oe(ye,!0);ee(ye),Ee(()=>ht(xt,i(k).expired)),z(ne,ye)},Te=ne=>{var ye=Ys(),xt=oe(ye,!0);ee(ye),Ee(()=>{Y(ye,"title",i(Be)),ht(xt,i(k).error)}),z(ne,ye)};pe(R,ne=>{!i(Be)&&!c?ne(A):!i(Be)&&i($)===K.EXPIRED?ne(U,1):ne(Te,-1)})}z(v,w)},$$slots:{default:!0}})},Pc=u=>{var v=ai(),_=pn(v);Pl(_,()=>i(B),w=>{{let R=Re(()=>i(y).codeChallengeDisplay!=="standard");ua(w,{get anchor(){return i(de)},get backdrop(){return i(R)},get display(){return i(y).codeChallengeDisplay},onClose:()=>{Je()},get placement(){return i(y).popoverPlacement},role:"dialog",get"aria-label"(){return i(k).verificationRequired},get dir(){return i(Jn)},get updateUISignal(){return i(C)},children:(A,U)=>{var Te=Gs(),ne=pn(Te);Qi(ne,{get audioUrl(){return i(q)},get imageUrl(){return i(un)},onCancel:()=>Je(),onReload:()=>Tn(),onSubmit:lt=>po(lt),get codeChallenge(){return i(B)},get config(){return i(y)},get strings(){return i(k)}});var ye=re(ne,2);{var xt=lt=>{ca(lt,{get logo(){return i(Wn)},get strings(){return i(k)}})};pe(ye,lt=>{i(cn)&&i(y).codeChallengeDisplay!=="standard"&&lt(xt)})}z(A,Te)},$$slots:{default:!0}})}}),z(u,v)};pe(Ic,u=>{i(Be)||i($)===K.EXPIRED||!c?u(Oc):i(B)&&i($)===K.CODE&&u(Pc,1)})}ee(kt),jt(kt,u=>E(de,u),()=>i(de)),Ee(u=>{Y(kt,"data-state",i($)),Y(kt,"data-display",i(y).display||void 0),Y(kt,"data-placement",u),Y(kt,"data-visible",i($e)||void 0),Y(kt,"dir",i(Jn)),Y(Ea,"for",i(sn)),kt.dir=kt.dir},[()=>ec(i(y).display)]),z(e,go);var Lc=$t(bc);return o(),Lc}typeof window<"u"&&window.customElements&&customElements.define("altcha-widget",zt(Ws,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const to=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,no=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",to],{type:"text/javascript;charset=utf-8"});function fa(e){let t;try{if(t=no&&(self.URL||self.webkitURL).createObjectURL(no),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(to),{name:e==null?void 0:e.name})}}const ro=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,ao=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ro],{type:"text/javascript;charset=utf-8"});function da(e){let t;try{if(t=ao&&(self.URL||self.webkitURL).createObjectURL(ao),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ro),{name:e==null?void 0:e.name})}}return Ns(`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`),$altcha.algorithms.set("SHA-256",()=>new da),$altcha.algorithms.set("SHA-384",()=>new da),$altcha.algorithms.set("SHA-512",()=>new da),$altcha.algorithms.set("PBKDF2/SHA-256",()=>new fa),$altcha.algorithms.set("PBKDF2/SHA-384",()=>new fa),$altcha.algorithms.set("PBKDF2/SHA-512",()=>new fa),Co}Nc();
