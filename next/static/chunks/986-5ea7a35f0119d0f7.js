"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{59731:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!=o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(r,l[o]))return!1;for(o=n;0!=o--;){var n,o,l,a=l[o];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},95385:function(e,t,r){r.d(t,{R:function(){return o},k:function(){return n}}),r(2265);let[n,o]=(0,r(1122).createSafeContext)("Card component was not found in tree")},24012:function(e,t,r){r.d(t,{Card:function(){return b}});var n=r(2265),o=r(94120),l=r(15593),a=r(50591),c=r(94541),u=r(869),i=r(12194),s=r(95385),f=r(72922),d=r(33427);let p={},m=(0,l.createVarsResolver)((e,t)=>{let{padding:r}=t;return{root:{"--card-padding":(0,o.getSpacing)(r)}}}),b=(0,u.polymorphicFactory)((e,t)=>{let r=(0,a.useProps)("Card",p,e),{classNames:o,className:l,style:u,styles:b,unstyled:h,vars:y,children:v,padding:g,...C}=r,E=(0,c.useStyles)({name:"Card",props:r,classes:d.Z,className:l,style:u,classNames:o,styles:b,unstyled:h,vars:y,varsResolver:m}),k=n.Children.toArray(v),S=k.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===f.CardSection?(0,n.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===k.length-1||void 0}):e);return n.createElement(s.k,{value:{getStyles:E}},n.createElement(i.Paper,{ref:t,unstyled:h,...E("root"),...C},S))});b.classes=d.Z,b.displayName="@mantine/core/Card",b.Section=f.CardSection},33427:function(e,t,r){r.d(t,{Z:function(){return n}});var n={root:"m_e615b15f",section:"m_599a2148"}},72922:function(e,t,r){r.d(t,{CardSection:function(){return s}});var n=r(2265),o=r(50591),l=r(31831),a=r(869),c=r(95385),u=r(33427);let i={},s=(0,a.polymorphicFactory)((e,t)=>{let{classNames:r,className:a,style:u,styles:s,vars:f,withBorder:d,inheritPadding:p,mod:m,...b}=(0,o.useProps)("CardSection",i,e),h=(0,c.R)();return n.createElement(l.Box,{ref:t,mod:[{"with-border":d,"inherit-padding":p},m],...h.getStyles("section",{className:a,style:u,styles:s,classNames:r}),...b})});s.classes=u.Z,s.displayName="@mantine/core/CardSection"},47464:function(e,t,r){r.d(t,{CheckIcon:function(){return l},P:function(){return a}});var n=r(2265),o=r(20322);function l(e){let{size:t,style:r,...l}=e,a=void 0!==t?{width:(0,o.h)(t),height:(0,o.h)(t),...r}:r;return n.createElement("svg",{viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:a,"aria-hidden":!0,...l},n.createElement("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}function a(e){let{indeterminate:t,...r}=e;return t?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0,...r},n.createElement("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})):n.createElement(l,{...r})}},59095:function(e,t,r){r.d(t,{Checkbox:function(){return S}});var n=r(2265),o=r(27011),l=r(94120),a=r(15593),c=r(41846),u=r(45027),i=r(19955),s=r(58834),f=r(50591),d=r(94541),p=r(17622),m=r(31831),b=r(73147),h=r(39712),y=r(621),v=r(73952),g=r(47464),C={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};let E={labelPosition:"right",icon:g.P},k=(0,a.createVarsResolver)((e,t)=>{let{radius:r,color:n,size:o,iconColor:a,variant:f,autoContrast:d}=t,p=(0,c.parseThemeColor)({color:n||e.primaryColor,theme:e}),m=p.isThemeColor&&void 0===p.shade?"var(--mantine-color-".concat(p.color,"-outline)"):p.color;return{root:{"--checkbox-size":(0,l.getSize)(o,"checkbox-size"),"--checkbox-radius":void 0===r?void 0:(0,l.getRadius)(r),"--checkbox-color":"outline"===f?m:(0,u.getThemeColor)(n,e),"--checkbox-icon-color":a?(0,u.getThemeColor)(a,e):(0,s.getAutoContrastValue)(d,e)?(0,i.getContrastColor)({color:n,theme:e}):void 0}}}),S=(0,b.factory)((e,t)=>{let r=(0,f.useProps)("Checkbox",E,e),{classNames:l,className:a,style:c,styles:u,unstyled:i,vars:s,color:b,label:v,id:g,size:S,radius:V,wrapperProps:w,children:x,checked:j,labelPosition:_,description:O,error:F,disabled:I,variant:P,indeterminate:A,icon:D,rootRef:T,iconColor:L,onChange:R,autoContrast:z,mod:B,...N}=r,G=(0,y.J)(),W=S||(null==G?void 0:G.size),M=(0,d.useStyles)({name:"Checkbox",props:r,classes:C,className:a,style:c,classNames:l,styles:u,unstyled:i,vars:s,varsResolver:k}),{styleProps:Z,rest:J}=(0,p.extractStyleProps)(N),H=(0,o.useId)(g),U=G?{checked:G.value.includes(J.value),onChange:e=>{G.onChange(e),null==R||R(e)}}:{};return n.createElement(h.Z,{...M("root"),__staticSelector:"Checkbox",__stylesApiProps:r,id:H,size:W,labelPosition:_,label:v,description:O,error:F,disabled:I,classNames:l,styles:u,unstyled:i,"data-checked":U.checked||j||void 0,variant:P,ref:T,mod:B,...Z,...w},n.createElement(m.Box,{...M("inner"),mod:{"data-label-position":_}},n.createElement(m.Box,{component:"input",id:H,ref:t,checked:j,disabled:I,mod:{error:!!F,indeterminate:A},...M("input",{focusable:!0,variant:P}),onChange:R,...J,...U,type:"checkbox"}),n.createElement(D,{indeterminate:A,...M("icon")})))});S.classes={...C,...h.J},S.displayName="@mantine/core/Checkbox",S.Group=v.CheckboxGroup},621:function(e,t,r){r.d(t,{J:function(){return a},z:function(){return l}});var n=r(2265);let o=(0,n.createContext)(null),l=o.Provider,a=()=>(0,n.useContext)(o)},73952:function(e,t,r){r.d(t,{CheckboxGroup:function(){return f}});var n=r(2265),o=r(15057),l=r(50591),a=r(73147),c=r(64030),u=r(41124),i=r(621);let s={},f=(0,a.factory)((e,t)=>{let{value:r,defaultValue:a,onChange:f,size:d,wrapperProps:p,children:m,readOnly:b,...h}=(0,l.useProps)("CheckboxGroup",s,e),[y,v]=(0,o.useUncontrolled)({value:r,defaultValue:a,finalValue:[],onChange:f});return n.createElement(i.z,{value:{value:y,onChange:e=>{let t=e.currentTarget.value;b||v(y.includes(t)?y.filter(e=>e!==t):[...y,t])},size:d}},n.createElement(c.Input.Wrapper,{size:d,ref:t,...p,...h,labelElement:"div",__staticSelector:"CheckboxGroup"},n.createElement(u.m,{role:"group"},m)))});f.classes=c.Input.Wrapper.classes,f.displayName="@mantine/core/CheckboxGroup"},1959:function(e,t,r){r.d(t,{Container:function(){return p}});var n=r(2265),o=r(94120),l=r(15593),a=r(50591),c=r(94541),u=r(31831),i=r(73147),s={root:"m_7485cace"};let f={},d=(0,l.createVarsResolver)((e,t)=>{let{size:r,fluid:n}=t;return{root:{"--container-size":n?void 0:(0,o.getSize)(r,"container-size")}}}),p=(0,i.factory)((e,t)=>{let r=(0,a.useProps)("Container",f,e),{classNames:o,className:l,style:i,styles:p,unstyled:m,vars:b,fluid:h,mod:y,...v}=r,g=(0,c.useStyles)({name:"Container",classes:s,props:r,className:l,style:i,classNames:o,styles:p,unstyled:m,vars:b,varsResolver:d});return n.createElement(u.Box,{ref:t,mod:[{fluid:h},y],...g("root"),...v})});p.classes=s,p.displayName="@mantine/core/Container"},86608:function(e,t,r){r.d(t,{Group:function(){return p}});var n=r(2265),o=r(94120),l=r(15593),a=r(50591),c=r(94541),u=r(31831),i=r(73147),s={root:"m_4081bf90"};let f={preventGrowOverflow:!0,gap:"md",align:"center",justify:"flex-start",wrap:"wrap"},d=(0,l.createVarsResolver)((e,t,r)=>{let{grow:n,preventGrowOverflow:l,gap:a,align:c,justify:u,wrap:i}=t,{childWidth:s}=r;return{root:{"--group-child-width":n&&l?s:void 0,"--group-gap":(0,o.getSpacing)(a),"--group-align":c,"--group-justify":u,"--group-wrap":i}}}),p=(0,i.factory)((e,t)=>{let r=(0,a.useProps)("Group",f,e),{classNames:l,className:i,style:p,styles:m,unstyled:b,children:h,gap:y,align:v,justify:g,wrap:C,grow:E,preventGrowOverflow:k,vars:S,variant:V,__size:w,mod:x,...j}=r,_=n.Children.toArray(h).filter(Boolean),O=_.length,F=(0,o.getSpacing)(null!=y?y:"md"),I="calc(".concat(100/O,"% - (").concat(F," - ").concat(F," / ").concat(O,"))"),P=(0,c.useStyles)({name:"Group",props:r,stylesCtx:{childWidth:I},className:i,style:p,classes:s,classNames:l,styles:m,unstyled:b,vars:S,varsResolver:d});return n.createElement(u.Box,{...P("root"),ref:t,variant:V,mod:[{grow:E},x],size:w,...j},_)});p.classes=s,p.displayName="@mantine/core/Group"},39712:function(e,t,r){r.d(t,{Z:function(){return s},J:function(){return i}});var n=r(2265),o=r(94120),l=r(94541),a=r(31831),c=r(64030),u={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};let i=u,s=(0,n.forwardRef)((e,t)=>{let{__staticSelector:r,__stylesApiProps:i,className:s,classNames:f,styles:d,unstyled:p,children:m,label:b,description:h,id:y,disabled:v,error:g,size:C,labelPosition:E="left",bodyElement:k="div",labelElement:S="label",variant:V,style:w,vars:x,mod:j,..._}=e,O=(0,l.useStyles)({name:r,props:i,className:s,style:w,classes:u,classNames:f,styles:d,unstyled:p});return n.createElement(a.Box,{...O("root"),ref:t,__vars:{"--label-fz":(0,o.getFontSize)(C),"--label-lh":(0,o.getSize)(C,"label-lh")},mod:[{"label-position":E},j],variant:V,size:C,..._},n.createElement(a.Box,{component:k,htmlFor:"label"===k?y:void 0,...O("body")},m,n.createElement("div",{...O("labelWrapper"),"data-disabled":v||void 0},b&&n.createElement(a.Box,{component:S,htmlFor:"label"===S?y:void 0,...O("label"),"data-disabled":v||void 0},b),h&&n.createElement(c.Input.Description,{size:C,__inheritStyles:!1,...O("description")},h),g&&"boolean"!==g&&n.createElement(c.Input.Error,{size:C,__inheritStyles:!1,...O("error")},g))))});s.displayName="@mantine/core/InlineInput"},41124:function(e,t,r){r.d(t,{m:function(){return l}});var n=r(2265),o=r(99970);function l(e){let{children:t,role:r}=e,l=(0,o.useInputWrapperContext)();return l?n.createElement("div",{role:r,"aria-labelledby":l.labelId,"aria-describedby":l.describedBy},t):n.createElement(n.Fragment,null,t)}},6925:function(e,t,r){r.d(t,{Space:function(){return u}});var n=r(2265),o=r(50591),l=r(31831),a=r(73147);let c={},u=(0,a.factory)((e,t)=>{let{w:r,h:a,miw:u,mih:i,...s}=(0,o.useProps)("Space",c,e);return n.createElement(l.Box,{ref:t,...s,w:r,miw:null!=u?u:r,h:a,mih:null!=i?i:a})});u.displayName="@mantine/core/Space"},58834:function(e,t,r){r.d(t,{getAutoContrastValue:function(){return n}});function n(e,t){return"boolean"==typeof e?e:t.autoContrast}},19955:function(e,t,r){r.d(t,{getContrastColor:function(){return l},getPrimaryContrastColor:function(){return a}});var n=r(76900),o=r(41846);function l(e){let{color:t,theme:r,autoContrast:n}=e;return("boolean"==typeof n?n:r.autoContrast)&&(0,o.parseThemeColor)({color:t||r.primaryColor,theme:r}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}function a(e,t){return l({color:e.colors[e.primaryColor][(0,n.getPrimaryShade)(e,t)],theme:e,autoContrast:null})}},1122:function(e,t,r){r.d(t,{createSafeContext:function(){return o}});var n=r(2265);function o(e){let t=(0,n.createContext)(null);return[e=>{let{children:r,value:o}=e;return n.createElement(t.Provider,{value:o},r)},()=>{let r=(0,n.useContext)(t);if(null===r)throw Error(e);return r}]}},96274:function(e,t,r){r.d(t,{c:function(){return E}});var n=r(2265);let o="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function l(e,t){o(()=>{if(e)return window.addEventListener(e,t),()=>window.removeEventListener(e,t)},[e])}function a(e){return null===e||"object"!=typeof e?{}:Object.keys(e).reduce((t,r)=>{let n=e[r];return null!=n&&!1!==n&&(t[r]=n),t},{})}function c(e,t){if(null===t||"object"!=typeof t)return{};let r={...t};return Object.keys(t).forEach(t=>{t.includes("".concat(String(e),"."))&&delete r[t]}),r}function u(e,t){return parseInt(e.substring(t.length+1).split(".")[0],10)}function i(e,t,r,n){if(void 0===t)return r;let o="".concat(String(e)),l=r;-1===n&&(l=c("".concat(o,".").concat(t),l));let a={...l},i=new Set;return Object.entries(l).filter(e=>{let[r]=e;if(!r.startsWith("".concat(o,".")))return!1;let n=u(r,o);return!Number.isNaN(n)&&n>=t}).forEach(e=>{let[t,r]=e,l=u(t,o),c=t.replace("".concat(o,".").concat(l),"".concat(o,".").concat(l+n));a[c]=r,i.add(c),i.has(t)||delete a[t]}),a}function s(e){return"string"!=typeof e?[]:e.split(".")}function f(e,t){let r=s(e);if(0===r.length||"object"!=typeof t||null===t)return;let n=t[r[0]];for(let e=1;e<r.length&&void 0!==n;e+=1)n=n[r[e]];return n}function d(e,t,r){"object"==typeof r.value&&(r.value=p(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function p(e){if("object"!=typeof e)return e;var t,r,n,o=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?n=Object.create(e.__proto__||null):"[object Array]"===l?n=Array(e.length):"[object Set]"===l?(n=new Set,e.forEach(function(e){n.add(p(e))})):"[object Map]"===l?(n=new Map,e.forEach(function(e,t){n.set(p(t),p(e))})):"[object Date]"===l?n=new Date(+e):"[object RegExp]"===l?n=new RegExp(e.source,e.flags):"[object DataView]"===l?n=new e.constructor(p(e.buffer)):"[object ArrayBuffer]"===l?n=e.slice(0):"Array]"===l.slice(-6)&&(n=new e.constructor(e)),n){for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)d(n,r[o],Object.getOwnPropertyDescriptor(e,r[o]));for(o=0,r=Object.getOwnPropertyNames(e);o<r.length;o++)Object.hasOwnProperty.call(n,t=r[o])&&n[t]===e[t]||d(n,t,Object.getOwnPropertyDescriptor(e,t))}return n||e}function m(e,t,r){let n=s(e);if(0===n.length)return r;let o=p(r);if(1===n.length)return o[n[0]]=t,o;let l=o[n[0]];for(let e=1;e<n.length-1;e+=1){if(void 0===l)return o;l=l[n[e]]}return l[n[n.length-1]]=t,o}var b=r(59731);function h(e,t){let r=Object.keys(e);if("string"==typeof t){let n=r.filter(e=>e.startsWith("".concat(t,".")));return e[t]||n.some(t=>e[t])||!1}return r.some(t=>e[t])}function y(e){let t=a(e);return{hasErrors:Object.keys(t).length>0,errors:t}}function v(e,t){return"function"==typeof e?y(e(t)):y(function e(t,r){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"object"!=typeof t||null===t?o:Object.keys(t).reduce((o,l)=>{let a=t[l],c="".concat(""===n?"":"".concat(n,".")).concat(l),u=f(c,r),i=!1;return"function"==typeof a&&(o[c]=a(u,r,c)),"object"==typeof a&&Array.isArray(u)&&(i=!0,u.forEach((t,n)=>e(a,r,"".concat(c,".").concat(n),o))),"object"!=typeof a||"object"!=typeof u||null===u||i||e(a,r,c,o),o},o)}(e,t))}function g(e,t,r){if("string"!=typeof e)return{hasError:!1,error:null};let n=v(t,r),o=Object.keys(n.errors).find(t=>e.split(".").every((e,r)=>e===t.split(".")[r]));return{hasError:!!o,error:o?n.errors[o]:null}}function C(e,t){return!!t&&("boolean"==typeof t?t:!!Array.isArray(t)&&t.includes(e.replace(/[.][0-9]/g,".".concat("__MANTINE_FORM_INDEX__"))))}function E(){let{name:e,mode:t="controlled",initialValues:r,initialErrors:o={},initialDirty:u={},initialTouched:s={},clearInputErrorOnChange:d=!0,validateInputOnChange:p=!1,validateInputOnBlur:y=!1,onValuesChange:E,transformValues:k=e=>e,enhanceGetInputProps:S,validate:V}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},w=function(e){let[t,r]=(0,n.useState)(a(e)),o=(0,n.useCallback)(e=>{r(t=>a("function"==typeof e?e(t):e))},[]),l=(0,n.useCallback)(()=>r({}),[]),c=(0,n.useCallback)(e=>{void 0!==t[e]&&o(t=>{let r={...t};return delete r[e],r})},[t]),u=(0,n.useCallback)((e,r)=>{null==r||!1===r?c(e):t[e]!==r&&o(t=>({...t,[e]:r}))},[t]);return{errorsState:t,setErrors:o,clearErrors:l,setFieldError:u,clearFieldError:c}}(o),x=function(e){let{initialValues:t,onValuesChange:r,mode:o}=e,l=(0,n.useRef)(!1),[a,c]=(0,n.useState)(t||{}),u=(0,n.useRef)(a),i=(0,n.useRef)(a),s=(0,n.useCallback)(e=>{let{values:t,subscribers:n,updateState:o=!0,mergeWithPreviousValues:l=!0}=e,a=u.current,i=t instanceof Function?t(u.current):t,s=l?{...a,...i}:i;u.current=s,o&&c(s),null==r||r(s,a),null==n||n.filter(Boolean).forEach(e=>e({updatedValues:s,previousValues:a}))},[r]),d=(0,n.useCallback)(e=>{let t=f(e.path,u.current),r=e.value instanceof Function?e.value(t):e.value;if(t!==r){var n;let t=u.current,o=m(e.path,r,u.current);s({values:o,updateState:e.updateState}),null===(n=e.subscribers)||void 0===n||n.filter(Boolean).forEach(r=>r({path:e.path,updatedValues:o,previousValues:t}))}},[]),p=(0,n.useCallback)(e=>{i.current=e},[]),b=(0,n.useCallback)((e,t)=>{l.current||(l.current=!0,s({values:e,updateState:"controlled"===o}),p(e),t())},[]),h=(0,n.useCallback)(()=>{s({values:i.current,updateState:!0,mergeWithPreviousValues:!1})},[]),y=(0,n.useCallback)(()=>u.current,[]);return{initialized:l,stateValues:a,refValues:u,valuesSnapshot:i,setValues:s,setFieldValue:d,resetValues:h,setValuesSnapshot:p,initialize:b,getValues:y}}({initialValues:r,onValuesChange:E,mode:t}),j=function(e){let{initialDirty:t,initialTouched:r,mode:o,$values:l}=e,[a,u]=(0,n.useState)(r),[i,s]=(0,n.useState)(t),d=(0,n.useRef)(r),p=(0,n.useRef)(t),m=(0,n.useCallback)(e=>{let t="function"==typeof e?e(d.current):e;d.current=t,"controlled"===o&&u(t)},[]),y=(0,n.useCallback)(e=>{let t="function"==typeof e?e(p.current):e;p.current=t,"controlled"===o&&s(t)},[]),v=(0,n.useCallback)(()=>m({}),[]),g=(0,n.useCallback)((e,t)=>{m(r=>h(r,e)===t?r:{...r,[e]:t})},[]),C=(0,n.useCallback)((e,t)=>{y(r=>h(r,e)===t?r:{...r,[e]:t})},[]),E=(0,n.useCallback)(e=>h(d.current,e),[]),k=(0,n.useCallback)(e=>y(t=>{if("string"!=typeof e)return t;let r=c(e,t);return(delete r[e],b(r,t))?t:r}),[]),S=(0,n.useCallback)(e=>{if(e){let t=f(e,p.current);return"boolean"==typeof t?t:!b(f(e,l.refValues.current),f(e,l.valuesSnapshot.current))}return Object.keys(p.current).length>0?h(p.current):!b(l.refValues.current,l.valuesSnapshot.current)},[]),V=(0,n.useCallback)(()=>p.current,[]),w=(0,n.useCallback)(()=>d.current,[]);return{touchedState:a,dirtyState:i,touchedRef:d,dirtyRef:p,setTouched:m,setDirty:y,resetDirty:e=>{let t=e?{...e,...l.refValues.current}:l.refValues.current;l.setValuesSnapshot(t),y({})},resetTouched:v,isTouched:E,setFieldTouched:g,setFieldDirty:C,setTouchedState:u,setDirtyState:s,clearFieldDirty:k,isDirty:S,getDirty:V,getTouched:w}}({initialDirty:u,initialTouched:s,$values:x,mode:t}),_=function(e){let{$values:t,$errors:r,$status:o}=e;return{reorderListItem:(0,n.useCallback)((e,n)=>{o.clearFieldDirty(e),r.setErrors(t=>(function(e,t,r){let{from:n,to:o}=t,l="".concat(e,".").concat(n),a="".concat(e,".").concat(o),c={...r};return Object.keys(r).every(e=>{let t,r;if(e.startsWith(l)&&(t=e,r=e.replace(l,a)),e.startsWith(a)&&(t=e.replace(a,l),r=e),t&&r){let e=c[t],n=c[r];return void 0===n?delete c[t]:c[t]=n,void 0===e?delete c[r]:c[r]=e,!1}return!0}),c})(e,n,t)),t.setValues({values:function(e,t,r){let{from:n,to:o}=t,l=f(e,r);if(!Array.isArray(l))return r;let a=[...l],c=l[n];return a.splice(n,1),a.splice(o,0,c),m(e,a,r)}(e,n,t.refValues.current),updateState:!0})},[]),removeListItem:(0,n.useCallback)((e,n)=>{o.clearFieldDirty(e),r.setErrors(t=>i(e,n,t,-1)),t.setValues({values:function(e,t,r){let n=f(e,r);return Array.isArray(n)?m(e,n.filter((e,r)=>r!==t),r):r}(e,n,t.refValues.current),updateState:!0})},[]),insertListItem:(0,n.useCallback)((e,n,l)=>{o.clearFieldDirty(e),r.setErrors(t=>i(e,l,t,1)),t.setValues({values:function(e,t,r,n){let o=f(e,n);if(!Array.isArray(o))return n;let l=[...o];return l.splice("number"==typeof r?r:l.length,0,t),m(e,l,n)}(e,n,l,t.refValues.current),updateState:!0})},[])}}({$values:x,$errors:w,$status:j}),O=function(e){let{$status:t}=e,r=(0,n.useRef)({}),o=(0,n.useCallback)((e,t)=>{(0,n.useEffect)(()=>(r.current[e]=r.current[e]||[],r.current[e].push(t),()=>{r.current[e]=r.current[e].filter(e=>e!==t)}),[t])},[]),l=(0,n.useCallback)(e=>r.current[e]?r.current[e].map(r=>n=>r({previousValue:f(e,n.previousValues),value:f(e,n.updatedValues),touched:t.isTouched(e),dirty:t.isDirty(e)})):[],[]);return{subscribers:r,watch:o,getFieldSubscribers:l}}({$status:j}),[F,I]=(0,n.useState)(0),[P,A]=(0,n.useState)({}),D=(0,n.useCallback)(()=>{x.resetValues(),w.clearErrors(),j.resetDirty(),j.resetTouched(),"uncontrolled"===t&&I(e=>e+1)},[]),T=(0,n.useCallback)(e=>{x.initialize(e,()=>"uncontrolled"===t&&I(e=>e+1))},[]),L=(0,n.useCallback)((e,r,n)=>{let o=C(e,p);j.clearFieldDirty(e),j.setFieldTouched(e,!0),!o&&d&&w.clearFieldError(e),x.setFieldValue({path:e,value:r,updateState:"controlled"===t,subscribers:[...O.getFieldSubscribers(e),o?t=>{let r=g(e,V,t.updatedValues);r.hasError?w.setFieldError(e,r.error):w.clearFieldError(e)}:null,(null==n?void 0:n.forceUpdate)!==!1&&"controlled"!==t?()=>A(t=>({...t,[e]:(t[e]||0)+1})):null]})},[E,V]),R=(0,n.useCallback)(e=>{let r=x.refValues.current;x.setValues({values:e,updateState:"controlled"===t}),d&&w.clearErrors(),"uncontrolled"===t&&I(e=>e+1),Object.keys(O.subscribers.current).forEach(e=>{f(e,x.refValues.current)!==f(e,r)&&O.getFieldSubscribers(e).forEach(e=>e({previousValues:r,updatedValues:x.refValues.current}))})},[E,d]),z=(0,n.useCallback)(()=>{let e=v(V,x.refValues.current);return w.setErrors(e.errors),e},[V]),B=(0,n.useCallback)(e=>{let t=g(e,V,x.refValues.current);return t.hasError?w.setFieldError(e,t.error):w.clearFieldError(e),t},[V]),N=(0,n.useCallback)(e=>{e.preventDefault(),D()},[]),G=(0,n.useCallback)(e=>e?!g(e,V,x.refValues.current).hasError:!v(V,x.refValues.current).hasErrors,[V]),W={watch:O.watch,initialized:x.initialized.current,values:x.stateValues,getValues:x.getValues,setInitialValues:x.setValuesSnapshot,initialize:T,setValues:R,setFieldValue:L,errors:w.errorsState,setErrors:w.setErrors,setFieldError:w.setFieldError,clearFieldError:w.clearFieldError,clearErrors:w.clearErrors,resetDirty:j.resetDirty,setTouched:j.setTouched,setDirty:j.setDirty,isTouched:j.isTouched,resetTouched:j.resetTouched,isDirty:j.isDirty,getTouched:j.getTouched,getDirty:j.getDirty,reorderListItem:_.reorderListItem,insertListItem:_.insertListItem,removeListItem:_.removeListItem,reset:D,validate:z,validateField:B,getInputProps:function(e){var r;let{type:n="input",withError:o=!0,withFocus:l=!0,...a}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={onChange:(r=t=>L(e,t,{forceUpdate:!1}),e=>{if(e){if("function"==typeof e)r(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;t instanceof HTMLInputElement?"checkbox"===t.type?r(t.checked):r(t.value):(t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&r(t.value)}else r(e)}else r(e)})};return"uncontrolled"===t&&(c.key="".concat(F,"-").concat(e,"-").concat(P[e]||0)),o&&(c.error=w.errorsState[e]),"checkbox"===n?c["controlled"===t?"checked":"defaultChecked"]=f(e,x.refValues.current):c["controlled"===t?"value":"defaultValue"]=f(e,x.refValues.current),l&&(c.onFocus=()=>j.setFieldTouched(e,!0),c.onBlur=()=>{if(C(e,y)){let t=g(e,V,x.refValues.current);t.hasError?w.setFieldError(e,t.error):w.clearFieldError(e)}}),Object.assign(c,null==S?void 0:S({inputProps:c,field:e,options:{type:n,withError:o,withFocus:l,...a},form:W}))},onSubmit:(e,t)=>r=>{null==r||r.preventDefault();let n=z();n.hasErrors?null==t||t(n.errors,x.refValues.current,r):null==e||e(k(x.refValues.current),r)},onReset:N,isValid:G,getTransformedValues:e=>k(e||x.refValues.current)};return e&&function(e){if(!/^[0-9a-zA-Z-]+$/.test(e))throw Error('[@mantine/use-form] Form name "'.concat(e,'" is invalid, it should contain only letters, numbers and dashes'))}(e),l("mantine-form:".concat(e,":set-field-value"),e=>W.setFieldValue(e.detail.path,e.detail.value)),l("mantine-form:".concat(e,":set-values"),e=>W.setValues(e.detail)),l("mantine-form:".concat(e,":set-initial-values"),e=>W.setInitialValues(e.detail)),l("mantine-form:".concat(e,":set-errors"),e=>W.setErrors(e.detail)),l("mantine-form:".concat(e,":set-field-error"),e=>W.setFieldError(e.detail.path,e.detail.error)),l("mantine-form:".concat(e,":clear-field-error"),e=>W.clearFieldError(e.detail)),l("mantine-form:".concat(e,":clear-errors"),W.clearErrors),l("mantine-form:".concat(e,":reset"),W.reset),l("mantine-form:".concat(e,":validate"),W.validate),l("mantine-form:".concat(e,":validate-field"),e=>W.validateField(e.detail)),l("mantine-form:".concat(e,":reorder-list-item"),e=>W.reorderListItem(e.detail.path,e.detail.payload)),l("mantine-form:".concat(e,":remove-list-item"),e=>W.removeListItem(e.detail.path,e.detail.index)),l("mantine-form:".concat(e,":insert-list-item"),e=>W.insertListItem(e.detail.path,e.detail.item,e.detail.index)),l("mantine-form:".concat(e,":set-dirty"),e=>W.setDirty(e.detail)),l("mantine-form:".concat(e,":set-touched"),e=>W.setTouched(e.detail)),l("mantine-form:".concat(e,":reset-dirty"),e=>W.resetDirty(e.detail)),l("mantine-form:".concat(e,":reset-touched"),W.resetTouched),W}}}]);