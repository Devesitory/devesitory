(self.webpackChunkdevesitory=self.webpackChunkdevesitory||[]).push([[7344],{24:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/Cover.9527cc2.1200.png 1200w",images:[{path:r.p+"assets/ideal-img/Cover.9527cc2.1200.png",width:1200,height:628}],src:r.p+"assets/ideal-img/Cover.9527cc2.1200.png",toString:function(){return r.p+"assets/ideal-img/Cover.9527cc2.1200.png"},placeholder:void 0,width:1200,height:628},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsSAAALEgHS3X78AAAA00lEQVR4nAXBQUvCYACA4e/WwS7qoQQPkhllDBWD6VJrJfmNsQnODTOYBl4kiilWK6xDdSxK6dTNoxf/gb/t7XnEq2/z1LfpWB6q1mE0CWldzzGNe5ZvAevPIV/BAJHPqOg5hd6FhXHi8hCOCMIZXl3i1ytoe2mS2xnE9+SRpvOC2X6n6v5R8hZoVysal7/UzA8GvSk/z1NE96yKrjtY3THSucNwbpCtIdINOLVvaZ5L/EYZsRlLkDw4Ipsvky0coxQr7Cgl4rtFtvZVYqlDNiJR/gH96mD+2xfFXAAAAABJRU5ErkJggg=="}},4920:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=r(4848),o=r(8453),n=(r(1625),r(4651),r(3012));const s={title:"\u0e17\u0e33\u0e44\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e36\u0e07\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e1c\u0e34\u0e14?",description:"\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e39\u0e01\u0e04\u0e34\u0e14\u0e04\u0e49\u0e19\u0e21\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e23\u0e32\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19 \u0e41\u0e15\u0e48\u0e27\u0e48\u0e32\u0e41\u0e04\u0e48\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e47\u0e22\u0e31\u0e07\u0e1c\u0e34\u0e14\u0e40\u0e25\u0e22 \u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e08\u0e30\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e2d?",tags:["computer science"],keywords:["floating point","IEEE 754","computer science","software development","software engineering"],image:"./Cover.png"},a=void 0,c={permalink:"/blog/2022/08/29/floating-point",editUrl:"https://github.com/devesitory/devesitory/tree/main/blog/2022-08-29-floating-point/index.mdx",source:"@site/blog/2022-08-29-floating-point/index.mdx",title:"\u0e17\u0e33\u0e44\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e36\u0e07\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e1c\u0e34\u0e14?",description:"\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e39\u0e01\u0e04\u0e34\u0e14\u0e04\u0e49\u0e19\u0e21\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e23\u0e32\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19 \u0e41\u0e15\u0e48\u0e27\u0e48\u0e32\u0e41\u0e04\u0e48\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e47\u0e22\u0e31\u0e07\u0e1c\u0e34\u0e14\u0e40\u0e25\u0e22 \u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e08\u0e30\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e2d?",date:"2022-08-29T00:00:00.000Z",formattedDate:"29 \u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21 2022",tags:[{label:"computer science",permalink:"/blog/tags/computer-science"}],hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u0e17\u0e33\u0e44\u0e21\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e36\u0e07\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e1c\u0e34\u0e14?",description:"\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e39\u0e01\u0e04\u0e34\u0e14\u0e04\u0e49\u0e19\u0e21\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e23\u0e32\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19 \u0e41\u0e15\u0e48\u0e27\u0e48\u0e32\u0e41\u0e04\u0e48\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e47\u0e22\u0e31\u0e07\u0e1c\u0e34\u0e14\u0e40\u0e25\u0e22 \u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e08\u0e30\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e2d?",tags:["computer science"],keywords:["floating point","IEEE 754","computer science","software development","software engineering"],image:"./Cover.png"},unlisted:!1,prevItem:{title:"\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07 1 \u0e1b\u0e35\u0e01\u0e31\u0e1a\u0e04\u0e35\u0e22\u0e4c\u0e1a\u0e2d\u0e23\u0e4c\u0e14 Colemak",permalink:"/blog/2022/09/11/colemak-dh"},nextItem:{title:"\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14\u0e22\u0e32\u0e27\u0e02\u0e36\u0e49\u0e19 \u0e41\u0e15\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e44\u0e27\u0e02\u0e36\u0e49\u0e19? \u0e08\u0e23\u0e34\u0e07\u0e44\u0e2b\u0e21? \u0e40\u0e01\u0e34\u0e14\u0e08\u0e32\u0e01\u0e2d\u0e30\u0e44\u0e23?",permalink:"/blog/2022/07/29/optimization"}},l={image:r(3685).A,authorsImageUrls:[]},p=[];function d(e){const t={p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{img:r(24)}),"\n",(0,i.jsx)(t.p,{children:"\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e16\u0e39\u0e01\u0e04\u0e34\u0e14\u0e04\u0e49\u0e19\u0e21\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e23\u0e32\u0e04\u0e33\u0e19\u0e27\u0e13\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19 \u0e41\u0e15\u0e48\u0e27\u0e48\u0e32\u0e41\u0e04\u0e48\u0e1a\u0e27\u0e01\u0e17\u0e28\u0e19\u0e34\u0e22\u0e21\u0e2b\u0e25\u0e31\u0e01\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e47\u0e22\u0e31\u0e07\u0e1c\u0e34\u0e14\u0e40\u0e25\u0e22 \u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e08\u0e30\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e2b\u0e23\u0e2d?"})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4651:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var i=r(6540),o=r(4848);const n=e=>{let{children:t,block:r=!1}=e;const n=(0,i.useMemo)((()=>{const e={fontFamily:'"Kanit", sans-serif',color:"white",fontWeight:600};return r?{...e,backgroundColor:"var(--ifm-color-primary)",paddingLeft:"0.25em",paddingRight:"0.25em"}:{...e,color:"var(--ifm-color-primary)"}}),[r]);return(0,o.jsx)("span",{style:n,children:t})}},1625:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});r(6540);var i=r(4848);const o=e=>{let{title:t="YouTube video player",videoId:r}=e;return(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)("iframe",{width:"100%",height:"100%",src:`https://www.youtube-nocookie.com/embed/${r}`,title:t,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0,style:{alignContent:"center"}})})}},3685:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});const i=r.p+"assets/images/Cover-c93fd87cc17c71b8440a174a2095b951.png"}}]);