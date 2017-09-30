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

module.exports = "<div class=\"container\">\n    <app-primaire-collector></app-primaire-collector>\n</div>"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_primaire_collector_primaire_collector_component__ = __webpack_require__("../../../../../src/app/components/primaire-collector/primaire-collector.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_primaire_collector_primaire_collector_component__["a" /* PrimaireCollectorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/primaire-collector/primaire-collector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/primaire-collector/primaire-collector.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=isEdit>\n    <h1>\n        Offerte: Primaire collector\n    </h1>\n    <form>\n        <div class=\" form-group \">\n            <label for=\"afstandTussenUitgangen \">Afstand tussen uitgangen</label>\n            <input class=\"form-control \" type=\"number \" [(ngModel)]=\"afstandTussenUitgangen \" name=\"afstandTussenUitgangen \">\n        </div>\n        <h4>Uitgangen</h4>\n        <div class=\"form-group \">\n            <div *ngFor=\"let oi of uitgangen; let j=index \" class=\"list-group-item \">\n\n                <div class='row'>\n                    <div class=\"col-sm-2 \">\n                        <div class='form-group'>\n                            <label for=\"uitgang \">Uitgang {{j + 1}}</label>\n                            <button type=\"button \" class=\"btn btn-default \" (click)=\"deleteUitgang(j) \">\n                                Verwijderen\n                            </button>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6 \">\n                        <div class='form-group'>\n                            <label for=\"diameter \">Diameter</label>\n                            <input class=\"form-control \" type=\"number \" [(ngModel)]=\"oi.diameter \" name=\"diameter-{{j}} \">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4 \">\n                        <div class='form-group'>\n                            <label for=\"heeftSchroefdraad \">Schroefdraad</label>\n                            <input class=\"form-control \" type=\"checkbox \" [(ngModel)]=\"oi.heeftScroefdraad \" name=\"heeftSchroefdraad-{{j}} \">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"float-sm-right \">\n            <button type=\"button \" class=\"btn btn-primary pull-right \" (click)=\"addUitgang() \">\n            Uitgang toevoegen\n        </button>\n        </div><br><br>\n\n    </form>\n</div>\n\n<div *ngIf=!isEdit class=\"form-group\">\n    <address>\n  <strong>M-M-T bvba</strong><br>\n  Szamotulystraat 5<br>\n  8700 Tielt (Belgium)<br>\n  <abbr title=\" Phone \">Tel:</abbr> +32 (0)51 72 42 88<br>\n  <a href=\"mailto:# \">info@m-m-t.be</a>\n</address>\n    <h1>\n        Offerte: Primaire collector\n    </h1>\n    <ul class=\"list-group \">\n        <li class=\"list-group-item \">Afstand tussen uitgangen: {{afstandTussenUitgangen}}</li>\n        <li class=\"list-group-item \">Aantal uitgangen: {{uitgangen.length}}</li>\n        <li *ngFor=\"let u of uitgangen; let i=index \" class=\"list-group-item \">Uitgang {{i + 1}} met een diameter van {{u.diameter}} en {{u.heeftScroefdraad ? 'met' : 'zonder'}} schroefdraad</li>\n    </ul>\n</div>\n\n<h4>Technische tekening</h4>\n<div class=\"form-group\" style=\"border-style: solid; border-width: 1px;\">\n    <canvas #myCanvas width=\"1500\" height=\"400 \">\n    </canvas>\n</div>\n\n\n<div class=\"float-sm-right \" *ngIf=isEdit>\n    <button type=\"button \" class=\"btn btn-default pull-right \" (click)=\"resetOfferte() \">\n            Reset\n    </button>\n    <button type=\"button \" class=\"btn btn-success pull-right \" (click)=\"requestOfferte() \">\n            Offerte aanvragen\n    </button>\n    <br><br>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/primaire-collector/primaire-collector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimaireCollectorComponent; });
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

var PrimaireCollectorComponent = (function () {
    function PrimaireCollectorComponent() {
        this.isEdit = true;
    }
    PrimaireCollectorComponent.prototype.ngOnInit = function () {
        this.resetOfferte();
    };
    PrimaireCollectorComponent.prototype.ngAfterViewInit = function () {
        this.drawPrimaireCollector();
    };
    PrimaireCollectorComponent.prototype.requestOfferte = function () {
        this.offerteId = Guid.newGuid();
        this.isEdit = false;
    };
    PrimaireCollectorComponent.prototype.resetOfferte = function () {
        this.afstandTussenUitgangen = 20;
        this.uitgangen = [new PrimaireCollectorUitgang(20, false),
            new PrimaireCollectorUitgang(20, true),
            new PrimaireCollectorUitgang(8, false)];
    };
    PrimaireCollectorComponent.prototype.drawPrimaireCollector = function () {
        var ctx = this.canvasRef.nativeElement.getContext('2d');
        //console.log(document.querySelectorAll("#myCanvas")[0].clientWidth);
        ctx.clearRect(0, 0, 1000, 400);
        ctx.beginPath();
        ctx.moveTo(100, 60);
        ctx.lineTo(100, 320);
        ctx.stroke();
        ctx.moveTo(100, 100);
        ctx.lineTo(150 * this.uitgangen.length + 40, 100);
        ctx.stroke();
        ctx.moveTo(100, 200);
        ctx.lineTo(150 * this.uitgangen.length + 80, 200);
        ctx.stroke();
        var i = 0;
        for (var _i = 0, _a = this.uitgangen; _i < _a.length; _i++) {
            var u = _a[_i];
            ctx.moveTo(150 + i * 150, 100);
            ctx.lineTo(150 + i * 150, 240);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(150 + i * 150, 100, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.moveTo(180 + i * 150, 200);
            ctx.lineTo(180 + i * 150, 280);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(180 + i * 150, 200, 2, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
            if (u.heeftScroefdraad) {
                ctx.beginPath();
                ctx.arc(150 + i * 150, 254, 8, 0, Math.PI, true);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(180 + i * 150, 294, 8, 0, Math.PI, true);
                ctx.stroke();
            }
            i++;
        }
    };
    PrimaireCollectorComponent.prototype.deleteUitgang = function (j) {
        this.uitgangen.splice(j, 1);
        this.drawPrimaireCollector();
    };
    PrimaireCollectorComponent.prototype.addUitgang = function (j) {
        if (this.uitgangen.length < 6) {
            this.uitgangen.push(new PrimaireCollectorUitgang(20, false));
            this.drawPrimaireCollector();
        }
    };
    return PrimaireCollectorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('myCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], PrimaireCollectorComponent.prototype, "canvasRef", void 0);
PrimaireCollectorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-primaire-collector',
        template: __webpack_require__("../../../../../src/app/components/primaire-collector/primaire-collector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/primaire-collector/primaire-collector.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrimaireCollectorComponent);

var PrimaireCollectorUitgang = (function () {
    function PrimaireCollectorUitgang(diameter, heeftScroefdraad) {
        this.diameter = diameter;
        this.heeftScroefdraad = heeftScroefdraad;
    }
    return PrimaireCollectorUitgang;
}());
//sortering van de uitgangen, moet ik me daar zorgen in maken?
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
//# sourceMappingURL=primaire-collector.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
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