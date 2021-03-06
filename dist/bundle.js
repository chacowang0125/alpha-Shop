/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://alphashop/./src/scss/main.scss?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n//step\nconst steps = document.querySelectorAll('.step')\n    //form\nconst form = document.getElementById('a-form')\nconst formParts = form.querySelectorAll('.part')\nconst deliveryOptions = document.querySelectorAll('.shipping-selection')\nconst deliveryFeeAmount = document.querySelector('.cart-delivery-price')\nconst btnControl = document.getElementById('btn-control')\nconst prevBtn = btnControl.querySelector('.btn-previous-text')\nconst nextBtn = btnControl.querySelector('.btn-next')\n    //cart\nconst quantityBtns = document.querySelectorAll('.product-quantity-circle')\nconst cartTotalAmount = document.querySelector('.cart-amount-price')\n    //dark mode\nconst darkModeToggle = document.querySelector('#dark__mode__toggle')\n\nlet step = 0\nlet productCost = 5298\nlet deliveryFee = 0\n\n//event listener\n//????????????????????????????????????????????????\ndeliveryOptions.forEach(option => option.addEventListener('click', handleDelivery))\nbtnControl.addEventListener('click', handleBtnControl)\nquantityBtns.forEach(btn => btn.addEventListener('click', renderCart))\ndarkModeToggle.addEventListener(\"change\", darkModeToggleHandler);\n\n// function that adds comma to numbers (checkout section)\n// let numberWithCommas = x => x.toLocaleString();\n//string.toLocalString???Intl??????\n\nfunction numberWithCommas(num) {\n    return new Intl.NumberFormat('hi-IN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(num)\n}\n\n//mode switch\nfunction darkModeToggleHandler(event) {\n    event.target.checked ?\n        document.documentElement.setAttribute(\"data-theme\", \"dark\") :\n        document.documentElement.setAttribute(\"data-theme\", \"light\")\n}\n\n\n\n//select delivery method\nfunction handleDelivery(e) {\n    deliveryFee = Number(e.currentTarget.querySelector('.shipping-selection__price').innerText.slice(1))\n    deliveryOptions.forEach(option => option.classList.remove('checked'))\n        //????????????????????????currentTarget?????????????????????????????????checked???class\n    e.currentTarget.classList.add('checked')\n    if (!Number(deliveryFee)) {\n        deliveryFee = 0\n    }\n\n    deliveryFeeAmount.innerText = numberWithCommas(deliveryFee)\n    cartTotalAmount.innerText = numberWithCommas(productCost + deliveryFee);\n}\n\n//control buttons\nfunction handleBtnControl(e) {\n    e.preventDefault()\n    const nowStep = steps[step]\n    if (e.target.matches('.btn-next') && e.target.innerHTML === '?????????') {\n        const nextStep = steps[step + 1]\n        nowStep.classList.remove('active')\n        nowStep.classList.add('checked')\n        nextStep.classList.add('active')\n        formParts[step].classList.add('d-none')\n        formParts[step + 1].classList.remove('d-none')\n        step += 1\n\n    } else if (e.target.matches('.btn-previous-text')) {\n        const prevStep = steps[step - 1]\n        nowStep.classList.remove('active')\n        prevStep.classList.remove('checked')\n        prevStep.classList.add('active')\n        formParts[step].classList.add('d-none')\n        formParts[step - 1].classList.remove('d-none')\n        step -= 1\n    }\n    setBtnDisabled()\n}\n\n//set btn attribute and content\nfunction setBtnDisabled() {\n    if (step === 0) {\n        prevBtn.parentElement.setAttribute('disabled', 'disabled')\n    } else {\n        prevBtn.parentElement.removeAttribute('disabled')\n    }\n    if (step === 2) {\n        nextBtn.innerText = '????????????'\n    } else {\n        nextBtn.innerText = '?????????'\n    }\n}\n\n//change quantity and cart amount\nfunction renderCart(e) {\n    if (e.target.matches('.product-quantity-circle__add')) {\n        let quantity = e.target.previousElementSibling\n        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)\n        quantity.innerHTML = Number(quantity.innerHTML) + 1;\n        productCost += Number(price.replace(/[^0-9\\.]+/g, \"\"))\n    } else {\n        let quantity = e.target.nextElementSibling\n        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)\n        if (Number(quantity.innerHTML)) {\n            quantity.innerHTML = Number(quantity.innerHTML) - 1;\n            productCost -= Number(price.replace(/[^0-9\\.]+/g, \"\"))\n        } else {\n            quantity.innerHTML = 0\n        }\n    }\n\n    cartTotalAmount.innerText = numberWithCommas(productCost + deliveryFee);\n}\n\n//# sourceURL=webpack://alphashop/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;