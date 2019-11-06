(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button expand=\"block\" color=\"primary\" (click)=\"createUser()\">SIGN UP</ion-button>  \n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"doLogin()\">LOGIN</ion-button>\n  <ion-button expand=\"block\" color=\"tertiary\" (click)=\"createTweet()\">createTweet</ion-button>\n  <ion-button expand=\"block\" color=\"warning\" (click)=\"getTweets()\">getTweets</ion-button>\n  <ion-button expand=\"block\" color=\"dark\" (click)=\"getUsers()\">getUsers</ion-button>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"getMe()\">Me</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-chip .label {\n  color: var(--ion-color-primary);\n}\n\n.ion-activatable {\n  position: relative;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mYWJpby9EZXNrdG9wL3Rlc3QtaW9uaWM0L3VuaWN0L3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLCtCQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNoaXAge1xuICAgIC5sYWJlbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG4uaW9uLWFjdGl2YXRhYmxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iLCIubXktY2hpcCAubGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW9uLWFjdGl2YXRhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tweets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tweets.service */ "./src/app/tweets.service.ts");



let HomePage = class HomePage {
    constructor(tweetsService) {
        this.tweetsService = tweetsService;
        this.login = {};
    }
    ngOnInit() {
    }
    getTweets() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const tweets = yield this.tweetsService.getTweets();
                console.log('tweets: ', tweets);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    getUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const users = yield this.tweetsService.getUsers();
                console.log('users: ', users);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    doLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = {
                email: 'fabio@quok.app',
                password: 'alfio'
            };
            try {
                this.login = yield this.tweetsService.login(body);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    createTweet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const tweet = {
                    tweet: 'Hello world!'
                };
                const userId = '5dbddb41278d5d19936a049b';
                yield this.tweetsService.createTweet(this.login.accessToken, tweet, userId);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    getMe() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.tweetsService.me(this.login.accessToken);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    createUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = {
                email: 'fabio@quok.app',
                password: 'alfio',
                name: 'Fabio',
                surname: 'Manola'
            };
            try {
                const user = yield this.tweetsService.createUser(body);
                console.log('user: ', user);
            }
            catch (err) {
                console.error(err);
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _tweets_service__WEBPACK_IMPORTED_MODULE_2__["TweetsService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tweets_service__WEBPACK_IMPORTED_MODULE_2__["TweetsService"]])
], HomePage);



/***/ }),

/***/ "./src/app/tweets.service.ts":
/*!***********************************!*\
  !*** ./src/app/tweets.service.ts ***!
  \***********************************/
/*! exports provided: TweetsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetsService", function() { return TweetsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TweetsService = class TweetsService {
    constructor(http) {
        this.http = http;
        // API path
        this.path = 'http://localhost:4000';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    getTweets() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.get(`${this.path}/tweets`).toPromise();
        });
    }
    getUsers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.get(`${this.path}/users`).toPromise();
        });
    }
    editTweet(token, body, userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
            return this.http.put(`${this.path}/tweets/${userId}`, body, {
                headers: headerOptions
            }).toPromise();
        });
    }
    createTweet(token, body, userId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
            return this.http.post(`${this.path}/tweets/`, body, {
                headers: headerOptions
            }).toPromise();
        });
    }
    login(body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.post(`${this.path}/login`, body, this.httpOptions).toPromise();
        });
    }
    me(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const headerOptions = this.httpOptions.headers.append('Authorization', `Bearer ${token}`);
            return this.http.get(`${this.path}/me`, {
                headers: headerOptions
            }).toPromise();
        });
    }
    createUser(body) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return this.http.post(`${this.path}/users`, body, this.httpOptions).toPromise();
        });
    }
};
TweetsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TweetsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TweetsService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map