"use strict"
define("project5-ember/adapters/-json-api",["exports","@ember-data/adapter/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/app",["exports","@ember/application","ember-resolver","ember-load-initializers","project5-ember/config/environment"],(function(e,t,r,n,o){function i(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class l extends t.default{constructor(){super(...arguments),i(this,"modulePrefix",o.default.modulePrefix),i(this,"podModulePrefix",o.default.podModulePrefix),i(this,"Resolver",r.default)}}e.default=l,(0,n.default)(l,o.default.modulePrefix)})),define("project5-ember/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/components/general-container",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service"],(function(e,t,r,n,o){var i,l
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const a=(0,r.createTemplateFactory)({id:"alDleTQp",block:'[[[8,[39,0],[[24,0,"cart-link"]],[["@route"],["cart"]],[["default"],[[[[1,"\\n  "],[10,"i"],[14,0,"fa-solid fa-cart-shopping"],[12],[13],[1,"\\n"],[41,[30,0,["shoppingCart","itemList","length"]],[[[1,"  "],[10,1],[14,0,"cart-count d-inline-flex justify-content-center align-items-center"],[12],[1,[30,0,["itemCount"]]],[13],[1,"\\n"]],[]],null]],[]]]]],[1,"\\n"],[10,"main"],[14,0,"container mt-5"],[12],[1,"\\n  "],[18,1,null],[1,"\\n"],[13]],["&default"],false,["link-to","if","yield"]]',moduleName:"project5-ember/components/general-container.hbs",isStrictMode:!1})
let u=(i=class extends n.default{constructor(){var e,t,r,n
super(...arguments),e=this,t="shoppingCart",n=this,(r=l)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}get itemCount(){return this.shoppingCart.itemList.reduce(((e,t)=>Number(e+=t.count)),0)}},c=i.prototype,d="shoppingCart",s=[o.inject],f={configurable:!0,enumerable:!0,writable:!0,initializer:null},m={},Object.keys(f).forEach((function(e){m[e]=f[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=s.slice().reverse().reduce((function(e,t){return t(c,d,e)||e}),m),p&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(p):void 0,m.initializer=void 0),void 0===m.initializer&&(Object.defineProperty(c,d,m),m=null),l=m,i)
var c,d,s,f,p,m
e.default=u,(0,t.setComponentTemplate)(a,u)})),define("project5-ember/components/product",["exports","@ember/component","@ember/template-factory","@glimmer/component"],(function(e,t,r,n){function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const i=(0,r.createTemplateFactory)({id:"uA7ulhEl",block:'[[[8,[39,0],[[24,0,"product"]],[["@route","@model"],["item",[30,1,["id"]]]],[["default"],[[[[1,"\\n  "],[8,[39,1],null,[["@src"],[[30,0,["productImage"]]]],null],[1,"\\n  "],[8,[39,2],null,[["@name","@price"],[[30,1,["name"]],[30,1,["price"]]]],null],[1,"\\n"]],[]]]]]],["@product"],false,["link-to","product/image","product/details"]]',moduleName:"project5-ember/components/product.hbs",isStrictMode:!1})
class l extends n.default{constructor(){super(...arguments),o(this,"productImage",this.args.product.colors[0].image)}}e.default=l,(0,t.setComponentTemplate)(i,l)})),define("project5-ember/components/product/details",["exports","@ember/component","@ember/template-factory","@glimmer/component","@ember/service","@ember/object"],(function(e,t,r,n,o,i){var l,a,u
function c(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const d=(0,r.createTemplateFactory)({id:"wfiOsbRo",block:'[[[10,0],[14,0,"product-details"],[12],[1,"\\n  "],[10,"section"],[12],[1,"\\n"],[1,"    "],[10,"h3"],[12],[1,[30,1]],[13],[1,"\\n    "],[10,0],[14,0,"text-warning"],[12],[1,"\\n      "],[10,"i"],[14,0,"fa-solid fa-star"],[12],[13],[1,"\\n      "],[10,"i"],[14,0,"fa-solid fa-star"],[12],[13],[1,"\\n      "],[10,"i"],[14,0,"fa-solid fa-star"],[12],[13],[1,"\\n      "],[10,"i"],[14,0,"fa-solid fa-star"],[12],[13],[1,"\\n      "],[10,"i"],[14,0,"fa-regular fa-star-half-stroke"],[12],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n"],[1,"  "],[10,"section"],[15,0,[52,[51,[30,2]],"h4"]],[12],[1,"\\n    "],[10,"del"],[14,0,"small text-black-50"],[12],[1,[28,[35,1],[[30,3,["original"]]],null]],[13],[1,"\\n    "],[10,"i"],[14,0,"text-danger fw-bold"],[12],[1,[28,[35,1],[[30,3,["current"]]],null]],[13],[1,"\\n  "],[13],[1,"\\n\\n"],[41,[30,2],[[[1,"    "],[10,0],[14,0,"d-flex justify-content-between align-items-end"],[12],[1,"\\n      "],[10,0],[12],[1,"\\n        "],[10,"h5"],[12],[1,"Color"],[13],[1,"\\n        "],[10,0],[15,0,[29,["product-colors active-",[30,4]]]],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[30,5]],null]],null],null,[[[1,"            "],[11,1],[16,0,[29,["product-color ",[28,[37,5],["color-",[30,6,["color"]]],null]]]],[4,[38,6],["click",[28,[37,7],[[30,7],[30,6,["color"]]],null]],null],[12],[13],[1,"\\n"]],[6]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n      "],[11,"button"],[24,0,"btn btn-info"],[24,4,"button"],[4,[38,6],["click",[30,0,["addToCart"]]],null],[12],[1,"\\n        "],[10,"i"],[14,0,"fa-solid fa-cart-shopping me-1"],[12],[13],[1,"\\n        Add to cart\\n      "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[13]],["@name","@isDetails","@price","@color","@colors","colorInfo","@onChangeColor"],false,["unless","currency","if","each","-track-array","concat","on","fn"]]',moduleName:"project5-ember/components/product/details.hbs",isStrictMode:!1})
let s=(l=(0,o.inject)("shopping-cart"),a=class extends n.default{constructor(){var e,t,r,n
super(...arguments),e=this,t="cart",n=this,(r=u)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}addToCart(){const{name:e,color:t,colors:r,price:n}=this.args
this.cart.addItem({name:e,color:t,image:r.find((e=>e.color===t)).image,price:n.current})}},u=c(a.prototype,"cart",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c(a.prototype,"addToCart",[i.action],Object.getOwnPropertyDescriptor(a.prototype,"addToCart"),a.prototype),a)
e.default=s,(0,t.setComponentTemplate)(d,s)})),define("project5-ember/components/product/image",["exports","@ember/component","@ember/template-factory","@ember/component/template-only"],(function(e,t,r,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const o=(0,r.createTemplateFactory)({id:"hal5hlW7",block:'[[[11,0],[24,0,"product-image"],[4,[38,0],["click",[30,1]],null],[12],[1,"\\n  "],[10,"img"],[15,"src",[30,2]],[14,"alt",""],[12],[13],[1,"\\n"],[13]],["@toggleZoom","@src"],false,["on"]]',moduleName:"project5-ember/components/product/image.hbs",isStrictMode:!1})
var i=(0,t.setComponentTemplate)(o,(0,n.default)())
e.default=i})),define("project5-ember/controllers/cart",["exports","@ember/controller","@ember/service","@ember/object"],(function(e,t,r,n){var o,i,l
function a(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let u=(o=(0,r.inject)("shopping-cart"),i=class extends t.default{constructor(){var e,t,r,n
super(...arguments),e=this,t="cart",n=this,(r=l)&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}get subtotal(){return this.cart.itemList.reduce(((e,t)=>e+t.price*t.count),0)}get tax(){return Number(.065*Number(this.subtotal)).toFixed(2)}get total(){return(Number(this.subtotal)+Number(this.tax)).toFixed(2)}updateItemCount(e,t){const r=t.target.value
e.count=r>=0?r:0}},l=a(i.prototype,"cart",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a(i.prototype,"updateItemCount",[n.action],Object.getOwnPropertyDescriptor(i.prototype,"updateItemCount"),i.prototype),i)
e.default=u})),define("project5-ember/controllers/item",["exports","@ember/controller","@glimmer/tracking","@ember/object"],(function(e,t,r,n){var o,i,l
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let c=(o=class extends t.default{constructor(){super(...arguments),a(this,"color",i,this),a(this,"isZoomed",l,this)}get productImage(){return this.model.colors.find((e=>{let{color:t}=e
return t===this.color})).image}onChangeColor(e){this.color=e}toggleZoom(){this.isZoomed=!this.isZoomed}},i=u(o.prototype,"color",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return this.model.colors[0].color}}),l=u(o.prototype,"isZoomed",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),u(o.prototype,"onChangeColor",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"onChangeColor"),o.prototype),u(o.prototype,"toggleZoom",[n.action],Object.getOwnPropertyDescriptor(o.prototype,"toggleZoom"),o.prototype),o)
e.default=c})),define("project5-ember/data-adapter",["exports","@ember-data/debug"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/data/products",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.products=void 0
e.products=[{id:"1",name:"Raycon Everyday Headphones",description:"With up to 38 hours of battery life, Raycon Everyday is your perfect everyday headphone",price:{original:199.95,current:99.98},features:["Advanced Active Noise Cancellation, helps you tune out the noise.","Awareness mode: Hear the world around you.","IPX5 Water and Splash resistance","3 Sound Profiles for a personalized listening experience.","6 Built in microphones for crystal clear phone calls.","38 Hours of battery life"],colors:[{color:"black",image:"/project5-ember/assets/images/Raycon_Everyday_black-c7f8db0989c4c8f4651ccf85a63d6607.jpg"},{color:"white",image:"/project5-ember/assets/images/Raycon_Everyday_white-67e2d893734d4365697fd7f608353bfd.jpg"},{color:"rosegold",image:"/project5-ember/assets/images/Raycon_Everyday_rosegold-70bc933d956e338cf854f770c2335e78.jpg"}]},{id:"2",name:"Nike Aire Force 1",description:"Debuting in 1982, the AF1 was the first basketball shoe to house Nike Air, revolutionizing the game while rapidly gaining traction around the world.",price:{original:109.95,current:89.98},features:["Full-grain leather in the upper adds a premium look and feel.","Originally designed for performance hoops, Nike Air cushioning adds lightweight, all-day comfort.","The padded, low-cut collar looks sleek and feels great."],colors:[{color:"white",image:"/project5-ember/assets/images/nike-af1-white-3783124e847169fc0dcda716c8dbc9db.png"}]}]})),define("project5-ember/helpers/app-version",["exports","@ember/component/helper","project5-ember/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,r,n){function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const o=r.default.APP.version
let i=t.versionOnly||t.hideSha,l=t.shaOnly||t.hideVersion,a=null
return i&&(t.showExtended&&(a=o.match(n.versionExtendedRegExp)),a||(a=o.match(n.versionRegExp))),l&&(a=o.match(n.shaRegExp)),a?a[0]:o}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o,e.default=void 0
var i=(0,t.helper)(o)
e.default=i})),define("project5-ember/helpers/currency",["exports","@ember/component/helper"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.helper)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const[r]=e,{sign:n="$"}=t,o=Math.floor(r)
let i=Math.floor(100*r%100)
return 1===i.toString().length&&(i="0"+i),`${n}${o}.${i}`}))
e.default=r})),define("project5-ember/helpers/ensure-safe-component",["exports","@embroider/util"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.EnsureSafeComponentHelper}})})),define("project5-ember/helpers/page-title",["exports","ember-page-title/helpers/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("project5-ember/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("project5-ember/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=t.default
e.default=r})),define("project5-ember/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","project5-ember/config/environment"],(function(e,t,r){let n,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r.default.APP&&(n=r.default.APP.name,o=r.default.APP.version)
var i={name:"App Version",initialize:(0,t.default)(n,o)}
e.default=i})),define("project5-ember/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=r})),define("project5-ember/initializers/ember-data-data-adapter",["exports","@ember-data/debug/setup"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/initializers/ember-data",["exports","ember-data","ember-data/setup-container"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:r.default}
e.default=n})),define("project5-ember/instance-initializers/ember-data",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"ember-data",initialize(){}}
e.default=t})),define("project5-ember/router",["exports","@ember/routing/router","project5-ember/config/environment"],(function(e,t,r){function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class o extends t.default{constructor(){super(...arguments),n(this,"location",r.default.locationType),n(this,"rootURL",r.default.rootURL)}}e.default=o,o.map((function(){this.route("item",{path:"/item/:item_id"}),this.route("not-found",{path:"/*path"}),this.route("cart",{path:"shopping-cart"})}))})),define("project5-ember/routes/cart",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{model(){return[]}}e.default=r})),define("project5-ember/routes/index",["exports","@ember/routing/route","project5-ember/data/products"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{model(){return r.products}}e.default=n})),define("project5-ember/routes/item",["exports","@ember/routing/route","project5-ember/data/products"],(function(e,t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class n extends t.default{model(e){const{item_id:t}=e
return r.products.find((e=>{let{id:r}=e
return r===t}))}setupController(e,t){super.setupController(e,t),e.color=t.colors[0].color}}e.default=n})),define("project5-ember/routes/not-found",["exports","@ember/routing/route"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{}e.default=r})),define("project5-ember/serializers/-default",["exports","@ember-data/serializer/json"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/serializers/-json-api",["exports","@ember-data/serializer/json-api"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/serializers/-rest",["exports","@ember-data/serializer/rest"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}))
define("project5-ember/services/-ensure-registered",["exports","@embroider/util/services/ensure-registered"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/services/page-title-list",["exports","ember-page-title/services/page-title-list"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/services/page-title",["exports","ember-page-title/services/page-title"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/services/shopping-cart",["exports","@ember/service","@glimmer/tracking"],(function(e,t,r){var n,o,i,l
function a(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r,n,o){var i={}
return Object.keys(n).forEach((function(e){i[e]=n[e]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let d=(o=c((n=class{constructor(e){a(this,"count",o,this),u(this,"name",void 0),u(this,"color",void 0),u(this,"image",void 0),u(this,"price",void 0),this.count=e.count,this.name=e.name,this.color=e.color,this.image=e.image,this.price=e.price}}).prototype,"count",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n),s=(i=class extends t.default{constructor(){super(...arguments),a(this,"itemList",l,this)}addItem(e){const t=this.itemList.find((t=>{let{name:r,color:n}=t
return r===e.name&&n===e.color}))
t?t.count+=1:this.itemList=[...this.itemList,new d({...e,count:1})]}},l=c(i.prototype,"itemList",[r.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),i)
e.default=s})),define("project5-ember/services/store",["exports","ember-data/store"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("project5-ember/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"Cbq8vGZf",block:'[[[1,[28,[35,0],["Project5 EmberJs"],null]],[1,"\\n\\n\\n\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"project5-ember/templates/application.hbs",isStrictMode:!1})
e.default=r})),define("project5-ember/templates/cart",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"ldQIHHP4",block:'[[[10,"main"],[14,0,"container mt-5"],[12],[1,"\\n  "],[10,"h1"],[12],[1,"Shopping Cart"],[13],[1,"\\n  "],[10,"ol"],[14,0,"breadcrumb bg-light"],[12],[1,"\\n    "],[10,"li"],[14,0,"breadcrumb-item"],[12],[1,"\\n      "],[8,[39,0],null,[["@route"],["index"]],[["default"],[[[[1,"\\n        Home\\n      "]],[]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,"li"],[14,0,"breadcrumb-item"],[12],[1,"Shopping Cart"],[13],[1,"\\n  "],[13],[1,"\\n\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["cart","itemList"]]],null]],null],null,[[[1,"    "],[10,0],[14,0,"cart-item d-flex align-items-center"],[12],[1,"\\n      "],[10,0],[14,0,"cart-item-thumbnail"],[12],[1,"\\n        "],[10,"img"],[15,"src",[30,1,["image"]]],[14,"alt",""],[12],[13],[1,"\\n      "],[13],[1,"\\n      "],[10,0],[14,0,"ms-3"],[12],[1,"\\n        "],[10,"h4"],[12],[1,[30,1,["name"]]],[13],[1,"\\n        "],[10,"i"],[14,0,"fw-bold"],[12],[1,[28,[35,3],[[30,1,["price"]]],null]],[13],[1,"\\n      "],[13],[1,"\\n      "],[11,"input"],[24,0,"ms-auto"],[16,2,[30,1,["count"]]],[24,4,"number"],[4,[38,4],["input",[28,[37,5],[[30,0,["updateItemCount"]],[30,1]],null]],null],[12],[13],[1,"\\n    "],[13],[1,"\\n"]],[1]],null],[1,"\\n  "],[10,"section"],[14,0,"w-50 ms-auto text-end mb-5"],[12],[1,"\\n    "],[10,0],[14,0,"row"],[12],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,"Subtotal"],[13],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,[28,[35,3],[[30,0,["subtotal"]]],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row"],[12],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,"Tax"],[13],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,[28,[35,3],[[30,0,["tax"]]],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row"],[12],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,"Total"],[13],[1,"\\n      "],[10,1],[14,0,"col"],[12],[1,[28,[35,3],[[30,0,["total"]]],null]],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n\\n  "],[10,"button"],[14,0,"btn btn-success float-end"],[14,4,"button"],[12],[1,"\\n    Check out\\n  "],[13],[1,"\\n"],[13]],["item"],false,["link-to","each","-track-array","currency","on","fn"]]',moduleName:"project5-ember/templates/cart.hbs",isStrictMode:!1})
e.default=r})),define("project5-ember/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"qrBOCURw",block:'[[[8,[39,0],null,null,[["default"],[[[[1,"\\n  "],[10,"h1"],[14,0,"title d-inline"],[12],[1,"Day-Lee Look"],[13],[1,"\\n  "],[10,"hr"],[12],[13],[1,"\\n  "],[10,0],[14,0,"d-lg-flex justify-content-center align-items-center"],[12],[1,"\\n"],[42,[28,[37,2],[[28,[37,2],[[30,0,["model"]]],null]],null],null,[[[1,"      "],[8,[39,3],null,[["@product"],[[30,1]]],null],[1,"\\n"]],[1]],null],[1,"  "],[13],[1,"\\n"]],[]]]]]],["product"],false,["general-container","each","-track-array","product"]]',moduleName:"project5-ember/templates/index.hbs",isStrictMode:!1})
e.default=r})),define("project5-ember/templates/item",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"2oKz9Yx5",block:'[[[8,[39,0],null,null,[["default"],[[[[1,"\\n  "],[10,0],[15,0,[29,["product item-details-page ",[52,[30,0,["isZoomed"]],"is-zoomed"]]]],[12],[1,"\\n    "],[8,[39,2],null,[["@src","@toggleZoom"],[[30,0,["productImage"]],[30,0,["toggleZoom"]]]],null],[1,"\\n    "],[8,[39,3],null,[["@isDetails","@name","@price","@colors","@color","@onChangeColor"],[true,[30,0,["model","name"]],[30,0,["model","price"]],[30,0,["model","colors"]],[30,0,["color"]],[30,0,["onChangeColor"]]]],null],[1,"\\n  "],[13],[1,"\\n  "],[10,"h5"],[14,0,"mt-5"],[12],[1,"Features"],[13],[1,"\\n  "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,5],[[28,[37,5],[[30,0,["model","features"]]],null]],null],null,[[[1,"      "],[10,"li"],[12],[1,[30,1]],[13],[1,"\\n"]],[1]],null],[1,"  "],[13],[1,"\\n"]],[]]]]]],["feature"],false,["general-container","if","product/image","product/details","each","-track-array"]]',moduleName:"project5-ember/templates/item.hbs",isStrictMode:!1})
e.default=r})),define("project5-ember/templates/not-found",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r=(0,t.createTemplateFactory)({id:"VuUNf+b5",block:'[[[1,[28,[35,0],["404 Not Found"],null]],[1,"\\n404 not found\\n"],[46,[28,[37,2],null,null],null,null,null]],[],false,["page-title","component","-outlet"]]',moduleName:"project5-ember/templates/not-found.hbs",isStrictMode:!1})
e.default=r})),define("project5-ember/transforms/boolean",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.BooleanTransform}})})),define("project5-ember/transforms/date",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.DateTransform}})})),define("project5-ember/transforms/number",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.NumberTransform}})})),define("project5-ember/transforms/string",["exports","@ember-data/serializer/-private"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.StringTransform}})})),define("project5-ember/config/environment",[],(function(){try{var e="project5-ember/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),r={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("project5-ember/app").default.create({name:"project5-ember",version:"0.0.0+124c5b2f"})
