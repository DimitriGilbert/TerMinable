(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,66780,e=>{"use strict";var t,o,r,n=e.i(54952);function a({title:e,children:t}){return(0,n.jsxs)("section",{className:"mb-12",children:[(0,n.jsx)("h2",{className:"mb-4 text-3xl font-semibold text-primary",children:e}),(0,n.jsx)("div",{className:"text-foreground/90",children:t})]})}function i({children:e}){return(0,n.jsx)("div",{className:"overflow-x-auto rounded-md bg-muted p-4 my-4",children:(0,n.jsx)("pre",{className:"text-sm",children:(0,n.jsx)("code",{className:"text-foreground/80",children:e})})})}function l({headers:e,rows:t}){return(0,n.jsx)("div",{className:"overflow-x-auto my-4",children:(0,n.jsxs)("table",{className:"min-w-full divide-y divide-border",children:[(0,n.jsx)("thead",{className:"bg-muted",children:(0,n.jsx)("tr",{children:e.map((e,t)=>(0,n.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-foreground/80",children:e},t))})}),(0,n.jsx)("tbody",{className:"divide-y divide-border bg-background",children:t.map((e,t)=>(0,n.jsx)("tr",{children:e.map((e,t)=>(0,n.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-foreground/90",children:e},t))},t))})]})})}var s=e.i(87512);e.s([],80673),e.i(80673),e.i(74262);var c=e.i(77367),d=e.i(77501),u=e.i(80224),p=e.i(13435),m=e.i(63867),h=e.i(59213);let f=s.createContext(void 0);function x(){let e=s.useContext(f);if(void 0===e)throw Error((0,h.default)(64));return e}let g=((t={}).activationDirection="data-activation-direction",t.orientation="data-orientation",t),b={tabActivationDirection:e=>({[g.activationDirection]:e})},y=s.forwardRef(function(e,t){let{className:o,defaultValue:r=0,onValueChange:a,orientation:i="horizontal",render:l,value:h,style:x,...g}=e,y=Object.hasOwn(e,"defaultValue"),j=s.useRef([]),[C,S]=s.useState(()=>new Map),[N,w]=(0,c.useControlled)({controlled:h,default:r,name:"Tabs",state:"value"}),T=void 0!==h,[R,k]=s.useState(()=>new Map),O=s.useCallback(e=>{if(void 0===e)return null;for(let[t,o]of R.entries())if(null!=o&&e===(o.value??o.index))return t;return null},[R]),[D,E]=s.useState(()=>({previousValue:N,tabActivationDirection:"none"})),{previousValue:B,tabActivationDirection:M}=D,L=M,P=!1;B!==N&&(L=v(B,N,i,R),P=null!=B&&null!=N&&null==O(N));let V=P?B:N,I=B!==V||M!==L;(0,d.useIsoLayoutEffect)(()=>{I&&E({previousValue:V,tabActivationDirection:L})},[V,I,L]);let A=(0,u.useStableCallback)((e,t)=>{t.activationDirection=v(N,e,i,R),a?.(e,t),t.isCanceled||w(e)}),W=(0,u.useStableCallback)((e,t)=>{S(o=>{if(o.get(e)===t)return o;let r=new Map(o);return r.set(e,t),r})}),z=(0,u.useStableCallback)((e,t)=>{S(o=>{if(!o.has(e)||o.get(e)!==t)return o;let r=new Map(o);return r.delete(e),r})}),H=s.useCallback(e=>C.get(e),[C]),_=s.useCallback(e=>{for(let t of R.values())if(e===t?.value)return t?.id},[R]),K=s.useMemo(()=>({getTabElementBySelectedValue:O,getTabIdByPanelValue:_,getTabPanelIdByValue:H,onValueChange:A,orientation:i,registerMountedTabPanel:W,setTabMap:k,unregisterMountedTabPanel:z,tabActivationDirection:L,value:N}),[O,_,H,A,i,W,k,z,L,N]),$=s.useMemo(()=>{for(let e of R.values())if(null!=e&&e.value===N)return e},[R,N]),F=s.useMemo(()=>{for(let e of R.values())if(null!=e&&!e.disabled)return e.value},[R]);(0,d.useIsoLayoutEffect)(()=>{if(T||0===R.size)return;let e=$?.disabled,t=null==$&&null!==N;if(y&&e&&N===r||!e&&!t)return;let o=F??null;N!==o&&(w(o),E(e=>"none"===e.tabActivationDirection?e:{...e,tabActivationDirection:"none"}))},[r,F,y,T,$,w,R,N]);let U={orientation:i,tabActivationDirection:L},J=(0,p.useRenderElement)("div",e,{state:U,ref:t,props:g,stateAttributesMapping:b});return(0,n.jsx)(f.Provider,{value:K,children:(0,n.jsx)(m.CompositeList,{elementsRef:j,children:J})})});function v(e,t,o,r){if(null==e||null==t)return"none";let n=null,a=null;for(let[o,i]of r.entries()){if(null==i)continue;let r=i.value??i.index;if(e===r&&(n=o),t===r&&(a=o),null!=n&&null!=a)break}if(null==n||null==a)return n!==a&&("number"==typeof e||"string"==typeof e)&&typeof e==typeof t?"horizontal"===o?t>e?"right":"left":t>e?"down":"up":"none";let i=n.getBoundingClientRect(),l=a.getBoundingClientRect();if("horizontal"===o){if(l.left<i.left)return"left";if(l.left>i.left)return"right"}else{if(l.top<i.top)return"up";if(l.top>i.top)return"down"}return"none"}var j=e.i(6637),C=e.i(24200),S=e.i(29959),N=e.i(86578),w=e.i(25033);let T=s.createContext(void 0);function R(){let e=s.useContext(T);if(void 0===e)throw Error((0,h.default)(65));return e}var k=e.i(15434),O=e.i(44410),D=e.i(63200);let E=s.forwardRef(function(e,t){let{className:o,disabled:r=!1,render:n,value:a,id:i,nativeButton:l=!0,style:c,...u}=e,{value:m,getTabPanelIdByValue:h,orientation:f}=x(),{activateOnFocus:g,highlightedTabIndex:b,onTabActivation:y,registerTabResizeObserverElement:v,setHighlightedTabIndex:T,tabsListElement:E}=R(),B=(0,C.useBaseUiId)(i),M=s.useMemo(()=>({disabled:r,id:B,value:a}),[r,B,a]),{compositeProps:L,compositeRef:P,index:V}=(0,w.useCompositeItem)({metadata:M}),I=a===m,A=s.useRef(!1),W=s.useRef(null);s.useEffect(()=>{let e=W.current;if(e)return v(e)},[v]),(0,d.useIsoLayoutEffect)(()=>{if(A.current){A.current=!1;return}if(I&&V>-1&&b!==V){if(null!=E){let e=(0,D.activeElement)((0,j.ownerDocument)(E));if(e&&(0,D.contains)(E,e))return}r||T(V)}},[I,V,b,T,r,E]);let{getButtonProps:z,buttonRef:H}=(0,S.useButton)({disabled:r,native:l,focusableWhenDisabled:!0}),_=h(a),K=s.useRef(!1),$=s.useRef(!1);return(0,p.useRenderElement)("button",e,{state:{disabled:r,active:I,orientation:f},ref:[t,H,P,W],props:[L,{role:"tab","aria-controls":_,"aria-selected":I,id:B,onClick:function(e){I||r||y(a,(0,k.createChangeEventDetails)(O.REASONS.none,e.nativeEvent,void 0,{activationDirection:"none"}))},onFocus:function(e){I||(V>-1&&!r&&T(V),!r&&g&&(!K.current||K.current&&$.current)&&y(a,(0,k.createChangeEventDetails)(O.REASONS.none,e.nativeEvent,void 0,{activationDirection:"none"})))},onPointerDown:function(e){I||r||(K.current=!0,e.button&&0!==e.button||($.current=!0,(0,j.ownerDocument)(e.currentTarget).addEventListener("pointerup",function(){K.current=!1,$.current=!1},{once:!0})))},[N.ACTIVE_COMPOSITE_ITEM]:I?"":void 0,onKeyDownCapture(){A.current=!0}},u,z]})});var B=e.i(59446),M=e.i(15863),L=e.i(60351);function P(){return L.NOOP}function V(){return!1}function I(){return!0}let A=((o={}).activeTabLeft="--active-tab-left",o.activeTabRight="--active-tab-right",o.activeTabTop="--active-tab-top",o.activeTabBottom="--active-tab-bottom",o.activeTabWidth="--active-tab-width",o.activeTabHeight="--active-tab-height",o);var W=e.i(11102);let z={...b,activeTabPosition:()=>null,activeTabSize:()=>null},H=s.forwardRef(function(e,t){let{className:o,render:r,renderBeforeHydration:a=!1,style:i,...l}=e,{nonce:c}=(0,W.useCSPContext)(),{getTabElementBySelectedValue:d,orientation:u,tabActivationDirection:m,value:h}=x(),{tabsListElement:f,registerIndicatorUpdateListener:g}=R(),b=(0,M.useSyncExternalStore)(P,V,I),y=function(){let[,e]=s.useState({});return s.useCallback(()=>{e({})},[])}();s.useEffect(()=>g(y),[g,y]);let v=0,j=0,C=0,S=0,N=0,w=0,T=!1;if(null!=h&&null!=f){let e=d(h);if(T=!0,null!=e){let{width:t,height:o}=(0,B.getCssDimensions)(e),{width:r,height:n}=(0,B.getCssDimensions)(f),a=e.getBoundingClientRect(),i=f.getBoundingClientRect(),l=r>0?i.width/r:1,s=n>0?i.height/n:1;if(Math.abs(l)>Number.EPSILON&&Math.abs(s)>Number.EPSILON){let e=a.left-i.left,t=a.top-i.top;v=e/l+f.scrollLeft-f.clientLeft,C=t/s+f.scrollTop-f.clientTop}else v=e.offsetLeft,C=e.offsetTop;N=t,w=o,j=f.scrollWidth-v-N,S=f.scrollHeight-C-w}}let k=s.useMemo(()=>T?{left:v,right:j,top:C,bottom:S}:null,[v,j,C,S,T]),O=s.useMemo(()=>T?{width:N,height:w}:null,[N,w,T]),D=s.useMemo(()=>{if(T)return{[A.activeTabLeft]:`${v}px`,[A.activeTabRight]:`${j}px`,[A.activeTabTop]:`${C}px`,[A.activeTabBottom]:`${S}px`,[A.activeTabWidth]:`${N}px`,[A.activeTabHeight]:`${w}px`}},[v,j,C,S,N,w,T]),E=T&&N>0&&w>0,L=(0,p.useRenderElement)("span",e,{state:{orientation:u,activeTabPosition:k,activeTabSize:O,tabActivationDirection:m},ref:t,props:[{role:"presentation",style:D,hidden:!E},l,{suppressHydrationWarning:!0}],stateAttributesMapping:z});return null==h?null:(0,n.jsxs)(s.Fragment,{children:[L,b&&a&&(0,n.jsx)("script",{nonce:c,dangerouslySetInnerHTML:{__html:'!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();'},suppressHydrationWarning:!0})]})});var _=e.i(88541),K=e.i(97857),$=e.i(92471),F=e.i(85078),U=e.i(91274);let J=((r={}).index="data-index",r.activationDirection="data-activation-direction",r.orientation="data-orientation",r.hidden="data-hidden",r[r.startingStyle=K.TransitionStatusDataAttributes.startingStyle]="startingStyle",r[r.endingStyle=K.TransitionStatusDataAttributes.endingStyle]="endingStyle",r),q={...b,...K.transitionStatusMapping},G=s.forwardRef(function(e,t){let{className:o,value:r,render:n,keepMounted:a=!1,style:i,...l}=e,{value:c,getTabIdByPanelValue:u,orientation:m,tabActivationDirection:h,registerMountedTabPanel:f,unregisterMountedTabPanel:g}=x(),b=(0,C.useBaseUiId)(),y=s.useMemo(()=>({id:b,value:r}),[b,r]),{ref:v,index:j}=(0,U.useCompositeListItem)({metadata:y}),S=r===c,{mounted:N,transitionStatus:w,setMounted:T}=(0,F.useTransitionStatus)(S),R=!N,k=u(r),O=s.useRef(null),D=(0,p.useRenderElement)("div",e,{state:{hidden:R,orientation:m,tabActivationDirection:h,transitionStatus:w},ref:[t,v,O],props:[{"aria-labelledby":k,hidden:R,id:b,role:"tabpanel",tabIndex:S?0:-1,inert:(0,_.inertValue)(!S),[J.index]:j},l],stateAttributesMapping:q});return((0,$.useOpenChangeComplete)({open:S,ref:O,onComplete(){S||T(!1)}}),(0,d.useIsoLayoutEffect)(()=>{if((!R||a)&&null!=b)return f(r,b),()=>{g(r,b)}},[R,a,r,b,f,g]),a||N)?D:null});var Y=e.i(45957);let Q=s.forwardRef(function(e,t){let{activateOnFocus:o=!1,className:r,loopFocus:a=!0,render:i,style:l,...c}=e,{onValueChange:d,orientation:p,value:m,setTabMap:h,tabActivationDirection:f}=x(),[g,y]=s.useState(0),[v,j]=s.useState(null),C=s.useRef(new Set),S=s.useRef(new Set),N=s.useRef(null),w=(0,u.useStableCallback)(()=>{C.current.forEach(e=>{e()})});s.useEffect(()=>{if("u"<typeof ResizeObserver)return;let e=new ResizeObserver(()=>{C.current.size&&w()});return N.current=e,v&&e.observe(v),S.current.forEach(t=>{e.observe(t)}),()=>{e.disconnect(),N.current=null}},[v,w]);let R=(0,u.useStableCallback)(e=>(C.current.add(e),()=>{C.current.delete(e)})),k=(0,u.useStableCallback)(e=>(S.current.add(e),N.current?.observe(e),()=>{S.current.delete(e),N.current?.unobserve(e)})),O=(0,u.useStableCallback)((e,t)=>{e!==m&&d(e,t)}),D=s.useMemo(()=>({activateOnFocus:o,highlightedTabIndex:g,registerIndicatorUpdateListener:R,registerTabResizeObserverElement:k,onTabActivation:O,setHighlightedTabIndex:y,tabsListElement:v}),[o,g,R,k,O,y,v]);return(0,n.jsx)(T.Provider,{value:D,children:(0,n.jsx)(Y.CompositeRoot,{render:i,className:r,style:l,state:{orientation:p,tabActivationDirection:f},refs:[t,j],props:[{"aria-orientation":"vertical"===p?"vertical":void 0,role:"tablist"},c],stateAttributesMapping:b,highlightedIndex:g,enableHomeAndEndKeys:!0,loopFocus:a,orientation:p,onHighlightedIndexChange:y,onMapChange:h,disabledIndices:L.EMPTY_ARRAY})})});e.s(["Indicator",0,H,"List",0,Q,"Panel",0,G,"Root",0,y,"Tab",0,E],4483);var X=e.i(4483),X=X,Z=e.i(50862),ee=e.i(658);function et({className:e,orientation:t="horizontal",...o}){return(0,n.jsx)(X.Root,{"data-slot":"tabs","data-orientation":t,className:(0,ee.cn)("group/tabs flex gap-2 data-horizontal:flex-col",e),...o})}let eo=(0,Z.cva)("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function er({className:e,variant:t="default",...o}){return(0,n.jsx)(X.List,{"data-slot":"tabs-list","data-variant":t,className:(0,ee.cn)(eo({variant:t}),e),...o})}function en({className:e,...t}){return(0,n.jsx)(X.Tab,{"data-slot":"tabs-trigger",className:(0,ee.cn)("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent","data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",e),...t})}function ea({className:e,...t}){return(0,n.jsx)(X.Panel,{"data-slot":"tabs-content",className:(0,ee.cn)("flex-1 text-sm outline-none",e),...t})}var ei=e.i(48794);let el=(0,e.i(61196).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var es=e.i(24264);function ec({value:e,className:t=""}){let[o,r]=(0,s.useState)(!1);return(0,n.jsx)("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)}).catch(()=>{})},"aria-label":o?"Copied":"Copy",className:`rounded-md p-2 transition-colors hover:bg-muted ${t}`,children:o?(0,n.jsx)(el,{className:"h-4 w-4"}):(0,n.jsx)(es.Copy,{className:"h-4 w-4"})})}let ed=({commands:e,title:t,codeString:o,start:r,titleBarVariant:a,backgroundColor:i,promptColor:l,outputColor:c})=>{let[d,u]=(0,s.useState)("preview"),p=(0,s.useMemo)(()=>{let t=0;for(let o of e){let e="string"==typeof o.prompt?o.prompt:"";for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o)|0}return t},[e]);return(0,n.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold text-primary",children:t}),(0,n.jsxs)(et,{value:d,onValueChange:u,className:"w-full flex-col",children:[(0,n.jsxs)(er,{className:"grid w-full grid-cols-2",children:[(0,n.jsx)(en,{value:"preview",children:"Preview"}),(0,n.jsx)(en,{value:"code",children:"Code"})]}),(0,n.jsx)(ea,{value:"preview",className:"mt-4",children:(0,n.jsx)("div",{className:"preview"===d?"":"hidden",children:(0,n.jsx)(ei.default,{commands:e,start:"preview"===d&&!!r,titleBarVariant:a,backgroundColor:i,promptColor:l,outputColor:c},p)})}),(0,n.jsx)(ea,{value:"code",className:"mt-4",children:(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("pre",{className:"overflow-x-auto rounded-md bg-muted p-4",children:(0,n.jsx)("code",{className:"text-sm text-foreground/80",children:o?.trim()})}),(0,n.jsx)(ec,{value:o?.trim()??"",className:"absolute right-2 top-2"})]})})]})]})};var eu=Object.defineProperty,ep=new Map,em=new WeakMap,eh=0,ef=void 0;s.Component;var ex=e.i(65944),eg=e.i(62916),eb=e.i(44610);let ey=e=>{let{ref:t,inView:o}=function({threshold:e,delay:t,trackVisibility:o,rootMargin:r,root:n,triggerOnce:a,skip:i,initialInView:l,fallbackInView:c,onChange:d}={}){var u;let[p,m]=s.useState(null),h=s.useRef(d),[f,x]=s.useState({inView:!!l,entry:void 0});h.current=d,s.useEffect(()=>{let l;if(!i&&p)return l=function(e,t,o={},r=ef){if(void 0===window.IntersectionObserver&&void 0!==r){let n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof o.threshold?o.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:a,elements:i}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var o;return`${t}_${"root"===t?!(o=e.root)?"0":(em.has(o)||(eh+=1,em.set(o,eh.toString())),em.get(o)):e[t]}`}).toString(),o=ep.get(t);if(!o){let r,n=new Map,a=new IntersectionObserver(t=>{t.forEach(t=>{var o;let a=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(o=n.get(t.target))||o.forEach(e=>{e(a,t)})})},e);r=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),o={id:t,observer:a,elements:n},ep.set(t,o)}return o}(o),l=i.get(e)||[];return i.has(e)||i.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(i.delete(e),a.unobserve(e)),0===i.size&&(a.disconnect(),ep.delete(n))}}(p,(e,t)=>{x({inView:e,entry:t}),h.current&&h.current(e,t),t.isIntersecting&&a&&l&&(l(),l=void 0)},{root:n,rootMargin:r,threshold:e,trackVisibility:o,delay:t},c),()=>{l&&l()}},[Array.isArray(e)?e.toString():e,p,n,r,a,i,o,c,t]);let g=null==(u=f.entry)?void 0:u.target,b=s.useRef(void 0);p||!g||a||i||b.current===g||(b.current=g,x({inView:!!l,entry:void 0}));let y=[m,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({triggerOnce:!0,threshold:.1});return(0,n.jsx)("div",{ref:t,className:"h-full",children:(0,n.jsx)(ed,{...e,start:o})})};e.s(["default",0,function(){return(0,n.jsx)("div",{className:"min-h-screen py-12",children:(0,n.jsxs)("div",{className:"container mx-auto max-w-5xl px-4",children:[(0,n.jsxs)("header",{className:"mb-8 text-center",children:[(0,n.jsxs)("h1",{className:"mb-2 text-4xl font-bold text-foreground",children:[(0,n.jsx)("span",{className:"text-primary",children:"Terminable"})," Component Documentation"]}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Simulate terminal interactions in your documentation"})]}),(0,n.jsxs)(a,{title:"Introduction",children:[(0,n.jsxs)("p",{className:"mb-4",children:["Wether to show an example of your CLI that is not video, or just to look cool (yes, terminals are cool ! they. are.)"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","is for you."]}),(0,n.jsxs)("p",{className:"mb-4",children:["It is built using"," ",(0,n.jsx)(ex.GlowLink,{href:"https://ui.shadcn.com/",target:"_blank",rel:"noopener noreferrer",color:"rgba(173,251,28,0.8)",size:"12px",duration:.5,scale:1.1,className:"font-semibold drop-shadow-[0_0_8px_rgba(173,251,28,0.8)]",glowClassName:"rounded-md px-1.5 py-0.5 bg-primary/10 dark:bg-primary-foreground/10",children:"Shadcn/ui"})," ","components, and you can (only) install it using my custom"," ",(0,n.jsx)(eg.default,{href:"https://ui.shadcn.com/docs/installation/nextjs",target:"_blank",rel:"noopener noreferrer",className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"shadcn/ui registry"})]})]}),(0,n.jsxs)(a,{title:"Installation",children:[(0,n.jsxs)("p",{className:"mb-4",children:["To install the"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component, you can use the following command:"]}),(0,n.jsx)(eb.PkgMngCmdCopy,{className:"w-full max-w-3xl",buttonClassName:"px-4 py-2",preClassName:"w-full",cmd:"shadcn@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json"})]}),(0,n.jsxs)(a,{title:"Usage",children:[(0,n.jsxs)("p",{className:"mb-4",children:["To integrate the"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component into your project:"]}),(0,n.jsx)(i,{children:'import Terminable from "@/components/ui/Terminable";'})]}),(0,n.jsxs)(a,{title:"Props",children:[(0,n.jsxs)("p",{className:"mb-4",children:["The"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component accepts the following props:"]}),(0,n.jsx)(l,{headers:["Name","Type","Default","Description"],rows:[[(0,n.jsx)("code",{className:"text-primary",children:"commands"},"commands"),(0,n.jsx)("code",{children:"CommandEntry[]"},"commands0"),(0,n.jsx)("code",{children:"required"},"commands1"),"An array of command objects to be executed in the terminal."],[(0,n.jsx)("code",{className:"text-primary",children:"titleBarVariant"},"titleBarVariant"),(0,n.jsx)("code",{children:'"macos" | "windows" | "linux" | "minimal" | "none"'},"titleBarVariant0"),(0,n.jsx)("code",{children:'"macos"'},"titleBarVariant1"),"Visual style of the terminal title bar."],[(0,n.jsx)("code",{className:"text-primary",children:"title"},"title"),(0,n.jsx)("code",{children:"string | ReactNode"},"title0"),(0,n.jsx)("code",{children:"-"},"title1"),"Title displayed in the title bar."],[(0,n.jsx)("code",{className:"text-primary",children:"defaultTypingSpeed"},"defaultTypingSpeed"),(0,n.jsx)("code",{children:"number"},"defaultTypingSpeed0"),(0,n.jsx)("code",{children:"50"},"defaultTypingSpeed1"),"Default typing speed in ms per character."],[(0,n.jsx)("code",{className:"text-primary",children:"defaultTypingRandom"},"defaultTypingRandom"),(0,n.jsx)("code",{children:"number"},"defaultTypingRandom0"),(0,n.jsx)("code",{children:"0"},"defaultTypingRandom1"),"Randomness factor for typing speed (0–100)."],[(0,n.jsx)("code",{className:"text-primary",children:"defaultOutputSpeed"},"defaultOutputSpeed"),(0,n.jsx)("code",{children:"number"},"defaultOutputSpeed0"),(0,n.jsx)("code",{children:"30"},"defaultOutputSpeed1"),"Delay between output lines in ms."],[(0,n.jsx)("code",{className:"text-primary",children:"width"},"width"),(0,n.jsx)("code",{children:"string"},"width0"),(0,n.jsx)("code",{children:'"w-full max-w-[800px]"'},"width1"),"Tailwind width classes for the terminal container."],[(0,n.jsx)("code",{className:"text-primary",children:"height"},"height"),(0,n.jsx)("code",{children:"string"},"height0"),(0,n.jsx)("code",{children:'"min-h-[300px] max-h-[500px]"'},"height1"),"Tailwind height classes for the terminal body."],[(0,n.jsx)("code",{className:"text-primary",children:"termPrompt"},"termPrompt"),(0,n.jsx)("code",{children:"string | ReactNode"},"termPrompt0"),(0,n.jsx)("code",{children:'"$ "'},"termPrompt1"),"Prompt symbol shown before each command."],[(0,n.jsx)("code",{className:"text-primary",children:"startLine"},"startLine"),(0,n.jsx)("code",{children:"string | ReactNode"},"startLine0"),(0,n.jsx)("code",{children:'""'},"startLine1"),"Initial content displayed before commands start."],[(0,n.jsx)("code",{className:"text-primary",children:"backgroundColor"},"backgroundColor"),(0,n.jsx)("code",{children:"string"},"backgroundColor0"),(0,n.jsx)("em",{children:"CSS var"},"backgroundColor1"),"CSS color value for the terminal background. Overrides the internal CSS variable."],[(0,n.jsx)("code",{className:"text-primary",children:"promptColor"},"promptColor"),(0,n.jsx)("code",{children:"string"},"promptColor0"),(0,n.jsx)("em",{children:"CSS var"},"promptColor1"),"CSS color value for the prompt text. Overrides the internal CSS variable."],[(0,n.jsx)("code",{className:"text-primary",children:"outputColor"},"outputColor"),(0,n.jsx)("code",{children:"string"},"outputColor0"),(0,n.jsx)("em",{children:"CSS var"},"outputColor1"),"CSS color value for the output text. Overrides the internal CSS variable."],[(0,n.jsx)("code",{className:"text-primary",children:"commandDelay"},"commandDelay"),(0,n.jsx)("code",{children:"number"},"commandDelay0"),(0,n.jsx)("code",{children:"1000"},"commandDelay1"),"Default delay between commands in ms."],[(0,n.jsx)("code",{className:"text-primary",children:"allowCopy"},"allowCopy"),(0,n.jsx)("code",{children:"boolean"},"allowCopy0"),(0,n.jsx)("code",{children:"true"},"allowCopy1"),"Whether completed commands can be clicked to copy."],[(0,n.jsx)("code",{className:"text-primary",children:"start"},"start"),(0,n.jsx)("code",{children:"boolean"},"start0"),(0,n.jsx)("code",{children:"true"},"start1"),"Start processing commands automatically on mount."],[(0,n.jsx)("code",{className:"text-primary",children:"onError"},"onError"),(0,n.jsx)("code",{children:"(error: Error) => void"},"onError0"),(0,n.jsx)("code",{children:"-"},"onError1"),"Callback fired when an error occurs during command processing."],[(0,n.jsx)("code",{className:"text-primary",children:"onCopySuccess"},"onCopySuccess"),(0,n.jsx)("code",{children:"(text: string) => void"},"onCopySuccess0"),(0,n.jsx)("code",{children:"-"},"onCopySuccess1"),"Callback fired when a command is successfully copied to clipboard."],[(0,n.jsx)("code",{className:"text-primary",children:"onCopyError"},"onCopyError"),(0,n.jsx)("code",{children:"(error: Error) => void"},"onCopyError0"),(0,n.jsx)("code",{children:"-"},"onCopyError1"),"Callback fired when copying to clipboard fails."]]})]}),(0,n.jsxs)(a,{title:"CommandEntry Object Structure",children:[(0,n.jsxs)("p",{className:"mb-4",children:["Each command object in the"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"commands"})," ","array defines a command to be executed in the terminal. Here are the properties you can use:"]}),(0,n.jsx)(l,{headers:["Name","Type","Description"],rows:[[(0,n.jsx)("code",{className:"text-primary",children:"prompt"},"prompt"),(0,n.jsx)("code",{children:"string | ReactNode | Array<string | ReactNode>"},"prompt0"),"The command prompt string or ReactNode to be typed."],[(0,n.jsx)("code",{className:"text-primary",children:"output"},"output"),(0,n.jsx)("code",{children:"string | OutputContent | ReactNode | Array<string | OutputContent | ReactNode>"},"output0"),"The output of the command. Can be a string, OutputContent object, ReactNode, or an array of these."],[(0,n.jsx)("code",{className:"text-primary",children:"typingSpeed"},"typingSpeed"),(0,n.jsx)("code",{children:"number"},"typingSpeed0"),"Typing speed for this command in ms, overriding the default."],[(0,n.jsx)("code",{className:"text-primary",children:"typingRandom"},"typingRandom"),(0,n.jsx)("code",{children:"number"},"typingRandom0"),"Randomness factor for typing speed (0–100), overriding the default."],[(0,n.jsx)("code",{className:"text-primary",children:"delay"},"delay"),(0,n.jsx)("code",{children:"number"},"delay0"),"Delay before executing this command in ms, overriding the global commandDelay."],[(0,n.jsx)("code",{className:"text-primary",children:"outputDelay"},"outputDelay"),(0,n.jsx)("code",{children:"number"},"outputDelay0"),"Delay before displaying the output of this command in ms."],[(0,n.jsx)("code",{className:"text-primary",children:"onDone"},"onDone"),(0,n.jsx)("code",{children:"() => void"},"onDone0"),"Callback function executed when the command is finished."],[(0,n.jsx)("code",{className:"text-primary",children:"onCopy"},"onCopy"),(0,n.jsx)("code",{children:"() => void"},"onCopy0"),"Callback function executed when the command text is copied."],[(0,n.jsx)("code",{className:"text-primary",children:"onBeforeOutput"},"onBeforeOutput"),(0,n.jsx)("code",{children:"() => void"},"onBeforeOutput0"),"Callback function executed before the output is displayed."]]})]}),(0,n.jsxs)(a,{title:"OutputContent Object Structure",children:[(0,n.jsxs)("p",{className:"mb-4",children:["The"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"OutputContent"})," ","object allows you to specify complex output scenarios with placeholders and delays."]}),(0,n.jsx)(l,{headers:["Name","Type","Description"],rows:[[(0,n.jsx)("code",{className:"text-primary",children:"delay"},"delay"),(0,n.jsx)("code",{children:"number"},"delay0"),"Delay before the content is displayed, in milliseconds."],[(0,n.jsx)("code",{className:"text-primary",children:"placeholder"},"placeholder"),(0,n.jsx)("code",{children:"string | ReactNode"},"placeholder0"),"Placeholder content to display while waiting for the delay."],[(0,n.jsx)("code",{className:"text-primary",children:"content"},"content"),(0,n.jsx)("code",{children:"string | ReactNode"},"content0"),"The actual content to display after the delay."]]})]}),(0,n.jsxs)(a,{title:"CSS Custom Properties",children:[(0,n.jsx)("p",{className:"mb-4",children:"The component uses CSS custom properties for theming. These are defined with Tokyo Night defaults and can be overridden by passing the corresponding props or by setting the CSS variables in your stylesheet."}),(0,n.jsx)(l,{headers:["Variable","Default","Purpose"],rows:[[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-bg"},"0"),(0,n.jsx)("code",{children:"#1a1b26"},"0v"),"Terminal background color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-prompt"},"1"),(0,n.jsx)("code",{children:"#73daca"},"1v"),"Prompt text color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-output"},"2"),(0,n.jsx)("code",{children:"#c0caf5"},"2v"),"Output text color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-titlebar-bg"},"3"),(0,n.jsx)("code",{children:"#24283b"},"3v"),"Title bar background"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-border"},"4"),(0,n.jsx)("code",{children:"#3b4261"},"4v"),"Terminal border color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-title-color"},"5"),(0,n.jsx)("code",{children:"#a9b1d6"},"5v"),"Title text color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-hover-bg"},"6"),(0,n.jsx)("code",{children:"#292e42"},"6v"),"Command hover background"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-cursor-color"},"7"),(0,n.jsx)("code",{children:"#c0caf5"},"7v"),"Blinking cursor color"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-dot-green"},"8"),(0,n.jsx)("code",{children:"#27c93f"},"8v"),"macOS title bar green dot"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-dot-yellow"},"9"),(0,n.jsx)("code",{children:"#ffbd2e"},"9v"),"macOS title bar yellow dot"],[(0,n.jsx)("code",{className:"text-primary",children:"--terminable-dot-red"},"10"),(0,n.jsx)("code",{children:"#ff5f56"},"10v"),"macOS/Linux title bar red dot"]]})]}),(0,n.jsxs)(a,{title:"Title Bar Variants",children:[(0,n.jsxs)("p",{className:"mb-4",children:["The"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"titleBarVariant"})," ","prop controls the visual style of the title bar. Choose from five options:"]}),(0,n.jsxs)("div",{className:"grid gap-8 md:grid-cols-2",children:[(0,n.jsx)(ey,{title:"macOS",titleBarVariant:"macos",commands:[{prompt:"echo 'macOS style'",output:"macOS style"}],codeString:`
<Terminable
  titleBarVariant="macos"
  title="Terminal"
  commands={[
    { prompt: "echo 'macOS style'", output: "macOS style" }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Windows",titleBarVariant:"windows",commands:[{prompt:"echo 'Windows style'",output:"Windows style"}],codeString:`
<Terminable
  titleBarVariant="windows"
  title="Command Prompt"
  commands={[
    { prompt: "echo 'Windows style'", output: "Windows style" }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Linux",titleBarVariant:"linux",commands:[{prompt:"echo 'Linux style'",output:"Linux style"}],codeString:`
<Terminable
  titleBarVariant="linux"
  title="Bash"
  commands={[
    { prompt: "echo 'Linux style'", output: "Linux style" }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Minimal",titleBarVariant:"minimal",commands:[{prompt:"echo 'Minimal style'",output:"Minimal style"}],codeString:`
<Terminable
  titleBarVariant="minimal"
  title="Terminal"
  commands={[
    { prompt: "echo 'Minimal style'", output: "Minimal style" }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"none",titleBarVariant:"none",commands:[{prompt:"echo 'No title bar'",output:"No title bar"}],codeString:`
<Terminable
  titleBarVariant="none"
  commands={[
    { prompt: "echo 'No title bar'", output: "No title bar" }
  ]}
/>
              `})]})]}),(0,n.jsxs)(a,{title:"Examples",children:[(0,n.jsxs)("p",{className:"mb-4",children:["Explore these examples to understand how to use the"," ",(0,n.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component in different scenarios."]}),(0,n.jsxs)("div",{className:"grid gap-8 md:grid-cols-2",children:[(0,n.jsx)(ey,{title:"Basic Commands",commands:[{prompt:"echo Hello, World!",output:"Hello, World!"},{prompt:"whoami",output:"terminable-user"},{prompt:"date",output:new Date().toLocaleString()}],codeString:`
<Terminable
  commands={[
    { prompt: "echo Hello, World!", output: "Hello, World!" },
    { prompt: "whoami", output: "terminable-user" },
    { prompt: "date", output: new Date().toLocaleString() }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Delayed Outputs",commands:[{prompt:"sleep 2",output:{placeholder:"Sleeping...",delay:2e3,content:"Done sleeping!"}},{prompt:"fetch data",output:{placeholder:"Loading...",delay:1500,content:"Data loaded successfully!"}}],codeString:`
<Terminable
  commands={[
    {
      prompt: "sleep 2",
      output: {
        placeholder: "Sleeping...",
        delay: 2000,
        content: "Done sleeping!"
      }
    },
    {
      prompt: "fetch data",
      output: {
        placeholder: "Loading...",
        delay: 1500,
        content: "Data loaded successfully!"
      }
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Multi-line Outputs",commands:[{prompt:"ls -l",output:["total 4.0K","-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt","-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt"]},{prompt:"tree",output:[".","├── src","│   ├── components","│   └── pages","└── package.json"]}],codeString:`
<Terminable
  commands={[
    {
      prompt: "ls -l",
      output: [
        "total 4.0K",
        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt",
        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt"
      ]
    },
    {
      prompt: "tree",
      output: [
        ".",
        "├── src",
        "│   ├── components",
        "│   └── pages",
        "└── package.json"
      ]
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Custom Typing Speeds",commands:[{prompt:"Typing slowly...",output:"This demonstrates slow typing",typingSpeed:150},{prompt:"Typing fast!",output:"This demonstrates fast typing",typingSpeed:10},{prompt:"Random typing speed",output:"This demonstrates random typing",typingSpeed:50,typingRandom:50}],codeString:`
<Terminable
  commands={[
    {
      prompt: "Typing slowly...",
      output: "This demonstrates slow typing",
      typingSpeed: 150
    },
    {
      prompt: "Typing fast!",
      output: "This demonstrates fast typing",
      typingSpeed: 10
    },
    {
      prompt: "Random typing speed",
      output: "This demonstrates random typing",
      typingSpeed: 50,
      typingRandom: 50
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"React Node Content",commands:[{prompt:(0,n.jsx)("span",{style:{color:"var(--terminable-prompt)"},children:"Custom prompt"}),output:(0,n.jsx)("span",{style:{color:"var(--terminable-output)"},children:"Custom output"})},{prompt:"Multiple React nodes",output:[(0,n.jsx)("div",{style:{color:"var(--terminable-error)"},children:"First node"},"1"),(0,n.jsx)("div",{style:{color:"var(--terminable-accent)"},children:"Second node"},"2")]}],codeString:`
<Terminable
  commands={[
    {
      prompt: <span style={{ color: "#e0af68" }}>Custom prompt</span>,
      output: <span style={{ color: "#7dcfff" }}>Custom output</span>
    },
    {
      prompt: "Multiple React nodes",
      output: [
        <div style={{ color: "#f7768e" }} key="1">First node</div>,
        <div style={{ color: "#7aa2f7" }} key="2">Second node</div>
      ]
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Callbacks",commands:[{prompt:"onDone callback",output:"This command triggers onDone when finished",onDone:()=>console.log("Done!")},{prompt:"onCopy callback",output:"Click this command to copy it",onCopy:()=>console.log("Copied!")},{prompt:"onBeforeOutput callback",output:{content:"Output shown after onBeforeOutput fires",delay:1500,placeholder:"Preparing output..."},onBeforeOutput:()=>console.log("Before output!")}],codeString:`
<Terminable
  commands={[
    {
      prompt: "onDone callback",
      output: "This command triggers onDone when finished",
      onDone: () => console.log("Done!")
    },
    {
      prompt: "onCopy callback",
      output: "Click this command to copy it",
      onCopy: () => console.log("Copied!")
    },
    {
      prompt: "onBeforeOutput callback",
      output: {
        content: "Output shown after onBeforeOutput fires",
        delay: 1500,
        placeholder: "Preparing output..."
      },
      onBeforeOutput: () => console.log("Before output!")
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Custom Colors",backgroundColor:"#1e1e3f",promptColor:"#f7768e",outputColor:"#9ece6a",commands:[{prompt:"echo 'custom palette'",output:"Background, prompt and output colors are customizable"}],codeString:`
<Terminable
  backgroundColor="#1e1e3f"
  promptColor="#f7768e"
  outputColor="#9ece6a"
  commands={[
    { prompt: "echo 'custom palette'", output: "Custom colors!" }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Complex Outputs",commands:[{prompt:"Complex output",output:{placeholder:"Processing...",delay:2e3,content:["Step 1: Complete","Step 2: Complete","Final result: Success!"]}},{prompt:"Nested complex output",output:[{placeholder:"Loading part 1...",delay:1e3,content:"Part 1 complete"},{placeholder:"Loading part 2...",delay:1500,content:"Part 2 complete"}]}],codeString:`
<Terminable
  commands={[
    {
      prompt: "Complex output",
      output: {
        placeholder: "Processing...",
        delay: 2000,
        content: [
          "Step 1: Complete",
          "Step 2: Complete",
          "Final result: Success!"
        ]
      }
    },
    {
      prompt: "Nested complex output",
      output: [
        {
          placeholder: "Loading part 1...",
          delay: 1000,
          content: "Part 1 complete"
        },
        {
          placeholder: "Loading part 2...",
          delay: 1500,
          content: "Part 2 complete"
        }
      ]
    }
  ]}
/>
              `}),(0,n.jsx)(ey,{title:"Complete Workflow",commands:[{prompt:"Starting system...",output:"System initialized",typingSpeed:80},{prompt:"Loading modules...",output:{placeholder:"Loading...",delay:2e3,content:"Modules loaded"}},{prompt:"Running diagnostics...",output:["CPU: OK","Memory: OK","Storage: OK"],onDone:()=>{}},{prompt:"System ready",output:(0,n.jsx)("span",{style:{color:"var(--terminable-output)"},children:"All systems operational"})}],codeString:`
<Terminable
  commands={[
    {
      prompt: "Starting system...",
      output: "System initialized",
      typingSpeed: 80
    },
    {
      prompt: "Loading modules...",
      output: {
        placeholder: "Loading...",
        delay: 2000,
        content: "Modules loaded"
      }
    },
    {
      prompt: "Running diagnostics...",
      output: [
        "CPU: OK",
        "Memory: OK",
        "Storage: OK"
      ],
      onDone: () => { /* handle completion */ }
    },
    {
      prompt: "System ready",
      output: <span style={{ color: "#9ece6a" }}>All systems operational</span>
    }
  ]}
/>
              `})]})]})]})})}],66780)}]);