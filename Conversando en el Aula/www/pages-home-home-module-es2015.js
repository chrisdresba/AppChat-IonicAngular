(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nion-content {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  --background: #46205b;\n}\nion-card {\n  width: 100vw;\n  height: 50vh;\n  margin: 0;\n  border-radius: 0;\n}\nimg {\n  width: 100vw;\n  height: 45vh;\n  margin: 0;\n}\n.sala-a {\n  --background: url('fondo.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n}\n.sala-b {\n  --background: url('fondo2.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n}\nh1 {\n  margin-top: -20px;\n  text-align: center;\n  font-family: \"Acme\", sans-serif;\n  font-size: 3em;\n  color: aliceblue;\n  -webkit-text-stroke: 0.6px #0a0505;\n}\n@media screen and (min-width: 460px) {\n  ion-content {\n    display: flex;\n    flex-direction: row;\n  }\n\n  ion-card {\n    width: 50vw;\n    height: 100vh;\n    margin: 0;\n  }\n\n  img {\n    width: 250px;\n    height: 250px;\n    margin: 0;\n  }\n}\n@media (orientation: landscape) {\n  ion-card {\n    width: 50vw;\n    height: 100vh;\n    margin: 0;\n  }\n\n  img {\n    width: 50vw;\n    height: 100vh;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHlFQUFBO0FBRVI7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFBRjtBQUdBO0VBQ0UsK0NBQUE7RUFDRCxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBRDtBQUdBO0VBQ0UsZ0RBQUE7RUFDRCxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFBRDtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFBRjtBQUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUFBRjs7RUFHQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtFQUFGOztFQUdBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxTQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7RUFERjs7RUFJQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsU0FBQTtFQURGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmRpc3BsYXk9c3dhcCcpO1xuXG5pb24tY29udGVudHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IDA7XG4gIC0tYmFja2dyb3VuZDogIzQ2MjA1Yjtcbn1cblxuaW9uLWNhcmQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNDV2aDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2FsYS1he1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ZvbmRvLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uc2FsYS1ie1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ZvbmRvMi5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaDF7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQWNtZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBjb2xvcjogYWxpY2VibHVlO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAwLjZweCByZ2IoMTAsIDUsIDUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NjBweCl7XG4gIGlvbi1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246cm93O1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICBpbWcge1xuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToastWithOptions(options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create(options);
            toast.present();
        });
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "hsj+");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\" style=\"background: none transparent\" id=\"creditos\">\n  <ion-fab horizontal=\"end\" vertical=\"start\" style=\"margin-top:1em\">\n    <ion-fab-button (click)=\"Logout()\" style=\"--background: var(--ion-color-dark);\">\n      <ion-icon name=\"log-out\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-card class=\"sala-a\" [routerLink]=\"['/sala-a']\">\n  <img src=\"./../../../assets/logoA.png\" alt=\"\">\n   <h1 >PPS-A4</h1>\n  </ion-card>\n  <ion-card class=\"sala-b\" [routerLink]=\"['/sala-b']\">\n    <img src=\"./../../../assets/logoB.png\" alt=\"\">\n    <h1 >PPS-4B</h1>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");









let HomePage = class HomePage {
    constructor(authSrv, router, toastSrv, toast, alertController, afAuth) {
        this.authSrv = authSrv;
        this.router = router;
        this.toastSrv = toastSrv;
        this.toast = toast;
        this.alertController = alertController;
        this.afAuth = afAuth;
    }
    ngOnInit() {
        this.usuarioLog = localStorage.getItem('usuario');
    }
    ShowtToastQrLimit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentToast("Créditos", "Este código ya fue cargado", "warning");
        });
    }
    ShowtToastCargaOk(credito) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentToast("Créditos", "La operación se realizo correctamente", "success");
        });
    }
    Logout() {
        localStorage.removeItem('usuario');
        this.authSrv.SignOut();
        this.router.navigate(["login"]);
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
};
HomePage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-home",
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map