(this.webpackJsonpgraphverse=this.webpackJsonpgraphverse||[]).push([[0],{38:function(e){e.exports=JSON.parse('[{"id":"fields-in-mathematics","name":"Fields in Mathematics","lang":"en","url":"./raw/fields-in-mathematics.json"}]')},45:function(e,t,i){var n={"./fields-in-mathematics.json":84};function a(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id=45},84:function(e){e.exports=JSON.parse('{"meta":{"name":"Fields in Mathematics","lang":"en","description":"Mathematics encompasses a growing variety and depth of subjects over its history, and comprehension of it requires a system to categorize and organize these various subjects into a more general areas of mathematics. A number of different classification schemes have arisen, and though they share some similarities, there are differences due in part to the different purposes they serve.","sourceLinks":[{"title":"Areas of Mathematics, Wikipedia","url":"https://en.wikipedia.org/wiki/Areas_of_mathematics"}],"contributedBy":["0xf17"],"dataSource":"#","editLink":"#"},"data":{"nodes":[{"id":1,"name":"Pure Mathematics","emoji":"\ud83d\udc1a"},{"id":1.1,"name":"Foundation","emoji":"\ud83d\udddd"},{"id":1.11,"name":"Proof Theory"},{"id":1.12,"name":"Constructive Mathematics"},{"id":1.13,"name":"Model Theory"},{"id":1.14,"name":"Set Theory"},{"id":1.2,"name":"History"},{"id":1.3,"name":"Recreational Mathematics"},{"id":1.4,"name":"Number Theory"},{"id":1.41,"name":"Arithmetic"},{"id":1.42,"name":"Analytic N.Th"},{"id":1.43,"name":"Algebraic N.Th"},{"id":1.44,"name":"Geometric N.Th"},{"id":1.45,"name":"Combinatorial N.Th"},{"id":1.46,"name":"Transcendental N.Th"},{"id":1.47,"name":"Computational N.Th"},{"id":1.5,"name":"Algebra","emoji":"\ud83d\udd78"},{"id":1.6,"name":"Combinatorics","emoji":"\ud83d\udce6"},{"id":1.7,"name":"Geometry","emoji":"\ud83d\udcd0"},{"id":1.8,"name":"Topology","emoji":"\ud83e\uddf6"},{"id":1.9,"name":"Analysis","emoji":"\ud83e\uddd0"}],"links":[{"source":1,"target":1.1},{"source":1.1,"target":1.11},{"source":1.1,"target":1.12},{"source":1.11,"target":1.12},{"source":1.1,"target":1.13},{"source":1.1,"target":1.14},{"source":1,"target":1.2},{"source":1,"target":1.3},{"source":1,"target":1.4},{"source":1.4,"target":1.41},{"source":1.4,"target":1.42},{"source":1.4,"target":1.43},{"source":1.43,"target":1.5},{"source":1.4,"target":1.44},{"source":1.44,"target":1.7},{"source":1.4,"target":1.45},{"source":1.45,"target":1.6},{"source":1.4,"target":1.46},{"source":1.4,"target":1.47},{"source":1,"target":1.5},{"source":1,"target":1.6},{"source":1,"target":1.7},{"source":1,"target":1.8},{"source":1,"target":1.9}]}}')},85:function(e,t,i){},86:function(e,t,i){"use strict";i.r(t);var n=i(9),a=i.n(n),r=i(32),s=i.n(r),c=i(17),o=i(12),l=i(8);var h=Object(o.g)((function(e){return Object(l.jsx)("div",{className:"Navigation",children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("ul",{className:"left",children:Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{className:"title",to:"/",children:"Graphverse"})})}),Object(l.jsxs)("ul",{className:"right",children:[Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/search",children:"Search"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/contribute",children:"Contribute"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{to:"/about",children:"About Graphverse"})}),Object(l.jsx)("li",{children:Object(l.jsx)(c.b,{className:"dim",to:"/contact",children:"v0.3.0"})})]})]})})})})),d=i.p+"static/media/ms_logo.7a742c67.svg";var u=function(){return Object(l.jsx)("a",{className:"logo",href:"https://mathscapes.xyz",children:Object(l.jsx)("img",{src:d,alt:"Mathscapes"})})};var m=function(e){return Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h1",{children:"About"}),Object(l.jsx)("p",{children:e.data})]})};function j(){var e,t;e=document.getElementById("searchbox"),console.log(e.value),t=e.value.toUpperCase();for(var i=document.getElementsByClassName("graph-link"),n=0;n<i.length;n++){var a=i[n];a.innerText.toUpperCase().indexOf(t)>-1?a.style.display="":a.style.display="none"}}var g=Object(o.g)((function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)("input",{type:"text",id:"searchbox",onKeyUp:j,placeholder:"Search Graphverse.."}),Object(l.jsx)("div",{className:"results",children:e.items.map((function(e){return Object(l.jsxs)(c.b,{className:"graph-link",to:"/graph/"+e.id,children:[e.name," ",Object(l.jsx)("span",{children:e.lang})]},e.id)}))})]})})})),b=i(13),p=i(0),f=i(1),v=i(10),O=i(3),x=i(4),N=i(50),k=i(25),y=i(5),C=(i(80),[new k.b]),w=new y.q({color:"#c5c3c6"}),T=new y.q({color:"#969da5"});function A(e,t,i,n,a){return(e-t)*(a-n)/(i-t)+n}function E(e,t){var i=e.x-t.x,n=e.y-t.y,a=e.z-t.z;return Math.sqrt(i*i+n*n+a*a)}function L(e,t){return e.find((function(e){return e.id===t}))}function H(e,t,i){return e.find((function(e){return e.source.id===t&&e.target.id===i||e.source.id===i&&e.target.id===t}))}var S=function(e,t){var i=document.createElement("div");i.className="node-label";var n=document.createElement("p");if(n.textContent=t.name,t.url?(n.textContent+=" \u2197\ufe0f",n.className="label url"):n.className="label",t.image){var a=document.createElement("img");a.src=t.image,a.className="image",a.style.height="5rem",i.appendChild(a)}else if(t.emoji){var r=document.createElement("span");r.innerText=t.emoji,i.appendChild(r)}return i.appendChild(n),function(e,t,i){var n=new y.P(0,0,0);t.x&&(n=new y.P(t.x,t.y,t.z));var a=A(1.2*E(e.position,n),500,0,0,1);i.style.opacity=a}(e,t,i),new k.a(i)},M=function(e){Object(O.a)(i,e);var t=Object(x.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).onNodeClick=n.onNodeClick.bind(Object(v.a)(n)),n.onLinkClick=n.onLinkClick.bind(Object(v.a)(n)),n.ref=a.a.createRef(),n.hoverNode=null,n.highlightNodes=new Set,n.highlightLinks=new Set,n.addNodeToHighlighted=n.addNodeToHighlighted.bind(Object(v.a)(n)),n.addLinkToHighlighted=n.addLinkToHighlighted.bind(Object(v.a)(n)),n.resetHighlights=n.resetHighlights.bind(Object(v.a)(n)),n.nodeObject=n.nodeObject.bind(Object(v.a)(n)),n.linkMaterial=n.linkMaterial.bind(Object(v.a)(n)),n.fogValueChanged=n.fogValueChanged.bind(Object(v.a)(n)),n.onNodeRightClick=n.onNodeRightClick.bind(Object(v.a)(n)),n.resumeAnimation=n.resumeAnimation.bind(Object(v.a)(n)),n.toggleAnimationCycle=n.toggleAnimationCycle.bind(Object(v.a)(n)),n.chargeForceChanged=n.chargeForceChanged.bind(Object(v.a)(n)),n.state={count:0,fogValue:.003,animationCycle:!0,chargeForce:120},n}return Object(f.a)(i,[{key:"resetHighlights",value:function(){this.hoverNode=null,this.highlightNodes=new Set,this.highlightLinks=new Set}},{key:"addNodeToHighlighted",value:function(e){this.highlightNodes.add(e)}},{key:"addLinkToHighlighted",value:function(e){this.highlightLinks.add(e)}},{key:"onNodeClick",value:function(e){if(!(!e&&!this.highlightNodes.size||e&&this.hoverNode===e)){if(this.resetHighlights(),e){this.addNodeToHighlighted(e);var t,i=Object(b.a)(e.neighbors);try{for(i.s();!(t=i.n()).done;){var n=t.value;this.addNodeToHighlighted(L(this.props.data.nodes,n)),this.addLinkToHighlighted(H(this.props.data.links,e.id,n))}}catch(a){i.e(a)}finally{i.f()}}this.hoverNode=e||null,this.setState({count:this.state.count+1})}}},{key:"onLinkClick",value:function(e){this.resetHighlights(),e&&(this.addLinkToHighlighted(e),this.addNodeToHighlighted(e.source),this.addNodeToHighlighted(e.target)),this.setState({count:this.state.count+1})}},{key:"onNodeRightClick",value:function(e){e.url&&window.open(e.url,"_blank")}},{key:"componentDidMount",value:function(){var e=this.ref.current;e.scene().fog=new y.n(16777215,this.state.fogValue),e.controls().addEventListener("change",e.refresh)}},{key:"componentWillUnmount",value:function(){var e=this.ref.current;document.removeEventListener("change",e.controls())}},{key:"linkMaterial",value:function(e){return this.highlightLinks.has(e)?T:w}},{key:"nodeObject",value:function(e){if(this.ref.current){if(this.ref.current.camera()){var t=this.ref.current.camera();return this.highlightNodes.has(e)?this.hoverNode===e?function(e,t){var i=document.createElement("div"),n=document.createElement("p");if(n.textContent=t.name,t.url?(n.textContent+=" \u2197\ufe0f",n.className="label url"):n.className="label",t.image){var a=document.createElement("img");a.src=t.image,a.className="image",a.style.height="5rem",i.appendChild(a)}else if(t.emoji){var r=document.createElement("span");r.innerText=t.emoji,i.appendChild(r)}return i.appendChild(n),i.className="node-label active",new k.a(i)}(0,e):function(e,t){var i=document.createElement("div"),n=document.createElement("p");if(n.textContent=t.name,t.url?(n.textContent+=" \u2197\ufe0f",n.className="label url"):n.className="label",t.image){var a=document.createElement("img");a.src=t.image,a.className="image",a.style.height="5rem",i.appendChild(a)}else if(t.emoji){var r=document.createElement("span");r.innerText=t.emoji,i.appendChild(r)}return i.className="node-label default",i.appendChild(n),new k.a(i)}(0,e):S(t,e)}}else;}},{key:"fogValueChanged",value:function(e){this.setState({fogValue:e.target.value}),this.ref.current.refresh()}},{key:"resumeAnimation",value:function(e){this.ref&&this.ref.current.resumeAnimation()}},{key:"toggleAnimationCycle",value:function(e){this.ref&&(this.state.animationCycle?(this.ref.current.pauseAnimation(),this.setState({animationCycle:!1})):(this.ref.current.resumeAnimation(),this.setState({animationCycle:!0})))}},{key:"chargeForceChanged",value:function(e){this.setState({chargeForce:e.target.value}),this.ref.current.d3Force("charge",-1*this.state.chargeForce),this.ref.current.d3ReheatSimulation()}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"graph",children:[Object(l.jsxs)("div",{className:"customize",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h6",{children:"More"})}),Object(l.jsxs)("div",{className:"customize-controls",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsxs)("p",{children:["Nodes: ",this.props.data.nodes.length,", Links: ",this.props.data.links.length]})}),Object(l.jsxs)("div",{className:"control",children:[Object(l.jsxs)("p",{children:["Animation Cycle is currrently ",this.state.animationCycle?"active. You may pause to cool down memory usage.":"paused. You can resume to interact with graph."," "]}),Object(l.jsx)("div",{class:"button-group",children:Object(l.jsx)("a",{className:this.state.animationCycle?"button secondary":"button primary",onClick:this.toggleAnimationCycle,children:this.state.animationCycle?"Pause Animation Cycle":"Resume Animation Cycle"})})]})]})]}),Object(l.jsx)(N.a,{ref:this.ref,rendererConfig:{alpha:!0},extraRenderers:C,width:window.innerWidth,height:window.innerHeight,graphData:this.props.data,backgroundColor:"rgba(0,0,0,0)",showNavInfo:!1,linkWidth:.25,warmupTicks:100,nodeRelSize:5,nodeResolution:2,linkResolution:4,nodeOpacity:0,linkMaterial:this.linkMaterial,linkCurvature:0,nodeThreeObject:this.nodeObject,nodeThreeObjectExtend:!0,onNodeClick:this.onNodeClick,onLinkClick:this.onLinkClick,onNodeRightClick:this.onNodeRightClick})]})}}]),i}(a.a.Component),R=function(e){Object(O.a)(i,e);var t=Object(x.a)(i);function i(e){var n;return Object(p.a)(this,i),(n=t.call(this,e)).state={},n}return Object(f.a)(i,[{key:"render",value:function(){var e="",t="";return null!==this.props.meta&&(e=this.props.meta.sourceLinks.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:e.url,children:e.title})},e.url)})),t=this.props.meta.contributedBy.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"github.com/"+e,children:e})},e)}))),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsxs)("h1",{children:[this.props.meta.name,Object(l.jsx)("span",{children:this.props.meta.lang})]}),Object(l.jsx)("p",{children:this.props.meta.description}),Object(l.jsx)("h6",{children:"Source"}),Object(l.jsx)("ul",{children:e}),Object(l.jsx)("h6",{children:"Contributors"}),Object(l.jsx)("ul",{children:t}),Object(l.jsx)("h6",{children:"Graph Actions"}),Object(l.jsxs)("div",{className:"button-group",children:[Object(l.jsx)("a",{className:"button primary",href:"{this.props.meta.dataSource}",children:"Download"}),Object(l.jsx)("a",{className:"button secondary",href:"{this.props.meta.editLink}",children:"Edit on GH"})]})]})}}]),i}(a.a.Component);var F=Object(o.g)((function(e){var t,n=Object(o.f)().id,a=i(45).resolve("./".concat(n,".json"));i.c[a]&&delete i.c[a];var r=function(e){var t=e.meta,i=e.data.nodes,n=e.data.links;return n.forEach((function(e){var t=L(i,e.source),n=L(i,e.target);!t.neighbors&&(t.neighbors=[]),!n.neighbors&&(n.neighbors=[]),t.neighbors.push(n.id),n.neighbors.push(t.id)})),{meta:t,data:{nodes:i,links:n}}}(t=i(45)("./".concat(n,".json"))).data;return Object(l.jsxs)("div",{children:[Object(l.jsx)(M,{data:r}),Object(l.jsx)(R,{meta:t.meta})]})})),z=(i(85),i(38));function G(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(c.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(l.jsx)(g,{items:z})}}),Object(l.jsx)(o.a,{exact:!0,path:"/search",component:function(){return Object(l.jsx)(g,{items:z})}}),Object(l.jsx)(o.a,{exact:!0,path:"/about",component:function(){return Object(l.jsx)(m,{data:"data"})}}),Object(l.jsx)(o.a,{path:"/graph/:id",component:function(){return Object(l.jsx)(F,{})}})]})]}),Object(l.jsx)(u,{})]})}s.a.render(Object(l.jsx)(G,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.d46ddb85.chunk.js.map