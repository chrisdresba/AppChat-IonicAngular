(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-splash-splash-module"], {
    /***/
    "7JAH":
    /*!***********************************************!*\
      !*** ./src/app/pages/splash/splash.module.ts ***!
      \***********************************************/

    /*! exports provided: SplashPageModule */

    /***/
    function JAH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageModule", function () {
        return SplashPageModule;
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


      var _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./splash-routing.module */
      "vcjj");
      /* harmony import */


      var _splash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./splash.page */
      "OvIv");

      var SplashPageModule = function SplashPageModule() {
        _classCallCheck(this, SplashPageModule);
      };

      SplashPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _splash_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashPageRoutingModule"]],
        declarations: [_splash_page__WEBPACK_IMPORTED_MODULE_6__["SplashPage"]]
      })], SplashPageModule);
      /***/
    },

    /***/
    "CyD1":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/splash/splash.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function CyD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"jello-diagonal-1\" id=\"fondo\">\n      <img src=\"../../../assets/conversatorio.png\" alt=\"\">\n    </div>\n    <h1 class=\"focus-in-contract\">CRISTIAN BARRAZA</h1>\n    <h3  class=\"focus-in-contract\">4º B</h3>\n</div>\n";
      /***/
    },

    /***/
    "OvIv":
    /*!*********************************************!*\
      !*** ./src/app/pages/splash/splash.page.ts ***!
      \*********************************************/

    /*! exports provided: SplashPage */

    /***/
    function OvIv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPage", function () {
        return SplashPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./splash.page.html */
      "CyD1");
      /* harmony import */


      var _splash_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./splash.page.scss */
      "keRv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @capacitor/core */
      "gcOT");

      var SplashScreen = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].SplashScreen;

      var SplashPage = /*#__PURE__*/function () {
        function SplashPage(router) {
          var _this = this;

          _classCallCheck(this, SplashPage);

          this.router = router;
          setTimeout(function () {
            _this.router.navigateByUrl('login');
          }, 3000);
        }

        _createClass(SplashPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].SplashScreen.hide();
          }
        }]);

        return SplashPage;
      }();

      SplashPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      SplashPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash',
        template: _raw_loader_splash_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SplashPage);
      /***/
    },

    /***/
    "keRv":
    /*!***********************************************!*\
      !*** ./src/app/pages/splash/splash.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function keRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Acme&display=swap\");\nimg {\n  width: 250px;\n  height: 250px;\n  margin-top: 10vh;\n}\ndiv {\n  background: #188ba0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  flex-direction: column;\n}\ndiv h1 {\n  color: #fff;\n  font-size: 2.3em;\n  font-family: \"Acme\", sans-serif;\n  margin-bottom: -25px;\n  -webkit-text-stroke: 0.6px #0a0505;\n}\ndiv h3 {\n  color: #fff;\n  font-size: 1.3em;\n  font-family: \"Acme\", sans-serif;\n  -webkit-text-stroke: 0.6px #0a0505;\n}\n#fondo {\n  background: transparent;\n}\n.jello-diagonal-1 {\n  -webkit-animation: jello-diagonal-1 2s both;\n  animation: jello-diagonal-1 2s both;\n}\n.focus-in-contract {\n  -webkit-animation: focus-in-contract 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;\n  animation: focus-in-contract 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;\n}\n/* ----------------------------------------------\n * Generated by Animista on 2022-10-14 0:5:59\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation focus-in-contract\n * ----------------------------------------\n */\n@-webkit-keyframes focus-in-contract {\n  0% {\n    letter-spacing: 1em;\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n@keyframes focus-in-contract {\n  0% {\n    letter-spacing: 1em;\n    filter: blur(12px);\n    opacity: 0;\n  }\n  100% {\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n/* ----------------------------------------------\n * Generated by Animista on 2022-10-13 23:43:27\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation jello-diagonal-1\n * ----------------------------------------\n */\n@-webkit-keyframes jello-diagonal-1 {\n  0% {\n    transform: skew(0deg 0deg);\n  }\n  30% {\n    transform: skew(25deg 25deg);\n  }\n  40% {\n    transform: skew(-15deg, -15deg);\n  }\n  50% {\n    transform: skew(15deg, 15deg);\n  }\n  65% {\n    transform: skew(-5deg, -5deg);\n  }\n  75% {\n    transform: skew(5deg, 5deg);\n  }\n  100% {\n    transform: skew(0deg 0deg);\n  }\n}\n@keyframes jello-diagonal-1 {\n  0% {\n    transform: skew(0deg 0deg);\n  }\n  15% {\n    transform: skew(25deg 25deg);\n  }\n  20% {\n    transform: skew(-15deg, -15deg);\n  }\n  25% {\n    transform: skew(15deg, 15deg);\n  }\n  32% {\n    transform: skew(-5deg, -5deg);\n  }\n  37% {\n    transform: skew(5deg, 5deg);\n  }\n  50% {\n    transform: skew(0deg 0deg);\n  }\n  65% {\n    transform: skew(-25deg -25deg);\n  }\n  70% {\n    transform: skew(15deg, 15deg);\n  }\n  75% {\n    transform: skew(-15deg, -15deg);\n  }\n  82% {\n    transform: skew(5deg, 5deg);\n  }\n  87% {\n    transform: skew(-5deg, -5deg);\n  }\n  100% {\n    transform: skew(0deg 0deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwbGFzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEseUVBQUE7QUFDUjtFQUNRLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUVBO0VBQ1EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ1E7RUFDUSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7QUFDaEI7QUFFUTtFQUNRLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7QUFBaEI7QUFJQTtFQUNRLHVCQUFBO0FBRFI7QUFJQTtFQUNRLDJDQUFBO0VBQ0EsbUNBQUE7QUFEUjtBQUlBO0VBQ0Msc0ZBQUE7RUFDUSw4RUFBQTtBQURUO0FBSUE7Ozs7O21EQUFBO0FBT0E7Ozs7RUFBQTtBQUtDO0VBQ087SUFDRSxtQkFBQTtJQUVRLGtCQUFBO0lBQ1IsVUFBQTtFQUZSO0VBSU07SUFFVSxpQkFBQTtJQUNSLFVBQUE7RUFGUjtBQUNGO0FBSU07RUFDRTtJQUNFLG1CQUFBO0lBRVEsa0JBQUE7SUFDUixVQUFBO0VBRlI7RUFJTTtJQUVVLGlCQUFBO0lBQ1IsVUFBQTtFQUZSO0FBQ0Y7QUFNQTs7Ozs7bURBQUE7QUFPQTs7OztFQUFBO0FBS0E7RUFDUTtJQUVRLDBCQUFBO0VBTGQ7RUFRTTtJQUVRLDRCQUFBO0VBTmQ7RUFTTTtJQUVRLCtCQUFBO0VBUGQ7RUFVTTtJQUVRLDZCQUFBO0VBUmQ7RUFXTTtJQUVRLDZCQUFBO0VBVGQ7RUFZTTtJQUVRLDJCQUFBO0VBVmQ7RUFhTTtJQUVRLDBCQUFBO0VBWGQ7QUFDRjtBQWNBO0VBQ1E7SUFFUSwwQkFBQTtFQVpkO0VBZU07SUFFUSw0QkFBQTtFQWJkO0VBZ0JNO0lBRVEsK0JBQUE7RUFkZDtFQWlCTTtJQUVRLDZCQUFBO0VBZmQ7RUFrQk07SUFFUSw2QkFBQTtFQWhCZDtFQW1CTTtJQUVRLDJCQUFBO0VBakJkO0VBb0JNO0lBRVEsMEJBQUE7RUFsQmQ7RUFxQk07SUFFUSw4QkFBQTtFQW5CZDtFQXNCTTtJQUVRLDZCQUFBO0VBcEJkO0VBdUJNO0lBRVEsK0JBQUE7RUFyQmQ7RUF3Qk07SUFFUSwyQkFBQTtFQXRCZDtFQXlCTTtJQUVRLDZCQUFBO0VBdkJkO0VBMEJNO0lBRVEsMEJBQUE7RUF4QmQ7QUFDRiIsImZpbGUiOiJzcGxhc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QWNtZSZkaXNwbGF5PXN3YXAnKTtcbmltZyB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzE4OGJhMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNnB4IHJnYigxMCwgNSwgNSk7XG4gICAgICAgIH1cblxuICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FjbWUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuNnB4IHJnYigxMCwgNSwgNSk7XG4gICAgICAgIH1cbn1cblxuI2ZvbmRvIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5qZWxsby1kaWFnb25hbC0xIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGplbGxvLWRpYWdvbmFsLTEgMnMgYm90aDtcbiAgICAgICAgYW5pbWF0aW9uOiBqZWxsby1kaWFnb25hbC0xIDJzIGJvdGg7XG59XG5cbi5mb2N1cy1pbi1jb250cmFjdCB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmb2N1cy1pbi1jb250cmFjdCAxcyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIDAuNXMgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZvY3VzLWluLWNvbnRyYWN0IDFzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgMC41cyBib3RoO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAyMi0xMC0xNCAwOjU6NTlcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZm9jdXMtaW4tY29udHJhY3RcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmb2N1cy1pbi1jb250cmFjdCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMWVtO1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgICAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgZm9jdXMtaW4tY29udHJhY3Qge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFlbTtcbiAgICAgICAgICAtd2Via2l0LWZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDBweCk7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IGJsdXIoMHB4KTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjItMTAtMTMgMjM6NDM6MjdcbiAqIExpY2Vuc2VkIHVuZGVyIEZyZWVCU0QgTGljZW5zZS5cbiAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gamVsbG8tZGlhZ29uYWwtMVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgamVsbG8tZGlhZ29uYWwtMSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgMzAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygyNWRlZyAyNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDI1ZGVnIDI1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTE1ZGVnLCAtMTVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygtMTVkZWcsIC0xNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDE1ZGVnLCAxNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDE1ZGVnLCAxNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA2NSUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA3NSUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDVkZWcsIDVkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldyg1ZGVnLCA1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDBkZWcgMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDBkZWcgMGRlZyk7XG4gICAgICAgIH1cbn1cblxuQGtleWZyYW1lcyBqZWxsby1kaWFnb25hbC0xIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDBkZWcgMGRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDBkZWcgMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAxNSUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDI1ZGVnIDI1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMjVkZWcgMjVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMTVkZWcsIC0xNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KC0xNWRlZywgLTE1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDI1JSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoMTVkZWcsIDE1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTVkZWcsIDE1ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDMyJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoLTVkZWcsIC01ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcsIC01ZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDM3JSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoNWRlZywgNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDVkZWcsIDVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgNjUlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygtMjVkZWcgLTI1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTI1ZGVnIC0yNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA3MCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KDE1ZGVnLCAxNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KDE1ZGVnLCAxNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA3NSUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC0xNWRlZywgLTE1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoLTE1ZGVnLCAtMTVkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgODIlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldyg1ZGVnLCA1ZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoNWRlZywgNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICA4NyUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtNWRlZyk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtNWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygwZGVnIDBkZWcpO1xuICAgICAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "vcjj":
    /*!*******************************************************!*\
      !*** ./src/app/pages/splash/splash-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: SplashPageRoutingModule */

    /***/
    function vcjj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashPageRoutingModule", function () {
        return SplashPageRoutingModule;
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


      var _splash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./splash.page */
      "OvIv");

      var routes = [{
        path: '',
        component: _splash_page__WEBPACK_IMPORTED_MODULE_3__["SplashPage"]
      }];

      var SplashPageRoutingModule = function SplashPageRoutingModule() {
        _classCallCheck(this, SplashPageRoutingModule);
      };

      SplashPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SplashPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-splash-splash-module-es5.js.map