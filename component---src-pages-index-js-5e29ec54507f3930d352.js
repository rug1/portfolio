(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(154),r=n(152),c=n(7),l=n.n(c),s=function(e){var t,n;void 0!==document.hidden?(t="hidden",n="visibilitychange"):void 0!==document.msHidden?(t="msHidden",n="msvisibilitychange"):void 0!==document.webkitHidden&&(t="webkitHidden",n="webkitvisibilitychange");void 0===document.addEventListener||void 0===t?console.log("Requires a browser that supports the Page Visibility API."):document.addEventListener(n,function(){e&&!document[t]&&e()},!1)},d=(n(179),n(148)),p=n(181),u=n.n(p),m=d.d.div.withConfig({displayName:"home__PageContainer",componentId:"nadhtz-0"})(["display:flex;position:absolute;top:0;bottom:0;width:100%;justify-content:flex-end;flex-direction:column;padding:60px;background-image:url(",");background-size:cover;background-position:35% 40%;z-index:-1;@media only screen and (max-width:950px){padding:20px;}"],u.a),f=d.d.h1.withConfig({displayName:"home__HeroH1",componentId:"nadhtz-1"})(["font-size:130px;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:90px;}"]),h=d.d.h2.withConfig({displayName:"home__HeroH2",componentId:"nadhtz-2"})(["font-size:50px;font-weight:400;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:30px;}"]),x=Object(d.e)(["from,to{color:transparent;}50%{color:#ffffff;}"]),g=d.d.span.withConfig({displayName:"home__Cursor",componentId:"nadhtz-3"})(["font-weight:100;font-size:",";color:#ffffff;vertical-align:super;animation:"," 1s step-end infinite;@media only screen and (max-width:600px){font-size:",";}"],function(e){return e.big?"150px":"50px"},x,function(e){return e.big?"90px":"30px"}),y=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))||this).state={typeAnimationText:"",typeAnimationLineCount:0},t.typeAnimation=function(e){var n=t.state,i=n.typeAnimationText,a=n.typeAnimationLineCount;i.length!==e.length?setTimeout(function(){t.setState({typeAnimationText:e.substring(0,i.length+1)}),t.typeAnimation(e,i.length+1)},75):setTimeout(function(){t.setState({typeAnimationText:"",typeAnimationLineCount:a+1})},1e3)},t.renderText=function(e){var n=t.state,i=n.typeAnimationLineCount,a=n.typeAnimationText;return i===e?a:t.props.text[e]},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.typeAnimation(this.props.text[0]);s(e)},n.componentDidUpdate=function(e,t){t.typeAnimationLineCount!==this.state.typeAnimationLineCount&&this.props.text.length!==this.state.typeAnimationLineCount&&this.typeAnimation(this.props.text[this.state.typeAnimationLineCount])},n.render=function(){var e=this.state.typeAnimationLineCount;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement(f,null,this.renderText(0)),0===e&&a.a.createElement(g,{big:!0},"|")),e>=1&&a.a.createElement("div",null,a.a.createElement(h,null,this.renderText(1)),1===e&&a.a.createElement(g,null,"|")),e>=2&&a.a.createElement("div",null,a.a.createElement(h,null,this.renderText(2)),2===e&&a.a.createElement(g,null,"|")))},t}(a.a.Component);t.default=function(e){return a.a.createElement(o.a,{pathname:e.location.pathname},a.a.createElement(r.a,{title:"Home"}),a.a.createElement(m,null,a.a.createElement(y,{text:["Hello.","I’m Ruth Uwemedimo,","software engineer."]})))}},149:function(e,t,n){var i;e.exports=(i=n(150))&&i.default||i},150:function(e,t,n){"use strict";n.r(t);n(34);var i=n(0),a=n.n(i),o=n(4),r=n.n(o),c=n(55),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,n){var i=n(0);function a(e){return i.createElement("svg",e,[i.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z",key:0}),i.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",key:1})])}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},152:function(e,t,n){"use strict";var i=n(153),a=n(0),o=n.n(a),r=n(4),c=n.n(r),l=n(157),s=n.n(l);function d(e){var t=e.description,n=e.lang,a=e.meta,r=e.title,c=i.data.site,l=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(a)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=d},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},154:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(4),r=n.n(o),c=n(148),l=(n(74),n(75),n(33)),s=n.n(l);n(149),a.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func;var d=n(151),p=n.n(d),u=c.d.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1noyoex-0"})(["padding:20px 60px;font-size:",";color:",";width:100%;position:fixed;z-index:100;background-color:",";@media only screen and (max-width:950px){padding:20px;}ul{list-style-type:none;margin:0;padding:0;}svg{fill:",";}"],function(e){return e.theme.fontSize.font19},function(e){return e.headerTextColour||"#ffffff"},function(e){return e.headerColour},function(e){return e.headerTextColour||"#ffffff"}),m=Object(c.d)(p.a).withConfig({displayName:"header__HomeIcon",componentId:"sc-1noyoex-1"})(["width:30px;height:30px;vertical-align:bottom;"]),f=c.d.li.withConfig({displayName:"header__NavItem",componentId:"sc-1noyoex-2"})(["display:inline-block;margin-right:",";cursor:pointer;padding-bottom:2px;border-bottom:",";a{color:inherit;text-decoration:none;}&:last-child{margin-right:0px;}"],function(e){return e.home?e.theme.spacing.lg:e.theme.spacing.md},function(e){return e.active?"3px solid "+e.theme.colours.primary:""}),h=function(e){return a.a.createElement(u,{headerColour:e.headerColour,headerTextColour:e.headerTextColour},a.a.createElement("ul",null,a.a.createElement(f,{home:!0,active:"/"===e.pathname},a.a.createElement(s.a,{to:"/"},a.a.createElement(m,null))),a.a.createElement(f,{active:e.pathname.includes("/experience")},a.a.createElement(s.a,{to:"/experience"},"Experience")),a.a.createElement(f,{active:e.pathname.includes("/blog")},a.a.createElement(s.a,{to:"/blog"},"Blog")),a.a.createElement(f,{active:e.pathname.includes("/contact")},a.a.createElement(s.a,{to:"/contact"},"Contact"))))},x=n(155),g=n.n(x);function y(){var e=g()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n  }\n"]);return y=function(){return e},e}var v=Object(c.b)(y()),b={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},w=(n(156),function(e){var t=e.children,n=e.pathname,i=e.headerColour,o=e.headerTextColour;return a.a.createElement(c.a,{theme:b},a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null),a.a.createElement(h,{pathname:n,headerColour:i,headerTextColour:o}),a.a.createElement("main",null,t)))});w.propTypes={children:r.a.node.isRequired};t.a=w},179:function(e,t,n){"use strict";n(180)("big",function(e){return function(){return e(this,"big","","")}})},180:function(e,t,n){var i=n(11),a=n(19),o=n(20),r=/"/g,c=function(e,t,n,i){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(i).replace(r,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),i(i.P+i.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},181:function(e,t,n){e.exports=n.p+"static/profile-b75bd5b135ce7f6da20c0b8e87e543e6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-5e29ec54507f3930d352.js.map