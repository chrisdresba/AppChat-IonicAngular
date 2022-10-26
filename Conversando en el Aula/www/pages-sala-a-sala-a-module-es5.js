(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sala-a-sala-a-module"], {
    /***/
    "733z":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sala-a/sala-a.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\"> SALA PPS-4A </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button color=\"dark\" style=\"width:45px;height:45px;margin-top:-5px\">\n    <ion-icon name=\"exit-outline\"></ion-icon>\n  </ion-fab-button>\n  <ion-fab-list side=\"bottom\">\n    <ion-fab-button color=\"dark\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-circle\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-button color=\"dark\" (click)=\"Logout()\">\n      <ion-icon name=\"exit-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab-list>\n</ion-fab>\n\n<ion-content>\n  <ion-grid>\n    <ion-row *ngFor=\"let message of listadoMensajes\">\n        <ion-card *ngIf=\"message.usuario !== usuario\">\n          <ion-card-header title=\"{{message.usuario}}\" class=\"cardHeader\">\n            {{message.usuario}}\n          </ion-card-header>\n          <ion-card-content class=\"cardContent\">\n            {{message.mensaje }}\n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n        <ion-card class=\"soyYo\" *ngIf=\"message.usuario === usuario\">\n          <ion-card-content>\n            {{message.mensaje }}  \n            <p class=\"hora\">{{message.fecha}} - {{message.hora}}</p>\n          </ion-card-content>\n        </ion-card>\n    </ion-row>\n  </ion-grid> \n</ion-content>\n\n<ion-footer>\n  <ion-input [(ngModel)]=\"mensaje\" maxlength=\"21\" type=\"text\" name=\"\" id=\"\"></ion-input>\n  <ion-button (click)=\" guardarMensaje()\" >Enviar</ion-button>\n</ion-footer>\n";
      /***/
    },

    /***/
    "Ggof":
    /*!***********************************************!*\
      !*** ./src/app/pages/sala-a/sala-a.module.ts ***!
      \***********************************************/

    /*! exports provided: SalaAPageModule */

    /***/
    function Ggof(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaAPageModule", function () {
        return SalaAPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _sala_a_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sala-a-routing.module */
      "USJS");
      /* harmony import */


      var _sala_a_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sala-a.page */
      "reIs");

      var SalaAPageModule = function SalaAPageModule() {
        _classCallCheck(this, SalaAPageModule);
      };

      SalaAPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _sala_a_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalaAPageRoutingModule"]],
        declarations: [_sala_a_page__WEBPACK_IMPORTED_MODULE_6__["SalaAPage"]]
      })], SalaAPageModule);
      /***/
    },

    /***/
    "USJS":
    /*!*******************************************************!*\
      !*** ./src/app/pages/sala-a/sala-a-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SalaAPageRoutingModule */

    /***/
    function USJS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaAPageRoutingModule", function () {
        return SalaAPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _sala_a_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sala-a.page */
      "reIs");

      var routes = [{
        path: '',
        component: _sala_a_page__WEBPACK_IMPORTED_MODULE_3__["SalaAPage"]
      }];

      var SalaAPageRoutingModule = function SalaAPageRoutingModule() {
        _classCallCheck(this, SalaAPageRoutingModule);
      };

      SalaAPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SalaAPageRoutingModule);
      /***/
    },

    /***/
    "reIs":
    /*!*********************************************!*\
      !*** ./src/app/pages/sala-a/sala-a.page.ts ***!
      \*********************************************/

    /*! exports provided: SalaAPage */

    /***/
    function reIs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalaAPage", function () {
        return SalaAPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sala_a_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sala-a.page.html */
      "733z");
      /* harmony import */


      var _sala_a_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sala-a.page.scss */
      "vN20");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/mensaje.service */
      "h9oc");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var SalaAPage = /*#__PURE__*/function () {
        function SalaAPage(authSrv, router, loadingController, toast, chat, firestore) {
          var _this = this;

          _classCallCheck(this, SalaAPage);

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
          setTimeout(function () {
            _this.ordenarMensajes();
          }, 2000);
        }

        _createClass(SalaAPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.usuario = localStorage.getItem('usuario'); //  this.listadoMensajes = this.chat.chatsA;

            this.chat.getMensajesA().subscribe(function (aux) {
              _this2.listado = aux;
            });
            this.ordenarMensajes();
          }
        }, {
          key: "ordenarMensajes",
          value: function ordenarMensajes() {
            this.listadoMensajes = this.listado.sort(function (a, b) {
              return a.referencia > b.referencia ? 1 : -1;
            });
          }
        }, {
          key: "guardarMensaje",
          value: function guardarMensaje() {
            var _this3 = this;

            this.chat.guardarMensajeA(this.usuario, this.mensaje);
            setTimeout(function () {
              _this3.ordenarMensajes();
            }, 500);
            this.mensaje = '';
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        spinner: 'circles',
                        message: 'Cargando...',
                        duration: 2000,
                        translucent: true,
                        cssClass: 'my-loading-class'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(header, message, color) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        header: header,
                        message: message,
                        color: color,
                        duration: 2000,
                        position: "middle"
                      });

                    case 2:
                      toast = _context2.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "Logout",
          value: function Logout() {
            localStorage.removeItem('usuario');
            this.authSrv.SignOut();
            this.router.navigate(["login"]);
          }
        }, {
          key: "back",
          value: function back() {
            this.router.navigate(["home"]);
          }
        }]);

        return SalaAPage;
      }();

      SalaAPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_services_mensaje_service__WEBPACK_IMPORTED_MODULE_7__["MensajeService"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]
        }];
      };

      SalaAPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sala-a',
        template: _raw_loader_sala_a_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sala_a_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SalaAPage);
      /***/
    },

    /***/
    "vN20":
    /*!***********************************************!*\
      !*** ./src/app/pages/sala-a/sala-a.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function vN20(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nion-toolbar {\n  --background: #188ba0;\n  font-family: \"Acme\", sans-serif;\n  color: aliceblue;\n  font-size: 1.5em;\n  height: 8vh;\n}\nion-title {\n  font-size: 1.5em;\n}\nion-content {\n  --background: url('fondo.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n  height: 87vh;\n}\nion-button {\n  margin: 0;\n}\nion-footer {\n  display: flex;\n  flex-direction: row;\n  height: 5vh;\n}\nion-input {\n  --background:rgb(234, 247, 255) ;\n  --color:#000;\n}\nion-card-header {\n  background-color: rgba(128, 128, 128, 0.1);\n  background: transparent;\n  font-weight: bold;\n  margin-bottom: -10px;\n}\n.soyYo {\n  position: relative;\n  margin-left: auto;\n}\n.hora {\n  position: relative;\n  float: right;\n  font-size: 8px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NhbGEtYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFFUjtFQUNJLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUE7RUFDSSxnQkFBQTtBQUNKO0FBRUE7RUFDSSwrQ0FBQTtFQUNILGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNHLFlBQUE7QUFDSjtBQUVBO0VBQ0ksU0FBQTtBQUNKO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDQTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtBQUVKO0FBRUE7RUFDSSwwQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNhbGEtYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BY21lJmRpc3BsYXk9c3dhcCcpO1xuXG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6ICMxODhiYTA7XG4gICAgZm9udC1mYW1pbHk6ICdBY21lJywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgaGVpZ2h0OiA4dmg7XG59XG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9mb25kby5wbmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDg3dmg7XG59XG5cbmlvbi1idXR0b257XG4gICAgbWFyZ2luOiAwO1xufVxuXG5pb24tZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDV2aDtcbn1cbmlvbi1pbnB1dHtcbiAgICAtLWJhY2tncm91bmQ6cmdiKDIzNCwgMjQ3LCAyNTUpIDtcbiAgICAtLWNvbG9yOiMwMDA7XG59XG5cblxuaW9uLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKTtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uc295WW97IFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5ob3Jhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDpyaWdodDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-sala-a-sala-a-module-es5.js.map