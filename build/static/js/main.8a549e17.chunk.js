(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{232:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(10),l=s.n(a);s(33);var i=(e,t)=>{function s(e,t){if(e.id===t)return e;if(null!=e.children){var n,a=null;for(n=0;null==a&&n<e.children.length;n++)a=s(e.children[n],t);return a}return null}let n;for(let a=0;void 0===n&&a<e.length;a++){let l=s(e[a],t);l&&(n=l)}return n};var c=(e,t)=>{function s(e,t){if(e.children&&e.children.find((e=>e.id===t))){const s=e.children.findIndex((e=>e.id===t));return{parent:e,index:s}}if(null!=e.children){var n,a=null;for(n=0;null==a&&n<e.children.length;n++)a=s(e.children[n],t);return a}return null}let n;for(let a=0;void 0===n&&a<e.length;a++){let l=s(e[a],t);l&&(n=l)}return n},r=function(){return"_"+Math.random().toString(36).substr(2,9)};function o(e){return e.replace(/[!\"#$%&'\s*\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g,"")}const d=[{tag:"div",id:1,classNames:["navbar"],children:[{tag:"div",id:5,classNames:["navbar__brand"],children:[{tag:!1,text:"Brand",id:4}]},{tag:"div",id:"_p57ix438m",classNames:["menu-icon"],children:[{tag:"div",id:"_04btqcxj5",classNames:["menu-icon__bar"],children:[]},{tag:"div",id:"_a1xw92k7b",classNames:["menu-icon__bar"],children:[]},{tag:"div",id:"_8qok9wfs1",classNames:["menu-icon__bar"],children:[]}]}]},{tag:"div",id:"_ks2wq0oj1",classNames:["main"],children:[{tag:"div",id:"_rvoodmaa6",classNames:["card"],children:[{tag:!1,id:"_pee8z2jje",classNames:[],children:[],text:"I am a nice Website"}]}]}],m=[{name:"navbar",txt:"",properties:{"padding-left":{value:40,unit:"px"},"padding-right":{value:40,unit:"px"},"padding-top":{value:30,unit:"px"},"padding-bottom":{value:30,unit:"px"},"background-color":{value:"#db6666",unit:""},display:{value:"flex",unit:""},"justify-content":{value:"space-between",unit:""},"align-items":{value:"center",unit:""}}},{name:"navbar__brand",txt:""},{name:"main",txt:"",properties:{"padding-right":{value:"10",unit:"%"},"padding-left":{value:"10",unit:"%"},"padding-top":{value:40,unit:"px"},"padding-bottom":{value:40,unit:"px"}}},{name:"card",txt:"",properties:{height:{value:481,unit:"px"},"background-color":{value:"#ebebeb",unit:""},"border-top-left-radius":{value:"10",unit:"px"},"border-top-right-radius":{value:"10",unit:"px"},"border-bottom-right-radius":{value:"10",unit:"px"},"border-bottom-left-radius":{value:"10",unit:"px"},"font-size":{value:56,unit:"px"},"padding-top":{value:25,unit:"px"},"padding-right":{value:"25",unit:"px"},"padding-bottom":{value:"25",unit:"px"},"padding-left":{value:"25",unit:"px"}}},{name:"menu-icon",txt:""},{name:"menu-icon__bar",txt:"",properties:{height:{value:"2",unit:"px"},"background-color":{value:"#000000",unit:""},width:{value:"30",unit:"px"},"margin-top":{value:"5",unit:"px"},"margin-bottom":{value:"5",unit:"px"}}}],b="AFTER",h="BEFORE",j="INSIDE";var x=s(0);const u=Object(n.createContext)();class p extends n.Component{constructor(e){super(e),this.addClassName=this.addClassName.bind(this),this.removeClassName=this.removeClassName.bind(this),this.updateClassText=this.updateClassText.bind(this),this.updateClassProperty=this.updateClassProperty.bind(this),this.setCurrentActive=this.setCurrentActive.bind(this),this.addClassToElement=this.addClassToElement.bind(this),this.removeClassFromElement=this.removeClassFromElement.bind(this),this.addChildToElement=this.addChildToElement.bind(this),this.removeElement=this.removeElement.bind(this),this.changeElementText=this.changeElementText.bind(this),this.changeElementSrc=this.changeElementSrc.bind(this),this.updatePseudoClass=this.updatePseudoClass.bind(this),this.changeElementTag=this.changeElementTag.bind(this),this.getClassByName=this.getClassByName.bind(this),this.moveElement=this.moveElement.bind(this),this.cloneElement=this.cloneElement.bind(this),this.importJSON=this.importJSON.bind(this),this.moveElementFromTo=this.moveElementFromTo.bind(this),this.historyMove=this.historyMove.bind(this),this.state={currentActive:void 0,classNames:m,elements:d,history:[{classNames:m,elements:d}],historyPos:0,addClassName:this.addClassName,removeClassName:this.removeClassName,updateClassText:this.updateClassText,updateClassProperty:this.updateClassProperty,setCurrentActive:this.setCurrentActive,addClassToElement:this.addClassToElement,removeClassFromElement:this.removeClassFromElement,addChildToElement:this.addChildToElement,removeElement:this.removeElement,changeElementText:this.changeElementText,changeElementSrc:this.changeElementSrc,updatePseudoClass:this.updatePseudoClass,changeElementTag:this.changeElementTag,moveElement:this.moveElement,moveElementFromTo:this.moveElementFromTo,cloneElement:this.cloneElement,importJSON:this.importJSON,historyMove:this.historyMove,getClassByName:this.getClassByName}}addClassName(e){if(this.state.classNames.findIndex((t=>t.name===e))>-1)return;const t={name:o(e),txt:""},s=[...this.state.classNames,t];return this.setState({classNames:s},(()=>{this.addToHistory()})),t}removeClassName(e){const t=[...this.state.classNames],s=t.indexOf(e);s>-1&&t.splice(s,1),this.setState({classNames:t},(()=>{this.addToHistory()}))}updateClassText(e,t){if(!e)return;const s=[...this.state.classNames],n=s.findIndex((t=>e.name===t.name));n>-1&&(s[n]={...s[n],txt:t}),this.setState({classNames:[...s]})}updateClassProperty(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if(!e)return;const a=[...this.state.classNames],l=a.findIndex((t=>e.name===t.name));l>-1&&(a[l]={...a[l],properties:{...a[l].properties,[t]:{value:s,unit:n}}}),this.setState({classNames:[...a]})}setCurrentActive(e){e?this.setState({currentActive:e}):this.setState({currentActive:!1})}addClassToElement(e,t){const s=[...this.state.elements],n=i(s,e);t=o(t),(null===n||void 0===n?void 0:n.classNames)&&(n&&(-1===n.classNames.indexOf(t)&&n.classNames.push(t),-1===this.state.classNames.indexOf(t)&&this.addClassName(t)),this.setState({elements:s},(()=>{this.addToHistory()})))}removeClassFromElement(e,t){const s=[...this.state.elements],n=i(s,e);if(n){const e=n.classNames.indexOf(t);-1!==e&&n.classNames.splice(e,1)}this.setState({elements:s},(()=>{this.addToHistory()}))}addChildToElement(e,t){const s=[...this.state.elements],n=i(s,e),a={tag:t,id:r(),classNames:[],children:[]};t||(a.text="Text"),n?n.children.push(a):s.push(a),this.setCurrentActive(a),this.setState({elements:s},(()=>{this.addToHistory()}))}removeElement(e){var t;const s=[...this.state.elements];let n=c(s,e);if(e===(null===(t=this.state.currentActive)||void 0===t?void 0:t.id)&&this.setCurrentActive(!1),n)n.parent.children&&n.parent.children.splice(n.index,1);else{let t=s.findIndex((t=>t.id===e));t>-1&&s.splice(t,1)}this.setState({elements:s},(()=>{this.addToHistory()}))}changeElementText(e,t){const s=[...this.state.elements];i(s,e).text=t,this.setState({elements:s},(()=>{this.addToHistory()}))}changeElementSrc(e,t){const s=[...this.state.elements];i(s,e).src=t,this.setState({elements:s},(()=>{this.addToHistory()}))}updatePseudoClass(e,t,s){if(!e)return;const n=[...this.state.classNames],a=n.findIndex((t=>e.name===t.name));a>-1&&(n[a]={...n[a],[t]:s}),this.setState({classNames:[...n]},(()=>{this.addToHistory()}))}changeElementTag(e,t){const s=[...this.state.elements];i(s,e).tag=t,this.setState({elements:s},(()=>{this.addToHistory()}))}getClassByName(e){const t=this.state.classNames.find((t=>t.name===e));return t||this.state.addClassName(e)}moveElement(e,t){const s=[...this.state.elements];let n,a,l=c(s,e);l?(a=l.index,n=l.parent.children):(a=s.findIndex((t=>t.id===e)),n=s),function(e,t){var s=n.splice(e,1)[0];n.splice(t,0,s)}(a,a+t),this.setState({elements:s},(()=>{this.addToHistory()}))}moveElementFromTo(e,t,s){const n=[...this.state.elements];let a=c(n,e),l=c(n,t);const r=i(n,e),o=i(n,t);let d,m,x,u;a?(x=a.index,d=a.parent.children):(x=n.findIndex((t=>t.id===e)),d=n),l?(u=l.index,m=l.parent.children):(u=n.findIndex((e=>e.id===t)),m=n);const p=r.children;p&&i(p,t)?console.log("cant move item inside item"):(!function(e,t){var n,a=d.splice(e,1)[0];switch(s){case h:d==m&&e<t?m.splice(t-1,0,a):m.splice(t,0,a);break;case b:d==m&&e<t?m.splice(t,0,a):m.splice(t+1,0,a);break;case j:null===(n=o.children)||void 0===n||n.push(a)}}(x,u),this.setState({elements:n},(()=>{this.addToHistory()})))}cloneElement(e){const t=[...this.state.elements],s=i(t,e),n=c(t,e),a=(l=s,JSON.parse(JSON.stringify(l)));var l;if(a.id=r(),a.children&&function e(t){t.forEach((t=>{t.id=r(),t.children&&e(t.children)}))}(a.children),n)n.parent.children&&n.parent.children.splice(n.index+1,0,a);else{let s=t.findIndex((t=>t.id===e));t.splice(s+1,0,a)}console.log(e,a),this.setState({elements:t},(()=>{this.addToHistory()}))}importJSON(e){const t=e.target.files[0],s=new FileReader,n=this;s.onload=e=>{const t=JSON.parse(e.target.result),{classNames:s,elements:a}=t;this.addToHistory(),n.setState({classNames:s,elements:a})},s.onerror=e=>{console.log(e)},s.readAsText(t)}addToHistory(){this.setState({history:this.state.history.slice(0,this.state.history.length+this.state.historyPos).concat({elements:this.state.elements,classNames:this.state.classNames}),historyPos:0},(()=>{console.log("history",this.state.history)}))}historyMove(e){const t=this.state.historyPos+e,s=this.state.history.length-1+t;this.setState({classNames:this.state.history[s].classNames,elements:this.state.history[s].elements,historyPos:t})}render(){return Object(x.jsx)(u.Provider,{value:this.state,children:this.props.children})}}const v=e=>Object(x.jsx)(u.Consumer,{children:e.children});var g=e=>{let{children:t}=e;const[s,a]=Object(n.useState)({}),[l,i]=Object(n.useState)(!1);return Object(x.jsxs)("div",{onMouseMove:e=>{const t=e.target.getBoundingClientRect();a(t)},onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:[l&&Object(x.jsx)("div",{style:{position:"fixed",border:"1px solid rgba(99, 102, 241, 1.0)",pointerEvents:"none",left:s.left,top:s.top,height:s.height,width:s.width}}),t]})},O=s(22),f=s.n(O),N=s(237),C=s(238),y=s(239),E=s(240);function w(e){let{currentBox:t,scrollPos:s}=e;const{currentActive:a,removeElement:l,moveElement:i,cloneElement:c,addChildToElement:r}=Object(n.useContext)(u);return Object(x.jsx)(x.Fragment,{children:a&&a.id&&Object(x.jsxs)("div",{className:"border-2 border-indigo-500",style:{marginTop:-1*s,position:"absolute",width:t.width,height:t.height,left:t.x,top:t.y,pointerEvents:"none"},children:[Object(x.jsxs)("div",{style:{pointerEvents:"auto"},className:"inline-flex p-1 text-white bg-indigo-500 rounded-br",children:[Object(x.jsx)("button",{onClick:()=>c(a.id),children:Object(x.jsx)(N.a,{size:16})}),Object(x.jsx)("button",{onClick:()=>i(a.id,-1),children:Object(x.jsx)(C.a,{size:16})}),Object(x.jsx)("button",{onClick:()=>i(a.id,1),children:Object(x.jsx)(y.a,{size:16})}),Object(x.jsx)("button",{onClick:()=>l(a.id),children:Object(x.jsx)(E.a,{size:16})})]}),t.width>180&&t.height>50&&Object(x.jsxs)("div",{className:"absolute top-0 left-0 w-full flex justify-end p-2",children:[Object(x.jsx)("button",{style:{pointerEvents:"auto"},onClick:()=>r(a.id,"div"),className:"bg-indigo-500 text-white text-xs py-1 px-3 rounded-l border-r border-indigo-600",children:"+ DIV"}),Object(x.jsx)("button",{style:{pointerEvents:"auto"},onClick:()=>r(a.id,!1),className:"bg-indigo-500 text-white text-xs py-1 px-3 rounded-r",children:"+ Text"})]})]})})}function T(e){var t,s;let{children:l,title:i,...c}=e;const[r,o]=Object(n.useState)(null),d=null===r||void 0===r||null===(t=r.contentWindow)||void 0===t||null===(s=t.document)||void 0===s?void 0:s.body;return Object(n.useEffect)((()=>{var e;const t=null===r||void 0===r||null===(e=r.contentWindow)||void 0===e?void 0:e.document;t&&t.addEventListener("scroll",(e=>{c.onScroll(d.scrollTop)}))}),[d]),Object(x.jsx)("iframe",{title:i,...c,ref:o,children:d&&Object(a.createPortal)(l,d)})}function k(e){const{classNames:t,elements:s,currentActive:a,setCurrentActive:l,changeElementText:i}=Object(n.useContext)(u),[c,r]=Object(n.useState)(),[o,d]=Object(n.useState)({x:0,y:0,width:0,height:0}),[m,b]=Object(n.useState)(0);Object(n.useLayoutEffect)((()=>{if(c){const e=c.getBoundingClientRect();e.y+=m,d(e)}}),[c,t,e.responsiveWidth,s]);let h="";t.forEach((e=>{let t="";if(e.properties)for(let[s,n]of Object.entries(e.properties))t+="".concat(s,": ").concat(n.value).concat(n.unit,";\n");h+=".".concat(e.name," { \n").concat(e.txt," \n").concat(t," } \n")+".".concat(e.name,":hover { ").concat(e[":hover"]," } \n")+".".concat(e.name,"::before { ").concat(e[":before"]," } \n")+".".concat(e.name,"::after { ").concat(e[":after"]," } \n")}));const j=e=>e.map((e=>{const t=e.tag?e.tag:n.Fragment;let s="";return e.classNames&&e.classNames.forEach((e=>{s+="".concat(e," ")})),Object(x.jsx)(n.Fragment,{children:t!==n.Fragment?Object(x.jsx)(x.Fragment,{children:"img"!==t?Object(x.jsx)(t,{ref:t=>{e.id===(null===a||void 0===a?void 0:a.id)&&r(t)},className:e.classNames&&s,onClick:t=>{t.stopPropagation(),l(e)},children:e.children&&j(e.children)}):Object(x.jsx)(t,{className:e.classNames&&s,ref:t=>{e.id===(null===a||void 0===a?void 0:a.id)&&r(t)},onClick:t=>{t.stopPropagation(),l(e)},src:e.src})}):Object(x.jsx)(t,{children:e.text&&Object(x.jsx)(f.a,{html:e.text,onChange:t=>{i(e.id,t.target.value)},tagName:"span"})})},e.id)}));return Object(x.jsxs)("div",{className:"w-full m-8 relative overflow-hidden",children:[Object(x.jsxs)(T,{onScroll:b,className:"bg-white shadow-lg max-w-full h-full m-auto",style:{width:e.responsiveWidth},children:[Object(x.jsx)("link",{rel:"stylesheet",href:"./reset.css"}),Object(x.jsx)(g,{children:j(s)}),Object(x.jsx)("style",{children:h})]}),Object(x.jsx)("div",{className:"absolute w-full h-full top-0 pointer-events-none",children:Object(x.jsx)("div",{className:"relative m-auto pointer-events-none",style:{width:e.responsiveWidth},children:Object(x.jsx)(w,{currentActive:a,currentBox:o,scrollPos:m})})})]})}const S=e=>{let{title:t,children:s,isOpen:a=!0}=e;const[l,i]=Object(n.useState)(a),c=l?"block":"hidden",r=l?"rotate-180":"";return Object(x.jsxs)("div",{className:"border-b",children:[Object(x.jsx)("h2",{className:"block",children:Object(x.jsxs)("button",{className:"block w-full text-left relative text-xs font-bold uppercase tracking-wider p-4",type:"button",onClick:()=>{i(!l)},children:[t,Object(x.jsx)("span",{className:"absolute right-4 top-4 transition transform ".concat(r),children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})]})}),Object(x.jsx)("div",{className:"px-4 pb-4 "+c,children:Object(x.jsx)("div",{children:s})})]})};function F(e){let{onClick:t,onDelete:s,children:n,isActive:a,size:l="md"}=e;const i=a?"bg-indigo-500 text-white":"text-gray-700 bg-gray-200",c={xs:"text-xs",sm:"text-sm",md:"",lg:"text-lg"}[l];return Object(x.jsxs)("div",{className:"inline-flex rounded px-2 mr-1 mb-1 ".concat(i," ").concat(c),children:[Object(x.jsx)("span",{onClick:t,children:n}),s&&Object(x.jsx)("button",{className:"ml-1",onClick:s,children:"\xd7"})]})}var A=s(23),P=s.n(A),B=s(11),z=s.n(B);function L(e){const t=function(e){let{classNames:t,elements:s}=e,a="";t.forEach((e=>{let t="";if(e.properties)for(let[s,n]of Object.entries(e.properties))t+="".concat(s,": ").concat(n.value).concat(n.unit,";\n");a+=".".concat(e.name," { \n").concat(e.txt," \n").concat(t," } \n")+".".concat(e.name,":hover { ").concat(e[":hover"]," } \n")+".".concat(e.name,"::before { ").concat(e[":before"]," } \n")+".".concat(e.name,"::after { ").concat(e[":after"]," } \n")}));const l=e=>e.map((e=>{const t=e.tag?e.tag:n.Fragment;let s="";return e.classNames&&e.classNames.forEach((e=>{s+="".concat(e," ")})),Object(x.jsx)(x.Fragment,{children:t!==n.Fragment?Object(x.jsx)(x.Fragment,{children:"img"!==t?Object(x.jsx)(t,{className:e.classNames&&s,children:e.children&&l(e.children)}):Object(x.jsx)(t,{src:e.src,className:e.classNames&&s})}):Object(x.jsx)(t,{children:e.text&&e.text})})})),i=()=>Object(x.jsxs)(x.Fragment,{children:[l(s),Object(x.jsx)("style",{id:"css-reset",children:"\n  html,\n  body {\n    font-family: -apple-system, BlinkMacSystemFont, sans-serif;\n  }\n\n  *,\n  ::before,\n  ::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    border-width: 0;\n    border-style: solid;\n    border-color: currentColor;\n  }"}),Object(x.jsx)("style",{children:a})]});return Object(B.html)(P.a.renderToString(Object(x.jsx)(i,{})))}(e),s=new Blob([t],{type:"text/html"}),a=window.URL.createObjectURL(s),l=document.createElement("a");l.href=a,l.download="export.html",l.click()}function M(e){let{onClick:t,value:s,onChange:n,placeholder:a,btnText:l}=e;return Object(x.jsxs)("div",{className:"flex my-2",children:[Object(x.jsx)("input",{className:"rounded-l border py-2 px-4 w-48",type:"text",placeholder:a,value:s,onKeyDown:e=>{"Enter"===e.key&&t()},onChange:e=>{n(e.target.value)}}),Object(x.jsx)("button",{className:"py-2 px-6 rounded-r border text-indigo-500 border-indigo-500 flex-grow",onClick:t,children:l})]})}const R=["div","span","ul","li","nav","main","a","p"];function I(e){let{elementSelected:t,text:s,setText:a,changeElementText:l,changeElementTag:i,changeElementSrc:c}=e;const[r,o]=Object(n.useState)(t&&t.tag),[d,m]=Object(n.useState)(t&&t.src||"");return Object(x.jsxs)(x.Fragment,{children:[t&&!1===t.tag&&Object(x.jsx)(M,{btnText:"Change Text",value:s,onChange:a,onClick:()=>{l(t.id,s)}}),t&&t.tag&&Object(x.jsx)(M,{btnText:"Change Tag",value:r,onChange:e=>{o(e)},onClick:()=>{R.indexOf(r)>-1?i(t.id,r):console.log("Error: Allowed Tags: ",R)}}),t&&"img"===t.tag&&Object(x.jsx)(M,{btnText:"Change Image Source",value:d,onChange:e=>{m(e)},onClick:()=>{c(t.id,d)}})]})}var _=s(24),H=s.n(_),W=(s(231),s(25)),J=s.n(W);function D(e){const[t,s]=Object(n.useState)(e.value),a=Object(n.useRef)(),{direction:l}=e;let i=null;const c="x"===l,r=s=>{const n=c?s.clientX:s.clientY;let a;a=c?-i+n+Number(t):i-n+Number(t),e.onChange(a)},o=e=>{s(a.current.value),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",o)};return Object(n.useEffect)((()=>{s(e.value)}),[s,e.value]),Object(x.jsx)("input",{className:"w-full",ref:a,type:"number",value:e.value,onMouseDown:e=>{const t="x"===l?e.clientX:e.clientY;i=t,s(e.target.value),document.addEventListener("mousemove",r),document.addEventListener("mouseup",o)},onChange:t=>{s(t.target.value),e.onChange(t.target.value)},style:{cursor:"x"===l?"ew-resize":"ns-resize"}})}function U(e){var t,s,a,l;let{propertyName:i,cssClass:c,label:r,direction:o,...d}=e;const m=(null===c||void 0===c||null===(t=c.properties)||void 0===t||null===(s=t[i])||void 0===s?void 0:s.value)||"",[b,h]=Object(n.useState)(m),j=(null===c||void 0===c||null===(a=c.properties)||void 0===a||null===(l=a[i])||void 0===l?void 0:l.unit)||"px",[u,p]=Object(n.useState)(j);return Object(n.useEffect)((()=>{h(m),p(j)}),[c,i,j,m]),Object(x.jsx)(v,{children:e=>{let{updateClassProperty:t}=e;return Object(x.jsxs)("div",{className:"border rounded p-2 my-1 mr-2",...d,children:[Object(x.jsx)("label",{className:"text-xs block text-gray-400",children:r}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(D,{direction:o,value:b,onChange:e=>{h(e),t(c,i,e,u)}}),Object(x.jsx)("select",{className:"text-xs text-gray-400 appearance-none w-4",value:u,onChange:e=>{p(e.target.value),"auto"===e.target.value?(h(""),t(c,i,"",e.target.value)):t(c,i,b,e.target.value)},children:["px","%","em","rem","vh","vw","auto"].map((e=>Object(x.jsx)("option",{value:e,children:e},e)))})]})]})}})}function V(e){var t,s;let{propertyName:a,cssClass:l,label:i}=e;const c=(null===l||void 0===l||null===(t=l.properties)||void 0===t||null===(s=t[a])||void 0===s?void 0:s.value)||"",[r,o]=Object(n.useState)(c);return Object(n.useEffect)((()=>{o(c)}),[l,c]),Object(x.jsx)(v,{children:e=>{let{updateClassProperty:t}=e;return Object(x.jsxs)("div",{className:"border rounded p-2 my-1 mr-2 w-full",children:[Object(x.jsxs)("label",{className:"text-xs block text-gray-400",children:[i,Object(x.jsx)("button",{className:"ml-2",onClick:()=>{o(""),t(l,a,"")},children:"\xd7"})]}),Object(x.jsx)("input",{className:"w-5 h-5 rounded-full border-0",type:"color",value:r,onChange:e=>{const s=e.target.value;o(s),t(l,a,s)}})]})}})}function q(e){var t,s;let{propertyName:a,cssClass:l,options:i,label:c}=e;const r=(null===l||void 0===l||null===(t=l.properties)||void 0===t||null===(s=t[a])||void 0===s?void 0:s.value)||0,[o,d]=Object(n.useState)(r);return Object(n.useEffect)((()=>{d(r)}),[l,r]),Object(x.jsx)(v,{children:e=>{let{updateClassProperty:t}=e;return Object(x.jsxs)("div",{children:[c&&Object(x.jsx)("p",{className:"text-xs",children:c}),i.map((e=>Object(x.jsx)(F,{size:"sm",isActive:e===o,value:o,onClick:()=>{d(e),t(l,a,e)},children:e})))]})}})}function K(e){var t,s;let{propertyName:a,cssClass:l,label:i}=e;const c=(null===l||void 0===l||null===(t=l.properties)||void 0===t||null===(s=t[a])||void 0===s?void 0:s.value)||"",[r,o]=Object(n.useState)(c);return Object(n.useEffect)((()=>{o(c)}),[l,c]),Object(x.jsx)(v,{children:e=>{let{updateClassProperty:t}=e;return Object(x.jsxs)("div",{className:"border rounded p-2 my-1 mr-2 w-full",children:[Object(x.jsxs)("label",{className:"text-xs block text-gray-400",children:[i,Object(x.jsx)("button",{className:"ml-2",onClick:()=>{o(""),t(l,a,"")},children:"\xd7"})]}),Object(x.jsx)("input",{type:"text",value:r,onChange:e=>{const s=e.target.value;o(s),t(l,a,s)}})]})}})}const X=[{name:"width",label:"Width",direction:"x"},{name:"height",label:"Height",direction:"y"}],Y=[{name:"min-width",label:"Min W",direction:"x"},{name:"min-height",label:"Min H",direction:"y"},{name:"max-width",label:"Max W",direction:"x"},{name:"max-height",label:"Max H",direction:"y"}],G=[{name:"font-size",label:"Font Size",direction:"y"},{name:"line-height",label:"Line",direction:"y"},{name:"letter-spacing",label:"Spacing",direction:"y"}],$={name:"text-align",options:["left","center","right"]},Q="font-family",Z="Font Family",ee="color",te="Text Color",se={name:"font-weight",label:"Font Family",options:["100","200","300","400","500","600","700"]},ne=[{name:"padding-top",label:"Top",direction:"y"},{name:"padding-right",label:"Right",direction:"x"},{name:"padding-bottom",label:"Bottom",direction:"y"},{name:"padding-left",label:"Left",direction:"x"}],ae=[{name:"margin-top",label:"Top",direction:"y"},{name:"margin-right",label:"Right",direction:"x"},{name:"margin-bottom",label:"Bottom",direction:"y"},{name:"margin-left",label:"Left",direction:"x"}],le=[{name:"border-top-width",label:"Top",direction:"y"},{name:"border-right-width",label:"Right",direction:"x"},{name:"border-bottom-width",label:"Bottom",direction:"y"},{name:"border-left-width",label:"Left",direction:"x"}],ie=[{name:"border-top-left-radius",label:"Top Left"},{name:"border-top-right-radius",label:"Top Right"},{name:"border-bottom-right-radius",label:"B. Right"},{name:"border-bottom-left-radius",label:"B. Left"}],ce="border-color",re="Border Color",oe=[{name:"background-color",label:"Background C."}],de={name:"position",options:["static","relative","absolute","fixed","sticky"]},me=[{name:"top",label:"Top",direction:"y"},{name:"right",label:"Right",direction:"x"},{name:"bottom",label:"Bottom",direction:"y"},{name:"left",label:"Left",direction:"x"}],be={name:"display",options:["flex","inline-flex","block","inline-block","inline"]},he={name:"justify-content",options:["flex-start","center","flex-end","space-between","space-around"]},je={name:"align-items",options:["flex-start","center","flex-end","stretch"]},xe=[{name:"flex-wrap",options:["no-wrap","wrap"]},{name:"flex-grow",options:["0","1"]},{name:"flex-shrink",options:["0","1"]}];function ue(e){let{cssClass:t}=e;return Object(x.jsxs)("div",{children:[Object(x.jsxs)(S,{title:"Basic",isOpen:!0,children:[Object(x.jsxs)("div",{className:"flex",children:[oe.map((e=>Object(x.jsx)(V,{propertyName:e.name,label:e.label,cssClass:t},e.name))),X.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))]}),Object(x.jsx)("div",{className:"flex mb-3",children:Y.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))})]}),Object(x.jsx)(S,{title:"Typography",isOpen:!0,children:Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)(K,{propertyName:Q,label:Z,cssClass:t}),Object(x.jsx)(V,{propertyName:ee,label:te,cssClass:t})]}),Object(x.jsx)("div",{className:"flex",children:G.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{className:"text-xs text-gray-400",children:"Font Weight"}),Object(x.jsx)(q,{propertyName:se.name,options:se.options,cssClass:t})]}),Object(x.jsxs)("div",{className:"mb-3",children:[Object(x.jsx)("p",{className:"text-xs text-gray-400",children:"Text Align"}),Object(x.jsx)(q,{propertyName:$.name,options:$.options,cssClass:t})]})]})}),Object(x.jsxs)(S,{title:"Position",isOpen:!1,children:[Object(x.jsx)("div",{className:"flex",children:Object(x.jsx)(q,{propertyName:de.name,options:de.options,cssClass:t})}),Object(x.jsx)("div",{className:"flex mb-3",children:me.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))})]}),Object(x.jsxs)(S,{title:"Layout",isOpen:!1,children:[Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsx)(q,{propertyName:be.name,options:be.options,cssClass:t})}),Object(x.jsxs)("p",{className:"text-sm mb-2",children:["Justify Content"," ",Object(x.jsx)("span",{className:"text-xs text-gray-400",children:"(Flex only)"})]}),Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsx)(q,{propertyName:he.name,options:he.options,cssClass:t})}),Object(x.jsxs)("p",{className:"text-sm mb-2",children:["Align Items ",Object(x.jsx)("span",{className:"text-xs text-gray-400",children:"(Flex only)"})]}),Object(x.jsx)("div",{className:"mb-3",children:Object(x.jsx)(q,{propertyName:je.name,options:je.options,cssClass:t})}),Object(x.jsx)("div",{className:"flex mb-3",children:xe.map((e=>Object(x.jsx)("div",{className:"w-1/3",children:Object(x.jsx)(q,{propertyName:e.name,label:e.name,options:e.options,cssClass:t})},e.name)))})]}),Object(x.jsxs)(S,{title:"Spacing",isOpen:!1,children:[Object(x.jsx)("p",{className:"text-sm mb-2",children:"Padding"}),Object(x.jsx)("div",{className:"flex mb-3",children:ne.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))}),Object(x.jsx)("p",{className:"text-sm mb-2",children:"Margin"}),Object(x.jsx)("div",{className:"flex mb-3",children:ae.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))})]}),Object(x.jsxs)(S,{title:"Border",isOpen:!1,children:[Object(x.jsx)(V,{propertyName:ce,label:re,cssClass:t}),Object(x.jsx)("p",{className:"text-sm mb-2",children:"Border Radius"}),Object(x.jsx)("div",{className:"flex mb-3",children:ie.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))}),Object(x.jsx)("p",{className:"text-sm mb-2",children:"Border Width"}),Object(x.jsx)("div",{className:"flex mb-3",children:le.map((e=>Object(x.jsx)(U,{direction:e.direction,propertyName:e.name,label:e.label,cssClass:t},e.name)))})]})]})}function pe(e){let{onAdd:t,size:s="md"}=e;const[a,l]=Object(n.useState)(!1),[i,c]=Object(n.useState)(""),r=Object(n.useRef)(),o=()=>{""!==i&&t(i),c(""),r.current.blur(),l(!1)};Object(n.useEffect)((()=>{a&&r.current.focus()}),[a]);const d={xs:"text-xs",sm:"text-sm",md:"",lg:"text-lg"}[s];return Object(x.jsx)("div",{className:"inline-block rounded mr-1 mb-1 bg-indigo-500 text-white ".concat(d),children:a?Object(x.jsx)("input",{className:"bg-transparent w-auto px-2",ref:r,value:i,onChange:e=>{c(e.target.value)},onKeyDown:e=>{"Enter"===e.key&&o()},onBlur:o}):Object(x.jsx)("button",{className:"px-2",onClick:()=>{l(!0)},children:"+"})})}function ve(e){let{classNameRecieverEl:t,selectClass:s}=e;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{children:e=>{let{addClassToElement:n,getClassByName:a}=e;return Object(x.jsx)(pe,{onAdd:e=>{n(t.id,e),s(a(e))},size:"lg"})}})})}function ge(e){var t;let{elementSelected:s,addClassName:n,cssClass:a,classNames:l,selectClass:i,setPseudo:c,pseudo:r,selectPseudo:o,val:d,setVal:m,updatePseudoClass:b,updateClassText:h,removeClassFromElement:j}=e;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"p-3 border-b",children:[Object(x.jsx)("p",{className:"text-xs font-bold uppercase tracking-wider mb-3",children:"Classes"}),(null===s||void 0===s?void 0:s.classNames)&&s.classNames.map((e=>Object(x.jsxs)(F,{size:"lg",isActive:e===(null===a||void 0===a?void 0:a.name),onClick:()=>{const t=l.find((t=>t.name===e));t?i(t):n(e)},onDelete:()=>j(s.id,e),children:[".",e]},e))),s&&Object(x.jsx)(ve,{classNameRecieverEl:s,selectClass:i})]}),a&&(null===s||void 0===s||null===(t=s.classNames)||void 0===t?void 0:t.length)>0&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ue,{cssClass:a}),Object(x.jsxs)(S,{title:"Additional CSS",isOpen:!1,children:[a&&Object(x.jsxs)("div",{className:"text-sm mb-2",children:[Object(x.jsx)("span",{className:"rounded inline-block ".concat(""===r?"bg-gray-400":"bg-gray-200"," px-2 mr-1 mb-1"),onClick:()=>{const e=l.find((e=>e.name===a.name));i(e),c("")},children:"class"}),Object(x.jsx)("span",{className:"rounded inline-block ".concat(":hover"===r?"bg-gray-400":"bg-gray-200"," px-2 bg-secondary mr-1 mb-1"),onClick:()=>{const e=l.find((e=>e.name===a.name));o(e,":hover")},children:":hover"}),Object(x.jsx)("span",{className:"rounded inline-block ".concat(":before"===r?"bg-gray-400":"bg-gray-200"," px-2 bg-secondary mr-1 mb-1"),onClick:()=>{const e=l.find((e=>e.name===a.name));o(e,":before")},children:":before"}),Object(x.jsx)("span",{className:"rounded inline-block ".concat(":after"===r?"bg-gray-400":"bg-gray-200"," px-2 bg-secondary mr-1 mb-1"),onClick:()=>{const e=l.find((e=>e.name===a.name));o(e,":after")},children:":after"})]}),Object(x.jsx)("pre",{className:"text-xs mb-3",children:Object(x.jsxs)("code",{children:[".",a&&a.name+r," { ... }"]})}),Object(x.jsx)(J.a,{className:"hljs language-css rounded mt-2 mb-4",value:d,onValueChange:e=>{m(e),""!==r?b(a,r,e):h(a,e)},onBlur:()=>{h(a,d),""!==r?b(a,r,d):h(a,d)},highlight:e=>{return t=e,H.a.highlight(t,{language:"css"}).value;var t},padding:16,style:{fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:12}})]})]})]})}var Oe=s(249);const fe=Object(n.createContext)();function Ne(){const[e,t]=Object(n.useState)("/*write some code*/"),[s,a]=Object(n.useState)(),[l,i]=Object(n.useState)("new-class"),[c,r]=Object(n.useState)(""),[o,d]=Object(n.useState)(""),{classNames:m,elements:b,removeClassName:h,updateClassText:j,addClassName:p,addClassToElement:v,removeClassFromElement:g,changeElementText:O,updatePseudoClass:f,changeElementTag:N,currentActive:C,getClassByName:y,importJSON:E,changeElementSrc:w}=Object(n.useContext)(u);Object(n.useEffect)((()=>{var e;if((null===C||void 0===C||null===(e=C.classNames)||void 0===e?void 0:e.length)>0){const e=y(C.classNames[0]);e&&T(e)}}),[C,y]);const T=e=>{t(e.txt),a(e)};return Object(x.jsx)(fe.Provider,{value:T,children:Object(x.jsx)("div",{className:"w-96 flex-shrink-0 border-l shadow-xl overflow-auto bg-white",children:Object(x.jsxs)(Oe.a.Group,{children:[Object(x.jsxs)(Oe.a.List,{className:"border-b flex text-xs tracking-wider",children:[Object(x.jsx)(Oe.a,{className:e=>{let{selected:t}=e;return t?"p-4 border-b-2 border-indigo-500 flex-1 font-bold uppercase":"p-4 flex-1 font-bold uppercase"},children:"Element"}),Object(x.jsx)(Oe.a,{className:e=>{let{selected:t}=e;return t?"p-4 border-b-2 border-indigo-500 flex-1 font-bold uppercase":"p-4 flex-1 font-bold uppercase"},children:"Document"})]}),Object(x.jsxs)(Oe.a.Panels,{children:[Object(x.jsxs)(Oe.a.Panel,{children:[C&&C.tag&&Object(x.jsx)(ge,{elementSelected:C,addClassName:p,cssClass:s,classNames:m,selectClass:T,setPseudo:d,pseudo:o,selectPseudo:(e,s)=>{a(e),d(s),e&&t(e[s]?e[s]:"")},val:e,setVal:t,updatePseudoClass:f,updateClassText:j,removeClassFromElement:g}),Object(x.jsx)(S,{title:"Element Details",isOpen:!1,children:Object(x.jsx)(I,{elementSelected:C,text:c,setText:r,changeElementText:O,selectClass:T,classNames:m,addClassName:p,removeClassFromElement:g,newClassName:l,setNewClassName:i,addClassToElement:v,changeElementTag:N,changeElementSrc:w})})]}),Object(x.jsxs)(Oe.a.Panel,{children:[Object(x.jsx)(S,{title:"All CSS Classes",isOpen:!1,children:m.map((e=>Object(x.jsxs)(F,{isActive:e.name===(null===s||void 0===s?void 0:s.name),onClick:()=>T(e),onDelete:()=>h(e),children:[Object(x.jsx)("button",{className:"mr-2",onClick:()=>v(C.id,e.name),children:"+"}),e.name]},e.name)))}),Object(x.jsxs)(S,{title:"Export",isOpen:!0,children:[Object(x.jsx)("button",{className:"mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow",onClick:()=>L({classNames:m,elements:b}),children:"Export HTML"}),Object(x.jsx)("button",{className:"mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow",onClick:()=>function(e){let{classNames:t,elements:s}=e;const n=z()(JSON.stringify({classNames:t,elements:s})),a=new Blob([n],{type:"application/json"}),l=window.URL.createObjectURL(a),i=document.createElement("a");i.href=l,i.download="data.json",i.click()}({classNames:m,elements:b}),children:"Save JSON"})]}),Object(x.jsx)(S,{title:"Import",isOpen:!0,children:Object(x.jsxs)("label",{className:"mt-3 block text-center py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow",children:["import JSON",Object(x.jsx)("input",{className:"hidden",type:"file",onChange:E,accept:"application/json"})]})})]})]})]})})})}function Ce(e){let{isOpen:t=!0,...s}=e;const[a,l]=Object(n.useState)(t);return Object(x.jsxs)("div",{className:"relative",...s,children:[Object(x.jsx)("button",{className:"absolute -left-3 top-1",onClick:()=>l(!a),children:a?"-":"+"}),s.title,Object(x.jsx)("div",{children:a?s.children:null})]})}var ye=s(242),Ee=s(250),we=s(251);function Te(e){let{setCurrentActive:t,currentActive:s,addChildToElement:n,removeElement:a,moveElement:l,moveElementFromTo:i,cloneElement:c,el:r}=e;const[{},o]=Object(Ee.a)({type:"treeitem",item:{id:r.id}}),[{isOverBefore:d},m]=Object(we.a)({accept:"treeitem",drop:e=>{console.log("move ".concat(e.id," to ").concat(r.id,", before")),i(e.id,r.id,h)},collect:e=>({isOverBefore:e.isOver()})}),[{isOverAfter:u},p]=Object(we.a)({accept:"treeitem",drop:e=>{console.log("move ".concat(e.id," to ").concat(r.id,", after")),i(e.id,r.id,b)},collect:e=>({isOverAfter:e.isOver()})}),[{isOverInside:v},g]=Object(we.a)({accept:"treeitem",drop:e=>{console.log("move ".concat(e.id," to ").concat(r.id,", inside")),i(e.id,r.id,j)},collect:e=>({isOverInside:e.isOver()})});let O="";r.classNames&&r.classNames.forEach((e=>{O+=".".concat(e)}));const f=r.id===(null===s||void 0===s?void 0:s.id)?"bg-gray-200":"",w=Object(x.jsxs)("div",{className:"py-1 flex",onClick:()=>{t(r)},children:[Object(x.jsxs)("div",{className:"flex rounded overflow-hidden mr-1",style:{maxWidth:150},children:[Object(x.jsxs)("span",{className:"pl-1 pr-2 bg-gray-300",ref:o,draggable:!0,children:[Object(x.jsx)("span",{className:"inline",children:Object(x.jsx)(ye.a,{size:8,className:"inline-block mr-1"})}),r.tag?r.tag:"text: ",r.text&&r.text]}),Object(x.jsx)("span",{className:"px-2 bg-gray-200 text-gray-600",children:r.classNames&&O})]}),Object(x.jsx)("button",{className:"mx-1",onClick:()=>l(r.id,-1),children:Object(x.jsx)(C.a,{size:12})}),Object(x.jsx)("button",{className:"mx-1",onClick:()=>l(r.id,1),children:Object(x.jsx)(y.a,{size:12})}),Object(x.jsx)("button",{className:"mx-1",onClick:()=>c(r.id),children:Object(x.jsx)(N.a,{size:12})}),Object(x.jsx)("button",{className:"mx-1",onClick:e=>{e.stopPropagation(),a(r.id)},children:Object(x.jsx)(E.a,{size:12})}),r.tag&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"px-2 rounded bg-gray-300 mr-1",onClick:()=>{n(r.id,"div")},children:"+ div"}),Object(x.jsx)("button",{className:"px-2 rounded bg-gray-300 mr-1",onClick:()=>{n(r.id,"img")},children:"+ img"}),Object(x.jsx)("button",{className:"px-2 rounded bg-gray-300 mr-1",onClick:()=>{n(r.id,!1)},children:"+ Text"})]})]});return Object(x.jsxs)("li",{className:"text-xs "+f,children:[Object(x.jsx)("div",{className:d&&"bg-indigo-500",style:{height:4},ref:m}),Object(x.jsx)(Ce,{title:w,children:r.children&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:v&&"bg-indigo-500",style:{height:2,width:"100%",position:"absolute",left:"1rem"},ref:g}),Object(x.jsx)(ke,{childrenArray:r.children,setCurrentActive:t,currentActive:s,addChildToElement:n,removeElement:a,moveElement:l,moveElementFromTo:i,cloneElement:c})]})}),Object(x.jsx)("div",{className:u&&"bg-indigo-500",style:{height:4},ref:p})]},r.id)}function ke(e){return Object(x.jsx)("ul",{className:"ml-3 w-full whitespace-nowrap",children:e.childrenArray.map((t=>Object(n.createElement)(Te,{...e,el:t,key:t.id})))})}function Se(){return Object(x.jsx)(v,{children:e=>{let{elements:t,setCurrentActive:s,currentActive:n,addChildToElement:a,removeElement:l,classNames:i,moveElement:c,moveElementFromTo:r,cloneElement:o}=e;return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"border-t overflow-auto pb-5",children:Object(x.jsx)(ke,{childrenArray:t,setCurrentActive:s,currentActive:n,addChildToElement:a,removeElement:l,classNames:i,moveElement:c,moveElementFromTo:r,cloneElement:o})}),Object(x.jsx)("button",{onClick:()=>a(null,"div"),className:"mt-3 w-full py-2 px-6 rounded border text-indigo-500 border-indigo-500 flex-grow",children:"+"})]})}})}function Fe(){return Object(x.jsx)("div",{className:"w-96 flex-shrink-0 border-l shadow-xl overflow-auto bg-white",children:Object(x.jsx)(S,{title:"Element Tree",children:Object(x.jsx)(Se,{})})})}var Ae=s(243),Pe=s(244),Be=s(245),ze=s(246),Le=s(247);function Me(e){let{setResponsiveWidth:t,responsiveWidth:s}=e;const{historyMove:a,historyPos:l,history:i}=Object(n.useContext)(u);return Object(x.jsxs)("div",{className:"text-xs h-12 border-b bg-gray-900 text-gray-500 flex space-x-4 items-center justify-center",children:[Object(x.jsxs)("div",{className:"mr-5",children:[i.length-1+l>0&&Object(x.jsx)("button",{className:"mr-2",onClick:()=>a(-1),children:Object(x.jsx)(Ae.a,{size:16})}),l<0&&Object(x.jsx)("button",{onClick:()=>a(1),children:Object(x.jsx)(Pe.a,{size:16})})]}),Object(x.jsx)("button",{className:400===s?"text-white":"",onClick:()=>t(400),children:Object(x.jsx)(Be.a,{size:16})}),Object(x.jsx)("button",{className:700===s?"text-white":"",onClick:()=>t(700),children:Object(x.jsx)(ze.a,{size:16})}),Object(x.jsx)("button",{className:"100%"===s?"text-white":"",onClick:()=>t("100%"),children:Object(x.jsx)(Le.a,{size:16})})]})}function Re(){const[e,t]=Object(n.useState)("100%");return Object(x.jsxs)("div",{className:"App flex flex-col h-screen bg-gray-100",children:[Object(x.jsx)(Me,{setResponsiveWidth:t,responsiveWidth:e}),Object(x.jsxs)("div",{className:"flex h-20 flex-grow flex-shrink",children:[Object(x.jsx)(Fe,{}),Object(x.jsx)(k,{responsiveWidth:e}),Object(x.jsx)(Ne,{})]})]})}var Ie=s(248),_e=s(26);const He=document.getElementById("root");l.a.render(Object(x.jsx)(n.StrictMode,{children:Object(x.jsx)(Ie.a,{backend:_e.a,children:Object(x.jsx)(p,{children:Object(x.jsx)(Re,{})})})}),He)},33:function(e,t,s){}},[[232,1,2]]]);
//# sourceMappingURL=main.8a549e17.chunk.js.map