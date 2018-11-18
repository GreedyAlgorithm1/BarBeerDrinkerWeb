(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var _verify_details_verify_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./verify-details/verify-details.component */ "./src/app/verify-details/verify-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'static',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bars_bars_component__WEBPACK_IMPORTED_MODULE_10__["BarsComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_7__["DrinkersComponent"]
    },
    {
        path: 'modifications',
        pathMatch: 'full',
        component: _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_8__["ModificationsComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_9__["DrinkerDetailsComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"]
    },
    {
        path: 'verify',
        pathMatch: 'full',
        component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_11__["VerifyComponent"]
    },
    {
        path: 'verify/:queryNo',
        pathMatch: 'full',
        component: _verify_details_verify_details_component__WEBPACK_IMPORTED_MODULE_12__["VerifyDetailsComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/bars\">Bars</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink = \"/beers\">Beers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink = \"/insight\">Insight</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink = \"/modifications\">Modifications</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink = \"/verify\">Verify</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'barbeerdrinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modifications/modifications.component */ "./src/app/modifications/modifications.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var _verify_details_verify_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./verify-details/verify-details.component */ "./src/app/verify-details/verify-details.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__["BeerDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_13__["DrinkersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_14__["InsightComponent"],
                _modifications_modifications_component__WEBPACK_IMPORTED_MODULE_15__["ModificationsComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_16__["DrinkerDetailsComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_17__["VerifyComponent"],
                _verify_details_verify_details_component__WEBPACK_IMPORTED_MODULE_18__["VerifyDetailsComponent"],
                _bars_bars_component__WEBPACK_IMPORTED_MODULE_19__["BarsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\" >{{barId}} | {{barDetails?.name}}</h1>\r\n    <p class=\"bar-details\" *ngIf = \"barDetails\">\r\n    \t{{ barDetails?.addr }} <span *ngIf = \"barDetails.addr &&  barDetails.state\"> | </span> {{barDetails?.state}}\r\n    \t<br>\r\n    \t{{barDetails?.phone}}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n\t<h2 class = \"text-center font-weight-light\"> Beer </h2>\r\n\t<br>\r\n\t<p-table [value] = \"menu\">\r\n\t\t<ng-template pTemplate = \"header\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Beer</th>\r\n\t\t\t\t<th>Manufacturer</th>\r\n\t\t\t\t<th>Price</th>\r\n\t\t\t\t<th>Liked</th>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template pTemplate = \"body\" let-item>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<a routerLink = \"/beers/ {{ item.beer }}\">\r\n\t\t\t\t\t\t{{item.beer}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</td>\r\n                <td>{{ item.manf }}</td>\r\n                <td>{{ item.price | currency }}</td>\r\n                <td>{{ item.liked }}</td>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\t</p-table>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\">\r\n\t<h2 class = \"text-center font-weight-light\"> Menu </h2>\r\n\t<br>\r\n\t<p-table [value] = \"foodMenu\">\r\n\t\t<ng-template pTemplate = \"header\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Item</th>\r\n\t\t\t\t<th>Price</th>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template pTemplate = \"body\" let-item2>\r\n\t\t\t<tr>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<a routerLink = \"/items/ {{ item2.item }}\">\r\n\t\t\t\t\t\t{{item2.item}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</td>\r\n                <td>{{ item2.price | currency}}</td>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\t</p-table>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.barId = +paramMap.get('bar');
            barService.getBar(_this.barId).subscribe(function (data) {
                console.log(data);
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found.');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error has occurred on the server. Please check browser console.');
                }
            });
            barService.getMenu(_this.barId).subscribe(function (data) {
                _this.menu = data;
            });
            barService.getFoodMenu(_this.barId).subscribe(function (data) {
                _this.foodMenu = data;
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getBarsSellingBeers = function () {
        return this.http.get('/api/getBarsSellingBeers');
    };
    BarsService.prototype.getBarsSellingItems = function () {
        return this.http.get('/api/getBarsSellingItems');
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getFoodMenu = function (bar) {
        return this.http.get('/api/menu2/' + bar);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bars/bars.component.css":
/*!*****************************************!*\
  !*** ./src/app/bars/bars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnMvYmFycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bars/bars.component.html":
/*!******************************************!*\
  !*** ./src/app/bars/bars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Welcome to the list Bars!</h1>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<div class = \"container\">\r\n\t<p-table [value] = \"bars\">\r\n\t\t<ng-template pTemplate=\"header\">\r\n\t\t\t<tr>\r\n\t\t\t\t<th>Id</th>\r\n\t\t\t\t<th>Name</th>\r\n\t\t\t\t<th>State</th>\r\n\t\t\t\t<th>Open</th>\r\n\t\t\t\t<th>Close</th>\r\n\t\t\t\t<th>License</th>\r\n\t\t\t\t<th>Phone</th>\r\n\t\t\t\t<th>Address</th>\r\n\t\t\t</tr>\r\n\t\t</ng-template>\r\n\t\t\r\n\t\t<ng-template pTemplate=\"body\" let-bar>\r\n\t\t\t<tr>\r\n\t\t\t  <td> \r\n\t\t\t  \t<a routerLink = \"/bars/{{bar.id}}\">\r\n\t\t\t  \t\t{{bar.id}}\r\n\t\t\t  \t</a>\r\n\t\t\t  \r\n\t\t\t\t</td>\r\n\t\t\t\t<td>{{ bar.name }}</td>\r\n\t\t\t\t<td>{{ bar.state }}</td>\r\n\t\t\t\t<td>{{ bar.open }}</td>\r\n\t\t\t\t<td>{{ bar.close }}</td>\r\n\t\t\t\t<td>{{ bar.license }}</td>\r\n\t\t\t\t<td>{{ bar.phone }}</td>\r\n\t\t\t\t<td>{{ bar.addr }}</td>\r\n\t\t  </tr>\r\n\r\n\t\t</ng-template>\r\n\t\t\r\n\t</p-table>\r\n</div>\r\n<br><br>\r\n"

/***/ }),

/***/ "./src/app/bars/bars.component.ts":
/*!****************************************!*\
  !*** ./src/app/bars/bars.component.ts ***!
  \****************************************/
/*! exports provided: BarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsComponent", function() { return BarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsComponent = /** @class */ (function () {
    function BarsComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    BarsComponent.prototype.ngOnInit = function () {
    };
    BarsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve a list of bars');
        });
    };
    BarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bars',
            template: __webpack_require__(/*! ./bars.component.html */ "./src/app/bars/bars.component.html"),
            styles: [__webpack_require__(/*! ./bars.component.css */ "./src/app/bars/bars.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarsComponent);
    return BarsComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-count{\r\n\tfont-size: 1.75rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb3VudHtcclxuXHRmb250LXNpemU6IDEuNzVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">{{ beerName }}</h1>\r\n    <p class=\"beer-details\" *ngIf=\"manufacturer\">\r\n      Made by <i>{{ manufacturer }}</i>\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class = \"container\">\r\n\t<br>\r\n\t<div>\r\n\t\t<span class =\"font-weight-light result-count\"> Sold at {{beerLocations?.length}}</span>\r\n    <p-dropdown class=\"float-right text-left\" *ngIf=\"filterOptions\" [options] = \"filterOptions\" (onChange) = \"sortBy($event.value)\">\r\n      \r\n    </p-dropdown>\r\n\t</div>\r\n\t<br>\r\n\t<p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"price\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n      \t<th>Bar ID</th>\r\n        <th>Bar Name</th>\r\n        <th>Price</th>\r\n        <th>Customers</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-bar>\r\n      <tr>\r\n        <td>\r\n          <a routerLink=\"/bars/{{ bar.id }}\">\r\n            {{ bar.id }}\r\n          </a>\r\n          </td>\r\n        <td>{{ bar.bar}}</td>\r\n        <td>{{ bar.price | currency }}</td>\r\n        <td>{{ bar.customers }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n\r\n"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            _this.beerService.getBeerManufacturers(_this.beerName).subscribe(function (data) {
                _this.manufacturer = data;
                console.log(data);
            });
            _this.filterOptions = [
                {
                    'label': 'Low > High',
                    'value': 'low price'
                },
                {
                    'label': 'High > Low',
                    'value': 'high price'
                },
                {
                    'label': 'Most frequented',
                    'value': 'high customer'
                },
                {
                    'label': 'Least frequented',
                    'value': 'low customer'
                }
            ];
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sortBy = function (selectedOption) {
        if (selectedOption === 'low price') {
            this.beerLocations.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        else if (selectedOption === 'high price') {
            this.beerLocations.sort(function (a, b) {
                return b.price - a.price;
            });
        }
        else if (selectedOption === 'low customer') {
            this.beerLocations.sort(function (a, b) {
                return a.customers - b.customers;
            });
        }
        else if (selectedOption === 'high customer') {
            this.beerLocations.sort(function (a, b) {
                return b.customers - a.customers;
            });
        }
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get('/api/bars-selling/' + beer);
    };
    BeersService.prototype.getBeerManufacturers = function (beer) {
        if (beer) {
            return this.http.get('/api/beer-manufacturer/' + beer);
        }
        return this.http.get('/api/beer-manufacturer');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Find your favorite beers!</h1>\n    <p class=\"lead\">This page can be used to see all the beers in our system or just the ones by your preferred\n      manufacturer.</p>\n    <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n      placeholder=\"Filter by manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\"\n      (onChange)=\"filterBeers($event.value)\">\n      </p-dropdown>\n  </div>\n</div>\n<br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Beers</h2>\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.name }}\">{{ beer.name }}</a></td>\n        <td>{{ beer.manf }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
            _this.originalBeersList = data;
        });
        this.beerService.getBeerManufacturers().subscribe(function (data) {
            _this.manufacturerOptions = data.map(function (manf) {
                return {
                    label: manf,
                    value: manf,
                };
            });
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.filterBeers = function (manufacturer) {
        this.beers = this.originalBeersList;
        if (manufacturer) {
            this.beers = this.originalBeersList.filter(function (beer) { return beer.manf === manufacturer; });
        }
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/bills-transactions.service.ts":
/*!***********************************************!*\
  !*** ./src/app/bills-transactions.service.ts ***!
  \***********************************************/
/*! exports provided: BillsTransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsTransactionsService", function() { return BillsTransactionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillsTransactionsService = /** @class */ (function () {
    function BillsTransactionsService(http) {
        this.http = http;
    }
    BillsTransactionsService.prototype.getBills = function () {
        return this.http.get('/api/bills');
    };
    BillsTransactionsService.prototype.getTransactions = function () {
        return this.http.get('/api/transactions');
    };
    BillsTransactionsService.prototype.getDrinkersBills = function (drinker_id) {
        return this.http.get('/api/bills/' + drinker_id);
    };
    BillsTransactionsService.prototype.getDrinkersTransactions = function (drinker_id) {
        return this.http.get('/api/transactions/' + drinker_id);
    };
    BillsTransactionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BillsTransactionsService);
    return BillsTransactionsService;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-3\">{{ drinkerId }}</h1>\r\n    <h2 class=\"display-4\">{{ drinkerName }} | {{drinkerDetails?.state}}</h2>\r\n    <p class=\"drinker-details\" *ngIf = \"drinkerDetails\">\r\n    \t{{ drinkerDetails?.address }} <span *ngIf = \"drinkerDetails.address &&  drinkerDetails.state\"> | </span> {{drinkerDetails?.phone}}\r\n    </p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n    <br>\r\n    <div id=\"drinkergraph\">\r\n    </div>\r\n  </div>\r\n\r\n<br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Transactions </h2>\r\n  <br>\r\n  <p-table [value] = \"transactions\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Transaction ID</th>\r\n        <th>Bar ID</th>\r\n        <th>Drinker ID</th>\r\n        <th>Subtotal</th>\r\n        <th>Tax</th>\r\n        <th>Tip</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-transaction>\r\n      <tr>\r\n\r\n        <!----\r\n        <td> \r\n        <a routerLink = \"/drinkers/{{drinker.id}}\">\r\n          {{transaction.id}}\r\n        </a>\r\n        </td>\r\n        ---->\r\n\r\n        <td>{{ transaction.tid }}</td>\r\n        <td>\r\n          <a routerLink=\"/bars/{{ transaction.barId }}\">\r\n            {{ transaction.barId }}\r\n        </a>\r\n        </td>\r\n        <td>{{ transaction.drinkerId }}</td>\r\n        <td>{{ transaction.subtotal | currency}}</td>\r\n        <td>{{ transaction.tax | currency}}</td>\r\n        <td>{{ transaction.tip | currency}}</td>\r\n        <td>{{ transaction.total | currency}}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Bills </h2>\r\n  <br>\r\n  <p-table [value] = \"bills\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bill ID</th>\r\n        <th>Bar ID</th>\r\n        <th>Drinker ID</th>\r\n        <th>Time Issued</th>\r\n        <th>Item</th>\r\n        <th>Quantity</th>\r\n        <th>Price</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-bill>\r\n      <tr>\r\n\r\n        <!----\r\n        <td> \r\n        <a routerLink = \"/drinkers/{{drinker.id}}\">\r\n          {{drinker.id}}\r\n        </a>\r\n        </td>\r\n        --->\r\n        <td>{{ bill.billId }}</td>\r\n        <td>{{ bill.barId }}</td>\r\n        <td>{{ bill.drinkerId }}</td>\r\n        <td>{{ bill.timeIssued }}</td>\r\n        <td>\r\n          <a routerLink=\"/beers/{{ bill.item }}\">\r\n            {{ bill.item  }}\r\n          </a>\r\n        </td>\r\n        <td>{{ bill.quantity }}</td>\r\n        <td>{{ bill.price | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n </div>\r\n<br><br>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bills_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bills-transactions.service */ "./src/app/bills-transactions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, billsTransactionsService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.billsTransactionsService = billsTransactionsService;
        this.route = route;
        this.route.paramMap.subscribe(function (paraMap) {
            _this.drinkerId = +paraMap.get('drinker');
            _this.drinkerService.getDrinkersOrders(_this.drinkerId).subscribe(function (data) {
                console.log(data);
                var beers = [];
                var counts = [];
                data.forEach(function (order) {
                    beers.push(order.beer);
                    counts.push(order.beerCount);
                });
                _this.renderChart(beers, counts);
            });
            // was trying to see if I can assign a field and using it in the html
            _this.drinkerService.getDrinkerNameById(_this.drinkerId).subscribe(function (data) {
                _this.drinkerName = data;
                console.log(data);
            });
            _this.drinkerService.getDrinker(_this.drinkerId).subscribe(function (data) {
                _this.drinkerDetails = data;
                console.log(data);
            });
            _this.billsTransactionsService.getDrinkersTransactions(_this.drinkerId).subscribe(function (data) {
                _this.transactions = data;
                console.log(data);
            });
            _this.billsTransactionsService.getDrinkersBills(_this.drinkerId).subscribe(function (data) {
                _this.bills = data;
                console.log(data);
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    DrinkerDetailsComponent.prototype.renderChart = function (beers, counts) {
        Highcharts.chart('drinkergraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beers ordered'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount ordered'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"],
            _bills_transactions_service__WEBPACK_IMPORTED_MODULE_3__["BillsTransactionsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinkers.service.ts":
/*!*************************************!*\
  !*** ./src/app/drinkers.service.ts ***!
  \*************************************/
/*! exports provided: DrinkersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersService", function() { return DrinkersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersService = /** @class */ (function () {
    function DrinkersService(http) {
        this.http = http;
    }
    DrinkersService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkersService.prototype.getDrinker = function (drinker_id) {
        return this.http.get('/api/drinker/' + drinker_id);
    };
    DrinkersService.prototype.getDrinkerNameById = function (drinker_id) {
        return this.http.get('/api/drinkerNameById/' + drinker_id);
    };
    // Might have to be rewritted because database somehow gets the name but we dont have to send it in...
    DrinkersService.prototype.getDrinkerLikes = function (drinker) {
        return this.http.get('api/likes');
    };
    DrinkersService.prototype.getDrinkersLikingBeers = function () {
        return this.http.get('/api/getDrinkersLikingBeers');
    };
    DrinkersService.prototype.getDrinkersFrequentingBars = function () {
        return this.http.get('/api/getDrinkersFrequentingBars');
    };
    DrinkersService.prototype.getDrinkersOrders = function (drinker_id) {
        return this.http.get('/api/drinkersOrders/' + drinker_id);
    };
    DrinkersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkersService);
    return DrinkersService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n    <div class=\"container\">\r\n      <h1 class=\"display-4\">Welcome to the list of Drinkers!</h1>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n<div class = \"container\">\r\n    <p-table [value] = \"drinkers\" [loading]=\"loading\">\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>Id</th>\r\n          <th>Name</th>\r\n          <th>State</th>\r\n          <th>Phone</th>\r\n          <th>Address</th>\r\n        </tr>\r\n      </ng-template>\r\n      \r\n      <ng-template pTemplate=\"body\" let-drinker>\r\n        <tr>\r\n          <td> \r\n\r\n          <a routerLink = \"/drinkers/{{drinker.id}}\">\r\n            {{drinker.id}}\r\n          </a>\r\n\r\n          </td>\r\n          <td>{{ drinker.name }}</td>\r\n          <td>{{ drinker.state }}</td>\r\n          <td>{{ drinker.phone }}</td>\r\n          <td>{{ drinker.address }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n  <br><br>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkersService) {
        var _this = this;
        this.drinkersService = drinkersService;
        this.drinkersService.getDrinkers().subscribe(function (data) {
            console.log(data);
            _this.drinkers = data;
        }, function (error) {
            alert("Could not retrieve list of Drinkers.");
        });
    }
    DrinkersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinkers_service__WEBPACK_IMPORTED_MODULE_1__["DrinkersService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <div id=\"bargraph\"></div>\n</div>"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            console.log(data);
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.frequentCount);
            });
            _this.renderChart(bars, counts);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/modifications.service.ts":
/*!******************************************!*\
  !*** ./src/app/modifications.service.ts ***!
  \******************************************/
/*! exports provided: ModificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsService", function() { return ModificationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationsService = /** @class */ (function () {
    function ModificationsService(http) {
        this.http = http;
    }
    ModificationsService.prototype.getMod = function () {
        return this.http.get('/api/modifications/');
    };
    ModificationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationsService);
    return ModificationsService;
}());



/***/ }),

/***/ "./src/app/modifications/modifications.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modifications/modifications.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbnMvbW9kaWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modifications/modifications.component.html":
/*!************************************************************!*\
  !*** ./src/app/modifications/modifications.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">Table Modification</h1>\r\n    <p class=\"lead\">This page will allow you to update/insert/delete any table found within the database.\r\n    \t<br>\r\n    Please make sure to check out the relational schema!</p>\r\n    \t<br>    \r\n  </div>\r\n</div>\r\n\r\n<br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Beers </h2>\r\n  <br>\r\n  <p-table [value] = \"beers\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Beer ID</th>\r\n        <th>Name</th>\r\n        <th>Manufacturer</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-beer>\r\n      <tr>\r\n        <td>{{ beer.id  }}</td>\r\n        <td>\r\n          <a routerLink=\"/beers/{{ beer.name }}\">\r\n            {{ beer.name }}\r\n          </a>\r\n          </td>\r\n        <td>{{ beer.manf }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n\r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Bars </h2>\r\n  <br>\r\n  <p-table [value] = \"bars\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bar ID</th>\r\n        <th>Name</th>\r\n        <th>State</th>\r\n        <th>Open Hours</th>\r\n        <th>Close Hours</th>\r\n        <th>License</th>\r\n        <th>Phone</th>\r\n        <th>Address</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-bar>\r\n      <tr>\r\n        <td>\r\n          <a routerLink=\"/bars/{{ bar.id }}\">\r\n            {{ bar.id }}\r\n          </a>\r\n        </td>\r\n        <td>{{ bar.name }}</td>\r\n        <td>{{ bar.state }}</td>\r\n        <td>{{ bar.open }}</td>\r\n        <td>{{ bar.close }}</td>\r\n        <td>{{ bar.license }}</td>\r\n        <td>{{ bar.phone }}</td>\r\n        <td>{{ bar.addr }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Drinkers </h2>\r\n  <br>\r\n  <p-table [value] = \"drinkers\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Drinker ID</th>\r\n        <th>Name</th>\r\n        <th>State</th>\r\n        <th>Phone</th>\r\n        <th>Address</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-drinker>\r\n      <tr>\r\n        <td>{{ drinker.id }}</td>\r\n        <td>{{ drinker.name }}</td>\r\n        <td>{{ drinker.state }}</td>\r\n        <td>{{ drinker.phone }}</td>\r\n        <td>{{ drinker.address }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n\r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Drinkers Frequenting Bars </h2>\r\n  <br>\r\n  <p-table [value] = \"frequents\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Drinker ID</th>\r\n        <th>Drinker Name</th>\r\n        <th>Bar ID</th>\r\n        <th>Bar Name</th>\r\n        <th>State</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-frequenter>\r\n      <tr>\r\n        <td>{{ frequenter.drinkerId }}</td>\r\n        <td>{{ frequenter.drinker }}</td>\r\n        <td>{{ frequenter.barId }}</td>\r\n        <td>{{ frequenter.bar }}</td>\r\n        <td>{{ frequenter.state }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n  \r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Drinker Likes Beer </h2>\r\n  <br>\r\n  <p-table [value] = \"likes\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Drinker ID</th>\r\n        <th>Drinker Name</th>\r\n        <th>Beer Name</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-beerLiker>\r\n      <tr>\r\n        <td>{{ beerLiker.id }}</td>\r\n        <td>{{ beerLiker.drinker }}</td>\r\n        <td>{{ beerLiker.beer }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n    \r\n  <br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Bars Selling Beers </h2>\r\n  <br>\r\n  <p-table [value] = \"sellsBeers\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bar ID</th>\r\n        <th>Bar Name</th>\r\n        <th>Beer Name</th>\r\n        <th>Price</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-sellsBeer>\r\n      <tr>\r\n        <td>{{ sellsBeer.id }}</td>\r\n        <td>{{ sellsBeer.bar }}</td>\r\n        <td>{{ sellsBeer.beer }}</td>\r\n        <td>{{ sellsBeer.price | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n    \r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> Bars Selling Items </h2>\r\n  <br>\r\n  <p-table [value] = \"sellsItems\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bar ID</th>\r\n        <th>Bar Name</th>\r\n        <th>Item Name</th>\r\n        <th>Price</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-sellsItem>\r\n      <tr>\r\n        <td>{{ sellsItem.id }}</td>\r\n        <td>{{ sellsItem.bar }}</td>\r\n        <td>{{ sellsItem.item }}</td>\r\n        <td>{{ sellsItem.price | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n    \r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> All Transactions </h2>\r\n  <br>\r\n  <p-table [value] = \"transactions\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Transaction ID</th>\r\n        <th>Bar ID</th>\r\n        <th>Drinker ID</th>\r\n        <th>Subtotal</th>\r\n        <th>Tax</th>\r\n        <th>Tip</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-transaction>\r\n      <tr>\r\n        <td>{{ transaction.tid }}</td>\r\n        <td>{{ transaction.barId }}</td>\r\n        <td>{{ transaction.drinkerId }}</td>\r\n        <td>{{ transaction.subtotal | currency }}</td>\r\n        <td>{{ transaction.tax | currency }}</td>\r\n        <td>{{ transaction.tip | currency }}</td>\r\n        <td>{{ transaction.total | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n    \r\n<br><br>\r\n\r\n<div class = \"container\">\r\n  <h2 class = \"text-center font-weight-light\"> All Bills </h2>\r\n  <br>\r\n  <p-table [value] = \"bills\" [paginator]=\"true\" [rows]=\"10\" [loading]=\"loading\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Bill ID</th>\r\n        <th>Bar ID</th>\r\n        <th>Drinker ID</th>\r\n        <th>Time Issued</th>\r\n        <th>Item</th>\r\n        <th>Quantity</th>\r\n        <th>Price</th>\r\n      </tr>\r\n    </ng-template>\r\n    \r\n    <ng-template pTemplate=\"body\" let-bill>\r\n      <tr>\r\n        <td>{{ bill.billId }}</td>\r\n        <td>{{ bill.barId }}</td>\r\n        <td>{{ bill.drinkerId }}</td>\r\n        <td>{{ bill.timeIssued }}</td>\r\n        <td>{{ bill.item }}</td>\r\n        <td>{{ bill.quantity }}</td>\r\n        <td>{{ bill.price | currency }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</div>\r\n    \r\n<br><br>"

/***/ }),

/***/ "./src/app/modifications/modifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modifications/modifications.component.ts ***!
  \**********************************************************/
/*! exports provided: ModificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationsComponent", function() { return ModificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modifications.service */ "./src/app/modifications.service.ts");
/* harmony import */ var _drinkers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinkers.service */ "./src/app/drinkers.service.ts");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
/* harmony import */ var _bills_transactions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bills-transactions.service */ "./src/app/bills-transactions.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModificationsComponent = /** @class */ (function () {
    function ModificationsComponent(modify, beerService, barService, drinkerService, billsTransactionService) {
        this.modify = modify;
        this.beerService = beerService;
        this.barService = barService;
        this.drinkerService = drinkerService;
        this.billsTransactionService = billsTransactionService;
        this.getBeers();
        this.getBars();
        this.getDrinkers();
        this.getDrinkersFrequentingBars();
        this.getDrinkersLikingBeers();
        this.getBarsSellingBeers();
        this.getBarsSellingItems();
        this.getTransactions();
        this.getBills();
        //this.getMod();   		
    }
    ModificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        setTimeout(function () {
            _this.loading = false;
        }, 1000);
    };
    ModificationsComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        });
    };
    ModificationsComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        });
    };
    ModificationsComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        });
    };
    ModificationsComponent.prototype.getDrinkersFrequentingBars = function () {
        var _this = this;
        this.drinkerService.getDrinkersFrequentingBars().subscribe(function (data) {
            _this.frequents = data;
        });
    };
    ModificationsComponent.prototype.getDrinkersLikingBeers = function () {
        var _this = this;
        this.drinkerService.getDrinkersLikingBeers().subscribe(function (data) {
            _this.likes = data;
        });
    };
    ModificationsComponent.prototype.getBarsSellingBeers = function () {
        var _this = this;
        this.barService.getBarsSellingBeers().subscribe(function (data) {
            _this.sellsBeers = data;
        });
    };
    ModificationsComponent.prototype.getBarsSellingItems = function () {
        var _this = this;
        this.barService.getBarsSellingItems().subscribe(function (data) {
            _this.sellsItems = data;
        });
    };
    ModificationsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.billsTransactionService.getTransactions().subscribe(function (data) {
            _this.transactions = data;
        });
    };
    ModificationsComponent.prototype.getBills = function () {
        var _this = this;
        this.billsTransactionService.getBills().subscribe(function (data) {
            _this.bills = data;
        });
    };
    ModificationsComponent.prototype.getMod = function () {
        var _this = this;
        this.modify.getMod().subscribe(function (data) {
            _this.result = data;
            alert(data);
        });
    };
    ModificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modifications',
            template: __webpack_require__(/*! ./modifications.component.html */ "./src/app/modifications/modifications.component.html"),
            styles: [__webpack_require__(/*! ./modifications.component.css */ "./src/app/modifications/modifications.component.css")]
        }),
        __metadata("design:paramtypes", [_modifications_service__WEBPACK_IMPORTED_MODULE_1__["ModificationsService"],
            _beers_service__WEBPACK_IMPORTED_MODULE_3__["BeersService"],
            _bars_service__WEBPACK_IMPORTED_MODULE_4__["BarsService"],
            _drinkers_service__WEBPACK_IMPORTED_MODULE_2__["DrinkersService"],
            _bills_transactions_service__WEBPACK_IMPORTED_MODULE_5__["BillsTransactionsService"]])
    ], ModificationsComponent);
    return ModificationsComponent;
}());



/***/ }),

/***/ "./src/app/verify-details/verify-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/verify-details/verify-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1kZXRhaWxzL3ZlcmlmeS1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/verify-details/verify-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/verify-details/verify-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Query Verification </h1>\n    <p> Please verify database logic after each modification by clicking on the logic you wish to verify.\n    </p>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Logic</h2>\n  <p-table [value] = \"finResults\" >\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th> <a routerLink = \"/verify/1\"> 1 </a>\n        </th>\n        <th><a routerLink = \"/verify/2\"> 2 </a>\n        </th>\n        <th><a routerLink = \"/verify/3\"> 3 </a>\n        </th>\n      </tr>\n      <td>\n      \t<p> SELECT COUNT(*)\n               FROM bills b\n               WHERE b.billId NOT IN \n               \t\t(SELECT  b1.billId\n                \tFROM bills b1 JOIN bars b2 ON b1.barId = b2.id\n                \tWHERE b1.timeIssued >= b2.open AND b1.timeIssued <= b2.close) ;\n        </p> \n       </td>\n\n       <td> \n       \t<p> SELECT COUNT(*) as bool\n                                FROM drinkers d JOIN frequents f ON d.Id = f.drinkerId\n                                WHERE d.name = f.drinker AND d.State != f.State;\n       \t</p>\n       </td>\n\n        <td> <p> SELECT COUNT(*) as bool\n                                from sellsBeer s, sellsBeer s1\n                                where s.id = s1.id and s.price > s1.price and \n                                not exists(select *\n                                            from sellsBeer s2, sellsBeer s3\n                                            where s2.id = s3.id and s2.beer <> s3.beer \n                                            and s2.beer = s.beer and s3.beer = s1.beer\n                                            and s2.price <= s3.price);\n        </p>\n    </td>\n\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/verify-details/verify-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/verify-details/verify-details.component.ts ***!
  \************************************************************/
/*! exports provided: VerifyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyDetailsComponent", function() { return VerifyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _verify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verify.service */ "./src/app/verify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyDetailsComponent = /** @class */ (function () {
    function VerifyDetailsComponent(vService, route) {
        var _this = this;
        this.vService = vService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.inputQuery = +paramMap.get('queryNo');
            _this.vService.verifyQuery(_this.inputQuery).subscribe(function (data) {
                _this.finResult = data;
                alert(data);
            });
        });
    }
    VerifyDetailsComponent.prototype.ngOnInit = function () {
    };
    VerifyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify-details',
            template: __webpack_require__(/*! ./verify-details.component.html */ "./src/app/verify-details/verify-details.component.html"),
            styles: [__webpack_require__(/*! ./verify-details.component.css */ "./src/app/verify-details/verify-details.component.css")]
        }),
        __metadata("design:paramtypes", [_verify_service__WEBPACK_IMPORTED_MODULE_1__["VerifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VerifyDetailsComponent);
    return VerifyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/verify.service.ts":
/*!***********************************!*\
  !*** ./src/app/verify.service.ts ***!
  \***********************************/
/*! exports provided: VerifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyService", function() { return VerifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyService = /** @class */ (function () {
    function VerifyService(http) {
        this.http = http;
    }
    VerifyService.prototype.verifyQuery = function (queryNo) {
        return this.http.get('/api/verify/' + queryNo);
    };
    VerifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerifyService);
    return VerifyService;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Query Verification </h1>\n    <p> Please verify database logic after each modification by clicking on the logic you wish to verify.\n    </p>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Query</h2>\n  <p-table [rows]=\"2\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th> <a routerLink = \"/verify/1\"> 1 </a>\n        </th>\n        <th><a routerLink = \"/verify/2\"> 2 </a>\n        </th>\n        <th><a routerLink = \"/verify/3\"> 3 </a>\n        </th>\n      </tr>\n      <td> <p> Logic Check 1</p>\n      <p> Makes sure that no bill was issued during a time when the specified bar is closed.</p></td>\n       <td> <p> Logic Check 2</p>\n       \t\t<p> Ensures that all drinkers are frequenting bars in their own state.</p>\n       </td>\n        <td> <p> Logic Check 3</p>\n        \t<p> Ensures that the beer heirarchy is mainteined. Beer1 with either less than all beers Beer2 across all bars, or less than Beer2 in all bars.</p>\n        </td>\n    </ng-template>\n  </p-table>\n  <br><br>\n</div>"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerifyComponent = /** @class */ (function () {
    function VerifyComponent() {
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\r\n  <div class=\"container\">\r\n    <h1 class=\"display-4\">A Bar Base to Your Taste</h1>\r\n    <p class=\"lead\">Welcome to the bar-beer-drinker-plus website! </p>\r\n  </div>\r\n</div>\r\n<div class=\"card\" style=\"width: 100%;\">\r\n  <img class=\"card-img-top\" src=\"https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c2f65a2019b066f34061dfe4afb41bb4&auto=format&fit=crop&w=1189&q=80\" alt=\"beer on bar\">\r\n</div>\r\n\r\n<br/>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Wocket\Desktop\cs336\Project\BarBeerDrinkerWeb\barbeerdrinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map