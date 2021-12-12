(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c43bace"],{"327b":function(e,t,a){},5652:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:e.newCategoryName},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createCategory.apply(null,arguments)},input:function(t){t.target.composing||(e.newCategoryName=t.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.createCategory.apply(null,arguments)}}},[e._v(" "+e._s(e.isProcessing?"資料送出中":"新增")+" ")])])])]),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.categories,(function(t){return a("tr",{key:t.id},[a("th",{attrs:{scope:"row"}},[e._v(" "+e._s(t.id)+" ")]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[e._v(" "+e._s(t.name)+" ")]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.handleCancel(t.id)}}},[e._v(" ✕ ")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleIsEditing(t.id)}}},[e._v(" Edit ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.updateCategory(t)}}},[e._v(" Save ")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteCategory(t.id)}}},[e._v(" Delete ")])])])})),0)])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[e._v("Action")])])])}],i=a("5530"),s=a("1da1"),o=(a("96cf"),a("d81d"),a("b0c0"),a("e04c")),c=a("be6c"),u=a("2fa3"),l={data:function(){return{categories:[],newCategoryName:"",isProcessing:!1}},components:{AdminNav:o["a"]},methods:{fetchCategories:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].categories.get();case 3:a=t.sent,n=a.data,e.categories=n.categories.map((function(e){return Object(i["a"])(Object(i["a"])({},e),{},{isEditing:!1,nameCached:""})})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),u["a"].fire({icon:"error",title:"無法載入餐廳類別清單"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},createCategory:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isProcessing=!0,t.next=4,c["a"].categories.create({name:e.newCategoryName});case 4:if(a=t.sent,n=a.data,"success"===n.status){t.next=8;break}throw new Error(n.message);case 8:e.newCategoryName="",e.fetchCategories(),e.isProcessing=!1,t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0),e.isProcessing=!1,u["a"].fire({icon:"error",title:"無法新增餐廳類別"});case 18:case"end":return t.stop()}}),t,null,[[0,13]])})))()},deleteCategory:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete(e);case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:t.fetchCategories(),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log(a.t0),u["a"].fire({icon:"error",title:"無法刪除該餐廳類別"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},toggleIsEditing:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{isEditing:!t.isEditing,nameCached:t.name}):t}))},updateCategory:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.update(e.id,{name:e.name});case 3:if(n=a.sent,r=n.data,"success"===r.status){a.next=7;break}throw new Error(r.message);case 7:t.toggleIsEditing(e.id),t.fetchCategories(),a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](0),console.log(a.t0),u["a"].fire({icon:"error",title:"無法儲存資料"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})))()},handleCancel:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(i["a"])(Object(i["a"])({},t),{},{name:t.nameCached}):t})),this.toggleIsEditing(e)}},created:function(){this.fetchCategories()}},d=l,g=(a("92cf"),a("2877")),m=Object(g["a"])(d,n,r,!1,null,"2f646f6a",null);t["default"]=m.exports},"92cf":function(e,t,a){"use strict";a("327b")},b0c0:function(e,t,a){var n=a("83ab"),r=a("5e77").EXISTS,i=a("e330"),s=a("9bf2").f,o=Function.prototype,c=i(o.toString),u=/^\s*function ([^ (]*)/,l=i(u.exec),d="name";n&&!r&&s(o,d,{configurable:!0,get:function(){try{return l(u,c(this))[1]}catch(e){return""}}})},be6c:function(e,t,a){"use strict";var n=a("2fa3"),r=function(){return localStorage.getItem("token")};t["a"]={categories:{get:function(){return n["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(r())}})},create:function(e){return n["b"].post("/admin/categories",e,{headers:{Authorization:"Bearer ".concat(r())}})},update:function(e,t){return n["b"].put("/admin/categories/".concat(e),t,{headers:{Authorization:"Bearer ".concat(r())}})},delete:function(e){return n["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})}},restaurants:{create:function(e){return n["b"].post("/admin/restaurants",e,{headers:{Authorization:"Bearer ".concat(r())}})},getRestaurants:function(){return n["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(r())}})},deleteRestaurant:function(e){return n["b"].delete("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})},getSingleRestaurant:function(e){return n["b"].get("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})},updateSingleRestaurant:function(e,t){return n["b"].put("/admin/restaurants/".concat(e),t,{headers:{Authorization:"Bearer ".concat(r())}})}},users:{get:function(){return n["b"].get("/admin/users",{headers:{Authorization:"Bearer ".concat(r())}})},update:function(e,t){return n["b"].put("/admin/users/".concat(e),t,{headers:{Authorization:"Bearer ".concat(r())}})}}}},d81d:function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").map,i=a("1dde"),s=i("map");n({target:"Array",proto:!0,forced:!s},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h1",[e._v("餐廳後台")]),a("router-link",{attrs:{to:{name:"admin-restaurants"}}},[e._v("Restaurants")]),e._v(" | "),a("router-link",{attrs:{to:{name:"admin-categories"}}},[e._v("Categories")]),e._v(" | "),a("router-link",{attrs:{to:{name:"admin-users"}}},[e._v("Users")])],1)},r=[],i=a("2877"),s={},o=Object(i["a"])(s,n,r,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-1c43bace.575a1081.js.map