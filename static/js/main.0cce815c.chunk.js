(this.webpackJsonpmovie_app_nomad=this.webpackJsonpmovie_app_nomad||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(2),r=a.n(n),i=a(14),c=a.n(i),o=a(3),m=a.n(o),l=a(5),u=a(15),d=a(16),j=a(19),v=a(18),p=a(17),h=a.n(p);a(44);var b=function(e){var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{alt:a,src:r,title:a}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:a}),Object(s.jsx)("h4",{className:"movie__year",children:t}),Object(s.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[n.slice(0,160),"..."]})]})]})},_=(a(45),function(e){Object(j.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movie:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var a,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:'"Loading..."'})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(r.a.Component));c.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("potato"))}},[[46,1,2]]]);
//# sourceMappingURL=main.0cce815c.chunk.js.map