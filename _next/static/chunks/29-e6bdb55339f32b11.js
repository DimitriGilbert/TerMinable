(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29],{9412:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_3a0388",variable:"__variable_3a0388"}},3374:(e,t,r)=>{"use strict";r.d(t,{Content:()=>eh,Indicator:()=>eg,Item:()=>ep,Link:()=>ew,List:()=>ef,Root:()=>ev,Trigger:()=>em,Viewport:()=>eb});var n=r(2115),o=r(7650),i=r(8166),a=r(3610),l=r(3360),u=r(1488),s=r(8068),c=r(4256),d=r(7028),v=r(7668),f=r(9741),p=r(9674),m=r(6611),w=r(1524),g=r(5155),h=n.forwardRef((e,t)=>(0,g.jsx)(l.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));h.displayName="VisuallyHidden";var b="NavigationMenu",[y,x,C]=(0,f.N)(b),[j,E,R]=(0,f.N)(b),[N,O]=(0,i.A)(b,[C,R]),[P,T]=N(b),[M,k]=N(b),_=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,onValueChange:i,defaultValue:a,delayDuration:d=200,skipDelayDuration:v=300,orientation:f="horizontal",dir:p,...m}=e,[w,h]=n.useState(null),b=(0,s.s)(t,e=>h(e)),y=(0,c.jH)(p),x=n.useRef(0),C=n.useRef(0),j=n.useRef(0),[E,R]=n.useState(!0),[N="",O]=(0,u.i)({prop:o,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(j.current),t&&R(!1)):(window.clearTimeout(j.current),j.current=window.setTimeout(()=>R(!0),v)),null==i||i(e)},defaultProp:a}),P=n.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>O(""),150)},[O]),T=n.useCallback(e=>{window.clearTimeout(C.current),O(e)},[O]),M=n.useCallback(e=>{N===e?window.clearTimeout(C.current):x.current=window.setTimeout(()=>{window.clearTimeout(C.current),O(e)},d)},[N,O,d]);return n.useEffect(()=>()=>{window.clearTimeout(x.current),window.clearTimeout(C.current),window.clearTimeout(j.current)},[]),(0,g.jsx)(S,{scope:r,isRootMenu:!0,value:N,dir:y,orientation:f,rootNavigationMenu:w,onTriggerEnter:e=>{window.clearTimeout(x.current),E?M(e):T(e)},onTriggerLeave:()=>{window.clearTimeout(x.current),P()},onContentEnter:()=>window.clearTimeout(C.current),onContentLeave:P,onItemSelect:e=>{O(t=>t===e?"":e)},onItemDismiss:()=>O(""),children:(0,g.jsx)(l.sG.nav,{"aria-label":"Main","data-orientation":f,dir:y,...m,ref:b})})});_.displayName=b;var I="NavigationMenuSub";n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:n,onValueChange:o,defaultValue:i,orientation:a="horizontal",...s}=e,c=T(I,r),[d="",v]=(0,u.i)({prop:n,onChange:o,defaultProp:i});return(0,g.jsx)(S,{scope:r,isRootMenu:!1,value:d,dir:c.dir,orientation:a,rootNavigationMenu:c.rootNavigationMenu,onTriggerEnter:e=>v(e),onItemSelect:e=>v(e),onItemDismiss:()=>v(""),children:(0,g.jsx)(l.sG.div,{"data-orientation":a,...s,ref:t})})}).displayName=I;var S=e=>{let{scope:t,isRootMenu:r,rootNavigationMenu:o,dir:i,orientation:a,children:l,value:u,onItemSelect:s,onItemDismiss:c,onTriggerEnter:d,onTriggerLeave:f,onContentEnter:p,onContentLeave:m}=e,[h,b]=n.useState(null),[x,C]=n.useState(new Map),[j,E]=n.useState(null);return(0,g.jsx)(P,{scope:t,isRootMenu:r,rootNavigationMenu:o,value:u,previousValue:function(e){let t=n.useRef({value:e,previous:e});return n.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,v.B)(),dir:i,orientation:a,viewport:h,onViewportChange:b,indicatorTrack:j,onIndicatorTrackChange:E,onTriggerEnter:(0,w.c)(d),onTriggerLeave:(0,w.c)(f),onContentEnter:(0,w.c)(p),onContentLeave:(0,w.c)(m),onItemSelect:(0,w.c)(s),onItemDismiss:(0,w.c)(c),onViewportContentChange:n.useCallback((e,t)=>{C(r=>(r.set(e,t),new Map(r)))},[]),onViewportContentRemove:n.useCallback(e=>{C(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,g.jsx)(y.Provider,{scope:t,children:(0,g.jsx)(M,{scope:t,items:x,children:l})})})},D="NavigationMenuList",L=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=T(D,r),i=(0,g.jsx)(l.sG.ul,{"data-orientation":o.orientation,...n,ref:t});return(0,g.jsx)(l.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,g.jsx)(y.Slot,{scope:r,children:o.isRootMenu?(0,g.jsx)(er,{asChild:!0,children:i}):i})})});L.displayName=D;var F="NavigationMenuItem",[A,G]=N(F),K=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,...i}=e,a=(0,v.B)(),u=n.useRef(null),s=n.useRef(null),c=n.useRef(null),d=n.useRef(()=>{}),f=n.useRef(!1),p=n.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){d.current();let t=ei(u.current);t.length&&ea("start"===e?t:t.reverse())}},[]),m=n.useCallback(()=>{if(u.current){let e=ei(u.current);e.length&&(d.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,g.jsx)(A,{scope:r,value:o||a||"LEGACY_REACT_AUTO_VALUE",triggerRef:s,contentRef:u,focusProxyRef:c,wasEscapeCloseRef:f,onEntryKeyDown:p,onFocusProxyEnter:p,onRootContentClose:m,onContentFocusOutside:m,children:(0,g.jsx)(l.sG.li,{...i,ref:t})})});K.displayName=F;var V="NavigationMenuTrigger",z=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,disabled:o,...i}=e,u=T(V,e.__scopeNavigationMenu),c=G(V,e.__scopeNavigationMenu),d=n.useRef(null),v=(0,s.s)(d,c.triggerRef,t),f=es(u.baseId,c.value),p=ec(u.baseId,c.value),m=n.useRef(!1),w=n.useRef(!1),b=c.value===u.value;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y.ItemSlot,{scope:r,value:c.value,children:(0,g.jsx)(eo,{asChild:!0,children:(0,g.jsx)(l.sG.button,{id:f,disabled:o,"data-disabled":o?"":void 0,"data-state":eu(b),"aria-expanded":b,"aria-controls":p,...i,ref:v,onPointerEnter:(0,a.m)(e.onPointerEnter,()=>{w.current=!1,c.wasEscapeCloseRef.current=!1}),onPointerMove:(0,a.m)(e.onPointerMove,ed(()=>{o||w.current||c.wasEscapeCloseRef.current||m.current||(u.onTriggerEnter(c.value),m.current=!0)})),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(()=>{o||(u.onTriggerLeave(),m.current=!1)})),onClick:(0,a.m)(e.onClick,()=>{u.onItemSelect(c.value),w.current=b}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];b&&e.key===t&&(c.onEntryKeyDown(),e.preventDefault())})})})}),b&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{"aria-hidden":!0,tabIndex:0,ref:c.focusProxyRef,onFocus:e=>{let t=c.contentRef.current,r=e.relatedTarget,n=r===d.current,o=null==t?void 0:t.contains(r);(n||!o)&&c.onFocusProxyEnter(n?"start":"end")}}),u.viewport&&(0,g.jsx)("span",{"aria-owns":p})]})]})});z.displayName=V;var W="navigationMenu.linkSelect",H=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,active:n,onSelect:o,...i}=e;return(0,g.jsx)(eo,{asChild:!0,children:(0,g.jsx)(l.sG.a,{"data-active":n?"":void 0,"aria-current":n?"page":void 0,...i,ref:t,onClick:(0,a.m)(e.onClick,e=>{let t=e.target,r=new CustomEvent(W,{bubbles:!0,cancelable:!0});if(t.addEventListener(W,e=>null==o?void 0:o(e),{once:!0}),(0,l.hO)(t,r),!r.defaultPrevented&&!e.metaKey){let e=new CustomEvent(J,{bubbles:!0,cancelable:!0});(0,l.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});H.displayName="NavigationMenuLink";var U="NavigationMenuIndicator",q=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,i=T(U,e.__scopeNavigationMenu),a=!!i.value;return i.indicatorTrack?o.createPortal((0,g.jsx)(d.C,{present:r||a,children:(0,g.jsx)(B,{...n,ref:t})}),i.indicatorTrack):null});q.displayName=U;var B=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...o}=e,i=T(U,r),a=x(r),[u,s]=n.useState(null),[c,d]=n.useState(null),v="horizontal"===i.orientation,f=!!i.value;n.useEffect(()=>{var e;let t=null===(e=a().find(e=>e.value===i.value))||void 0===e?void 0:e.ref.current;t&&s(t)},[a,i.value]);let p=()=>{u&&d({size:v?u.offsetWidth:u.offsetHeight,offset:v?u.offsetLeft:u.offsetTop})};return el(u,p),el(i.indicatorTrack,p),c?(0,g.jsx)(l.sG.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":i.orientation,...o,ref:t,style:{position:"absolute",...v?{left:0,width:c.size+"px",transform:"translateX(".concat(c.offset,"px)")}:{top:0,height:c.size+"px",transform:"translateY(".concat(c.offset,"px)")},...o.style}}):null}),Y="NavigationMenuContent",$=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=T(Y,e.__scopeNavigationMenu),i=G(Y,e.__scopeNavigationMenu),l=(0,s.s)(i.contentRef,t),u=i.value===o.value,c={value:i.value,triggerRef:i.triggerRef,focusProxyRef:i.focusProxyRef,wasEscapeCloseRef:i.wasEscapeCloseRef,onContentFocusOutside:i.onContentFocusOutside,onRootContentClose:i.onRootContentClose,...n};return o.viewport?(0,g.jsx)(X,{forceMount:r,...c,ref:l}):(0,g.jsx)(d.C,{present:r||u,children:(0,g.jsx)(Q,{"data-state":eu(u),...c,ref:l,onPointerEnter:(0,a.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...c.style}})})});$.displayName=Y;var X=n.forwardRef((e,t)=>{let{onViewportContentChange:r,onViewportContentRemove:n}=T(Y,e.__scopeNavigationMenu);return(0,m.N)(()=>{r(e.value,{ref:t,...e})},[e,t,r]),(0,m.N)(()=>()=>n(e.value),[e.value,n]),null}),J="navigationMenu.rootContentDismiss",Q=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,value:o,triggerRef:i,focusProxyRef:l,wasEscapeCloseRef:u,onRootContentClose:c,onContentFocusOutside:d,...v}=e,f=T(Y,r),m=n.useRef(null),w=(0,s.s)(m,t),h=es(f.baseId,o),b=ec(f.baseId,o),y=x(r),C=n.useRef(null),{onItemDismiss:j}=f;n.useEffect(()=>{let e=m.current;if(f.isRootMenu&&e){let t=()=>{var t;j(),c(),e.contains(document.activeElement)&&(null===(t=i.current)||void 0===t||t.focus())};return e.addEventListener(J,t),()=>e.removeEventListener(J,t)}},[f.isRootMenu,e.value,i,j,c]);let E=n.useMemo(()=>{let e=y().map(e=>e.value);"rtl"===f.dir&&e.reverse();let t=e.indexOf(f.value),r=e.indexOf(f.previousValue),n=o===f.value,i=r===e.indexOf(o);if(!n&&!i)return C.current;let a=(()=>{if(t!==r){if(n&&-1!==r)return t>r?"from-end":"from-start";if(i&&-1!==t)return t>r?"to-start":"to-end"}return null})();return C.current=a,a},[f.previousValue,f.value,f.dir,y,o]);return(0,g.jsx)(er,{asChild:!0,children:(0,g.jsx)(p.qW,{id:b,"aria-labelledby":h,"data-motion":E,"data-orientation":f.orientation,...v,ref:w,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(J,{bubbles:!0,cancelable:!0});null===(e=m.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,a.m)(e.onFocusOutside,e=>{var t;d();let r=e.target;(null===(t=f.rootNavigationMenu)||void 0===t?void 0:t.contains(r))&&e.preventDefault()}),onPointerDownOutside:(0,a.m)(e.onPointerDownOutside,e=>{var t;let r=e.target,n=y().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(r)}),o=f.isRootMenu&&(null===(t=f.viewport)||void 0===t?void 0:t.contains(r));(n||o||!f.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,a.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ei(e.currentTarget),n=document.activeElement,o=t.findIndex(e=>e===n);if(ea(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var r;null===(r=l.current)||void 0===r||r.focus()}}}),onEscapeKeyDown:(0,a.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),Z="NavigationMenuViewport",ee=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=!!T(Z,e.__scopeNavigationMenu).value;return(0,g.jsx)(d.C,{present:r||o,children:(0,g.jsx)(et,{...n,ref:t})})});ee.displayName=Z;var et=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,children:o,...i}=e,u=T(Z,r),c=(0,s.s)(t,u.onViewportChange),v=k(Y,e.__scopeNavigationMenu),[f,p]=n.useState(null),[m,w]=n.useState(null),h=f?(null==f?void 0:f.width)+"px":void 0,b=f?(null==f?void 0:f.height)+"px":void 0,y=!!u.value,x=y?u.value:u.previousValue;return el(m,()=>{m&&p({width:m.offsetWidth,height:m.offsetHeight})}),(0,g.jsx)(l.sG.div,{"data-state":eu(y),"data-orientation":u.orientation,...i,ref:c,style:{pointerEvents:!y&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":h,"--radix-navigation-menu-viewport-height":b,...i.style},onPointerEnter:(0,a.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,a.m)(e.onPointerLeave,ed(u.onContentLeave)),children:Array.from(v.items).map(e=>{let[t,{ref:r,forceMount:n,...o}]=e,i=x===t;return(0,g.jsx)(d.C,{present:n||i,children:(0,g.jsx)(Q,{...o,ref:(0,s.t)(r,e=>{i&&e&&w(e)})})},t)})})}),er=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=T("FocusGroup",r);return(0,g.jsx)(j.Provider,{scope:r,children:(0,g.jsx)(j.Slot,{scope:r,children:(0,g.jsx)(l.sG.div,{dir:o.dir,...n,ref:t})})})}),en=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],eo=n.forwardRef((e,t)=>{let{__scopeNavigationMenu:r,...n}=e,o=E(r),i=T("FocusGroupItem",r);return(0,g.jsx)(j.ItemSlot,{scope:r,children:(0,g.jsx)(l.sG.button,{...n,ref:t,onKeyDown:(0,a.m)(e.onKeyDown,e=>{if(["Home","End",...en].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===i.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),en.includes(e.key)){let r=t.indexOf(e.currentTarget);t=t.slice(r+1)}setTimeout(()=>ea(t)),e.preventDefault()}})})})});function ei(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}function ea(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function el(e,t){let r=(0,w.c)(t);(0,m.N)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}function eu(e){return e?"open":"closed"}function es(e,t){return"".concat(e,"-trigger-").concat(t)}function ec(e,t){return"".concat(e,"-content-").concat(t)}function ed(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ev=_,ef=L,ep=K,em=z,ew=H,eg=q,eh=$,eb=ee},1027:(e,t,r)=>{"use strict";r.d(t,{F:()=>a});var n=r(3463);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=n.$,a=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return i(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:l}=t,u=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],n=null==l?void 0:l[e];if(null===t)return null;let i=o(t)||o(n);return a[e][i]}),s=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return i(e,u,null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...o}=t;return Object.entries(o).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...s}[t]):({...l,...s})[t]===r})?[...e,r,n]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},7113:(e,t,r)=>{"use strict";r.d(t,{D:()=>l});var n=r(2115),o="undefined"==typeof window,i=n.createContext(void 0),a={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=n.useContext(i))?e:a}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>c});var n=r(2115),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>n.createElement(d,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:u}=e,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}}}]);