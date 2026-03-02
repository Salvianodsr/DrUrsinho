"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Desktop_DrUrsinho_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/login/route.ts */ \"(rsc)/./src/app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Desktop\\\\DrUrsinho\\\\src\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_User_Desktop_DrUrsinho_src_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRGVza3RvcCU1Q0RyVXJzaW5obyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rlc2t0b3AlNUNEclVyc2luaG8maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJ1cnNpbmhvLz9iNWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRGVza3RvcFxcXFxEclVyc2luaG9cXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dpblxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvbG9naW5cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcRHJVcnNpbmhvXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/login/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/auth/login/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\n\nasync function POST(request) {\n    try {\n        const { email, password } = await request.json();\n        if (!email || !password) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email e senha s\\xe3o obrigat\\xf3rios.\"\n            }, {\n                status: 400\n            });\n        }\n        const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n            where: {\n                email\n            },\n            include: {\n                patient: true,\n                doctor: true\n            }\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Credenciais inv\\xe1lidas.\"\n            }, {\n                status: 401\n            });\n        }\n        const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compare(password, user.password);\n        if (!isPasswordValid) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Credenciais inv\\xe1lidas.\"\n            }, {\n                status: 401\n            });\n        }\n        const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.generateToken)({\n            userId: user.id,\n            role: user.role\n        });\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.setAuthCookie)(token);\n        const nome = user.role === \"PACIENTE\" ? user.patient?.nome : user.role === \"MEDICO\" ? user.doctor?.nome : \"Administrador\";\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Login realizado com sucesso\",\n            user: {\n                id: user.id,\n                email: user.email,\n                nome,\n                role: user.role\n            }\n        });\n    } catch (error) {\n        console.error(\"Login error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Erro interno ao realizar login.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1Q7QUFDSjtBQUM0QjtBQUVuRCxlQUFlSyxLQUFLQyxPQUFnQjtJQUN2QyxJQUFJO1FBQ0EsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFOUMsSUFBSSxDQUFDRixTQUFTLENBQUNDLFVBQVU7WUFDckIsT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFrQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDekY7UUFFQSxNQUFNQyxPQUFPLE1BQU1YLDJDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztZQUN0Q0MsT0FBTztnQkFBRVA7WUFBTTtZQUNmUSxTQUFTO2dCQUFFQyxTQUFTO2dCQUFNQyxRQUFRO1lBQUs7UUFDM0M7UUFFQSxJQUFJLENBQUNMLE1BQU07WUFDUCxPQUFPWixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXlCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNoRjtRQUVBLE1BQU1PLGtCQUFrQixNQUFNaEIsd0RBQWMsQ0FBQ00sVUFBVUksS0FBS0osUUFBUTtRQUVwRSxJQUFJLENBQUNVLGlCQUFpQjtZQUNsQixPQUFPbEIscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF5QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDaEY7UUFFQSxNQUFNUyxRQUFRakIsd0RBQWFBLENBQUM7WUFBRWtCLFFBQVFULEtBQUtVLEVBQUU7WUFBRUMsTUFBTVgsS0FBS1csSUFBSTtRQUFDO1FBQy9EbkIsd0RBQWFBLENBQUNnQjtRQUVkLE1BQU1JLE9BQU9aLEtBQUtXLElBQUksS0FBSyxhQUFhWCxLQUFLSSxPQUFPLEVBQUVRLE9BQVFaLEtBQUtXLElBQUksS0FBSyxXQUFXWCxLQUFLSyxNQUFNLEVBQUVPLE9BQU87UUFFM0csT0FBT3hCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDckJnQixTQUFTO1lBQ1RiLE1BQU07Z0JBQ0ZVLElBQUlWLEtBQUtVLEVBQUU7Z0JBQ1hmLE9BQU9LLEtBQUtMLEtBQUs7Z0JBQ2pCaUI7Z0JBQ0FELE1BQU1YLEtBQUtXLElBQUk7WUFDbkI7UUFDSjtJQUVKLEVBQUUsT0FBT2IsT0FBTztRQUNaZ0IsUUFBUWhCLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU9WLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFrQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN6RjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJ1cnNpbmhvLy4vc3JjL2FwcC9hcGkvYXV0aC9sb2dpbi9yb3V0ZS50cz9kMzFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvZGInO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVUb2tlbiwgc2V0QXV0aENvb2tpZSB9IGZyb20gJ0AvbGliL2F1dGgnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRW1haWwgZSBzZW5oYSBzw6NvIG9icmlnYXTDs3Jpb3MuJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgICAgICB3aGVyZTogeyBlbWFpbCB9LFxyXG4gICAgICAgICAgICBpbmNsdWRlOiB7IHBhdGllbnQ6IHRydWUsIGRvY3RvcjogdHJ1ZSB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghdXNlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0NyZWRlbmNpYWlzIGludsOhbGlkYXMuJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0NyZWRlbmNpYWlzIGludsOhbGlkYXMuJyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnZW5lcmF0ZVRva2VuKHsgdXNlcklkOiB1c2VyLmlkLCByb2xlOiB1c2VyLnJvbGUgfSk7XHJcbiAgICAgICAgc2V0QXV0aENvb2tpZSh0b2tlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vbWUgPSB1c2VyLnJvbGUgPT09ICdQQUNJRU5URScgPyB1c2VyLnBhdGllbnQ/Lm5vbWUgOiAodXNlci5yb2xlID09PSAnTUVESUNPJyA/IHVzZXIuZG9jdG9yPy5ub21lIDogJ0FkbWluaXN0cmFkb3InKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIHJlYWxpemFkbyBjb20gc3VjZXNzbycsXHJcbiAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBub21lLFxyXG4gICAgICAgICAgICAgICAgcm9sZTogdXNlci5yb2xlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Vycm8gaW50ZXJubyBhbyByZWFsaXphciBsb2dpbi4nIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsImJjcnlwdCIsImdlbmVyYXRlVG9rZW4iLCJzZXRBdXRoQ29va2llIiwiUE9TVCIsInJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImluY2x1ZGUiLCJwYXRpZW50IiwiZG9jdG9yIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsInRva2VuIiwidXNlcklkIiwiaWQiLCJyb2xlIiwibm9tZSIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   getAuthFromCookies: () => (/* binding */ getAuthFromCookies),\n/* harmony export */   removeAuthCookie: () => (/* binding */ removeAuthCookie),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"super-secret-dr-ursinho-key-12345\";\nfunction generateToken(payload) {\n    return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign)(payload, JWT_SECRET, {\n        expiresIn: \"1d\"\n    });\n}\nfunction verifyToken(token) {\n    try {\n        return (0,jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify)(token, JWT_SECRET);\n    } catch (error) {\n        return null;\n    }\n}\nfunction getAuthFromCookies() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(\"drursinho_token\")?.value;\n    if (!token) return null;\n    return verifyToken(token);\n}\nfunction setAuthCookie(token) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(\"drursinho_token\", token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"lax\",\n        path: \"/\",\n        maxAge: 60 * 60 * 24 // 1 day\n    });\n}\nfunction removeAuthCookie() {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().delete(\"drursinho_token\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUV2QyxNQUFNRyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVUsSUFBSTtBQU90QyxTQUFTRyxjQUFjQyxPQUFxQjtJQUMvQyxPQUFPUCxrREFBSUEsQ0FBQ08sU0FBU0osWUFBWTtRQUFFSyxXQUFXO0lBQUs7QUFDdkQ7QUFFTyxTQUFTQyxZQUFZQyxLQUFhO0lBQ3JDLElBQUk7UUFDQSxPQUFPVCxvREFBTUEsQ0FBQ1MsT0FBT1A7SUFDekIsRUFBRSxPQUFPUSxPQUFPO1FBQ1osT0FBTztJQUNYO0FBQ0o7QUFFTyxTQUFTQztJQUNaLE1BQU1GLFFBQVFSLHFEQUFPQSxHQUFHVyxHQUFHLENBQUMsb0JBQW9CQztJQUNoRCxJQUFJLENBQUNKLE9BQU8sT0FBTztJQUNuQixPQUFPRCxZQUFZQztBQUN2QjtBQUVPLFNBQVNLLGNBQWNMLEtBQWE7SUFDdkNSLHFEQUFPQSxHQUFHYyxHQUFHLENBQUMsbUJBQW1CTixPQUFPO1FBQ3BDTyxVQUFVO1FBQ1ZDLFFBQVFkLGtCQUF5QjtRQUNqQ2UsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFFBQVEsS0FBSyxLQUFLLEdBQUcsUUFBUTtJQUNqQztBQUNKO0FBRU8sU0FBU0M7SUFDWnBCLHFEQUFPQSxHQUFHcUIsTUFBTSxDQUFDO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHJ1cnNpbmhvLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbiwgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB8fCAnc3VwZXItc2VjcmV0LWRyLXVyc2luaG8ta2V5LTEyMzQ1JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9rZW5QYXlsb2FkIHtcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgcm9sZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUb2tlbihwYXlsb2FkOiBUb2tlblBheWxvYWQpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHNpZ24ocGF5bG9hZCwgSldUX1NFQ1JFVCwgeyBleHBpcmVzSW46ICcxZCcgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbih0b2tlbjogc3RyaW5nKTogVG9rZW5QYXlsb2FkIHwgbnVsbCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiB2ZXJpZnkodG9rZW4sIEpXVF9TRUNSRVQpIGFzIFRva2VuUGF5bG9hZDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRoRnJvbUNvb2tpZXMoKTogVG9rZW5QYXlsb2FkIHwgbnVsbCB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMoKS5nZXQoJ2RydXJzaW5ob190b2tlbicpPy52YWx1ZTtcclxuICAgIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIHZlcmlmeVRva2VuKHRva2VuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEF1dGhDb29raWUodG9rZW46IHN0cmluZykge1xyXG4gICAgY29va2llcygpLnNldCgnZHJ1cnNpbmhvX3Rva2VuJywgdG9rZW4sIHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAvLyAxIGRheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBdXRoQ29va2llKCkge1xyXG4gICAgY29va2llcygpLmRlbGV0ZSgnZHJ1cnNpbmhvX3Rva2VuJyk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInNpZ24iLCJ2ZXJpZnkiLCJjb29raWVzIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJnZW5lcmF0ZVRva2VuIiwicGF5bG9hZCIsImV4cGlyZXNJbiIsInZlcmlmeVRva2VuIiwidG9rZW4iLCJlcnJvciIsImdldEF1dGhGcm9tQ29va2llcyIsImdldCIsInZhbHVlIiwic2V0QXV0aENvb2tpZSIsInNldCIsImh0dHBPbmx5Iiwic2VjdXJlIiwic2FtZVNpdGUiLCJwYXRoIiwibWF4QWdlIiwicmVtb3ZlQXV0aENvb2tpZSIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RydXJzaW5oby8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7XHJcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KClcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hXHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CDrUrsinho&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();