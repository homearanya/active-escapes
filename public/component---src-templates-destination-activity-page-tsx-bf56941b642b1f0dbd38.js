(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"S4/c":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("9Dj+"),c=t("H8eV"),i=t("eY7h"),s=t("SXQZ"),m=t("noM2"),o=t("7Z7t"),d=t("jsDv");a.default=function(e){var a=e.data,t=a.markdownRemark.frontmatter,u=t.meta,E=t.title,f=t.filter.activity,h=t.banner,p=t.intro,b=t.featuredToursSection,N=t.taylorMadeSection,v=a.tours,g=[{id:"1",name:"home",href:"/"},{id:"2",name:"destination-activity",href:""},{id:"3",name:E,href:""}],y={heading:h.heading,subHeading:h.subHeading,heroImage:h.image.childImageSharp.fluid,breadcrumbs:g},x=Object(n.useMemo)((function(){return v.edges.map((function(e){var a=e.node;return{id:a.id,frontmatter:a.frontmatter}}))}),[v]),k="";3!==x.length&&x.length<5&&(k="grid-2");var w="";return N&&N.options.length>2&&(w="grid-2"),r.a.createElement(l.a,{pageClassName:"activity-page"},r.a.createElement(c.a,{title:u.title,description:u.description}),r.a.createElement(i.a,{data:y}),r.a.createElement(s.a,{data:p}),r.a.createElement(m.a,{data:{heading:b.heading,subHeading:b.subHeading,grid:k,activityFilter:f,featuredTours:x}}),N&&N.options.length>0&&r.a.createElement("article",{className:"activity-page__taylor-made-section content-block article-boxed"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"content-heading"},r.a.createElement("h2",{className:"main-heading"},N.heading),r.a.createElement("span",{className:"main-subtitle"},N.subHeading)),r.a.createElement("div",{className:"activity-page__taylor-made-wrapper"+(w?" "+w:"")},N.options.map((function(e,a){return r.a.createElement(d.a,{key:a,data:e,first:0===a,last:a===N.options.length-1})}))))),r.a.createElement(o.a,null))}},SXQZ:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),r=t.n(n),l=t("IiaX"),c=function(e){var a=e.data,t=a.heading,n=a.text,c=a.inset,i=a.link,s=e.destination,m=void 0!==s&&s;return r.a.createElement("div",{className:"activity-intro content-intro"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row activity-intro__row"},r.a.createElement("div",{className:"col-sm-8 col-md-9 text-holder"},r.a.createElement("h2",{className:"title-heading"},t),n.map((function(e,a){return r.a.createElement("p",{key:a,dangerouslySetInnerHTML:{__html:e}})})),i&&i.href&&i.text&&r.a.createElement("div",{className:"btn-holder"},r.a.createElement(l.a,{href:i.href,className:"btn btn-info-sub btn-md btn-shadow radius"},i.text))),c&&r.a.createElement("div",{className:"col-sm-4 col-md-3 map-col"},r.a.createElement("div",{className:"holder"},!m&&r.a.createElement("div",{className:"map-holder"},c.image&&r.a.createElement("img",{src:c.image.publicURL,alt:t,height:"200",width:"200"}),c.icon&&r.a.createElement("span",{className:"info icon"},r.a.createElement("span",{className:c.icon}))),(c.bestSeason||c.locations)&&r.a.createElement("div",{className:"info"},c.bestSeason&&r.a.createElement("div",{className:"slot"},r.a.createElement("strong",null,"Best Season:")," ",r.a.createElement("span",{className:"sub"},c.bestSeason)," "),c.locations&&r.a.createElement("div",{className:"slot"},r.a.createElement("strong",null,"Popular Locations:"),r.a.createElement("span",{className:"sub"},c.locations))))))))}},corz:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),r=t.n(n),l=t("uy0d"),c=function(e){var a=e.data,t=a.siteUrl,n=a.tourLink,c=a.tourName,i=a.shortDescription,s=a.emailLink,m=""+t+n,o=Object(l.d)(m,c,i),d=o.facebook,u=o.twitter,E=o.linkedin,f=o.pinterest;return r.a.createElement("ul",{className:"social-networks"},r.a.createElement("li",null,r.a.createElement("a",{href:u,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon-twitter"})),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon-facebook"})),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon-linkedin"})),r.a.createElement("br",null)),r.a.createElement("li",null,r.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer"},r.a.createElement("span",{className:"icon-pin"})),r.a.createElement("br",null)),s&&r.a.createElement("li",{className:"social-networks__email"},r.a.createElement("a",{href:s,rel:"noreferrer"},r.a.createElement("span",{className:"icon-email"})),r.a.createElement("br",null)))}},dVQU:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=function(e){var a=e.breadcrumbs;return r.a.createElement("nav",{className:"breadcrumbs"},r.a.createElement("ul",null,a.map((function(e){var a=e.id,t=e.name,n=e.href;return r.a.createElement("li",{key:a},n?r.a.createElement(l.Link,{to:n},t):r.a.createElement("span",null,t))}))))}},eY7h:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("q1tI"),r=t.n(n),l=t("9eSz"),c=t.n(l),i=t("dVQU"),s=function(e){var a=e.data,t=a.heading,n=a.subHeading,l=a.heroImage,s=a.breadcrumbs;return r.a.createElement("section",{className:"banner banner-inner parallax","data-stellar-background-ratio":"0.5"},l?r.a.createElement("div",{className:"banner-image"},r.a.createElement("div",{className:"has-overlay has-overlay-dark full-height"},l&&r.a.createElement(c.a,{fluid:l}))):null,r.a.createElement("div",{className:"banner-text"},r.a.createElement("div",{className:"center-text text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,t),r.a.createElement("strong",{className:"subtitle"},n),r.a.createElement(i.a,{breadcrumbs:s})))))}},jsDv:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),r=t.n(n),l=t("uy0d"),c=t("IiaX"),i=t("0W9V"),s=function(e,a){var t=e.maxWidth,n=e.widths,r=e.totalMeasurements,l=a.type,c=a.payload,i=c.index,s=c.width;switch(l){case"add":return!n[i]||s>n[i]?(n[i]=s,{maxWidth:s>t?s:t,widths:n,totalMeasurements:s?r+1:r}):e;default:throw e}},m=function(e){var a=e.data,t=a.image,m=a.title,o=a.subTitle,d=a.description,u=a.descriptionInParagraphs,E=a.link,f=a.link2,h=e.first,p=e.last,b=Object(n.useReducer)(s,{maxWidth:0,widths:[0,0],totalMeasurements:0}),N=b[0],v=b[1],g=function(e,a){return a.clientWidth&&a.clientWidth>N.widths[e]&&v({type:"add",payload:{index:e,width:a.clientWidth}})};return console.log(N),r.a.createElement("article",{className:"taylor-made-card__wrapper"+(h?" first":"")+(p?" last":"")},r.a.createElement("div",{className:"taylor-made-card__img-wrap"},t&&t.childImageSharp?r.a.createElement(i.a,{image:t,alt:m}):null),r.a.createElement("div",{className:"taylor-made-card__textblock"},m&&r.a.createElement("h3",{className:"taylor-made-card__title"},m),o&&r.a.createElement("p",{className:"taylor-made-card__subTitle"},o),d&&r.a.createElement("p",{className:"taylor-made-card__description"},Object(l.c)(d)),u&&u.map((function(e){return r.a.createElement("p",{className:"taylor-made-card__description"},Object(l.c)(e))})),r.a.createElement("div",{className:"taylor-made-card__buttons-wrapper"},E&&r.a.createElement("div",{ref:function(e){return e&&g(0,e)},style:N.totalMeasurements>=2?{display:"flex",width:N.maxWidth+"px"}:{}},r.a.createElement(c.a,{href:E.href,className:"btn btn-default featured-explore-button",style:{flex:"1 0 auto"}},E.text)),f&&r.a.createElement("div",{ref:function(e){return e&&g(1,e)},style:N.totalMeasurements>=2?{display:"flex",width:N.maxWidth+"px"}:{}},r.a.createElement(c.a,{href:f.href,className:"btn btn-default featured-explore-button featured-explore-button--extra",style:{flex:"1 0 auto"}},f.text)))))}},noM2:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),r=t.n(n),l=(t("E9XD"),t("Wbzz")),c=t("uy0d"),i=t("corz"),s=t("0W9V"),m=function(e){var a,t,n,m,o=e.data,d=o.tourName,u=o.duration,E=void 0===u?"":u,f=o.slug,h=o.meta,p=o.destination,b=o.activity,N=e.activityFilter,v=Object(l.useStaticQuery)("416460983").site.siteMetadata.siteUrl,g="/"+p.frontmatter.code+"/"+b[0].name.frontmatter.code+"/"+f,y=b.find((function(e){return e.name.frontmatter.code===N})),x=b.reduce((function(e,a,t){return 0===t?a.name.frontmatter.activityName:e+", "+a.name.frontmatter.activityName}),"");return y&&y.listing&&(a=y.listing.image,t=y.listing.title,n=y.listing.subtitle,m=y.listing.description),r.a.createElement("article",{className:"col-xs-12 col-sm-6 col-md-4 article has-hover-s1"},r.a.createElement("div",{className:"thumbnail"},r.a.createElement("div",{className:"img-wrap"},a&&a.childImageSharp?r.a.createElement(s.a,{image:a,alt:d}):null),r.a.createElement("h3",{className:"small-space"},r.a.createElement(l.Link,{to:g},t||d)),n&&r.a.createElement("span",{className:"info"},n),r.a.createElement("aside",{className:"meta"},E&&r.a.createElement("span",{className:"duration"},r.a.createElement("span",{className:"ico-clock ux"}),E),r.a.createElement("span",{className:"country"},r.a.createElement("span",{className:"icon-world"}),p.frontmatter.destinationName),r.a.createElement("span",{className:"activity"},r.a.createElement("span",{className:"icon-acitivities"}," "),x)),r.a.createElement("p",null,Object(c.c)(m)),r.a.createElement(l.Link,{to:g,className:"btn btn-default featured-explore-button"},"explore"),r.a.createElement("footer",null,r.a.createElement(i.a,{data:{siteUrl:v,tourLink:g,tourName:d,shortDescription:h.description}}))))},o=function(e){var a=e.data,t=a.heading,n=a.subHeading,l=a.grid,c=void 0===l?"":l,i=a.activityFilter,s=a.featuredTours,o=e.className,d=e.style;return r.a.createElement("article",{className:"content-block article-boxed featured-tours"+(o?" "+o:""),style:d},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"content-heading"},r.a.createElement("h2",{className:"main-heading"},t),r.a.createElement("span",{className:"main-subtitle"},n)),r.a.createElement("div",{className:"content-holder content-boxed"},r.a.createElement("div",{className:"row db-3-col featured-tour-row"+(c?" "+c:"")},s.map((function(e){var a=e.id,t=e.frontmatter;return r.a.createElement(m,{key:a,data:t,activityFilter:i})}))))))}}}]);
//# sourceMappingURL=component---src-templates-destination-activity-page-tsx-bf56941b642b1f0dbd38.js.map