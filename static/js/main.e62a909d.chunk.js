(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),c=a.n(n),r=a(31),l=a.n(r),i=a(17),o=a.n(i),s=a(55),u=a(56),d=a(60),m=a(57),p=a(61),h=a(1),f=(a(110),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(h.Panel,{id:t},c.a.createElement(h.PanelHeader,null,"WENDY PENDY"),n&&c.a.createElement(h.Group,{title:"User Data Fetched with VK Connect"},c.a.createElement(h.ListItem,{before:n.photo_200?c.a.createElement(h.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(h.Group,{title:"Navigation Example"},c.a.createElement(h.Div,null,c.a.createElement(h.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Natasha, please"))))}),E=a(58),b=a.n(E),v=(a(111),a(59)),g=a.n(v),k=a(32),P=a.n(k),w=Object(h.platform)(),y=function(e){return c.a.createElement(h.Panel,{id:e.id},c.a.createElement(h.PanelHeader,{left:c.a.createElement(h.HeaderButton,{onClick:e.go,"data-to":"home"},w===h.IOS?c.a.createElement(g.a,null):c.a.createElement(P.a,null))},"Natasha"),c.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return c.a.createElement(h.View,{activePanel:this.state.activePanel},c.a.createElement(f,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),c.a.createElement(y,{id:"persik",go:this.go}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(c.a.createElement(U,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.6d2522bd.png"},62:function(e,t,a){e.exports=a(112)}},[[62,1,2]]]);
//# sourceMappingURL=main.e62a909d.chunk.js.map