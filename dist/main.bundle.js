webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

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

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/\">M.M.T.</a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n                <li><a routerLink=\"/secundaire-collector-offerte\">Secundaire collector</a></li>\n                <li><a routerLink=\"/contact\">Contact</a></li>\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Overview\n                    <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a routerLink=\"/offertes\">Offertes</a></li>\n                        <li><a routerLink=\"/contactaanvragen\">Contactaanvragen</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-sm-9\">\n                <router-outlet></router-outlet>\n            </div>\n            <div class=\"col-sm-3\">\n                <h1>Contact</h1>\n                <p>Je kan ons contacteren via email, telefoon of per brief naar ons kantoor in Tielt.</p>\n\n                <p>\n                    <a href=\"#\">\n                        <span class=\"glyphicon glyphicon-envelope\"></span>\n                    </a>info@m-m-t.be\n                </p>\n                <p>\n                    <span class=\"glyphicon glyphicon-envelope\"></span> MMT bvba <br>Szamotulystraat 5 <br>8700 Tielt - Belgium<br/>\n                </p>\n                <p>\n                    <span class=\"glyphicon glyphicon-phone\"></span>T +32 (0)51 72 42 88<br/>\n                </p>\n                <a routerLink=\"/contact\">\n                    <button type=\"button\" class=\"btn btn-primary btn-block\">\n                        Contact\n                    </button>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<hr>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_realisaties_realisaties_component__ = __webpack_require__("../../../../../src/app/components/realisaties/realisaties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_offertes_offertes_component__ = __webpack_require__("../../../../../src/app/components/offertes/offertes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_secundaire_collector_offerte_secundaire_collector_offerte_component__ = __webpack_require__("../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contactaanvragen_contactaanvragen_component__ = __webpack_require__("../../../../../src/app/components/contactaanvragen/contactaanvragen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_realisaties_realisaties_component__["a" /* RealisatiesComponent */] },
    { path: 'secundaire-collector-offerte', component: __WEBPACK_IMPORTED_MODULE_10__components_secundaire_collector_offerte_secundaire_collector_offerte_component__["a" /* SecundaireCollectorOfferteComponent */] },
    { path: 'offertes', component: __WEBPACK_IMPORTED_MODULE_8__components_offertes_offertes_component__["a" /* OffertesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'contactaanvragen', component: __WEBPACK_IMPORTED_MODULE_11__components_contactaanvragen_contactaanvragen_component__["a" /* ContactaanvragenComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_offertes_offertes_component__["a" /* OffertesComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_realisaties_realisaties_component__["a" /* RealisatiesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_secundaire_collector_offerte_secundaire_collector_offerte_component__["a" /* SecundaireCollectorOfferteComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_contactaanvragen_contactaanvragen_component__["a" /* ContactaanvragenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1>\n        Schrijf naar ons\n    </h1>\n    <form (ngSubmit)=\"submitContact(myForm.form.valid)\" #myForm=\"ngForm\">\n        <div class=\"form-group \">\n            <label for=\"naam\">Naam</label>\n            <input class=\"form-control\" required minlength=\"4\" type=\"text\" [(ngModel)]=\"contact.naam\" name=\"naam\">\n        </div>\n        <div class=\"form-group \">\n            <label for=\"bedrijf\">Bedrijf</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"contact.bedrijf\" name=\"bedrijf\">\n        </div>\n        <div class=\"form-group \">\n            <label for=\"email\">Email</label>\n            <input class=\"form-control\" type=\"email\" [(ngModel)]=\"contact.email\" name=\"email\" email>\n        </div>\n        <div class=\"form-group \">\n            <label for=\"tel\">Tel</label>\n            <input class=\"form-control\" type=\"text\" [(ngModel)]=\"contact.tel\" name=\"tel\">\n        </div>\n        <div class=\"form-group \">\n            <label for=\"bericht\">Message</label>\n            <textarea class=\"form-control\" required minlength=\"4\" [(ngModel)]=\"contact.bericht\" name=\"bericht\"></textarea>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success pull-right \" (click)=\"submitContact(myForm.form.valid)\">Submit</button><br><br>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent(dataService) {
        this.dataService = dataService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contact = new Contact();
    };
    ContactComponent.prototype.submitContact = function (isValid) {
        if (isValid) {
            var r = JSON.stringify(this.contact);
            console.log(r);
            this.dataService.postContact(r);
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ContactComponent);

var Contact = (function () {
    function Contact() {
        this.bedrijf = '';
        this.tel = '';
    }
    return Contact;
}());
var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contactaanvragen/contactaanvragen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contactaanvragen/contactaanvragen.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Contactaanvragen</h1>\n<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>Naam</th>\n            <th>Bedrijf</th>\n            <th>Bericht</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let o of contactaanvragen\">\n            <td>{{o.naam}}</td>\n            <td>{{o.bedrijf}}</td>\n            <td>{{o.bericht}}</td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/contactaanvragen/contactaanvragen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactaanvragenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactaanvragenComponent = (function () {
    function ContactaanvragenComponent(dataService) {
        this.dataService = dataService;
    }
    ContactaanvragenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getContactaanvragen().subscribe(function (contactaanvragen) {
            _this.contactaanvragen = contactaanvragen.data;
        });
    };
    return ContactaanvragenComponent;
}());
ContactaanvragenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contactaanvragen',
        template: __webpack_require__("../../../../../src/app/components/contactaanvragen/contactaanvragen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contactaanvragen/contactaanvragen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ContactaanvragenComponent);

var Contact = (function () {
    function Contact() {
        this.bedrijf = '';
        this.tel = '';
    }
    return Contact;
}());
var _a;
//# sourceMappingURL=contactaanvragen.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/offertes/offertes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/offertes/offertes.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Offertes</h1>\n<table class=\"table table-striped\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>afstandtussencircuits</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let o of offertes\">\n            <td>{{o.offerteid}}</td>\n            <td>{{o.afstandtussencircuits}}</td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/offertes/offertes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffertesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffertesComponent = (function () {
    function OffertesComponent(dataService) {
        this.dataService = dataService;
    }
    OffertesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getOffertes().subscribe(function (offertes) {
            _this.offertes = offertes.data;
        });
    };
    return OffertesComponent;
}());
OffertesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-offertes',
        template: __webpack_require__("../../../../../src/app/components/offertes/offertes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/offertes/offertes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], OffertesComponent);

var _a;
//# sourceMappingURL=offertes.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/realisaties/realisaties.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/realisaties/realisaties.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>Realisaties</h1>\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <img src=\"/assets/images/buffervat-mmt.jpg\" alt=\"buffervat\" class=\"img-thumbnail\">\n        </div>\n        <div class=\"col-sm-8\">\n            <h3>Buffervaten</h3>\n            <p>MMT is dé referentie in het ontwerpen en produceren van buffervaten. Aan de hand van de wensen van de klant of studiebureau ontwerpen en produceren wij buffertanks met een brede waaier aan toepassingsmogelijkheden. Van onze standaard vaten\n                tot vaten perfect op maat gemaakt volgens Uw wensen, MMT maakt het waar. Door onze uitgebreide stock van materialen garanderen wij een korte levertermijn.</p>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <h3>Toelevering HVAC Prefabsystemen</h3>\n            <p>MMT heeft verschillende decennia ervaring in het ontwerpen, dimensioneren en produceren van prefab installatieonderdelen voor verwarmings- en koelinstallaties. Wij produceren verschillende standaard producten, zoals evenwichtsflessen, collectoren,\n                broekstukken, inlasbochten, venturieblokken, vuilvangers, magneetfilters, enzovoort. Deze producten zijn terug te vinden in onze cataloog, maar worden ook verdeeld door verschillende groothandels.\n            </p>\n        </div>\n        <div class=\"col-sm-4\">\n            <img src=\"/assets/images/mmt-evenwichtfles.JPG\" alt=\"buffervat\" class=\"img-thumbnail\">\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3>Totaalprojecten voor de energiesector</h3>\n            <p>Wij maken volledige collectoren en zelfs volledige technische ruimtes in prefab in een van onze montagehallen. Wij produceren deze aan de hand van plannen verstrekt door onze klanten, of door eigen plannen na opmetingen ter plekke. MMT beschikt\n                over een sterk team van monteurs en lassers die uitgebreide ervaring hebben met dergelijke opdrachten. Deze bewezen manier van werken is kosteneffectief, maakt een uitvoering in een korte tijdsspanne op de werf mogelijk en maakt zelfs\n                proefdraaien off site mogelijk. Ideaal bij een shut down in een bedrijf, of bij een beperkte uitvoeringstermijn.</p>\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <img src=\"/assets/images/mmt-evenwichtfles.JPG\" alt=\"buffervat\" class=\"img-thumbnail\">\n        </div>\n        <div class=\"col-sm-4\">\n            <h3>Collectoren</h3>\n            <p>MMT heeft verschillende decennia ervaring in het ontwerpen, dimensioneren en produceren van prefab installatieonderdelen voor verwarmings- en koelinstallaties. Wij produceren verschillende standaard producten, zoals evenwichtsflessen, collectoren,\n                broekstukken, inlasbochten, venturieblokken, vuilvangers, magneetfilters, enzovoort. Deze producten zijn terug te vinden in onze cataloog, maar worden ook verdeeld door verschillende groothandels.\n            </p>\n        </div>\n        <div class=\"col-sm-4\">\n            <img src=\"/assets/images/mmt-secundaire-collector.jpg\" alt=\"buffervat\" class=\"img-thumbnail\">\n        </div>\n    </div>\n\n    <hr>\n\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <h3>Metaalconstructie en apparatenbouw</h3>\n            <p>MMT heeft uigebreide ervaring met turn key projecten in de energiesector. Wij maken voor U metaalconstructies en apparaten, gekoppeld aan een uitgebreide expertise in projecten gerelateerd aan de energiesector. Van het inrichten van mobiele\n                stookinstallaties, koelcentrales of warmtekrachtkoppeling, tot het opbouwen van skids in verschillende verdiepingen met inbegrip van alle piping, trappen, draagstucturen met looprooster en bordessen, dit alles heeft geen geheimen voor\n                MMT. Volledig uitgevoerd volgens Uw wensen en plannen, in staal of roestvast staal.\n            </p>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/realisaties/realisaties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealisatiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RealisatiesComponent = (function () {
    function RealisatiesComponent() {
    }
    RealisatiesComponent.prototype.ngOnInit = function () {
    };
    return RealisatiesComponent;
}());
RealisatiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-realisaties',
        template: __webpack_require__("../../../../../src/app/components/realisaties/realisaties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/realisaties/realisaties.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RealisatiesComponent);

//# sourceMappingURL=realisaties.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=isEdit>\n    <h1>\n        Offerte: Secundaire collector\n    </h1>\n    <form>\n        <h4>Diameter</h4>\n        <div class=\"form-group\">\n            <label for=\"debiet\">Debiet (m&#179;/h)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.debiet\" name=\"debiet\" (ngModelChange)=\"debietUpdated()\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"vermogen\">Vermogen (kW)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.vermogen\" name=\"vermogen\" (ngModelChange)=\"vermogenUpdated()\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"temperatuurVerschil\">&#9651;T (&ordm;C)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.temperatuurVerschil\" name=\"temperatuurVerschil\" (ngModelChange)=\"temperatuurVerschilUpdated()\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"watersnelheid\">Watersnelheid (m/s)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.watersnelheid\" name=\"watersnelheid\" (ngModelChange)=\"watersnelheidUpdated()\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"diameter\">Diameter (mm)</label>\n            <select class=\"form-control\" type=\"number\" [(ngModel)]=\"model.diameter\" name=\"diameter\" convert-to-number (ngModelChange)=\"checkCircuitDiameters()\">\n              <option *ngFor=\"let item of model.mogelijkeDiameters()\" [ngValue]=\"item\">DN{{item}}</option>\n            </select>\n        </div>\n        <h4>Circuits</h4>\n        <div class=\"form-group \">\n            <div *ngFor=\"let oi of model.circuits; let j=index \" class=\"list-group-item \">\n\n                <div class='row'>\n                    <div class=\"col-sm-2 \">\n                        <div class='form-group'>\n                            <label for=\"circuit\">Circuit {{j + 1}}</label>\n                            <button type=\"button\" class=\"btn btn-default\" (click)=\"deleteCircuit(j) \">\n                                Verwijderen\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6 \">\n                        <div class='form-group'>\n                            <label for=\"diameter\">Diameter (mm)</label>\n                            <select class=\"form-control\" type=\"number\" [(ngModel)]=\"oi.diameter\" name=\"diameter-{{j}}\" convert-to-number (ngModelChange)=\"diameterUpdated(j)\">\n                              <option *ngFor=\"let item of model.mogelijkeDiametersMetFilter()\" [ngValue]=\"item\">DN{{item}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 \">\n                        <div class='form-group'>\n                            <label for=\"aansluiting\">Aansluiting</label>\n                            <select class=\"form-control\" type=\"text\" [(ngModel)]=\"oi.aansluiting\" name=\"aansluiting-{{j}}\" (ngModelChange)=\"drawPrimaireCollector()\">\n                              <option *ngFor=\"let item of oi.mogelijkeCircuitAansluitingen()\" [ngValue]=\"item\">{{item}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"float-sm-right \">\n            <button type=\"button\" class=\"btn btn-primary pull-right \" (click)=\"addCircuit()\">\n            Circuit toevoegen\n        </button>\n        </div><br><br>\n        <div class=\" form-group \">\n            <label for=\"afstandTussenCircuits \">Afstand tussen circuits (mm)</label>\n            <input class=\"form-control\" type=\"number\" [(ngModel)]=\"model.afstandTussenCircuits\" name=\"afstandTussenCircuits \">\n        </div>\n    </form>\n</div>\n\n<div *ngIf=!isEdit class=\"form-group\">\n    <address>\n  <strong>M-M-T bvba</strong><br>\n  Szamotulystraat 5<br>\n  8700 Tielt (Belgium)<br>\n  <abbr title=\" Phone \">Tel:</abbr> +32 (0)51 72 42 88<br>\n  <a href=\"mailto:# \">info@m-m-t.be</a>\n</address>\n    <h1>\n        Offerte: Secundaire collector\n    </h1>\n    <ul class=\"list-group \">\n        <li class=\"list-group-item \">Afstand tussen circuits: {{afstandTussenCircuits}}</li>\n        <li class=\"list-group-item \">Aantal circuits: {{circuits.length}}</li>\n        <li *ngFor=\"let u of circuits; let i=index \" class=\"list-group-item \">Circuit {{i + 1}} met een diameter van {{u.diameter}} en {{u.heeftScroefdraad ? 'met' : 'zonder'}} schroefdraad</li>\n    </ul>\n</div>\n\n<h4>Technische tekening</h4>\n<div class=\"form-group\" style=\"border-style: solid; border-width: 1px;\">\n    <canvas #myCanvas width=\"1500\" height=\"400 \">\n    </canvas>\n</div>\n\n\n<div class=\"float-sm-right \" *ngIf=isEdit>\n    <button type=\"button \" class=\"btn btn-success pull-right \" (click)=\"requestOfferte() \">\n            Offerte aanvragen\n    </button>\n    <button type=\"button \" class=\"btn btn-default pull-right \" (click)=\"resetOfferte() \">\n            Reset\n    </button>\n    <br><br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecundaireCollectorOfferteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecundaireCollectorOfferteComponent = (function () {
    function SecundaireCollectorOfferteComponent() {
        this.isEdit = true;
    }
    SecundaireCollectorOfferteComponent.prototype.ngOnInit = function () {
        this.model = new SecundaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.ngAfterViewInit = function () {
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.requestOfferte = function () {
        this.model.offerteId = Guid.newGuid();
        this.isEdit = false;
    };
    SecundaireCollectorOfferteComponent.prototype.resetOfferte = function () {
        this.model.resetOfferte();
    };
    SecundaireCollectorOfferteComponent.prototype.drawPrimaireCollector = function () {
        console.log("drawPrimaireCollector");
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 1000, 400);
        ctx.beginPath();
        ctx.moveTo(100, 140);
        ctx.lineTo(100 * this.model.circuits.length + 150, 140);
        ctx.stroke();
        ctx.moveTo(100, 240);
        ctx.lineTo(100 * this.model.circuits.length + 150, 240);
        ctx.stroke();
        var i = 0;
        for (var _i = 0, _a = this.model.circuits; _i < _a.length; _i++) {
            var u = _a[_i];
            //Lijn uit
            ctx.moveTo(150 + i * 100, 100);
            ctx.lineTo(150 + i * 100, 140);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(150 + i * 100, 140, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            //Lijn terug
            ctx.moveTo(200 + i * 100, 144);
            ctx.lineTo(200 + i * 100, 240);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(200 + i * 100, 140, 4, 1.5 * Math.PI, 2.5 * Math.PI, false);
            ctx.stroke();
            ctx.moveTo(200 + i * 100, 100);
            ctx.lineTo(200 + i * 100, 136);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(200 + i * 100, 240, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.font = "13px Arial";
            ctx.fillText("C" + (i + 1), 150 + i * 100, 60);
            ctx.font = "10px Arial";
            ctx.fillText("DN" + u.diameter, 150 + i * 100, 70);
            ctx.fillText(u.aansluiting, 150 + i * 100, 80);
            if (u.aansluiting.indexOf("P") >= 0) {
                ctx.moveTo(145 + i * 100, 95);
                ctx.lineTo(155 + i * 100, 95);
                ctx.stroke();
                ctx.moveTo(195 + i * 100, 95);
                ctx.lineTo(205 + i * 100, 95);
                ctx.stroke();
            }
            else if (u.aansluiting.indexOf("\"") >= 0) {
                ctx.moveTo(150 + i * 100, 95);
                ctx.lineTo(150 + i * 100, 90);
                ctx.stroke();
                ctx.moveTo(200 + i * 100, 95);
                ctx.lineTo(200 + i * 100, 90);
                ctx.stroke();
            }
            i++;
        }
    };
    SecundaireCollectorOfferteComponent.prototype.deleteCircuit = function (j) {
        this.model.deleteCircuit(j);
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.addCircuit = function (j) {
        this.model.addCircuit(j);
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.debietUpdated = function () {
        this.model.calculateFromNewDebiet();
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.vermogenUpdated = function () {
        this.model.calculateFromNewVermogen();
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.temperatuurVerschilUpdated = function () {
        this.model.calculateFromNewTemperatuurVerschil();
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.diameterUpdated = function (j) {
        this.model.circuits[j].checkCircuitAansluitingen();
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.watersnelheidUpdated = function () {
        this.drawPrimaireCollector();
    };
    SecundaireCollectorOfferteComponent.prototype.checkCircuitDiameters = function () {
        this.model.checkCircuitDiameters();
        this.drawPrimaireCollector();
    };
    return SecundaireCollectorOfferteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('myCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], SecundaireCollectorOfferteComponent.prototype, "canvasRef", void 0);
SecundaireCollectorOfferteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-secundaire-collector-offerte',
        template: __webpack_require__("../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/secundaire-collector-offerte/secundaire-collector-offerte.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SecundaireCollectorOfferteComponent);

var SecundaireCollector = (function () {
    function SecundaireCollector() {
        this.resetOfferte();
    }
    SecundaireCollector.prototype.aansluitingOmschrijving = function (aansluiting) {
        if (aansluiting == "Lasnaad") {
            return aansluiting;
        }
        if (aansluiting)
            return aansluiting;
    };
    SecundaireCollector.prototype.mogelijkeDiameters = function () {
        return [50, 65, 80, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600];
    };
    SecundaireCollector.prototype.mogelijkeDiametersMetFilter = function () {
        var o = this.diameter;
        return [15, 20, 25, 50, 65, 80, 100, 125, 150, 200, 250, 300, 350, 400, 450, 500, 600].filter(function (value) {
            return value >= o / 2 && value < o;
        });
    };
    SecundaireCollector.prototype.calculateFromNewDebiet = function () {
        this.vermogen = this.debiet * this.temperatuurVerschil / 0.86;
        var oppervlakte = this.debiet / 3600 / this.watersnelheid;
        this.setDiameterFromOppervlakte(oppervlakte);
    };
    SecundaireCollector.prototype.calculateFromNewTemperatuurVerschil = function () {
        this.debiet = this.vermogen * 0.86 / this.temperatuurVerschil;
        var oppervlakte = this.debiet / 3600 / this.watersnelheid;
        this.setDiameterFromOppervlakte(oppervlakte);
    };
    SecundaireCollector.prototype.calculateFromNewVermogen = function () {
        this.debiet = this.vermogen * 0.86 / this.temperatuurVerschil;
        var oppervlakte = this.debiet / 3600 / this.watersnelheid;
        this.setDiameterFromOppervlakte(oppervlakte);
    };
    SecundaireCollector.prototype.setDiameterFromOppervlakte = function (oppervlakte) {
        var d = Math.sqrt(oppervlakte * 4 / Math.PI) * 1000;
        this.diameter = this.mogelijkeDiameters().filter(function (value) {
            return value >= d;
        })[0];
        this.checkCircuitDiameters();
    };
    SecundaireCollector.prototype.checkCircuitDiameters = function () {
        var options = this.mogelijkeDiametersMetFilter();
        for (var _i = 0, _a = this.circuits; _i < _a.length; _i++) {
            var u = _a[_i];
            if (!options.includes(u.diameter)) {
                u.diameter = options[0];
            }
            u.checkCircuitAansluitingen();
        }
    };
    SecundaireCollector.prototype.resetOfferte = function () {
        this.debiet = 17.2;
        this.temperatuurVerschil = 20;
        this.vermogen = 400;
        this.watersnelheid = 0.35;
        this.diameter = 125;
        this.afstandTussenCircuits = 400;
        this.circuits = [new SecundaireCollectorCircuit(100, false),
            new SecundaireCollectorCircuit(100, true),
            new SecundaireCollectorCircuit(100, false)];
    };
    SecundaireCollector.prototype.deleteCircuit = function (j) {
        if (this.circuits.length > 2) {
            this.circuits.splice(j, 1);
        }
    };
    SecundaireCollector.prototype.addCircuit = function (j) {
        if (this.circuits.length < 6) {
            this.circuits.push(new SecundaireCollectorCircuit(100, false));
        }
    };
    return SecundaireCollector;
}());
var SecundaireCollectorCircuit = (function () {
    function SecundaireCollectorCircuit(diameter, heeftScroefdraad) {
        this.diameter = diameter;
        this.checkCircuitAansluitingen();
    }
    SecundaireCollectorCircuit.prototype.checkCircuitAansluitingen = function () {
        var options = this.mogelijkeCircuitAansluitingen();
        if (!options.includes(this.aansluiting)) {
            var d = this.diameter;
            this.aansluiting = options.filter(function (value) {
                if (d <= 100 && value.indexOf("\"") >= 0) {
                    return true;
                }
                else if (d > 100 && value.indexOf("P") >= 0) {
                    return true;
                }
                return false;
            })[0];
        }
    };
    SecundaireCollectorCircuit.prototype.mogelijkeCircuitAansluitingen = function () {
        var options = ["Lasnaad"];
        switch (this.diameter) {
            case 15:
            case 20:
            case 25:
                options.push("1\"M");
                options.push("1\"F");
                break;
            case 32:
                options.push("5/4\"M");
                options.push("5/4\"F");
                break;
            case 40:
                options.push("6/4\"M");
                options.push("6/4\"F");
                break;
            case 50:
                options.push("2\"M");
                options.push("2\"F");
                break;
            case 65:
                options.push("2 1/2\"M");
                options.push("2 1/2\"F");
                break;
            case 80:
                options.push("3\"M");
                options.push("3\"F");
                break;
            case 100:
                options.push("4\"M");
                options.push("4\"F");
                break;
            case 65:
                options.push("3\"M");
                options.push("3\"F");
                break;
            default:
                break;
        }
        if (this.diameter < 200) {
            options.push("PN6");
            options.push("PN10/16");
        }
        else {
            options.push("PN10");
            options.push("PN16");
        }
        return options;
    };
    return SecundaireCollectorCircuit;
}());
//sortering van de circuits, moet ik me daar zorgen in maken?
//benaming van de componenten in het nederlands?
//volledige component in 1 object => is dat ok?
//waar stop ik mijn class Guid?
var Guid = (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());
var _a;
//# sourceMappingURL=secundaire-collector-offerte.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        console.log('dataservice is connected');
    }
    DataService.prototype.getOffertes = function () {
        return this.http.get('/api/secundaireCollectorOffertes')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getContactaanvragen = function () {
        return this.http.get('/api/contactaanvragen')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.postContact = function (contact) {
        this.http.post('/api/contact', contact, { headers: this.headers })
            .subscribe(function (data) {
            return data.json();
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap__ = __webpack_require__("../../../../gsap/TweenMax.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_gsap__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map