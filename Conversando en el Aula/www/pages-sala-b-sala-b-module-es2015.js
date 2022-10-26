(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sala-b-sala-b-module"],{

/***/ "6ckQ":
/*!*********************************************!*\
  !*** ./src/app/pages/sala-b/sala-b.page.ts ***!
  \*********************************************/
/*! exports provided: SalaBPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaBPage", function() { return SalaBPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sala_b_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sala-b.page.html */ "7VIl");
/* harmony import */ var _sala_b_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sala-b.page.scss */ "NTsP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensaje.service */ "h9oc");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");









let SalaBPage = class SalaBPage {
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
        this.chat.getMensajesB().subscribe(aux => {
            this.listado = aux;
        });
        this.ordenarMensajes();
    }
    ordenarMensajes() {
        this.listadoMensajes = this.listado.sort((a, b) => (((a.referencia > b.referencia)) ? 1 : -1));
    }
    guardarMensaje() {
        this.chat.guardarMensajeB(this.usuario, this.mensaje);
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
SalaBPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__["MensajeService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] }
];
SalaBPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sala-b',
        template: _raw_loader_sala_b_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_b_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SalaBPage);



/***/ }),

/***/ "7VIl":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sala-b/sala-b.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\"> SALA PPS-4B </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"dark\" style=\"width:45px;height:45px;margin-top:-5px\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n    <ion-fab-button color=\"dark\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-circle\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color=\"dark\" (click)=\"Logout()\">\n      <ion-icon name=\"exit-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of listadoMensajes\">\n        <ion-card *ngIf=\"message.usuario !== usuario\">\n          <ion-card-header title=\"{{message.usuario}}\" class=\"cardHeader\">\n            {{message.usuario}}\n          </ion-card-header>\n          <ion-card-content class=\"cardContent\">\n            {{message.mensaje }}\n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n        <ion-card class=\"soyYo\" *ngIf=\"message.usuario === usuario\">\n          <ion-card-content>\n            {{message.mensaje }}  \n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n\n<ion-footer>\n  <ion-input [(ngModel)]=\"mensaje\" maxlength=\"21\" type=\"text\" name=\"\" id=\"\"></ion-input>\n  <ion-button (click)=\" guardarMensaje()\" >Enviar</ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "KdOC":
/*!***********************************************!*\
  !*** ./src/app/pages/sala-b/sala-b.module.ts ***!
  \***********************************************/
/*! exports provided: SalaBPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaBPageModule", function() { return SalaBPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sala_b_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sala-b-routing.module */ "nxDN");
/* harmony import */ var _sala_b_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sala-b.page */ "6ckQ");







let SalaBPageModule = class SalaBPageModule {
};
SalaBPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sala_b_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalaBPageRoutingModule"]
        ],
        declarations: [_sala_b_page__WEBPACK_IMPORTED_MODULE_6__["SalaBPage"]]
    })
], SalaBPageModule);



/***/ }),

/***/ "NTsP":
/*!***********************************************!*\
  !*** ./src/app/pages/sala-b/sala-b.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nion-toolbar {\n  --background: #b8da7d;\n  font-family: \"Acme\", sans-serif;\n  color: aliceblue;\n  font-size: 1.5em;\n  height: 8vh;\n}\nion-title {\n  font-size: 1.5em;\n}\nion-content {\n  --background: url('fondo2.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n  height: 87vh;\n}\nion-button {\n  margin: 0;\n}\nion-footer {\n  display: flex;\n  flex-direction: row;\n  height: 5vh;\n}\nion-input {\n  --background:rgb(234, 247, 255) ;\n  --color:#000;\n}\nion-card-header {\n  background-color: rgba(128, 128, 128, 0.1);\n  background: transparent;\n  font-weight: bold;\n  margin-bottom: -10px;\n}\n.soyYo {\n  position: relative;\n  margin-left: auto;\n}\n.hora {\n  position: relative;\n  float: right;\n  font-size: 8px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NhbGEtYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFFUjtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSxnREFBQTtFQUNILGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNHLFlBQUE7QUFDSjtBQUVBO0VBQ0ksU0FBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtBQUVKO0FBRUE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNhbGEtYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmRpc3BsYXk9c3dhcCcpO1xuXG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICNiOGRhN2Q7XG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgaGVpZ2h0OiA4dmg7XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9mb25kbzIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiA4N3ZoO1xufVxuXG5pb24tYnV0dG9ue1xuICAgIG1hcmdpbjogMDtcbn1cblxuaW9uLWZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA1dmg7XG59XG5pb24taW5wdXR7XG4gICAgLS1iYWNrZ3JvdW5kOnJnYigyMzQsIDI0NywgMjU1KSA7XG4gICAgLS1jb2xvcjojMDAwO1xufVxuXG5cbmlvbi1jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMSk7XG4gICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLnNveVlveyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uaG9yYXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6cmlnaHQ7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "nxDN":
/*!*******************************************************!*\
  !*** ./src/app/pages/sala-b/sala-b-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SalaBPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaBPageRoutingModule", function() { return SalaBPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sala_b_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sala-b.page */ "6ckQ");




const routes = [
    {
        path: '',
        component: _sala_b_page__WEBPACK_IMPORTED_MODULE_3__["SalaBPage"]
    }
];
let SalaBPageRoutingModule = class SalaBPageRoutingModule {
};
SalaBPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SalaBPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-sala-b-sala-b-module-es2015.js.map