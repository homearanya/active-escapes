(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Er7O:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),l=t.n(n),r=t("9eSz"),c=t.n(r),s=t("dVQU"),m=function(e){var a=e.data,t=a.heading,n=a.subHeading,r=a.heroImage,m=a.breadcrumbs;return l.a.createElement("section",{className:"banner banner-inner parallax","data-stellar-background-ratio":"0.5"},r?l.a.createElement("div",{className:"banner-image"},l.a.createElement("div",{className:"has-overlay has-overlay-dark full-height"},r&&l.a.createElement(c.a,{fluid:r}))):null,l.a.createElement("div",{className:"banner-text"},l.a.createElement("div",{className:"center-text"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,t),l.a.createElement("strong",{className:"subtitle"},n),l.a.createElement(s.a,{breadcrumbs:m})))))}},Tfgq:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("9Dj+"),c=t("H8eV"),s=t("Er7O"),m=t("wENY"),i=t("tZu9");a.default=function(e){var a=e.data,t=a.site.siteMetadata.siteUrl,n=a.markdownRemark.frontmatter,o=n.meta,u=o.title,d=o.description,g=n.banner,E=a.posts.edges,f=e.pageContext,b=[{id:"1",name:"home",href:"/"},{id:"2",name:"Blog",href:"/blog/"},{id:"3",name:"Tags",href:""},{id:"4",name:f.tag,href:""}],p={heading:g.heading,subHeading:f.tag+" ("+f.tags[f.tag].count+")",heroImage:g.image.childImageSharp.fluid,breadcrumbs:b};return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:u,description:d}),l.a.createElement(s.a,{data:p}),l.a.createElement("div",{className:"content-with-sidebar common-spacing content-left"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{id:"two-columns",className:"row"},l.a.createElement("div",{id:"content",className:"col-sm-8 col-md-9"},l.a.createElement("div",{className:"blog-holder"},l.a.createElement("div",{className:"blog-list list-view"},E.map((function(e){var a=e.node,n=a.id,r=a.frontmatter;return l.a.createElement(m.a,{key:n,data:{siteUrl:t,postTitle:r.title,slug:r.slug,introduction:r.introduction,date:r.date,image:r.blogListingImage.image,tags:r.tags,allTags:f.tags}})}))))),l.a.createElement(i.a,{tags:f.tags})))))}},corz:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),l=t.n(n),r=t("uy0d"),c=function(e){var a=e.data,t=a.siteUrl,n=a.tourLink,c=a.tourName,s=a.shortDescription,m=a.emailLink,i=""+t+n,o=Object(r.d)(i,c,s),u=o.facebook,d=o.twitter,g=o.linkedin,E=o.pinterest;return l.a.createElement("ul",{className:"social-networks"},l.a.createElement("li",null,l.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer"},l.a.createElement("span",{className:"icon-twitter"})),l.a.createElement("br",null)),l.a.createElement("li",null,l.a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},l.a.createElement("span",{className:"icon-facebook"})),l.a.createElement("br",null)),l.a.createElement("li",null,l.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer"},l.a.createElement("span",{className:"icon-linkedin"})),l.a.createElement("br",null)),l.a.createElement("li",null,l.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer"},l.a.createElement("span",{className:"icon-pin"})),l.a.createElement("br",null)),m&&l.a.createElement("li",{className:"social-networks__email"},l.a.createElement("a",{href:m,rel:"noreferrer"},l.a.createElement("span",{className:"icon-email"})),l.a.createElement("br",null)))}},dVQU:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=function(e){var a=e.breadcrumbs;return l.a.createElement("nav",{className:"breadcrumbs"},l.a.createElement("ul",null,a.map((function(e){var a=e.id,t=e.name,n=e.href;return l.a.createElement("li",{key:a},n?l.a.createElement(r.Link,{to:n},t):l.a.createElement("span",null,t))}))))}},tZu9:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("t4VN"),s=t.n(c),m=function(){var e=Object(n.useRef)(null),a=s()({ref:e}).height,t=Object(r.useStaticQuery)("772692404").posts.edges,c=Object(n.useState)(!0),m=c[0],i=c[1];return l.a.createElement("div",{className:"recent-posts accordion-group"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{className:m?"":"collapsed",onClick:function(){return i(!m)}},"RECENT POSTS"))),l.a.createElement("div",{id:"collapse2",className:"panel-collapse collapse in",role:"tabpanel",style:m&&a?{height:a+60+"px"}:{height:0}},l.a.createElement("div",{ref:e,className:"panel-body"},l.a.createElement("ul",{className:"side-list post-list hovered-list"},t.map((function(e){var a=e.node,t=a.id,n=a.frontmatter;return l.a.createElement("li",{key:t},l.a.createElement(r.Link,{to:"/blog/"+n.slug+"/"},l.a.createElement("time",null,n.date),l.a.createElement("span",{className:"text-block"},n.title)))}))))))},i=function(e){var a=e.tags,t=void 0===a?{}:a,c=Object(n.useRef)(null),m=s()({ref:c}).height,i=Object(n.useState)(!1),o=i[0],u=i[1];return l.a.createElement("div",{className:"tags accordion-group"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{className:o?"":"collapsed",onClick:function(){return u(!o)}},"TAGS"))),l.a.createElement("div",{id:"collapse1",className:"panel-collapse collapse in",role:"tabpanel",style:o&&m?{height:m+60+"px"}:{height:0}},l.a.createElement("div",{ref:c,className:"panel-body"},l.a.createElement("ul",{className:"side-list category-side-list hovered-list"},Object.keys(t).map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(r.Link,{to:t[e].slug},l.a.createElement("span",{className:"text"},e),l.a.createElement("span",{className:"count"},t[e].count)))}))))))},o=t("G04T"),u=t.n(o),d=function(){var e=Object(n.useRef)(null),a=s()({ref:e}).height,t=Object(n.useState)(!0),r=t[0],c=t[1],m=Object(n.useState)(""),i=m[0],o=m[1],d=Object(n.useState)(Object.assign({},{first_name:"",last_name:"",email:"",first_nameabcdefgjk:"",last_nameabcdefgjk:"",emailabcdefgjk:""})),g=d[0],E=d[1],f=g.first_name,b=g.last_name,p=g.email,h=g.first_nameabcdefgjk,N=g.last_nameabcdefgjk,v=g.emailabcdefgjk,k=function(e){switch(o(""),e.persist(),e.target.name){case"first_name":E((function(a){return Object.assign({},a,{first_name:e.target.value})}));break;case"last_name":E((function(a){return Object.assign({},a,{last_name:e.target.value})}));break;case"email":E((function(a){return Object.assign({},a,{email:e.target.value})}));break;case"first_nameabcdefgjk":E((function(a){return Object.assign({},a,{first_nameabcdefgjk:e.target.value})}));break;case"last_nameabcdefgjk":E((function(a){return Object.assign({},a,{last_nameabcdefgjk:e.target.value})}));break;case"emailabcdefgjk":E((function(a){return Object.assign({},a,{emailabcdefgjk:e.target.value})}));break;default:console.log("Wrong Case in Switch HandleChange")}};return l.a.createElement("div",{className:"subscribe-form accordion-group"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",{className:"panel-title"},l.a.createElement("a",{className:r?"":"collapsed",onClick:function(){return c(!r)}},"SUBSCRIBE"))),l.a.createElement("div",{id:"collapse5",className:"panel-collapse collapse in",role:"tabpanel",style:r&&a?{height:a+(i?150:60)+"px"}:{height:0}},l.a.createElement("div",{ref:e,className:"panel-body"},l.a.createElement("form",{className:"subscribe-form",onSubmit:function(e){e.preventDefault(),o(""),f||b||p||u()(v,{FNAME:h,LNAME:N}).then((function(e){e.result;var a=e.msg;E({first_name:"",last_name:"",email:"",first_nameabcdefgjk:"",last_nameabcdefgjk:"",emailabcdefgjk:""}),o(a)})).catch((function(e){o(e.message)}))}}," ",l.a.createElement("div",{className:"honeypot"},l.a.createElement("input",{autoComplete:"new-password",name:"first_name",type:"text",onChange:k,value:f}),l.a.createElement("input",{autoComplete:"new-password",name:"last_name",type:"text",onChange:k,value:b}),l.a.createElement("input",{autoComplete:"new-password",name:"email",type:"email",onChange:k,value:p})),l.a.createElement("fieldset",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"first_nameabcdefgjk",type:"text",onChange:k,value:h,className:"form-control",placeholder:"First Name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"last_nameabcdefgjk",type:"text",onChange:k,value:N,className:"form-control",placeholder:"Last Name",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"emailabcdefgjk",type:"email",onChange:k,value:v,className:"form-control",placeholder:"Email Address",required:!0})),l.a.createElement("div",{className:"btn-holder"},l.a.createElement("button",{type:"submit",className:"btn btn-default"},"SUBSCRIBE"),l.a.createElement("p",{id:"error_message",className:"contact-confirmation contact-confirmation--mailchimp2",dangerouslySetInnerHTML:{__html:i}})))))))},g=function(e){var a=e.tags;return l.a.createElement("aside",{id:"sidebar",className:"col-sm-4 col-md-3 sidebar"},l.a.createElement("div",{className:"sidebar-holder"},l.a.createElement("div",{className:"accordion"},l.a.createElement(m,null),l.a.createElement(i,{tags:a}),l.a.createElement(d,null))))}},wENY:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("uy0d"),s=t("corz"),m=t("0W9V"),i=function(e){var a=e.data,t=a.siteUrl,n=a.postTitle,i=a.slug,o=a.date,u=a.introduction,d=a.image,g=a.tags,E=a.allTags,f="/blog/"+i+"/";return l.a.createElement("article",{className:"article blog-article"},l.a.createElement("div",{className:"thumbnail"},l.a.createElement("div",{className:"img-wrap"},d&&d.childImageSharp?l.a.createElement(r.Link,{to:f},l.a.createElement(m.a,{image:d,alt:n})):null),l.a.createElement("div",{className:"description"},l.a.createElement("header",{className:"heading"},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:f},n)),l.a.createElement("time",{className:"info-day"},o)),l.a.createElement("p",null,Object(c.c)(u)),l.a.createElement("footer",{className:"meta"},l.a.createElement("div",{className:"link-view"},l.a.createElement(r.Link,{to:f},"VIEW POST")),l.a.createElement(s.a,{data:{siteUrl:t,tourLink:f,tourName:n,shortDescription:u}})),l.a.createElement("div",{className:"thumbnail__tags"},g.map((function(e,a){return l.a.createElement("span",{key:a,className:"thumbnail__tag"},l.a.createElement(r.Link,{to:E[e].slug},l.a.createElement("em",null,e)),g.length>1&&a<g.length-1?l.a.createElement("span",null,"  ⋅  "):null)}))))))}}}]);
//# sourceMappingURL=component---src-templates-tag-page-tsx-94fca78c834daef4270f.js.map