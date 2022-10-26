(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sala-a-sala-a-module"],{

/***/ "733z":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sala-a/sala-a.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\"> SALA PPS-4A </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"dark\" style=\"width:45px;height:45px;margin-top:-5px\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n    <ion-fab-button color=\"dark\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-circle\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color=\"dark\" (click)=\"Logout()\">\n      <ion-icon name=\"exit-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of listadoMensajes\">\n        <ion-card *ngIf=\"message.usuario !== usuario\">\n          <ion-card-header title=\"{{message.usuario}}\" class=\"cardHeader\">\n            {{message.usuario}}\n          </ion-card-header>\n          <ion-card-content class=\"cardContent\">\n            {{message.mensaje }}\n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n        <ion-card class=\"soyYo\" *ngIf=\"message.usuario === usuario\">\n          <ion-card-content>\n            {{message.mensaje }}  \n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n\n<ion-footer>\n  <ion-input [(ngModel)]=\"mensaje\" maxlength=\"21\" type=\"text\" name=\"\" id=\"\"></ion-input>\n  <ion-button (click)=\" guardarMensaje()\" >Enviar</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "Ggof":
/*!***********************************************!*\
  !*** ./src/app/pages/sala-a/sala-a.module.ts ***!
  \***********************************************/
/*! exports provided: SalaAPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaAPageModule", function() { return SalaAPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sala_a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sala-a-routing.module */ "USJS");
/* harmony import */ var _sala_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sala-a.page */ "reIs");







let SalaAPageModule = class SalaAPageModule {
};
SalaAPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sala_a_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalaAPageRoutingModule"]
        ],
        declarations: [_sala_a_page__WEBPACK_IMPORTED_MODULE_6__["SalaAPage"]]
    })
], SalaAPageModule);



/***/ }),

/***/ "USJS":
/*!*******************************************************!*\
  !*** ./src/app/pages/sala-a/sala-a-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SalaAPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaAPageRoutingModule", function() { return SalaAPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sala_a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sala-a.page */ "reIs");




const routes = [
    {
        path: '',
        component: _sala_a_page__WEBPACK_IMPORTED_MODULE_3__["SalaAPage"]
    }
];
let SalaAPageRoutingModule = class SalaAPageRoutingModule {
};
SalaAPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalaAPageRoutingModule);



/***/ }),

/***/ "reIs":
/*!*********************************************!*\
  !*** ./src/app/pages/sala-a/sala-a.page.ts ***!
  \*********************************************/
/*! exports provided: SalaAPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaAPage", function() { return SalaAPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sala_a_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sala-a.page.html */ "733z");
/* harmony import */ var _sala_a_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sala-a.page.scss */ "vN20");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensaje.service */ "h9oc");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");









let SalaAPage = class SalaAPage {
    constructor(authSrv, router, loadingController, toast, chat, firestore) {
        this.authSrv = authSrv;
        this.router = router;
        this.loadingController = loadingController;
        this.toast = toast;
        this.chat = chat;
        this.firestore = firestore;
        this.usuario = '';
        this.listado = [];
        this.listadoMensajes = [];
        this.mensaje = '';
        this.presentLoading();
        setTimeout(() => {
            this.ordenarMensajes();
        }, 2000);
    }
    ngOnInit() {
        this.usuario = localStorage.getItem('usuario');
        //  this.listadoMensajes = this.chat.chatsA;
        this.chat.getMensajesA().subscribe(aux => {
            this.listado = aux;
        });
        this.ordenarMensajes();
    }
    ordenarMensajes() {
        this.listadoMensajes = this.listado.sort((a, b) => (((a.referencia > b.referencia)) ? 1 : -1));
    }
    guardarMensaje() {
        this.chat.guardarMensajeA(this.usuario, this.mensaje);
        setTimeout(() => {
            this.ordenarMensajes();
        }, 500);
        this.mensaje = '';
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: 'circles',
                message: 'Cargando...',
                duration: 2000,
                translucent: true,
                cssClass: 'my-loading-class'
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    presentToast(header, message, color) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                header,
                message,
                color,
                duration: 2000,
                position: "middle"
            });
            toast.present();
        });
    }
    Logout() {
        localStorage.removeItem('usuario');
        this.authSrv.SignOut();
        this.router.navigate(["login"]);
    }
    back() {
        this.router.navigate(["home"]);
    }
};
SalaAPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__["MensajeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
];
SalaAPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sala-a',
        template: _raw_loader_sala_a_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_a_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalaAPage);



/***/ }),

/***/ "vN20":
/*!***********************************************!*\
  !*** ./src/app/pages/sala-a/sala-a.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nion-toolbar {\n  --background: #188ba0;\n  font-family: \"Acme\", sans-serif;\n  color: aliceblue;\n  font-size: 1.5em;\n  height: 8vh;\n}\nion-title {\n  font-size: 1.5em;\n}\nion-content {\n  --background: url('fondo.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n  height: 87vh;\n}\nion-button {\n  margin: 0;\n}\nion-footer {\n  display: flex;\n  flex-direction: row;\n  height: 5vh;\n}\nion-input {\n  --background:rgb(234, 247, 255) ;\n  --color:#000;\n}\nion-card-header {\n  background-color: rgba(128, 128, 128, 0.1);\n  background: transparent;\n  font-weight: bold;\n  margin-bottom: -10px;\n}\n.soyYo {\n  position: relative;\n  margin-left: auto;\n}\n.hora {\n  position: relative;\n  float: right;\n  font-size: 8px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NhbGEtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFFUjtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSwrQ0FBQTtFQUNILGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNHLFlBQUE7QUFDSjtBQUVBO0VBQ0ksU0FBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtBQUVKO0FBRUE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNhbGEtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmRpc3BsYXk9c3dhcCcpO1xuXG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMxODhiYTA7XG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgaGVpZ2h0OiA4dmg7XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9mb25kby5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDg3dmg7XG59XG5cbmlvbi1idXR0b257XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6cmdiKDIzNCwgMjQ3LCAyNTUpIDtcbiAgICAtLWNvbG9yOiMwMDA7XG59XG5cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uc295WW97IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5ob3Jhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=pages-sala-a-sala-a-module-es2015.js.map