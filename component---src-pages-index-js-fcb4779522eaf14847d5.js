(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,n,e){"use strict";e.r(n);var i=e(7),o=e.n(i),a=e(0),r=e.n(a),s=e(148),c=e(146),p=(e(168),e(145)),l=e(170),d=e.n(l),m=p.d.div.withConfig({displayName:"hero__HeroContainer",componentId:"cdva5k-0"})(["display:flex;position:absolute;top:0;bottom:0;width:100%;justify-content:flex-end;flex-direction:column;padding:60px;background-image:url(",");background-size:cover;background-position:35% 40%;z-index:-1;@media only screen and (max-width:950px){padding:20px;}"],d.a),u=p.d.h1.withConfig({displayName:"hero__HeroH1",componentId:"cdva5k-1"})(["font-size:130px;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:90px;}"]),f=p.d.h2.withConfig({displayName:"hero__HeroH2",componentId:"cdva5k-2"})(["font-size:50px;font-weight:400;margin:0;color:#ffffff;display:inline-block;@media only screen and (max-width:600px){font-size:30px;}"]),h=Object(p.e)(["from,to{color:transparent;}50%{color:#ffffff;}"]),y=p.d.span.withConfig({displayName:"hero__Cursor",componentId:"cdva5k-3"})(["font-weight:100;font-size:",";color:#ffffff;vertical-align:super;animation:"," 1s step-end infinite;@media only screen and (max-width:600px){font-size:",";}"],function(t){return t.big?"150px":"50px"},h,function(t){return t.big?"90px":"30px"}),g=function(t){var n,e;void 0!==document.hidden?(n="hidden",e="visibilitychange"):void 0!==document.msHidden?(n="msHidden",e="msvisibilitychange"):void 0!==document.webkitHidden&&(n="webkitHidden",e="webkitvisibilitychange");void 0===document.addEventListener||void 0===n?console.log("Requires a browser that supports the Page Visibility API."):document.addEventListener(e,function(){t&&!document[n]&&t()},!1)},x=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),o=0;o<e;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))||this).state={typeAnimationText:"",typeAnimationLineCount:0},n.typeAnimationLines=["Hello.","I’m Ruth Uwemedimo,","software engineer."],n.typeAnimation=function(t){var e=n.state,i=e.typeAnimationText,o=e.typeAnimationLineCount;i.length!==t.length?setTimeout(function(){n.setState({typeAnimationText:t.substring(0,i.length+1)}),n.typeAnimation(t,i.length+1)},75):setTimeout(function(){n.setState({typeAnimationText:"",typeAnimationLineCount:o+1})},1e3)},n.renderText=function(t){var e=n.state,i=e.typeAnimationLineCount,o=e.typeAnimationText;return i===t?o:n.typeAnimationLines[t]},n}o()(n,t);var e=n.prototype;return e.componentDidMount=function(){var t=this.typeAnimation(this.typeAnimationLines[0]);g(t)},e.componentDidUpdate=function(t,n){n.typeAnimationLineCount!==this.state.typeAnimationLineCount&&this.typeAnimationLines.length!==this.state.typeAnimationLineCount&&this.typeAnimation(this.typeAnimationLines[this.state.typeAnimationLineCount])},e.render=function(){var t=this.state.typeAnimationLineCount;return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement(m,null,r.a.createElement("div",null,r.a.createElement(u,null,this.renderText(0)),0===t&&r.a.createElement(y,{big:!0},"|")),t>=1&&r.a.createElement("div",null,r.a.createElement(f,null,this.renderText(1)),1===t&&r.a.createElement(y,null,"|")),t>=2&&r.a.createElement("div",null,r.a.createElement(f,null,this.renderText(2)),2===t&&r.a.createElement(y,null,"|"))))},n}(r.a.Component);n.default=x},146:function(t,n,e){"use strict";var i=e(147),o=e(0),a=e.n(o),r=e(4),s=e.n(r),c=e(150),p=e.n(c);function l(t){var n=t.description,e=t.lang,o=t.meta,r=t.title,s=i.data.site,c=n||s.siteMetadata.description;return a.a.createElement(p.a,{htmlAttributes:{lang:e},title:r,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(o)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},n.a=l},147:function(t){t.exports={data:{site:{siteMetadata:{title:"Ruth Uwemedimo",description:"Hello. I’m Ruth Uwemedimo, software engineer.",author:"@ruthuwemedimo"}}}}},148:function(t,n,e){"use strict";var i=e(0),o=e.n(i),a=e(4),r=e.n(a),s=e(145),c=e(149),p=e.n(c);function l(){var t=p()(["\n  @font-face {\n    font-family: 'Nunito Sans';\n    src: url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap');\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Nunito Sans', sans-serif;\n  }\n"]);return l=function(){return t},t}var d=Object(s.b)(l()),m={colours:{primary:"#00D646",secondary:"#555b6e",tertiary:"#ccd6e2"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"20px",lg:"32px",xl:"52px",xxl:"84px"},fontSize:{font80:"80px",font48:"48px",font36:"36px",font27:"27px",font24:"24px",font19:"19px",font16:"16px",font14:"14px"}},u=function(t){var n=t.children;return o.a.createElement(s.a,{theme:m},o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement("main",null,n)))};u.propTypes={children:r.a.node.isRequired};n.a=u},168:function(t,n,e){"use strict";e(169)("big",function(t){return function(){return t(this,"big","","")}})},169:function(t,n,e){var i=e(11),o=e(18),a=e(19),r=/"/g,s=function(t,n,e,i){var o=String(a(t)),s="<"+n;return""!==e&&(s+=" "+e+'="'+String(i).replace(r,"&quot;")+'"'),s+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(s),i(i.P+i.F*o(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},170:function(t,n,e){t.exports=e.p+"static/profile-b75bd5b135ce7f6da20c0b8e87e543e6.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-fcb4779522eaf14847d5.js.map