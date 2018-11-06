(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(36),l=n.n(o),i=(n(91),n(4)),c=n(5),u=n(9),s=n(7),d=n(8),m=(n(94),n(12)),h=n(13),E=n(85),p=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"removeUser",value:function(){window.localStorage.removeItem("user")}},{key:"authenticateUser",value:function(e){window.localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==window.localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){window.localStorage.removeItem("token")}},{key:"getToken",value:function(){return window.localStorage.getItem("token")}}]),e}(),f=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return r.a.createElement(h.d,Object.assign({},n,{render:function(e){return p.isUserAuthenticated()?r.a.createElement(t,e):r.a.createElement(h.c,{to:{pathname:"/users/login",state:{from:e.location}}})}}))},g=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",null,"About Page")))},b=n(27),v=n(3),O=function(e){var t=e.type||"text";return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.placeholder),r.a.createElement("input",{type:t,className:"form-control",name:e.name,placeholder:e.placeholder,value:e.value,onChange:e.onChange}))},S=function(e){return r.a.createElement("div",null,r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:e.value,onClick:e.onClick}))},D=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,e.error),r.a.createElement(O,{name:"username",placeholder:"Username",value:e.username,onChange:e.onChange}),r.a.createElement(O,{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:e.onChange}),r.a.createElement("br",null),r.a.createElement(S,{value:"Login",onClick:e.onSubmit}))},C=n(31),T=n.n(C),y=function(){var e="https://baas.kinvey.com/",t="kid_H1L5OCFUW",n="338746648e3b4bfa8e83a8ac221a1acc";function a(a,r,o,l){return{url:e+r+"/"+t+"/"+o,method:a,headers:{Authorization:function(e){if("basic"===e)return"Basic ".concat(btoa(t+":"+n));var a=p.getToken();return"Kinvey ".concat(a)}(l),"Content-Type":"application/json"}}}return{get:function(e,t,n){return T.a.ajax(a("GET",e,t,n))},post:function(e,t,n,r){var o=a("POST",e,t,n);return r&&(o.data=JSON.stringify(r)),T.a.ajax(o)},update:function(e,t,n,r){var o=a("PUT",e,t,n);return o.data=JSON.stringify(r),T.a.ajax(o)},remove:function(e,t,n){return T.a.ajax(a("DELETE",e,t,n))},handleError:function(e){return e.responseJSON.description}}}(),_=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"register",value:function(e,t){return y.post("user","","basic",{username:e,password:t})}},{key:"login",value:function(e,t){return y.post("user","login","basic",{username:e,password:t})}},{key:"logout",value:function(){return y.post("user","_logout","kinvey")}}]),e}(),k={LOGGIN_SUCCESS:"LOGGIN_SUCCESS",LOGOUT_SUCCESS:"LOGOUT_SUCCESS",AUTH_ERROR:"AUTH_ERROR",AUTH_REQUEST:"AUTH_REQUEST",LIST_CREATED:"LIST_CREATED",LIST_UPDATED:"LIST_UPDATED",LIST_DELETED:"LIST_DELETED",FETCH_LISTS_SUCCESS:"FETCH_LISTS_SUCCESS",FIND_ONE_BY_ID:"FIND_ONE_BY_ID",TODO_CREATED:"TODO_CREATED",TODO_UPDATED:"TODO_UPDATED",TODO_DELETED:"TODO_DELETED",TODOS_FETCHED:"TODOS_FETCHED",REMOTE_ERROR:"REMOTE_ERROR"};function j(){return{type:k.LOGGIN_SUCCESS}}function H(e){return{type:k.AUTH_ERROR,message:e}}function I(){return function(e){return _.logout().then(function(t){p.deauthenticateUser(),e({type:k.LOGOUT_SUCCESS})}).catch(function(t){var n=y.handleError(t);e(H(n))})}}var A=n(11),R=n.n(A),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={username:"",password:"",error:""},n.onInputChangeHandler=n.onInputChangeHandler.bind(Object(v.a)(Object(v.a)(n))),n.onSubmitHandler=n.onSubmitHandler.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onInputChangeHandler",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault(),this.isValidForm()&&this.props.login(this.state.username.toLowerCase(),this.state.password)}},{key:"componentWillReceiveProps",value:function(e){e.error&&R.a.error(e.error),e.loggedIn&&(R.a.success("User login successfull!"),this.props.history.push("/"))}},{key:"isValidForm",value:function(){var e=this.state.username,t=this.state.password,n=!0,a="";return""!==e&&""!==t||(a="All input fields are required!",n=!1),a&&this.setState({error:a}),n}},{key:"render",value:function(){return console.log("Login Page render"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("h1",null,"Login"),r.a.createElement("p",null,"Please enter your username and password."),r.a.createElement(D,{username:this.state.username,password:this.state.password,error:this.state.error,onChange:this.onInputChangeHandler,onSubmit:this.onSubmitHandler})))}}]),t}(a.Component);var w=Object(m.b)(function(e){return{loggedIn:e.auth.loggedIn,error:e.auth.error}},function(e){return{login:function(t,n){return e(function(e,t){return function(n){return _.login(e,t).then(function(e){p.authenticateUser(e._kmd.authtoken),n(j())}).catch(function(e){var t=y.handleError(e);n(H(t))})}}(t,n))}}})(U),L=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.props.logout()}},{key:"componentWillReceiveProps",value:function(e){e.error&&R.a.error(e.error),e.loggedIn||this.props.history.push("/users/login")}},{key:"render",value:function(){return null}}]),t}(a.Component);var N=Object(m.b)(function(e){return{loggedIn:e.auth.loggedIn,error:e.auth.error}},function(e){return{logout:function(){return e(I())}}})(L),M=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,e.error),r.a.createElement(O,{name:"username",placeholder:"Username",value:e.username,onChange:e.onChange}),r.a.createElement(O,{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:e.onChange}),r.a.createElement(O,{type:"password",name:"repeat",placeholder:"Confirm  Password",value:e.confirmPassword,onChange:e.onChange}),r.a.createElement("br",null),r.a.createElement(S,{value:"Register",onClick:e.onSubmit}))},P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={username:"",password:"",repeat:"",error:""},n.onInputChangeHandler=n.onInputChangeHandler.bind(Object(v.a)(Object(v.a)(n))),n.onSubmitHandler=n.onSubmitHandler.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onInputChangeHandler",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmitHandler",value:function(e){e.preventDefault(),this.isValidForm()&&this.props.register(this.state.username.toLowerCase(),this.state.password)}},{key:"componentWillReceiveProps",value:function(e){e.error&&R.a.error(e.error),e.loggedIn&&(R.a.success("User registration successfull!"),this.props.history.push("/"))}},{key:"isValidForm",value:function(){var e=this.state.username,t=this.state.password,n=!0,a="";return""!==e&&""!==t||(a="All input fields are required!",n=!1),t!==this.state.repeat&&(a="Passwords missmatch!",n=!1),a&&this.setState({error:a}),n}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("h1",null,"Register"),r.a.createElement("p",null,"Please fill in this form to create an account."),r.a.createElement(M,{username:this.state.username,password:this.state.password,repeat:this.state.repeat,error:this.state.error,onChange:this.onInputChangeHandler,onSubmit:this.onSubmitHandler})))}}]),t}(a.Component);var F=Object(m.b)(function(e){return{loggedIn:e.auth.loggedIn,error:e.auth.error}},function(e){return{register:function(t,n){return e(function(e,t){return function(n){return _.register(e,t).then(function(e){p.authenticateUser(e._kmd.authtoken),n(j())}).catch(function(e){var t=y.handleError(e);n(H(t))})}}(t,n))}}})(P),V=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"create",value:function(e){return y.post("appdata","lists","kinvey",e)}},{key:"edit",value:function(e,t){return y.update("appdata","lists"+"/".concat(e),"kinvey",t)}},{key:"delete",value:function(e){return y.remove("appdata","lists"+"/".concat(e),"kinvey")}},{key:"getAll",value:function(){return y.get("appdata","lists","kinvey")}},{key:"getById",value:function(e){return y.get("appdata","lists","kinvey")}}]),e}();function G(e){return{type:k.REMOTE_ERROR,message:e}}function B(e){return function(t){return V.create(e).then(function(e){t(function(e){return{type:k.LIST_CREATED,data:e}}(e))}).catch(function(e){var n=y.handleError(e);t(G(n))})}}function W(e,t){return function(n){return V.edit(e,t).then(function(e){n(function(e){return{type:k.LIST_UPDATED,data:e}}(e))}).catch(function(e){var t=y.handleError(e);n(G(t))})}}function x(e){return function(t){return V.delete(e).then(function(){t(function(e){return{type:k.LIST_DELETED,id:e}}(e))}).catch(function(e){var n=y.handleError(e);t(G(n))})}}function q(){return console.log("Fetching lists!!!"),function(e){return V.getAll().then(function(t){e(function(e){return{type:k.FETCH_LISTS_SUCCESS,data:e}}(t))}).catch(function(t){var n=y.handleError(t);e(G(n))})}}var J={MODE_CREATE:"MODE_CREATE",MODE_READ:"MODE_READ",MODE_UPDATE:"MODE_UPDATE",MODE_DELETE:"MODE_DELETE"},K={MAIN_PUBLIC:[{label:"Login",to:"/users/login"},{label:"Register",to:"/users/register"}],MAIN_PRIVATE:[{label:"Home",to:"/"},{label:"Add Todo",to:"/todos/add"},{label:"Manage Lists",to:"/lists"},{label:"Logout",to:"/users/logout"}]},Q=(n(101),function(e){return r.a.createElement("div",{className:"list-thumb"},r.a.createElement("h2",null,e.list.name),r.a.createElement("p",null,r.a.createElement("span",null,"Total:")," 6",r.a.createElement("br",null),r.a.createElement("span",null,"Today:")," 3",r.a.createElement("br",null),r.a.createElement("span",null,"Active:")," 2",r.a.createElement("br",null),r.a.createElement("span",null,"Completed:")," 1",r.a.createElement("br",null)),r.a.createElement("button",{onClick:function(t){return e.editHandler(t,e.list)}},"[Edit]"),r.a.createElement("button",{onClick:function(t){return e.deleteHandler(t,e.list._id)}},"[Delete]"))}),z=function(e){var t=e.data,n=Object.keys(t).map(function(n){return r.a.createElement(Q,{key:n,list:t[n],editHandler:e.editHandler,deleteHandler:e.deleteHandler})});return r.a.createElement("div",null,n)},Y=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,e.error),r.a.createElement(O,{name:"name",placeholder:"Name",value:e.name,onChange:e.onChange}),r.a.createElement("br",null),r.a.createElement(S,{value:"Submit",onClick:e.onSubmit}))},$=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:""},n.onSubmitHandler=n.onSubmitHandler.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onSubmitHandler",value:function(e){e.preventDefault(),this.isValidForm()&&this.props.createList(this.props.list)}},{key:"isValidForm",value:function(){var e=!0,t="";return""===this.props.list.name&&(t="All input fields are required!",e=!1),t&&this.setState({error:t}),e}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("h1",null,"Create List"),r.a.createElement(Y,{name:this.props.list.name,onChange:this.props.onChange,onSubmit:this.onSubmitHandler,error:this.state.error})))}}]),t}(a.Component),X=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={error:""},n.onSubmitHandler=n.onSubmitHandler.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"onSubmitHandler",value:function(e,t,n){e.preventDefault(),this.isValidForm()&&(console.log(n),this.props.editList(t,n))}},{key:"isValidForm",value:function(){var e=!0,t="";return""===this.props.list.name&&(t="All input fields are required!",e=!1),t&&this.setState({error:t}),e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("h1",null,"Edit List"),r.a.createElement(Y,{name:this.props.list.name,onChange:this.props.onChange,onSubmit:function(t){return e.onSubmitHandler(t,e.props.id,e.props.list)},error:this.state.error})))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={mode:J.MODE_READ,list:{name:""},error:""},n.onShowCreateHandler=n.onShowCreateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onChangeInputHandler=n.onChangeInputHandler.bind(Object(v.a)(Object(v.a)(n))),n.onShowUpdateHandler=n.onShowUpdateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onDeleteHandler=n.onDeleteHandler.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.remote!==k.FETCH_LISTS_SUCCESS&&this.props.fetchAll()}},{key:"componentWillReceiveProps",value:function(e){e.error?R.a.error(e.error):(e.remote===k.LIST_CREATED&&(R.a.success("New list added successfully!"),this.setState({mode:J.MODE_READ})),e.remote===k.LIST_UPDATED&&(R.a.success("The list was successfully updated!"),this.setState({mode:J.MODE_READ})),e.remote===k.LIST_DELETED&&(R.a.success("The list was successfully deleted!"),this.setState({mode:J.MODE_READ})))}},{key:"onChangeInputHandler",value:function(e){this.setState({list:Object(b.a)({},e.target.name,e.target.value)})}},{key:"onShowCreateHandler",value:function(e){this.setState({mode:J.MODE_CREATE})}},{key:"onShowUpdateHandler",value:function(e,t){this.setState({mode:J.MODE_UPDATE,list:{name:t.name},id:t._id})}},{key:"onDeleteHandler",value:function(e,t){this.setState({mode:J.MODE_DELETE}),this.props.deleteList(t)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Manage Lists"),this.state.mode===J.MODE_READ&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onShowCreateHandler},"Add List"),r.a.createElement("hr",null),r.a.createElement(z,{data:this.props.data,editHandler:this.onShowUpdateHandler,deleteHandler:this.onDeleteHandler})),this.state.mode!==J.MODE_READ&&r.a.createElement("button",{onClick:function(){return e.setState({mode:J.MODE_READ})}},"Back to All Lists"),this.state.mode===J.MODE_CREATE&&r.a.createElement($,{createList:this.props.createList,list:this.state.list,onChange:this.onChangeInputHandler}),this.state.mode===J.MODE_UPDATE&&r.a.createElement(X,{editList:this.props.editList,list:this.state.list,id:this.state.id,onChange:this.onChangeInputHandler}))}}]),t}(a.Component);var ee=Object(m.b)(function(e){return{data:e.list.data,remote:e.list.remote,error:e.list.error,changes:e.list.changes}},function(e){return{fetchAll:function(){return e(q())},createList:function(t){return e(B(t))},editList:function(t,n){return e(W(t,n))},deleteList:function(t){return e(x(t))}}})(Z),te=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={checked:n.props.checked},n.toggleState=n.toggleState.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"toggleState",value:function(e){var t=!this.state.checked;this.setState({checked:t}),console.log("Status updated"),void 0!==this.props.onClick&&this.props.onClick(this.props.selectedId)}},{key:"render",value:function(){var e=this.state.checked?"far fa-check-square":"far fa-square";return r.a.createElement("span",{onClick:this.toggleState},r.a.createElement("i",{className:e}))}}]),t}(a.Component),ne=function(e){var t=e.data,n=Object.keys(t).map(function(n){var a=t[n];return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement(te,{checked:a.done,selectedId:n,onClick:e.onUpdateStatus})),r.a.createElement("td",null,a.name),r.a.createElement("td",null,a.progress," / ",a.target),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(t){return e.onEditClick(t,n)}},"[Edit]"),r.a.createElement("button",{onClick:function(t){return e.onDeleteClick(t,n)}},"[Delete]")))});return r.a.createElement("div",null,r.a.createElement("h2",null,"List All Tasks"),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("tbody",null,n))))},ae=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"create",value:function(e){return y.post("appdata","todos","kinvey",e)}},{key:"edit",value:function(e,t){return y.update("appdata","todos"+"/".concat(e),"kinvey",t)}},{key:"delete",value:function(e){return y.remove("appdata","todos"+"/".concat(e),"kinvey")}},{key:"getAll",value:function(){return y.get("appdata","todos","kinvey")}},{key:"getById",value:function(e){return y.get("appdata","todos","kinvey")}}]),e}();function re(e){return{type:k.REMOTE_ERROR,message:e}}function oe(e){return function(t){return ae.create(e).then(function(e){t(function(e){return{type:k.TODO_CREATED,data:e}}(e))}).catch(function(e){var n=y.handleError(e);t(re(n))})}}function le(e,t){return function(n){return ae.edit(e,t).then(function(e){n(function(e){return{type:k.TODO_UPDATED,data:e}}(e))}).catch(function(e){var t=y.handleError(e);n(re(t))})}}function ie(e){return function(t){return ae.delete(e).then(function(){t(function(e){return{type:k.TODO_DELETED,id:e}}(e))}).catch(function(e){var n=y.handleError(e);t(re(n))})}}function ce(){return console.log("Fetching todos"),function(e){return ae.getAll().then(function(t){e(function(e){return{type:k.TODOS_FETCHED,data:e}}(t))}).catch(function(t){var n=y.handleError(t);e(re(n))})}}var ue=function(e){var t=r.a.createElement("option",{value:""},"No values");return e.options&&(t=e.options.map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:e.name},e.placeholder),r.a.createElement("select",{className:"form-control",name:e.name,value:e.value,onChange:e.onChange},t))},se=n(84),de=(n(145),n(10)),me=n.n(de),he=function(e){return r.a.createElement("form",null,r.a.createElement("div",null,e.error),r.a.createElement(O,{name:"name",placeholder:"Name",value:e.todo.name,onChange:e.onChange}),r.a.createElement(ue,{name:"type",placeholder:"Type",value:e.todo.type,options:["Single","Times","Minutes","Hours"],onChange:e.onChange}),r.a.createElement(O,{type:"number",name:"target",placeholder:"Target",value:e.todo.target,onChange:e.onChange}),r.a.createElement("br",null),e.allProps&&r.a.createElement("div",null,r.a.createElement(O,{type:"number",name:"Repeat",placeholder:"Repeat",value:e.todo.Repeat,onChange:e.onChange}),r.a.createElement("br",null),"Start Date:",r.a.createElement(se.a,{selected:me()(e.todo.deadline),onChange:function(t){return e.onChange({target:{name:"deadline",value:t.toISOString()}})}})),r.a.createElement(S,{value:e.submitValue,onClick:e.onSubmit}))},Ee=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Create Todo"),r.a.createElement(he,{todo:e.todo,onChange:e.onChange,submitValue:"Add",onSubmit:e.onSubmit,error:e.error}))},pe=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"handleInputChange",value:function(e,t){var n=e.target,a=n.name,r=n.value;""===r||isNaN(r)||(r=Number(r));var o=this.state[t];o[a]=r,this.setState({stateField:o})}}]),e}(),fe=function(){function e(){Object(i.a)(this,e)}return Object(c.a)(e,null,[{key:"changeDeadline",value:function(e,t){var n=new Date(e);return new Date(n.setDate(n.getDate()+t)).toISOString()}},{key:"deadlineIsInPast",value:function(e){var t=new Date;t.setHours(0,0,0,0);var n=new Date(e);return n.setHours(0,0,0,0),n<t}},{key:"deleteFromData",value:function(e,t){e.hasOwnProperty(t)&&(!isNaN(parseInt(t))&&e instanceof Array?e.splice(t,1):delete e[t])}},{key:"storeDataByKey",value:function(e,t){var n={};return e.forEach(function(e){n[e[t]]=e}),n}}]),e}(),ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state=n.getDefaultState(),n.onShowCreateHandler=n.onShowCreateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onChangeInputHandler=n.onChangeInputHandler.bind(Object(v.a)(Object(v.a)(n))),n.onCreateHandler=n.onCreateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onShowUpdateHandler=n.onShowUpdateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onUpdateHandler=n.onUpdateHandler.bind(Object(v.a)(Object(v.a)(n))),n.onDeleteHandler=n.onDeleteHandler.bind(Object(v.a)(Object(v.a)(n))),n.onUpdateStatus=n.onUpdateStatus.bind(Object(v.a)(Object(v.a)(n))),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.remote!==k.TODOS_FETCHED&&this.props.fetchAll()}},{key:"componentWillReceiveProps",value:function(e){if(e.error)R.a.error(e.error);else{if(e.remote===k.TODOS_FETCHED)for(var t in e.data){var n=e.data[t];fe.deadlineIsInPast(n.deadline)&&(n.deadline=me()().toISOString(),n.noncompleted_count++,this.props.editTodo(t,n))}e.remote!==k.TODOS_FETCHED&&this.setState(this.getDefaultState)}}},{key:"onChangeInputHandler",value:function(e){pe.handleInputChange.bind(this)(e,"todo")}},{key:"onShowCreateHandler",value:function(e){this.setState({mode:J.MODE_CREATE})}},{key:"onCreateHandler",value:function(e){e.preventDefault(),this.isValidForm()&&this.props.createTodo(this.state.todo)}},{key:"onShowUpdateHandler",value:function(e,t){this.setState({mode:J.MODE_UPDATE,todo:this.getTodoSelected(t),selectedTodo:t})}},{key:"onUpdateHandler",value:function(e){if(e.preventDefault(),this.isValidForm()){var t=this.state.todo;this.props.editTodo(this.state.selectedTodo,t)}}},{key:"onUpdateStatus",value:function(e){var t=this.getTodoSelected(e);t.done?(t.deadline=fe.changeDeadline(t.deadline,-t.Repeat),t.completed_count--):(t.deadline=fe.changeDeadline(t.deadline,t.Repeat),t.completed_count++),t.done=!t.done,this.props.editTodo(e,t)}},{key:"onDeleteHandler",value:function(e,t){this.props.deleteTodo(t)}},{key:"isValidForm",value:function(){var e=this.state.todo.name,t=this.state.todo.type,n=!0,a="";return""!==e&&""!==t||(a="All input fields are required!",n=!1),a&&this.setState({error:a}),n}},{key:"getDefaultState",value:function(){return{selectedTodo:null,todo:{name:"",type:"Single",list_id:null,target:1,progress:0,done:!1,Repeat:0,completed_count:0,noncompleted_count:0,deadline:me()().toISOString()},error:"",mode:J.MODE_READ}}},{key:"getTodoSelected",value:function(e){var t=this.props.data[e];return{name:t.name,type:t.type,target:t.target,progress:t.progress,done:t.done,Repeat:t.Repeat,completed_count:t.completed_count,noncompleted_count:t.noncompleted_count,deadline:t.deadline}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Manage Todos Page"),this.state.mode===J.MODE_READ&&r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onShowCreateHandler},"Add Todo"),r.a.createElement("hr",null),r.a.createElement(ne,{data:this.props.data,onEditClick:this.onShowUpdateHandler,onUpdate:this.onUpdateHandler,onDeleteClick:this.onDeleteHandler,onUpdateStatus:this.onUpdateStatus})),this.state.mode!==J.MODE_READ&&r.a.createElement("button",{onClick:function(){return e.setState({mode:J.MODE_READ})}},"Back to All"),this.state.mode===J.MODE_CREATE&&r.a.createElement(Ee,{onSubmit:this.onCreateHandler,todo:this.state.todo,onChange:this.onChangeInputHandler,error:this.state.error}),this.state.mode===J.MODE_UPDATE&&r.a.createElement("div",null,r.a.createElement("h2",null,"Edit Todo"),r.a.createElement(he,{allProps:!0,todo:this.state.todo,onChange:this.onChangeInputHandler,submitValue:"Edit",onSubmit:this.onUpdateHandler,error:this.state.error})))}}]),t}(a.Component);var be=Object(m.b)(function(e){return{data:e.todo.data,remote:e.todo.remote,error:e.todo.error,changes:e.todo.changes}},function(e){return{fetchAll:function(){return e(ce())},createTodo:function(t){return e(oe(t))},editTodo:function(t,n){return e(le(t,n))},deleteTodo:function(t){return e(ie(t))}}})(ge),ve=function(e){return r.a.createElement(h.e,null,r.a.createElement(f,{path:"/",exact:!0,component:be}),r.a.createElement(h.d,{path:"/about",component:g}),r.a.createElement(h.d,{path:"/users/login",component:w}),r.a.createElement(h.d,{path:"/users/register",component:F}),r.a.createElement(f,{path:"/users/logout",component:N}),r.a.createElement(f,{path:"/lists",component:ee}),r.a.createElement(f,{path:"/list/add",component:$}),r.a.createElement(f,{path:"/list/edit/:id",component:X}))},Oe=function(e){return r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{exact:!0,className:"nav-link",activeClassName:"active",to:e.to},e.label))},Se=function(e){var t=e.menuItems.map(function(e,t){return r.a.createElement(Oe,{key:t,label:e.label,to:e.to})});return r.a.createElement("ul",{className:"navbar-nav"},t)},De=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.loggedIn?K.MAIN_PRIVATE:K.MAIN_PUBLIC;return r.a.createElement("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement(Se,{menuItems:e})))}}]),t}(a.Component),Ce=function(e){return r.a.createElement("header",null,r.a.createElement(De,{loggedIn:e.loggedIn}))},Te=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright 2018 - Organizer App by Willbe.S"))},ye=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.isAuthenticated()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ce,{loggedIn:this.props.loggedIn}),r.a.createElement("div",{className:"container margin-top-30"},r.a.createElement(ve,null)),r.a.createElement(Te,null))}}]),t}(a.Component);var _e=Object(h.f)(Object(m.b)(function(e){return{loggedIn:e.auth.loggedIn}},function(e){return{isAuthenticated:function(){return e({type:k.AUTH_REQUEST})}}})(ye));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke={auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k.AUTH_REQUEST:return Object.assign({},e,{loggedIn:p.isUserAuthenticated(),error:!1});case k.LOGGIN_SUCCESS:return Object.assign({},e,{loggedIn:!0,error:!1});case k.LOGOUT_SUCCESS:return Object.assign({},e,{loggedIn:!1,error:!1});case k.AUTH_ERROR:return Object.assign({},e,{loggedIn:!1,error:t.message});default:return e}},list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{},remote:null,error:null,changes:0},t=arguments.length>1?arguments[1]:void 0,n=null;switch(e.changes++,t.type){case k.LOGOUT_SUCCESS:return{data:{},remote:null,error:null,changes:0};case k.LIST_CREATED:return(n=Object.assign({},e,{remote:k.LIST_CREATED,error:null})).data[t.data._id]=t.data,n;case k.LIST_UPDATED:return(n=Object.assign({},e,{remote:k.LIST_UPDATED,error:null})).data[t.data._id]=t.data,n;case k.LIST_DELETED:return n=Object.assign({},e,{remote:k.LIST_DELETED,error:null}),fe.deleteFromData(n.data,t.id),n;case k.FETCH_LISTS_SUCCESS:return Object.assign({},e,{data:fe.storeDataByKey(t.data,"_id"),remote:k.FETCH_LISTS_SUCCESS,error:null});case k.REMOTE_ERROR:return Object.assign({},e,{error:t.message});default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:{},remote:null,error:null,changes:0},t=arguments.length>1?arguments[1]:void 0,n=null;switch(e.changes++,t.type){case k.LOGOUT_SUCCESS:return{data:{},remote:null,error:null,changes:0};case k.TODO_CREATED:return(n=Object.assign({},e,{remote:k.TODO_CREATED,error:null})).data[t.data._id]=t.data,n;case k.TODO_UPDATED:return(n=Object.assign({},e,{remote:k.TODO_UPDATED,error:null})).data[t.data._id]=t.data,n;case k.TODO_DELETED:return n=Object.assign({},e,{remote:k.TODO_DELETED,error:null}),fe.deleteFromData(n.data,t.id),n;case k.TODOS_FETCHED:return Object.assign({},e,{data:fe.storeDataByKey(t.data,"_id"),remote:k.TODOS_FETCHED,error:null});case k.REMOTE_ERROR:return Object.assign({},e,{error:t.message});default:return e}}},je=n(32),He=n(83),Ie=n.n(He),Ae=Object(je.d)(Object(je.c)(ke),Object(je.a)(Ie.a));Ae.subscribe(function(){return console.log(Ae.getState())}),l.a.render(r.a.createElement(m.a,{store:Ae},r.a.createElement(h.a,null,r.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,n){e.exports=n(147)},91:function(e,t,n){},94:function(e,t,n){}},[[86,2,1]]]);
//# sourceMappingURL=main.9e9a5067.chunk.js.map