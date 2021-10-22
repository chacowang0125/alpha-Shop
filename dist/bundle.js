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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n//step\nconst steps = document.querySelectorAll('.step')\n    //form\nconst form = document.getElementById('a-form')\nconst formParts = form.querySelectorAll('.part')\nconst deliveryControl = document.querySelector('.part-content__shipping')\nconst freeDelivery = deliveryControl.querySelector('.shipping-selection__original')\nconst expressDelivery = deliveryControl.querySelector('.shipping-selection__express')\nconst deliveryFeeAmount = document.querySelector('.cart-delivery-price')\nconst btnControl = document.getElementById('btn-control')\nconst prevBtn = btnControl.querySelector('.btn-previous')\nconst nextBtn = btnControl.querySelector('.btn-next')\n    //cart\nconst quantityBtns = document.querySelectorAll('.product-quantity-circle')\nconst cartTotalAmount = document.querySelector('.cart-amount-price')\n\nlet step = 0\nlet productCost = 5298\nlet deliveryFee = 0\n\ndeliveryControl.addEventListener('click', handleDelivery)\nbtnControl.addEventListener('click', handleBtnControl)\nquantityBtns.forEach(btn => btn.addEventListener('click', renderCart))\n\nfunction handleDelivery(e) {\n    if (e.target.matches('.shipping-selection__express')) {\n        deliveryFee = 500;\n        deliveryFeeAmount.innerText = '$' + 500\n        freeDelivery.classList.remove('checked')\n        expressDelivery.classList.add('checked')\n    } else if (e.target.matches('.shipping-selection__original')) {\n        deliveryFee = 0;\n        deliveryFeeAmount.innerText = '免費'\n        freeDelivery.classList.add('checked')\n        expressDelivery.classList.remove('checked')\n    }\n    let cartTotal = productCost + deliveryFee\n    cartTotalAmount.innerText = '$' + cartTotal;\n\n}\n\nfunction handleBtnControl(e) {\n    e.preventDefault()\n    const nowStep = steps[step]\n    if (e.target.matches('.btn-next') && e.target.innerHTML === '下一步') {\n        const nextStep = steps[step + 1]\n        nowStep.classList.remove('active')\n        nowStep.classList.add('checked')\n        nextStep.classList.add('active')\n        formParts[step].classList.add('d-none')\n        formParts[step + 1].classList.remove('d-none')\n        step += 1\n\n    } else if (e.target.matches('.btn-previous')) {\n        const prevStep = steps[step - 1]\n        nowStep.classList.remove('active')\n        prevStep.classList.remove('checked')\n        prevStep.classList.add('active')\n        formParts[step].classList.add('d-none')\n        formParts[step - 1].classList.remove('d-none')\n        step -= 1\n    }\n    setBtnDisabled()\n}\n\nfunction setBtnDisabled() {\n    if (step === 0) {\n        prevBtn.setAttribute('disabled', 'disabled')\n    } else {\n        prevBtn.removeAttribute('disabled')\n    }\n    if (step === 2) {\n        nextBtn.innerText = '送出申請'\n    } else {\n        nextBtn.innerText = '下一步'\n    }\n}\n\nfunction renderCart(e) {\n    if (e.target.matches('.product-quantity-circle__add')) {\n        let quantity = e.target.previousElementSibling\n        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)\n        quantity.innerHTML = Number(quantity.innerHTML) + 1;\n        productCost += Number(price)\n    } else {\n        let quantity = e.target.nextElementSibling\n        let price = e.target.parentElement.nextElementSibling.innerText.slice(1)\n        if (Number(quantity.innerHTML)) {\n            quantity.innerHTML = Number(quantity.innerHTML) - 1;\n            productCost -= Number(price)\n        } else {\n            quantity.innerHTML = 0\n        }\n    }\n    let cartTotal = productCost + deliveryFee\n    cartTotalAmount.innerText = \"$\" + cartTotal;\n}\n\n//# sourceURL=webpack://alphashop/./src/main.js?");

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