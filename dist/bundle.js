/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_js__ = __webpack_require__(1);





__WEBPACK_IMPORTED_MODULE_0__main_js__["c" /* Tony */].addEventListener("click", piclink);
__WEBPACK_IMPORTED_MODULE_0__main_js__["b" /* Mitch */].addEventListener("click", piclink);
__WEBPACK_IMPORTED_MODULE_0__main_js__["a" /* Anna */].addEventListener("click", piclink);

function piclink(){
	var allimages = document.querySelectorAll("img");
	for (var i = 0; i < allimages.length; i++){
		allimages[i].style.display = "";
	}
	
	var picid = this.attributes["data-img"].value;
	// console.log(picid);
	var pic = document.getElementById(picid);
	// console.log(pic);
	// console.log(pic.style.display);
	if (pic.style.display ==""){
		pic.style.display = "block";
	}
	else{
		pic.style.display = "";
	}
}

for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__main_js__["e" /* items */].length; i++) {
	__WEBPACK_IMPORTED_MODULE_0__main_js__["e" /* items */][i].addEventListener("click", editItem);
	__WEBPACK_IMPORTED_MODULE_0__main_js__["d" /* inputs */][i].addEventListener("blur", updateItem);
	__WEBPACK_IMPORTED_MODULE_0__main_js__["d" /* inputs */][i].addEventListener("keypress", itemKeypress);
}

function editItem(){ 
	this.className = "edit";
	var input = this.querySelector("input");
	input.focus();
	input.setSelectionRange(0, input.value.length);
	// a++;
	// if (a>=2){
	// 	hideen();
	var span = this.querySelector("span");
	// console.log(span.style.visibility);
	// if (span.style.visibility === "visible"){
	// 	span.style.visibility = "hideen";
	// }
	// else{
	// 	span.style.visibility = "visible";
	// 	console.log(span.style.visibility);
	// }
	
}
// function hideen(){
// 	console.log(items[0]);
// 	var span = items[0].querySelector("span");

// 	span.style.visibility = "hidden";
// 	console.log("h1231");
// }

function updateItem() {
	// console.log(this);
	this.previousElementSibling.innerHTML = this.value;
	this.parentNode.className = "";
}

function itemKeypress(event){
	// console.log(event.which);
	if (event.which === 13){
		updateItem.call(this);
	}
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tony; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Mitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Anna; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return items; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return inputs; });
var Tony = document.getElementById("Tony");
var Mitch = document.getElementById("Mitch");
var Anna = document.getElementById("Anna");

// Tony.addEventListener("click", function(){
// 	if(Tonypic.style.display == "" ){
// 		Tonypic.style.display = "block";
// 	}
// 	else{
// 		Tonypic.style.display = "";
// 	}
// });


// Tony.addEventListener("click", piclink);
// Mitch.addEventListener("click", piclink);
// Anna.addEventListener("click", piclink);

// function piclink(){
// 	var allimages = document.querySelectorAll("img");
// 	for (var i = 0; i < allimages.length; i++){
// 		allimages[i].style.display = "";
// 	}
	
// 	var picid = this.attributes["data-img"].value;
// 	// console.log(picid);
// 	var pic = document.getElementById(picid);
// 	// console.log(pic);
// 	// console.log(pic.style.display);
// 	if (pic.style.display ==""){
// 		pic.style.display = "block";
// 	}
// 	else{
// 		pic.style.display = "";
// 	}
// }


// -----------edit function------------//

var items = document.querySelectorAll("li");

var inputs = document.querySelectorAll("input");
// for (var i = 0; i < items.length; i++) {
// 	items[i].addEventListener("click", editItem);
// 	inputs[i].addEventListener("blur", updateItem);
// 	inputs[i].addEventListener("keypress", itemKeypress);
// }

// function editItem(){ 
// 	this.className = "edit";
// 	var input = this.querySelector("input");
// 	input.focus();
// 	input.setSelectionRange(0, input.value.length);
// 	// a++;
// 	// if (a>=2){
// 	// 	hideen();
// 	var span = this.querySelector("span");
// 	// console.log(span.style.visibility);
// 	// if (span.style.visibility === "visible"){
// 	// 	span.style.visibility = "hideen";
// 	// }
// 	// else{
// 	// 	span.style.visibility = "visible";
// 	// 	console.log(span.style.visibility);
// 	// }
	
// }
// // function hideen(){
// // 	console.log(items[0]);
// // 	var span = items[0].querySelector("span");

// // 	span.style.visibility = "hidden";
// // 	console.log("h1231");
// // }

// function updateItem() {
// 	// console.log(this);
// 	this.previousElementSibling.innerHTML = this.value;
// 	this.parentNode.className = "";
// }

// function itemKeypress(event){
// 	// console.log(event.which);
// 	if (event.which === 13){
// 		updateItem.call(this);
// 	}
// }































/***/ })
/******/ ]);