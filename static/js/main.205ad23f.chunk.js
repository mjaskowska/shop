(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/bars-solid.b3f49afd.svg"},24:function(e,t,a){e.exports=a.p+"static/media/times-circle-regular.3b2678c0.svg"},25:function(e,t,a){e.exports=a.p+"static/media/shopping-cart-solid.8bf1af37.svg"},26:function(e,t,a){e.exports=a.p+"static/media/user.a617dfb6.svg"},29:function(e,t,a){e.exports=a.p+"static/media/long-arrow-alt-left-solid.d9d4427b.svg"},30:function(e,t,a){e.exports=a(53)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),s=(a(35),a(36),a(2)),o=a(3),i=(a(37),a(23)),m=a.n(i),u=a(24),p=a.n(u),f=a(25),d=a.n(f),E=a(26),b=a.n(E),g=a(27),v=(a(38),{apiKey:"AIzaSyCntPIl-VRA-eYYGjFDfV_45atvZDFY7dY",authDomain:"auth-shop-development.firebaseapp.com",projectId:"auth-shop-development",storageBucket:"auth-shop-development.appspot.com",messagingSenderId:"749090837226",appId:"1:749090837226:web:d37391b7d0461c4bfcfd93"}),h=g.a.initializeApp(v),N=h.auth(),O=r.a.createContext(),j=function(){return Object(n.useContext)(O)},w=function(e){var t=e.children,a=Object(n.useState)(),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!0),m=Object(s.a)(i,2),u=m[0],p=m[1];Object(n.useEffect)(function(){return N.onAuthStateChanged(function(e){o(e),p(!1)})},[]);var f={currentUser:l,signup:function(e,t){return N.createUserWithEmailAndPassword(e,t)},login:function(e,t){return N.signInWithEmailAndPassword(e,t)},logout:function(){N.signOut()},resetPassword:function(e){return N.sendPasswordResetEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(O.Provider,{value:f},!u&&t)},y=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=j().currentUser,i=function(){c(!a)};return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"SHOP"))),r.a.createElement("div",{className:"hamburger",onClick:i},r.a.createElement("img",{src:m.a,alt:"menu"})),r.a.createElement("nav",null,r.a.createElement("ul",{className:a?"nav toggle-menu":"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/"},"HOME")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/products"},"PRODUCTS")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/login",className:l?"profile-hidden":""},"LOGIN")),r.a.createElement("li",{className:"menu-close-btn",onClick:i},r.a.createElement("img",{src:p.a,alt:"close"})))),r.a.createElement("div",{className:"nav-side-icons"},r.a.createElement(o.b,{className:l?"":"profile-hidden",to:"/profile"},r.a.createElement("img",{className:"profile",src:b.a,alt:"menu"})),r.a.createElement(o.b,{to:"/basket"},r.a.createElement("img",{className:"nav-basket",src:d.a,alt:"menu"}))))},C=(a(47),function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"hero__overlay"}),r.a.createElement("h1",{className:"hero__title"},"Your Travel Essentials"))}),x=(a(48),a(19)),S=a(6),k=a.n(S),I=a(12),P=Object(n.createContext)();function D(e){var t=e.children,a=Object(n.useState)([]),c=Object(s.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!0),m=Object(s.a)(i,2),u=m[0],p=m[1],f=Object(n.useState)(!1),d=Object(s.a)(f,2),E=d[0],b=d[1],g=Object(n.useState)([]),v=Object(s.a)(g,2),h=v[0],N=v[1],O=Object(n.useState)([]),j=Object(s.a)(O,2),w=j[0],y=j[1],C=Object(n.useState)(""),S=Object(s.a)(C,2),D=S[0],L=S[1],F=Object(n.useState)([]),R=Object(s.a)(F,2),T=R[0],A=R[1],U=function(){var e=Object(I.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/categories").then(function(e){return e.json()}).then(function(e){return A(e)}).catch(function(){return console.log("fetching categories error")});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q={items:l,isLoading:u,fetchError:E,fetchItems:function(){var e=Object(I.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products/").then(function(e){return e.json()}).then(function(e){o(e)}).catch(function(){console.log("fetching error"),b(!0)});case 2:p(!1);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),cart:h,setCart:N,addToCart:function(e){var t=l.find(function(t){return t.id===parseInt(e)});h.filter(function(t){return t.id===parseInt(e)}).length>0?N(Object(x.a)(h)):N([].concat(Object(x.a)(h),[t]))},filteredItems:w,setFilteredItems:y,searchValue:D,setSearchValue:L,handleSearch:function(e){e.preventDefault(),L(e.target.value)},fetchCategories:U,categories:T,getCartFromLocalStorage:function(){if(null===localStorage.getItem("cart-items"))localStorage.setItem("cart-items",JSON.stringify([]));else{h.length>0&&localStorage.setItem("cart-items",JSON.stringify(h));var e=JSON.parse(localStorage.getItem("cart-items"));N(e)}}};return r.a.createElement(P.Provider,{value:q},t)}var L=function(){var e=Object(n.useContext)(P).items,t=Object(n.useContext)(P).isLoading,a=Object(n.useContext)(P).fetchError,c=Object(n.useContext)(P).addToCart;return r.a.createElement("section",{className:"featured"},r.a.createElement("h2",{className:"title"},"TRENDING NOW"),a?r.a.createElement("p",{className:"info"},"Sorry, something went wrong"):"",t?r.a.createElement("p",{className:"info"},"Loading..."):r.a.createElement("section",{className:"item-list"},e.slice(0,4).map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("img",{className:"item-image",src:e.image,alt:""}),r.a.createElement("div",{className:"item-description"},r.a.createElement("p",{className:"item-price"},"$",e.price),r.a.createElement("p",{className:"item-title"},e.title)),r.a.createElement(o.b,{to:"/basket"},r.a.createElement("button",{onClick:function(t){c(e.id)},className:"add-btn"},"ADD TO BASKET")))})))},F=function(){var e=Object(n.useContext)(P).fetchItems;return Object(n.useEffect)(function(){e()},[]),r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(L,null))},R=(a(51),function(){var e=Object(n.useContext)(P),t=e.items,a=e.setFilteredItems,c=e.searchValue,l=e.handleSearch;return Object(n.useEffect)(function(){a(t.filter(function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))},[c]),r.a.createElement("section",{className:"search-bar"},r.a.createElement("input",{onChange:l,value:c,className:"search-input",type:"text",placeholder:"Search..."}))}),T=function(){var e=Object(n.useContext)(P).categories,t=Object(n.useContext)(P),a=t.setFilteredItems,c=t.items,l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],m=o[1];Object(n.useEffect)(function(){0===i.length?a(c):a(c.filter(function(e){return e.category.toLowerCase()===i.toLowerCase()}))},[i]);var u=function(e){e.preventDefault(),m(""),m(e.target.value)};return r.a.createElement("div",{className:"categories-list"},r.a.createElement("button",{onClick:u,value:"",className:"category"},"ALL"),e.map(function(e){return r.a.createElement("button",{value:e,onClick:u,className:"category",key:Math.random()},e)}))},A=function(){var e=Object(n.useContext)(P).isLoading,t=Object(n.useContext)(P).fetchError,a=Object(n.useContext)(P).fetchItems,c=Object(n.useContext)(P).fetchCategories,l=Object(n.useContext)(P).addToCart,s=Object(n.useContext)(P).filteredItems;return Object(n.useEffect)(function(){a(),c()},[]),r.a.createElement("section",{className:"products"},r.a.createElement("h2",{className:"title"},"PRODUCTS"),t?r.a.createElement("p",{className:"info"},"Sorry, something went wrong"):"",e?r.a.createElement("p",{className:"info"},"Loading..."):r.a.createElement("section",{className:"products-container"},r.a.createElement(T,null),r.a.createElement(R,null),r.a.createElement("section",{className:"item-list"},s.map(function(e){return r.a.createElement("div",{key:e.id,className:"item"},r.a.createElement("img",{className:"item-image",src:e.image,alt:""}),r.a.createElement("div",{className:"item-details"},r.a.createElement("p",{className:"item-price"},"$",e.price),r.a.createElement("p",{className:"item-title"},e.title),r.a.createElement(o.b,{to:"/basket"},r.a.createElement("button",{onClick:function(t){l(e.id)},className:"add-btn"},"ADD TO BASKET"))))}))))},U=(a(21),a(4)),q=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=j().login,c=Object(n.useState)(""),l=Object(s.a)(c,2),i=l[0],m=l[1],u=Object(n.useState)(!1),p=Object(s.a)(u,2),f=p[0],d=p[1],E=Object(U.f)(),b=function(){var n=Object(I.a)(k.a.mark(function n(r){return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,m(""),d(!0),n.next=6,a(e.current.value,t.current.value);case 6:E.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),m("Failed to log in. Try again.");case 12:d(!1);case 13:case"end":return n.stop()}},n,null,[[1,9]])}));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",{className:"login-title"},"Log In"),i&&r.a.createElement("p",{className:"error-text"},i),r.a.createElement("form",{onSubmit:b,className:"form-container"},r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Enter your email",required:!0,type:"email",ref:e})),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{placeholder:"Enter your password",required:!0,type:"password",ref:t})),r.a.createElement("button",{disabled:f,type:"submit",className:"main-btn"},"Log In"),r.a.createElement(o.b,{to:"/reset-password"},r.a.createElement("button",{className:"secondary-btn"},"Forgot password?")))),r.a.createElement(o.b,{to:"/register"},r.a.createElement("button",{className:"secondary-btn"},"Don't have an account? Sign up")))},Y=(a(52),function(e){var t=e.cartItem,a=Object(n.useContext)(P),c=a.cart,l=a.setCart,o=Object(n.useState)(1),i=Object(s.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"img-section"},r.a.createElement("img",{className:"cart-item-img",src:t.image,alt:""}),r.a.createElement("p",{className:"cart-item-title"},t.title)),r.a.createElement("div",null,r.a.createElement("p",{className:"cart-item-price"},"$",t.price),r.a.createElement("div",{className:"counter"},r.a.createElement("button",{className:"decrement",onClick:function(){if(m>1)u(function(e){return e-1});else{var e=c.filter(function(e){return e.id!==t.id});l(e)}}},"-"),r.a.createElement("span",{className:"count"},m),r.a.createElement("button",{className:"increment",onClick:function(){u(function(e){return e+1})}},"+"))))}),B=a(29),J=a.n(B),V=function(){var e=Object(n.useContext)(P),t=e.cart,a=e.getCartFromLocalStorage;return Object(n.useEffect)(function(){a()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/products"},r.a.createElement("img",{className:"back",src:J.a,alt:""})),r.a.createElement("div",null,r.a.createElement("p",{className:"cart-title"},"Your basket"),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(Y,{key:e.id,cartItem:e})})),r.a.createElement(o.b,{to:"/products"},r.a.createElement("button",{className:"cart-btn"},"Continue shopping")),r.a.createElement("button",{className:"cart-btn"},"Checkout")))},_=function(){var e=j(),t=e.currentUser,a=e.logout,c=Object(n.useState)(""),l=Object(s.a)(c,2),i=l[0],m=l[1],u=Object(U.f)(),p=function(){var e=Object(I.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),e.prev=1,e.next=4,a();case 4:u.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),m("Failed to log out. Try again.");case 10:case"end":return e.stop()}},e,null,[[1,7]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"profile-container"},r.a.createElement("h2",{className:"login-title"},"Profile"),i&&r.a.createElement("p",{className:"error-text"},i),r.a.createElement("p",{className:"email-text"},"Email: ",t.email),r.a.createElement(o.b,{to:"change-password"},r.a.createElement("button",{className:"secondary-btn btn-left"},"Change Password")),r.a.createElement("button",{onClick:p,className:"secondary-btn btn-left"},"Log Out"))},G=function(){var e=Object(n.useRef)(),t=j().resetPassword,a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],i=c[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),p=u[0],f=u[1],d=Object(n.useState)(""),E=Object(s.a)(d,2),b=E[0],g=E[1],v=function(){var a=Object(I.a)(k.a.mark(function a(n){return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,g(""),i(""),f(!0),a.next=7,t(e.current.value);case 7:g("Check your inbox."),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),i("Failed to reset password. Try again.");case 13:f(!1);case 14:case"end":return a.stop()}},a,null,[[1,10]])}));return function(e){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-container"},r.a.createElement("h2",{className:"login-title"},"Reset your password"),l&&r.a.createElement("p",{className:"error-text"},l),b&&r.a.createElement("p",{className:"error-text"},b),r.a.createElement("form",{onSubmit:v,className:"form-container"},r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Enter your email",required:!0,type:"email",ref:e})),r.a.createElement("button",{disabled:p,type:"submit",className:"main-btn"},"Reset Password"),r.a.createElement(o.b,{to:"/login"},r.a.createElement("button",{className:"secondary-btn"},"Cancel")))),r.a.createElement(o.b,{to:"/register"},r.a.createElement("button",{className:"secondary-btn"},"Don't have an account? Sign up")))},K=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=j().signup,l=Object(n.useState)(""),i=Object(s.a)(l,2),m=i[0],u=i[1],p=Object(n.useState)(!1),f=Object(s.a)(p,2),d=f[0],E=f[1],b=Object(U.f)(),g=function(){var n=Object(I.a)(k.a.mark(function n(r){return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",u("passwords do not match"));case 3:return n.prev=3,u(""),E(!0),n.next=8,c(e.current.value,t.current.value);case 8:b.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),u("failed to create an account");case 14:E(!1);case 15:case"end":return n.stop()}},n,null,[[3,11]])}));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"register-container"},r.a.createElement("h2",{className:"login-title"},"Create an account"),m&&r.a.createElement("p",{className:"error-text"},m),r.a.createElement("form",{onSubmit:g,className:"form-container"},r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Enter your email",required:!0,type:"email",ref:e})),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{placeholder:"Enter your password",required:!0,type:"password",ref:t})),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{placeholder:"Repeat your password",required:!0,type:"password",ref:a})),r.a.createElement("button",{disabled:d,type:"submit",className:"main-btn"},"Create an account"))),r.a.createElement(o.b,{to:"/login"},r.a.createElement("button",{className:"secondary-btn"},"Already have an account? Log In")))},M=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=j(),c=a.updatePassword,l=a.currentUser,i=Object(n.useState)(""),m=Object(s.a)(i,2),u=m[0],p=m[1],f=Object(n.useState)(!1),d=Object(s.a)(f,2),E=d[0],b=d[1],g=Object(U.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"register-container"},r.a.createElement("h2",{className:"login-title"},"Update password"),u&&r.a.createElement("p",{className:"error-text"},u),r.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),e.current.value!==t.current.value)return p("passwords do not match");b(!0),p(""),c(e.current.value).then(function(){g.push("/")}).catch(function(){p("Failet to update password. Try again.")}).finally(function(){b(!1)})},className:"form-container"},r.a.createElement("p",{style:{marginBottom:"15px"},className:"email-text"},"Email: ",l.email),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"New Password"),r.a.createElement("input",{placeholder:"Enter your password",required:!0,type:"password",ref:e})),r.a.createElement("div",{className:"form"},r.a.createElement("label",null,"Confirm New Password"),r.a.createElement("input",{placeholder:"Repeat your password",required:!0,type:"password",ref:t})),r.a.createElement("button",{disabled:E,type:"submit",className:"main-btn"},"Update password"))),r.a.createElement(o.b,{to:"/profile"},r.a.createElement("button",{className:"secondary-btn"},"Cancel")))};var W=function(){return r.a.createElement(w,null,r.a.createElement(D,null,r.a.createElement(o.a,null,r.a.createElement(y,null),r.a.createElement(U.c,null,r.a.createElement(U.a,{path:"/",exact:!0,component:F}),r.a.createElement(U.a,{path:"/products",exact:!0,component:A}),r.a.createElement(U.a,{path:"/login",component:q}),r.a.createElement(U.a,{path:"/register",component:K}),r.a.createElement(U.a,{path:"/change-password",component:M}),r.a.createElement(U.a,{path:"/reset-password",component:G}),r.a.createElement(U.a,{path:"/profile",component:_}),r.a.createElement(U.a,{path:"/basket",component:V})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.205ad23f.chunk.js.map