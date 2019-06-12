(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(151),i=n(149),c=n(153),l=n(147),s=n(170),m=n.n(s),u=n(171),d=n.n(u),f=n(172),p=n.n(f),h=n(173),g=n.n(h),x=l.d.div.withConfig({displayName:"contact__PageContainer",componentId:"mztr20-0"})(["display:flex;position:absolute;top:0;bottom:0;width:100%;justify-content:center;align-items:center;flex-direction:column;z-index:-1;background-color:",";@media only screen and (max-width:950px){padding:",";}"],function(e){return e.theme.colours.secondary},function(e){return e.theme.spacing.md}),y=l.d.h1.withConfig({displayName:"contact__H1",componentId:"mztr20-1"})(["color:#ffffff;margin:0;font-size:",";margin-bottom:",";@media only screen and (max-width:600px){font-size:",";}"],function(e){return e.theme.fontSize.font80},function(e){return e.theme.spacing.xl},function(e){return e.theme.fontSize.font48}),w=l.d.h2.withConfig({displayName:"contact__H2",componentId:"mztr20-2"})(["color:",";margin:0;font-size:",";margin-bottom:",";@media only screen and (max-width:600px){font-size:",";}"],function(e){return e.theme.colours.tertiary},function(e){return e.theme.fontSize.font36},function(e){return e.theme.spacing.md},function(e){return e.theme.fontSize.font24}),b=l.d.div.withConfig({displayName:"contact__Circle",componentId:"mztr20-3"})(["border-radius:100%;background-color:",";width:100px;height:100px;display:inline-flex;justify-content:center;align-items:center;cursor:pointer;transition:background-color 0.5s;margin:",";&:hover{background-color:#ffffff;svg{stroke:",";}}"],function(e){return e.theme.colours.tertiary},function(e){return e.theme.spacing.md},function(e){return e.theme.colours.primary}),E=Object(l.c)(["width:40px;height:40px;transition:stroke 0.5s;stroke:",";"],function(e){return e.theme.colours.secondary}),v=Object(l.d)(m.a).withConfig({displayName:"contact__Twitter",componentId:"mztr20-4"})(["",""],E),k=Object(l.d)(d.a).withConfig({displayName:"contact__LinkedIn",componentId:"mztr20-5"})(["",""],E),z=Object(l.d)(p.a).withConfig({displayName:"contact__GitHub",componentId:"mztr20-6"})(["",""],E),_=Object(l.d)(g.a).withConfig({displayName:"contact__Email",componentId:"mztr20-7"})(["",""],E);t.default=function(e){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:"Contact"}),o.a.createElement(c.a,{transparent:!0,location:e.location.pathname}),o.a.createElement(x,null,o.a.createElement(y,null,"Say hi..."),o.a.createElement(w,null,"You can find me at"),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("a",{href:"https://www.linkedin.com/in/ruth-uwemedimo-694228a1/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(b,null,o.a.createElement(k,null))),o.a.createElement("a",{href:"https://github.com/rug1",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(b,null,o.a.createElement(z,null))),o.a.createElement("a",{href:"mailto:ruth.uwemedimo@gmail.com"},o.a.createElement(b,null,o.a.createElement(_,null))),o.a.createElement("a",{href:"https://twitter.com/RuthUwemedimo",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(b,null,o.a.createElement(v,null))))))}},148:function(e,t,n){var r;e.exports=(r=n(152))&&r.default||r},149:function(e,t,n){"use strict";var r=n(150),o=n(0),a=n.n(o),i=n(4),c=n.n(i),l=n(156),s=n.n(l);function m(e){var t=e.description,n=e.lang,o=e.meta,i=e.title,c=r.data.site,l=t||c.siteMetadata.description;return a.a.createElement(s.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(o)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=m},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},151:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(147),l=n(154),s=n.n(l);function m(){var e=s()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n    letter-spacing: 0.7px;\n    line-height: 1.5;\n  }\n"]);return m=function(){return e},e}var u=Object(c.b)(m()),d={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},f=(n(155),function(e){var t=e.children;return o.a.createElement(c.a,{theme:d},o.a.createElement(o.a.Fragment,null,o.a.createElement(u,null),o.a.createElement("main",null,t)))});f.propTypes={children:i.a.node.isRequired};t.a=f},152:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),c=n(33),l=n.n(c);n(148),o.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;var s=n(147),m=Object(s.e)(["from{opacity:0;}to{opacity:1;}"]),u=s.d.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1noyoex-0"})(["background-color:",";padding:20px;font-size:",";box-shadow:",";height:72px;color:",";width:100%;position:absolute;animation:",";ul{list-style-type:none;margin:0;padding:0;text-align:right;}"],function(e){return e.transparent?"rgba(255, 255, 255, 0)":"rgba(255, 255, 255, 0.5)"},function(e){return e.theme.fontSize.font19},function(e){return e.transparent?"":"0px 0px 4px 2px #3a3a3a"},function(e){return e.home?"#000000":"#ffffff"},function(e){return e.home?Object(s.c)([""," 0.5s ease-in"],m):""}),d=s.d.li.withConfig({displayName:"header__Home",componentId:"sc-1noyoex-1"})(["position:absolute;left:20px;top:0px;cursor:pointer;transition:color 0.3s;font-size:",";font-weight:300;&:hover{color:",";}a{color:inherit;text-decoration:none;}"],function(e){return e.theme.fontSize.font27},function(e){return e.theme.colours.primary}),f=s.d.li.withConfig({displayName:"header__NavItem",componentId:"sc-1noyoex-2"})(["display:inline-block;margin-left:",";cursor:pointer;padding-bottom:2px;&:hover{border-bottom:3px solid ",";}a{color:inherit;text-decoration:none;}&:first-child{margin-left:0px;}"],function(e){return e.theme.spacing.md},function(e){return e.theme.colours.primary});t.a=function(e){return o.a.createElement(u,null,o.a.createElement("ul",null,!e.home&&o.a.createElement(d,null,o.a.createElement(l.a,{to:"/"},o.a.createElement("strong",{style:{fontSize:"42px"}},"R"),"uth")),o.a.createElement(f,{active:"/experience"===e.location},o.a.createElement(l.a,{to:"/experience"},"Experience")),o.a.createElement(f,{active:"/blog"===e.location},"Blog"),o.a.createElement(f,{active:"/contact"===e.location},o.a.createElement(l.a,{to:"/contact"},"Contact"))))}},170:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#555b6e",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-twitter"},e.exports=o,o.default=o},171:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,[r.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:0}),r.createElement("rect",{x:"2",y:"9",width:"4",height:"12",key:1}),r.createElement("circle",{cx:"4",cy:"4",r:"2",key:2})])}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-linkedin"},e.exports=o,o.default=o},172:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,r.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-github"},e.exports=o,o.default=o},173:function(e,t,n){var r=n(0);function o(e){return r.createElement("svg",e,[r.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",key:0}),r.createElement("polyline",{points:"22,6 12,13 2,6",key:1})])}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-mail"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=component---src-pages-contact-js-c4167ea759c11f81a999.js.map