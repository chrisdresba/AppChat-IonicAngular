(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
    /***/
    "F4UR":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.module.ts ***!
      \*********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function F4UR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "aTZN");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "H+1c":
    /*!*********************************************!*\
      !*** ./src/app/pages/login/login.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function H1c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nion-header ion-toolbar ion-button {\n  margin-right: 1em;\n  color: #fff;\n}\nion-content {\n  --background: url('fondo.png') no-repeat center;\n  overflow: hidden;\n  background-attachment: fixed;\n  background-size: cover;\n  font-family: \"Acme\", sans-serif;\n  /**/\n}\nion-content .container {\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-top: -1em;\n}\nform ion-item {\n  --background: transparent;\n  color: #fff;\n  --border: 1px solid #fff;\n  border-radius: 10px;\n  margin-bottom: 0.6em;\n  margin-top: -1em;\n}\nform ion-item ion-icon {\n  align-self: center;\n}\nform ion-item ion-label {\n  font-size: 1.3em;\n}\nform ion-item ion-input {\n  margin: auto;\n  border-bottom: 2px solid #02a904;\n}\nion-chip {\n  width: 40vw;\n  text-align: center;\n  height: 40px;\n}\nsmall {\n  color: darkred;\n}\n.welcome {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  width: 100%;\n  height: 20%;\n  margin: 0;\n  margin-top: 20px;\n  margin-bottom: 0px;\n  border-radius: 0px 10px 10px 0px;\n  margin-bottom: 3em;\n  margin-left: 1px;\n  margin-top: 2em;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  color: #fff;\n}\n.welcome ion-row img {\n  width: 40vw;\n  margin-left: 30vw;\n}\n.welcome ion-row ion-text {\n  align-self: center;\n  font-size: 2em;\n  margin-left: 2em;\n  margin-right: 0em;\n  font-weight: bold;\n  color: #fff;\n  letter-spacing: 2px;\n  margin: auto;\n}\n.hiddenItems {\n  height: 30px;\n}\nsmall {\n  padding-left: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: red;\n}\n.btnSeccion {\n  width: 100vw;\n  padding: 0%;\n  margin-left: -2px;\n  flex-direction: column;\n  height: 19em;\n  --background: transparent;\n  --color: #fff;\n  border: 0;\n  margin-top: -0.5em;\n}\nion-icon {\n  margin-right: 10px;\n  width: 30px;\n  height: 30px;\n}\n.btnSeccion,\nion-fab {\n  min-height: 20%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\nion-button {\n  margin-top: -10px;\n  height: 50px;\n}\n.secondary {\n  --background: #A149FA;\n  --color: #fff;\n}\n.medium {\n  --background: #3EC70B;\n  --color: #fff;\n}\n.success {\n  --background: #b6452c;\n  --color: #fff;\n}\n.warning {\n  --background: #cc7c13;\n  --color: #fff;\n}\n.light {\n  --color: #fff;\n}\n.primary {\n  --background: #39ace7;\n  --color: #fff;\n}\n#btn1 {\n  --background: #17bd35e7;\n}\n#btn2 {\n  --background: #099c97e7;\n}\n#btn3 {\n  --background: #e75545e7;\n}\nion-card {\n  width: 90%;\n  margin-left: 5%;\n  padding: 0;\n}\n.text-flicker-in-glow {\n  -webkit-animation: text-flicker-in-glow 4s linear both;\n  animation: text-flicker-in-glow 4s linear both;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2022-10-14 19:47:17\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation text-flicker-in-glow\n * ----------------------------------------\n */\n@-webkit-keyframes text-flicker-in-glow {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  10.1% {\n    opacity: 1;\n    text-shadow: none;\n  }\n  10.2% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);\n  }\n  20.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.5% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  100% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n}\n@keyframes text-flicker-in-glow {\n  0% {\n    opacity: 0;\n  }\n  10% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  10.1% {\n    opacity: 1;\n    text-shadow: none;\n  }\n  10.2% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  20.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);\n  }\n  20.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  30.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.5% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  30.6% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  45.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  50% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);\n  }\n  55.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  57.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);\n  }\n  60.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  65.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  75.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  77.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  85.1% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86% {\n    opacity: 0;\n    text-shadow: none;\n  }\n  86.1% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n  100% {\n    opacity: 1;\n    text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);\n  }\n}\n.vibrate-2 {\n  -webkit-animation: vibrate-2 1s linear infinite both;\n  animation: vibrate-2 1s linear infinite both;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2022-10-14 19:56:4\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation vibrate-2\n * ----------------------------------------\n */\n@-webkit-keyframes vibrate-2 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(2px, -2px);\n  }\n  40% {\n    transform: translate(2px, 2px);\n  }\n  60% {\n    transform: translate(-2px, 2px);\n  }\n  80% {\n    transform: translate(-2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n@keyframes vibrate-2 {\n  0% {\n    transform: translate(0);\n  }\n  20% {\n    transform: translate(2px, -2px);\n  }\n  40% {\n    transform: translate(2px, 2px);\n  }\n  60% {\n    transform: translate(-2px, 2px);\n  }\n  80% {\n    transform: translate(-2px, -2px);\n  }\n  100% {\n    transform: translate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5RUFBQTtBQUlKO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBRk47QUFPQTtFQUVFLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFFQSxHQUFBO0FBTkY7QUFRRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5KO0FBWUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVRKO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBWUk7RUFDRSxnQkFBQTtBQVZOO0FBYUk7RUFDRSxZQUFBO0VBQ0EsZ0NBQUE7QUFYTjtBQWdCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFiRjtBQWdCQTtFQUNFLGNBQUE7QUFiRjtBQWdCQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFiRjtBQWdCSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQWROO0FBaUJJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQWZOO0FBcUJBO0VBQ0UsWUFBQTtBQWxCRjtBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBbEJGO0FBcUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWxCRjtBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFsQkY7QUFxQkE7O0VBRUUsZUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBbEJGO0FBcUJBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBbEJGO0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBbkJGO0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBbkJGO0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBbkJGO0FBc0JBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0FBbkJGO0FBc0JBO0VBQ0UsYUFBQTtBQW5CRjtBQXNCQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQW5CRjtBQXNCQTtFQUNFLHVCQUFBO0FBbkJGO0FBc0JBO0VBQ0UsdUJBQUE7QUFuQkY7QUFzQkE7RUFDRSx1QkFBQTtBQW5CRjtBQXdCQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQXJCRjtBQXdCQTtFQUNDLHNEQUFBO0VBQ1EsOENBQUE7QUFyQlQ7QUF3QkE7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQUtDO0VBQ0M7SUFDRSxVQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLCtDQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLG1GQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLHVIQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLHVIQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLDBKQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLDBKQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLGlCQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLDJKQUFBO0VBdEJGO0VBd0JBO0lBQ0UsVUFBQTtJQUNBLDJKQUFBO0VBdEJGO0FBQ0Y7QUF3QkE7RUFDRTtJQUNFLFVBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsK0NBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsbUZBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsdUhBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsdUhBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMEpBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMEpBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsaUJBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMkpBQUE7RUF0QkY7RUF3QkE7SUFDRSxVQUFBO0lBQ0EsMkpBQUE7RUF0QkY7QUFDRjtBQXlCQTtFQUNDLG9EQUFBO0VBQ1EsNENBQUE7QUF2QlQ7QUF5QkE7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQUtDO0VBQ0M7SUFFVSx1QkFBQTtFQXZCVjtFQXlCQTtJQUVVLCtCQUFBO0VBdkJWO0VBeUJBO0lBRVUsOEJBQUE7RUF2QlY7RUF5QkE7SUFFVSwrQkFBQTtFQXZCVjtFQXlCQTtJQUVVLGdDQUFBO0VBdkJWO0VBeUJBO0lBRVUsdUJBQUE7RUF2QlY7QUFDRjtBQXlCQTtFQUNFO0lBRVUsdUJBQUE7RUF2QlY7RUF5QkE7SUFFVSwrQkFBQTtFQXZCVjtFQXlCQTtJQUVVLDhCQUFBO0VBdkJWO0VBeUJBO0lBRVUsK0JBQUE7RUF2QlY7RUF5QkE7SUFFVSxnQ0FBQTtFQXZCVjtFQXlCQTtJQUVVLHVCQUFBO0VBdkJWO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNtZSZkaXNwbGF5PXN3YXAnKTtcblxuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcblxuICAtLWJhY2tncm91bmQ6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ZvbmRvLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xuXG4gIC8qKi9cbiAgLy8gLS1iYWNrZ3JvdW5kOiAjMDIyMTRjO1xuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTFlbTtcblxuICB9XG59XG5cbmZvcm0ge1xuICBpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcbiAgICBtYXJnaW4tdG9wOiAtMWVtO1xuXG4gICAgaW9uLWljb24ge1xuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDIsIDE2OSwgNCk7XG4gICAgfVxuICB9XG59XG5cbmlvbi1jaGlwIHtcbiAgd2lkdGg6IDQwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4ud2VsY29tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIGlvbi1yb3cge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogNDB2dztcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHZ3O1xuICAgIH1cblxuICAgIGlvbi10ZXh0IHtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICAgIG1hcmdpbi1yaWdodDogMGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG59XG5cblxuLmhpZGRlbkl0ZW1zIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5zbWFsbCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmJ0blNlY2Npb24ge1xuICB3aWR0aDogMTAwdnc7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW4tbGVmdDogLTJweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxOWVtO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cblxuaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5idG5TZWNjaW9uLFxuaW9uLWZhYiB7XG4gIG1pbi1oZWlnaHQ6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5cbi5zZWNvbmRhcnkge1xuICAtLWJhY2tncm91bmQ6ICNBMTQ5RkE7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5tZWRpdW0ge1xuICAtLWJhY2tncm91bmQ6ICMzRUM3MEI7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5zdWNjZXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYjY0NTJjO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG4ud2FybmluZyB7XG4gIC0tYmFja2dyb3VuZDogI2NjN2MxMztcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLmxpZ2h0IHtcbiAgLS1jb2xvcjogI2ZmZjtcbn1cblxuLnByaW1hcnkge1xuICAtLWJhY2tncm91bmQ6ICMzOWFjZTc7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbiNidG4xIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTdiZDM1ZTc7XG59XG5cbiNidG4yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDk5Yzk3ZTc7XG59XG5cbiNidG4zIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTc1NTQ1ZTc7XG59XG5cblxuXG5pb24tY2FyZCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRleHQtZmxpY2tlci1pbi1nbG93IHtcblx0LXdlYmtpdC1hbmltYXRpb246IHRleHQtZmxpY2tlci1pbi1nbG93IDRzIGxpbmVhciBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogdGV4dC1mbGlja2VyLWluLWdsb3cgNHMgbGluZWFyIGJvdGg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIyLTEwLTE0IDE5OjQ3OjE3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHRleHQtZmxpY2tlci1pbi1nbG93XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgdGV4dC1mbGlja2VyLWluLWdsb3cge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMTAuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMTAuMiUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDIwLjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDIwLjYlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAzMC4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAzMC41JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAzMC42JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA0NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNDUuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDU1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICA1NS4xJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA1NyUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNTcuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB9XG4gIDYwLjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDY1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA2NS4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICA3NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgNzUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNzclIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDc3LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgODUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgODUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgODYlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDg2LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgdGV4dC1mbGlja2VyLWluLWdsb3cge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMTAuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMTAuMiUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDIwLjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDIwLjYlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDMwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICAzMC4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAzMC41JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICAzMC42JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA0NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNDUuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICB9XG4gIDU1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxuICA1NS4xJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA1NyUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNTcuMSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIH1cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB9XG4gIDYwLjElIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDY1JSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgfVxuICA2NS4xJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KSwgMCAwIDEwMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgfVxuICA3NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgNzUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgNzclIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDc3LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgODUlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCAwIDAgNjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbiAgODUuMSUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgODYlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIDg2LjElIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIDAgMCA2MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDAgMCAxMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCAwIDAgMTAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAzMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgMCAwIDYwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgMCAwIDExMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDAgMCAxMDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIH1cbn1cblxuLnZpYnJhdGUtMiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiB2aWJyYXRlLTIgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiB2aWJyYXRlLTIgMXMgbGluZWFyIGluZmluaXRlIGJvdGg7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMi0xMC0xNCAxOTo1Njo0XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHZpYnJhdGUtMlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGUtMiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDJweCk7XG4gIH1cbiAgNjAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIDJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICB9XG4gIDgwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgfVxufVxuQGtleWZyYW1lcyB2aWJyYXRlLTIge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIC0ycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAtMnB4KTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAycHgpO1xuICB9XG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAycHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgMnB4KTtcbiAgfVxuICA4MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gIH1cbn1cblxuIl19 */";
      /***/
    },

    /***/
    "Jb31":
    /*!**********************************!*\
      !*** ./src/app/class/usuario.ts ***!
      \**********************************/

    /*! exports provided: Usuario */

    /***/
    function Jb31(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Usuario", function () {
        return Usuario;
      });

      var Usuario = /*#__PURE__*/function () {
        function Usuario() {
          _classCallCheck(this, Usuario);
        }

        _createClass(Usuario, [{
          key: "crearUsuario",
          value: function crearUsuario(usuario, contraseña, tipo) {
            this.usuario = usuario;
            this.contraseña = contraseña;
            this.tipo = tipo;
          }
        }]);

        return Usuario;
      }();
      /***/

    },

    /***/
    "TuYN":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function TuYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"welcome\">\n    <ion-row>\n      <img class=\"vibrate-2\" src=\"../../../assets/conversatorio.png\" alt=\"\">\n      <ion-text class=\"text-flicker-in-glow light\">\n        CONVERSATORIO</ion-text>\n    </ion-row>\n  </div>\n  <div class=\"container\">\n    <form [formGroup]=\"loginForm\">\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Correo electrónico</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\" required size=\"\" name=\"email\" [(ngModel)]=\"email\"\n          placeholder=\"Correo electrónico\">\n        </ion-input>\n      </ion-item>\n      <ion-row class=\"hiddenItems\">\n        <small\n          *ngIf=\"loginForm.get('email').hasError('required') && (loginForm.get('email').dirty || loginForm.get('email').touched)\">Por\n          favor, ingrese su correo.</small>\n        <small *ngIf=\"loginForm.get('email').hasError('email')\">Ingrese un correo valido.</small>\n      </ion-row>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Contraseña</ion-label>\n        <ion-input type=\"password\" class=\"form-control\" required formControlName=\"password\" name=\"password\"\n          [(ngModel)]=\"password\" placeholder=\"Contraseña\"></ion-input>\n      </ion-item>\n      <ion-row class=\"hiddenItems\">\n        <small\n          *ngIf=\"loginForm.get('password').hasError('required') && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n          [ngClass]=\"loginForm.get('password').hasError('required') && loginForm.get('password').touched ? 'visible' : 'hidden'\">Ingrese\n          una contraseña.</small>\n        <small\n          *ngIf=\"loginForm.get('password').hasError('maxlength') && (loginForm.get('password').dirty || loginForm.get('password').touched)\"\n          [ngClass]=\"loginForm.get('password').hasError('maxlength') && loginForm.get('password').touched ? 'visible' : 'hidden'\">La\n          contraseña no debe contener mas de 6 caracteres.</small>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"lightFont\" (click)=\"Login()\" type=\"submit\" class=\"medium\" expand=\"block\"\n            [disabled]=\"!loginForm.valid\">Ingresar</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n\n    <ion-card class=\"btnSeccion\">\n      <div class=\"btnChips\">\n        <ion-chip (click)=\"testUser(1)\" class=\"medium\">\n          <ion-icon name=\"key-sharp\"></ion-icon>\n          Admin\n        </ion-chip>\n        <ion-chip (click)=\"testUser(3)\" class=\"warning\">\n          <ion-icon name=\"happy-sharp\"></ion-icon>\n          Usuario\n        </ion-chip>\n      </div>\n      <div class=\"btnChips\">\n        <ion-chip (click)=\"testUser(2)\" class=\"primary\">\n          <ion-icon name=\"chatbubble-ellipses-sharp\"></ion-icon>\n          Invitado\n        </ion-chip>\n      </div>\n      <div class=\"btnChips\">\n        <ion-chip (click)=\"testUser(4)\" class=\"success\">\n          <ion-icon name=\"accessibility-sharp\"></ion-icon>\n          Anónimo\n        </ion-chip>\n        <ion-chip (click)=\"testUser(5)\" class=\"secondary\">\n          <ion-icon name=\"construct-sharp\"></ion-icon>\n          Tester\n        </ion-chip>\n      </div>\n    </ion-card>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "aTZN":
    /*!*****************************************************!*\
      !*** ./src/app/pages/login/login-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function aTZN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "bP1B");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "bP1B":
    /*!*******************************************!*\
      !*** ./src/app/pages/login/login.page.ts ***!
      \*******************************************/

    /*! exports provided: LoginPage */

    /***/
    function bP1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.page.html */
      "TuYN");
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.page.scss */
      "H+1c");
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_class_usuario__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/class/usuario */
      "Jb31");
      /* harmony import */


      var src_app_services_creditos_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/services/creditos.service */
      "p13/");

      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(authService, router, fromBuilder, toastController, loadingController, afAuth, creditosSrv) {
          _classCallCheck(this, LoginPage);

          this.authService = authService;
          this.router = router;
          this.fromBuilder = fromBuilder;
          this.toastController = toastController;
          this.loadingController = loadingController;
          this.afAuth = afAuth;
          this.creditosSrv = creditosSrv;
          this.user = new src_app_class_usuario__WEBPACK_IMPORTED_MODULE_10__["Usuario"]();
        }

        _createClass(LoginPage, [{
          key: "name",
          get: function get() {
            return this.loginForm.get("email");
          }
        }, {
          key: "power",
          get: function get() {
            return this.loginForm.get("password");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.fromBuilder.group({
              email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].email])],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(6)])]
            });
          }
        }, {
          key: "Login",
          value: function Login() {
            var _this = this;

            this.presentLoading();
            this.afAuth.signInWithEmailAndPassword(this.email, this.password).then(function (res) {
              _this.creditosSrv.getCreditos().subscribe(function (aux) {
                _this.creditosUsuarios = aux;

                _this.creditosUsuarios.forEach(function (item) {
                  if (item.usuario == _this.email) {
                    localStorage.setItem('creditos', item.credito.toString());
                    _this.creditosSrv.creditosUsuario = item;
                  }
                });
              });

              localStorage.setItem('usuario', _this.email);

              if (_this.email == 'admin@admin.com') {
                localStorage.setItem("tipoUsuario", "admin");
              } else {
                localStorage.setItem("tipoUsuario", "usuario");
              }

              Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["timer"])(2000).subscribe(function () {
                _this.router.navigate(['/home']);
              });
            })["catch"](function (err) {
              err.code == "auth/wrong-password" ? _this.presentToast("Uno o mas campos son invalidos...") : _this.presentToast("Ha ocurrido un error vuelva a intentar.");
            });
          }
        }, {
          key: "testUser",
          value: function testUser(accountNumber) {
            switch (accountNumber) {
              case 1:
                this.loginForm.controls["email"].setValue("admin@admin.com");
                this.loginForm.controls["password"].setValue("111111");
                break;

              case 2:
                this.loginForm.controls["email"].setValue("invitado@invitado.com");
                this.loginForm.controls["password"].setValue("222222");
                break;

              case 3:
                this.loginForm.controls["email"].setValue("usuario@usuario.com");
                this.loginForm.controls["password"].setValue("333333");
                break;

              case 4:
                this.loginForm.controls["email"].setValue("anonimo@anonimo.com");
                this.loginForm.controls["password"].setValue("444444");
                break;

              case 5:
                this.loginForm.controls["email"].setValue("tester@tester.com");
                this.loginForm.controls["password"].setValue("555555");
                break;
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 3000,
                        cssClass: "toast-danger"
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        spinner: 'circles',
                        message: 'Cargando...',
                        duration: 2000,
                        translucent: true,
                        cssClass: 'my-loading-class'
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      _context2.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context2.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]
        }, {
          type: src_app_services_creditos_service__WEBPACK_IMPORTED_MODULE_11__["CreditosService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-login",
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginPage);
      /***/
    },

    /***/
    "p13/":
    /*!**********************************************!*\
      !*** ./src/app/services/creditos.service.ts ***!
      \**********************************************/

    /*! exports provided: CreditosService */

    /***/
    function p13(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreditosService", function () {
        return CreditosService;
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


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var CreditosService = /*#__PURE__*/function () {
        function CreditosService(firestore) {
          var _this2 = this;

          _classCallCheck(this, CreditosService);

          this.firestore = firestore;

          this.getCreditos = function () {
            return _this2.firestore.collection('creditos').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (docs) {
              return docs.map(function (d) {
                return d.payload.doc.data();
              });
            }));
          };

          this.listado = this.firestore.collection('creditos').valueChanges();
        }

        _createClass(CreditosService, [{
          key: "getCreditoUsuario",
          value: function getCreditoUsuario(usuario) {
            return this.firestore.collection('creditos').ref.where("usuario", "==", usuario).get().then(function (snapshots) {
              return snapshots.docs.map(function (doc) {
                var ret = doc.data();
                ret.id = doc.id;
                return ret;
              });
            });
            /* for (let i = 0; i < this.listado.length; i++) {
               if (this.listado[i].usuario == usuario) {
                 return this.listado[i];
               }
             }*/
          }
        }, {
          key: "actualizarCredito",
          value: function actualizarCredito(res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.firestore.collection('creditos').doc(res.id).update(Object.assign({}, res));

                    case 2:
                      return _context3.abrupt("return", _context3.sent);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return CreditosService;
      }();

      CreditosService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      CreditosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CreditosService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-login-login-module-es5.js.map