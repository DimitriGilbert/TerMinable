(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2321:(e,t,r)=>{Promise.resolve().then(r.bind(r,3374)),Promise.resolve().then(r.t.bind(r,9412,23)),Promise.resolve().then(r.bind(r,9104)),Promise.resolve().then(r.t.bind(r,5786,23))},9104:(e,t,r)=>{"use strict";r.d(t,{ThemeProvider:()=>l,ThemeToggle:()=>g});var o=r(5155),s=r(2115),n=r(3312),a=r(1536),i=r(7113),d=r(814);let u=e=>{let{...t}=e,{theme:r="system"}=(0,i.D)();return(0,o.jsx)(d.l$,{theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},c=(0,s.createContext)(null);function l(e){let{children:t,className:r}=e,[n,a]=(0,s.useState)("dark");return(0,s.useEffect)(()=>{"dark"===n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),(0,o.jsx)(c.Provider,{value:{theme:n,toggleTheme:()=>{a(e=>"light"===e?"dark":"light")}},children:(0,o.jsxs)("body",{className:"dark"===n?"dark":"",children:[(0,o.jsx)("div",{className:r,children:t}),(0,o.jsx)(u,{})]})})}function g(){let{theme:e,toggleTheme:t}=function(){let e=(0,s.useContext)(c);if(!e)throw Error("useTheme must be used within a ThemeProvider");return e}();return(0,o.jsxs)(n.$,{variant:"ghost",size:"icon",onClick:t,className:"hover:bg-white/20",children:["dark"===e?(0,o.jsx)(a.wQq,{className:"h-[1.2rem] w-[1.2rem]"}):(0,o.jsx)(a.V6H,{className:"h-[1.2rem] w-[1.2rem]"}),(0,o.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>u});var o=r(5155),s=r(2115),n=r(2317),a=r(1027),i=r(1567);let d=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=s.forwardRef((e,t)=>{let{className:r,variant:s,size:a,asChild:u=!1,...c}=e,l=u?n.DX:"button";return(0,o.jsx)(l,{className:(0,i.cn)(d({variant:s,size:a,className:r})),ref:t,...c})});u.displayName="Button"},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var o=r(3463),s=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,o.$)(t))}},5786:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[538,711,903,29,441,517,358],()=>t(2321)),_N_E=e.O()}]);