webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.paddingTB60 {padding:60px 0px 60px 0px;}\r\n.gray-bg {background: #F1F1F1 !important;}\r\n.about-title {}\r\n.about-title h1 {color: #535353; font-size:45px;font-weight:600;}\r\n.about-title span {color: #2cb2bc; font-size:45px;font-weight:700;}\r\n.about-title h3 {color: #535353; font-size:23px;margin-bottom:24px;}\r\n.about-title p {color: #7a7a7a;line-height: 1.8;margin: 0 0 15px;}\r\n.about-paddingB {padding-bottom: 12px;}\r\n.about-img {padding-left: 57px;}\r\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<app-header1></app-header1>\n<div class=\"about-section paddingTB60 gray-bg\">\n                <div class=\"container\">\n                    <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"about-title clearfix\">\n\t\t\t\t\t\t\t\t<h1>About <span>Us</span></h1>\n\t\t\t\t\t\t\t\t<h3>Lorem ipsum dolor sit amet </h3>\n\t\t\t\t\t\t\t\t<p class=\"about-paddingB\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>\n\t\t\t\t\t\t\t\t<p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-5 col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"about-img\">\n\t\t\t\t\t\t\t\t<img src=\"https://devitems.com/preview/appmom/img/mobile/2.png\" alt=\"\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n                    </div>\n                </div>\n            </div>\n\n           <app-footer></app-footer> "

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/addmatch-form/addmatch-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addmatch-form/addmatch-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class =\"container\">\n\t<h1>Add Match</h1>\n\t<form #registrationForm=\"ngForm\" (ngSubmit)=\"onSubmit(registrationForm.value)\">\n\t\t<div class=\"section\">\n\t\t\t<label for =\"name\">Name</label>\n\t\t\t<input type=\"text\" class =\"form-control\" id =\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\n\t\t</div>\n\n\t\t<div class=\"section\">\n\t\t\t<label for =\"Password\">Password</label>\n\t\t\t<input type=\"Password\" class =\"form-control\" id =\"pwd\" required [(ngModel)]=\"model.password\" name=\"pwd\">\n\t\t</div>\n\n\t\t<div class=\"section\">\n\t\t\t<label for =\"Email\">Email</label>\n\t\t\t<input type=\"email\" class =\"form-control\" id =\"email\" required [(ngModel)]=\"model.email\" name=\"email\">\n\t\t</div>\n\t\t\n\t\t<div class=\"section\">\n\t\t\t<label for =\"Login\">Login</label>\n\t\t\t<input type=\"text\" class =\"form-control\" id =\"login\" required [(ngModel)]=\"model.login\" name=\"login\">\n\t\t</div>\n\t</form>\n</div>\t\t\t\t"

/***/ }),

/***/ "./src/app/addmatch-form/addmatch-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddmatchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addmatches__ = __webpack_require__("./src/app/addmatch-form/addmatches.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddmatchFormComponent = /** @class */ (function () {
    function AddmatchFormComponent() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__addmatches__["a" /* AddMatches */]('Shubham', 'od144464', 'jhashubham28@gmail.com', 'jhashubham28');
    }
    AddmatchFormComponent.prototype.ngOnInit = function () {
    };
    AddmatchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addmatch-form',
            template: __webpack_require__("./src/app/addmatch-form/addmatch-form.component.html"),
            styles: [__webpack_require__("./src/app/addmatch-form/addmatch-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddmatchFormComponent);
    return AddmatchFormComponent;
}());



/***/ }),

/***/ "./src/app/addmatch-form/addmatches.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMatches; });
var AddMatches = /** @class */ (function () {
    function AddMatches(name, password, email, login) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.login = login;
    }
    return AddMatches;
}());



/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nbody{\r\n\tbackground: #f4f4f4;\r\n}\r\n\r\n.navbar{\r\n\tmin-height: 33px !important;\r\n\tmargin-bottom: 0;\r\n\tborder-radius: 0;\r\n\r\n}\r\n\r\n.navbar-nav> li>a, .navbar-brand{\r\n\tpadding-top: 6px !important;\r\n\tpadding-bottom: 0;\r\n\theight: 33px;\r\n\r\n}\r\n\r\n.main-color-bg{\r\n\tbackground-color: #095f59;\r\n\tcolor: #ffffff !important;\r\n}\r\n\r\n/*Header */\r\n\r\n#header{\r\n\tbackground: #333333;\r\n\tcolor: #ffffff;\r\n\tpadding-bottom: 10px;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n#header .create{\r\n\tpadding-top: 20px;\r\n}\r\n\r\n.dash-box{\r\n\ttext-align: center;\r\n}\r\n\r\n#footer{\r\n\tbackground: #333333;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tpadding: 30px;\r\n\tmargin-top: 30px;\r\n\r\n}\r\n\r\n.navbar-default {\r\n  background-color: #095f59;\r\n  border-color: #689a9b;\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n  color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-brand:hover,\r\n.navbar-default .navbar-brand:focus {\r\n  color: #010800;\r\n}\r\n\r\n.navbar-default .navbar-text {\r\n  color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a {\r\n  color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n  color: #010800;\r\n}\r\n\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n  color: #010800;\r\n  background-color: #689a9b;\r\n}\r\n\r\n.navbar-default .navbar-nav > .open > a,\r\n.navbar-default .navbar-nav > .open > a:hover,\r\n.navbar-default .navbar-nav > .open > a:focus {\r\n  color: #010800;\r\n  background-color: #689a9b;\r\n}\r\n\r\n.navbar-default .navbar-toggle {\r\n  border-color: #689a9b;\r\n}\r\n\r\n.navbar-default .navbar-toggle:hover,\r\n.navbar-default .navbar-toggle:focus {\r\n  background-color: #689a9b;\r\n}\r\n\r\n.navbar-default .navbar-toggle .icon-bar {\r\n  background-color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-collapse,\r\n.navbar-default .navbar-form {\r\n  border-color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-link {\r\n  color: #efee24;\r\n}\r\n\r\n.navbar-default .navbar-link:hover {\r\n  color: #010800;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\r\n    color: #efee24;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\r\n    color: #010800;\r\n  }\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\r\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\r\n    color: #010800;\r\n    background-color: #689a9b;\r\n  }\r\n}\r\n\r\n/*Breadcrumb*/\r\n\r\n.breadcrumb{\r\n\tbackground: #cccccc;\r\n\tcolor: #333333;\r\n}\r\n\r\n.breadcrumb a{\r\n\tcolor: #333333;\r\n}"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">YourWebsite</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"index.html\">Dashboard</a></li>\n          <li><a href=\"pages.html\">Pages</a></li>\n          <li><a href=\"posts.html\">Posts</a></li>\n          <li><a href=\"users.html\">Users</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\"><a href=\"index.html\">Welcome, Admin</a></li>\n          <li><a href=\"login.html\">Logout</a></li>\n        </ul>\n      </div>\n      <!--/.nav-collapse -->\n    </div>\n  </nav>\n  <header id=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <h1><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span> Dashboard <small>Manage Your Site</small></h1>\n        </div>\n        <div class=\"col-md-2\">\n          <div class=\"dropdown\">\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Create Content\n              <span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Add Pages</a></li>\n              <li><a href=\"#\">Add Posts</a></li>\n              <li><a href=\"#\">Add Users</a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n  <br>\n  <section id=\"breadcrumb\">\n    <div class=\"container\">\n      <ol class=\"breadcrumb\">\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </div>\n  </section>\n  <section id=\"main\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"list-group\">\n            <a href=\"index.html\" class=\"list-group-item active main-color-bg\"><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\"></span>\n        Dashboard <span class=\"badge\">12</span>\n      </a>\n            <a href=\"pages.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> Pages<span class=\"badge\">25</span></a>\n            <a href=\"posts.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span> Posts<span class=\"badge\">126</span></a>\n            <a href=\"users.html\" class=\"list-group-item\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> Users <span class=\"badge\">12</span></a>\n          </div>\n          <div class=\"well\">\n            <h4>Disk Space Used</h4>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n                60%\n              </div>\n            </div>\n            <h4>Bandwidth Used</h4>\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%;\">\n                40%\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-9\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" style=\"background-color:  #095f59;\">\n              <h3 class=\"panel-title\">Website Overview</h3>\n            </div>\n            <div class=\"panel-body\">\n              <div class=\"col-md-3\">\n                <div class=\"well dash-box\">\n                  <h2><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span> 12</h2>\n                  <h4>Users</h4>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"well dash-box\">\n                  <h2><span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span> 25</h2>\n                  <h4>Pages</h4>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"well dash-box\">\n                  <h2><span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>126</h2>\n                  <h4>Posts</h4>\n                </div>\n              </div>\n              <div class=\"col-md-3\">\n                <div class=\"well dash-box\">\n                  <h2><span class=\"glyphicon glyphicon-stats\" aria-hidden=\"true\"></span> 2129</h2>\n                  <h4>Visitores</h4>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Latest User-->\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\" style=\"background-color:#095f59\">\n              <h3 class=\"panel-title\">Latest Users</h3>\n            </div>\n            <div class=\"panel-body\">\n              <table class=\"table table-striped table-hover\">\n                <tr>\n                  <th>Name</th>\n                  <th>Email</th>\n                  <th>Joined</th>\n                </tr>\n                <tr>\n                  <td>Madhav Prasad</td>\n                  <td>mr.madhavprasad@gmail.com</td>\n                  <td>Dec 13,2014</td>\n                </tr>\n                <tr>\n                  <td>Nagendra Kushwaha</td>\n                  <td>nkushwaha822@gmail.com</td>\n                  <td>Feb 15,2014</td>\n                </tr>\n                <tr>\n                  <td>Arun Kumar</td>\n                  <td>kumarun@yahoo.com</td>\n                  <td>Aug 17, 2015</td>\n                </tr>\n                <tr>\n                  <td>Nabin Singh</td>\n                  <td>singhNavs@outlook.com</td>\n                  <td>March 08,2016</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer id=\"footer\">\n    <p>Copyright : Admin\n      <br>2017</p>\n  </footer>\n  <!-- Bootstrap core JavaScript\n    ================================================== -->\n  <!-- Placed at the end of the document so the pages load faster -->\n</body>\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_section_main_section_component__ = __webpack_require__("./src/app/main-section/main-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matches_matches_component__ = __webpack_require__("./src/app/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__players_players_component__ = __webpack_require__("./src/app/players/players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tournaments_tournaments_component__ = __webpack_require__("./src/app/tournaments/tournaments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_section_main_section_component__["a" /* MainSectionComponent */] },
    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__main_section_main_section_component__["a" /* MainSectionComponent */] },
    { path: 'Matches', component: __WEBPACK_IMPORTED_MODULE_3__matches_matches_component__["a" /* MatchesComponent */] },
    { path: 'Players', component: __WEBPACK_IMPORTED_MODULE_4__players_players_component__["a" /* PlayersComponent */] },
    { path: 'Tournaments', component: __WEBPACK_IMPORTED_MODULE_5__tournaments_tournaments_component__["a" /* TournamentsComponent */] },
    { path: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_6__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'About Us', component: __WEBPACK_IMPORTED_MODULE_7__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'Register', component: __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'Admin', component: __WEBPACK_IMPORTED_MODULE_10__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */] },];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"fb-root\"></div>\n  <script>\n  (function(d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) return;\n    js = d.createElement(s);\n    js.id = id;\n    js.src = \"//connect.facebook.net/en_GB/all.js#xfbml=1\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));\n\n  </script>\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header1_header1_component__ = __webpack_require__("./src/app/header1/header1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_section_main_section_component__ = __webpack_require__("./src/app/main-section/main-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_sidebar_footer_sidebar_component__ = __webpack_require__("./src/app/footer-sidebar/footer-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__latest_post_latest_post_component__ = __webpack_require__("./src/app/latest-post/latest-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__world_news_world_news_component__ = __webpack_require__("./src/app/world-news/world-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sports_gallery_sports_gallery_component__ = __webpack_require__("./src/app/sports-gallery/sports-gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popular_post_popular_post_component__ = __webpack_require__("./src/app/popular-post/popular-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_post_video_post_component__ = __webpack_require__("./src/app/video-post/video-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__older_post_older_post_component__ = __webpack_require__("./src/app/older-post/older-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__entertainment_post_entertainment_post_component__ = __webpack_require__("./src/app/entertainment-post/entertainment-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__newslater_newslater_component__ = __webpack_require__("./src/app/newslater/newslater.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__find_on_fb_find_on_fb_component__ = __webpack_require__("./src/app/find-on-fb/find-on-fb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_component__ = __webpack_require__("./src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__social_buttons_social_buttons_component__ = __webpack_require__("./src/app/social-buttons/social-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__clock_clock_component__ = __webpack_require__("./src/app/clock/clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__matches_matches_component__ = __webpack_require__("./src/app/matches/matches.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__players_players_component__ = __webpack_require__("./src/app/players/players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__contact_us_contact_us_component__ = __webpack_require__("./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tournaments_tournaments_component__ = __webpack_require__("./src/app/tournaments/tournaments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__addmatch_form_addmatch_form_component__ = __webpack_require__("./src/app/addmatch-form/addmatch-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__admin_dashboard_admin_dashboard_component__ = __webpack_require__("./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__ = __webpack_require__("./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































/*For authentication*/
var config = new __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["b" /* AuthServiceConfig */]([
    {
        id: __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["d" /* GoogleLoginProvider */]("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["c" /* FacebookLoginProvider */]("561602290896109")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["e" /* LinkedInLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["e" /* LinkedInLoginProvider */]("LinkedIn-client-Id", false, 'en_US')
    }
]);
function provideConfig() {
    return config;
}
/*Authentication part ends*/
/*Translate function for AOT*/
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_34__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header1_header1_component__["a" /* Header1Component */],
                __WEBPACK_IMPORTED_MODULE_5__main_section_main_section_component__["a" /* MainSectionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_sidebar_footer_sidebar_component__["a" /* FooterSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__latest_post_latest_post_component__["a" /* LatestPostComponent */],
                __WEBPACK_IMPORTED_MODULE_9__world_news_world_news_component__["a" /* WorldNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sports_gallery_sports_gallery_component__["a" /* SportsGalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__popular_post_popular_post_component__["a" /* PopularPostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__video_post_video_post_component__["a" /* VideoPostComponent */],
                __WEBPACK_IMPORTED_MODULE_13__older_post_older_post_component__["a" /* OlderPostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__entertainment_post_entertainment_post_component__["a" /* EntertainmentPostComponent */],
                __WEBPACK_IMPORTED_MODULE_15__newslater_newslater_component__["a" /* NewslaterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__find_on_fb_find_on_fb_component__["a" /* FindOnFbComponent */],
                __WEBPACK_IMPORTED_MODULE_17__calendar_calendar_component__["a" /* CalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__social_buttons_social_buttons_component__["a" /* SocialButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_21__clock_clock_component__["a" /* ClockComponent */],
                __WEBPACK_IMPORTED_MODULE_22__matches_matches_component__["a" /* MatchesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__players_players_component__["a" /* PlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_24__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_25__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__tournaments_tournaments_component__["a" /* TournamentsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__addmatch_form_addmatch_form_component__["a" /* AddmatchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_30__admin_dashboard_admin_dashboard_component__["a" /* AdminDashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["f" /* SocialLoginModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_33__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_33__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_32__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_33__ngx_translate_core__["b" /* TranslateModule */]],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_31_angularx_social_login__["b" /* AuthServiceConfig */],
                    useFactory: provideConfig
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.3 - calendar\r\n---------------------------------------------------------------------- */\r\n#calendar{\r\n\twidth: 100%;\r\n\ttext-align:center;\r\n\tmargin-bottom: 40px;\r\n}\r\n#calendar caption{\r\n\ttext-align: center;;\r\n\tfont-weight: bold;\r\n\tline-height:40px;\r\n\tfont-size:1.25em;\r\n\tbackground: #f2f2f4;\r\n\theight:40px;\r\n\tborder: 1px solid  #e3e2e2;\r\n\tborder-bottom: none;\r\n}\r\n#calendar th{\r\n\theight:40px;\r\n\ttext-align:center;\r\n\tborder: 1px solid #1fa3ad;\r\n}\r\n#calendar td{\r\n\theight:40px;\r\n\tline-height:40px;\r\n\tborder: 1px solid #d7d7d7;\r\n}\r\n#calendar th,\r\n#calendar #today{\r\n\tcolor: #FFF;\r\n\tbackground-color:#2cb2bc;\r\n}\r\n#calendar a{\r\n\tcolor: #2cb2bc;\r\n\tdisplay: inline-block;\r\n\tline-height: 40px;\r\n\twidth: 100%;\r\n}\r\n#calendar a:hover{\r\n\tcolor: #FFF;\r\n\tbackground-color:#2cb2bc;\r\n}"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-calender\">\n        <table id=\"calendar\">\n          <caption>February 2014</caption>\n          <thead data-iceapc=\"1\">\n            <tr>\n              <th scope=\"col\" title=\"Monday\">M</th>\n              <th scope=\"col\" title=\"Tuesday\">T</th>\n              <th scope=\"col\" title=\"Wednesday\">W</th>\n              <th scope=\"col\" title=\"Thursday\">T</th>\n              <th scope=\"col\" title=\"Friday\">F</th>\n              <th scope=\"col\" title=\"Saturday\">S</th>\n              <th scope=\"col\" title=\"Sunday\">S</th>\n            </tr>\n          </thead>\n          <tfoot data-iceapc=\"4\">\n            <tr data-iceapc=\"3\">\n              <td colspan=\"3\" id=\"prev\"><a href=\"#\" title=\"Previous\">&laquo; Jan</a></td>\n              <td class=\"pad\">&nbsp;</td>\n              <td colspan=\"3\" id=\"next\" class=\"pad\"><a href=\"#\" title=\"Next\">Mar &raquo;</a></td>\n            </tr>\n          </tfoot>\n          <tbody>\n            <tr>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td>1</td>\n              <td>2</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>4</td>\n              <td>5</td>\n              <td>6</td>\n              <td>7</td>\n              <td>8</td>\n              <td>9</td>\n            </tr>\n            <tr>\n              <td>10</td>\n              <td>11</td>\n              <td>12</td>\n              <td>13</td>\n              <td><a href=\"#\" title=\"Post\">14</a></td>\n              <td>15</td>\n              <td>16</td>\n            </tr>\n            <tr>\n              <td>17</td>\n              <td id=\"today\">18</td>\n              <td>19</td>\n              <td>20</td>\n              <td>21</td>\n              <td>22</td>\n              <td>23</td>\n            </tr>\n            <tr>\n              <td>24</td>\n              <td>25</td>\n              <td>26</td>\n              <td>27</td>\n              <td>28</td>\n              <td></td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </section>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-calendar',
            template: __webpack_require__("./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__("./src/app/calendar/calendar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/clock/clock.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clock/clock.component.html":
/***/ (function(module, exports) {

module.exports = "{{clock | async | date:'shortTime'}}"

/***/ }),

/***/ "./src/app/clock/clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
        this.clock = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000).map(function () { return new Date(); });
    }
    ClockComponent.prototype.ngOnInit = function () {
    };
    ClockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clock',
            template: __webpack_require__("./src/app/clock/clock.component.html"),
            styles: [__webpack_require__("./src/app/clock/clock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\t/* Conatct start */\r\n\r\n        .header-title\r\n        {\r\n          text-align: center;\r\n          color:#00bfff;\r\n        }\r\n\r\n        #tip \r\n        {\r\n            display:none;  \r\n        }\r\n\r\n        .fadeIn\r\n        {\r\n          -webkit-animation-duration: 3s;\r\n                  animation-duration: 3s;\r\n        }\r\n\r\n        .form-control\r\n        {\r\n        \tborder-radius:0px;\r\n        \tborder:1px solid #EDEDED;\r\n        }\r\n\r\n        .form-control:focus\r\n        {\r\n        \tborder:1px solid #00bfff;\r\n        }\r\n\r\n        .textarea-contact\r\n        {\r\n        \tresize:none; \r\n        }\r\n\r\n        .btn-send\r\n        {\r\n        \tborder-radius: 0px;\r\n        \tborder:1px solid #00bfff;\r\n        \tbackground:#00bfff;\r\n        \tcolor:#fff; \r\n        }\r\n\r\n        .btn-send:hover\r\n        {\r\n        \tborder:1px solid #00bfff;\r\n        \tbackground:#fff;\r\n        \tcolor:#00bfff;\r\n        \t-webkit-transition:background 0.5s;\r\n        \ttransition:background 0.5s;   \r\n        }\r\n\r\n        .second-portion\r\n        {\r\n        \tmargin-top:50px; \r\n        }\r\n\r\n        .box > .icon { text-align: center; position: relative; }\r\n\r\n        .box > .icon > .image { position: relative; z-index: 2; margin: auto; width: 88px; height: 88px; border: 8px solid white; line-height: 88px; border-radius: 50%; background: #00bfff; vertical-align: middle; }\r\n\r\n        .box > .icon:hover > .image { background: #333; }\r\n\r\n        .box > .icon > .image > i { font-size: 36px !important; color: #fff !important; }\r\n\r\n        .box > .icon:hover > .image > i { color: white !important; }\r\n\r\n        .box > .icon > .info { margin-top: -24px; background: rgba(0, 0, 0, 0.04); border: 1px solid #e0e0e0; padding: 15px 0 10px 0; min-height:163px;}\r\n\r\n        .box > .icon:hover > .info { background: rgba(0, 0, 0, 0.04); border-color: #e0e0e0; color: white; }\r\n\r\n        .box > .icon > .info > h3.title { font-family: \"Robot\",sans-serif !important; font-size: 16px; color: #222; font-weight: 700; }\r\n\r\n        .box > .icon > .info > p { font-family: \"Robot\",sans-serif !important; font-size: 13px; color: #666; line-height: 1.5em; margin: 20px;}\r\n\r\n        .box > .icon:hover > .info > h3.title, .box > .icon:hover > .info > p, .box > .icon:hover > .info > .more > a { color: #222; }\r\n\r\n        .box > .icon > .info > .more a { font-family: \"Robot\",sans-serif !important; font-size: 12px; color: #222; line-height: 12px; text-transform: uppercase; text-decoration: none; }\r\n\r\n        .box > .icon:hover > .info > .more > a { color: #fff; padding: 6px 8px; background-color: #63B76C; }\r\n\r\n        .box .space { height: 30px; }\r\n\r\n        @media only screen and (max-width: 768px)\r\n\t\t{\r\n\t\t\t.contact-form\r\n\t\t\t{\r\n\t\t\t\tmargin-top:25px; \r\n\t\t\t}\r\n\r\n\t\t\t.btn-send\r\n\t\t\t{\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tpadding:10px; \r\n\t\t\t}\r\n\r\n\t\t\t.second-portion\r\n\t\t\t{\r\n\t\t\t\tmargin-top:25px; \r\n\t\t\t}\r\n\t\t}\r\n\r\n        /* Conatct end */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container animated fadeIn\">\n\n  <div class=\"row\">\n    <h1 class=\"header-title\"> Contact </h1>\n    <hr>\n    <div class=\"col-sm-12\" id=\"parent\">\n    \t<div class=\"col-sm-6\">\n    \t<iframe width=\"100%\" height=\"320px;\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY\" allowfullscreen></iframe>\n    \t</div>\n\n    \t<div class=\"col-sm-6\">\n    \t\t<form action=\"form.php\" class=\"contact-form\" method=\"post\">\n\t\n\t\t        <div class=\"form-group\">\n\t\t          <input type=\"text\" class=\"form-control\" id=\"name\" name=\"nm\" placeholder=\"Name\" required=\"\" autofocus=\"\">\n\t\t        </div>\n\t\t    \n\t\t    \n\t\t        <div class=\"form-group form_left\">\n\t\t          <input type=\"email\" class=\"form-control\" id=\"email\" name=\"em\" placeholder=\"Email\" required=\"\">\n\t\t        </div>\n\t\t    \n\t\t      <div class=\"form-group\">\n\t\t           <input type=\"text\" class=\"form-control\" id=\"phone\" onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\" maxlength=\"10\" placeholder=\"Mobile No.\" required=\"\">\n\t\t      </div>\n\t\t      <div class=\"form-group\">\n\t\t      <textarea class=\"form-control textarea-contact\" rows=\"5\" id=\"comment\" name=\"FB\" placeholder=\"Type Your Message/Feedback here...\" required=\"\"></textarea>\n\t\t      <br>\n\t      \t  <button class=\"btn btn-default btn-send\"> <span class=\"glyphicon glyphicon-send\"></span> Send </button>\n\t\t      </div>\n     \t\t</form>\n    \t</div>\n    </div>\n  </div>\n\n  <div class=\"container second-portion\">\n\t<div class=\"row\">\n        <!-- Boxes de Acoes -->\n    \t<div class=\"col-xs-12 col-sm-6 col-lg-4\">\n\t\t\t<div class=\"box\">\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t<div class=\"image\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<h3 class=\"title\">MAIL & WEBSITE</h3>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> &nbsp gondhiyahardik6610@gmail.com\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"fa fa-globe\" aria-hidden=\"true\"></i> &nbsp www.hardikgondhiya.com\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\"></div>\n\t\t\t</div> \n\t\t</div>\n\t\t\t\n        <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n\t\t\t<div class=\"box\">\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t<div class=\"image\"><i class=\"fa fa-mobile\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<h3 class=\"title\">CONTACT</h3>\n    \t\t\t\t\t<p>\n\t\t\t\t\t\t\t<i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> &nbsp (+91)-9624XXXXX\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"fa fa-mobile\" aria-hidden=\"true\"></i> &nbsp  (+91)-7567065254 \n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\"></div>\n\t\t\t</div> \n\t\t</div>\n\t\t\t\n        <div class=\"col-xs-12 col-sm-6 col-lg-4\">\n\t\t\t<div class=\"box\">\t\t\t\t\t\t\t\n\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t<div class=\"image\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<h3 class=\"title\">ADDRESS</h3>\n    \t\t\t\t\t<p>\n\t\t\t\t\t\t\t <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> &nbsp 15/3 Junction Plot \n\t\t\t\t\t\t\t \"Shree Krishna Krupa\", Rajkot - 360001.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\"></div>\n\t\t\t</div> \n\t\t</div>\t\t    \n\t\t<!-- /Boxes de Acoes -->\n\t\t\n\t\t<!--My Portfolio  dont Copy this -->\n\t    \n\t</div>\n</div>\n\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-us',
            template: __webpack_require__("./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__("./src/app/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/entertainment-post/entertainment-post.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.2 - sidebar-video-post and sidebar-entertainment-post\r\n---------------------------------------------------------------------- */\r\n\r\n.sidebar-entertainment{\r\n\tpadding: 15px;\r\n\tborder-left: 1px solid  #e3e2e2;\r\n\tborder-right: 1px solid  #e3e2e2;\r\n}\r\n\r\n.sidebar-entertainment + .date-like-comment{\r\n\tbackground-color: #f2f2f4;\r\n\tline-height: 40px;\r\n\tborder: 1px solid  #e3e2e2;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tpadding-right: 15px;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.sidebar-entertainment img{\r\n\tmargin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/entertainment-post/entertainment-post.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar-entertainment-post\">\n        <div class=\"ccr-gallery-ttile\">\n          <span></span>\n          <p><strong>Entertainment</strong></p>\n        </div>\n        <!-- .ccr-gallery-ttile -->\n        <div class=\"sidebar-entertainment\">\n          <img src=\"assets/img/entertainment.jpg\" alt=\"entertainment\">\n          <a href=\"#\">Miss Joly loves you to share her tell. Are you ready?</a>\n        </div>\n        <div class=\"date-like-comment\">\n          <a href=\"#\" class=\"like\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n          <a href=\"#\" class=\"comments\"><i class=\"fa fa-comments-o\"></i> 49</a>\n        </div>\n      </section>\n      <!-- /#sidebar-entertainment-post -->"

/***/ }),

/***/ "./src/app/entertainment-post/entertainment-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainmentPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntertainmentPostComponent = /** @class */ (function () {
    function EntertainmentPostComponent() {
    }
    EntertainmentPostComponent.prototype.ngOnInit = function () {
    };
    EntertainmentPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entertainment-post',
            template: __webpack_require__("./src/app/entertainment-post/entertainment-post.component.html"),
            styles: [__webpack_require__("./src/app/entertainment-post/entertainment-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntertainmentPostComponent);
    return EntertainmentPostComponent;
}());



/***/ }),

/***/ "./src/app/find-on-fb/find-on-fb.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.6 - ccr-find-on-fb\r\n---------------------------------------------------------------------- */\r\n#ccr-find-on-fb .find-fb-title{\r\n\tfont-size: 1em;\r\n\tfont-weight: 700;\r\n\tbackground-color: #f2f2f4;\r\n\theight: 38px;\r\n\tline-height: 38px;\r\n\tborder: 1px solid #d7d7d7;\r\n\r\n}\r\n#ccr-find-on-fb .find-fb-title span{\r\n\tfont-size: 1.3em;\r\n\tcolor: #FFF;\r\n\tbackground: #43609c;\r\n\tpadding: 2px 10px;\r\n\tmargin: 5px;\r\n\tline-height: 24px;\r\n}\r\n#ccr-find-on-fb  .find-on-fb-body{\r\n\tborder: 1px solid #d7d7d7;\r\n\tpadding:15px;\r\n\tborder-top:none;\r\n}"

/***/ }),

/***/ "./src/app/find-on-fb/find-on-fb.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-find-on-fb\">\n  <div class=\"find-fb-title\">\n    <span><i class=\"fa fa-facebook\"></i></span> Find us on Facebook\n  </div>\n  <!-- /.find-fb-title -->\n  <div class=\"find-on-fb-body\">\n    <div class=\"fb-like-box\" data-href=\"https://www.facebook.com/codexcoderltd/\" data-colorscheme=\"light\" data-show-faces=\"true\" data-header=\"false\" data-stream=\"false\" data-show-border=\"false\"></div>\n  </div>\n  <!-- /.find-on-fb-body -->\n</section>\n<!-- /#ccr-find-on-fb -->\n"

/***/ }),

/***/ "./src/app/find-on-fb/find-on-fb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindOnFbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindOnFbComponent = /** @class */ (function () {
    function FindOnFbComponent() {
    }
    FindOnFbComponent.prototype.ngOnInit = function () {
    };
    FindOnFbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-find-on-fb',
            template: __webpack_require__("./src/app/find-on-fb/find-on-fb.component.html"),
            styles: [__webpack_require__("./src/app/find-on-fb/find-on-fb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindOnFbComponent);
    return FindOnFbComponent;
}());



/***/ }),

/***/ "./src/app/footer-sidebar/footer-sidebar.component.css":
/***/ (function(module, exports) {

module.exports = "/* 5.0 - ccr-footer-sidebar\r\n---------------------------------------------------------------------- */\r\n#ccr-footer-sidebar{\r\n\tbackground-color: #282c2d;\r\n\tbackground-image: url(/assets/img/footer-sidebar-bg.png);\r\n\tpadding: 0 0 40px 0;\r\n\twidth: 100%;\r\n\tmin-height:400px;\r\n}\r\n#ccr-footer-sidebar h5{\r\n\tfont-size: 1.15em;\r\n\tcolor: #c2c2c2;\r\n\tborder-bottom: 1px solid #c2c2c2;\r\n\tpadding-bottom: 5px;\r\n\tmargin-bottom: 20px;\r\n\twidth: 100%;\r\n}\r\n#ccr-footer-sidebar .about-us{\r\n\tcolor: #c2c2c2; \r\n\tmargin-bottom:10px;\r\n}\r\n#ccr-footer-sidebar  .site-logo{\r\n\tbackground-color: #e3e2e2;\r\n\theight: 60px;\r\n\tpadding:10px;\r\n\twidth:185px;\r\n}\r\n#ccr-footer-sidebar .site-logo a{\r\n\tpadding-left: 0px;\r\n\tpadding-right: 0px;\r\n\twidth: 300px;\r\n}\r\n#ccr-footer-sidebar .site-logo h1{\r\n\tfont-size: 1.5em;\r\n\tfont-weight: normal;\r\n\tcolor: #818285;\r\n}\r\n#ccr-footer-sidebar .site-logo h1 span{\r\n\tfont-weight: 700;\r\n\tcolor: #515252;\r\n}\r\n#ccr-footer-sidebar .site-logo h3{\r\n\tfont-size: .8em;\r\n\tfont-weight: 400;\r\n\tcolor: #333333;\r\n}\r\n#ccr-footer-sidebar .site-logo img{\r\n\twidth: 55px;\r\n\theight: 40px;\r\n\tmargin: 0px;\r\n\tpadding: 0px;\r\n\tpadding-right:10px;\r\n\tfloat: left;\r\n}\r\n#ccr-footer-sidebar .col-md-3{\r\n\tmargin: 40px 0 0 0;\r\n\toverflow: hidden;\r\n}\r\n#ccr-footer-sidebar .col-md-3 li{\r\n\tpadding: 8px;\r\n\twidth: 100%;\r\n\tfloat:left;\r\n\tpadding-left: 0;\r\n}\r\n#ccr-footer-sidebar .col-md-3 li a{\r\n\tcolor: #c2c2c2;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n#ccr-footer-sidebar .col-md-3 li img{\r\n\twidth: 65px;\r\n\theight: 65px;\r\n\tfloat: left;\r\n\tmargin-right: 10px;\r\n}\r\n#ccr-footer-sidebar .col-md-3 li a:hover{\r\n\tcolor: #2cb2bc;\r\n}\r\n#ccr-footer-sidebar .tagcloud a{\r\n\tcolor: #fff;\r\n\tline-height: 40px;\r\n\tbackground-color: #2cb2bc;\r\n\tpadding: 5px 10px;\r\n\tmargin-right: 7px;\r\n}\r\n#ccr-footer-sidebar .tagcloud a:hover{\r\n\tbackground-color: #5f5f5f;\r\n}\r\n/* 5.0 - ccr-footer-sidebar End\r\n---------------------------------------------------------------------- */"

/***/ }),

/***/ "./src/app/footer-sidebar/footer-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"ccr-footer-sidebar\">\n    <div class=\"container\">\n      <ul>\n        <li class=\"col-md-3\">\n          <h5>About Us</h5>\n          <div class=\"about-us\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias Ab veniam atque eius...\n          </div>\n          <div class=\"site-logo\">\n            <a href=\"index.html\"><img src=\"assets/img/logo.png\" alt=\"Side Logo\" /><h1>Daily <span>News</span></h1><h3>The Daily News Source</h3></a>\n          </div>\n          <!-- / .navbar-header -->\n        </li>\n        <li class=\"col-md-3\">\n          <h5>Popular Post</h5>\n          <ul>\n            <li>\n              <img src=\"assets/img/thumbnail-small-1.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/sports-thumb-4.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/thumbnail-small-3.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/thumbnail-small-5.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"col-md-3\">\n          <h5>Recent Post</h5>\n          <ul>\n            <li>\n              <img src=\"assets/img/thumbnail-small-8.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/sports-thumb-6.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/thumbnail-small-7.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n            </li>\n            <li>\n              <img src=\"assets/img/thumbnail-small-6.jpg\" alt=\"Avatar\">\n              <a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"col-md-3\">\n          <h5>Tags</h5>\n          <div class=\"tagcloud\">\n            <a href=\"#\">Football</a>\n            <a href=\"#\">Games</a>\n            <a href=\"#\">World News</a>\n            <a href=\"#\">USA</a>\n            <a href=\"#\">Salman</a>\n            <a href=\"#\">Masrafi</a>\n            <a href=\"#\">Afgan</a>\n            <a href=\"#\">Obama</a>\n            <a href=\"#\">t20</a>\n            <a href=\"#\">Business</a>\n            <a href=\"#\">Education</a>\n            <a href=\"#\">Lorem</a>\n            <a href=\"#\">Dhaka</a>\n            <a href=\"#\">BBC</a>\n            <a href=\"#\">Poland</a>\n            <a href=\"#\">Technology</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </aside>\n  <!-- /#ccr-footer-sidebar -->"

/***/ }),

/***/ "./src/app/footer-sidebar/footer-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterSidebarComponent = /** @class */ (function () {
    function FooterSidebarComponent() {
    }
    FooterSidebarComponent.prototype.ngOnInit = function () {
    };
    FooterSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-sidebar',
            template: __webpack_require__("./src/app/footer-sidebar/footer-sidebar.component.html"),
            styles: [__webpack_require__("./src/app/footer-sidebar/footer-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterSidebarComponent);
    return FooterSidebarComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/* 6.0 - ccr-footer\r\n---------------------------------------------------------------------- */\r\n#ccr-footer{\r\n\tbackground-color: #2cb2bc;\r\n\tmin-height: 40px;\r\n}\r\n.container{\r\n\tposition: relative;\r\n}\r\n.copyright, .copyright a{\r\n\tcolor: #fff;\r\n\tline-height: 40px;\r\n\ttext-align: center;\r\n}\r\n.footer-social-icons{\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop:0;\r\n\theight: 40px;\r\n\twidth: 160px;\r\n}\r\n.footer-social-icons li a{\r\n\tfont-size: 1.35em;\r\n\tcolor: #fff;\r\n\tfloat: left;\r\n\tline-height: 40px;\r\n\ttext-align: center;\r\n\twidth: 40px;\r\n}\r\n/* 6.0 - ccr-footer End\r\n---------------------------------------------------------------------- */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"ccr-footer\">\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; 2014, Copyrights <a href=\"http://codexcoder.com\">CodexCoder</a> Theme. All Rights Reserved\n      </div>\n      <!-- /.copyright -->\n      <div class=\"footer-social-icons\">\n        <ul>\n          <li>\n            <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li>\n            <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n      <!--  /.cocial-icons -->\n    </div>\n    <!-- /.container -->\n  </footer>\n  <!-- /#ccr-footer -->"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header1/header1.component.css":
/***/ (function(module, exports) {

module.exports = "/* 2.0 - Header\r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-header .fullwidth {\r\n  background-color: #343333;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n}\r\n\r\n#ccr-nav-top {\r\n  height: 41px;\r\n}\r\n\r\n.navbar-brand>h3{\r\n  margin-top: 10px;\r\n  margin-left: 30%;\r\n}\r\n\r\n/* 2.1 - ccr-nav-top \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-nav-top ul {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n#ccr-nav-top ul li {\r\n  list-style: none;\r\n  float: left;\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n#ccr-nav-top ul li a {\r\n  color: #a5a3a5;\r\n  display: inline-block;\r\n  padding: 0px 10px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n}\r\n\r\n#ccr-nav-top ul li a:hover {\r\n  color: #2cb2bc;\r\n  text-decoration: none;\r\n  font-size: 1em;\r\n}\r\n\r\n#ccr-nav-top ul li:hover {\r\n  border-bottom: 2px solid #2cb2bc;\r\n}\r\n\r\n#ccr-nav-top ul:last-child li:last-child {\r\n  margin-top: 5px;\r\n}\r\n\r\n#ccr-nav-top ul:last-child li:last-child:hover {\r\n  border-bottom: none;\r\n}\r\n\r\n#ccr-nav-top ul input {\r\n  color: #5f5f5f;\r\n  background-color: #dadada;\r\n  outline-style: none;\r\n  border: none;\r\n  border-left: 5px solid #2cb2bc;\r\n  padding: 0 10px;\r\n  margin-right: 0px;\r\n  width: 225px;\r\n  height: 30px;\r\n}\r\n\r\n#ccr-nav-top ul button {\r\n  color: #fff;\r\n  margin: 0px;\r\n  margin-left: -5px;\r\n  background-color: #2cb2bc;\r\n  outline-style: none;\r\n  width: 30px;\r\n  height: 30px;\r\n  border: none;\r\n}\r\n\r\n#ccr-nav-top ul button:hover {\r\n  background-color: #47cad4;\r\n}\r\n\r\n#ccr-nav-main .nav li a i {\r\n  font-size: .75em;\r\n  padding-left: 10px;\r\n  line-height: 40px;\r\n}\r\n\r\n#ccr-nav-main .nav li ul a i {\r\n  float: right;\r\n}\r\n\r\n/* 2.2 - ccr-site-title \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-site-title .container {\r\n  padding: 20px 0;\r\n}\r\n\r\n#ccr-site-title .site-logo a {\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  width: 300px;\r\n}\r\n\r\n#ccr-site-title .site-logo h1 {\r\n  color: #818285;\r\n  font-size: 2em;\r\n  font-weight: normal;\r\n}\r\n\r\n#ccr-site-title .site-logo h1 span {\r\n  color: #515252;\r\n  font-weight: 700;\r\n}\r\n\r\n#ccr-site-title .site-logo h3 {\r\n  color: #333333;\r\n  font-size: .925em;\r\n  font-weight: 400;\r\n}\r\n\r\n#ccr-site-title .site-logo img {\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  padding-right: 20px;\r\n  float: left;\r\n}\r\n\r\n#ccr-site-title .add-space {\r\n  text-align: center;\r\n  font-size: 3em;\r\n  color: #FFF;\r\n  background: #d5d5d5;\r\n  line-height: 80px;\r\n  width: 728px;\r\n  height: 90px;\r\n  float: right;\r\n}\r\n\r\n/* 2.3 - ccr-nav-main \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-nav-main {\r\n  background-color: #2cb2bc;\r\n  width: 100%;\r\n  height: 40px;\r\n}\r\n\r\n#ccr-nav-main .navbar-collapse {\r\n  padding-left: 0px;\r\n  float: left;\r\n}\r\n\r\n#ccr-nav-main .nav li {\r\n  border-left: 1px solid rgba(255, 255, 255, .3);\r\n  border-right: 1px solid rgba(0, 0, 0, .1);\r\n}\r\n\r\n#ccr-nav-main .nav li a {\r\n\r\n  color: #fff;\r\n  font-weight: 400;\r\n  font-size: 1.125em;\r\n  background-color: #2cb2bc;\r\n  padding: 0px 20px;\r\n  line-height: 40px;\r\n  height: 40px;\r\n  -webkit-transition: all .15s ease-in;\r\n  transition: all .15s ease-in;\r\n}\r\n\r\n#ccr-nav-main .nav li:first-child {\r\n  border-left: none;\r\n}\r\n\r\n#ccr-nav-main .nav li:last-child {\r\n  border-right: none;\r\n}\r\n\r\n#ccr-nav-main .nav li a:hover {\r\n  background-color: #47cad4;\r\n}\r\n\r\n#ccr-nav-main .current-time {\r\n  color: #fff;\r\n  font-weight: 400;\r\n  font-size: 1.125em;\r\n  padding: 0px 20px;\r\n  line-height: 40px;\r\n  padding-right: 0px;\r\n  height: 40px;\r\n}\r\n\r\n.nav ul.sub-menu {\r\n  display: none;\r\n  position: absolute;\r\n  top: 40px;\r\n  left: 0;\r\n  z-index: 100;\r\n}\r\n\r\n#ccr-nav-main .nav ul.sub-menu li {\r\n  position: relative;\r\n  border-left: none;\r\n  border-right: none;\r\n}\r\n\r\n.nav ul.sub-menu li a {\r\n  display: inline-block;\r\n  width: 180px;\r\n  min-height: 40px;\r\n  border-top: 1px solid rgba(255, 255, 255, .3);\r\n}\r\n\r\n.nav ul.sub-menu ul.sub-menu-2,\r\n.nav ul.sub-menu ul.sub-menu-2 ul.sub-menu-3 {\r\n  position: absolute;\r\n  display: none;\r\n  margin-left: 180px;\r\n  top: 0;\r\n  border-left: 1px solid #47cad4;\r\n  z-index: 200;\r\n}\r\n\r\n.nav ul.sub-menu ul.sub-menu-2 ul.sub-menu-3 {\r\n  z-index: 300;\r\n}\r\n\r\n.dropdown-menu {\r\n  background-color: #2cb2bc;\r\n}\r\n\r\n.dropdown-menu>li>a:hover,\r\n.dropdown-menu>li>a:focus,\r\n.dropdown-menu>.active>a,\r\n.dropdown-menu>.active>a:hover,\r\n.dropdown-menu>.active>a:focus {\r\n  background-image: none;\r\n  background-color: #47cad4;\r\n}\r\n\r\n/* 2.4 - ccr-nav-below-main\r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-nav-below-main {\r\n  background-color: #f2f2f4;\r\n  width: 100%;\r\n}\r\n\r\n#ccr-nav-below-main .navbar-collapse {\r\n  padding-left: 0px;\r\n  float: left;\r\n}\r\n\r\n#ccr-nav-below-main .nav li a {\r\n  height: 40px;\r\n  color: #5f5f5f;\r\n  font-weight: 400;\r\n  font-size: 1.07142857em;\r\n  padding: 0px 20px;\r\n  line-height: 40px;\r\n}\r\n\r\n#ccr-nav-below-main .nav li a:hover {\r\n  color: #2cb2bc;\r\n}\r\n\r\n#ccr-nav-below-main .ccr-language {\r\n  float: right;\r\n}\r\n\r\n#ccr-nav-below-main .ccr-language li {\r\n  float: left;\r\n  line-height: 40px;\r\n  padding: 0 10px;\r\n}\r\n\r\n#ccr-nav-below-main .ccr-language li:last-child {\r\n  padding-right: 0px;\r\n}\r\n\r\n#ccr-nav-below-main .ccr-language img {\r\n  height: 14px;\r\n  width: 24px;\r\n  display: inline-block;\r\n  margin-right: 10px;\r\n}\r\n\r\n/* 2.0 Header  End\r\n---------------------------------------------------------------------- */\r\n"

/***/ }),

/***/ "./src/app/header1/header1.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"ccr-header\">\n  <section id=\"ccr-nav-top\" class=\"fullwidth\">\n    <div class=\"\">\n      <div class=\"container\">\n        <nav class=\"top-menu\">\n          <ul class=\"left-top-menu\">\n            <li ><a routerLink='/Home'> Home</a></li>\n            <li ><a href=\"#\">Site Map</a></li>\n            <li ><a routerLink='/Contact Us'>Contact</a></li>\n          </ul>\n          <!-- /.left-top-menu -->\n          <ul class=\"right-top-menu pull-right\">\n            <li *ngFor=\"let menu of menus\"><a routerLink=\"/{{menu}}\">{{menu}}</a></li>\n            {{menu|translate}}\n            <li>\n              <form class=\"form-inline\" role=\"form\" action=\"#\">\n                <input type=\"search\" placeholder=\"Search here...\" required>\n                <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n              </form>\n            </li>\n          </ul>\n          <!--  /.right-top-menu -->\n        </nav>\n        <!-- /.top-menu -->\n      </div>\n    </div>\n  </section>\n  <!--  /#ccr-nav-top  -->\n  <section id=\"ccr-site-title\">\n    <div class=\"container\">\n      <div class=\"site-logo\">\n        <a href=\"index.html\" class=\"navbar-brand\">\n          <img src=\"assets/img/logo.png\" alt=\"Side Logo\" />\n            <h1>Daily <span>News</span></h1>\n            <h3 translate>The daily news source</h3>\n        </a>\n      </div>\n      <!-- / .navbar-header -->\n      <div class=\"add-space\">\n        728 x 90 px Banner\n      </div>\n      <!-- / .adspace -->\n    </div>\n    <!-- /.container -->\n  </section>\n  <!-- / #ccr-site-title -->\n  <section id=\"ccr-nav-main\">\n    <nav class=\"main-menu\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".ccr-nav-main\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n          <!-- /.navbar-toggle -->\n        </div>\n        <!-- / .navbar-header -->\n        <div class=\"collapse navbar-collapse ccr-nav-main\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\" *ngFor=\"let menu1 of menus1\"><a routerLink=\"/{{menu1}}\">{{menu1}}</a></li>\n            <!--<li><a class=\"active\" href=\"index.html\">Home</a></li>\n            <li><a href=\"match.html\">Matches</a></li>\n            <li><a href=\"tournament.html\">Tournaments</a></li>\n            <li><a href=\"contact.html\">Contact Us</a></li>\n            <li><a href=\"about.html\">About Us</a></li>-->\n          </ul>\n          <!-- /  .nav -->\n        </div>\n        <!-- /  .collapse .navbar-collapse  -->\n        <div id=\"currentTime\" class=\"pull-right current-time\">\n          <i class=\"fa fa-clock-o\"> <app-clock></app-clock></i>\n        </div>\n        <!-- / #currentTime -->\n      </div>\n      <!-- /.container -->\n    </nav>\n    <!-- /.main-menu -->\n  </section>\n  <!-- / #ccr-nav-main -->\n  <section id=\"ccr-nav-below-main\">\n    <nav class=\"second-menu\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".ccr-nav-below-main\">\n            <i class=\"fa fa-bars\"></i>\n          </button>\n          <!-- /.navbar-toggle -->\n        </div>\n        <!-- / .navbar-header -->\n        <div class=\"collapse navbar-collapse ccr-nav-below-main\">\n          <ul class=\"nav navbar-nav\">\n            <li><a href=\"#\">Cricket</a></li>\n            <li><a href=\"#\">Football</a></li>\n            <li><a href=\"#\">Hockey</a></li>\n            <li><a href=\"#\">Badminton</a></li>\n            <li><a href=\"#\">NBA</a></li>\n          </ul>\n          <!-- /.nav /.navbar-nav -->\n        </div>\n        <div class=\"ccr-language\">\n          <ul>\n            <li translate>Language:</li>\n            <li><a (click)=\"switchLanguage('en')\"><img src=\"assets/img/uk.png\" alt=\"UK\">English</a></li>\n            <li><a (click)=\"switchLanguage('fr')\"><img src=\"assets/img/france.png\" alt=\"France\">France</a></li>\n            <li><a (click)=\"switchLanguage('de')\"><img src=\"assets/img/garman.png\" alt=\"Garman\">German</a></li>\n          </ul>\n        </div>\n        <!-- /.ccr-language -->\n      </div>\n      <!-- /.container -->\n    </nav>\n    <!-- /.second-menu -->\n  </section>\n  <!-- / #ccr-nav-below-main -->\n</header>\n<!-- /#ccr-header -->"

/***/ }),

/***/ "./src/app/header1/header1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Header1Component = /** @class */ (function () {
    function Header1Component(translate) {
        this.translate = translate;
        this.menus = ['Login', 'Register', 'Subscribe'];
        this.menus1 = ['Home', 'Matches', 'Players', 'Tournaments', 'Contact Us', 'About Us', 'Admin'];
        translate.setDefaultLang('en');
    }
    Header1Component.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    Header1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header1',
            template: __webpack_require__("./src/app/header1/header1.component.html"),
            styles: [__webpack_require__("./src/app/header1/header1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], Header1Component);
    return Header1Component;
}());



/***/ }),

/***/ "./src/app/latest-post/latest-post.component.css":
/***/ (function(module, exports) {

module.exports = "/* 7.2 - ccr-latest-post-gallery    \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-latest-post-gallery {\r\n  overflow: hidden;\r\n  ;\r\n}\r\n\r\n#ccr-latest-post-gallery .ccr-latest-post {\r\n  margin-top: 5px;\r\n}\r\n\r\n#ccr-latest-post-gallery li {\r\n  width: 31.33%;\r\n  float: left;\r\n  padding: 10px 0;\r\n}\r\n\r\n#ccr-latest-post-gallery li:nth-child(3n+3),\r\n#ccr-latest-post-gallery li:nth-child(3n+2) {\r\n  margin-left: 3%;\r\n}\r\n\r\n#ccr-latest-post-gallery li h4 {\r\n  font-size: 1.2em;\r\n}\r\n\r\n#ccr-latest-post-gallery li h4 a,\r\n#ccr-world-news li h5 a {\r\n  display: inline-block;\r\n  line-height: 1.2em;\r\n  width: 100%;\r\n}\r\n\r\n#ccr-latest-post-gallery .ccr-thumbnail p {\r\n  padding-top: 35%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/latest-post/latest-post.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-latest-post-gallery\">\n        <div class=\"ccr-gallery-ttile\">\n          <span></span>\n          <p>Latest Post Gallery</p>\n        </div>\n        <!-- .ccr-gallery-ttile -->\n        <ul class=\"ccr-latest-post\">\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail1.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail2.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail3.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail4.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail5.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n          <li>\n            <div class=\"ccr-thumbnail\">\n              <img src=\"assets/img/thumbnail6.jpg\" alt=\"Thumbnail 1\">\n              <p><a href=\"#postlink\">Read More</a></p>\n            </div>\n            <h4><a href=\"#postlink\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>\n          </li>\n        </ul>\n        <!-- /.ccr-latest-post -->\n      </section>\n      <!--  /#ccr-latest-post-gallery  -->"

/***/ }),

/***/ "./src/app/latest-post/latest-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatestPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LatestPostComponent = /** @class */ (function () {
    function LatestPostComponent() {
    }
    LatestPostComponent.prototype.ngOnInit = function () {
    };
    LatestPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-latest-post',
            template: __webpack_require__("./src/app/latest-post/latest-post.component.html"),
            styles: [__webpack_require__("./src/app/latest-post/latest-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LatestPostComponent);
    return LatestPostComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n\tpadding: 20px;\r\n\r\n}\r\n.col-md-8\r\n\t{\r\n\t\tpadding-left:250px;\r\n\t}\r\n.col-md-4\r\n\t{\r\n\t\t/*float: right;*/\r\n\t\tbackground-color: #2cb2bc;\r\n\t}\r\n.login-image{\r\n\t\twidth: 250px;\r\n\t\theight: 250px;\r\n}\r\n/*For authentication*/\r\n.photo {\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n.card {\r\n  width: 20rem;\r\n  margin: 0 auto;\r\n}\r\n.btn\r\n{\r\n\tposition: centre;\r\n\tfloat: inherit;\r\n}\r\n.btn:hover\r\n{\r\n\tcolor: blue;\r\n}\r\n.btn-group:\r\n{\r\n\tpadding: 10px;\r\n}\r\n/*Authentication ends*/"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container\">\n <div class=\"row\"> \n  <div class=\"col-md-8\">\n    <div class=\"about-img\">\n      <img class=\"login-image\" [src]=\"loginimage\">\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <div *ngIf=\"!user\">\n    <h1>Login</h1>\n <!--OAuth Authentication-->  \n   \n<!--OAuth Authentication-->\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"text\" class=\"form-control\" name=\"email\" placeholder=\"johnny@gmail.com\" ngControl=\"email\" ngModel required #email=\"ngModel\">\n      </div>\n      <div class='form-group'>\n        <label for=\"name\">Password</label>\n        <input type=\"password\" id=\"pwd\" placeholder=\"*************\" class=\"form-control\" name=\"password\" ngControl=\"Password\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"form-control btn btn-primary btn-send\" type=\"submit\">Submit</button>\n      </div>\n    </form>\n    \n     <div class=\"classard-text\"><strong>Or login with,</strong>\n        <div class =\"btn-group\">\n        <button class=\"btn btn-info\" (click)=\"signInWithGoogle()\"><span class=\"fa fa-google\"></span></button>\n        <button class=\"btn btn-info\" (click)=\"signInWithFB()\"><span class=\"fa fa-facebook\"></span></button>\n        <button class=\"btn btn-info\" (click)=\"signInWithLinkedIn()\"><span class=\"fa fa-linkedin\"></span></button>\n        </div>\n      </div>\n    </div>\n  <div *ngIf=\"user\" class=\"card text-center\">\n    <h6 class=\"card-header\">\n      Hi,{{user.name}}\n    </h6>\n    <div class=\"card-block\"></div>\n    <img class=\"card-img-top img-responsive photo\" src=\"{{ user.photoUrl }}\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">{{ user.name }}</h4>\n      <p class=\"card-text\">{{ user.email }}</p>\n    </div>\n    <div class=\"card-block\">\n      <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\n    </div>\n  </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__("./src/app/login/person.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularx_social_login__ = __webpack_require__("./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AuthService } from 'angular4-oauth-login';
// import { SocialUser } from 'angular4-oauth-login';
// import { FacebookLoginProvider, GoogleLoginProvider } from 'angular4-oauth-login';


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.loginimage = './assets/img/login.png';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
        });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_2_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_2_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.prototype.onSubmit = function (value) {
        this.person = new __WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */](value.email, value.password);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularx_social_login__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(login, password) {
        this.login = login;
        this.password = password;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/main-section/main-section.component.css":
/***/ (function(module, exports) {

module.exports = "/* 3.0 - ccr-main-section\r\n---------------------------------------------------------------------- */\r\n#ccr-left-section.col-md-8,\r\n#ccr-right-section.col-md-4{\r\n\tmin-height: 400px;\r\n\tpadding: 0px;\r\n\tpadding-bottom: 40px;\r\n}\r\n/* 3.1 - ccr-left-section    \r\n---------------------------------------------------------------------- */\r\n#ccr-left-section.col-md-8{\r\n\tborder-right: 1px solid #e3e2e2;\r\n\tpadding-right: 15px;\r\n}\r\n#ccr-left-section .ccr-last-update{\r\n\tbackground-color: #f2f2f4;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\toverflow: hidden;\r\n\tmargin-top: 15px;\r\n}\r\n#ccr-left-section .update-ribon{\r\n\tcolor:#FFF;\r\n\tfont-size: 1.142857142857143em;\r\n\tline-height: 40px;\r\n\tbackground-color: #2cb2bc;\r\n\twidth: 115px;\r\n\theight: 100%;\r\n\tpadding:0 5px 0 10px;\r\n\tfloat: left;\r\n}\r\n#ccr-left-section .update-ribon-right{\r\n\twidth: 0; \r\n\theight: 0; \r\n\tborder-top: 20px solid transparent;\r\n\tborder-bottom: 20px solid transparent; \r\n\tborder-left:15px solid #2cb2bc;\r\n\tfloat: left;\r\n}\r\n#ccr-left-section .update-news-text{ \r\n\tfloat: left;\r\n\tpadding-left: 10px;\r\n}\r\n#ccr-left-section .update-news-text ul{\r\n\tline-height: 40px;\r\n}\r\n#ccr-left-section .update-right-border{\r\n\twidth: 0;\r\n\theight: 40px;\r\n\tborder-right:5px solid #2cb2bc;\r\n\tfloat: right;\r\n}\r\n#latestUpdate > li > a{\r\n\tfont-size: 1.2em;\r\n}\r\n/* 3.2 - ccr-right-section\r\n---------------------------------------------------------------------- */\r\n#ccr-main-section #ccr-right-section.col-md-4{\r\n\tpadding-left: 15px;\r\n\tmargin-top: 40px;\r\n}\r\n#ccr-main-section #ccr-right-section.col-md-4.ccr-home{\r\n\tmargin-top: 15px;\r\n}\r\n#social-buttons {\r\n\toverflow: hidden;\r\n\tborder:1px solid #e3e2e2;\r\n\tpadding: 15px 15px 0;\r\n\tmargin-bottom: 40px;\r\n}\r\n#social-buttons li{\r\n\tfloat: left;\r\n\twidth: 65px;\r\n\tmargin-right: 20px;\r\n}\r\n#social-buttons li:last-child{\r\n\tmargin-right:0;\r\n}\r\n#social-buttons li p{\r\n\tline-height: 22px;\r\n\ttext-align: center;\r\n\tbackground-color: #f2f2f4;\t\r\n\tborder:1px solid #e3e2e2;\r\n\tmargin: 15px 0;\r\n\tfloat: left;\r\n\twidth: 70px;\r\n\theight: 50px;\r\n}\r\n#social-buttons p .bubble{\r\n\tbackground-image: url(/src/assets/img/bubble.png);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: top center;\r\n\tmargin-top: -10px;\r\n\twidth: 70px;\r\n\theight: 10px;\r\n\tfloat: left;\r\n\tz-index: 99999;\r\n}\r\n#social-buttons p  .count{\r\n\tfont-size: 1.2em;\r\n\tpadding: 0 15px;\r\n}\r\n#social-buttons a{\r\n\ttext-align:center;\r\n\tline-height: 40px;\r\n\tfont-size: 1.3em;\r\n\tmargin: 0 15px;\r\n\tbackground-color: #f2f2f4;\r\n\tfloat:left;\r\n\twidth:40px;\r\n\theight:40px;\r\n}\r\n#social-buttons a:hover{\r\n\tcolor: #FFF;\r\n}\r\n/* 3.0 ccr-main-section End\r\n---------------------------------------------------------------------- */\r\n/* 4.0 Right Sidebar\r\n---------------------------------------------------------------------- */\r\n/* 4.4 - ccr-sidebar-add-place\r\n---------------------------------------------------------------------- */\r\n.sidebar-add-place\r\n{\r\n\tfont-size: 3em;\r\n\ttext-align: center;\r\n\tcolor: #FFF;\r\n\tbackground-color: #d5d5d5;\r\n\tmax-width: 370px;\r\n\tmax-height: 250px;\r\n\tline-height: 250px;\r\n\tmargin-bottom: 40px;\r\n}\r\n/*= 4.0 - Right Sidebar End\r\n---------------------------------------------------------------------- */\r\n#ccr-slide-main {\r\n  position: relative;\r\n  margin: 10px 0px 50px 0px;\r\n}\r\n#ccr-slide-main p {\r\n  position: inherit;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, .4);\r\n  width: 100%;\r\n  min-height: 60px;\r\n  line-height: 60px;\r\n  margin-bottom: 0px;\r\n}\r\n#ccr-slide-main p a {\r\n  color: #fff;\r\n  font-size: 1.71428571em;\r\n  padding-left: 30px;\r\n}\r\n#ccr-slide-main .carousel-indicators {\r\n  bottom: -40px;\r\n}\r\n#ccr-slide-main .carousel-indicators li {\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 5px;\r\n  border: 1px solid rgba(0, 0, 0, .1);\r\n  border-radius: 0px;\r\n}\r\n#ccr-slide-main .carousel-indicators .active {\r\n  background-color: #2cb2bc;\r\n}\r\n#ccr-slide-main .carousel-control {\r\n\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  background: #2cb2bc;\r\n  line-height: 36px!important;\r\n  -moz-line-height: 36px!important;\r\n  height: 40px;\r\n  width: 40px;\r\n  top: 45%;\r\n  opacity: inherit;\r\n}\r\n#ccr-slide-main .carousel-control:hover {\r\n  background-color: #5f5f5f;\r\n}"

/***/ }),

/***/ "./src/app/main-section/main-section.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<section id=\"ccr-main-section\">\n  <section id=\"ccr-slide-main\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Carousel items -->\n    <div class=\"carousel-inner\">\n      <div class=\"active item\">\n        <div class=\" slide-element\">\n          <img src=\"assets/img/slide/web-slider1.jpg\" alt=\"Main Slide Image 1\">\n          <p><a href=\"#\">Lorem ipsum dolor sit amet</a></p>\n        </div>\n        <!-- /.slide-element -->\n      </div>\n      <!--/.active /.item -->\n      <div class=\"item\">\n        <div class=\" slide-element\">\n          <img src=\"assets/img/slide/web-slider2.jpg\" alt=\"Main Slide Image 1\">\n          <p><a href=\"#\">Lorem ipsum dolor sit amet</a></p>\n        </div>\n        <!-- /.slide-element -->\n      </div>\n      <!--  /.item -->\n      <div class=\"item\">\n        <div class=\" slide-element\">\n          <img src=\"assets/img/slide/web-slider4.jpg\" alt=\"Main Slide Image 1\">\n          <p><a href=\"#\">Lorem ipsum dolor sit amet</a></p>\n        </div>\n        <!-- /.slide-element -->\n      </div>\n      <!-- .item -->\n      <div class=\"item\">\n        <div class=\" slide-element\">\n          <img src=\"assets/img/slide/web-slider5.jpg\" alt=\"Main Slide Image 1\">\n          <p><a href=\"#\">Lorem ipsum dolor sit amet</a></p>\n        </div>\n        <!-- /.slide-element -->\n      </div>\n      <!-- /.item -->\n    </div>\n    <!-- /.carousel-inner -->\n    <!-- slider nav -->\n    <a class=\"carousel-control left\" href=\"#ccr-slide-main\" data-slide=\"prev\"><i class=\"fa fa-arrow-left\"></i></a>\n    <a class=\"carousel-control right\" href=\"#ccr-slide-main\" data-slide=\"next\"><i class=\"fa fa-arrow-right\"></i></a>\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#ccr-slide-main\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#ccr-slide-main\" data-slide-to=\"1\"></li>\n      <li data-target=\"#ccr-slide-main\" data-slide-to=\"2\"></li>\n      <li data-target=\"#ccr-slide-main\" data-slide-to=\"3\"></li>\n    </ol>\n    <!-- /.carousel-indicators -->\n  </section>\n  <div class=\"container\">\n    <!-- /#ccr-slide-main -->\n    <section id=\"ccr-left-section\" class=\"col-md-8\">\n      <app-latest-post></app-latest-post>\n      <section class=\"bottom-border\"></section>\n      <!-- /#bottom-border -->\n      <app-world-news></app-world-news>\n      <section class=\"bottom-border\"></section>\n      <app-sports-gallery></app-sports-gallery>\n      <section class=\"bottom-border\"></section>\n    </section>\n    <!-- /.col-md-8 / #ccr-left-section -->\n    <aside id=\"ccr-right-section\" class=\"col-md-4 ccr-home\">\n      <app-popular-post></app-popular-post>\n      <app-video-post></app-video-post>\n      <app-calendar></app-calendar>\n      <app-older-post></app-older-post>\n      <app-entertainment-post></app-entertainment-post>\n      <app-newslater></app-newslater>\n      <app-find-on-fb></app-find-on-fb>\n      <app-social-buttons></app-social-buttons>\n    </aside>\n  </div>\n  <!-- / .col-md-4  / #ccr-right-section -->\n  <!-- /.container -->\n</section>\n<!--<div class=\"clearfix\"></div>-->\n<!-- / #ccr-main-section -->\n<app-footer-sidebar></app-footer-sidebar>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/main-section/main-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainSectionComponent = /** @class */ (function () {
    function MainSectionComponent() {
    }
    MainSectionComponent.prototype.ngOnInit = function () {
    };
    MainSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-section',
            template: __webpack_require__("./src/app/main-section/main-section.component.html"),
            styles: [__webpack_require__("./src/app/main-section/main-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainSectionComponent);
    return MainSectionComponent;
}());



/***/ }),

/***/ "./src/app/matches/matches.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    \r\n  font: sans-serif;\r\n  font-size: 20px;\r\n  overflow: hidden;\r\n  background-color:;\r\n  padding: 5px 5px;\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n  padding: 10px;\r\n  overflow: hidden\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_right {\r\n  top: 26px;\r\n  z-index: 2;\r\n  opacity: 1;\r\n  width: 35px;\r\n  height: 35px;\r\n  border: 0;\r\n  text-shadow: none;\r\n  text-align: center;\r\n  -webkit-transition: all ease-in-out .3s;\r\n  transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_carousel_control_icons {\r\n  line-height: 35px;\r\n  font-size: 20px!important;\r\n  font-weight: normal!important;\r\n  margin-top: 8px;\r\n}\r\n\r\n.team_columns_carousel_control_left {\r\n  left: 26px!important\r\n}\r\n\r\n.team_columns_carousel_control_right {\r\n  left: 63px!important\r\n}\r\n\r\n.adv_left {\r\n  left: 41px!important\r\n}\r\n\r\n.adv_right {\r\n  left: 78px!important\r\n}\r\n\r\n.team_columns_item_image {\r\n  margin-top: 0px;\r\n  padding-top: 0px;\r\n  padding-bottom: 10px\r\n}\r\n\r\n.team_columns_item_image img {\r\n  width: 100%;\r\n  -webkit-filter: grayscale(70%);\r\n  -moz-filter: grayscale(70%);\r\n  -ms-filter: grayscale(70%);\r\n  -o-filter: grayscale(70%);\r\n  filter: grayscale(70%);\r\n  -webkit-transition: all ease-in-out .3s;\r\n  transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_image:hover img {\r\n  -webkit-filter: grayscale(0%);\r\n  -moz-filter: grayscale(0%);\r\n  -ms-filter: grayscale(0%);\r\n  -o-filter: grayscale(0%);\r\n  filter: grayscale(0%)\r\n}\r\n\r\n.team_columns_item_caption {\r\n  padding: 10px;\r\n  text-align: center;\r\n  padding-bottom: 30px\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n  width: 15%\r\n}\r\n\r\n.team_columns_item_caption h4 {\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption h5 {\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p {\r\n  font-weight: 400;\r\n  margin-top: 20px;\r\n  font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n  text-decoration: none;\r\n  -webkit-transition: all ease-in-out .3s;\r\n  transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n  width: 25px;\r\n  float: left;\r\n  height: 25px;\r\n  display: block;\r\n  line-height: 25px;\r\n  margin-right: 2px;\r\n  text-decoration: none;\r\n  -webkit-transition: background ease-in-out .3s;\r\n  transition: background ease-in-out .3s\r\n}\r\n\r\n@media(min-width:768px) and (max-width:789px) {\r\n  .adv_team_columns_item_social a,\r\n  .adv_team_columns_item_social a:visited {\r\n    margin-right: 0\r\n  }\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n  background: #fff\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_left:hover,\r\n.team_columns_carousel_control_left:active,\r\n.team_columns_carousel_control_left:focus,\r\n.team_columns_carousel_control_right,\r\n.team_columns_carousel_control_right:hover,\r\n.team_columns_carousel_control_right:active,\r\n.team_columns_carousel_control_right:focus {\r\n  color: #fff;\r\n  background: #feb600!important\r\n}\r\n\r\n.team_columns_item_caption {\r\n  color: #fff;\r\n  background: #171717\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n  border-top: 2px solid #feb600\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n  color: #feb600\r\n}\r\n\r\n.team_columns_item_caption p a:hover,\r\n.team_columns_item_caption p a:active {\r\n  color: #cb9200\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n  color: #171717;\r\n  background: #feb600\r\n}\r\n\r\n.team_columns_item_social a:hover,\r\n.team_columns_item_social a:active {\r\n  background: #cb9200\r\n}\r\n\r\n.four_shows_one_move .cloneditem-1,\r\n.four_shows_one_move .cloneditem-2,\r\n.four_shows_one_move .cloneditem-3 {\r\n  display: none\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n  .four_shows_one_move .carousel-inner>.active.left,\r\n  .four_shows_one_move .carousel-inner>.prev {\r\n    left: -50%\r\n  }\r\n  .four_shows_one_move .carousel-inner>.active.right,\r\n  .four_shows_one_move .carousel-inner>.next {\r\n    left: 50%\r\n  }\r\n  .four_shows_one_move .carousel-inner>.left,\r\n  .four_shows_one_move .carousel-inner>.prev.right,\r\n  .four_shows_one_move .carousel-inner>.active {\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner .cloneditem-1 {\r\n    display: block\r\n  }\r\n}\r\n\r\n@media all and (min-width: 768px) and (transform-3d), all and (min-width: 768px) and (-webkit-transform-3d) {\r\n  .four_shows_one_move .carousel-inner>.item.active.right,\r\n  .four_shows_one_move .carousel-inner>.item.next {\r\n    -webkit-transform: translate3d(50%, 0, 0);\r\n    transform: translate3d(50%, 0, 0);\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner>.item.active.left,\r\n  .four_shows_one_move .carousel-inner>.item.prev {\r\n    -webkit-transform: translate3d(-50%, 0, 0);\r\n    transform: translate3d(-50%, 0, 0);\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner>.item.left,\r\n  .four_shows_one_move .carousel-inner>.item.prev.right,\r\n  .four_shows_one_move .carousel-inner>.item.active {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    left: 0\r\n  }\r\n}\r\n\r\n@media all and (min-width: 992px) {\r\n  .four_shows_one_move .carousel-inner>.active.left,\r\n  .four_shows_one_move .carousel-inner>.prev {\r\n    left: -25%\r\n  }\r\n  .four_shows_one_move .carousel-inner>.active.right,\r\n  .four_shows_one_move .carousel-inner>.next {\r\n    left: 25%\r\n  }\r\n  .four_shows_one_move .carousel-inner>.left,\r\n  .four_shows_one_move .carousel-inner>.prev.right,\r\n  .four_shows_one_move .carousel-inner>.active {\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner .cloneditem-2,\r\n  .four_shows_one_move .carousel-inner .cloneditem-3 {\r\n    display: block\r\n  }\r\n}\r\n\r\n@media all and (min-width: 992px) and (transform-3d), all and (min-width: 992px) and (-webkit-transform-3d) {\r\n  .four_shows_one_move .carousel-inner>.item.active.right,\r\n  .four_shows_one_move .carousel-inner>.item.next {\r\n    -webkit-transform: translate3d(25%, 0, 0);\r\n    transform: translate3d(25%, 0, 0);\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner>.item.active.left,\r\n  .four_shows_one_move .carousel-inner>.item.prev {\r\n    -webkit-transform: translate3d(-25%, 0, 0);\r\n    transform: translate3d(-25%, 0, 0);\r\n    left: 0\r\n  }\r\n  .four_shows_one_move .carousel-inner>.item.left,\r\n  .four_shows_one_move .carousel-inner>.item.prev.right,\r\n  .four_shows_one_move .carousel-inner>.item.active {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    left: 0\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/matches/matches.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container\">\n  <h2>Live Matches\n  \t<button class=\"btn btn-success\" type=\"button\" style=\"float:right;padding-right:20px;\">Create Match\n  \t\t</button>\n  </h2>\n  \n  <div class=\"container\">\n   <div class=\"row\">\n      <div id=\"adv_team_4_columns_carousel\" class=\"carousel slide four_shows_one_move team_columns_carousel_wrapper\" data-ride=\"carousel\" data-interval=\"2000\" data-pause=\"hover\">\n         <!--========= Wrapper for slides =========-->\n         <div class=\"carousel-inner\" role=\"listbox\">\n            <!--========= 1st slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs<p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 2nd slide =========-->\n            <div class=\"item active\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 3rd slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 4th slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 5th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 6th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 7th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                    <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 8th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!--======= Navigation Buttons =========-->\n         <!--======= Left Button =========-->\n         <a class=\"left carousel-control team_columns_carousel_control_left adv_left\" href=\"#adv_team_4_columns_carousel\" role=\"button\" data-slide=\"prev\">\n         <span class=\"fa fa-angle-left team_columns_carousel_control_icons\" aria-hidden=\"true\"></span>\n         <span class=\"sr-only\">Previous</span>\n         </a>\n         <!--======= Right Button =========-->\n         <a class=\"right carousel-control team_columns_carousel_control_right adv_right\" href=\"#adv_team_4_columns_carousel\" role=\"button\" data-slide=\"next\">\n         <span class=\"fa fa-angle-right team_columns_carousel_control_icons\" aria-hidden=\"true\"></span>\n         <span class=\"sr-only\">Next</span>\n         </a>\n      </div>\n   </div>\n</div>\n\n<div align=\"Right\" style=\"padding-right:20px\">\n  <h3>\n\t\t<a href=\"\">More....</a>\n\t</h3>\n</div>\n\n<h2>Recent Matches</h2>\n\n  <div class=\"container\">\n   <div class=\"row\">\n      <div id=\"adv_team_4_columns_carousel\" class=\"carousel slide four_shows_one_move team_columns_carousel_wrapper\" data-ride=\"carousel\" data-interval=\"2000\" data-pause=\"hover\">\n         <!--========= Wrapper for slides =========-->\n         <div class=\"carousel-inner\" role=\"listbox\">\n            <!--========= 1st slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 2nd slide =========-->\n            <div class=\"item active\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 3rd slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 4th slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 5th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 6th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 7th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n            <!--========= 8th Slide =========-->\n            <div class=\"item\">\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Lahore</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n               <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n                  <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n                  <div class=\"team_columns_item_caption\">\n                     <h4>Karachi</h4>\n                     <p>vs</p>\n                     <h5>PAKISTAN</h5>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <!--======= Navigation Buttons =========-->\n         <!--======= Left Button =========-->\n         <a class=\"left carousel-control team_columns_carousel_control_left adv_left\" href=\"#adv_team_4_columns_carousel\" role=\"button\" data-slide=\"prev\">\n         <span class=\"fa fa-angle-left team_columns_carousel_control_icons\" aria-hidden=\"true\"></span>\n         <span class=\"sr-only\">Previous</span>\n         </a>\n         <!--======= Right Button =========-->\n         <a class=\"right carousel-control team_columns_carousel_control_right adv_right\" href=\"#adv_team_4_columns_carousel\" role=\"button\" data-slide=\"next\">\n         <span class=\"fa fa-angle-right team_columns_carousel_control_icons\" aria-hidden=\"true\"></span>\n         <span class=\"sr-only\">Next</span>\n         </a>\n      </div>\n   </div>\n</div>\n\n<div align=\"Right\" style=\"padding-right:20px\">\n  <h3>\n\t\t<a href=\"\">More....</a>\n\t</h3>\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/matches/matches.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchesComponent = /** @class */ (function () {
    function MatchesComponent() {
    }
    MatchesComponent.prototype.ngOnInit = function () {
    };
    MatchesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-matches',
            template: __webpack_require__("./src/app/matches/matches.component.html"),
            styles: [__webpack_require__("./src/app/matches/matches.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MatchesComponent);
    return MatchesComponent;
}());



/***/ }),

/***/ "./src/app/newslater/newslater.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.5 - ccr-sidebar-newslater\r\n---------------------------------------------------------------------- */\r\n.sidebar-newslater-form {\r\n\tmax-height: 50px;\r\n\tmargin-bottom: 40px;\r\n}\r\n.sidebar-newslater-form .ccr-gallery-ttile{\r\n\tborder-right: 0;\r\n}\r\n.sidebar-newslater-form form{\r\n\tmargin-top: 10px;\r\n}\r\n#ccr-sidebar-newslater input[type=\"email\"]{\r\n\tmin-width: 50px;\r\n\tmargin:6px 2%;\r\n\toutline-style: none;\r\n\tborder:none;\r\n\tpadding: 0 2%;\r\n\tborder: 1px solid #d7d7d7;\r\n\tline-height:20px;\r\n\twidth: 71%;\r\n\theight: 28px;\r\n\tfloat: left;\r\n}\r\n#ccr-sidebar-newslater button{\r\n\tcolor: #FFF;\r\n\tfont-weight: 700;\r\n\tbackground-color: #2cb2bc;\r\n\toutline-style: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: none;\r\n\twidth: 25.5%;\r\n\tmin-width: 35px;\r\n\tmargin-right: -2%;\r\n\tfloat: left;\r\n}\r\n#ccr-sidebar-newslater button:hover{\r\n\tbackground-color: #47cad4;\r\n}\r\n"

/***/ }),

/***/ "./src/app/newslater/newslater.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-sidebar-newslater\">\n        <div class=\"ccr-gallery-ttile\">\n          <span></span>\n          <p>\n            <label for=\"sb-newslater\"><strong>Newsletter</strong></label>\n          </p>\n        </div>\n        <!-- .ccr-gallery-ttile -->\n        <div class=\"sidebar-newslater-form\">\n          <form class=\"ccr-gallery-ttile\" action=\"#\">\n            <input type=\"email\" id=\"sb-newslater\" name=\"sb-newslater\" placeholder=\"Enter your email address\" required>\n            <button type=\"submit\">Subscribe</button>\n          </form>\n        </div>\n        <!-- /.sidebar-newslater-form -->\n      </section>\n      <!-- /#ccr-sidebar-newslater -->"

/***/ }),

/***/ "./src/app/newslater/newslater.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewslaterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewslaterComponent = /** @class */ (function () {
    function NewslaterComponent() {
    }
    NewslaterComponent.prototype.ngOnInit = function () {
    };
    NewslaterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-newslater',
            template: __webpack_require__("./src/app/newslater/newslater.component.html"),
            styles: [__webpack_require__("./src/app/newslater/newslater.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewslaterComponent);
    return NewslaterComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = "#ccr-404-error {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  overflow: hidden;\r\n}\r\n\r\n.error-404 {\r\n  color: #5f5f5f;\r\n  width: 350px;\r\n  text-align: center;\r\n  margin: 20px auto;\r\n}\r\n\r\n.error-404 .error-msg {\r\n  font-size: 5.8em;\r\n}\r\n\r\n.error-404 h2 {\r\n  font-size: 3.125em;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.error-404 p {\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.error-404 input[type=\"text\"] {\r\n  outline-style: none;\r\n  border: none;\r\n  padding: 0 10px;\r\n  border: 1px solid #d7d7d7;\r\n  line-height: 20px;\r\n  min-width: 50px;\r\n  margin: 5px;\r\n  width: 71%;\r\n  height: 28px;\r\n}\r\n\r\n.error-404 button {\r\n  font-weight: 700;\r\n  color: #FFF;\r\n  background-color: #2cb2bc;\r\n  outline-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  border: none;\r\n  width: 27%;\r\n  min-width: 35px;\r\n  margin-right: -3%;\r\n}\r\n\r\n.error-404 button:hover {\r\n  background-color: #47cad4;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"description\" content=\"\" >\n\t<meta name=\"author\" content=\"\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t<title>404 Error - Daily News </title>\n\t\n\n\n\n\n</head>\n\n<body>\n\n<div id=\"fb-root\"></div>\n<script>(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = \"//connect.facebook.net/en_GB/all.js#xfbml=1\";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));</script>\n\n\n\n\n\n<header id=\"ccr-header\">\n\t<section id=\"ccr-nav-top\" class=\"fullwidth\">\n\t\t<div class=\"\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<nav class=\"top-menu\">\n\t\t\t\t\t<ul class=\"left-top-menu\">\n\t\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Site Map</a></li>\n\t\t\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\n\t\t\t\t\t</ul><!-- /.left-top-menu -->\n\n\t\t\t\t\t<ul class=\"right-top-menu pull-right\">\n\t\t\t\t\t\t<li><a href=\"#\">Login</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Register</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Subscribe</a></li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<form class=\"form-inline\" role=\"form\" action=\"#\">\n\t\t\t\t\t\t\t\t<input type=\"search\" placeholder=\"Search here...\" required>\n\t\t\t\t\t\t\t\t  <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul> <!--  /.right-top-menu -->\n\t\t\t\t</nav> <!-- /.top-menu -->\n\t\t\t</div>\n\t\t</div>\t\n\t</section> <!--  /#ccr-nav-top  -->\n\n\n\t\n\t<section id=\"ccr-site-title\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"site-logo\">\n\t\t\t\t<a href=\"index.html\" class=\"navbar-brand\">\n\t\t\t\t\t<img src=\"/assets/img/logo.png\" alt=\"Side Logo\" />\n\t\t\t\t\t\t<h1>Daily <span>News</span></h1>\n\t\t\t\t\t\t<h3>The Daily News Source</h3>\n\t\t\t\t</a>\n\t\t\t</div> <!-- / .navbar-header -->\n\n\t\t\t<div class=\"add-space\">\n\t\t\t\t728 x 90 px Banner\n\t\t\t</div> <!-- / .adspace -->\n\n\t\t</div>\t<!-- /.container -->\n\t</section> <!-- / #ccr-site-title -->\n\n\n\n\t<section id=\"ccr-nav-main\">\n\t\t<nav class=\"main-menu\">\n\t\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".ccr-nav-main\">\n\t\t\t\t            <i class=\"fa fa-bars\"></i>\n\t\t\t          \t</button> <!-- /.navbar-toggle -->\n\t\t\t\t</div> <!-- / .navbar-header -->\n\n\t\t\t\t<div class=\"collapse navbar-collapse ccr-nav-main\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a class=\"active\" href=\"index.html\">Home</a></li>\n\t\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t\t<a href=\"#\">Blog <i class=\"fa fa-caret-down\"></i></a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t          \t<li><a href=\"blog.html\">Blog 1</a></li>\n\t\t\t\t\t          \t<li><a href=\"blog-2.html\">Blog 2</a></li>\n\t\t\t\t\t\t\t  \t<li><a href=\"blog-3.html\">Blog 3</a></li>\n\t\t\t\t\t        </ul><!-- /.sub-menu -->\n\t\t\t\t\t\t</li><!-- /.dropdown -->\n\t\t\t\t\t\t<li><a href=\"single.html\">Single</a></li>\n\t\t\t\t\t\t<li><a href=\"contact.html\">Contact</a></li>\n\t\t\t\t\t\t<li class=\"dropdown\"><a href=\"#\">Category <i class=\"fa fa-caret-down\"></i></a>\n\t\t\t\t\t\t\t<ul class=\"sub-menu\">\n\t\t\t\t\t\t\t\t<li><a href=\"category-1.html\">Category 1</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"category-2.html\">Category 2</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">More <i class=\"fa fa-caret-right\"></i></a>\n\t\t\t\t\t\t\t\t\t<ul class=\"sub-menu-2\">\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 1</a></li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 2</a></li>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">More <i class=\"fa fa-caret-right\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"sub-menu-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 1</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 2</a></li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 3</a></li>\n\t\t\t\t\t\t\t\t\t\t\t</ul><!-- /.sub-menu-3 -->\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Demo Link 3</a></li>\n\t\t\t\t\t\t\t\t\t</ul><!-- /.sub-menu-2 -->\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul><!-- /.sub-menu -->\n\t\t\t\t\t\t</li><!--  /.dropdown -->\n\t\t\t\t\t\t<li><a href=\"404.html\">404</a></li>\n\t\t\t\t\t</ul> <!-- /  .nav -->\n\t\t\t\t</div><!-- /  .collapse .navbar-collapse  -->\n\n\t\t\t\t<div id=\"currentTime\" class=\"pull-right current-time\">\n\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> 12:10 pm\n\t\t\t\t</div><!-- / #currentTime -->\n\n\t\t\t</div>\t<!-- /.container -->\n\t\t</nav> <!-- /.main-menu -->\n\t</section> <!-- / #ccr-nav-main -->\n\n\n\n\t<section id=\"ccr-nav-below-main\">\n\t\t<nav class=\"second-menu\">\n\t\t\t<div class=\"container\">\n\n\t\t\t\t<div class=\"navbar-header\">\n\t\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".ccr-nav-below-main\">\n\t\t\t\t            <i class=\"fa fa-bars\"></i>\n\t\t\t          \t</button> <!-- /.navbar-toggle -->\n\t\t\t\t</div> <!-- / .navbar-header -->\n\n\t\t\t\t<div class=\"collapse navbar-collapse ccr-nav-below-main\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a href=\"#\">Europe</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">USA</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Middle East</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Social and IT</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Culture</a></li>\n\t\t\t\t\t</ul> <!-- /.nav /.navbar-nav -->\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"ccr-language\">\n\t\t\t\t\t<ul> \n\t\t\t\t\t\t<li>Language:</li>\n\t\t\t\t\t\t<li><a href=\"#\"><img src=\"/assets/img/uk.png\" alt=\"UK\">English</a></li>\n\t\t\t\t\t\t<li><a href=\"#\"><img src=\"/assets/img/france.png\" alt=\"France\">France</a></li><li>\n\t\t\t\t\t\t<a href=\"#\"><img src=\"/assets/img/garman.png\" alt=\"Garman\">Garman</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div> <!-- /.ccr-language -->\n\t\t\t</div><!-- /.container -->\n\t\t</nav><!-- /.second-menu -->\n\t</section><!-- / #ccr-nav-below-main -->\n\n</header> <!-- /#ccr-header -->\n\n\n<section id=\"ccr-main-section\">\n\t<div class=\"container\">\n\n\n\t\t<section id=\"ccr-404-error\">\n\t\t\t<div class=\"error-404\">\n\t\t\t\t<p class=\"error-msg\">Error 404</p>\n\t\t\t\t<h2>Page Not Found!</h2>\n\t\t\t\t<p>Sorry! We could not found the page you are looking for! Please search below...</p>\n\t\t\t\t\n\t\t\t\t\t\t<form class=\"ccr-gallery-ttile\" action=\"#\">\n\t\t\t\t\t\t<input type=\"text\" id=\"404-search\" name=\"s\" placeholder=\"Search here...\" required>\n\t\t\t\t\t\t<button type=\"submit\">Search</button>\n\t\t\t\t\t</form> \n\t\t\t\n\t\t\t</div>\t<!-- /.error-404 -->\n\t\t</section> <!-- /#ccr-404-error -->\n\t</div> <!-- /.container -->\n</section> <!-- /#ccr-main-section -->\n\n\n\n\n<aside id=\"ccr-footer-sidebar\">\n\t<div class=\"container\">\n\t\t<ul>\n\t\t\t<li class=\"col-md-3\">\n\t\t\t\t<h5>About Us</h5>\n\t\t\t\t<div class=\"about-us\">\n\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias Ab veniam atque eius...\n\t\t\t\t</div>\n\t\t\t\t<div class=\"site-logo\">\n\t\t\t\t\t<a href=\"index.html\"><img src=\"/assets/img/logo.png\" alt=\"Side Logo\" /><h1>Daily <span>News</span></h1><h3>The Daily News Source</h3></a>\n\t\t\t\t</div> <!-- / .navbar-header -->\n\t\t\t\t\n\t\t\t</li>\n\t\t\t<li class=\"col-md-3\">\n\t\t\t\t<h5>Popular Post</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-1.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/sports-thumb-4.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-3.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-5.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Popular Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t</li>\n\t\t\t<li class=\"col-md-3\">\n\t\t\t\t<h5>Recent Post</h5>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-8.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/sports-thumb-6.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-7.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<img src=\"/assets/img/thumbnail-small-6.jpg\" alt=\"Avatar\">\n\t\t\t\t\t\t<a href=\"#\">Lorem Ipsum is a samply dummy text of Recent Post</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t</li>\n\t\t\t<li class=\"col-md-3\">\n\t\t\t\t<h5>Tags</h5>\n\t\t\t\t<div class=\"tagcloud\">\n\t\t\t\t\t<a href=\"#\">Football</a>\n\t\t\t\t\t<a href=\"#\">Games</a>\n\t\t\t\t\t<a href=\"#\">World News</a>\n\t\t\t\t\t<a href=\"#\">USA</a>\n\t\t\t\t\t<a href=\"#\">Salman</a>\n\t\t\t\t\t<a href=\"#\">Masrafi</a>\n\t\t\t\t\t<a href=\"#\">Afgan</a>\n\t\t\t\t\t<a href=\"#\">Obama</a>\n\t\t\t\t\t<a href=\"#\">t20</a>\n\t\t\t\t\t<a href=\"#\">Business</a>\n\t\t\t\t\t<a href=\"#\">Education</a>\n\t\t\t\t\t<a href=\"#\">Lorem</a>\n\t\t\t\t\t<a href=\"#\">Dhaka</a>\n\t\t\t\t\t<a href=\"#\">BBC</a>\n\t\t\t\t\t<a href=\"#\">Poland</a>\n\t\t\t\t\t<a href=\"#\">Technology</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t\n</aside> <!-- /#ccr-footer-sidebar -->\n\n\n<footer id=\"ccr-footer\">\n\t<div class=\"container\">\n\t \t<div class=\"copyright\">\n\t \t\t&copy; 2014, Copyrights <a href=\"http://codexcoder.com\">CodexCoder</a> Theme. All Rights Reserved\n\t \t</div> <!-- /.copyright -->\n\n\t \t<div class=\"footer-social-icons\">\n\t \t\t<ul>\n\t \t\t\t<li>\n\t \t\t\t\t<a href=\"#\"  class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n\t \t\t\t</li>\n\t \t\t\t<li >\n\t \t\t\t\t<a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n\t \t\t\t</li>\n\t \t\t\t<li >\n\t \t\t\t\t<a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n\t \t\t\t</li>\n\t \t\t\t<li >\n\t \t\t\t\t<a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n\t \t\t\t</li>\n\t \t\t</ul>\n\t \t\t\n\t \t</div><!--  /.cocial-icons -->\n\n\t</div> <!-- /.container -->\n</footer>  <!-- /#ccr-footer -->\n\n\n\t<script src=\"js/jquery-1.9.1.min.js\"></script>\n\t<script src=\"js/bootstrap.min.js\"></script>\n\t<script src=\"js/custom.js\"></script>\n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/older-post/older-post.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.1 - sidebar-popular-post and sidebar-older-post\r\n---------------------------------------------------------------------- */\r\n#sidebar-older-post{\r\n\toverflow: hidden;\r\n}\r\n#sidebar-older-post li{\r\n\tpadding: 8px;\r\n\twidth: 100%;\r\n\tfloat:left;\r\n\tborder-left: 1px solid  #e3e2e2;\r\n\tborder-right: 1px solid  #e3e2e2;\r\n}\r\n#sidebar-older-post li img{\r\n\twidth: 65px;\r\n\theight: 65px;\r\n\tfloat: left;\r\n\tmargin-right: 8px;\r\n}\r\n#sidebar-older-post li:last-child {\r\n\tborder-bottom: 1px solid  #e3e2e2;\r\n\tmargin-bottom: 40px;\r\n\r\n}\r\n#sidebar-older-post li:nth-child(even){\r\n\tbackground-color: #f2f2f4;\r\n}"

/***/ }),

/***/ "./src/app/older-post/older-post.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar-older-post\">\n  <div class=\"ccr-gallery-ttile\">\n    <span></span>\n    <p><strong>Older Post</strong></p>\n  </div>\n  <!-- .ccr-gallery-ttile -->\n  <ul>\n    <li>\n      <img src=\"assets/img/sports-thumb-10.jpg\" alt=\"Avatar\">\n      <a href=\"#\">This is the first popular post</a>\n      <div class=\"date-like-comment\">\n        <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n        <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n        <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n      </div>\n    </li>\n    <li>\n      <img src=\"assets/img/thumbnail-small-7.jpg\" alt=\"Avatar\">\n      <a href=\"#\">This is the first popular post</a>\n      <div class=\"date-like-comment\">\n        <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n        <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n        <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n      </div>\n    </li>\n    <li>\n      <img src=\"assets/img/sports-thumb-5.jpg\" alt=\"Avatar\">\n      <a href=\"#\">This is the first popular post</a>\n      <div class=\"date-like-comment\">\n        <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n        <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n        <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n      </div>\n    </li>\n    <li>\n      <img src=\"assets/img/thumbnail-small-2.jpg\" alt=\"Avatar\">\n      <a href=\"#\">This is the first popular post</a>\n      <div class=\"date-like-comment\">\n        <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n        <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n        <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n      </div>\n    </li>\n    <li>\n      <img src=\"assets/img/thumbnail-small-5.jpg\" alt=\"Avatar\">\n      <a href=\"#\">This is the first popular post</a>\n      <div class=\"date-like-comment\">\n        <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n        <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n        <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n      </div>\n    </li>\n  </ul>\n</section>\n<!-- /#sidebar-older-post -->\n"

/***/ }),

/***/ "./src/app/older-post/older-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OlderPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OlderPostComponent = /** @class */ (function () {
    function OlderPostComponent() {
    }
    OlderPostComponent.prototype.ngOnInit = function () {
    };
    OlderPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-older-post',
            template: __webpack_require__("./src/app/older-post/older-post.component.html"),
            styles: [__webpack_require__("./src/app/older-post/older-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OlderPostComponent);
    return OlderPostComponent;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    font-size: 20px;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n  padding: 5px 5px;\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n    padding: 25px;\r\n    overflow: hidden\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_right {\r\n    top: 26px;\r\n    z-index: 2;\r\n    opacity: 1;\r\n    width: 35px;\r\n    height: 35px;\r\n    border: 0;\r\n    text-shadow: none;\r\n    text-align: center;\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_carousel_control_icons {\r\n    line-height: 35px;\r\n    font-size: 20px!important;\r\n    font-weight: normal!important;\r\n    margin-top:8px;\r\n}\r\n\r\n.team_columns_carousel_control_left {\r\n    left: 26px!important\r\n}\r\n\r\n.team_columns_carousel_control_right {\r\n    left: 63px!important\r\n}\r\n\r\n.adv_left {\r\n    left: 41px!important\r\n}\r\n\r\n.adv_right {\r\n    left: 78px!important\r\n}\r\n\r\n.team_columns_item_image {\r\n    margin-top: 0px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px\r\n}\r\n\r\n.team_columns_item_image img {\r\n    width: 100%;\r\n    -webkit-filter: grayscale(70%);\r\n    -moz-filter: grayscale(70%);\r\n    -ms-filter: grayscale(70%);\r\n    -o-filter: grayscale(70%);\r\n    filter: grayscale(70%);\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_image:hover img {\r\n    -webkit-filter: grayscale(0%);\r\n    -moz-filter: grayscale(0%);\r\n    -ms-filter: grayscale(0%);\r\n    -o-filter: grayscale(0%);\r\n    filter: grayscale(0%)\r\n}\r\n\r\n.team_columns_item_caption {\r\n    padding: 10px;\r\n    text-align: center;\r\n    padding-bottom: 30px\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n    width: 15%\r\n}\r\n\r\n.team_columns_item_caption h4 {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption h5 {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p {\r\n    font-weight: 400;\r\n    margin-top: 20px;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n    text-decoration: none;\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n    width: 25px;\r\n    float: left;\r\n    height: 25px;\r\n    display: block;\r\n    line-height: 25px;\r\n    margin-right: 2px;\r\n    text-decoration: none;\r\n    -webkit-transition: background ease-in-out .3s;\r\n    transition: background ease-in-out .3s\r\n}\r\n\r\n@media(min-width:768px) and (max-width:789px) {\r\n    .adv_team_columns_item_social a, .adv_team_columns_item_social a:visited {\r\n        margin-right: 0\r\n    }\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n    background: #fff\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_left:hover,\r\n.team_columns_carousel_control_left:active,\r\n.team_columns_carousel_control_left:focus,\r\n.team_columns_carousel_control_right,\r\n.team_columns_carousel_control_right:hover,\r\n.team_columns_carousel_control_right:active,\r\n.team_columns_carousel_control_right:focus {\r\n    color: #fff;\r\n    background: #feb600!important\r\n}\r\n\r\n.team_columns_item_caption {\r\n    color: #fff;\r\n    background: #171717\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n    border-top: 2px solid #feb600\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n    color: #feb600\r\n}\r\n\r\n.team_columns_item_caption p a:hover,\r\n.team_columns_item_caption p a:active {\r\n    color: #cb9200\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n    color: #171717;\r\n    background: #feb600\r\n}\r\n\r\n.team_columns_item_social a:hover,\r\n.team_columns_item_social a:active {\r\n    background: #cb9200\r\n}\r\n\r\n.four_shows_one_move .cloneditem-1,\r\n.four_shows_one_move .cloneditem-2,\r\n.four_shows_one_move .cloneditem-3 {\r\n    display: none\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .four_shows_one_move .carousel-inner>.active.left,\r\n    .four_shows_one_move .carousel-inner>.prev {\r\n        left: -50%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.active.right,\r\n    .four_shows_one_move .carousel-inner>.next {\r\n        left: 50%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.left,\r\n    .four_shows_one_move .carousel-inner>.prev.right,\r\n    .four_shows_one_move .carousel-inner>.active {\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner .cloneditem-1 {\r\n        display: block\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) and (transform-3d), all and (min-width: 768px) and (-webkit-transform-3d) {\r\n    .four_shows_one_move .carousel-inner>.item.active.right,\r\n    .four_shows_one_move .carousel-inner>.item.next {\r\n        -webkit-transform: translate3d(50%, 0, 0);\r\n        transform: translate3d(50%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.active.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev {\r\n        -webkit-transform: translate3d(-50%, 0, 0);\r\n        transform: translate3d(-50%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev.right,\r\n    .four_shows_one_move .carousel-inner>.item.active {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n        left: 0\r\n    }\r\n}\r\n\r\n@media all and (min-width: 992px) {\r\n    .four_shows_one_move .carousel-inner>.active.left,\r\n    .four_shows_one_move .carousel-inner>.prev {\r\n        left: -25%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.active.right,\r\n    .four_shows_one_move .carousel-inner>.next {\r\n        left: 25%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.left,\r\n    .four_shows_one_move .carousel-inner>.prev.right,\r\n    .four_shows_one_move .carousel-inner>.active {\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner .cloneditem-2,\r\n    .four_shows_one_move .carousel-inner .cloneditem-3 {\r\n        display: block\r\n    }\r\n}\r\n\r\n@media all and (min-width: 992px) and (transform-3d), all and (min-width: 992px) and (-webkit-transform-3d) {\r\n    .four_shows_one_move .carousel-inner>.item.active.right,\r\n    .four_shows_one_move .carousel-inner>.item.next {\r\n        -webkit-transform: translate3d(25%, 0, 0);\r\n        transform: translate3d(25%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.active.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev {\r\n        -webkit-transform: translate3d(-25%, 0, 0);\r\n        transform: translate3d(-25%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev.right,\r\n    .four_shows_one_move .carousel-inner>.item.active {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n        left: 0\r\n    }\r\n}\r\n\r\n/*------For Search-------------------------------*/\r\n\r\n.search-container {\r\n  float: right;\r\n}\r\n\r\n.search-container input[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n}\r\n\r\n.search-container button {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-container button:hover {\r\n  background: #ccc;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav .search-container {\r\n    float: none;\r\n  }\r\n  .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n  .topnav input[type=text] {\r\n    border: 1px solid #ccc;  \r\n  }\r\n}\r\n\r\n.carousel-control\r\n    {\r\n\r\n    }\r\n\r\n/*_______________________carousel control---------------------------*/\r\n\r\n.carousel-control {\r\n\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  background: #2cb2bc;\r\n  line-height: 36px!important;\r\n  -moz-line-height: 36px!important;\r\n  height: 40px;\r\n  width: 40px;\r\n  top: 45%;\r\n  opacity: inherit;\r\n}\r\n\r\n.carousel-control:hover {\r\n  background-color:#5f5f5f;\r\n}"

/***/ }),

/***/ "./src/app/players/players.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container\">\n  <h2>Top Players \n      <div class=\"search-container\">\n         <form action=\"/action_page.php\">\n      <input type=\"text\" placeholder=\"Search Players..\" name=\"search\">\n      <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n    </form>\n  </div>\n   </h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"adv_team_4_columns_carousel\" class=\"carousel slide four_shows_one_move team_columns_carousel_wrapper\" data-ride=\"carousel\" data-interval=\"2000\" data-pause=\"hover\">\n        <!--========= Wrapper for slides =========-->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <!--========= 1st slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Ganguly</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Kohli</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"google.com\">Raina</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 2nd slide =========-->\n\n          <div class=\"item active\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 3rd slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 4th slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 5th Slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 6th Slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4>Karachi</h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 7th Slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 8th Slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Tendulkar</a></h4>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--======= Navigation Buttons =========-->\n        <a class=\"left carousel-control\" href=\"#adv_team_4_columns_carousel\" data-slide=\"prev\">\n          <i class=\"fa fa-arrow-left\"></i></a>\n        <a class=\"right carousel-control\" href=\"#adv_team_4_columns_carousel\" data-slide=\"next\">\n          <i class=\"fa fa-arrow-right\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div align=\"Right\" style=\"padding-right:20px\">\n    <h3>\n      <a href=\"\">More....</a>\n   </h3>\n  </div>\n</div>\n<app-footer></app-footer>\n<div class=\"hidden\"></div>"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-players',
            template: __webpack_require__("./src/app/players/players.component.html"),
            styles: [__webpack_require__("./src/app/players/players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/popular-post/popular-post.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.1 - sidebar-popular-post and sidebar-older-post\r\n---------------------------------------------------------------------- */\r\n#sidebar-popular-post{\r\n\toverflow: hidden;\r\n}\r\n#sidebar-popular-post li{\r\n\tpadding: 8px;\r\n\twidth: 100%;\r\n\tfloat:left;\r\n\tborder-left: 1px solid  #e3e2e2;\r\n\tborder-right: 1px solid  #e3e2e2;\r\n}\r\n#sidebar-popular-post li img{\r\n\twidth: 65px;\r\n\theight: 65px;\r\n\tfloat: left;\r\n\tmargin-right: 8px;\r\n}\r\n#sidebar-popular-post li:last-child{\r\n\tborder-bottom: 1px solid  #e3e2e2;\r\n\tmargin-bottom: 40px;\r\n\r\n}\r\n#sidebar-popular-post li:nth-child(even){\r\n\tbackground-color: #f2f2f4;\r\n}"

/***/ }),

/***/ "./src/app/popular-post/popular-post.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar-popular-post\">\n        <div class=\"ccr-gallery-ttile\">\n          <span></span>\n          <p><strong>Popular Post</strong></p>\n        </div>\n        <!-- .ccr-gallery-ttile -->\n        <ul>\n          <li>\n            <img src=\"assets/img/sports-thumb-10.jpg\" alt=\"Avatar\">\n            <a href=\"#\">This is the first popular post</a>\n            <div class=\"date-like-comment\">\n              <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n              <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n              <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n            </div>\n          </li>\n          <li>\n            <img src=\"assets/img/thumbnail-small-7.jpg\" alt=\"Avatar\">\n            <a href=\"#\">This is the first popular post</a>\n            <div class=\"date-like-comment\">\n              <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n              <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n              <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n            </div>\n          </li>\n          <li>\n            <img src=\"assets/img/sports-thumb-5.jpg\" alt=\"Avatar\">\n            <a href=\"#\">This is the first popular post</a>\n            <div class=\"date-like-comment\">\n              <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n              <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n              <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n            </div>\n          </li>\n          <li>\n            <img src=\"assets/img/thumbnail-small-2.jpg\" alt=\"Avatar\">\n            <a href=\"#\">This is the first popular post</a>\n            <div class=\"date-like-comment\">\n              <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n              <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n              <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n            </div>\n          </li>\n          <li>\n            <img src=\"assets/img/thumbnail-small-5.jpg\" alt=\"Avatar\">\n            <a href=\"#\">This is the first popular post</a>\n            <div class=\"date-like-comment\">\n              <span class=\"date\"><time datetime=\"2014-02-17\">2014-02-17</time></span>\n              <a class=\"like\" href=\"#\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n              <a class=\"comments\" href=\"#\"><i class=\"fa fa-comments-o\"></i> 49</a>\n            </div>\n          </li>\n        </ul>\n      </section>\n      <!-- /#sidebar-popular-post -->"

/***/ }),

/***/ "./src/app/popular-post/popular-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopularPostComponent = /** @class */ (function () {
    function PopularPostComponent() {
    }
    PopularPostComponent.prototype.ngOnInit = function () {
    };
    PopularPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popular-post',
            template: __webpack_require__("./src/app/popular-post/popular-post.component.html"),
            styles: [__webpack_require__("./src/app/popular-post/popular-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopularPostComponent);
    return PopularPostComponent;
}());



/***/ }),

/***/ "./src/app/register/person.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\r\n\tpadding: 20px;\r\n\r\n}\r\n.col-md-4\r\n\t{\r\n\t\tfloat: right;\r\n\t\tbackground-color: #2cb2bc;\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t        align-items: center;\r\n\t}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n     <img class=\"register-img\" [src]=\"registerimage\" alt=\"Loading image\">\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"form\">\n        <h1>Registration Form</h1>\n        <form #registrationForm=\"ngForm\" (ngSubmit)=\"onSubmit(registrationForm.value)\">\n          <div class='form-group'>\n            <label for=\"name\">Name</label>\n            <input type=\"text\" id=\"name\" required placeholder=\"Johnny Bravo\" class=\"form-control\" name=\"name\" ngControl=\"name\" pattern=\"[a-zA-Z ]+$\" ngModel required minlength=\"4\" #name=\"ngModel\">\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"name.errors.minlength\">Name must be atleast 4 characters long</div>\n              <div *ngIf=\"name.errors.required\">Name is required</div>\n              <div *ngIf=\"name.errors?.pattern\">Name cannot contain numbers</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"age\">Age</label>\n            <input type=\"number\" id=\"age\" placeholder=\"23\" class=\"form-control\" name=\"age\" ngControl=\"age\" ngModel required min=\"10\" max=\"100\" #age=\"ngModel\">\n            <div *ngIf=\"age.invalid && (age.dirty || age.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"age.errors.required\">Age is required</div>\n              <div *ngIf=\"age.errors?.max\">Age cannot be greater than 100</div>\n              <div *ngIf=\"age.errors?.min\">Age cannot be less than 10</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" id=\"text\" class=\"form-control\" name=\"email\" placeholder=\"johnny@gmail.com\" ngControl=\"email\" ngModel required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$\" #email=\"ngModel\">\n            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"email.errors.required\">Email is required</div>\n              <div *ngIf=\"email.errors.pattern\">Email is invalid</div>\n            </div>\n          </div>\n          <div class='form-group'>\n            <label for=\"name\">Password</label>\n            <input type=\"password\" id=\"pwd\" placeholder=\"*************\" class=\"form-control\" name=\"password\" ngControl=\"Password\" minlength=\"8\" ngModel required #password=\"ngModel\" pattern=\"[a-zA-Z0-9]{1,}[@#$%^&*]{1,}[a-zA-Z0-9]{1,}\">\n            <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"password.errors?.pattern\">Password must contain a combination of alphabets,numbers,symbols</div>\n              <div *ngIf=\"password.errors?.minlength\">Password minimum length is 8</div>\n              <div *ngIf=\"password.errors?.required\">Password is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button class=\"form-control btn btn-primary btn-send\" type=\"submit\">Submit</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n<!-- Password consists of one or more alphabets or numbers followed by one or more special characters followed by one or more alphabets or numbers-->\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__person__ = __webpack_require__("./src/app/register/person.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.registerimage = './assets/img/register-now.png';
    }
    RegisterComponent.prototype.onSubmit = function (value) {
        this.person = new __WEBPACK_IMPORTED_MODULE_1__person__["a" /* Person */](value.name, value.email, value.age, value.password);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.css":
/***/ (function(module, exports) {

module.exports = "#social-buttons {\r\n\toverflow: hidden;\r\n\tborder:1px solid #e3e2e2;\r\n\tpadding: 15px 15px 0;\r\n\tmargin-bottom: 40px;\r\n}\r\n#social-buttons li{\r\n\tfloat: left;\r\n\twidth: 65px;\r\n\tmargin-right: 20px;\r\n}\r\n#social-buttons li:last-child{\r\n\tmargin-right:0;\r\n}\r\n#social-buttons li p{\r\n\tline-height: 22px;\r\n\ttext-align: center;\r\n\tbackground-color: #f2f2f4;\t\r\n\tborder:1px solid #e3e2e2;\r\n\tmargin: 15px 0;\r\n\tfloat: left;\r\n\twidth: 70px;\r\n\theight: 50px;\r\n}\r\n#social-buttons p .bubble{\r\n\tbackground-image: url(/assets/img/bubble.png);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: top center;\r\n\tmargin-top: -10px;\r\n\twidth: 70px;\r\n\theight: 10px;\r\n\tfloat: left;\r\n\tz-index: 99999;\r\n}\r\n#social-buttons p  .count{\r\n\tfont-size: 1.2em;\r\n\tpadding: 0 15px;\r\n}\r\n#social-buttons a{\r\n\ttext-align:center;\r\n\tline-height: 40px;\r\n\tfont-size: 1.3em;\r\n\tmargin: 0 15px;\r\n\tbackground-color: #f2f2f4;\r\n\tfloat:left;\r\n\twidth:40px;\r\n\theight:40px;\r\n}\r\n#social-buttons a:hover{\r\n\tcolor: #FFF;\r\n}\r\n#social-buttons a,\r\n#ccr-contact-sidebar li a {\r\n  -webkit-transition: all .25s ease-in;\r\n  transition: all .25s ease-in;\r\n}\r\n#ccr-contact-sidebar li .google-plus:hover,\r\n#social-buttons .google-plus:hover,\r\n.google-plus:hover {\r\n  color: #FFF;\r\n  background-color: #db514f;\r\n}\r\n#ccr-contact-sidebar li .linkedin:hover,\r\n#social-buttons .linkedin:hover,\r\n.linkedin:hover {\r\n  color: #FFF;\r\n  background-color: #0077b5;\r\n}\r\n#ccr-contact-sidebar li .twitter:hover,\r\n#social-buttons .twitter:hover,\r\n.twitter:hover {\r\n  color: #FFF;\r\n  background-color: #2e9edd;\r\n}\r\n#ccr-contact-sidebar li .facebook:hover,\r\n#social-buttons .facebook:hover,\r\n.facebook:hover {\r\n  color: #FFF;\r\n  background-color: #3b5998;\r\n}\r\n.google-plus,\r\n.linkedin,\r\n.twitter,\r\n.facebook {\r\n  display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"social-buttons\">\n        <ul>\n          <li>\n            <a href=\"#\" class=\"google-plus\"><i class=\"fa fa-google-plus\"></i></a>\n            <p><span class=\"bubble\"></span><span class=\"count\">202</span> Like</p>\n          </li>\n          <li>\n            <a href=\"#\" class=\"linkedin\"><i class=\"fa fa-linkedin\"></i></a>\n            <p><span class=\"bubble\"></span><span class=\"count\">202</span> Like</p>\n          </li>\n          <li>\n            <a href=\"#\" class=\"twitter\"><i class=\"fa fa-twitter\"></i></a>\n            <p><span class=\"bubble\"></span><span class=\"count\">202</span> Follow</p>\n          </li>\n          <li>\n            <a href=\"#\" class=\"facebook\"><i class=\"fa fa-facebook\"></i></a>\n            <p><span class=\"bubble\"></span><span class=\"count\">202</span> Like</p>\n          </li>\n        </ul>\n      </section>\n      <!-- /#social-buttons -->"

/***/ }),

/***/ "./src/app/social-buttons/social-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialButtonsComponent = /** @class */ (function () {
    function SocialButtonsComponent() {
    }
    SocialButtonsComponent.prototype.ngOnInit = function () {
    };
    SocialButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-social-buttons',
            template: __webpack_require__("./src/app/social-buttons/social-buttons.component.html"),
            styles: [__webpack_require__("./src/app/social-buttons/social-buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialButtonsComponent);
    return SocialButtonsComponent;
}());



/***/ }),

/***/ "./src/app/sports-gallery/sports-gallery.component.css":
/***/ (function(module, exports) {

module.exports = "/* 7.4 - ccr-sports-gallery \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-sports-gallery {\r\n  overflow: hidden;\r\n}\r\n\r\n#ccr-sports-gallery .featured-sports-news {\r\n  margin-top: 20px;\r\n  height: 504px;\r\n  width: 48.5%;\r\n  float: left;\r\n}\r\n\r\n#ccr-sports-gallery .featured-sports-news img {\r\n  width: 100%;\r\n}\r\n\r\n#ccr-sports-gallery .featured-sports-news-img {\r\n  height: 252px;\r\n}\r\n\r\n#ccr-sports-gallery .featured-sports-news-post {\r\n  border-bottom: 1px solid #ccc;\r\n  margin-top: 20px;\r\n  position: relative;\r\n  height: 252px;\r\n}\r\n\r\n#ccr-sports-gallery h5 {\r\n  line-height: 20px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#ccr-sports-gallery .featured-sports-news-post h5 {\r\n  margin-bottom: 10px;\r\n  font-weight: 700;\r\n}\r\n\r\n#ccr-sports-gallery .like-comment-readmore {\r\n  position: absolute;\r\n  bottom: 0;\r\n  margin-bottom: 10px;\r\n  width: 100%;\r\n}\r\n\r\n#ccr-sports-gallery ul {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n#ccr-sports-gallery li {\r\n  width: 22.75%;\r\n  float: left;\r\n  margin: 20px 0;\r\n}\r\n\r\n#ccr-sports-gallery li h5 a {\r\n  font-weight: 400;\r\n  display: inline-block;\r\n  width: 100%;\r\n}\r\n\r\n#ccr-sports-gallery li:nth-child(-n+2) {\r\n  margin-top: 10px;\r\n}\r\n\r\n#ccr-sports-gallery li:nth-child(-n+5):nth-child(odd),\r\n#ccr-sports-gallery li:nth-child(-n+6):nth-child(even),\r\n#ccr-sports-gallery li:nth-child(n+8) {\r\n  margin-left: 3%;\r\n}\r\n\r\n#ccr-sports-gallery li img {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/sports-gallery/sports-gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-sports-gallery\">\n  <div class=\"ccr-gallery-ttile\">\n    <span></span>\n    <p>Sports Gallery</p>\n  </div>\n  <!-- .ccr-gallery-ttile -->\n  <section class=\"featured-sports-news\">\n    <div class=\"featured-sports-newss-img\"><img src=\"assets/img/sports-thumb-1.jpg\" alt=\"Thumb\"></div>\n    <div class=\"featured-sports-news-post\">\n      <h5>Featured Sports News Post Title</h5> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias. Ab veniam atque eius...\n      <div class=\"like-comment-readmore\">\n        <i class=\"fa fa-thumbs-o-up\"> 08</i>\n        <a href=\"#\" class=\"comments\"><i class=\"fa fa-comments-o\"></i> 49</a>\n        <a class=\"read-more\" href=\"#\">Read More</a>\n      </div>\n      <!-- /.like-comment-readmore -->\n    </div>\n  </section>\n  <!-- /#featured-sports-news -->\n  <ul>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-2.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-3.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-4.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-5.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-6.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-7.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-8.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-9.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-10.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/sports-thumb-11.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n  </ul>\n</section>\n<!-- /#ccr-sports-gallery -->\n"

/***/ }),

/***/ "./src/app/sports-gallery/sports-gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsGalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SportsGalleryComponent = /** @class */ (function () {
    function SportsGalleryComponent() {
    }
    SportsGalleryComponent.prototype.ngOnInit = function () {
    };
    SportsGalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sports-gallery',
            template: __webpack_require__("./src/app/sports-gallery/sports-gallery.component.html"),
            styles: [__webpack_require__("./src/app/sports-gallery/sports-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SportsGalleryComponent);
    return SportsGalleryComponent;
}());



/***/ }),

/***/ "./src/app/tournaments/tournaments.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    font-size: 20px;\r\n  overflow: hidden;\r\n  background-color: #f1f1f1;\r\n  padding: 5px 5px;\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n    padding: 25px;\r\n    overflow: hidden\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_right {\r\n    top: 26px;\r\n    z-index: 2;\r\n    opacity: 1;\r\n    width: 35px;\r\n    height: 35px;\r\n    border: 0;\r\n    text-shadow: none;\r\n    text-align: center;\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_carousel_control_icons {\r\n    line-height: 35px;\r\n    font-size: 20px!important;\r\n    font-weight: normal!important;\r\n    margin-top:8px;\r\n}\r\n\r\n.team_columns_carousel_control_left {\r\n    left: 26px!important\r\n}\r\n\r\n.team_columns_carousel_control_right {\r\n    left: 63px!important\r\n}\r\n\r\n.adv_left {\r\n    left: 41px!important\r\n}\r\n\r\n.adv_right {\r\n    left: 78px!important\r\n}\r\n\r\n.team_columns_item_image {\r\n    margin-top: 0px;\r\n    padding-top: 0px;\r\n    padding-bottom: 0px\r\n}\r\n\r\n.team_columns_item_image img {\r\n    width: 100%;\r\n    -webkit-filter: grayscale(70%);\r\n    -moz-filter: grayscale(70%);\r\n    -ms-filter: grayscale(70%);\r\n    -o-filter: grayscale(70%);\r\n    filter: grayscale(70%);\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_image:hover img {\r\n    -webkit-filter: grayscale(0%);\r\n    -moz-filter: grayscale(0%);\r\n    -ms-filter: grayscale(0%);\r\n    -o-filter: grayscale(0%);\r\n    filter: grayscale(0%)\r\n}\r\n\r\n.team_columns_item_caption {\r\n    padding: 10px;\r\n    text-align: center;\r\n    padding-bottom: 30px\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n    width: 15%\r\n}\r\n\r\n.team_columns_item_caption h4 {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption h5 {\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p {\r\n    font-weight: 400;\r\n    margin-top: 20px;\r\n    font-family: 'Open Sans', sans-serif\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n    text-decoration: none;\r\n    -webkit-transition: all ease-in-out .3s;\r\n    transition: all ease-in-out .3s\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n    width: 25px;\r\n    float: left;\r\n    height: 25px;\r\n    display: block;\r\n    line-height: 25px;\r\n    margin-right: 2px;\r\n    text-decoration: none;\r\n    -webkit-transition: background ease-in-out .3s;\r\n    transition: background ease-in-out .3s\r\n}\r\n\r\n@media(min-width:768px) and (max-width:789px) {\r\n    .adv_team_columns_item_social a, .adv_team_columns_item_social a:visited {\r\n        margin-right: 0\r\n    }\r\n}\r\n\r\n.team_columns_carousel_wrapper {\r\n    background: #fff\r\n}\r\n\r\n.team_columns_carousel_control_left,\r\n.team_columns_carousel_control_left:hover,\r\n.team_columns_carousel_control_left:active,\r\n.team_columns_carousel_control_left:focus,\r\n.team_columns_carousel_control_right,\r\n.team_columns_carousel_control_right:hover,\r\n.team_columns_carousel_control_right:active,\r\n.team_columns_carousel_control_right:focus {\r\n    color: #fff;\r\n    background: #feb600!important\r\n}\r\n\r\n.team_columns_item_caption {\r\n    color: #fff;\r\n    background: #171717\r\n}\r\n\r\n.team_columns_item_caption>hr {\r\n    border-top: 2px solid #feb600\r\n}\r\n\r\n.team_columns_item_caption p a,\r\n.team_columns_item_caption p a:visited {\r\n    color: #feb600\r\n}\r\n\r\n.team_columns_item_caption p a:hover,\r\n.team_columns_item_caption p a:active {\r\n    color: #cb9200\r\n}\r\n\r\n.team_columns_item_social a,\r\n.team_columns_item_social a:visited {\r\n    color: #171717;\r\n    background: #feb600\r\n}\r\n\r\n.team_columns_item_social a:hover,\r\n.team_columns_item_social a:active {\r\n    background: #cb9200\r\n}\r\n\r\n.four_shows_one_move .cloneditem-1,\r\n.four_shows_one_move .cloneditem-2,\r\n.four_shows_one_move .cloneditem-3 {\r\n    display: none\r\n}\r\n\r\n@media all and (min-width: 768px) {\r\n    .four_shows_one_move .carousel-inner>.active.left,\r\n    .four_shows_one_move .carousel-inner>.prev {\r\n        left: -50%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.active.right,\r\n    .four_shows_one_move .carousel-inner>.next {\r\n        left: 50%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.left,\r\n    .four_shows_one_move .carousel-inner>.prev.right,\r\n    .four_shows_one_move .carousel-inner>.active {\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner .cloneditem-1 {\r\n        display: block\r\n    }\r\n}\r\n\r\n@media all and (min-width: 768px) and (transform-3d), all and (min-width: 768px) and (-webkit-transform-3d) {\r\n    .four_shows_one_move .carousel-inner>.item.active.right,\r\n    .four_shows_one_move .carousel-inner>.item.next {\r\n        -webkit-transform: translate3d(50%, 0, 0);\r\n        transform: translate3d(50%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.active.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev {\r\n        -webkit-transform: translate3d(-50%, 0, 0);\r\n        transform: translate3d(-50%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev.right,\r\n    .four_shows_one_move .carousel-inner>.item.active {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n        left: 0\r\n    }\r\n}\r\n\r\n@media all and (min-width: 992px) {\r\n    .four_shows_one_move .carousel-inner>.active.left,\r\n    .four_shows_one_move .carousel-inner>.prev {\r\n        left: -25%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.active.right,\r\n    .four_shows_one_move .carousel-inner>.next {\r\n        left: 25%\r\n    }\r\n    .four_shows_one_move .carousel-inner>.left,\r\n    .four_shows_one_move .carousel-inner>.prev.right,\r\n    .four_shows_one_move .carousel-inner>.active {\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner .cloneditem-2,\r\n    .four_shows_one_move .carousel-inner .cloneditem-3 {\r\n        display: block\r\n    }\r\n}\r\n\r\n@media all and (min-width: 992px) and (transform-3d), all and (min-width: 992px) and (-webkit-transform-3d) {\r\n    .four_shows_one_move .carousel-inner>.item.active.right,\r\n    .four_shows_one_move .carousel-inner>.item.next {\r\n        -webkit-transform: translate3d(25%, 0, 0);\r\n        transform: translate3d(25%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.active.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev {\r\n        -webkit-transform: translate3d(-25%, 0, 0);\r\n        transform: translate3d(-25%, 0, 0);\r\n        left: 0\r\n    }\r\n    .four_shows_one_move .carousel-inner>.item.left,\r\n    .four_shows_one_move .carousel-inner>.item.prev.right,\r\n    .four_shows_one_move .carousel-inner>.item.active {\r\n        -webkit-transform: translate3d(0, 0, 0);\r\n        transform: translate3d(0, 0, 0);\r\n        left: 0\r\n    }\r\n}\r\n\r\n/*------For Search-------------------------------*/\r\n\r\n.search-container {\r\n  float: right;\r\n}\r\n\r\n.search-container input[type=text] {\r\n  padding: 6px;\r\n  margin-top: 8px;\r\n  font-size: 17px;\r\n  border: none;\r\n}\r\n\r\n.search-container button {\r\n  float: right;\r\n  padding: 6px 10px;\r\n  margin-top: 8px;\r\n  margin-right: 16px;\r\n  background: #ddd;\r\n  font-size: 17px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-container button:hover {\r\n  background: #ccc;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  .topnav .search-container {\r\n    float: none;\r\n  }\r\n  .topnav a, .topnav input[type=text], .topnav .search-container button {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 14px;\r\n  }\r\n  .topnav input[type=text] {\r\n    border: 1px solid #ccc;  \r\n  }\r\n}\r\n\r\n.carousel-control\r\n    {\r\n\r\n    }\r\n\r\n/*_______________________carousel control---------------------------*/\r\n\r\n.carousel-control {\r\n\r\n  text-shadow: none;\r\n  display: inline-block;\r\n  background: #2cb2bc;\r\n  line-height: 36px!important;\r\n  -moz-line-height: 36px!important;\r\n  height: 40px;\r\n  width: 40px;\r\n  top: 45%;\r\n  opacity: inherit;\r\n}\r\n\r\n.carousel-control:hover {\r\n  background-color:#5f5f5f;\r\n}"

/***/ }),

/***/ "./src/app/tournaments/tournaments.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header1></app-header1>\n<div class=\"container\">\n  <h2>Tournaments \n      <div class=\"search-container\">\n         <form action=\"/action_page.php\">\n      <input type=\"text\" placeholder=\"Search Players..\" name=\"search\">\n      <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n    </form>\n  </div>\n   </h2>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div id=\"adv_team_4_columns_carousel\" class=\"carousel slide four_shows_one_move team_columns_carousel_wrapper\" data-ride=\"carousel\" data-interval=\"2000\" data-pause=\"hover\">\n        <!--========= Wrapper for slides =========-->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <!--========= 1st slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 01\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Cricket World Cup</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">IPL</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">PSL</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"google.com\">Big Bash</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 2nd slide =========-->\n          <div class=\"item active\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">FIFA WC</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">PL</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">La Liga</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Primera Liga</a></h4>\n              </div>\n            </div>\n          </div>\n          <!--========= 3rd slide =========-->\n          <div class=\"item\">\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Hockey  World Cup</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-1\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Major Dhyanchand</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-2\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Azlan Shah</a></h4>\n              </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6 col-md-3 team_columns_item_image cloneditem-3\">\n              <img src=\"http://placehold.it/150x150\" alt=\"slider 02\">\n              <div class=\"team_columns_item_caption\">\n                <h4><a href=\"/google.com\">Malaysian Open</a></h4>\n              </div>\n            </div>\n          </div>\n          \n        <!--======= Navigation Buttons =========-->\n        <a class=\"carousel-control left\" href=\"#adv_team_4_columns_carousel\" data-slide=\"prev\"><i class=\"fa fa-arrow-left\"></i></a>\n        <a class=\"carousel-control right\" href=\"#adv_team_4_columns_carousel\" data-slide=\"next\"><i class=\"fa fa-arrow-right\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div align=\"Right\" style=\"padding-right:20px\">\n    <h3>\n      <a href=\"\">More....</a>\n   </h3>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/tournaments/tournaments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TournamentsComponent = /** @class */ (function () {
    function TournamentsComponent() {
    }
    TournamentsComponent.prototype.ngOnInit = function () {
    };
    TournamentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tournaments',
            template: __webpack_require__("./src/app/tournaments/tournaments.component.html"),
            styles: [__webpack_require__("./src/app/tournaments/tournaments.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TournamentsComponent);
    return TournamentsComponent;
}());



/***/ }),

/***/ "./src/app/video-post/video-post.component.css":
/***/ (function(module, exports) {

module.exports = "/* 4.2 - sidebar-video-post and sidebar-entertainment-post\r\n---------------------------------------------------------------------- */\r\n.sidebar-video, \r\n{\r\n\tpadding: 15px;\r\n\tborder-left: 1px solid  #e3e2e2;\r\n\tborder-right: 1px solid  #e3e2e2;\r\n}\r\n.sidebar-video + .date-like-comment,\r\n{\r\n\tbackground-color: #f2f2f4;\r\n\tline-height: 40px;\r\n\tborder: 1px solid  #e3e2e2;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tpadding-right: 15px;\r\n\tmargin-bottom: 40px;\r\n}"

/***/ }),

/***/ "./src/app/video-post/video-post.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar-video-post\">\n        <div class=\"ccr-gallery-ttile\">\n          <span></span>\n          <p><strong>Video Post</strong></p>\n        </div>\n        <!-- .ccr-gallery-ttile -->\n        <div class=\"sidebar-video\">\n          <iframe width=\"340\" height=\"195\" src=\"//www.youtube.com/embed/Ak8f8yTPRRc\" frameborder=\"0\" allowfullscreen></iframe>\n          CodexCoder creates spectacular Premium WordPress Themes, WordPress Plugins, HTML Templates, PSD Template and more...\n        </div>\n        <div class=\"date-like-comment\">\n          <a href=\"#\" class=\"like\"><i class=\"fa fa-thumbs-o-up\"></i> 08</a>\n          <a href=\"#\" class=\"comments\"><i class=\"fa fa-comments-o\"></i> 49</a>\n        </div>\n      </section>\n      <!-- /#sidebar-video-post -->"

/***/ }),

/***/ "./src/app/video-post/video-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoPostComponent = /** @class */ (function () {
    function VideoPostComponent() {
    }
    VideoPostComponent.prototype.ngOnInit = function () {
    };
    VideoPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video-post',
            template: __webpack_require__("./src/app/video-post/video-post.component.html"),
            styles: [__webpack_require__("./src/app/video-post/video-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoPostComponent);
    return VideoPostComponent;
}());



/***/ }),

/***/ "./src/app/world-news/world-news.component.css":
/***/ (function(module, exports) {

module.exports = "/* 7.3 - ccr-world-news    \r\n---------------------------------------------------------------------- */\r\n\r\n#ccr-world-news {\r\n  overflow: hidden;\r\n}\r\n\r\n#ccr-world-news .featured-world-news {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  margin: 20px 0px;\r\n}\r\n\r\n#ccr-world-news .featured-world-news img {\r\n  width: 100%;\r\n}\r\n\r\n#ccr-world-news .featured-world-news-img {\r\n  width: 48.5%;\r\n  float: left;\r\n  height: 252px;\r\n}\r\n\r\n#ccr-world-news .featured-world-news-post {\r\n  position: relative;\r\n  border-bottom: 1px solid #ccc;\r\n  height: 252px;\r\n  width: 48.5%;\r\n  float: right;\r\n}\r\n\r\n#ccr-world-news .featured-world-news-post h5 {\r\n  margin-bottom: 10px;\r\n  font-weight: 700;\r\n}\r\n\r\n#ccr-world-news h5 {\r\n  margin-bottom: 10px;\r\n  font-size: 1.2em;\r\n}\r\n\r\n#ccr-world-news li {\r\n  width: 22.75%;\r\n  float: left;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#ccr-world-news li:nth-child(4n+1),\r\n#ccr-world-news li:nth-child(4n+2),\r\n#ccr-world-news li:nth-child(4n+3) {\r\n  margin-right: 3%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/world-news/world-news.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"ccr-world-news\">\n  <div class=\"ccr-gallery-ttile\">\n    <span></span>\n    <p>World News</p>\n  </div>\n  <!-- .ccr-gallery-ttile -->\n  <section class=\"featured-world-news\">\n    <div class=\"featured-world-news-img\"><img src=\"assets/img/thumbnail-big1.jpg\" alt=\"Thumb\"></div>\n    <div class=\"featured-world-news-post\">\n      <h5>Featured World News Post Title</h5> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quod, nostrum, corrupti, maxime quis doloribus debitis id consectetur laudantium iure aperiam soluta consequuntur modi accusamus molestias. Ab veniam atque eius...\n      <div class=\"like-comment-readmore\">\n        <i class=\"fa fa-thumbs-o-up\"> 08</i>\n        <a href=\"#\" class=\"comments\"><i class=\"fa fa-comments-o\"></i> 49</a>\n        <a class=\"read-more\" href=\"#\">Read More</a>\n      </div>\n      <!-- /.like-comment-readmore -->\n    </div>\n  </section>\n  <!-- /#featured-world-news -->\n  <ul>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-1.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-2.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-3.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-4.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-5.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-6.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-7.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n    <li>\n      <div class=\"ccr-thumbnail\">\n        <img src=\"assets/img/thumbnail-small-8.jpg\" alt=\"thumbnail-small-1.jpg\">\n        <p><a href=\"#postlink\">Read More</a></p>\n      </div>\n      <h5><a href=\"#\">Lorem ipsum is simply dummy text...</a></h5>\n    </li>\n  </ul>\n</section>\n<!-- / #ccr-world-news -->\n"

/***/ }),

/***/ "./src/app/world-news/world-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorldNewsComponent = /** @class */ (function () {
    function WorldNewsComponent() {
    }
    WorldNewsComponent.prototype.ngOnInit = function () {
    };
    WorldNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-world-news',
            template: __webpack_require__("./src/app/world-news/world-news.component.html"),
            styles: [__webpack_require__("./src/app/world-news/world-news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorldNewsComponent);
    return WorldNewsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map