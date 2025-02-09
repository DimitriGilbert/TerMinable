(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{1141:(e,t,n)=>{Promise.resolve().then(n.bind(n,9030))},9030:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var o=n(5155);function r(e){let{title:t,children:n}=e;return(0,o.jsxs)("section",{className:"mb-12",children:[(0,o.jsx)("h2",{className:"mb-4 text-3xl font-semibold text-primary",children:t}),(0,o.jsx)("div",{className:"text-foreground/90",children:n})]})}function a(e){let{children:t}=e;return(0,o.jsx)("div",{className:"overflow-x-auto rounded-md bg-muted p-4 my-4",children:(0,o.jsx)("pre",{className:"text-sm",children:(0,o.jsx)("code",{className:"text-foreground/80",children:t})})})}function s(e){let{headers:t,rows:n}=e;return(0,o.jsx)("div",{className:"overflow-x-auto my-4",children:(0,o.jsxs)("table",{className:"min-w-full divide-y divide-border",children:[(0,o.jsx)("thead",{className:"bg-muted",children:(0,o.jsx)("tr",{children:t.map((e,t)=>(0,o.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-foreground/80",children:e},t))})}),(0,o.jsx)("tbody",{className:"divide-y divide-border bg-background",children:n.map((e,t)=>(0,o.jsx)("tr",{children:e.map((e,t)=>(0,o.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-foreground/90",children:e},t))},t))})]})})}var i=n(2115),l=n(3610),d=n(8166),c=n(7357),p=n(7028),m=n(3360),u=n(4256),h=n(1488),y=n(7668),x="Tabs",[g,f]=(0,d.A)(x,[c.RG]),b=(0,c.RG)(),[j,v]=g(x),N=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:a,defaultValue:s,orientation:i="horizontal",dir:l,activationMode:d="automatic",...c}=e,p=(0,u.jH)(l),[x,g]=(0,h.i)({prop:r,onChange:a,defaultProp:s});return(0,o.jsx)(j,{scope:n,baseId:(0,y.B)(),value:x,onValueChange:g,orientation:i,dir:p,activationMode:d,children:(0,o.jsx)(m.sG.div,{dir:p,"data-orientation":i,...c,ref:t})})});N.displayName=x;var w="TabsList",C=i.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...a}=e,s=v(w,n),i=b(n);return(0,o.jsx)(c.bL,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:r,children:(0,o.jsx)(m.sG.div,{role:"tablist","aria-orientation":s.orientation,...a,ref:t})})});C.displayName=w;var S="TabsTrigger",T=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:a=!1,...s}=e,i=v(S,n),d=b(n),p=D(i.baseId,r),u=O(i.baseId,r),h=r===i.value;return(0,o.jsx)(c.q7,{asChild:!0,...d,focusable:!a,active:h,children:(0,o.jsx)(m.sG.button,{type:"button",role:"tab","aria-selected":h,"aria-controls":u,"data-state":h?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:p,...s,ref:t,onMouseDown:(0,l.m)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():i.onValueChange(r)}),onKeyDown:(0,l.m)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&i.onValueChange(r)}),onFocus:(0,l.m)(e.onFocus,()=>{let e="manual"!==i.activationMode;h||a||!e||i.onValueChange(r)})})})});T.displayName=S;var R="TabsContent",k=i.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,forceMount:a,children:s,...l}=e,d=v(R,n),c=D(d.baseId,r),u=O(d.baseId,r),h=r===d.value,y=i.useRef(h);return i.useEffect(()=>{let e=requestAnimationFrame(()=>y.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.jsx)(p.C,{present:a||h,children:n=>{let{present:r}=n;return(0,o.jsx)(m.sG.div,{"data-state":h?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:u,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:y.current?"0s":void 0},children:r&&s})}})});function D(e,t){return"".concat(e,"-trigger-").concat(t)}function O(e,t){return"".concat(e,"-content-").concat(t)}k.displayName=R;var A=n(1567);let I=i.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(C,{ref:t,className:(0,A.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",n),...r})});I.displayName=C.displayName;let M=i.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(T,{ref:t,className:(0,A.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",n),...r})});M.displayName=T.displayName;let L=i.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,o.jsx)(k,{ref:t,className:(0,A.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...r})});L.displayName=k.displayName;var E=n(984),P=n(7193);let V=(0,n(4057).A)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var _=n(814);function B(e){let{value:t,className:n}=e,[r,a]=(0,i.useState)(!1);return(0,o.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(t).then(()=>{a(!0),setTimeout(()=>a(!1),2e3)}).catch(()=>{_.oR.error("Failed to copy to clipboard!")})},className:"p-2 rounded-md hover:bg-gray-700 transition-colors ".concat(n),children:r?(0,o.jsx)(P.A,{className:"w-4 h-4"}):(0,o.jsx)(V,{className:"w-4 h-4"})})}let K=e=>{var t;let{commands:n,title:r,codeString:a,start:s}=e,[l,d]=(0,i.useState)("preview"),[c,p]=(0,i.useState)(0);return(0,i.useEffect)(()=>{p(e=>e+1)},[n]),(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("h3",{className:"text-xl font-semibold text-green-400",children:r}),(0,o.jsxs)(N,{value:l,onValueChange:d,className:"w-full",children:[(0,o.jsxs)(I,{className:"grid w-full grid-cols-2",children:[(0,o.jsx)(M,{value:"preview",children:"Preview"}),(0,o.jsx)(M,{value:"code",children:"Code"})]}),(0,o.jsx)(L,{value:"preview",className:"mt-4",forceMount:!0,children:(0,o.jsx)("div",{className:"preview"===l?"":"hidden",children:(0,o.jsx)(E.A,{commands:n,start:"preview"===l&&!!s},c)})}),(0,o.jsx)(L,{value:"code",className:"mt-4",children:(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)("pre",{className:"overflow-x-auto rounded-md bg-gray-800 p-4",children:(0,o.jsx)("code",{className:"text-sm text-gray-100",children:null==a?void 0:a.trim()})}),(0,o.jsx)(B,{value:null!==(t=null==a?void 0:a.trim())&&void 0!==t?t:"",className:"absolute right-2 top-2"})]})})]})]})};var F=Object.defineProperty,G=new Map,W=new WeakMap,z=0,H=void 0;i.Component;var J=n(3716),U=n(8173),q=n.n(U),Q=n(9572);let X=e=>{let{ref:t,inView:n}=function(){var e;let{threshold:t,delay:n,trackVisibility:o,rootMargin:r,root:a,triggerOnce:s,skip:l,initialInView:d,fallbackInView:c,onChange:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[m,u]=i.useState(null),h=i.useRef(p),[y,x]=i.useState({inView:!!d,entry:void 0});h.current=p,i.useEffect(()=>{let e;if(!l&&m)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:H;if(void 0===window.IntersectionObserver&&void 0!==o){let r=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:a,elements:s}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(W.has(n)||(z+=1,W.set(n,z.toString())),W.get(n)):"0":e[t])}).toString(),n=G.get(t);if(!n){let o;let r=new Map,a=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&o.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach(e=>{e(a,t)})})},e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},G.set(t,n)}return n}(n),i=s.get(e)||[];return s.has(e)||s.set(e,i),i.push(t),a.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),G.delete(r))}}(m,(t,n)=>{x({inView:t,entry:n}),h.current&&h.current(t,n),n.isIntersecting&&s&&e&&(e(),e=void 0)},{root:a,rootMargin:r,threshold:t,trackVisibility:o,delay:n},c),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,m,a,r,s,l,o,c,n]);let g=null==(e=y.entry)?void 0:e.target,f=i.useRef(void 0);m||!g||s||l||f.current===g||(f.current=g,x({inView:!!d,entry:void 0}));let b=[u,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({triggerOnce:!0,threshold:.1});return(0,o.jsx)("div",{ref:t,className:"h-full",children:(0,o.jsx)(K,{...e,start:n})})};function Y(){return(0,o.jsx)("div",{className:"min-h-screen py-12",children:(0,o.jsxs)("div",{className:"container mx-auto px-4",children:[(0,o.jsxs)("header",{className:"mb-8 text-center",children:[(0,o.jsxs)("h1",{className:"mb-2 text-4xl font-bold text-foreground",children:[(0,o.jsx)("span",{className:"text-primary",children:"Terminable"})," Component Documentation"]}),(0,o.jsx)("p",{className:"text-foreground/80",children:"Simulate terminal interactions in your documentation"})]}),(0,o.jsxs)(r,{title:"Introduction",children:[(0,o.jsxs)("p",{className:"mb-4",children:["Wether to show an example of your CLI that is not video, or just to look cool (yes, terminals are cool ! they. are.)"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","is for you."]}),(0,o.jsxs)("p",{className:"mb-4",children:["It is build using"," ",(0,o.jsx)(J.I,{href:"https://ui.shadcn.com/",target:"_blank",color:"rgba(173,251,28,0.8)",size:"12px",duration:.5,scale:1.1,className:"font-semibold drop-shadow-[0_0_8px_rgba(173,251,28,0.8)]",glowClassName:"rounded-md px-1.5 py-0.5 bg-primary/10 dark:bg-primary-foreground/10",children:"Shadcn/ui"})," ","components, and you can (only) install it using my custom"," ",(0,o.jsx)(q(),{href:"https://ui.shadcn.com/docs/installation/nextjs",target:"_blank",className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"shadcn/ui registry"})]})]}),(0,o.jsxs)(r,{title:"Installation",children:[(0,o.jsxs)("p",{className:"mb-4",children:["To install the"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component, you can use the following command:"]}),(0,o.jsx)(Q.m,{className:"w-full max-w-3xl",buttonClassName:"px-4 py-2",preClassName:"w-full",cmd:"shadcn/ui@latest add https://DimitriGilbert.github.io/TerMinable/r/terminable.json"})]}),(0,o.jsxs)(r,{title:"Usage",children:[(0,o.jsxs)("p",{className:"mb-4",children:["To integrate the"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component into your project..."]}),(0,o.jsx)(a,{children:'import Terminable from "~registry/components/ui/Terminable";'})]}),(0,o.jsx)(r,{title:"Props",children:(0,o.jsx)(s,{headers:["Name","Type","Default","Description"],rows:[[(0,o.jsx)("code",{className:"text-primary",children:"commands"},"commands"),(0,o.jsx)("code",{children:"CommandEntry[]"},"commands0"),"-","An array of command objects to be executed in the terminal."]]})}),(0,o.jsxs)(r,{title:"CommandEntry Object Structure",children:[(0,o.jsxs)("p",{className:"mb-4",children:["Each command object in the"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"commands"})," ","array defines a command to be executed in the terminal. Here are the properties you can use:"]}),(0,o.jsx)(s,{headers:["Name","Type","Description"],rows:[[(0,o.jsx)("code",{className:"text-primary",children:"prompt"},"prompt"),(0,o.jsx)("code",{children:"string | ReactNode"},"prompt0"),"The command prompt string or ReactNode to be displayed."],[(0,o.jsx)("code",{className:"text-primary",children:"output"},"output"),(0,o.jsx)("code",{children:"string | OutputContent | Array<string | OutputContent>"},"output0"),'The output of the command. Can be a string, OutputContent\n                object, or an array of both."'],[(0,o.jsx)("code",{className:"text-primary",children:"typingSpeed"},"typingSpeed"),(0,o.jsx)("code",{children:"number"},"typingSpeed0"),"Typing speed for this command, overriding the default."],[(0,o.jsx)("code",{className:"text-primary",children:"typingRandom"},"typingRandom"),(0,o.jsx)("code",{children:"number"},"typingRandom0"),"Randomness factor for typing speed, overriding the default."],[(0,o.jsx)("code",{className:"text-primary",children:"delay"},"delay"),(0,o.jsx)("code",{children:"number"},"delay0"),"Delay before executing this command, overriding the global\n                delay."],[(0,o.jsx)("code",{className:"text-primary",children:"outputDelay"},"outputDelay"),(0,o.jsx)("code",{children:"number"},"outputDelay0"),"Delay before displaying the output of this command."],[(0,o.jsx)("code",{className:"text-primary",children:"onDone"},"onDone"),(0,o.jsx)("code",{children:"() => void"},"onDone0"),"Callback function executed when the command is finished."],[(0,o.jsx)("code",{className:"text-primary",children:"onCopy"},"onCopy"),(0,o.jsx)("code",{children:"() => void"},"onCopy0"),"Callback function executed when the command is copied."],[(0,o.jsx)("code",{className:"text-primary",children:"onBeforeOutput"},"onBeforeOutput"),(0,o.jsx)("code",{children:"() => void"},"onBeforeOutput0"),"Callback function executed before the output is displayed."]]})]}),(0,o.jsxs)(r,{title:"OutputContent Object Structure",children:[(0,o.jsxs)("p",{className:"mb-4",children:["The"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"OutputContent"})," ","object allows you to specify complex output scenarios with placeholders and delays."]}),(0,o.jsx)(s,{headers:["Name","Type","Description"],rows:[[(0,o.jsx)("code",{className:"text-primary",children:"delay"},"delay"),(0,o.jsx)("code",{children:"number"},"delay0"),"Delay before the content is displayed, in milliseconds."],[(0,o.jsx)("code",{className:"text-primary",children:"placeholder"},"placeholder"),(0,o.jsx)("code",{children:"string | ReactNode"},"placeholder0"),"Placeholder content to display while waiting for the delay."],[(0,o.jsx)("code",{className:"text-primary",children:"content"},"content"),(0,o.jsx)("code",{children:"string | ReactNode"},"content0"),"The actual content to display after the delay."]]})]}),(0,o.jsxs)(r,{title:"Examples",children:[(0,o.jsxs)("p",{className:"mb-4",children:["Explore these examples to understand how to use the"," ",(0,o.jsx)("code",{className:"rounded bg-muted px-1 py-0.5 font-mono text-primary",children:"Terminable"})," ","component in different scenarios."]}),(0,o.jsxs)("div",{className:"grid gap-8 md:grid-cols-2",children:[(0,o.jsx)(X,{title:"Basic Commands",commands:[{prompt:"echo Hello, World!",output:"Hello, World!"},{prompt:"whoami",output:"terminable-user"},{prompt:"date",output:new Date().toLocaleString()}],codeString:'\n<Terminable\n  commands={[\n    { prompt: "echo Hello, World!", output: "Hello, World!" },\n    { prompt: "whoami", output: "terminable-user" },\n    { prompt: "date", output: new Date().toLocaleString() }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Delayed Outputs",commands:[{prompt:"sleep 2",output:{placeholder:"Sleeping...",delay:2e3,content:"Done sleeping!"}},{prompt:"fetch data",output:{placeholder:"Loading...",delay:1500,content:"Data loaded successfully!"}}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "sleep 2",\n      output: {\n        placeholder: "Sleeping...",\n        delay: 2000,\n        content: "Done sleeping!"\n      }\n    },\n    {\n      prompt: "fetch data",\n      output: {\n        placeholder: "Loading...",\n        delay: 1500,\n        content: "Data loaded successfully!"\n      }\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Multi-line Outputs",commands:[{prompt:"ls -l",output:["total 4.0K","-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt","-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt"]},{prompt:"tree",output:[".","├── src","│   ├── components","│   └── pages","└── package.json"]}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "ls -l",\n      output: [\n        "total 4.0K",\n        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file1.txt",\n        "-rw-r--r-- 1 user user 1024 Jan 1 00:00 file2.txt"\n      ]\n    },\n    {\n      prompt: "tree",\n      output: [\n        ".",\n        "├── src",\n        "│   ├── components",\n        "│   └── pages",\n        "└── package.json"\n      ]\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Custom Typing Speeds",commands:[{prompt:"Typing slowly...",output:"This demonstrates slow typing",typingSpeed:150},{prompt:"Typing fast!",output:"This demonstrates fast typing",typingSpeed:10},{prompt:"Random typing speed",output:"This demonstrates random typing",typingSpeed:50,typingRandom:50}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "Typing slowly...",\n      output: "This demonstrates slow typing",\n      typingSpeed: 150\n    },\n    {\n      prompt: "Typing fast!",\n      output: "This demonstrates fast typing",\n      typingSpeed: 10\n    },\n    {\n      prompt: "Random typing speed",\n      output: "This demonstrates random typing",\n      typingSpeed: 50,\n      typingRandom: 50\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"React Node Content",commands:[{prompt:(0,o.jsx)("span",{style:{color:"yellow"},children:"Custom prompt"}),output:(0,o.jsx)("span",{style:{color:"cyan"},children:"Custom output"})},{prompt:"Multiple React nodes",output:[(0,o.jsx)("div",{style:{color:"red"},children:"First node"},"1"),(0,o.jsx)("div",{style:{color:"blue"},children:"Second node"},"2")]}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: <span style={{ color: "yellow" }}>Custom prompt</span>,\n      output: <span style={{ color: "cyan" }}>Custom output</span>\n    },\n    {\n      prompt: "Multiple React nodes",\n      output: [\n        <div style={{ color: "red" }} key="1">First node</div>,\n        <div style={{ color: "blue" }} key="2">Second node</div>\n      ]\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Callbacks",commands:[{prompt:"onDone callback",output:"This will trigger a toast",onDone:()=>_.oR.success("Command finished!")},{prompt:"onCopy callback",output:"Click to copy this command",onCopy:()=>_.oR.info("Command copied!")},{prompt:"onBeforeOutput callback",output:"This shows a toast before output",onBeforeOutput:()=>_.oR.warning("About to show output!")}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "onDone callback",\n      output: "This will trigger a toast",\n      onDone: () => toast.success("Command finished!")\n    },\n    {\n      prompt: "onCopy callback",\n      output: "Click to copy this command",\n      onCopy: () => toast.info("Command copied!")\n    },\n    {\n      prompt: "onBeforeOutput callback",\n      output: "This shows a toast before output",\n      onBeforeOutput: () => toast.warning("About to show output!")\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Complex Outputs",commands:[{prompt:"Complex output",output:{placeholder:"Processing...",delay:2e3,content:["Step 1: Complete","Step 2: Complete","Final result: Success!"]}},{prompt:"Nested complex output",output:[{placeholder:"Loading part 1...",delay:1e3,content:"Part 1 complete"},{placeholder:"Loading part 2...",delay:1500,content:"Part 2 complete"}]}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "Complex output",\n      output: {\n        placeholder: "Processing...",\n        delay: 2000,\n        content: [\n          "Step 1: Complete",\n          "Step 2: Complete",\n          "Final result: Success!"\n        ]\n      }\n    },\n    {\n      prompt: "Nested complex output",\n      output: [\n        {\n          placeholder: "Loading part 1...",\n          delay: 1000,\n          content: "Part 1 complete"\n        },\n        {\n          placeholder: "Loading part 2...",\n          delay: 1500,\n          content: "Part 2 complete"\n        }\n      ]\n    }\n  ]}\n/>\n              '}),(0,o.jsx)(X,{title:"Complete Workflow",commands:[{prompt:"Starting system...",output:"System initialized",typingSpeed:80},{prompt:"Loading modules...",output:{placeholder:"Loading...",delay:2e3,content:"Modules loaded"}},{prompt:"Running diagnostics...",output:["CPU: OK","Memory: OK","Storage: OK"],onDone:()=>_.oR.success("Diagnostics complete!")},{prompt:"System ready",output:(0,o.jsx)("span",{style:{color:"green"},children:"All systems operational"})}],codeString:'\n<Terminable\n  commands={[\n    {\n      prompt: "Starting system...",\n      output: "System initialized",\n      typingSpeed: 80\n    },\n    {\n      prompt: "Loading modules...",\n      output: {\n        placeholder: "Loading...",\n        delay: 2000,\n        content: "Modules loaded"\n      }\n    },\n    {\n      prompt: "Running diagnostics...",\n      output: [\n        "CPU: OK",\n        "Memory: OK",\n        "Storage: OK"\n      ],\n      onDone: () => toast.success("Diagnostics complete!")\n    },\n    {\n      prompt: "System ready",\n      output: <span style={{ color: "green" }}>All systems operational</span>\n    }\n  ]}\n/>\n              '})]})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,247,829,688,441,517,358],()=>t(1141)),_N_E=e.O()}]);