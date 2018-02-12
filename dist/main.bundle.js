webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_chat_chat_resolver__ = __webpack_require__("../../../../../src/app/routes/chat/chat.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_home_home_component__ = __webpack_require__("../../../../../src/app/routes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_chat_chat_component__ = __webpack_require__("../../../../../src/app/routes/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_watching_watching_component__ = __webpack_require__("../../../../../src/app/components/watching/watching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_service_detail_service_detail_component__ = __webpack_require__("../../../../../src/app/components/service-detail/service-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_buy_sell_buy_sell_component__ = __webpack_require__("../../../../../src/app/components/buy-sell/buy-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_like_like_component__ = __webpack_require__("../../../../../src/app/components/like/like.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_3__routes_home_home_component__["a" /* HomeComponent */] },
    { path: 'watching', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__components_watching_watching_component__["a" /* WatchingComponent */] },
    { path: 'liked', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_10__components_like_like_component__["a" /* LikeComponent */] },
    { path: 'user_profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_6__components_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'service_detail', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_7__components_service_detail_service_detail_component__["a" /* ServiceDetailComponent */] },
    { path: 'buy_sell', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__components_buy_sell_buy_sell_component__["a" /* BuySellComponent */] },
    { path: 'orders', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_9__components_orders_orders_component__["a" /* OrdersComponent */] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_4__routes_chat_chat_component__["a" /* ChatComponent */], resolve: { conversations: __WEBPACK_IMPORTED_MODULE_2__routes_chat_chat_resolver__["a" /* ChatResolver */] } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__routes_chat_chat_resolver__["a" /* ChatResolver */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_gapi__ = __webpack_require__("../../../../ng-gapi/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_home_home_component__ = __webpack_require__("../../../../../src/app/routes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__ = __webpack_require__("../../../../../src/app/components/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_add_service_add_service_component__ = __webpack_require__("../../../../../src/app/components/add-service/add-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_watching_watching_component__ = __webpack_require__("../../../../../src/app/components/watching/watching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_left_menu_left_menu_component__ = __webpack_require__("../../../../../src/app/components/left-menu/left-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_service_detail_service_detail_component__ = __webpack_require__("../../../../../src/app/components/service-detail/service-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_buy_sell_buy_sell_component__ = __webpack_require__("../../../../../src/app/components/buy-sell/buy-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_orders_orders_component__ = __webpack_require__("../../../../../src/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_watching_service__ = __webpack_require__("../../../../../src/app/services/watching.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_like_like_component__ = __webpack_require__("../../../../../src/app/components/like/like.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_buy_service__ = __webpack_require__("../../../../../src/app/services/buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_sell_service__ = __webpack_require__("../../../../../src/app/services/sell.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_conversation_service__ = __webpack_require__("../../../../../src/app/services/conversation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__routes_chat_chat_component__ = __webpack_require__("../../../../../src/app/routes/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var gapiClientConfig = {
    client_id: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].GOOGLE_OAUTH_CLIENT_ID,
    discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
    scope: [].join(" ")
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__routes_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_add_service_add_service_component__["a" /* AddServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_watching_watching_component__["a" /* WatchingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_left_menu_left_menu_component__["a" /* LeftMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_service_detail_service_detail_component__["a" /* ServiceDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_buy_sell_buy_sell_component__["a" /* BuySellComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_like_like_component__["a" /* LikeComponent */],
                __WEBPACK_IMPORTED_MODULE_32__routes_chat_chat_component__["a" /* ChatComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng_gapi__["a" /* GoogleApiModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_6_ng_gapi__["c" /* NG_GAPI_CONFIG */],
                    useValue: gapiClientConfig
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__services_service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_25__services_watching_service__["a" /* WatchingService */], __WEBPACK_IMPORTED_MODULE_26__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_28__services_like_service__["a" /* LikeService */], __WEBPACK_IMPORTED_MODULE_29__services_buy_service__["a" /* BuyService */], __WEBPACK_IMPORTED_MODULE_30__services_sell_service__["a" /* SellService */],
                __WEBPACK_IMPORTED_MODULE_31__services_conversation_service__["a" /* ConversationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/add-service/add-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-service/add-service.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modal_addService\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content text-center padding-0 width-550-px margin-left-right-auto color-bg-white\">\n            <div class=\"col-xs-12 col-md-12 padding-20\" style=\"background-color: #F0F0F3;\">\n                <p class=\"text-uppercase text-left margin-0 font-weight-600 font-em-11\">Add service</p>\n            </div>\n            <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white\">\n                <div class=\"col-xs-12 col-md-12 padding-20 padding-bottom-10\">\n                    <textarea [formControl]=\"form.controls['description']\" class=\"color-gray width-90-p border-none font-em-12 padding-0\" rows=\"2\" type=\"text\" placeholder=\"Enter Service Description\">\n                    Enter Service Description </textarea>\n                    <img src=\"assets/images/icons/Symbol1@2x.png\" class=\"pull-right\" width=\"32px\" height=\"32px\" alt=\"\">\n                </div>\n                <div class=\"col-xs-12 col-md-12 padding-20 padding-top-0\">\n                    <div class=\"col-md-4 col-xs-4 padding-15 color-bg-white\" style=\"height:160px; display:flex;\">\n                        <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-color:#F0F0F3; display:flex; justify-content:center; align-content:center; align-items:center;\">\n                            <img src=\"assets/images/icons/path.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4 padding-15 color-bg-white\" style=\"height:160px; display:flex;\">\n                        <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-color:#F0F0F3; display:flex; justify-content:center; align-content:center; align-items:center;\">\n                            <img src=\"assets/images/icons/path.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-xs-4 padding-15 color-bg-white\" style=\"height:160px; display:flex;\">\n                        <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-color:#F0F0F3; display:flex; justify-content:center; align-content:center; align-items:center;\">\n                            <img src=\"assets/images/icons/path.png\" alt=\"\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-12 col-md-12 padding-20 padding-top-0\">\n                    <select (change)=\"selectValue($event)\" name=\"\" id=\"\" class=\"form-control color-darkgray\">\n                        <option value=\"\">Choose a Service Category</option>\n                        <option value=\"Home\" class=\"padding-top-15\"> Home </option>\n                        <option value=\"Kitchen Repair\">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen Repair</option>\n                        <option value=\"Furniiture\">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>\n                        <option value=\"Auto\">Auto</option>\n                        <option value=\"Full Body\">&nbsp;&nbsp;&nbsp;&nbsp;Full Body</option>\n                    </select>\n                    <i class=\"fa fa-caret-down pull-right color-gray padding-4 padding-right-10 color-bg-white\" style=\"position:absolute; right:24px; top: 4px; font-size: 18px;\"></i>\n                </div>\n                <div class=\"col-xs-12 col-md-12 padding-20 padding-top-0\">\n                    <li class=\"dropdown\" style=\"position:relative;\">\n                        <a class=\"form-control-custom text-left dropdown-toggle padding-0 padding-top-5 padding-left-10\" data-toggle=\"dropdown\" role=\"button\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\" style=\"border-bottom-right-radius:0px; border-bottom-left-radius:0px;\">Add Pricing</a>\n                        <img src=\"assets/images/icons/group.png\" alt=\"\" class=\"pull-right\" style=\"position:absolute; right:12px; top: 8px; \">\n                        <div id=\"addService_pricing\" class=\"dropdown-menu div-white-box-shadow color-bg-white padding-0\" style=\"position:absolute; border:1px solid #e4e4e4; border-radius:5px; width:100%;\">\n                            <div class=\"col-xs-12 col-md-12 padding-15\">\n                                <div class=\"col-md-3 col-md-12 padding-left-0\">\n                                    <p class=\"color-darkgray\">Price</p>\n                                    <input type=\"number\" [formControl]=\"form.controls['pricing']['controls']['price']\" class=\"form-control text-center font-weight-600 color-text-black\" />\n                                </div>\n                                <div class=\"col-md-9 col-md-12 padding-0\">\n                                    <p class=\"color-darkgray\">Time to complete work</p>\n                                    <div id=\"custom_inputs\" class=\"col-xs-12 col-md-12 padding-0\">\n                                        <div class=\"col-xs-4 col-md-4 padding-0 display-inlineBlock\" style=\"position:relative;\">\n                                            <input type=\"number\" (change)=\"setTime($event, 'weeks')\" min=\"0\" max=\"48\" value=\"48\" class=\"form-control\" style=\"border-top-left-radius:3px; border-bottom-left-radius:3px;\">\n                                            <p class=\"p_absolute\">Weeks</p>\n                                        </div>\n                                        <div class=\"col-xs-4 col-md-4 padding-0 display-inlineBlock\" style=\"position:relative;\">\n                                            <input type=\"number\" (change)=\"setTime($event, 'days')\" min=\"0\" max=\"365\" value=\"365\" class=\"form-control\" style=\"border-left:0px;\">\n                                            <p class=\"p_absolute\">Days</p>\n                                        </div>\n                                        <div class=\"col-xs-4 col-md-4 padding-0 display-inlineBlock\" style=\"position:relative;\">\n                                            <input type=\"number\" (change)=\"setTime($event, 'hours')\" min=\"0\" max=\"1000\" value=\"1000\" class=\"form-control\" style=\"border-left:0px; border-bottom-right-radius:3px; border-top-right-radius:3px;\">\n                                            <p class=\"p_absolute\">Hours</p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-md-12 padding-15\">\n                                <p class=\"color-darkgray\">Description</p>\n                                <textarea [formControl]=\"form.controls['pricing']['controls']['description']\" rows=\"2\" class=\"form-control color-gray padding-0 border-0 boxshadow-none\">Write price description</textarea>\n                                <a id=\"li_addService\" onclick=\"btn_menu_f(this)\" class=\"text-uppercase margin-top-40 bg-blue color-text-white font-px-14 font-weight-600 padding-6 padding-left-20 padding-right-20 pull-right\"\n                                    style=\"border-radius:15px;\">add price</a>\n                                <a id=\"li_cancel\" onclick=\"btn_menu_f(this)\" data-toggle=\"modal\" data-target=\"#\" class=\"pull-right margin-right-20 margin-top-45 font-px-14 font-weight-600 color-darkgray text-uppercase\">cancel</a>\n                            </div>\n                        </div>\n                        <div id=\"addService_pricing_done\" class=\"div-white-box-shadow padding-10 hidden margin-bottom-10 boxshadow-none text-left\"\n                            style=\"border:1px solid #e4e4e4; border-radius:5px; width:100%; background-color: #F0F0F3; border-top-right-radius: 0px; border-top-left-radius: 0px;\">\n                            <p class=\"display-inlineBlock color-gray margin-bottom-0 text-left\">$10/hour for home service</p>\n                            <p id=\"li_editService\" onclick=\"btn_menu_f(this)\" class=\"text-uppercase font-em-08 padding-2 padding-left-6 padding-right-6 color-bg-white color-gray pull-right display-inlineBlock  margin-bottom-0\">Edit</p>\n                        </div>\n                    </li>\n                </div>\n                <div class=\"col-xs-12 col-md-12 padding-20 padding-top-0\">\n                    <li class=\"dropdown\" style=\"position:relative;\">\n                        <a class=\"form-control-custom text-left dropdown-toggle padding-0 padding-top-5 padding-left-10\" data-toggle=\"dropdown\" role=\"button\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">Choose Delivery Method</a>\n                        <i class=\"fa fa-caret-down pull-right color-gray\" style=\"position:absolute; right:16px; top: 8px; font-size: 18px;\"></i>\n                        <div id=\"addService_deliveryMethod\" class=\"dropdown-menu div-white-box-shadow color-bg-white padding-0\" style=\"position:absolute; border:1px solid #e4e4e4; border-radius:5px; width:100%;\">\n                            <ul class=\"padding-20 padding-top-15\">\n                                <li>\n                                    <p class=\"display-inlineBlock margin-top-5 color-gray\">Online</p>\n                                    <input type=\"checkbox\" [formControl]=\"form.controls['fulfillmentMethod']['controls']['online']\" class=\"form-control color-text-white bg-blue display-inlineBlock pull-right\" style=\"width:14px; height:14px; vertical-align:middle;\">\n                                </li>\n                                <li>\n                                    <p class=\"display-inlineBlock margin-top-5 color-gray\">Shipment</p>\n                                    <input type=\"checkbox\" [formControl]=\"form.controls['fulfillmentMethod']['controls']['shipment']\" class=\"form-control color-text-white bg-blue display-inlineBlock pull-right\" style=\"width:14px; height:14px; vertical-align:middle;\">\n                                </li>\n                                <li>\n                                    <p class=\"display-inlineBlock margin-top-5 color-gray\">Local-at your store locations</p>\n                                    <input type=\"checkbox\" [formControl]=\"form.controls['fulfillmentMethod']['controls']['store']\" class=\"form-control color-text-white bg-blue display-inlineBlock pull-right\" style=\"width:14px; height:14px; vertical-align:middle;\">\n                                </li>\n                                <li>\n                                    <p class=\"display-inlineBlock margin-top-5 color-gray\">Local-anywhere in the city you service</p>\n                                    <input type=\"checkbox\" [formControl]=\"form.controls['fulfillmentMethod']['controls']['local']\" class=\"form-control color-text-white bg-blue display-inlineBlock pull-right\" style=\"width:14px; height:14px; vertical-align:middle;\">\n                                </li>\n                                <li class=\"margin-top-4 margin-bottom-8\">\n                                    <div class=\"display-inlineBlock\" style=\"position:relative;\">\n                                        <input type=\"number\" min=\"15\" max=\"9999\" value=\"1500\" style=\"border-radius:15px; border: 1px solid #ddd; height: 30px; width: 120px; padding-right: 10px;\"\n                                            class=\"boxshadow-none color-text-black font-weight-600 display-inlineBlock margin-right-10 padding-left-10 font-em-11\">\n                                        <p class=\"color-text-black font-weight-600 display-inlineBlock\" style=\"position:absolute; left:50px; top:5px;\">miles</p>\n                                    </div>\n                                    <p class=\"color-gray display-inlineBlock\">within your current location</p>\n                                </li>\n                                <li>\n                                    <p class=\"color-gray font-em-09\">Your local service will not ne posted until you have passed background check</p>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-md-12 padding-15 padding-right-30\" style=\"border-top: 1px solid #e9e9e9; background-color: #F0F0F3;\">\n                <li id=\"li_addService\" onclick=\"\" class=\"display-inlineBlock pull-right\">\n                    <a (click)=\"onSubmit()\" class=\"text-uppercase margin-top-40 bg-blue color-text-white font-px-14 font-weight-600 padding-6 padding-left-20 padding-right-20\"\n                        style=\"border-radius:15px;\">Add Service</a>\n                </li>\n                <li onclick=\"btn_menu_f(this);\" id=\"li_cancel\" class=\"display-inlineBlock pull-right margin-right-20\">\n                    <a class=\"margin-top-40 font-px-14 font-weight-600 color-darkgray text-uppercase\">Cancel</a>\n                </li>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/add-service/add-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_add_service_info__ = __webpack_require__("../../../../../src/app/models/add-service-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddServiceComponent = (function () {
    function AddServiceComponent(serviceService, _formBuilder) {
        this.serviceService = serviceService;
        this._formBuilder = _formBuilder;
    }
    AddServiceComponent.prototype.ngOnInit = function () {
        var _serviceInfo = new __WEBPACK_IMPORTED_MODULE_2__models_add_service_info__["a" /* AddServiceInfo */]();
        this.form = this._formBuilder.group({
            category: [_serviceInfo.category, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            description: [_serviceInfo.description, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            fulfillmentMethod: this._formBuilder.group(_serviceInfo.fulfillmentMethod),
            location: this._formBuilder.array(_serviceInfo.location),
            media: this._formBuilder.array(_serviceInfo.media),
            pricing: this._formBuilder.group(_serviceInfo.pricing)
        });
    };
    AddServiceComponent.prototype.selectValue = function (event) {
        this.form.controls['category'].setValue({
            id: event.srcElement.selectedIndex,
            name: event.srcElement.value
        });
    };
    AddServiceComponent.prototype.setTime = function (event, type) {
        this.form.controls['pricing']['controls']['time'].setValue(event.srcElement.value);
        this.form.controls['pricing']['controls']['timeUnitOfMeasure'].setValue(type);
    };
    AddServiceComponent.prototype.onSubmit = function () {
        this.serviceService.insertService(this.form.value).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    AddServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "add-service",
            template: __webpack_require__("../../../../../src/app/components/add-service/add-service.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-service/add-service.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_service_service__["a" /* ServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AddServiceComponent);
    return AddServiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/buy-sell/buy-sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buy-sell/buy-sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index_main\" class=\"col-xs-12 col-md-12 padding-0 padding-bottom-60\" style=\"background-color:rgb(249,249,249)\">\n    <left-menu></left-menu>\n\n    <!-- index_sidepanel-->\n\n    <div id=\"index_contentarea\" class=\"col-md-9 col-sm-7 col-xs-12 margin-top-30 padding-bottom-200\">\n\n        <div id=\"buy_sell\" class=\"col-xs-12 col-md-7 padding-0\">\n\n            <div *ngFor=\"let item of sellers\" class=\"col-md-12 col-sm-12 sub_div col-xs-12 div-white-box-shadow margin-bottom-30 padding-0 \">\n\n                <div class=\"col-md-12 col-xs-12 padding-30 padding-bottom-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                    <div class=\"col-md-3 col-xs-3 sub_div_image\">\n                        <img src=\"{{item.seller.profilePic}}\" alt=\"\" width=\"110px\" height=\"110px\">\n                    </div>\n\n                    <div class=\"col-md-9 col-xs-9 padding-right-0\">\n                        <h4 class=\"margin-top-0 color-text-black font-weight-600\">{{item.service.description}}</h4>\n                        <p class=\"font-em-09 margin-bottom-5\">\n                            $50\n                            <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for 1 hour\n                        </p>\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            <span class=\"glyphicon glyphicon-map-marker\"></span> {{item.order.serviceLocation.city}}, {{item.order.serviceLocation.country}}, 22 km\n                        </p>\n\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            By {{item.seller.firstName}} {{item.seller.lastName}}\n                        </p>\n\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            Paid on {{item.order.orderMilestoneStatuses.paidDate | date}}\n                        </p>\n\n                    </div>\n\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description padding-15 padding-left-30\" style=\"background-color:#F6F7F9;\">\n\n                    <div class=\"sub_div_footer col-md-4 col-sm-4 col-xs-5 padding-0\">\n                        <h4 class=\"color-gray display-inlineBlock\">Pending Delivery</h4>\n                    </div>\n\n                    <div class=\"col-md-8 col-sm-8 col-xs-7 padding-top-10\">\n                        <div class=\"li_circle\"></div>\n                        <div class=\"li_circle\"></div>\n                        <div class=\"li_circle\"></div>\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n\n\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/buy-sell/buy-sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuySellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_buy_service__ = __webpack_require__("../../../../../src/app/services/buy.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuySellComponent = (function () {
    function BuySellComponent(buyService, _sanitizer) {
        this.buyService = buyService;
        this._sanitizer = _sanitizer;
        this.sellers = [];
    }
    BuySellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buyService.getSellers().subscribe(function (res) {
            if (res.docs.length > 0)
                _this.sellers = res.docs;
        }, function (err) {
        });
    };
    BuySellComponent.prototype.backgroundImage = function (fileName) {
        if (fileName)
            return this._sanitizer.bypassSecurityTrustStyle("url('" + fileName + "')");
        else
            return '';
    };
    BuySellComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-buy-sell",
            template: __webpack_require__("../../../../../src/app/components/buy-sell/buy-sell.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/buy-sell/buy-sell.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_buy_service__["a" /* BuyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], BuySellComponent);
    return BuySellComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modal_forgotpassword\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content text-center padding-0 width-400-px margin-left-right-auto color-bg-white\">\n      <form class=\"col-xs-12 col-md-12 padding-50 padding-bottom-30 color-bg-white\" [formGroup]=\"form\">\n        <img src=\"assets/images/logo.png\" alt=\"\">\n        <h3 class=\"font-weight-600 margin-bottom-20\">Reset Password</h3>\n        <p class=\"font-em-09 margin-bottom-20\">Please enter you email address and we'll <br/> send you a link to reset your password.</p>\n        <input type=\"email\" formControlName=\"email\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-100-p margin-bottom-20\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Enter email address\">\n        <button type=\"submit\" (click)=\"onClickSubmit(form.get('email').value);\" class=\"form-control bg-blue color-text-white font-weight-600 font-px-16 height-40-px padding-top-7 border-none width-100-p\" [disabled]=\"loading || !form.valid\">Submit</button>\n      </form>\n      <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white padding-top-15 padding-bottom-15\" style=\"border-top: 1px solid #e9e9e9;\">\n        <p style=\"cursor:pointer;\" data-toggle=\"modal\" data-target=\"#modal_signin\" data-dismiss=\"modal\" class=\"color-gray margin-top-5\">Back to <span class=\"color-blue\">Sign In</span></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.form = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]]
        });
    };
    ForgotPasswordComponent.prototype.onClickSubmit = function (email) {
        this.authService.forgotPassword(email);
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n    <nav id=\"navbar1\" class=\"navbar navbar-default bg-transparent border-none padding-left-15 margin-bottom-0\" role=\"navigation\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      </button>\n            <a id=\"navbar1_brand\" onclick=\"\" class=\"navbar-brand padding-top-10\" href=\"#\">\n                <img src=\"assets/images/logo2.png\" style=\"width:123px; max-height:40px;\" alt=\"\">\n            </a>\n        </div>\n        <form class=\"navbar-form navbar-left\" role=\"search\" [formGroup]=\"searchForm\">\n            <div class=\"form-group margin-right-20 dropdown\">\n                <span style=\"position:relative;\">\n          <i class=\"fa fa-search padding-12 padding-left-15 color-mediumgray\" style=\"position:absolute;\"></i>\n          <input (click)=\"onClickSearch();\" (blur)=\"onBlurSearch();\" (keyup)=\"handleKeyupSearch($event);\" id=\"top_menu_searchbox\" type=\"text\" class=\"dropdown-toggle form-control bg-silver padding-left-40 height-40-px margin-bottom-0\" placeholder=\"Search services\" style=\"width:514px; box-shadow:none; border:1px solid #e4e4e4; border-bottom:0px; border-top:0px;\">\n          <span id=\"icon_cross\" onclick=\"close_searchSuggestionsTyping();\" style=\"position:absolute; right: 190px; top: 0px; width:15px; height:15px;\" class=\"hidden\">\n             <img src=\"assets/images/icons/close_small.png\" alt=\"\" style=\"position:absolute; right: 0px; top: 2px;\">\n          </span>\n                <span (click)=\"onClickLocation();\" (blur)=\"onBlurLocation();\" tabindex=\"-1\" id=\"top_menu_searchbox\" class=\"color-gray\" style=\"position:absolute; right: 60px; top: 0px; outline: none;\"> | <i class=\"fa fa-map-marker padding-left-40 padding-right-5 color-gray\"></i>Location</span>\n                </span>\n                <div [hidden]=\"!showSearchSuggestions\" id=\"search_suggestions\" class=\"dropdown-content div-white-box-shadow color-bg-white padding-15 padding-left-40\" style=\"position: absolute; border-width: 0px 1px 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-right-color: rgb(228, 228, 228); border-bottom-color: rgb(228, 228, 228); border-left-color: rgb(228, 228, 228); border-image: initial; border-radius: 0px 0px 5px 5px; width: 514px; z-index: 999; border-top-style: initial; border-top-color: initial; margin-top: -2px;\">\n                    <ul class=\"padding-0\">\n                        <li class=\"padding-top-3 padding-bottom-3 color-gray font-weight-600\">Popular Categories</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Photographer</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Entertainer</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Wedding Planner</li>\n                        <li class=\"padding-top-3 padding-bottom-3 font-em-09 color-blue\">See all</li>\n                    </ul>\n                    <ul class=\"padding-0 margin-top-10\">\n                        <li class=\"padding-top-3 padding-bottom-3 color-gray font-weight-600\">Recent Searches</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Dog Walker</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">DJ Artist</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">House Painters</li>\n                        <li class=\"padding-top-3 padding-bottom-3 font-em-09 color-blue\">See all</li>\n                    </ul>\n                </div>\n                <div [hidden]=\"!showSearchTyping\" id=\"search_suggestions_typing\" class=\"dropdown-content div-white-box-shadow color-bg-white padding-15 padding-left-40\" style=\"position: absolute; border-width: 0px 1px 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-right-color: rgb(228, 228, 228); border-bottom-color: rgb(228, 228, 228); border-left-color: rgb(228, 228, 228); border-image: initial; border-radius: 0px 0px 5px 5px; width: 514px; z-index: 999; border-top-style: initial; border-top-color: initial; margin-top: -2px;\">\n                    <ul class=\"padding-0\">\n                        <li class=\"padding-top-3 padding-bottom-3 color-gray font-weight-600\">Suggestions</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Dog Walk</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Dog Care</li>\n                        <li class=\"padding-top-3 padding-bottom-3 color-darkgray\">Dog Cares</li>\n                        <li class=\"padding-top-3 padding-bottom-3 font-em-09 color-blue\">See all</li>\n                    </ul>\n                </div>\n                <div [hidden]=\"!showSearchLocations\" id=\"search_suggestions_2\" class=\"dropdown-content-2 div-white-box-shadow color-bg-white padding-15 padding-left-25\" style=\"border-width: 0px 1px 1px; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-right-color: rgb(228, 228, 228); border-bottom-color: rgb(228, 228, 228); border-left-color: rgb(228, 228, 228); border-image: initial; border-radius: 0px 0px 5px 5px; width: 180px; z-index: 999; border-top-style: initial; border-top-color: initial; margin-top: -2px; position: absolute; right: 0px; top: 41px;\">\n                    <ul class=\"padding-0\">\n                        <li class=\"text-left padding-top-3 padding-bottom-3 color-blue font-weight-600 font-px-12\">\n                            <img src=\"assets/images/icons/location_icon.png\" style=\"margin-top:-2px\" alt=\"\"> Current Location\n                        </li>\n                        <li class=\"text-left padding-top-3 padding-bottom-3 margin-top-5 color-gray font-em-09\">Chicago, IL</li>\n                        <li class=\"text-left padding-top-3 padding-bottom-3 margin-top-5 color-gray font-em-09\">Chicagoland, IL</li>\n                        <li class=\"text-left padding-top-3 padding-bottom-3 margin-top-5 color-gray font-em-09\">Chicago Union Station</li>\n                    </ul>\n                </div>\n            </div>\n        </form>\n        <div class=\"collapse navbar-collapse padding-top-8\" id=\"bs-example-navbar-collapse-1\">\n            <li id=\"li_explore\" onclick=\"\" class=\"display-inlineBlock padding-top-12\">\n                <a data-toggle=\"modal\" data-target=\"#\" class=\"btn_menu margin-top-40\">Explore</a>\n            </li>\n            <div class=\"navbar-right margin-right-15\">\n                <ul [hidden]=\"isLoggedIn\" id=\"before_signin\" class=\"nav navbar-nav margin-right-20\">\n                    <li>\n                        <a data-toggle=\"modal\" data-target=\"#modal_addService\" class=\"color-gray font-weight-600 font-em-11 padding-top-10\">\n                            <img src=\"assets/images/icons/Symbol1.png\" width=\"32px\" height=\"32px\" style=\"border-radius:50%;\" alt=\"\">\n                        </a>\n                    </li>\n                    <li><a data-toggle=\"modal\" data-target=\"#modal_signup\" class=\"color-gray font-weight-600 font-em-11 padding-top-10\">Sign Up</a></li>\n                    <li><a data-toggle=\"modal\" data-target=\"#modal_signin\" class=\"color-gray font-weight-600 font-em-11 padding-top-10\">Sign In</a></li>\n                </ul>\n                <ul [hidden]=\"!isLoggedIn\" id=\"after_signin\" class=\"nav navbar-nav margin-right-20\">\n\n                    <li id=\"li_updates\" onclick=\"btn_menu_f(this);\">\n                        <a data-toggle=\"modal\" data-target=\"#\" class=\"btn_menu margin-top-8\">Updates</a>\n                        <span class=\"badge theme_badge\">2</span>\n                    </li>\n\n                    <li id=\"li_msg_notf\" class=\"dropdown\">\n                        <a class=\"dropdown-toggle color-gray font-weight-600 font-em-11 padding-top-10\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <img src=\"assets/images/icons/envelope.png\" alt=\"\">\n                            <span class=\"badge theme_badge\">3</span>\n                        </a>\n\n                        <div id=\"menu_notification_conversation\" class=\"dropdown-menu div-white-box-shadow color-bg-white padding-0\" style=\"position:absolute; border:1px solid #e4e4e4; border-radius:5px; width:400px;\">\n\n                            <div class=\"col-xs-12 col-md-12 padding-0 padding-top-15\">\n\n                                <div class=\"col-xs-12 col-md-12 padding-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                    <div id=\"menu_messages\" (click)=\"$event.stopPropagation(); toggleMN = false;\" class=\"col-xs-6 col-md-6 dropdown-menu-item\" [ngClass]=\"!toggleMN ? 'active' : ''\" style=\"border-right:1px solid #e4e4e4;\">\n                                        <p class=\"color-darkgray text-center\">Messages (3)</p>\n                                    </div>\n\n                                    <div id=\"menu_notifications\" (click)=\"$event.stopPropagation(); toggleMN = true;\" class=\"col-xs-6 col-md-6 dropdown-menu-item\" [ngClass]=\"toggleMN ? 'active' : ''\">\n                                        <p class=\"color-darkgray text-center\">Notifications (6)</p>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"content_area\">\n\n                                    <div [hidden]=\"toggleMN\" id=\"menu_messages\" class=\"col-xs-12 col-md-12 padding-0\">\n\n                                        <div class=\"col-xs-12 col-md-12\">\n\n                                            <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-blue font-weight-600 margin-bottom-0\">Peter Holms (2)</p>\n                                                    <p class=\"color-text-black margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n                                                    <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0\">\n                                                    <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div id=\"li_openChat\" onclick=\"btn_menu_f(this)\" class=\"col-xs-12 col-md-12 padding-top-15 padding-bottom-15\">\n\n                                            <p class=\"color-darkgray font-em-09 margin-0\">View in message center</p>\n\n                                        </div>\n\n                                    </div>\n\n                                    <div [hidden]=\"!toggleMN\" id=\"menu_notifications\" class=\"col-xs-12 col-md-12 padding-0\">\n\n                                        <div class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-blue font-weight-600 margin-bottom-0\">Peter Holms\n                                                        <span class=\"color-gray font-weight-500\">started following you</span>\n                                                    </p>\n\n                                                    <p class=\"color-gray margin-top-5 margin-bottom-0 font-em-09\">3 mins ago</p>\n\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-right-0\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms\n                                                        <span class=\"color-gray\">started following you</span>\n                                                    </p>\n\n                                                    <p class=\"color-gray margin-top-5 margin-bottom-0 font-em-09\">Sep 25</p>\n\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-right-0\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms\n                                                        <span class=\"color-gray\">started following you</span>\n                                                    </p>\n\n                                                    <p class=\"color-gray margin-top-5 margin-bottom-0 font-em-09\">2 days ago</p>\n\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-right-0\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"col-xs-12 col-md-12\">\n\n                                            <div class=\"col-xs-12 col-md-12 padding-15 padding-left-0 padding-right-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                                                <div class=\"col-md-2 col-xs-2 padding-0 padding-top-3 text-left\">\n                                                    <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n                                                    <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n                                                </div>\n\n                                                <div class=\"col-md-8 col-xs-8 padding-0\">\n                                                    <p class=\"color-darkgray margin-bottom-0\">Peter Holms\n                                                        <span class=\"color-gray\"> commented your Service</span> Dog Walking\n                                                    </p>\n\n                                                    <p class=\"color-gray margin-top-5 margin-bottom-0 font-em-09\">3 weeks</p>\n\n                                                </div>\n\n                                                <div class=\"col-md-2 col-xs-2 padding-right-0\">\n                                                    <img src=\"assets/images/user_profile_banner@2x.png\" height=\"40px\" class=\"width-100-p\" style=\"border-radius: 3px;\" alt=\"\">\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n\n                                        <div class=\"col-xs-12 col-md-12 padding-top-15 padding-bottom-15\">\n                                            <p class=\"color-darkgray font-em-09 margin-0\">Older notifications</p>\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </li>\n\n                    <li>\n                        <a data-toggle=\"modal\" data-target=\"#modal_addService\" class=\"color-gray font-weight-600 font-em-11 padding-top-5\">\n                            <img src=\"assets/images/icons/Symbol1.png\" width=\"32px\" height=\"32px\" style=\"border-radius:50%;\" alt=\"\">\n                            <!-- <span class=\"badge theme_badge\">6</span>-->\n                        </a>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle padding-0 padding-top-5 padding-left-10\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <img src=\"assets/images/icons/Symbol3.png\" alt=\"\">\n                            <span class=\"badge theme_badge\" style=\"right:-3px\">4</span>\n                        </a>\n\n                        <div id=\"profile_menu_div\" class=\"dropdown-menu div-white-box-shadow color-bg-white padding-0\" style=\"position:absolute; border:1px solid #e4e4e4; border-radius:5px; width:500px;\">\n\n                            <div class=\"col-xs-12 col-md-12 padding-20 padding-top-15 padding-bottom-15\">\n\n                                <div id=\"li_myprofile\" onclick=\"btn_menu_f(this);\" class=\"col-xs-6 col-md-5 padding-0\">\n\n                                    <div class=\"col-md-3 col-xs-4 padding-0\">\n                                        <img src=\"assets/images/icons/post_profile.png\" class=\"border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n                                    </div>\n\n                                    <div class=\"col-md-9 col-xs-8 margin-top-2 padding-left-10 cursor-pointer\">\n                                        <p class=\"color-text-black font-weight-300 font-px-14 display-inlineBlock margin-bottom-0 margin-right-5 cursor-pointer\">Peter Holms</p>\n                                        <p class=\"color-gray font-weight-300 font-px-12 display-inlineBlock margin-bottom-0 margin-top-0 cursor-pointer\">View Profile</p>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-xs-6 col-md-7 padding-0\">\n\n                                    <button id=\"menu_logout\" onclick=\"btn_menu_f(this);\" type=\"submit\" class=\"text-right pull-right form-control color-blue font-weight-600 font-px-16 height-40-px padding-top-10 border-none boxshadow-none\">Logout</button>\n\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-12 padding-0\" style=\"border-top:1px solid #e4e4e4; border-bottom:1px solid #e4e4e4;\">\n\n                                <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                                    <div class=\"col-xs-12 col-md-6 padding-left-30 padding-top-20\" style=\"border-right:1px solid #e4e4e4;\">\n\n                                        <p class=\"color-darkgray font-px-14 text-uppercase\">Buy</p>\n\n                                        <ul class=\"padding-0\">\n\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Orders (10 Active)</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Custom Offers</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Live Offer Request</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Watching</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Likes</a></li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <div id=\"profileMenu_userSetting\" class=\"col-xs-12 col-md-6 padding-left-30 padding-top-20\">\n\n                                        <p class=\"color-darkgray font-px-14 text-uppercase\">Users setiings</p>\n\n                                        <ul class=\"padding-0\">\n\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Edit Profile</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Edit User Settings</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Notification Settings</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Payment Methods</a></li>\n\n                                        </ul>\n\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                                    <div class=\"col-xs-12 col-md-6 padding-left-30 padding-top-20\" style=\"border-right:1px solid #e4e4e4;\">\n\n                                        <p class=\"color-darkgray font-px-14 text-uppercase\">Sell</p>\n\n                                        <ul class=\"padding-0 margin-bottom-25\">\n\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Orders (10 Active)</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Become a Seller </a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Offers Sent</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Job Opportunities</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Premium Membership</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Background check</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Business Verification</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Edit Store Locations</a></li>\n\n                                        </ul>\n\n                                    </div>\n\n                                    <div id=\"profileMenu_general\" class=\"col-xs-12 col-md-6 padding-left-30 padding-top-20\">\n\n                                        <p class=\"color-darkgray font-px-14 text-uppercase\">General</p>\n\n                                        <ul class=\"padding-0 margin-bottom-25\">\n\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Following</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Followers</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><a class=\"color-gray\" href=\"\">Invite Friends</a></li>\n                                            <li class=\"padding-top-3 padding-bottom-3\"><button class=\"padding-0 text-left pull-left color-gray border-none boxshadow-none\">Logout</button></li>\n\n                                        </ul>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-12 padding-top-15 padding-bottom-15\">\n\n                                <p class=\"color-mediumgray font-em-09 margin-0\">About. Get the app . Contact . Privacy Policy . Terms of Conditions</p>\n\n                            </div>\n\n                        </div>\n\n                    </li>\n\n                </ul>\n                <input type=\"submit\" class=\"btn btn-default color-text-white bg-blue font-weight-600 padding-left-30 padding-right-30 margin-top-5\" style=\"border-radius:20px; border-color:#00B4F1;\" value=\"Start Selling\">\n            </div>\n        </div>\n    </nav>\n</div>\n<app-signin></app-signin>\n<app-signup></app-signup>\n<add-service></add-service>\n<app-forgot-password></app-forgot-password>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.isLoggedIn = false;
        this.showSearchLocations = false;
        this.showSearchSuggestions = false;
        this.showSearchTyping = false;
        this.toggleMN = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.isLoggedIn;
        this.showSearchLocations = false;
        this.showSearchSuggestions = false;
        this.showSearchTyping = false;
        this.searchForm = this.formBuilder.group({
            search: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    HeaderComponent.prototype.onClickLocation = function () {
        this.showSearchLocations = true;
        console.log(__WEBPACK_IMPORTED_MODULE_2_jquery__("#modal_signin"));
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#modal_signin").modal('toggle');
    };
    HeaderComponent.prototype.onBlurLocation = function () {
        this.showSearchLocations = false;
    };
    HeaderComponent.prototype.onClickSearch = function () {
        this.showSearchSuggestions = true;
        this.showSearchLocations = false;
    };
    HeaderComponent.prototype.onBlurSearch = function () {
        this.showSearchSuggestions = false;
        this.showSearchTyping = false;
    };
    HeaderComponent.prototype.handleKeyupSearch = function (event) {
        console.log(event.target.value);
        this.showSearchSuggestions = false;
        this.showSearchTyping = true;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/left-menu/left-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/left-menu/left-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index_sidepanel\" class=\"col-md-3 col-sm-5 col-xs-12 padding-left-60 margin-top-30\">\n\n    <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white div-white-box-shadow padding-top-30 padding-bottom-60\">\n\n        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n            <h4 class=\"color-darkgray text-left padding-bottom-15 padding-left-25\">Buy</h4>\n\n            <div class=\"col-xs-12 col-md-12 padding-0\">\n                <ul class=\"padding-0 padding-bottom-15 margin-0\">\n                    <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/buy_sell'\">\n                        <a [routerLink]=\"['/buy_sell']\" class=\"color-darkgray\">Orders (5)</a>\n                    </li>\n                    <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/custom_offers'\">\n                        <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Custom offers (2)</a>\n                    </li>\n                    <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/live'\">\n                        <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Live Offer Requested (2)</a>\n                    </li>\n                    <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/watching'\">\n                        <a [routerLink]=\"['/watching']\" class=\"color-text-black\">Watching</a>\n                    </li>\n                    <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/liked'\">\n                        <a [routerLink]=\"['/liked']\" class=\"color-darkgray\">Likes</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"clearfix\"></div>\n\n            <div class=\"col-xs-12 col-md-12 padding-20\">\n                <h4 class=\"color-darkgray text-left padding-top-40 padding-left-5 margin-0\" style=\"border-top:1px solid #e4e4e4;\">Sell</h4>\n            </div>\n\n            <ul class=\"padding-0 padding-top-5\">\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/orders'\">\n                    <a [routerLink]=\"['/orders']\" class=\"color-darkgray\">Orders</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/become_seller'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Become a Seller</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/offers_sent'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Offers Sent</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/job_opportuniy'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Job Opportuniy</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/premium_membership'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Premium Membership</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/background_check'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Background Check</a>\n                </li>\n\n                <li class=\"padding-10 padding-left-25\" [class.bg-lightgray]=\"_router.url == '/edt_store_locations'\">\n                    <a [routerLink]=\"['/watching']\" class=\"color-darkgray\">Edit Store Locations</a>\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/left-menu/left-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftMenuComponent = (function () {
    function LeftMenuComponent(_router) {
        this._router = _router;
    }
    LeftMenuComponent.prototype.ngOnInit = function () {
    };
    LeftMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "left-menu",
            template: __webpack_require__("../../../../../src/app/components/left-menu/left-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/left-menu/left-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LeftMenuComponent);
    return LeftMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/like/like.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/like/like.component.html":
/***/ (function(module, exports) {

module.exports = "<left-menu></left-menu>\n<div id=\"index_contentarea\" class=\"watching_likes col-md-9 col-sm-7 col-xs-12 margin-top-30 padding-bottom-200\">\n\n    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n        <div *ngFor=\"let w of like\" class=\"col-md-4 col-sm-6 col-xs-12 margin-bottom-40 sub_div_wrapper\">\n\n            <div class=\"col-md-11 col-xs-12 padding-0 sub_div div-white-box-shadow div-white-box-shadow\">\n\n                <div class=\"col-md-12 col-xs-12 sub_div_image\" [style.backgroundImage]=\"backgroundImage(w.service.media.fileName)\"></div>\n\n                <div class=\"col-md-12 col-xs-12 padding-top-10\">\n                    <h4>{{w.service.description}}</h4>\n                    <p class=\"font-em-09 margin-bottom-5\">\n                        ${{w.service.prices.price}}\n                        <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for {{w.service.prices.time}} {{w.service.prices.timeUnitOfMeasure}}\n                    </p>\n                    <p class=\"font-em-09 color-mediumgray\">\n                        <span class=\"glyphicon glyphicon-map-marker\"></span> {{w.service.location[0].city}}, {{w.service.location[0].country}}, 22 km\n                    </p>\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description\">\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-left\">\n                        <img src=\"assets/images/p.png\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.pointValue}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-center\">\n                        <img src=\"assets/images/icons/brief2.png\" style=\"vertical-align:text-bottom;\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.numOrders}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-right\">\n                        <i class=\"fa fa-star color-mediumgray\"></i>\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.avgRating}}%</p>\n                    </div>\n\n                </div>\n\n                <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\" style=\"border-top:1px solid #e9e9e9;\">\n\n                    <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                    <p class=\"color-mediumgray font-em-09\">{{w.user.firstName}} {{w.user.lastName}}</p>\n                    <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4\" style=\"font-size:12px;\">Promoted</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n\n\n\n    <div class=\"col-xs-12 col-md-12\">\n        <h4 class=\"color-darkgray margin-bottom-25 margin-top-20\">1 week ago</h4>\n    </div>\n\n\n\n    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n        <div *ngFor=\"let w of like\" class=\"col-md-4 col-sm-6 col-xs-12 margin-bottom-40 sub_div_wrapper\">\n\n            <div class=\"col-md-11 col-xs-12 padding-0 sub_div div-white-box-shadow div-white-box-shadow\">\n\n                <div class=\"col-md-12 col-xs-12 sub_div_image\" [style.backgroundImage]=\"backgroundImage(w.service.media.fileName)\"></div>\n\n                <div class=\"col-md-12 col-xs-12 padding-top-10\">\n                    <h4>{{w.service.description}}</h4>\n                    <p class=\"font-em-09 margin-bottom-5\">\n                        ${{w.service.prices.price}}\n                        <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for {{w.service.prices.time}} {{w.service.prices.timeUnitOfMeasure}}\n                    </p>\n                    <p class=\"font-em-09 color-mediumgray\">\n                        <span class=\"glyphicon glyphicon-map-marker\"></span> {{w.service.location[0].city}}, {{w.service.location[0].country}}, 22 km\n                    </p>\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description\">\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-left\">\n                        <img src=\"assets/images/p.png\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.pointValue}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-center\">\n                        <img src=\"assets/images/icons/brief2.png\" style=\"vertical-align:text-bottom;\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.numOrders}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-right\">\n                        <i class=\"fa fa-star color-mediumgray\"></i>\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.avgRating}}%</p>\n                    </div>\n\n                </div>\n\n                <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\" style=\"border-top:1px solid #e9e9e9;\">\n\n                    <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                    <p class=\"color-mediumgray font-em-09\">{{w.user.firstName}} {{w.user.lastName}}</p>\n                    <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4\" style=\"font-size:12px;\">Promoted</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/like/like.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_like_service__ = __webpack_require__("../../../../../src/app/services/like.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LikeComponent = (function () {
    function LikeComponent(likeService, _formBuilder, _sanitizer) {
        this.likeService = likeService;
        this._formBuilder = _formBuilder;
        this._sanitizer = _sanitizer;
        this.like = [];
        this.lastlike = [];
    }
    LikeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.likeService.getLike().subscribe(function (res) {
            if (res.docs.length > 0)
                _this.like = res.docs;
            console.log(_this.like);
        }, function (err) {
        });
    };
    LikeComponent.prototype.backgroundImage = function (fileName) {
        if (fileName)
            return this._sanitizer.bypassSecurityTrustStyle("url('" + fileName + "')");
        else
            return '';
    };
    LikeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "like",
            template: __webpack_require__("../../../../../src/app/components/like/like.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/like/like.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_like_service__["a" /* LikeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar2\" class=\"navbar navbar-default margin-bottom-0 border-none color-bg-white\">\n    <div class=\"col-xs-12 col-md-12 padding-right-0\" style=\"border-bottom: 1px solid #E4E4E4;\">\n        <div class=\"col-md-11 col-xs-12 col-md-offset-1 padding-left-40 padding-right-0\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#collapse2\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n                <a id=\"navbar2_brand\" class=\"navbar-brand color-gray text-uppercase padding-top-20\" style=\"font-size: 12px;\" [routerLink]=\"['/watching']\">Categories</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"collapse2\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">all</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">home</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">living</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">auto</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">business</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">event</a></li>\n                    <li><a style=\"padding-bottom:0px !important;\" href=\"\">carpenter</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index_main\" class=\"col-xs-12 col-md-12 padding-0 padding-bottom-60\" style=\"background-color:rgb(249,249,249)\">\n    <left-menu></left-menu>\n    <!-- index_sidepanel-->\n\n    <div id=\"index_contentarea\" class=\"col-md-9 col-sm-7 col-xs-12 margin-top-30 padding-bottom-200\">\n\n        <div id=\"buy_sell\" class=\"col-xs-12 col-md-7 padding-0\">\n\n\n            <div *ngFor=\"let item of buyers\" class=\"col-md-12 col-sm-12 sub_div col-xs-12 div-white-box-shadow margin-bottom-30 padding-0\" style=\"border-bottom:2px solid #e4e4e4 !important;\">\n\n                <div class=\"col-md-12 col-xs-12 padding-30 padding-bottom-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                    <div class=\"col-md-3 col-xs-3 sub_div_image\">\n                        <img src=\"{{item.buyer.profilePic}}\" alt=\"\" width=\"110px\" height=\"110px\">\n                    </div>\n\n                    <div class=\"col-md-9 col-xs-9 padding-right-0\">\n                        <h4 class=\"margin-top-0 color-text-black font-weight-600\">{{item.service.description}}</h4>\n                        <p class=\"font-em-09 margin-bottom-5\">\n                            $50\n                            <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for 1 hour\n                        </p>\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            <span class=\"glyphicon glyphicon-map-marker\"></span>{{item.order.serviceLocation.city}}, {{item.order.serviceLocation.country}}, 22 km\n                        </p>\n\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            By {{item.buyer.firstName}} {{item.buyer.lastName}}\n                        </p>\n\n                        <p class=\"font-em-09 color-mediumgray margin-bottom-5\">\n                            Paid on {{item.order.orderMilestoneStatuses.paidDate | date}}\n                        </p>\n\n                    </div>\n\n                </div>\n\n\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description padding-15 padding-left-30\" style=\"background-color:#F6F7F9;\">\n\n                    <div class=\"sub_div_footer col-md-4 col-sm-4 col-xs-5 padding-0\">\n                        <h4 class=\"color-blue font-weight-600 display-inlineBlock font-em-12\">Pending Delivery</h4>\n                    </div>\n\n                    <div class=\"col-md-8 col-sm-8 col-xs-7 padding-top-10\">\n                        <ul class=\"padding-0 margin-0 pull-right\">\n                            <li class=\"display-inlineBlock margin-right-15\">\n                                <img src=\"assets/images/icons/icon_bell.png\" alt=\"\">\n                            </li>\n                            <li class=\"display-inlineBlock\">\n                                <img src=\"assets/images/icons/icon_email.png\" alt=\"\">\n                            </li>\n                        </ul>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sell_service__ = __webpack_require__("../../../../../src/app/services/sell.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = (function () {
    function OrdersComponent(sellService, _sanitizer) {
        this.sellService = sellService;
        this._sanitizer = _sanitizer;
        this.buyers = [];
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sellService.getBuyers().subscribe(function (res) {
            if (res.docs.length > 0)
                _this.buyers = res.docs;
        }, function (err) {
        });
    };
    OrdersComponent.prototype.backgroundImage = function (fileName) {
        if (fileName)
            return this._sanitizer.bypassSecurityTrustStyle("url('" + fileName + "')");
        else
            return '';
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-orders",
            template: __webpack_require__("../../../../../src/app/components/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sell_service__["a" /* SellService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/service-detail/service-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/service-detail/service-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index_main\" class=\"col-xs-12 col-md-12 padding-0 padding-bottom-60\" style=\"background-color:rgb(249,249,249)\">\n\n    <div class=\"container\">\n\n        <div id=\"index_sidepanel\" class=\"col-md-7 col-sm-7 col-xs-12 padding-left-60 margin-top-30\">\n\n            <h3 class=\"color-text-black font-weight-600\">Dog Walking Service</h3>\n\n            <p class=\"color-darkgray font-em-12 margin-top-20\">Consulting financial services for small businesses. review your business financial operations. Consulting financial services for small businesses. review your business financial operations….</p>\n\n            <div class=\"col-xs-12 col-md-12 padding-0\" style=\"border-radius:3px; background-image:url(assets/images/service_details.png); background-position:center; background-size:cover; height:400px;\"></div>\n\n            <div class=\"col-xs-12 col-md-12 padding-0 margin-top-40\">\n                <h4 class=\"color-text-black font-weight-600\">Delivery Method</h4>\n                <p class=\"color-darkgray font-em-12 margin-top-20\">Service locally within 20 Miles of Chicago downtown</p>\n            </div>\n\n            <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\" style=\"border-radius:3px; background-image:url(assets/images/service_map@2x.png); background-position:center; background-size:cover; height:350px;\"></div>\n\n            <div class=\"col-xs-12 col-md-12 padding-0 margin-top-40\">\n                <h4 class=\"color-text-black font-weight-600 margin-bottom-20\">Customer Reviews</h4>\n\n                <div class=\"col-xs-12 col-md-12 padding-20 color-bg-white padding-right-10\" style=\"border-top-right-radius:3px; border-top-left-radius:3px; border:1px solid #e4e4e4; border-top:0px;\">\n\n                    <div class=\"col-xs-3 col-md-1 padding-0\">\n                        <img src=\"assets/images/imagessss.png\" alt=\"\" class=\"width-40-px height-40-px border-radius-50p\">\n                    </div>\n\n                    <div class=\"col-xs-9 col-md-11 padding-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-3 col-md-4\">\n                                <p class=\"color-darkgray font-em-13 margin-bottom-0\">Peter Holms</p>\n                                <p class=\"color-gray font-em-11\">Oct 2017</p>\n                            </div>\n\n                            <div class=\"col-xs-6 col-md-8\">\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Buy again</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/online.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right margin-left-20 margin-right-20\">\n                                    <span class=\"color-gray\">On time</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/online.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Quality</span>\n                                    <span class=\"color-blue margin-left-3\">4.5</span>\n                                </p>\n\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12\">\n\n                            <span style=\"position:relative; vertical-align:sub;\">\n                                            <img src=\"assets/images/icons/blue.png\" alt=\"\">\n                                            <span class=\"font-weight-600 color-text-white\" style=\"position:absolute; top:-6px; right:10px;\">95%</span>\n                            </span>\n\n                            <p class=\"color-darkgray font-em-11 display-inlineBlock\">Great service and on time</p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n                <div class=\"col-xs-12 col-md-12 padding-20 color-bg-white padding-right-10\" style=\"border-top-right-radius:3px; border-top-left-radius:3px; border:1px solid #e4e4e4; border-top:0px;\">\n\n                    <div class=\"col-xs-3 col-md-1 padding-0\">\n                        <img src=\"assets/images/imagessss.png\" alt=\"\" class=\"width-40-px height-40-px border-radius-50p\">\n                    </div>\n\n                    <div class=\"col-xs-9 col-md-11 padding-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-3 col-md-4\">\n                                <p class=\"color-darkgray font-em-13 margin-bottom-0\">Peter Holms</p>\n                                <p class=\"color-gray font-em-11\">Oct 2017</p>\n                            </div>\n\n                            <div class=\"col-xs-6 col-md-8\">\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Quality</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/minus2.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right margin-left-10 margin-right-20\">\n                                    <span class=\"color-gray\">Not on time</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/warning.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Buy again</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/online.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12\">\n\n                            <span style=\"position:relative; vertical-align:sub;\">\n                                            <img src=\"assets/images/icons/blue.png\" alt=\"\">\n                                            <span class=\"font-weight-600 color-text-white\" style=\"position:absolute; top:-6px; right:10px;\">95%</span>\n                            </span>\n\n                            <p class=\"color-darkgray font-em-11 display-inlineBlock\">Had a great experience and will buy service again</p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n\n                <div class=\"col-xs-12 col-md-12 padding-20 color-bg-white padding-right-10\" style=\"border-top-right-radius:3px; border-top-left-radius:3px; border:1px solid #e4e4e4; border-top:0px;\">\n\n                    <div class=\"col-xs-3 col-md-1 padding-0\">\n                        <img src=\"assets/images/imagessss.png\" alt=\"\" class=\"width-40-px height-40-px border-radius-50p\">\n                    </div>\n\n                    <div class=\"col-xs-9 col-md-11 padding-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-3 col-md-4\">\n                                <p class=\"color-darkgray font-em-13 margin-bottom-0\">Peter Holms</p>\n                                <p class=\"color-gray font-em-11\">Oct 2017</p>\n                            </div>\n\n                            <div class=\"col-xs-6 col-md-8\">\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Buy again</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/online.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right margin-left-20 margin-right-20\">\n                                    <span class=\"color-gray\">On time</span>\n                                    <span class=\"color-blue margin-left-3\">\n                                                       <img src=\"assets/images/icons/online.png\" alt=\"\">\n                                                   </span>\n                                </p>\n\n                                <p class=\"pull-right\">\n                                    <span class=\"color-gray\">Quality</span>\n                                    <span class=\"color-blue margin-left-3\">4.5</span>\n                                </p>\n\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12\">\n\n                            <span style=\"position:relative; vertical-align:sub;\">\n                                            <img src=\"assets/images/icons/blue.png\" alt=\"\">\n                                            <span class=\"font-weight-600 color-text-white\" style=\"position:absolute; top:-6px; right:10px;\">95%</span>\n                            </span>\n\n                            <p class=\"color-darkgray font-em-11 display-inlineBlock\">Great service and on time</p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n\n\n                <div class=\"col-xs-12 col-md-12 padding-20 color-bg-white\" style=\"border-top-right-radius:3px; border-top-left-radius:3px; border:1px solid #e4e4e4; border-top:0px;\">\n\n                    <p class=\"color-blue font-weight-600 margin-bottom-0\">View 12 more reviews</p>\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n\n        <!----------------------------------------------------------------------------------------------------------------------------------->\n\n\n\n        <div id=\"index_contentarea\" class=\"col-md-5 col-sm-5 col-xs-12 margin-top-45\">\n\n\n            <div class=\"col-xs-12 col-md-12\">\n\n                <div class=\"col-xs-4 col-md-4 padding-right-0\">\n                    <li class=\"padding-8 padding-left-15 padding-right-15 width-110-px text-center\" style=\"border:1px solid #AEB3BB; border-radius:20px;\">\n                        <img src=\"assets/images/icons/share.png\" alt=\"\">\n                        <p class=\"display-inlineBlock color-gray margin-left-3 font-weight-600 margin-bottom-0\">Share</p>\n                    </li>\n                </div>\n\n                <div class=\"col-xs-4 col-md-4 padding-0 text-center\">\n                    <li class=\"padding-8 padding-left-15 padding-right-15 width-110-px text-center margin-left-right-auto\" style=\"border:1px solid #AEB3BB; border-radius:20px;\">\n                        <img src=\"assets/images/icons/heart_gray.png\" alt=\"\">\n                        <p class=\"display-inlineBlock color-gray margin-left-3 font-weight-600 margin-bottom-0\">Like</p>\n                    </li>\n                </div>\n\n                <div class=\"col-xs-4 col-md-4 padding-left-0\">\n                    <li class=\"padding-8 padding-left-15 padding-right-15 width-110-px text-center pull-right\" style=\"border:1px solid #AEB3BB; border-radius:20px;\">\n                        <img src=\"assets/images/icons/visibility.png\" alt=\"\">\n                        <p class=\"display-inlineBlock color-gray margin-left-3 font-weight-600 margin-bottom-0\">Watch</p>\n                    </li>\n                </div>\n\n            </div>\n\n\n            <div class=\"col-xs-12 col-md-12 margin-top-10\">\n\n                <div class=\"col-xs-12 col-md-12 padding-top-15\">\n\n                    <div class=\"col-xs-12 col-md-12 color-bg-white div-white-box-shadow padding-25\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                            <div class=\"col-xs-6 col-md-6 padding-0\">\n                                <h4 class=\"margin-0\">$10/ 1 hour</h4>\n                                <p class=\"font-em-11 color-gray\">Price description</p>\n                            </div>\n\n                            <div class=\"col-xs-6 col-md-6 padding-0\">\n\n                                <div class=\"pull-right\">\n                                    <img class=\"cursor-pointer\" onclick=\"btn_update_value('minus','text_value_1');\" src=\"assets/images/icons/minus.png\" alt=\"\">\n                                    <p id=\"text_value_1\" class=\"width-40-px display-inlineBlock text-center font-weight-600 font-em-13\" style=\"color:#484848;\">1</p>\n                                    <img class=\"cursor-pointer\" onclick=\"btn_update_value('plus','text_value_1');\" src=\"assets/images/icons/plus.png\" alt=\"\">\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\">\n                            <div class=\"col-xs-6 col-md-6 padding-0\">\n                                <h4 class=\"margin-0\">$20/ 1 hour</h4>\n                                <p class=\"font-em-11 color-gray\">Price description</p>\n                            </div>\n\n                            <div class=\"col-xs-6 col-md-6 padding-0\">\n\n                                <div class=\"pull-right\">\n                                    <img class=\"cursor-pointer\" onclick=\"btn_update_value('minus','text_value_2');\" src=\"assets/images/icons/minus.png\" alt=\"\">\n                                    <p id=\"text_value_2\" class=\"width-40-px display-inlineBlock text-center font-weight-600 font-em-13\" style=\"color:#484848;\">1</p>\n                                    <img class=\"cursor-pointer\" onclick=\"btn_update_value('plus','text_value_2');\" src=\"assets/images/icons/plus.png\" alt=\"\">\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-15\">\n\n                            <li class=\"bg-blue width-100-p padding-top-15 padding-bottom-15 text-center\" style=\"border-radius:30px\">\n                                <a href=\"checkout.html\" class=\"color-text-white text-center font-weight-600 font-em-11\" href=\"checkout.html\">BUY FOR $30</a>\n                            </li>\n\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-15\">\n                            <p></p>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-xs-12 col-md-12 color-bg-white div-white-box-shadow padding-25 margin-top-30\">\n\n                        <div class=\"col-xs-5 col-md-4 text-right\">\n                            <img src=\"assets/images/service_detail_userProfileImage.png\" style=\"width:74px; height:74px; border-radius:50%;\" alt=\"\">\n                        </div>\n\n                        <div class=\"col-xs-7 col-md-8 padding-left-0\">\n\n                            <div class=\"col-xs-12 col-md-12 padding-0\">\n                                <h4 onclick=\"open_userprofile()\" class=\"cursor-pointer display-inlineBlock font-weight-600 margin-right-2\">Daisy williams</h4>\n                                <img src=\"assets/images/icons/online@2x.png\" style=\"vertical-align:text-bottom;\" width=\"18px\" height=\"18px\" alt=\"\">\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-12 padding-0\">\n                                <p class=\"color-gray margin-bottom-0\">ABC Company</p>\n                                <p class=\"color-gray font-em-09\">\n                                    <i class=\"fa fa-map-marker color-gray\"></i> Sans Jose, CA, 22 km\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                                <div class=\"col-xs-6 col-md-6 padding-0\">\n                                    <li class=\"padding-5 padding-left-8 padding-right-8 width-90-px text-center\" style=\"border:1px solid #AEB3BB; border-radius:20px;\">\n                                        <img src=\"assets/images/icons/phone@2x.png\" width=\"16px\" height=\"16px\" alt=\"\">\n                                        <p class=\"display-inlineBlock color-gray margin-left-3 font-weight-600 margin-bottom-0\">Call</p>\n                                    </li>\n                                </div>\n\n                                <div class=\"col-xs-6 col-md-6 padding-0\">\n                                    <li class=\"padding-5 padding-left-8 padding-right-8 width-90-px text-center\" style=\"border:1px solid #AEB3BB; border-radius:20px;\">\n                                        <img src=\"assets/images/icons/envelope.png\" width=\"16px\" alt=\"\">\n                                        <p class=\"display-inlineBlock color-gray margin-left-3 font-weight-600 margin-bottom-0\">Chat</p>\n                                    </li>\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div class=\"col-xs-12 col-md-12 color-bg-white div-white-box-shadow margin-top-30\">\n\n\n                        <!--------------------------- Service Metrics ------------------------->\n\n\n                        <div class=\"col-xs-12 col-md-12 padding-left-20 padding-top-20 padding-bottom-10\">\n\n                            <h4 class=\"color-darkgray text-center font-weight-600\">Service Metrics</h4>\n\n                            <div class=\"col-xs-12 col-md-12 padding-0 padding-top-20\">\n\n                                <div class=\"col-xs-4 col-md-4 padding-right-0\">\n\n                                    <div class=\"col-xs-12 col-md-12 padding-0\">\n                                        <div class=\"border-radius-50p pull-left\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                            <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">99%</p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                                        <p class=\"color-darkgray font-px-12 text-left\">On time</p>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-xs-4 col-md-4 padding-0\">\n\n                                    <div class=\"col-xs-12 col-md-12 padding-0\">\n                                        <div class=\"border-radius-50p margin-left-right-auto\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                            <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">4.5/5</p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                                        <p class=\"color-darkgray font-px-12 text-center\">Quality</p>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"col-xs-4 col-md-4 padding-0\">\n\n                                    <div class=\"col-xs-12 col-md-12 padding-left-0\">\n                                        <div class=\"border-radius-50p pull-right\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                            <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">1.2hr</p>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                                        <p class=\"color-darkgray font-px-12 text-center\">Avg. response <br/> time</p>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n\n                            <div class=\"col-xs-12 col-md-12 padding-0 padding-top-20\" style=\"border-top:1px solid #ccc;\">\n\n                                <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                                    <div class=\"col-md-1 col-xs-2 padding-0\">\n                                        <i class=\"fa fa-briefcase color-mediumgray font-px-16 margin-top-3\"></i>\n                                    </div>\n\n                                    <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                                        <p class=\"color-gray text-left\">\n                                            <span class=\"color-darkgray\">56</span> service order completed\n                                        </p>\n                                    </div>\n\n                                </div>\n\n\n                                <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\">\n\n                                    <div class=\"col-md-1 col-xs-2 padding-0\">\n                                        <i class=\"fa fa-star color-mediumgray font-px-16 margin-top-3\"></i>\n                                    </div>\n\n                                    <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                                        <p class=\"color-gray text-left\">\n                                            <span class=\"color-darkgray\">95%</span> avg rating\n                                        </p>\n                                    </div>\n\n                                </div>\n\n\n                                <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\">\n\n                                    <div class=\"col-md-1 col-xs-2 padding-0\">\n                                        <i class=\"fa fa-users color-mediumgray font-px-16 margin-top-3\"></i>\n                                    </div>\n\n                                    <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                                        <p class=\"color-gray text-left\">\n                                            <span class=\"color-darkgray\">90%</span> of customers will buy this service again\n                                        </p>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n\n\n                        <!------------------------------ Service Details ----------------------------------->\n\n\n\n                        <div class=\"col-xs-12 col-md-12 padding-bottom-40\">\n\n                            <div class=\"col-xs-12 col-md-12 padding-0 padding-top-10\" style=\"border-top:1px solid #ccc;\">\n\n                                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                                        <div class=\"text-center border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                                            <img src=\"assets/images/p.png\" alt=\"\">\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Points</p>\n                                    </div>\n\n                                </div>\n\n\n                                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                                        <div class=\"text-center border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                                            <i class=\"fa fa-heart-o color-gray\"></i>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Likes</p>\n                                    </div>\n\n                                </div>\n\n\n                                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                                        <div class=\"text-center border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                                            <i class=\"fa fa-eye color-gray\"></i>\n                                        </div>\n                                    </div>\n\n                                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Watching</p>\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n\n        <!-------------------------------------------------------------------------------------------------------->\n\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-40\">\n\n            <h4 class=\"color-text-black font-weight-600 margin-bottom-20 margin-left-15\">Related Services</h4>\n\n            <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white\" style=\"border-radius:15px; overflow:hidden;\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-image:url(assets/images/user_profile_1.png); height:167px; background-position:center; background-repeat:no-repeat; background-size:cover;\"></div>\n\n                    <div class=\"col-xs-12 col-md-12\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                        <h4 class=\"color-darkgray\">Dog Walking</h4>\n                        <p class=\"font-em-09 margin-bottom-3\">$50 <span class=\"color-blue\" style=\"text-decoration:line-through;\">$100</span> for 1 hour</p>\n                        <p class=\"font-em-09 margin-bottom-8\">\n                            <i class=\"fa fa-map-marker color-gray\"></i> San Jose, Ca, 22 km\n                        </p>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-left color-gray font-em-09\">\n                                    <img src=\"assets/images/p.png\" alt=\"\"> 234\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"color-gray font-em-09\">\n                                    <i class=\"fa fa-briefcase\"></i> 23\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-right color-gray font-em-09\">\n                                    <i class=\"fa fa-star\"></i> 96%\n                                </p>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\">\n\n                        <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                        <p class=\"color-mediumgray font-em-09 display-inlineBlock\">Daisy Williams</p>\n                        <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4 display-inlineBlock\" style=\"font-size:12px;\">Promoted</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white\" style=\"border-radius:15px; overflow:hidden;\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-image:url(assets/images/service_detail_2.png); height:167px; background-position:center; background-repeat:no-repeat; background-size:cover;\"></div>\n\n                    <div class=\"col-xs-12 col-md-12\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                        <h4 class=\"color-darkgray\">Dog Walking</h4>\n                        <p class=\"font-em-09 margin-bottom-3\">$50 <span class=\"color-blue\" style=\"text-decoration:line-through;\">$100</span> for 1 hour</p>\n                        <p class=\"font-em-09 margin-bottom-8\">\n                            <i class=\"fa fa-map-marker color-gray\"></i> San Jose, Ca, 22 km\n                        </p>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-left color-gray font-em-09\">\n                                    <img src=\"assets/images/p.png\" alt=\"\"> 234\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"color-gray font-em-09\">\n                                    <i class=\"fa fa-briefcase\"></i> 23\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-right color-gray font-em-09\">\n                                    <i class=\"fa fa-star\"></i> 96%\n                                </p>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\">\n\n                        <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                        <p class=\"color-mediumgray font-em-09 display-inlineBlock\">Daisy Williams</p>\n                        <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4 display-inlineBlock\" style=\"font-size:12px;\">Promoted</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n\n            <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white\" style=\"border-radius:15px; overflow:hidden;\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-image:url(assets/images/service_detail_3.png); height:167px; background-position:center; background-repeat:no-repeat; background-size:cover;\"></div>\n\n                    <div class=\"col-xs-12 col-md-12\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                        <h4 class=\"color-darkgray\">Dog Walking</h4>\n                        <p class=\"font-em-09 margin-bottom-3\">$50 <span class=\"color-blue\" style=\"text-decoration:line-through;\">$100</span> for 1 hour</p>\n                        <p class=\"font-em-09 margin-bottom-8\">\n                            <i class=\"fa fa-map-marker color-gray\"></i> San Jose, Ca, 22 km\n                        </p>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-left color-gray font-em-09\">\n                                    <img src=\"assets/images/p.png\" alt=\"\"> 234\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"color-gray font-em-09\">\n                                    <i class=\"fa fa-briefcase\"></i> 23\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-right color-gray font-em-09\">\n                                    <i class=\"fa fa-star\"></i> 96%\n                                </p>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\">\n\n                        <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                        <p class=\"color-mediumgray font-em-09 display-inlineBlock\">Daisy Williams</p>\n                        <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4 display-inlineBlock\" style=\"font-size:12px;\">Promoted</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n\n            <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white\" style=\"border-radius:15px; overflow:hidden;\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-0\" style=\"background-image:url(assets/images/service_detail_4.png); height:167px; background-position:center; background-repeat:no-repeat; background-size:cover;\"></div>\n\n                    <div class=\"col-xs-12 col-md-12\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n                        <h4 class=\"color-darkgray\">Dog Walking</h4>\n                        <p class=\"font-em-09 margin-bottom-3\">$50 <span class=\"color-blue\" style=\"text-decoration:line-through;\">$100</span> for 1 hour</p>\n                        <p class=\"font-em-09 margin-bottom-8\">\n                            <i class=\"fa fa-map-marker color-gray\"></i> San Jose, Ca, 22 km\n                        </p>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-left color-gray font-em-09\">\n                                    <img src=\"assets/images/p.png\" alt=\"\"> 234\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"color-gray font-em-09\">\n                                    <i class=\"fa fa-briefcase\"></i> 23\n                                </p>\n                            </div>\n\n                            <div class=\"col-xs-4 col-md-4 padding-0\">\n                                <p class=\"pull-right color-gray font-em-09\">\n                                    <i class=\"fa fa-star\"></i> 96%\n                                </p>\n                            </div>\n\n                        </div>\n\n                    </div>\n\n                    <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\">\n\n                        <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                        <p class=\"color-mediumgray font-em-09 display-inlineBlock\">Daisy Williams</p>\n                        <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4 display-inlineBlock\" style=\"font-size:12px;\">Promoted</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/service-detail/service-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceDetailComponent = (function () {
    function ServiceDetailComponent() {
    }
    ServiceDetailComponent.prototype.ngOnInit = function () {
    };
    ServiceDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-service-detail",
            template: __webpack_require__("../../../../../src/app/components/service-detail/service-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/service-detail/service-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceDetailComponent);
    return ServiceDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div #myModal id=\"modal_signin\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content text-center padding-0 width-500-px margin-left-right-auto color-bg-white\">\n            <form class=\"col-xs-12 col-md-12 padding-50 padding-bottom-30 color-bg-white\" [formGroup]=\"form\">\n                <a href=\"index.html\"><img src=\"assets/images/logo.png\" class=\"margin-bottom-40\" alt=\"\"></a>\n                <input type=\"email\" formControlName=\"email\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Email\">\n                <input type=\"password\" formControlName=\"password\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Password\">\n                <button data-dismiss=\"modal\" (click)=\"onClickSignin(form.get('email').value, form.get('password').value)\" type=\"submit\" class=\"form-control bg-blue color-text-white font-weight-600 font-px-16 height-40-px padding-top-7 border-none width-400-px\" [disabled]=\"loading || !form.valid\">Sign In</button>\n                <p class=\"margin-top-20 margin-bottom-20 font-weight-600\">OR</p>\n                <button (click)=\"onClickSigninWithFB();\" class=\"padding-top-12 padding-bottom-12 color-text-white font-weight-600 font-px-15\" style=\"padding-right:110px; padding-left:115px; position:relative; background-color: #475993; border-radius: 2px; outline: none; border: none; width: 100%;\">\n          <i class=\"fa fa-facebook-square color-text-white fa-2x\" style=\"position:absolute; left: 15px; top:8px;\"></i>\n          <p class=\"display-inlineBlock margin-0\">Continue with Facebook</p>\n        </button>\n                <br>\n                <br>\n                <button (click)=\"onClickSigninWithGoogle();\" class=\"padding-top-12 padding-bottom-12 color-text-white font-weight-600 font-px-15\" style=\"padding-right:110px; padding-left:135px; position:relative; border:1px solid #e4e4e4; border-radius: 2px; outline: none; width: 100%; background-color: #fff;\">\n          <img src=\"assets/images/icons/google1.png\" style=\"width:24px; height:24px; position:absolute; left: 15px; top:10px;\" alt=\"\">\n          <p class=\"display-inlineBlock color-text-black margin-0\">Continue with Google</p>\n        </button>\n                <p style=\"cursor:pointer;\" data-toggle=\"modal\" data-target=\"#modal_forgotpassword\" data-dismiss=\"modal\" class=\"padding-top-30\">Forgot your Password?</p>\n            </form>\n            <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white padding-top-15 padding-bottom-15\" style=\"border-top: 1px solid #e9e9e9;\">\n                <p style=\"cursor:pointer;\" data-toggle=\"modal\" data-target=\"#modal_signup\" data-dismiss=\"modal\" class=\"color-gray margin-top-5\">Not a member yet? <span class=\"color-blue cursor-pointer\">Sign up</span></p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = (function () {
    function SigninComponent(authService, formBuilder, _router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this._router = _router;
        this.successSigninWithFB = this.successSigninWithFB.bind(this);
        this.successSigninWithGoogle = this.successSigninWithGoogle.bind(this);
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.form = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    SigninComponent.prototype.onClickSignin = function (email, password) {
        var _this = this;
        this.authService.signin(email, password)
            .subscribe(function (res) {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            console.log(err);
        });
    };
    SigninComponent.prototype.onClickSigninWithGoogle = function () {
        this.authService.googleSignin(this.successSigninWithGoogle);
    };
    SigninComponent.prototype.onClickSigninWithFB = function () {
        this.authService.fbSignin(this.successSigninWithFB);
    };
    SigninComponent.prototype.successSigninWithGoogle = function (data) {
        console.log(data);
    };
    SigninComponent.prototype.successSigninWithFB = function (data) {
        console.log(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('myModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SigninComponent.prototype, "myModal", void 0);
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"modal_signup\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content text-center padding-0 width-500-px margin-left-right-auto color-bg-white\">\n      <div class=\"col-xs-12 col-md-12 padding-50 padding-bottom-30 color-bg-white\">\n        <img src=\"assets/images/logo.png\" class=\"margin-bottom-40\" alt=\"\">\n        <form [hidden]=\"step !== 0\" class=\"col-xs-12 col-md-12 padding-0 margin-bottom-30\" [formGroup]=\"form0\">\n          <input type=\"email\" formControlName=\"email\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Email\">\n          <input type=\"password\" formControlName=\"password\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Password\">\n          <button (click)=\"onClickContinue(form0.get('email').value, form0.get('password').value);\" type=\"submit\" class=\"form-control bg-blue color-text-white font-weight-600 font-px-16 height-40-px padding-top-7 border-none width-400-px\" [disabled]=\"!form0.valid\">Continue</button>\n          <p class=\"margin-top-20 margin-bottom-20 font-weight-600\">OR</p>\n          <button (click)=\"onClickSignupWithFB();\" class=\"padding-top-12 padding-bottom-12 color-text-white font-weight-600 font-px-15\" style=\"padding-right:110px; padding-left:115px; position:relative; background-color: #475993; border-radius: 2px; outline: none; border: none; width: 100%;\">\n            <i class=\"fa fa-facebook-square color-text-white fa-2x\" style=\"position:absolute; left: 15px; top:8px;\"></i>\n            <p class=\"display-inlineBlock margin-0\">Continue with Facebook</p>\n          </button>\n          <br>\n          <br>\n          <button (click)=\"onClickSignupWithGoogle();\" class=\"padding-top-12 padding-bottom-12 color-text-white font-weight-600 font-px-15\" style=\"padding-right:110px; padding-left:135px; position:relative; border:1px solid #e4e4e4; border-radius: 2px; outline: none; width: 100%; background-color: #fff;\">\n            <img src=\"assets/images/icons/google1.png\" style=\"width:24px; height:24px; position:absolute; left: 15px; top:10px;\" alt=\"\">\n            <p class=\"display-inlineBlock color-text-black margin-0\">Continue with Google</p>\n          </button>\n        </form>\n        <form [hidden]=\"step !== 1\" class=\"col-xs-12 col-md-12 padding-0 margin-bottom-30\" [formGroup]=\"form1\">\n          <input type=\"text\" formControlName=\"firstName\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"First Name\">\n          <input type=\"text\" formControlName=\"lastName\" class=\"font-weight-600 form-control color-darkgray margin-bottom-10 height-40-px boxshadow-none width-400-px\" style=\"border:1px solid #e9e9e9;\" placeholder=\"Last Name\">\n          <button (click)=\"onClickSignup(form1.get('firstName').value, form1.get('lastName').value);\" type=\"submit\" class=\"form-control bg-blue color-text-white font-weight-600 font-px-16 height-40-px padding-top-7 border-none width-400-px\" [disabled]=\"loading || !form1.valid\">Sign Up</button>\n          <p (click)=\"onClickBack();\" class=\"font-weight-600 color-gray margin-top-40 font-em-11\" style=\"cursor:pointer;\">Back</p>\n        </form>\n        <p class=\"color-gray font-em-09\" style=\"line-height:20px;\">By continuing, you agree to Pointter's <br/>\n          <span class=\"color-darkgray\">Terms of Service, Privacy Policy</span>\n        </p>\n      </div>\n      <div class=\"col-xs-12 col-md-12 padding-0 color-bg-white padding-top-15 padding-bottom-15\" style=\"border-top: 1px solid #e9e9e9;\">\n        <p style=\"cursor:pointer;\" data-toggle=\"modal\" data-target=\"#modal_signin\" data-dismiss=\"modal\" class=\"color-gray margin-top-5\">Already a member? <span class=\"color-blue\">Sign In</span></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__ = __webpack_require__("../../../../../src/app/constants/auth-type.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.successSignupWithFB = this.successSignupWithFB.bind(this);
        this.successSignupWithGoogle = this.successSignupWithGoogle.bind(this);
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.step = 0;
        this.form0 = this.formBuilder.group({
            email: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].email]],
            password: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.form1 = this.formBuilder.group({
            firstName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            lastName: [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    SignupComponent.prototype.goBack = function () {
        this.step = 0;
    };
    SignupComponent.prototype.goNext = function () {
        this.step = 1;
    };
    SignupComponent.prototype.onClickBack = function () {
        this.goBack();
    };
    SignupComponent.prototype.onClickContinue = function (email, password) {
        this.email = email;
        this.password = password;
        this.authType = __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Email;
        this.goNext();
    };
    SignupComponent.prototype.onClickSignup = function (firstName, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.loading = true;
        var _a = this, email = _a.email, password = _a.password;
        var promise = null;
        switch (this.authType) {
            case __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Email:
                promise = this.authService.signup(email, password);
                break;
            case __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Google:
                promise = this.authService.signupWithGoogle();
                break;
            case __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Facebook:
                promise = this.authService.signupWithFB();
                break;
            default:
                promise = this.authService.signup(email, password);
                break;
        }
        promise
            .subscribe(function (res) {
            _this.loading = false;
        }, function (err) {
            _this.loading = false;
            console.log(err);
        });
    };
    SignupComponent.prototype.onClickSignupWithGoogle = function () {
        this.authType = __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Google;
        this.authService.googleSignin(this.successSignupWithGoogle);
    };
    SignupComponent.prototype.onClickSignupWithFB = function () {
        this.authType = __WEBPACK_IMPORTED_MODULE_3__constants_auth_type_enum__["a" /* AuthType */].Facebook;
        this.authService.fbSignin(this.successSignupWithFB);
    };
    SignupComponent.prototype.successSignupWithGoogle = function (data) {
        console.log(data);
        this.goNext();
    };
    SignupComponent.prototype.successSignupWithFB = function (data) {
        console.log(data);
        this.goNext();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"index_main\" class=\"col-xs-12 col-md-12 padding-0 padding-bottom-60\" style=\"background-color:rgb(249,249,249)\">\n\n    <div id=\"index_sidepanel\" class=\"col-md-3 col-sm-5 col-xs-12 padding-left-60 margin-top-30\">\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0 text-center color-bg-white div-white-box-shadow padding-top-40\">\n\n            <div style=\"position:relative;\" class=\"text-center\">\n                <img src=\"{{user.profilePic}}\" alt=\"\" style=\"margin-left:auto; margin-right:auto;\" width=\"120px\" height=\"120px\">\n                <img src=\"assets/images/icons/online@2x.png\" style=\"position:absolute; bottom:-8px; right:46%;\" width=\"18px\" height=\"18px\" alt=\"\">\n            </div>\n\n            <h3 class=\"color-text-black font-weight-600 padding-bottom-15 text-center\">{{user.firstName}} {{user.lastName}}</h3>\n\n            <li id=\"li_follow\" onclick=\"btn_menu_f(this);\" class=\"display-inlineBlock\">\n                <a data-toggle=\"modal\" data-target=\"#\" class=\"btn_menu_active padding-7 padding-right-30 padding-left-30 color-gray font-weight-600 margin-right-10\" style=\"border-color:#95989A !important;\">Follow</a>\n            </li>\n\n            <li id=\"li_message_user\" onclick=\"btn_menu_f(this);\" class=\"display-inlineBlock\">\n                <a data-toggle=\"modal\" data-target=\"#\" class=\"btn_menu_active padding-7 padding-right-30 padding-left-30 color-gray font-weight-600\" style=\"border-color:#95989A !important;\">\n                    <img src=\"assets/images/icons/envelope.png\" class=\"margin-right-3\" width=\"16px\" height=\"12px\" alt=\"\"> Message\n                </a>\n            </li>\n\n\n            <div class=\"col-xs-12 col-md-12 padding-0 margin-top-40 padding-bottom-20\">\n\n                <div class=\"col-xs-12 col-md-12 padding-right-5 padding-left-5\">\n\n                    <div class=\"col-xs-5 col-md-6 padding-right-0 text-left\">\n                        <div class=\"col-md-2 padding-0\"><i class=\"fa fa-briefcase color-gray\"></i></div>\n                        <div class=\"col-md-10 padding-0\">\n                            <p class=\"font-em-09 display-inlineBlock color-darkgray\">Company</p>\n                        </div>\n                    </div>\n\n                    <div class=\"col-xs-7 col-md-6 padding-left-0 text-right\">\n                        <p class=\"font-em-09 color-gray\">{{user.companyName}}</p>\n                    </div>\n\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 padding-right-5 padding-left-5\">\n\n                    <div class=\"col-xs-5 col-md-6 padding-right-0 text-left\">\n                        <div class=\"col-md-2 padding-0\"><span class=\"width-20-px\"><i class=\"fa fa-map-marker color-gray\"></i></span></div>\n                        <div class=\"col-md-10 padding-0\">\n                            <p class=\"font-em-09 display-inlineBlock color-darkgray\">Location</p>\n                        </div>\n                    </div>\n\n                    <div class=\"col-xs-7 col-md-6 padding-left-0 text-right\">\n                        <p class=\"font-em-09 color-gray\">{{user.location.city}}, {{user.location.country}}, 22 km</p>\n                    </div>\n\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 padding-right-5 padding-left-5\">\n\n                    <div class=\"col-xs-5 col-md-6 padding-right-0 text-left\">\n                        <div class=\"col-md-2 padding-0\"><i class=\"fa fa-phone color-gray\"></i></div>\n                        <div class=\"col-md-10 padding-0\">\n                            <p class=\"font-em-09 display-inlineBlock color-darkgray\">Phone</p>\n                        </div>\n                    </div>\n\n                    <div class=\"col-xs-7 col-md-6 padding-left-0 text-right\">\n                        <p class=\"font-em-09 color-gray\">{{user.phone}}</p>\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <!--------------------------------------------------- Description ------------------------------------------------------------------------>\n\n\n\n            <div class=\"col-xs-12 col-md-12 padding-left-20 padding-top-20 padding-bottom-20\" style=\"border-top:1px solid #ccc;\">\n\n                <h4 class=\"color-darkgray text-left\">Description</h4>\n\n                <p class=\"text-left margin-top-20\" style=\"line-height:23px;\">{{user.description}}</p>\n\n            </div>\n\n\n\n            <!--------------------------------------------------- Service Metrics ---------------------------------------------------------------->\n\n\n\n            <div class=\"col-xs-12 col-md-12 padding-left-20 padding-top-20 padding-bottom-20\" style=\"border-top:1px solid #ccc;\">\n\n                <h4 class=\"color-darkgray text-center\">Service Metrics</h4>\n\n                <div class=\"col-xs-12 col-md-12 padding-0 padding-top-20\">\n\n                    <div class=\"col-xs-4 col-md-4 padding-right-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n                            <div class=\"border-radius-50p pull-left\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">99%</p>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                            <p class=\"color-darkgray font-px-12 text-left\">On time</p>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-xs-4 col-md-4 padding-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-0\">\n                            <div class=\"border-radius-50p margin-left-right-auto\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">4.5/5</p>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                            <p class=\"color-darkgray font-px-12 text-center\">Quality</p>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-xs-4 col-md-4 padding-0\">\n\n                        <div class=\"col-xs-12 col-md-12 padding-left-0\">\n                            <div class=\"border-radius-50p pull-right\" style=\"border:1px solid #95989A; width:44px; height:44px;\">\n                                <p class=\"color-darkgray padding-top-13 font-px-12 text-center\">1.2hr</p>\n                            </div>\n                        </div>\n\n                        <div class=\"col-xs-12 col-md-12 padding-0 margin-top-5\">\n                            <p class=\"color-darkgray font-px-12 text-center\">Avg. response <br/> time</p>\n                        </div>\n\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-xs-12 col-md-12 padding-0 padding-top-10\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n                        <div class=\"col-md-1 col-xs-2 padding-0\">\n                            <i class=\"fa fa-briefcase color-mediumgray font-px-16 margin-top-3\"></i>\n                        </div>\n\n                        <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                            <p class=\"color-gray text-left\">\n                                <span class=\"color-darkgray\">56</span> service order completed\n                            </p>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\">\n\n                        <div class=\"col-md-1 col-xs-2 padding-0\">\n                            <i class=\"fa fa-star color-mediumgray font-px-16 margin-top-3\"></i>\n                        </div>\n\n                        <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                            <p class=\"color-gray text-left\">\n                                <span class=\"color-darkgray\">95%</span> avg rating\n                            </p>\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"col-xs-12 col-md-12 padding-0 margin-top-10\">\n\n                        <div class=\"col-md-1 col-xs-2 padding-0\">\n                            <i class=\"fa fa-users color-mediumgray font-px-16 margin-top-3\"></i>\n                        </div>\n\n                        <div class=\"col-md-10 col-xs-10 padding-right-0\">\n                            <p class=\"color-gray text-left\">\n                                <span class=\"color-darkgray\">90%</span> of customers will buy this service again\n                            </p>\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n\n\n            <!--------------------------------------------------- Service Details ---------------------------------------------------------------->\n\n\n\n            <div class=\"col-xs-12 col-md-12 padding-top-20 padding-bottom-40\" style=\"border-top:1px solid #ccc;\">\n\n                <h4 class=\"color-darkgray text-center\">Service Details</h4>\n\n                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                        <div class=\"border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                            <img src=\"assets/images/p.png\" alt=\"\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Points</p>\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                        <div class=\"border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                            <i class=\"fa fa-heart-o color-gray\"></i>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Likes</p>\n                    </div>\n\n                </div>\n\n\n                <div class=\"col-xs-4 col-md-4 padding-0 margin-top-10\">\n\n                    <div class=\"col-md-6 col-xs-6 padding-0\">\n                        <div class=\"border-radius-50p margin-left-right-auto padding-top-5 margin-top-2\" style=\"border:1px solid #95989A; width:32px; height:32px;\">\n                            <i class=\"fa fa-eye color-gray\"></i>\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6 col-xs-6 padding-0 padding-left-2\">\n                        <p class=\"color-gray text-left color-darkgray margin-0\">234</p>\n                        <p class=\"color-gray text-left color-darkgray margin-0 font-em-07\">Watching</p>\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n\n\n\n    <div id=\"index_contentarea\" class=\"col-md-9 col-sm-7 col-xs-11 margin-top-30\">\n\n        <div id=\"modal_sendCustomOffer\" class=\"modal fade\" role=\"dialog\">\n            <div class=\"modal-dialog\">\n\n                <!-- Modal content-->\n                <div class=\"modal-content text-center padding-0 width-700-px margin-left-right-auto color-bg-white\">\n\n                    <div class=\"col-xs-12 col-md-12 padding-50 padding-bottom-30 color-bg-white\">\n\n                        <div class=\"col-xs-12 col-md-12\">\n                            <h3 class=\"color-darkgray text-left font-weight-600 font-em-14\">Get a Custom Offer from Daisy</h3>\n                            <select name=\"\" class=\"form-control\" id=\"\">\n                        <option value=\"\">Choose a Service Category</option>\n                        <option value=\"\"></option>\n                        <option value=\"\"></option>\n                        <option value=\"\"></option>\n                    </select>\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12 margin-top-40\">\n                            <h3 class=\"color-darkgray text-left font-weight-600 font-em-14\">Describe the ervice you're looking</h3>\n                            <textarea name=\"\" id=\"\" class=\"color-gray form-control\" rows=\"6\" placeholder=\"Describe your service details (500)\"></textarea>\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12 margin-top-40\">\n                            <h3 class=\"color-darkgray text-left font-weight-600 font-em-14\">Where!</h3>\n                            <input type=\"text\" class=\"color-gray form-control\" value=\"Chicago\">\n                            <span style=\"position:absolute; right:30px; top:58px;\"><i class=\"fa fa-bullseye font-px-16\"></i></span>\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12 margin-top-40\">\n                            <h3 class=\"color-darkgray text-left font-weight-600 font-em-14\">Your Custom Offer</h3>\n                            <input type=\"text\" class=\"color-text-black font-weight-600 form-control\" value=\"$60\">\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12 margin-top-40\">\n                            <h3 class=\"color-darkgray text-left font-weight-600 font-em-14\">Write message</h3>\n                            <textarea name=\"\" id=\"\" class=\"color-gray form-control\" rows=\"6\" placeholder=\"Write your special request to Daisy (500)\"></textarea>\n                        </div>\n\n\n                        <div class=\"col-xs-12 col-md-12 margin-top-40 margin-bottom-60\">\n\n                            <li id=\"li_addService\" onclick=\"\" class=\"display-inlineBlock pull-right\">\n                                <a class=\"text-uppercase margin-top-40 bg-blue color-text-white font-px-16 font-weight-600 padding-10 padding-left-20 padding-right-20\" style=\"border-radius:20px;\">Send</a>\n                            </li>\n\n                            <li onclick=\"toggle_modal('modal_sendCustomOffer');\" id=\"li_cancel\" class=\"display-inlineBlock pull-right margin-right-20\">\n                                <a class=\"margin-top-40 font-px-16 font-weight-600 color-darkgray text-uppercase padding-10\">Cancel</a>\n                            </li>\n\n                        </div>\n\n\n                    </div>\n\n\n                </div>\n\n\n            </div>\n        </div>\n\n\n\n        <!---------------------------------------------------------------------------------------------------------------------------------->\n\n\n\n\n        <div class=\"col-xs-12 col-md-12 padding-right-40\" id=\"banner_area\">\n            <div class=\"col-md-12 col-xs-12 padding-0\" [style.backgroundImage]=\"backgroundImage(user.profileBackgroundMedia[0].fileName)\" style=\"background-repeat:no-repeat; background-size:cover; background-position:center; height:230px; border-radius:3px;\"></div>\n        </div>\n\n\n        <div class=\"user_services col-xs-12 col-md-12 padding-0\" id=\"content_area\">\n\n            <div class=\"col-xs-12 col-md-12 margin-bottom-15 margin-top-30\">\n\n                <h4 class=\"color-text-black text-left font-weight-600 display-inlineBlock\" style=\"vertical-align:-webkit-baseline-middle;\">{{user.firstName}}'s Services</h4>\n\n                <input type=\"submit\" class=\"pull-right btn btn-default color-blue color-bg-white font-weight-600 padding-left-30 padding-right-30 margin-right-30\" style=\"border-radius:20px; border-color:#00B4F1;\" value=\"Get Custom Offer\" data-toggle=\"modal\" data-target=\"#modal_sendCustomOffer\"\n                    data-dismiss=\"modal\">\n\n\n            </div>\n\n            <div *ngFor=\"let item of _userServices\" class=\"col-md-4 col-sm-6 col-xs-6 margin-bottom-40 sub_div_wrapper\">\n\n                <div class=\"col-md-11 col-xs-11 padding-0 sub_div div-white-box-shadow div-white-box-shadow\">\n\n                    <div class=\"col-md-12 col-xs-12 sub_div_image\" [style.backgroundImage]=\"backgroundImage(item.service.media.fileName)\"></div>\n\n                    <div class=\"col-md-12 col-xs-12 padding-top-10\">\n                        <h4>{{item.service.description}}</h4>\n                        <p class=\"font-em-09 margin-bottom-5\">\n                            ${{item.service.prices.price}}\n                            <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for {{item.service.prices.time}} {{item.service.prices.timeUnitOfMeasure}}\n                        </p>\n                        <p class=\"font-em-09 color-mediumgray\">\n                            <span class=\"glyphicon glyphicon-map-marker\"></span> {{item.service.location[0].city}}, {{item.service.location[0].country}}, 22 km\n                        </p>\n                    </div>\n\n                    <div class=\"col-xs-12 col-md-12 sub_div_description\">\n\n                        <div class=\"col-md-4 col-xs-4 padding-0 text-left\">\n                            <img src=\"assets/images/p.png\" alt=\"\">\n                            <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{item.pointValue}}</p>\n                        </div>\n\n                        <div class=\"col-md-4 col-xs-4 padding-0 text-center\">\n                            <img src=\"assets/images/icons/brief2.png\" style=\"vertical-align:text-bottom;\" alt=\"\">\n                            <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{item.numOrders}}</p>\n                        </div>\n\n                        <div class=\"col-md-4 col-xs-4 padding-0 text-right\">\n                            <i class=\"fa fa-star color-mediumgray\"></i>\n                            <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{item.avgRating}}%</p>\n                        </div>\n\n                    </div>\n\n                    <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\" style=\"border-top:1px solid #e9e9e9;\">\n\n                        <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                        <p class=\"color-mediumgray font-em-09\">{{user.firstName}} {{user.lastName}}</p>\n                        <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4\" style=\"font-size:12px;\">Promoted</p>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_info__ = __webpack_require__("../../../../../src/app/models/user-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = (function () {
    function UserProfileComponent(userService, _formBuilder, _sanitizer) {
        this.userService = userService;
        this._formBuilder = _formBuilder;
        this._sanitizer = _sanitizer;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_info__["a" /* UserInfo */]();
        this._userServices = [];
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (res) {
            console.log(res);
            _this.user = res.user;
        }, function (err) {
        });
        this.userService.getServices().subscribe(function (res) {
            console.log(res);
            res.docs.forEach(function (e) {
                _this._userServices.push(__WEBPACK_IMPORTED_MODULE_5_lodash__["merge"](new __WEBPACK_IMPORTED_MODULE_4__models_user_info__["b" /* UserServiceInfo */](), e));
            });
            console.log(_this._userServices);
        }, function (err) {
        });
    };
    UserProfileComponent.prototype.backgroundImage = function (fileName) {
        if (fileName)
            return this._sanitizer.bypassSecurityTrustStyle("url('" + fileName + "')");
        else
            return '';
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-user-profile",
            template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/watching/watching.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/watching/watching.component.html":
/***/ (function(module, exports) {

module.exports = "<left-menu></left-menu>\n<div id=\"index_contentarea\" class=\"watching_likes col-md-9 col-sm-7 col-xs-12 margin-top-30 padding-bottom-200\">\n\n    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n        <div *ngFor=\"let w of watching\" class=\"col-md-4 col-sm-6 col-xs-12 margin-bottom-40 sub_div_wrapper\">\n\n            <div class=\"col-md-11 col-xs-12 padding-0 sub_div div-white-box-shadow div-white-box-shadow\">\n\n                <div class=\"col-md-12 col-xs-12 sub_div_image\" [style.backgroundImage]=\"backgroundImage(w.service.media.fileName)\"></div>\n\n                <div class=\"col-md-12 col-xs-12 padding-top-10\">\n                    <h4>{{w.service.description}}</h4>\n                    <p class=\"font-em-09 margin-bottom-5\">\n                        ${{w.service.prices.price}}\n                        <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for {{w.service.prices.time}} {{w.service.prices.timeUnitOfMeasure}}\n                    </p>\n                    <p class=\"font-em-09 color-mediumgray\">\n                        <span class=\"glyphicon glyphicon-map-marker\"></span> {{w.service.location[0].city}}, {{w.service.location[0].country}}, 22 km\n                    </p>\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description\">\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-left\">\n                        <img src=\"assets/images/p.png\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.pointValue}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-center\">\n                        <img src=\"assets/images/icons/brief2.png\" style=\"vertical-align:text-bottom;\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.numOrders}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-right\">\n                        <i class=\"fa fa-star color-mediumgray\"></i>\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.avgRating}}%</p>\n                    </div>\n\n                </div>\n\n                <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\" style=\"border-top:1px solid #e9e9e9;\">\n\n                    <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                    <p class=\"color-mediumgray font-em-09\">{{w.user.firstName}} {{w.user.lastName}}</p>\n                    <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4\" style=\"font-size:12px;\">Promoted</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n\n    </div>\n\n\n\n    <div class=\"col-xs-12 col-md-12\">\n        <h4 class=\"color-darkgray margin-bottom-25 margin-top-20\">1 week ago</h4>\n    </div>\n\n\n\n    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n        <div *ngFor=\"let w of watching\" class=\"col-md-4 col-sm-6 col-xs-12 margin-bottom-40 sub_div_wrapper\">\n\n            <div class=\"col-md-11 col-xs-12 padding-0 sub_div div-white-box-shadow div-white-box-shadow\">\n\n                <div class=\"col-md-12 col-xs-12 sub_div_image\" [style.backgroundImage]=\"backgroundImage(w.service.media.fileName)\"></div>\n\n                <div class=\"col-md-12 col-xs-12 padding-top-10\">\n                    <h4>{{w.service.description}}</h4>\n                    <p class=\"font-em-09 margin-bottom-5\">\n                        ${{w.service.prices.price}}\n                        <span class=\"color-blue\" style=\"text-decoration: line-through;\">$100</span> for {{w.service.prices.time}} {{w.service.prices.timeUnitOfMeasure}}\n                    </p>\n                    <p class=\"font-em-09 color-mediumgray\">\n                        <span class=\"glyphicon glyphicon-map-marker\"></span> {{w.service.location[0].city}}, {{w.service.location[0].country}}, 22 km\n                    </p>\n                </div>\n\n                <div class=\"col-xs-12 col-md-12 sub_div_description\">\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-left\">\n                        <img src=\"assets/images/p.png\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.pointValue}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-center\">\n                        <img src=\"assets/images/icons/brief2.png\" style=\"vertical-align:text-bottom;\" alt=\"\">\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.numOrders}}</p>\n                    </div>\n\n                    <div class=\"col-md-4 col-xs-4 padding-0 text-right\">\n                        <i class=\"fa fa-star color-mediumgray\"></i>\n                        <p class=\"color-mediumgray\" style=\"font-size:12px;\">{{w.avgRating}}%</p>\n                    </div>\n\n                </div>\n\n                <div id=\"service_detail_link\" onclick=\"btn_menu_f(this)\" class=\"cursor-pointer col-xs-12 col-md-12 padding-top-6 sub_div_footer\" style=\"border-top:1px solid #e9e9e9;\">\n\n                    <img src=\"assets/images/services/1.png\" alt=\"img\" style=\"border-radius:50%; width:24px; height:24px; margin-right:2px;\">\n                    <p class=\"color-mediumgray font-em-09\">{{w.user.firstName}} {{w.user.lastName}}</p>\n                    <p class=\"p2 color-blue font-weight-600 pull-right margin-top-4\" style=\"font-size:12px;\">Promoted</p>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/watching/watching.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_watching_service__ = __webpack_require__("../../../../../src/app/services/watching.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WatchingComponent = (function () {
    function WatchingComponent(watchingService, _formBuilder, _sanitizer) {
        this.watchingService = watchingService;
        this._formBuilder = _formBuilder;
        this._sanitizer = _sanitizer;
        this.watching = [];
        this.lastWatching = [];
    }
    WatchingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.watchingService.getWatching().subscribe(function (res) {
            if (res.docs.length > 0)
                _this.watching = res.docs;
            console.log(_this.watching);
        }, function (err) {
        });
    };
    WatchingComponent.prototype.backgroundImage = function (fileName) {
        if (fileName)
            return this._sanitizer.bypassSecurityTrustStyle("url('" + fileName + "')");
        else
            return '';
    };
    WatchingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-watching",
            template: __webpack_require__("../../../../../src/app/components/watching/watching.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/watching/watching.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_watching_service__["a" /* WatchingService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WatchingComponent);
    return WatchingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/constants/auth-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthType; });
var AuthType;
(function (AuthType) {
    AuthType[AuthType["Email"] = 1] = "Email";
    AuthType[AuthType["Google"] = 2] = "Google";
    AuthType[AuthType["Facebook"] = 3] = "Facebook";
})(AuthType || (AuthType = {}));


/***/ }),

/***/ "../../../../../src/app/models/add-service-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddServiceInfo; });
/* unused harmony export ServiceCategory */
/* unused harmony export ServiceFulfillmentMethod */
/* unused harmony export ServicePrice */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_info__ = __webpack_require__("../../../../../src/app/models/common-info.ts");

var AddServiceInfo = (function () {
    function AddServiceInfo(category, description, fulfillmentMethod, location, media, pricing) {
        if (category === void 0) { category = new ServiceCategory(); }
        if (description === void 0) { description = ''; }
        if (fulfillmentMethod === void 0) { fulfillmentMethod = new ServiceFulfillmentMethod(); }
        if (location === void 0) { location = [new __WEBPACK_IMPORTED_MODULE_0__common_info__["a" /* LocationInfo */]()]; }
        if (media === void 0) { media = [new __WEBPACK_IMPORTED_MODULE_0__common_info__["b" /* Media */]()]; }
        if (pricing === void 0) { pricing = new ServicePrice(); }
        this.category = category;
        this.description = description;
        this.fulfillmentMethod = fulfillmentMethod;
        this.location = location;
        this.media = media;
        this.pricing = pricing;
    }
    return AddServiceInfo;
}());

var ServiceCategory = (function () {
    function ServiceCategory(id, name) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        this.id = id;
        this.name = name;
    }
    return ServiceCategory;
}());

var ServiceFulfillmentMethod = (function () {
    function ServiceFulfillmentMethod(local, online, shipment, store) {
        if (local === void 0) { local = false; }
        if (online === void 0) { online = false; }
        if (shipment === void 0) { shipment = false; }
        if (store === void 0) { store = false; }
        this.local = local;
        this.online = online;
        this.shipment = shipment;
        this.store = store;
    }
    return ServiceFulfillmentMethod;
}());

var ServicePrice = (function () {
    function ServicePrice(description, price, time, timeUnitOfMeasure) {
        if (description === void 0) { description = ''; }
        if (price === void 0) { price = 0; }
        if (time === void 0) { time = ''; }
        if (timeUnitOfMeasure === void 0) { timeUnitOfMeasure = ''; }
        this.description = description;
        this.price = price;
        this.time = time;
        this.timeUnitOfMeasure = timeUnitOfMeasure;
    }
    return ServicePrice;
}());



/***/ }),

/***/ "../../../../../src/app/models/common-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationInfo; });
/* unused harmony export LocationInfoGeoJson */
/* unused harmony export UserNormalInfo */
/* unused harmony export PriceInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ServiceInfo; });
var Media = (function () {
    function Media(fileName, mediaType) {
        if (fileName === void 0) { fileName = '123.jpg'; }
        if (mediaType === void 0) { mediaType = 'image'; }
        this.fileName = fileName;
        this.mediaType = mediaType;
    }
    return Media;
}());

var LocationInfo = (function () {
    function LocationInfo(_id, city, country, geoJson, postalCode, province, state) {
        if (_id === void 0) { _id = ''; }
        if (city === void 0) { city = 'Chicago'; }
        if (country === void 0) { country = 'US'; }
        if (geoJson === void 0) { geoJson = new LocationInfoGeoJson(); }
        if (postalCode === void 0) { postalCode = '12345'; }
        if (province === void 0) { province = '33'; }
        if (state === void 0) { state = 'IL'; }
        this._id = _id;
        this.city = city;
        this.country = country;
        this.geoJson = geoJson;
        this.postalCode = postalCode;
        this.province = province;
        this.state = state;
    }
    return LocationInfo;
}());

var LocationInfoGeoJson = (function () {
    function LocationInfoGeoJson(type, coordinates) {
        if (type === void 0) { type = 'Point'; }
        if (coordinates === void 0) { coordinates = [-73.856077, 40.848447]; }
        this.type = type;
        this.coordinates = coordinates;
    }
    return LocationInfoGeoJson;
}());

var UserNormalInfo = (function () {
    function UserNormalInfo(id, firstName, lastName, profilePic) {
        if (id === void 0) { id = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (profilePic === void 0) { profilePic = ''; }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
    }
    return UserNormalInfo;
}());

var PriceInfo = (function () {
    function PriceInfo(_id, description, price, time, timeUnitOfMeasure) {
        if (_id === void 0) { _id = ''; }
        if (description === void 0) { description = ''; }
        if (price === void 0) { price = 0; }
        if (time === void 0) { time = 0; }
        if (timeUnitOfMeasure === void 0) { timeUnitOfMeasure = ''; }
        this._id = _id;
        this.description = description;
        this.price = price;
        this.time = time;
        this.timeUnitOfMeasure = timeUnitOfMeasure;
    }
    return PriceInfo;
}());

var ServiceInfo = (function () {
    function ServiceInfo(id, description, media, location, prices) {
        if (id === void 0) { id = ''; }
        if (description === void 0) { description = ''; }
        if (media === void 0) { media = new Media(); }
        if (location === void 0) { location = [new LocationInfo()]; }
        if (prices === void 0) { prices = new PriceInfo(); }
        this.id = id;
        this.description = description;
        this.media = media;
        this.location = location;
        this.prices = prices;
    }
    return ServiceInfo;
}());



/***/ }),

/***/ "../../../../../src/app/models/user-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* unused harmony export Setting */
/* unused harmony export EmailValid */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserServiceInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_info__ = __webpack_require__("../../../../../src/app/models/common-info.ts");

var UserInfo = (function () {
    function UserInfo(_id, email, location, companyName, CompletedRegistrationDate, firstName, lastName, profilePic, verified, description, phone, settings, profileBackgroundMedia, isEmail, isAdmin, isActive, completedRegistration) {
        if (_id === void 0) { _id = ''; }
        if (email === void 0) { email = ''; }
        if (location === void 0) { location = new __WEBPACK_IMPORTED_MODULE_0__common_info__["a" /* LocationInfo */](); }
        if (companyName === void 0) { companyName = ''; }
        if (CompletedRegistrationDate === void 0) { CompletedRegistrationDate = new Date(); }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (profilePic === void 0) { profilePic = ''; }
        if (verified === void 0) { verified = true; }
        if (description === void 0) { description = ''; }
        if (phone === void 0) { phone = 0; }
        if (settings === void 0) { settings = new Setting(); }
        if (profileBackgroundMedia === void 0) { profileBackgroundMedia = [new __WEBPACK_IMPORTED_MODULE_0__common_info__["b" /* Media */]()]; }
        if (isEmail === void 0) { isEmail = new EmailValid(); }
        if (isAdmin === void 0) { isAdmin = false; }
        if (isActive === void 0) { isActive = true; }
        if (completedRegistration === void 0) { completedRegistration = false; }
        this._id = _id;
        this.email = email;
        this.location = location;
        this.companyName = companyName;
        this.CompletedRegistrationDate = CompletedRegistrationDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePic = profilePic;
        this.verified = verified;
        this.description = description;
        this.phone = phone;
        this.settings = settings;
        this.profileBackgroundMedia = profileBackgroundMedia;
        this.isEmail = isEmail;
        this.isAdmin = isAdmin;
        this.isActive = isActive;
        this.completedRegistration = completedRegistration;
    }
    return UserInfo;
}());

var Setting = (function () {
    function Setting(phoneViewPermission, locationViewPermission, summaryEmail, offerNotifications, orderNotifications, generalNotifications) {
        if (phoneViewPermission === void 0) { phoneViewPermission = ''; }
        if (locationViewPermission === void 0) { locationViewPermission = ''; }
        if (summaryEmail === void 0) { summaryEmail = ''; }
        if (offerNotifications === void 0) { offerNotifications = ''; }
        if (orderNotifications === void 0) { orderNotifications = ''; }
        if (generalNotifications === void 0) { generalNotifications = ''; }
        this.phoneViewPermission = phoneViewPermission;
        this.locationViewPermission = locationViewPermission;
        this.summaryEmail = summaryEmail;
        this.offerNotifications = offerNotifications;
        this.orderNotifications = orderNotifications;
        this.generalNotifications = generalNotifications;
    }
    return Setting;
}());

var EmailValid = (function () {
    function EmailValid(invalid, spam, bounced, valid) {
        if (invalid === void 0) { invalid = false; }
        if (spam === void 0) { spam = false; }
        if (bounced === void 0) { bounced = false; }
        if (valid === void 0) { valid = true; }
        this.invalid = invalid;
        this.spam = spam;
        this.bounced = bounced;
        this.valid = valid;
    }
    return EmailValid;
}());

var UserServiceInfo = (function () {
    function UserServiceInfo(service, numOrders, avgRating, pointValue) {
        if (service === void 0) { service = new __WEBPACK_IMPORTED_MODULE_0__common_info__["c" /* ServiceInfo */](); }
        if (numOrders === void 0) { numOrders = 0; }
        if (avgRating === void 0) { avgRating = 0; }
        if (pointValue === void 0) { pointValue = 0; }
        this.service = service;
        this.numOrders = numOrders;
        this.avgRating = avgRating;
        this.pointValue = pointValue;
    }
    return UserServiceInfo;
}());



/***/ }),

/***/ "../../../../../src/app/routes/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-12 padding-80\" style=\"background-color:rgb(249,249,249)\">\n\n  <div id=\"index_main\" class=\"col-xs-12 col-md-12 padding-0 color-bg-white div-white-box-shadow\" style=\"border:1px solid #e4e4e4;\">\n\n    <div id=\"index_panel_top\" class=\"col-md-12 col-sm-12 col-xs-12 padding-0\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n      <div class=\"col-xs-12 col-sm-4 col-md-3 padding-0\">\n\n        <div class=\"col-xs-12 col-md-12 padding-21 padding-bottom-12\">\n\n          <h4 class=\"color-text-black font-weight-600 display-inlineBlock\">Messages</h4>\n          <i class=\"fa fa-edit color-mediumgray pull-right font-px-22 padding-top-10\"></i>\n\n        </div>\n\n      </div>\n\n\n      <div class=\"col-xs-12 col-sm-4 col-md-6 padding-21 padding-bottom-12\" style=\"border-right:1px solid #e4e4e4; border-left:1px solid #e4e4e4;\">\n\n        <div class=\"col-md-1 col-xs-4 padding-0\">\n          <img src=\"assets/images/icons/post_profile.png\" class=\"display-inlineBlock border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n        </div>\n\n        <div class=\"col-md-9 col-xs-8 margin-top-2 padding-left-10\">\n          <p class=\"color-text-black font-weight-300 font-px-14 margin-bottom-0 margin-right-5\">Peter Holms</p>\n          <p class=\"color-gray font-weight-300 font-px-12 margin-bottom-0 margin-top-0\">Last seen 29 mins ago</p>\n        </div>\n\n      </div>\n\n\n      <div class=\"col-xs-12 col-sm-4 col-md-3 padding-21 padding-bottom-12\">\n        <h4 class=\"color-text-black font-weight-600 display-inlineBlock\">Actions</h4>\n        <i data-toggle=\"dropdown\" class=\"dropdown dropdown-toggle fa fa-bars color-mediumgray pull-right font-px-22 padding-top-10\"></i>\n\n        <ul class=\"dropdown-menu pull-right\">\n          <li class=\"padding-top-5 padding-bottom-5\" onclick=\"return change_rightPanelContent('sendService');\"><a href=\"#\">Send Service</a></li>\n          <li class=\"padding-top-5 padding-bottom-5\" onclick=\"return change_rightPanelContent('sendCustomOffer');\"><a href=\"#\">Send Custom Offer</a></li>\n          <li class=\"padding-top-5 padding-bottom-5\" onclick=\"return change_rightPanelContent('requestOffer');\"><a href=\"#\">Request Offer</a></li>\n        </ul>\n\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class=\"col-xs-12 col-md-12 padding-0\">\n\n      <div id=\"index_panel_left\" class=\"col-xs-12 col-md-3 padding-0\">\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n          <div class=\"col-xs-12 col-md-12 padding-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n            <div class=\"col-md-3 col-xs-3 padding-0 padding-top-3 text-left\">\n              <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n              <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-7 col-xs-7 padding-0\">\n              <p class=\"color-blue font-weight-600 margin-bottom-0\">Peter Holms (2)</p>\n              <p class=\"color-text-black margin-bottom-0 font-em-09\">Recent message</p>\n            </div>\n\n            <div class=\"col-md-2 col-xs-2 padding-0\">\n              <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n          <div class=\"col-xs-12 col-md-12 padding-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n            <div class=\"col-md-3 col-xs-3 padding-0 padding-top-3 text-left\">\n              <img src=\"assets/images/icons/online1.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n              <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-7 col-xs-7 padding-0\">\n              <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n              <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n            </div>\n\n            <div class=\"col-md-2 col-xs-2 padding-0\">\n              <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n          <div class=\"col-xs-12 col-md-12 padding-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n            <div class=\"col-md-3 col-xs-3 padding-0 padding-top-3 text-left\">\n              <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n              <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-7 col-xs-7 padding-0\">\n              <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n              <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n            </div>\n\n            <div class=\"col-md-2 col-xs-2 padding-0\">\n              <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-0\">\n\n          <div class=\"col-xs-12 col-md-12 padding-15\" style=\"border-bottom:1px solid #e4e4e4;\">\n\n            <div class=\"col-md-3 col-xs-3 padding-0 padding-top-3 text-left\">\n              <img src=\"assets/images/icons/offline.png\" class=\"border-radius-50-p margin-right-5\" width=\"10px\" height=\"10px\" alt=\"\">\n              <img src=\"assets/images/myprofile.png\" width=\"32px\" height=\"32px\" class=\"border-radius-50p\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-7 col-xs-7 padding-0\">\n              <p class=\"color-darkgray margin-bottom-0\">Peter Holms</p>\n              <p class=\"color-gray margin-bottom-0 font-em-09\">Recent message</p>\n            </div>\n\n            <div class=\"col-md-2 col-xs-2 padding-0\">\n              <p class=\"color-gray pull-right font-em-09\">Sep 25</p>\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n      <div id=\"index_sidepanel_middle\" class=\"col-xs-12 col-sm-4 col-md-6 padding-0\" style=\"min-height:500px; border-right:1px solid #e4e4e4; border-left:1px solid #e4e4e4;\">\n\n        <div id=\"messages\" class=\"col-xs-12 col-md-12 padding-0 padding-bottom-70\">\n\n          <div class=\"col-xs-12 col-md-12 chat_message width-400-px margin-top-40\">\n\n            <div class=\"col-md-4 col-xs-4 text-right padding-top-3\">\n              <img src=\"assets/images/icons/post_profile.png\" class=\"display-inlineBlock border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-8 col-xs-8 margin-top-5 padding-0\">\n\n              <div class=\"col-xs-12 col-md-12 padding-top-6 padding-bottom-6\" style=\"border-radius:3px; background-color:#F0F0F3;\">\n                <p class=\"color-text-black font-weight-300 font-px-14 margin-bottom-0\">Do you dog sitting ?</p>\n              </div>\n\n              <div class=\"col-xs-12 col-md-12 padding-0\">\n                <p class=\"color-gray font-weight-300 font-px-10 margin-0 margin-top-5\">May 15 2017 8:33PM</p>\n              </div>\n\n            </div>\n\n          </div>\n\n\n          <div class=\"col-xs-12 col-md-12 chat_message width-400-px margin-top-40\" style=\"float:right;\">\n\n            <div class=\"col-md-8 col-xs-8 margin-top-8 padding-0\">\n\n              <div class=\"col-xs-12 col-md-12 padding-top-6 padding-bottom-6 div-white-box-shadow-3\" style=\"border-radius:3px; background-color:#FFF;\">\n                <p class=\"color-text-black font-weight-300 font-px-14 margin-bottom-0\">Do you dog sitting ?</p>\n              </div>\n\n              <div class=\"col-xs-12 col-md-12 padding-0 text-right\">\n                <img src=\"assets/images/icons/message_seen.png\" alt=\"\">\n                <p class=\"display-inlineBlock color-gray font-weight-300 font-px-10 margin-0 margin-top-5 text-right\">May 15 2017 8:33PM</p>\n              </div>\n\n            </div>\n\n\n            <div class=\"col-md-4 col-xs-4 text-left padding-top-3\">\n              <img src=\"assets/images/icons/post_profile.png\" class=\"display-inlineBlock border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n            </div>\n\n          </div>\n\n\n          <div class=\"col-xs-12 col-md-12 chat_message width-400-px margin-top-40\">\n\n            <div class=\"col-md-4 col-xs-4 text-right padding-top-3\">\n              <img src=\"assets/images/icons/post_profile.png\" class=\"display-inlineBlock border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n            </div>\n\n            <div class=\"col-md-8 col-xs-8 margin-top-5 padding-0\">\n\n              <div class=\"col-xs-12 col-md-12 padding-top-6 padding-bottom-6\" style=\"border-radius:3px; background-color:#F0F0F3;\">\n                <p class=\"color-text-black font-weight-300 font-px-14 margin-bottom-0\">Do you dog sitting ?</p>\n              </div>\n\n              <div class=\"col-xs-12 col-md-12 padding-0\">\n                <p class=\"color-gray font-weight-300 font-px-10 margin-0 margin-top-5\">May 15 2017 8:33PM</p>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"col-xs-12 col-md-12 width-500-px chat_message margin-top-40\" style=\"float:right;\">\n\n            <div class=\"col-md-8 col-xs-8 text-left width-350-px div-white-box-shadow-3 padding-15 dispaly-inleBlock\" style=\"position:relative; min-height:140px;\">\n\n              <div class=\"width-110-px text-left display-inlineBlock\" style=\"position:absolute; top:15px;\">\n                <img src=\"assets/images/chat.png\" class=\"display-inlineBlock\" width=\"110px\" height=\"110px\" alt=\"\">\n              </div>\n\n              <div class=\"padding-6 display-inlineBlock float-left text-center\" style=\"position:absolute; top:15px; left:130px;\">\n                <p class=\"color-darkgray font-weight-300 font-px-14 margin-bottom-0 text-left\">Dog Waliking Service</p>\n                <p class=\"color-gray font-weight-300 font-px-10 margin-0 margin-top-5 font-px-12 margin-bottom-5\">San Jose, CA, 22km by Jhone deo</p>\n\n                <p class=\"color-gray display-inlineBlock pull-left font-px-14\">\n                  <img src=\"assets/images/p.png\" alt=\"\">\n                  234\n                </p>\n\n                <p class=\"color-gray display-inlineBlock text-center font-px-14\">\n                  <i class=\"fa fa-briefcase color-mediumgray\"></i>\n                  23\n                </p>\n\n                <p class=\"color-gray display-inlineBlock pull-right font-px-14\">\n                  <i class=\"fa fa-star color-mediumgray\"></i>\n                  96%\n                </p>\n\n                <p class=\"text-left\">\n                  <a href=\"\" class=\"display-inline padding-6 padding-left-15 padding-right-15 bg-blue color-text-white font-px-12\" style=\"border-radius: 12px;\">\n                  $24/hr - BUY NOW\n                  </a>\n                </p>\n\n\n              </div>\n\n            </div>\n\n\n            <div class=\"col-xs-4 col-md-3 text-left padding-top-3 dispaly-inleBlock\">\n              <img src=\"assets/images/icons/post_profile.png\" class=\"display-inlineBlock border-radius-50-p\" width=\"44px\" height=\"44px\" alt=\"\">\n            </div>\n\n\n            <div class=\"col-xs-12 col-md-12 padding-0 text-left\">\n              <img src=\"assets/images/icons/message_seen.png\" alt=\"\">\n              <p class=\"color-gray font-weight-300 font-px-10 margin-0 margin-top-5 display-inlineBlock\">May 15 2017 8:33PM</p>\n            </div>\n\n          </div>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-15\" style=\"background-color:#F0F0F3;\">\n\n          <div class=\"width-500-px padding-0 margin-left-right-auto\" style=\"position:relative;\">\n            <input id=\"message_box\" type=\"text\" class=\"width-100-p form-control\" onkeyup=\"append_msg(this);\" placeholder=\"Write a message ...\">\n            <span style=\"position:absolute; right:15px; top:0px;\">\n              <i class=\"fa fa-smile-o font-px-24 color-gray margin-5\"></i>\n              <i class=\"fa fa-paperclip font-px-22 color-gray margin-5\"></i>\n            </span>\n          </div>\n\n        </div>\n\n\n      </div>\n\n\n      <div id=\"index_sidepanel_right\" class=\"col-xs-12 col-sm-4 col-md-3 padding-0\">\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10\" style=\"background-color:#F0F0F3;\">\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-left-10\">Orders</p>\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-right-10 pull-right font-em-09 margin-top-3\">2 active</p>\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10 padding-left-20\" style=\"\">\n\n          <p class=\"color-darkgray margin-0\">\n            <span class=\"display-inline\">\n              <span>Dog Walk Service</span>\n              <span class=\"pull-right margin-right-10\">$50</span>\n            </span>\n          </p>\n\n          <p class=\"color-gray margin-0 font-em-09 margin-top-5\">\n            <i class=\"fa fa-map-marker\"></i>\n            <span>Sans Jose, CA, 22 km</span>\n          </p>\n\n          <p class=\"color-blue margin-0  font-em-09 margin-top-5\">\n            Start Service, 11/08 | 8PM\n          </p>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10 margin-top-12\" style=\"background-color:#F0F0F3;\">\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-left-10\">Offers</p>\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-right-10 pull-right font-em-09 margin-top-3\">3 active</p>\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10 padding-left-20\" style=\"\">\n\n          <p class=\"color-darkgray margin-0\">\n            <span class=\"display-inline\">\n              <span>Dog Walk for 1 hour</span>\n              <span class=\"pull-right margin-right-10\">$50</span>\n            </span>\n          </p>\n\n          <p class=\"color-gray margin-0 font-em-09 margin-top-5\">\n            <i class=\"fa fa-map-marker\"></i>\n            <span>Sans Jose, CA, 22 km</span>\n          </p>\n\n          <p class=\"color-blue margin-0  font-em-09 margin-top-5\">\n            Expires on 11/02\n          </p>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10 margin-top-12\" style=\"background-color:#F0F0F3;\">\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-left-10\">Request</p>\n          <p class=\"color-darkgray display-inlineBlock margin-0 margin-right-10 pull-right font-em-09 margin-top-3\">1 active</p>\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 padding-10 padding-left-20\" style=\"\">\n\n          <p class=\"color-darkgray margin-0\">\n            <span class=\"display-inline\">\n              <span>Looking for Dog Walk</span>\n              <span class=\"pull-right margin-right-10\">$50</span>\n            </span>\n          </p>\n\n          <p class=\"color-gray margin-0 font-em-09 margin-top-5\">\n            <i class=\"fa fa-map-marker\"></i>\n            <span>Sans Jose, CA, 22 km</span>\n          </p>\n\n          <p class=\"color-blue margin-0  font-em-09 margin-top-5\">\n            Expires on 11/02\n          </p>\n\n        </div>\n\n\n        <div class=\"col-xs-12 col-md-12 margin-top-120 margin-bottom-10\">\n\n          <p class=\"text-color-black font-weight-600 margin-bottom-5 text-center\">Quick Send:</p>\n          <p class=\"color-blue font-weight-600 text-center\">Service | Offer | Request</p>\n\n        </div>\n\n\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/routes/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__("../../../../../src/app/services/conversation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = (function () {
    function ChatComponent(activatedRoute, conversationService) {
        this.activatedRoute = activatedRoute;
        this.conversationService = conversationService;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.conversations = data.conversations;
        });
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/routes/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes/chat/chat.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_conversation_service__ = __webpack_require__("../../../../../src/app/services/conversation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatResolver = (function () {
    function ChatResolver(conversationService, router) {
        this.conversationService = conversationService;
        this.router = router;
    }
    ChatResolver.prototype.resolve = function (route, state) {
        return this.conversationService.get();
    };
    ChatResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_conversation_service__["a" /* ConversationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], ChatResolver);
    return ChatResolver;
}());



/***/ }),

/***/ "../../../../../src/app/routes/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/routes/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/routes/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_gapi__ = __webpack_require__("../../../../ng-gapi/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, fb, googleAuth) {
        this.http = http;
        this.fb = fb;
        this.googleAuth = googleAuth;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
        this.token = localStorage.getItem('token');
        if (this.token)
            this.isLoggedIn = true;
        else
            this.isLoggedIn = false;
        var initParams = {
            appId: __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].FACEBOOK_APP_ID,
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(initParams);
    }
    AuthService.prototype.signin = function (email, password) {
        var _this = this;
        var url = this.apiUrl + "user/login";
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, { email: email, password: password }, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            var token = res.token;
            _this.token = token;
            _this.isLoggedIn = true;
            localStorage.setItem('token', token);
            return token;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    AuthService.prototype.signout = function () {
        this.token = '';
        this.isLoggedIn = false;
        var url = this.apiUrl + "user/logout";
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.token
            })
        };
        return this.http.post(url, {}, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        var url = this.apiUrl + "user/signup";
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, { email: email, password: password }, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            var id = res.id, token = res.token;
            _this.id = id;
            _this.token = token;
            _this.isLoggedIn = true;
            localStorage.setItem('token', token);
            return token;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    AuthService.prototype.forgotPassword = function (email) {
        console.log(email);
    };
    AuthService.prototype.signupWithGoogle = function () {
        console.log('signup with google');
    };
    AuthService.prototype.signupWithFB = function () {
        console.log('signup with facebook');
    };
    AuthService.prototype.googleSignin = function (successHandler) {
        return this.googleAuth.getAuth()
            .subscribe(function (auth) {
            return auth.signIn()
                .then(function (res) { return successHandler(res); })
                .catch(function (err) { return console.error(err); });
        });
    };
    AuthService.prototype.fbSignin = function (successHandler) {
        this.fb.login()
            .then(function (response) { return successHandler(response); })
            .catch(function (err) { return console.error(err); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_5_ng_gapi__["b" /* GoogleAuthService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/buy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @description
 * @class
 */
var BuyService = (function () {
    function BuyService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    BuyService.prototype.getSellers = function () {
        var url = this.apiUrl + "orders/buy";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    BuyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BuyService);
    return BuyService;
}());



/***/ }),

/***/ "../../../../../src/app/services/conversation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConversationService = (function () {
    function ConversationService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
    }
    ConversationService.prototype.get = function () {
        var _this = this;
        var url = this.apiUrl + "conversations";
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.authService.token
            })
        };
        return this.http.get(url, httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            _this.conversations = res;
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    ConversationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], ConversationService);
    return ConversationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/like.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LikeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @description
 * @class
 */
var LikeService = (function () {
    function LikeService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    LikeService.prototype.getLike = function () {
        var url = this.apiUrl + "services/liked";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    LikeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LikeService);
    return LikeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sell.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @description
 * @class
 */
var SellService = (function () {
    function SellService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    SellService.prototype.getBuyers = function () {
        var url = this.apiUrl + "orders/sell";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    SellService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SellService);
    return SellService;
}());



/***/ }),

/***/ "../../../../../src/app/services/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceService = (function () {
    function ServiceService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    ServiceService.prototype.insertService = function (body) {
        var url = this.apiUrl + "service";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        console.log(JSON.stringify(body));
        return this.http.post(url, JSON.stringify(body), this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    ServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @description
 * @class
 */
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.getUser = function () {
        var url = this.apiUrl + "user";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    UserService.prototype.getServices = function () {
        var url = this.apiUrl + "services";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/watching.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * @description
 * @class
 */
var WatchingService = (function () {
    function WatchingService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
    }
    WatchingService.prototype.getWatching = function () {
        var url = this.apiUrl + "services/watching";
        this.token = localStorage.getItem('token');
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token })
        };
        return this.http.get(url, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* tap */])(function (res) {
            return res;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(__assign({ status: err.status }, err.error)); }));
    };
    WatchingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WatchingService);
    return WatchingService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    // apiUrl: 'http://localhost:9000/',
    apiUrl: 'http://pointters-api-dev3.us-east-1.elasticbeanstalk.com:9000/',
    FACEBOOK_APP_ID: '416777308737024',
    GOOGLE_OAUTH_CLIENT_ID: '674677196199-itn0o2o6bs09i6h4kjul5q8knoft2rfu.apps.googleusercontent.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map