(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,a,t){"use strict";var n={base_url:"http://image.tmdb.org/t/p/",secure_base_url:"https://image.tmdb.org/t/p/",backdrop_sizes:["w300","w780","w1280","original"],logo_sizes:["w45","w92","w154","w185","w300","w500","original"],poster_sizes:["w92","w154","w185","w342","w500","w780","original"],profile_sizes:["w45","w185","h632","original"],still_sizes:["w92","w185","w300","original"]},c={backdrop:function(e){return"".concat(n.secure_base_url).concat(n.backdrop_sizes[1],"/").concat(e)},logo:function(e){return"".concat(n.secure_base_url).concat(n.logo_sizes[1],"/").concat(e)},poster:function(e){return"".concat(n.secure_base_url).concat(n.poster_sizes[6],"/").concat(e)},profile:function(e){return"".concat(n.secure_base_url).concat(n.profile_sizes[1],"/").concat(e)},still:function(e){return"".concat(n.secure_base_url).concat(n.still_sizes[1],"/").concat(e)}};a.a=c},132:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"c",function(){return o}),t.d(a,"b",function(){return m});var n=t(133),c=t(0),r=t.n(c);t(135);function l(){var e=Object(n.a)(["\n  min-height: 125px;\n  object-fit: contain;\n  background-image: ",";\n  margin-bottom: 20px;\n  color: white;\n  text-align: center;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding-top: 20%;\n"]);return l=function(){return e},e}function i(e){var a=e.age;return r.a.createElement("span",{className:"age--icon text-white"},a," ",r.a.createElement("i",{className:"fas fa-plus"}))}function o(e){var a=e.onList,t=e.onCarousel;return r.a.createElement("div",{className:"toggler-view"},r.a.createElement("i",{className:"fas fa-grip-horizontal",onClick:t}),r.a.createElement("i",{className:"fas fa-bars",onClick:a}))}var s=t(134).a.div(l(),function(e){return e.gradient});function m(e){var a=e.children,t=e.gradient;return r.a.createElement(s,{gradient:t},a,r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-chevron-down"})))}a.d=i},135:function(e,a,t){},137:function(e,a,t){"use strict";var n=t(34),c=t(133),r=t(0),l=t.n(r),i=(t(138),t(134)),o=t(131),s=t(132),m=t(193);function d(){var e=Object(c.a)(["\n    background:  ",";;\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 100px;\n"]);return d=function(){return e},e}var u=i.a.div(d(),function(e){return"url(".concat(o.a.poster(e.poster_path),")")});a.a=function(e){var a=e.title,t=(e.original_title,e.overview),c=e.release_date,r=e.poster_path,i=e.vote_average,o=e.adult,d=e.backdrop_path,p=Object(n.a)(e,["title","original_title","overview","release_date","poster_path","vote_average","adult","backdrop_path"]);return l.a.createElement("div",{className:"MovieDetail container-fluid padding-0 animated fadeIn"},l.a.createElement("div",{className:"container"},l.a.createElement(u,{className:"row",poster_path:d||r},l.a.createElement("div",{className:"classy-2"},l.a.createElement("div",{className:"col-12 col-md-6 padding-t-60"},l.a.createElement(m.a,{to:"/movie/".concat(p.id)},l.a.createElement("h1",{className:"margin-0"},a)),l.a.createElement("div",{className:"font-weight-bold text-white padding-t-5 padding-b-15"},l.a.createElement("span",{className:"text-warning font-weight-normal"},i," Rating\xa0"),l.a.createElement("span",null,a," - ",new Date(c).getFullYear()),l.a.createElement("span",null,"\xa0\xa0",o?l.a.createElement(s.a,{age:16}):l.a.createElement(s.a,{age:13}))),l.a.createElement("p",{className:"text-white"},t)),l.a.createElement("div",{className:"col-md-6"})))))}},138:function(e,a,t){},146:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=(t(147),t(131)),l=t(132),i=t(193);function o(e){var a=e.data;return c.a.createElement("div",{className:"row list-item-a"},c.a.createElement("div",{className:"col-12 col-sm-4 col-md-3"},c.a.createElement("img",{src:r.a.backdrop(a.backdrop_path),className:"img-fluid",alt:a.original_title})),c.a.createElement("div",{className:"col-12 col-sm-8 col-md-9"},c.a.createElement(i.a,{to:"/movie/".concat(a.id)},c.a.createElement("h4",null,a.title)),c.a.createElement("span",{className:"text-warning font-weight-normal"},a.vote_average," Rating\xa0"),c.a.createElement("span",null,a.title," - ",new Date(a.release_date).getFullYear()),c.a.createElement("span",null,"\xa0\xa0",a.adult?c.a.createElement(l.d,{age:16}):c.a.createElement(l.d,{age:13})),c.a.createElement("p",null,a.overview)))}function s(e){var a=e.dataList;return c.a.createElement("div",{className:"ListA animated fadeIn"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},a.map(function(e){return c.a.createElement(o,{data:e})}))))}s.defaultProps={dataList:[]},a.a=s},147:function(e,a,t){},149:function(e,a,t){},151:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=(t(152),t(193)),l=t(132);a.a=function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h5",{className:"section-title"},"Categories")),c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/theatres/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #fd5183, #f04275)"},"theatres"))),c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/science_fiction/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #ffc852, #eeb843)"},"science fiction"))),c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/dramas/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #81a7fc, #6e96ef)"},"dramas"))),c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/r_rated/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #bf64ff, #ab50eb)"},"R rated"))),c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/best_drama/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #bf64ff, #ab50eb)"},"best drama"))),c.a.createElement("div",{className:"col-6 col-sm-4 col-md-2"},c.a.createElement(r.a,{to:"/discover/kids/"},c.a.createElement(l.b,{gradient:"linear-gradient(to bottom, #bf64ff, #fd5183)"},"kids"))))))}},152:function(e,a,t){},200:function(e,a,t){"use strict";t.r(a);var n,c=t(10),r=t(11),l=t(15),i=t(14),o=t(16),s=t(33),m=t(0),d=t.n(m),u=(t(18),t(146)),p=(t(149),t(132),t(137)),v=t(151),f=Object(s.b)(["home"])(n=function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.home,t=e.match;t&&t.params.type&&a.discoverMovie(t.params.type)}},{key:"componentWillReceiveProps",value:function(e){var a=this.props,t=a.home,n=a.match,c=e.match;n.params.type!==c.params.type&&t.discoverMovie(c.params.type)}},{key:"render",value:function(){var e=this.props.home,a=e.discover,t=e.random_movie,n=this.props.match;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"container-fluid"},t?d.a.createElement("div",{className:"container-fluid"},d.a.createElement(p.a,t)):null),d.a.createElement("div",{className:"container"},d.a.createElement("h1",{className:"text-uppercase"},n.params.type),d.a.createElement(u.a,{dataList:a}),d.a.createElement("div",{className:"gap-30"}),d.a.createElement(v.a,null)))}}]),a}(m.Component))||n;a.default=f}}]);
//# sourceMappingURL=7.7d0181b0.chunk.js.map