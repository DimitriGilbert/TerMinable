(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8856:(e,t,n)=>{Promise.resolve().then(n.bind(n,3374)),Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,9412,23)),Promise.resolve().then(n.bind(n,6531)),Promise.resolve().then(n.t.bind(n,5786,23))},6531:(e,t,n)=>{"use strict";n.d(t,{ThemeProvider:()=>m,ThemeToggle:()=>p});var r=n(5155),o=n(2115),a=n(3312),i=n(1536),s="undefined"==typeof window,u=o.createContext(void 0),l={setTheme:e=>{},themes:[]},d=()=>{var e;return null!=(e=o.useContext(u))?e:l},c=n(814);let v=e=>{let{...t}=e,{theme:n="system"}=d();return(0,r.jsx)(c.l$,{theme:n,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},f=(0,o.createContext)(null);function m(e){let{children:t,className:n}=e,[a,i]=(0,o.useState)("dark");return(0,o.useEffect)(()=>{"dark"===a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]),(0,r.jsx)(f.Provider,{value:{theme:a,toggleTheme:()=>{i(e=>"light"===e?"dark":"light")}},children:(0,r.jsxs)("body",{className:"dark"===a?"dark":"",children:[(0,r.jsx)("div",{className:n,children:t}),(0,r.jsx)(v,{})]})})}function p(){let{theme:e,toggleTheme:t}=function(){let e=(0,o.useContext)(f);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}();return(0,r.jsxs)(a.$,{variant:"ghost",size:"icon",onClick:t,className:"hover:bg-white/20",children:["dark"===e?(0,r.jsx)(i.wQq,{className:"h-[1.2rem] w-[1.2rem]"}):(0,r.jsx)(i.V6H,{className:"h-[1.2rem] w-[1.2rem]"}),(0,r.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},3312:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var r=n(5155),o=n(2115),a=n(2317),i=n(1027),s=n(1567);let u=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:n,variant:o,size:i,asChild:l=!1,...d}=e,c=l?a.DX:"button";return(0,r.jsx)(c,{className:(0,s.cn)(u({variant:o,size:i,className:n})),ref:t,...d})});l.displayName="Button"},1567:(e,t,n)=>{"use strict";n.d(t,{cn:()=>a});var r=n(3463),o=n(9795);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.QP)((0,r.$)(t))}},5786:()=>{},9412:e=>{e.exports={style:{fontFamily:"'GeistSans', 'GeistSans Fallback'"},className:"__className_2e86c7",variable:"__variable_2e86c7"}},3374:(e,t,n)=>{"use strict";n.d(t,{Content:()=>ew,Indicator:()=>eh,Item:()=>em,Link:()=>eg,List:()=>ef,Root:()=>ev,Trigger:()=>ep,Viewport:()=>ex});var r=n(2115),o=n(7650),a=n(8166),i=n(3610),s=n(3360),u=n(1488),l=n(8068),d=n(4256),c=n(7028),v=n(7668),f=n(9741),m=n(9674),p=n(6611),g=n(1524),h=n(5155),w=r.forwardRef((e,t)=>(0,h.jsx)(s.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));w.displayName="VisuallyHidden";var x="NavigationMenu",[b,y,C]=(0,f.N)(x),[R,E,N]=(0,f.N)(x),[j,T]=(0,a.A)(x,[C,N]),[k,P]=j(x),[M,_]=j(x),L=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,onValueChange:a,defaultValue:i,delayDuration:c=200,skipDelayDuration:v=300,orientation:f="horizontal",dir:m,...p}=e,[g,w]=r.useState(null),x=(0,l.s)(t,e=>w(e)),b=(0,d.jH)(m),y=r.useRef(0),C=r.useRef(0),R=r.useRef(0),[E,N]=r.useState(!0),[j="",T]=(0,u.i)({prop:o,onChange:e=>{let t=v>0;""!==e?(window.clearTimeout(R.current),t&&N(!1)):(window.clearTimeout(R.current),R.current=window.setTimeout(()=>N(!0),v)),null==a||a(e)},defaultProp:i}),k=r.useCallback(()=>{window.clearTimeout(C.current),C.current=window.setTimeout(()=>T(""),150)},[T]),P=r.useCallback(e=>{window.clearTimeout(C.current),T(e)},[T]),M=r.useCallback(e=>{j===e?window.clearTimeout(C.current):y.current=window.setTimeout(()=>{window.clearTimeout(C.current),T(e)},c)},[j,T,c]);return r.useEffect(()=>()=>{window.clearTimeout(y.current),window.clearTimeout(C.current),window.clearTimeout(R.current)},[]),(0,h.jsx)(D,{scope:n,isRootMenu:!0,value:j,dir:b,orientation:f,rootNavigationMenu:g,onTriggerEnter:e=>{window.clearTimeout(y.current),E?M(e):P(e)},onTriggerLeave:()=>{window.clearTimeout(y.current),k()},onContentEnter:()=>window.clearTimeout(C.current),onContentLeave:k,onItemSelect:e=>{T(t=>t===e?"":e)},onItemDismiss:()=>T(""),children:(0,h.jsx)(s.sG.nav,{"aria-label":"Main","data-orientation":f,dir:b,...p,ref:x})})});L.displayName=x;var I="NavigationMenuSub";r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",...l}=e,d=P(I,n),[c="",v]=(0,u.i)({prop:r,onChange:o,defaultProp:a});return(0,h.jsx)(D,{scope:n,isRootMenu:!1,value:c,dir:d.dir,orientation:i,rootNavigationMenu:d.rootNavigationMenu,onTriggerEnter:e=>v(e),onItemSelect:e=>v(e),onItemDismiss:()=>v(""),children:(0,h.jsx)(s.sG.div,{"data-orientation":i,...l,ref:t})})}).displayName=I;var D=e=>{let{scope:t,isRootMenu:n,rootNavigationMenu:o,dir:a,orientation:i,children:s,value:u,onItemSelect:l,onItemDismiss:d,onTriggerEnter:c,onTriggerLeave:f,onContentEnter:m,onContentLeave:p}=e,[w,x]=r.useState(null),[y,C]=r.useState(new Map),[R,E]=r.useState(null);return(0,h.jsx)(k,{scope:t,isRootMenu:n,rootNavigationMenu:o,value:u,previousValue:function(e){let t=r.useRef({value:e,previous:e});return r.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(u),baseId:(0,v.B)(),dir:a,orientation:i,viewport:w,onViewportChange:x,indicatorTrack:R,onIndicatorTrackChange:E,onTriggerEnter:(0,g.c)(c),onTriggerLeave:(0,g.c)(f),onContentEnter:(0,g.c)(m),onContentLeave:(0,g.c)(p),onItemSelect:(0,g.c)(l),onItemDismiss:(0,g.c)(d),onViewportContentChange:r.useCallback((e,t)=>{C(n=>(n.set(e,t),new Map(n)))},[]),onViewportContentRemove:r.useCallback(e=>{C(t=>t.has(e)?(t.delete(e),new Map(t)):t)},[]),children:(0,h.jsx)(b.Provider,{scope:t,children:(0,h.jsx)(M,{scope:t,items:y,children:s})})})},F="NavigationMenuList",S=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=P(F,n),a=(0,h.jsx)(s.sG.ul,{"data-orientation":o.orientation,...r,ref:t});return(0,h.jsx)(s.sG.div,{style:{position:"relative"},ref:o.onIndicatorTrackChange,children:(0,h.jsx)(b.Slot,{scope:n,children:o.isRootMenu?(0,h.jsx)(en,{asChild:!0,children:a}):a})})});S.displayName=F;var A="NavigationMenuItem",[O,G]=j(A),K=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,...a}=e,i=(0,v.B)(),u=r.useRef(null),l=r.useRef(null),d=r.useRef(null),c=r.useRef(()=>{}),f=r.useRef(!1),m=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"start";if(u.current){c.current();let t=ea(u.current);t.length&&ei("start"===e?t:t.reverse())}},[]),p=r.useCallback(()=>{if(u.current){let e=ea(u.current);e.length&&(c.current=function(e){return e.forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")}),()=>{e.forEach(e=>{let t=e.dataset.tabindex;e.setAttribute("tabindex",t)})}}(e))}},[]);return(0,h.jsx)(O,{scope:n,value:o||i||"LEGACY_REACT_AUTO_VALUE",triggerRef:l,contentRef:u,focusProxyRef:d,wasEscapeCloseRef:f,onEntryKeyDown:m,onFocusProxyEnter:m,onRootContentClose:p,onContentFocusOutside:p,children:(0,h.jsx)(s.sG.li,{...a,ref:t})})});K.displayName=A;var V="NavigationMenuTrigger",z=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,disabled:o,...a}=e,u=P(V,e.__scopeNavigationMenu),d=G(V,e.__scopeNavigationMenu),c=r.useRef(null),v=(0,l.s)(c,d.triggerRef,t),f=el(u.baseId,d.value),m=ed(u.baseId,d.value),p=r.useRef(!1),g=r.useRef(!1),x=d.value===u.value;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b.ItemSlot,{scope:n,value:d.value,children:(0,h.jsx)(eo,{asChild:!0,children:(0,h.jsx)(s.sG.button,{id:f,disabled:o,"data-disabled":o?"":void 0,"data-state":eu(x),"aria-expanded":x,"aria-controls":m,...a,ref:v,onPointerEnter:(0,i.m)(e.onPointerEnter,()=>{g.current=!1,d.wasEscapeCloseRef.current=!1}),onPointerMove:(0,i.m)(e.onPointerMove,ec(()=>{o||g.current||d.wasEscapeCloseRef.current||p.current||(u.onTriggerEnter(d.value),p.current=!0)})),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(()=>{o||(u.onTriggerLeave(),p.current=!1)})),onClick:(0,i.m)(e.onClick,()=>{u.onItemSelect(d.value),g.current=x}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t={horizontal:"ArrowDown",vertical:"rtl"===u.dir?"ArrowLeft":"ArrowRight"}[u.orientation];x&&e.key===t&&(d.onEntryKeyDown(),e.preventDefault())})})})}),x&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w,{"aria-hidden":!0,tabIndex:0,ref:d.focusProxyRef,onFocus:e=>{let t=d.contentRef.current,n=e.relatedTarget,r=n===c.current,o=null==t?void 0:t.contains(n);(r||!o)&&d.onFocusProxyEnter(r?"start":"end")}}),u.viewport&&(0,h.jsx)("span",{"aria-owns":m})]})]})});z.displayName=V;var H="navigationMenu.linkSelect",W=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,active:r,onSelect:o,...a}=e;return(0,h.jsx)(eo,{asChild:!0,children:(0,h.jsx)(s.sG.a,{"data-active":r?"":void 0,"aria-current":r?"page":void 0,...a,ref:t,onClick:(0,i.m)(e.onClick,e=>{let t=e.target,n=new CustomEvent(H,{bubbles:!0,cancelable:!0});if(t.addEventListener(H,e=>null==o?void 0:o(e),{once:!0}),(0,s.hO)(t,n),!n.defaultPrevented&&!e.metaKey){let e=new CustomEvent(Y,{bubbles:!0,cancelable:!0});(0,s.hO)(t,e)}},{checkForDefaultPrevented:!1})})})});W.displayName="NavigationMenuLink";var B="NavigationMenuIndicator",U=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,a=P(B,e.__scopeNavigationMenu),i=!!a.value;return a.indicatorTrack?o.createPortal((0,h.jsx)(c.C,{present:n||i,children:(0,h.jsx)($,{...r,ref:t})}),a.indicatorTrack):null});U.displayName=B;var $=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...o}=e,a=P(B,n),i=y(n),[u,l]=r.useState(null),[d,c]=r.useState(null),v="horizontal"===a.orientation,f=!!a.value;r.useEffect(()=>{var e;let t=null===(e=i().find(e=>e.value===a.value))||void 0===e?void 0:e.ref.current;t&&l(t)},[i,a.value]);let m=()=>{u&&c({size:v?u.offsetWidth:u.offsetHeight,offset:v?u.offsetLeft:u.offsetTop})};return es(u,m),es(a.indicatorTrack,m),d?(0,h.jsx)(s.sG.div,{"aria-hidden":!0,"data-state":f?"visible":"hidden","data-orientation":a.orientation,...o,ref:t,style:{position:"absolute",...v?{left:0,width:d.size+"px",transform:"translateX(".concat(d.offset,"px)")}:{top:0,height:d.size+"px",transform:"translateY(".concat(d.offset,"px)")},...o.style}}):null}),q="NavigationMenuContent",Q=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=P(q,e.__scopeNavigationMenu),a=G(q,e.__scopeNavigationMenu),s=(0,l.s)(a.contentRef,t),u=a.value===o.value,d={value:a.value,triggerRef:a.triggerRef,focusProxyRef:a.focusProxyRef,wasEscapeCloseRef:a.wasEscapeCloseRef,onContentFocusOutside:a.onContentFocusOutside,onRootContentClose:a.onRootContentClose,...r};return o.viewport?(0,h.jsx)(X,{forceMount:n,...d,ref:s}):(0,h.jsx)(c.C,{present:n||u,children:(0,h.jsx)(J,{"data-state":eu(u),...d,ref:s,onPointerEnter:(0,i.m)(e.onPointerEnter,o.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(o.onContentLeave)),style:{pointerEvents:!u&&o.isRootMenu?"none":void 0,...d.style}})})});Q.displayName=q;var X=r.forwardRef((e,t)=>{let{onViewportContentChange:n,onViewportContentRemove:r}=P(q,e.__scopeNavigationMenu);return(0,p.N)(()=>{n(e.value,{ref:t,...e})},[e,t,n]),(0,p.N)(()=>()=>r(e.value),[e.value,r]),null}),Y="navigationMenu.rootContentDismiss",J=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,value:o,triggerRef:a,focusProxyRef:s,wasEscapeCloseRef:u,onRootContentClose:d,onContentFocusOutside:c,...v}=e,f=P(q,n),p=r.useRef(null),g=(0,l.s)(p,t),w=el(f.baseId,o),x=ed(f.baseId,o),b=y(n),C=r.useRef(null),{onItemDismiss:R}=f;r.useEffect(()=>{let e=p.current;if(f.isRootMenu&&e){let t=()=>{var t;R(),d(),e.contains(document.activeElement)&&(null===(t=a.current)||void 0===t||t.focus())};return e.addEventListener(Y,t),()=>e.removeEventListener(Y,t)}},[f.isRootMenu,e.value,a,R,d]);let E=r.useMemo(()=>{let e=b().map(e=>e.value);"rtl"===f.dir&&e.reverse();let t=e.indexOf(f.value),n=e.indexOf(f.previousValue),r=o===f.value,a=n===e.indexOf(o);if(!r&&!a)return C.current;let i=(()=>{if(t!==n){if(r&&-1!==n)return t>n?"from-end":"from-start";if(a&&-1!==t)return t>n?"to-start":"to-end"}return null})();return C.current=i,i},[f.previousValue,f.value,f.dir,b,o]);return(0,h.jsx)(en,{asChild:!0,children:(0,h.jsx)(m.qW,{id:x,"aria-labelledby":w,"data-motion":E,"data-orientation":f.orientation,...v,ref:g,disableOutsidePointerEvents:!1,onDismiss:()=>{var e;let t=new Event(Y,{bubbles:!0,cancelable:!0});null===(e=p.current)||void 0===e||e.dispatchEvent(t)},onFocusOutside:(0,i.m)(e.onFocusOutside,e=>{var t;c();let n=e.target;(null===(t=f.rootNavigationMenu)||void 0===t?void 0:t.contains(n))&&e.preventDefault()}),onPointerDownOutside:(0,i.m)(e.onPointerDownOutside,e=>{var t;let n=e.target,r=b().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)}),o=f.isRootMenu&&(null===(t=f.viewport)||void 0===t?void 0:t.contains(n));(r||o||!f.isRootMenu)&&e.preventDefault()}),onKeyDown:(0,i.m)(e.onKeyDown,e=>{let t=e.altKey||e.ctrlKey||e.metaKey;if("Tab"===e.key&&!t){let t=ea(e.currentTarget),r=document.activeElement,o=t.findIndex(e=>e===r);if(ei(e.shiftKey?t.slice(0,o).reverse():t.slice(o+1,t.length)))e.preventDefault();else{var n;null===(n=s.current)||void 0===n||n.focus()}}}),onEscapeKeyDown:(0,i.m)(e.onEscapeKeyDown,e=>{u.current=!0})})})}),Z="NavigationMenuViewport",ee=r.forwardRef((e,t)=>{let{forceMount:n,...r}=e,o=!!P(Z,e.__scopeNavigationMenu).value;return(0,h.jsx)(c.C,{present:n||o,children:(0,h.jsx)(et,{...r,ref:t})})});ee.displayName=Z;var et=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,children:o,...a}=e,u=P(Z,n),d=(0,l.s)(t,u.onViewportChange),v=_(q,e.__scopeNavigationMenu),[f,m]=r.useState(null),[p,g]=r.useState(null),w=f?(null==f?void 0:f.width)+"px":void 0,x=f?(null==f?void 0:f.height)+"px":void 0,b=!!u.value,y=b?u.value:u.previousValue;return es(p,()=>{p&&m({width:p.offsetWidth,height:p.offsetHeight})}),(0,h.jsx)(s.sG.div,{"data-state":eu(b),"data-orientation":u.orientation,...a,ref:d,style:{pointerEvents:!b&&u.isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":w,"--radix-navigation-menu-viewport-height":x,...a.style},onPointerEnter:(0,i.m)(e.onPointerEnter,u.onContentEnter),onPointerLeave:(0,i.m)(e.onPointerLeave,ec(u.onContentLeave)),children:Array.from(v.items).map(e=>{let[t,{ref:n,forceMount:r,...o}]=e,a=y===t;return(0,h.jsx)(c.C,{present:r||a,children:(0,h.jsx)(J,{...o,ref:(0,l.t)(n,e=>{a&&e&&g(e)})})},t)})})}),en=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=P("FocusGroup",n);return(0,h.jsx)(R.Provider,{scope:n,children:(0,h.jsx)(R.Slot,{scope:n,children:(0,h.jsx)(s.sG.div,{dir:o.dir,...r,ref:t})})})}),er=["ArrowRight","ArrowLeft","ArrowUp","ArrowDown"],eo=r.forwardRef((e,t)=>{let{__scopeNavigationMenu:n,...r}=e,o=E(n),a=P("FocusGroupItem",n);return(0,h.jsx)(R.ItemSlot,{scope:n,children:(0,h.jsx)(s.sG.button,{...r,ref:t,onKeyDown:(0,i.m)(e.onKeyDown,e=>{if(["Home","End",...er].includes(e.key)){let t=o().map(e=>e.ref.current);if(["rtl"===a.dir?"ArrowRight":"ArrowLeft","ArrowUp","End"].includes(e.key)&&t.reverse(),er.includes(e.key)){let n=t.indexOf(e.currentTarget);t=t.slice(n+1)}setTimeout(()=>ei(t)),e.preventDefault()}})})})});function ea(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ei(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}function es(e,t){let n=(0,g.c)(t);(0,p.N)(()=>{let t=0;if(e){let r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(n)});return r.observe(e),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}},[e,n])}function eu(e){return e?"open":"closed"}function el(e,t){return"".concat(e,"-trigger-").concat(t)}function ed(e,t){return"".concat(e,"-content-").concat(t)}function ec(e){return t=>"mouse"===t.pointerType?e(t):void 0}var ev=L,ef=S,em=K,ep=z,eg=W,eh=U,ew=Q,ex=ee}},e=>{var t=t=>e(e.s=t);e.O(0,[538,711,247,441,517,358],()=>t(8856)),_N_E=e.O()}]);