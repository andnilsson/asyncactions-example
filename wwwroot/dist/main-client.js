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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 120);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = vendor_609a3b1255e87fe0584f;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(180)

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(4)

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getValue_js__ = __webpack_require__(77);



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getValue_js__["a" /* default */])(object, key);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseIsNative_js__["a" /* default */])(value) ? value : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (getNative);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(9);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["default"])(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(174)

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ __webpack_exports__["a"] = (identity);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__["a"] = (isArray);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(32);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (isArrayLike);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__["a"] = (isObject);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(181)

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(8)

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(134)

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(86)

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__["a"] = (isPrototype);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__["a"] = (eq);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(10);




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a" /* default */])(value) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["default"])(value) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["default"])(value) == stringTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isString);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(10);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["default"])(value) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["default"])(value) == symbolTag);
}

/* harmony default export */ __webpack_exports__["a"] = (isSymbol);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(132)

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
var actionCreators = {
    increment: function increment() {
        return { type: 'INCREMENT_COUNT' };
    },
    decrement: function decrement() {
        return { type: 'DECREMENT_COUNT' };
    }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
var reducer = function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            var exhaustiveCheck = action;
    }
    // For unrecognized actions (or in cases where actions have no effect), must return the existing state
    //  (or default initial state if none was supplied)
    return state || { count: 0 };
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_forecastService__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_store__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducer; });
var _this = this;

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


var FETCH_FORECASTS = 'FETCH_FORECASTS';
var actionCreators = {
    loadForecasts: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__domain_store__["a" /* createAsyncAction */])(FETCH_FORECASTS, function (index) {
        return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_forecastService__["a" /* initRetreiveForecasts */])(index);

                        case 2:
                            return _context.abrupt('return', _context.sent);

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));
    })
};
var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isLoading: false,
        error: "",
        forecasts: []
    };
    var action = arguments[1];

    switch (action.type) {
        case FETCH_FORECASTS + __WEBPACK_IMPORTED_MODULE_1__domain_store__["b" /* AsyncTypes */]._STARTED:
            return Object.assign({}, state, {
                isLoading: false
            });
        case FETCH_FORECASTS + __WEBPACK_IMPORTED_MODULE_1__domain_store__["b" /* AsyncTypes */]._ENDED:
            return Object.assign({}, state, {
                isLoading: false
            });
        case FETCH_FORECASTS + __WEBPACK_IMPORTED_MODULE_1__domain_store__["b" /* AsyncTypes */]._FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload
            });
        case FETCH_FORECASTS + __WEBPACK_IMPORTED_MODULE_1__domain_store__["b" /* AsyncTypes */]._SUCCEED:
            return Object.assign({}, state, {
                isLoading: false,
                forecasts: action.payload
            });
        default:
            return state;
    }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ __webpack_exports__["a"] = (apply);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseTimes_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArguments_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isBuffer_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isIndex_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__ = __webpack_require__(33);







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value),
      isArg = !isArr && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArguments_js__["a" /* default */])(value),
      isBuff = !isArr && !isArg && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isBuffer_js__["a" /* default */])(value),
      isType = !isArr && !isArg && !isBuff && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isTypedArray_js__["a" /* default */])(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseTimes_js__["a" /* default */])(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isIndex_js__["a" /* default */])(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (arrayLikeKeys);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (arrayMap);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__ = __webpack_require__(27);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && __WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */]) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__defineProperty_js__["a" /* default */])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (baseAssignValue);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPrototype_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__ = __webpack_require__(80);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isPrototype_js__["a" /* default */])(object)) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__nativeKeys_js__["a" /* default */])(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseKeys);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overRest_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setToString_js__ = __webpack_require__(84);




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__setToString_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__overRest_js__["a" /* default */])(func, start, __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */]), func + '');
}

/* harmony default export */ __webpack_exports__["a"] = (baseRest);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);


var defineProperty = (function() {
  try {
    var func = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (defineProperty);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__["a"] = (isIndex);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__["a"] = (toSource);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(10);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */])(function() { return arguments; }()) ? __WEBPACK_IMPORTED_MODULE_0__baseIsArguments_js__["a" /* default */] : function(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["default"])(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ __webpack_exports__["a"] = (isArguments);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__ = __webpack_require__(97);



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? __WEBPACK_IMPORTED_MODULE_0__root_js__["default"].Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || __WEBPACK_IMPORTED_MODULE_1__stubFalse_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (isBuffer);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(39)(module)))

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__["a"] = (isLength);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseUnary_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__ = __webpack_require__(82);




/* Node.js helper references. */
var nodeIsTypedArray = __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_2__nodeUtil_js__["a" /* default */].isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__baseUnary_js__["a" /* default */])(nodeIsTypedArray) : __WEBPACK_IMPORTED_MODULE_0__baseIsTypedArray_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (isTypedArray);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (isUndefined);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// based on https://github.com/lodash/lodash/blob/4.17.2/lodash.js#L14100
// eslint-disable-next-line max-len
var wordPattern = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:(?:1ST|2ND|3RD|(?![123])\dTH)\b)|\d*(?:(?:1st|2nd|3rd|(?![123])\dth)\b)|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
var namespacer = '/';

function camelCase(string) {
  return string.match(wordPattern).reduce(function (camelCased, word, index) {
    return camelCased + (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.substring(1).toLowerCase());
  }, '');
}

/* harmony default export */ __webpack_exports__["a"] = (function (type) {
  return type.split(namespacer).map(camelCase).join(namespacer);
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isString__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isEmpty__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_toString__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_isSymbol__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_invariant__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_TYPE_DELIMITER; });
/* unused harmony export default */







var ACTION_TYPE_DELIMITER = '||';

function isValidActionType(type) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isString__["a" /* default */])(type) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__["a" /* default */])(type) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isSymbol__["a" /* default */])(type);
}

function isValidActionTypes(types) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isEmpty__["a" /* default */])(types)) {
    return false;
  }
  return types.every(isValidActionType);
}

function combineActions() {
  for (var _len = arguments.length, actionsTypes = Array(_len), _key = 0; _key < _len; _key++) {
    actionsTypes[_key] = arguments[_key];
  }

  __WEBPACK_IMPORTED_MODULE_5_invariant___default()(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
  var combinedActionType = actionsTypes.map(__WEBPACK_IMPORTED_MODULE_3_lodash_es_toString__["a" /* default */]).join(ACTION_TYPE_DELIMITER);
  return { toString: function toString() {
      return combinedActionType;
    } };
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isUndefined__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isNull__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_invariant__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_invariant__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createAction;






function createAction(type) {
  var payloadCreator = arguments.length <= 1 || arguments[1] === undefined ? __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__["a" /* default */] : arguments[1];
  var metaCreator = arguments[2];

  __WEBPACK_IMPORTED_MODULE_4_invariant___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__["a" /* default */])(payloadCreator) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isNull__["a" /* default */])(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');

  var finalPayloadCreator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isNull__["a" /* default */])(payloadCreator) ? __WEBPACK_IMPORTED_MODULE_0_lodash_es_identity__["a" /* default */] : payloadCreator;

  var actionCreator = function actionCreator() {
    var hasError = (arguments.length <= 0 ? undefined : arguments[0]) instanceof Error;

    var action = {
      type: type
    };

    var payload = hasError ? arguments.length <= 0 ? undefined : arguments[0] : finalPayloadCreator.apply(undefined, arguments);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isUndefined__["a" /* default */])(payload)) {
      action.payload = payload;
    }

    if (hasError || payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true;
    }

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isFunction__["a" /* default */])(metaCreator)) {
      action.meta = metaCreator.apply(undefined, arguments);
    }

    return action;
  };

  actionCreator.toString = function () {
    return type.toString();
  };

  return actionCreator;
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isNil__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_isUndefined__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_es_includes__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combineActions__ = __webpack_require__(36);
/* harmony export (immutable) */ __webpack_exports__["a"] = handleAction;
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();










function handleAction(type) {
  var reducer = arguments.length <= 1 || arguments[1] === undefined ? __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__["a" /* default */] : arguments[1];
  var defaultState = arguments[2];

  var types = type.toString().split(__WEBPACK_IMPORTED_MODULE_7__combineActions__["a" /* ACTION_TYPE_DELIMITER */]);
  __WEBPACK_IMPORTED_MODULE_6_invariant___default()(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash_es_isUndefined__["a" /* default */])(defaultState), 'defaultState for reducer handling ' + types.join(', ') + ' should be defined');
  __WEBPACK_IMPORTED_MODULE_6_invariant___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__["a" /* default */])(reducer) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["default"])(reducer), 'Expected reducer to be a function or object with next and throw reducers');

  var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isFunction__["a" /* default */])(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isNil__["a" /* default */])(aReducer) ? __WEBPACK_IMPORTED_MODULE_2_lodash_es_identity__["a" /* default */] : aReducer;
  });

  var _ref2 = _slicedToArray(_ref, 2);

  var nextReducer = _ref2[0];
  var throwReducer = _ref2[1];


  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];
    var actionType = action.type;

    if (!actionType || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash_es_includes__["a" /* default */])(types, actionType.toString())) {
      return state;
    }

    return (action.error === true ? throwReducer : nextReducer)(state, action);
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(133)

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_site_css__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_site_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_site_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__configureStore__ = __webpack_require__(48);









// Get the application-wide store instance, prepopulating with state from the server where available.
var initialState = window.initialReduxState;
var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__configureStore__["a" /* default */])(initialState);
var history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_router_redux__["syncHistoryWithStore"])(__WEBPACK_IMPORTED_MODULE_4_react_router__["browserHistory"], store);
// This code starts up the React app when it runs in a browser. It sets up the routing configuration
// and injects the app into a DOM element.
__WEBPACK_IMPORTED_MODULE_3_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_2_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"],
        { store: store },
        __WEBPACK_IMPORTED_MODULE_2_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_router__["Router"], { history: history, children: __WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */] })
), document.getElementById('react-app'));

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument
        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
        : Promise.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            return result;
          });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return invoke(method, arg);
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : new Promise(function (resolve) {
          resolve(callInvokeWithMethodAndArg());
        });
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          context._sent = arg;

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(117), __webpack_require__(116)))

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_Counter__ = __webpack_require__(19);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        return _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).apply(this, arguments));
    }

    _createClass(Counter, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Counter'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This is a simple example of a React component.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Current count: ',
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'strong',
                        null,
                        this.props.count
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'button',
                    { onClick: function onClick() {
                            _this2.props.increment();
                        } },
                    'Increment'
                )
            );
        }
    }]);

    return Counter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
// Wire up the React component to the Redux store


/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state.counter;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_2__store_Counter__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(Counter));

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_Forecasts__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FetchData = function (_React$Component) {
    _inherits(FetchData, _React$Component);

    function FetchData(props) {
        _classCallCheck(this, FetchData);

        var _this = _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).call(this, props));

        _this.state = {
            index: -1
        };
        return _this;
    }

    _createClass(FetchData, [{
        key: 'tryChangeIndex',
        value: function tryChangeIndex(index) {
            var _this2 = this;

            if (index != this.state.index) this.setState({ index: index }, function () {
                return _this2.props.loadForecasts(index);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var startDateIndex = parseInt(this.props.params.startDateIndex) || 0;
            this.tryChangeIndex(startDateIndex);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var startDateIndex = parseInt(nextProps.params.startDateIndex) || 0;
            this.tryChangeIndex(startDateIndex);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Weather forecast'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'This component demonstrates fetching data from the server and working with URL parameters.'
                ),
                this.renderForecastsTable(),
                this.renderPagination()
            );
        }
    }, {
        key: 'renderForecastsTable',
        value: function renderForecastsTable() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'table',
                { className: 'table' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'thead',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'tr',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Date'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (C)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Temp. (F)'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'th',
                            null,
                            'Summary'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'tbody',
                    null,
                    this.props.forecast.forecasts.map(function (forecast) {
                        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'tr',
                            { key: forecast.dateFormatted },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.dateFormatted
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureC
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.temperatureF
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'td',
                                null,
                                forecast.summary
                            )
                        );
                    })
                )
            );
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'p',
                { className: 'clearfix text-center' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-left', to: '/fetchdata/' + (this.state.index - 5) },
                    'Previous'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { className: 'btn btn-default pull-right', to: '/fetchdata/' + (this.state.index + 5) },
                    'Next'
                ),
                this.props.forecast.isLoading ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'span',
                    null,
                    'Loading...'
                ) : []
            );
        }
    }]);

    return FetchData;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return state;
}, // Selects which state properties are merged into the component's props
__WEBPACK_IMPORTED_MODULE_3__store_Forecasts__["a" /* actionCreators */] // Selects which action creators are merged into the component's props
)(FetchData));

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'h1',
                    null,
                    'Hello, world!'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'Welcome to your new single-page application, built with:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'ul',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://get.asp.net/' },
                            'ASP.NET Core'
                        ),
                        ' and ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' },
                            'C#'
                        ),
                        ' for cross-platform server-side code'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://facebook.github.io/react/' },
                            'React'
                        ),
                        ', ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://redux.js.org' },
                            'Redux'
                        ),
                        ', and ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://www.typescriptlang.org/' },
                            'TypeScript'
                        ),
                        ' for client-side code'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'https://webpack.github.io/' },
                            'Webpack'
                        ),
                        ' for building and bundling client-side resources'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'a',
                            { href: 'http://getbootstrap.com/' },
                            'Bootstrap'
                        ),
                        ' for layout and styling'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'p',
                    null,
                    'To help you get started, we\'ve also set up:'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'ul',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Client-side navigation'
                        ),
                        '. For example, click ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'em',
                            null,
                            'Counter'
                        ),
                        ' then ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'em',
                            null,
                            'Back'
                        ),
                        ' to return here.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Webpack dev middleware'
                        ),
                        '. In development mode, there\'s no need to run the ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'code',
                            null,
                            'webpack'
                        ),
                        ' build tool. Your client-side resources are dynamically built on demand. Updates are available as soon as you modify any file.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Hot module replacement'
                        ),
                        '. In development mode, you don\'t even need to reload the page after making most changes. Within seconds of saving changes to files, rebuilt React components will be injected directly into your running application, preserving its live state.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Efficient production builds'
                        ),
                        '. In production mode, development-time features are disabled, and the ',
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'code',
                            null,
                            'webpack'
                        ),
                        ' build tool produces minified static CSS and JavaScript files.'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'strong',
                            null,
                            'Server-side prerendering'
                        ),
                        '. To optimize startup time, your React application is first rendered on the server. The initial HTML and state is then transferred to the browser, where client-side code picks up where the server left off.'
                    )
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NavMenu__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'container-fluid' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'row' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-3' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__NavMenu__["a" /* NavMenu */], null)
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'col-sm-9' },
                        this.props.body
                    )
                )
            );
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AsyncList__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavMenu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NavMenu = function (_React$Component) {
    _inherits(NavMenu, _React$Component);

    function NavMenu() {
        _classCallCheck(this, NavMenu);

        return _possibleConstructorReturn(this, (NavMenu.__proto__ || Object.getPrototypeOf(NavMenu)).apply(this, arguments));
    }

    _createClass(NavMenu, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                'div',
                { className: 'main-nav' },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                    'div',
                    { className: 'navbar navbar-inverse' },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-header' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'button',
                            { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '.navbar-collapse' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'span',
                                { className: 'sr-only' },
                                'Toggle navigation'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'icon-bar' })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                            { className: 'navbar-brand', to: '/' },
                            'redux_brownbag'
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('div', { className: 'clearfix' }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        'div',
                        { className: 'navbar-collapse collapse' },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'ul',
                            { className: 'nav navbar-nav' },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-home' }),
                                    ' Home'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/counter', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-education' }),
                                    ' Counter'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                'li',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                                    { to: '/fetchdata', activeClassName: 'active' },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]('span', { className: 'glyphicon glyphicon-th-list' }),
                                    ' Fetch data'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                            'div',
                            { style: {
                                    backgroundColor: "white",
                                    margin: "5px"
                                } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__AsyncList__["a" /* default */], null)
                        )
                    )
                )
            );
        }
    }]);

    return NavMenu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(52);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;




function configureStore(initialState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    var windowIfDefined = typeof window === 'undefined' ? null : window;
    // If devTools is installed, connect to it
    var devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension;
    var createStoreWithMiddleware = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a), devToolsExtension ? devToolsExtension() : function (f) {
        return f;
    })(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"]);
    // Combine all reducers and instantiate the app-wide store instance
    var allReducers = buildRootReducer(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* reducers */]);
    var store = createStoreWithMiddleware(allReducers, initialState);
    // Enable Webpack hot module replacement for reducers
    if (false) {
        module.hot.accept('./store', function () {
            var nextRootReducer = require('./store');
            store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
        });
    }
    return store;
}
function buildRootReducer(allReducers) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])(Object.assign({}, allReducers, { routing: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"] }));
}

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AsyncTypes; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createAsyncAction;
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

var AsyncTypes = {
    _STARTED: '_STARTED',
    _FAILED: '_FAILED',
    _SUCCEED: '_SUCCEED',
    _ENDED: '_ENDED',
    GENERIC_ENDED: 'ASYNC_ACTION_ENDED',
    GENERIC_ERROR: 'ASYNC_ACTION_FAILED'
};
function createAsyncAction(TYPE, executeAsync) {
    var TYPE_STARTED = TYPE + AsyncTypes._STARTED;
    var TYPE_FAILED = TYPE + AsyncTypes._FAILED;
    var TYPE_SUCCEED = TYPE + AsyncTypes._SUCCEED;
    var TYPE_ENDED = TYPE + AsyncTypes._ENDED;
    var actionCreators = {
        TYPE_STARTED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(TYPE_STARTED),
        TYPE_FAILED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(TYPE_FAILED),
        TYPE_SUCCEED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(TYPE_SUCCEED),
        TYPE_ENDED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(TYPE_ENDED),
        GENERIC_ERROR: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(AsyncTypes.GENERIC_ERROR),
        GENERIC_ENDED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["a" /* createAction */])(AsyncTypes.GENERIC_ENDED)
    };
    function create() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return function (dispatch, getState) {
            return __awaiter(_this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                var result, startedAt, endedAt, ended;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                result = void 0;
                                startedAt = new Date().getTime();

                                dispatch(actionCreators.TYPE_STARTED(Object.assign({}, args)));
                                _context.prev = 3;
                                _context.next = 6;
                                return executeAsync.apply(undefined, args.concat([dispatch, getState]));

                            case 6:
                                result = _context.sent;

                                dispatch(actionCreators.TYPE_SUCCEED(result));
                                _context.next = 15;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](3);

                                dispatch(actionCreators.TYPE_FAILED({
                                    errorMessage: _context.t0.message
                                }));
                                dispatch(actionCreators.GENERIC_ERROR({
                                    errorMessage: _context.t0.message,
                                    type: TYPE_FAILED
                                }));
                                throw _context.t0;

                            case 15:
                                endedAt = new Date().getTime();
                                ended = {
                                    asyncExecTime: endedAt - startedAt,
                                    startedAt: new Date(startedAt),
                                    endedAt: new Date(endedAt),
                                    type: TYPE_ENDED
                                };

                                dispatch(actionCreators.GENERIC_ENDED(ended));
                                dispatch(actionCreators.TYPE_ENDED(ended));
                                return _context.abrupt('return', result);

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[3, 10]]);
            }));
        };
    }
    Object.assign(create, {
        TYPE: TYPE,
        STARTED: TYPE_STARTED,
        FAILED: TYPE_FAILED,
        SUCCEED: TYPE_SUCCEED,
        ENDED: TYPE_ENDED
    });
    return create;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Home__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FetchData__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Counter__ = __webpack_require__(43);






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
    __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
    { component: __WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* Layout */] },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/', components: { body: __WEBPACK_IMPORTED_MODULE_3__components_Home__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '/counter', components: { body: __WEBPACK_IMPORTED_MODULE_5__components_Counter__["a" /* default */] } }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
        __WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
        { path: '/fetchdata', components: { body: __WEBPACK_IMPORTED_MODULE_4__components_FetchData__["a" /* default */] } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '(:startDateIndex)' })
    )
));
// Enable Hot Module Replacement (HMR)
if (false) {
    module.hot.accept();
}

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_domain_task___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_domain_task__);
/* harmony export (immutable) */ __webpack_exports__["a"] = initRetreiveForecasts;
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function initRetreiveForecasts(startDateIndex) {
    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        return _context.abrupt("return", new Promise(function (resolve, reject) {
                            var fetchTask = fetch("/api/SampleData/WeatherForecasts?startDateIndex=" + startDateIndex).then(function (response) {
                                return response.json();
                            }).then(function (data) {
                                return resolve(data);
                            });
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_domain_task__["addTask"])(fetchTask);
                        }));

                    case 1:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Async__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Forecasts__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Counter__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });



// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers = {
    counter: __WEBPACK_IMPORTED_MODULE_2__Counter__["b" /* reducer */],
    forecast: __WEBPACK_IMPORTED_MODULE_1__Forecasts__["b" /* reducer */],
    async: __WEBPACK_IMPORTED_MODULE_0__Async__["a" /* reducer */]
};

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(1);



/* Built-in method references that are verified to be native. */
var DataView = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["default"], 'DataView');

/* harmony default export */ __webpack_exports__["a"] = (DataView);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(1);



/* Built-in method references that are verified to be native. */
var Map = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["default"], 'Map');

/* harmony default export */ __webpack_exports__["a"] = (Map);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(1);



/* Built-in method references that are verified to be native. */
var Promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["default"], 'Promise');

/* harmony default export */ __webpack_exports__["a"] = (Promise);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(1);



/* Built-in method references that are verified to be native. */
var Set = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["default"], 'Set');

/* harmony default export */ __webpack_exports__["a"] = (Set);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNative_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__root_js__ = __webpack_require__(1);



/* Built-in method references that are verified to be native. */
var WeakMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNative_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__root_js__["default"], 'WeakMap');

/* harmony default export */ __webpack_exports__["a"] = (WeakMap);


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eq_js__ = __webpack_require__(15);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__eq_js__["a" /* default */])(objValue, value)) ||
      (value === undefined && !(key in object))) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseAssignValue_js__["a" /* default */])(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (assignValue);


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (baseFindIndex);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseFindIndex_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseIsNaN_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__strictIndexOf_js__ = __webpack_require__(86);




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__strictIndexOf_js__["a" /* default */])(array, value, fromIndex)
    : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseFindIndex_js__["a" /* default */])(array, __WEBPACK_IMPORTED_MODULE_1__baseIsNaN_js__["a" /* default */], fromIndex);
}

/* harmony default export */ __webpack_exports__["a"] = (baseIndexOf);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__ = __webpack_require__(10);



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isObjectLike_js__["default"])(value) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["default"])(value) == argsTag;
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsArguments);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsNaN);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMasked_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toSource_js__ = __webpack_require__(29);





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObject_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isMasked_js__["a" /* default */])(value)) {
    return false;
  }
  var pattern = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(value) ? reIsNative : reIsHostCtor;
  return pattern.test(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toSource_js__["a" /* default */])(value));
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsNative);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLength_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(10);




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["default"])(value) &&
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isLength_js__["a" /* default */])(value.length) && !!typedArrayTags[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["default"])(value)];
}

/* harmony default export */ __webpack_exports__["a"] = (baseIsTypedArray);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isPrototype_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nativeKeysIn_js__ = __webpack_require__(81);




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(object)) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nativeKeysIn_js__["a" /* default */])(object);
  }
  var isProto = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isPrototype_js__["a" /* default */])(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseKeysIn);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defineProperty_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity_js__ = __webpack_require__(6);




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !__WEBPACK_IMPORTED_MODULE_1__defineProperty_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_2__identity_js__["a" /* default */] : function(func, string) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__defineProperty_js__["a" /* default */])(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a" /* default */])(string),
    'writable': true
  });
};

/* harmony default export */ __webpack_exports__["a"] = (baseSetToString);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseTimes);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__arrayMap_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isSymbol_js__ = __webpack_require__(17);





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["default"] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["default"].prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__arrayMap_js__["a" /* default */])(value, baseToString) + '';
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isSymbol_js__["a" /* default */])(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ __webpack_exports__["a"] = (baseToString);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (baseUnary);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayMap_js__ = __webpack_require__(23);


/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayMap_js__["a" /* default */])(props, function(key) {
    return object[key];
  });
}

/* harmony default export */ __webpack_exports__["a"] = (baseValues);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assignValue_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseAssignValue_js__ = __webpack_require__(24);



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__baseAssignValue_js__["a" /* default */])(object, key, newValue);
    } else {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__assignValue_js__["a" /* default */])(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__["a"] = (copyObject);


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(1);


/** Used to detect overreaching core-js shims. */
var coreJsData = __WEBPACK_IMPORTED_MODULE_0__root_js__["default"]['__core-js_shared__'];

/* harmony default export */ __webpack_exports__["a"] = (coreJsData);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseRest_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isIterateeCall_js__ = __webpack_require__(78);



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseRest_js__["a" /* default */])(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isIterateeCall_js__["a" /* default */])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ __webpack_exports__["a"] = (createAssigner);


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eq_js__ = __webpack_require__(15);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__eq_js__["a" /* default */])(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/* harmony default export */ __webpack_exports__["a"] = (customDefaultsAssignIn);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DataView_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Map_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Promise_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Set_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toSource_js__ = __webpack_require__(29);








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */]),
    mapCtorString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */]),
    promiseCtorString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */]),
    setCtorString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */]),
    weakMapCtorString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */]);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = __WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__["default"];

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((__WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_0__DataView_js__["a" /* default */](new ArrayBuffer(1))) != dataViewTag) ||
    (__WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_1__Map_js__["a" /* default */]) != mapTag) ||
    (__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */] && getTag(__WEBPACK_IMPORTED_MODULE_2__Promise_js__["a" /* default */].resolve()) != promiseTag) ||
    (__WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_3__Set_js__["a" /* default */]) != setTag) ||
    (__WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */] && getTag(new __WEBPACK_IMPORTED_MODULE_4__WeakMap_js__["a" /* default */]) != weakMapTag)) {
  getTag = function(value) {
    var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__baseGetTag_js__["default"])(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__toSource_js__["a" /* default */])(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (getTag);


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ __webpack_exports__["a"] = (getValue);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eq_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isIndex_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isObject_js__ = __webpack_require__(9);





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isObject_js__["a" /* default */])(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(object) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isIndex_js__["a" /* default */])(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__eq_js__["a" /* default */])(object[index], value);
  }
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (isIterateeCall);


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__ = __webpack_require__(73);


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(__WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */] && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys && __WEBPACK_IMPORTED_MODULE_0__coreJsData_js__["a" /* default */].keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ __webpack_exports__["a"] = (isMasked);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(115);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["default"])(Object.keys, Object);

/* harmony default export */ __webpack_exports__["a"] = (nativeKeys);


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (nativeKeysIn);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(114);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["default"].process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__["a"] = (nodeUtil);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(39)(module)))

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apply_js__ = __webpack_require__(21);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__apply_js__["a" /* default */])(func, this, otherArgs);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overRest);


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseSetToString_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shortOut_js__ = __webpack_require__(85);



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shortOut_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__baseSetToString_js__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (setToString);


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (shortOut);


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (strictIndexOf);


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__copyObject_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createAssigner_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keysIn_js__ = __webpack_require__(95);




/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__createAssigner_js__["a" /* default */])(function(object, source, srcIndex, customizer) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__copyObject_js__["a" /* default */])(source, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__keysIn_js__["a" /* default */])(source), object, customizer);
});

/* harmony default export */ __webpack_exports__["a"] = (assignInWith);


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (constant);


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apply_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assignInWith_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__baseRest_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customDefaultsAssignIn_js__ = __webpack_require__(75);





/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__baseRest_js__["a" /* default */])(function(args) {
  args.push(undefined, __WEBPACK_IMPORTED_MODULE_3__customDefaultsAssignIn_js__["a" /* default */]);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__apply_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__assignInWith_js__["a" /* default */], undefined, args);
});

/* harmony default export */ __webpack_exports__["a"] = (defaults);


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseIndexOf_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toInteger_js__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values_js__ = __webpack_require__(102);






/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(collection) ? collection : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__values_js__["a" /* default */])(collection);
  fromIndex = (fromIndex && !guard) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__toInteger_js__["a" /* default */])(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isString_js__["a" /* default */])(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseIndexOf_js__["a" /* default */])(collection, value, fromIndex) > -1);
}

/* harmony default export */ __webpack_exports__["a"] = (includes);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseKeys_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getTag_js__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArguments_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isArrayLike_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isBuffer_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isPrototype_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__ = __webpack_require__(33);









/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isArrayLike_js__["a" /* default */])(value) &&
      (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isArray_js__["a" /* default */])(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__isBuffer_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__isTypedArray_js__["a" /* default */])(value) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArguments_js__["a" /* default */])(value))) {
    return !value.length;
  }
  var tag = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getTag_js__["a" /* default */])(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__isPrototype_js__["a" /* default */])(value)) {
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseKeys_js__["a" /* default */])(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/* harmony default export */ __webpack_exports__["a"] = (isEmpty);


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/* harmony default export */ __webpack_exports__["a"] = (isNil);


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

/* harmony default export */ __webpack_exports__["a"] = (isNull);


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeys_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(8);




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__["a" /* default */])(object) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__["a" /* default */])(object) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__baseKeys_js__["a" /* default */])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keys);


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseKeysIn_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__ = __webpack_require__(8);




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isArrayLike_js__["a" /* default */])(object) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__arrayLikeKeys_js__["a" /* default */])(object, true) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__baseKeysIn_js__["a" /* default */])(object);
}

/* harmony default export */ __webpack_exports__["a"] = (keysIn);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = (last);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (stubFalse);


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toNumber_js__ = __webpack_require__(100);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toNumber_js__["a" /* default */])(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/* harmony default export */ __webpack_exports__["a"] = (toFinite);


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toFinite_js__ = __webpack_require__(98);


/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__toFinite_js__["a" /* default */])(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/* harmony default export */ __webpack_exports__["a"] = (toInteger);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(17);



/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(value)) {
    return NAN;
  }
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ __webpack_exports__["a"] = (toNumber);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseToString_js__ = __webpack_require__(69);


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (toString);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseValues_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(94);



/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__baseValues_js__["a" /* default */])(object, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(object));
}

/* harmony default export */ __webpack_exports__["a"] = (values);


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = reduceReducers;

function reduceReducers() {
  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (previous, current) {
    return reducers.reduce(function (p, r) {
      return r(p, current);
    }, previous);
  };
}

module.exports = exports["default"];

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (array, callback) {
  return array.reduce(function (partialObject, element) {
    return callback(partialObject, element);
  }, {});
});

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_es_last__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_es_defaults__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_es_isFunction__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__createAction__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_invariant__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__arrayToObject__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__namespaceActions__ = __webpack_require__(108);
/* unused harmony export default */
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }














function createActions(actionMap) {
  for (var _len = arguments.length, identityActions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    identityActions[_key - 1] = arguments[_key];
  }

  function getFullOptions() {
    var partialOptions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__["default"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_lodash_es_last__["a" /* default */])(identityActions)) ? identityActions.pop() : {};
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_lodash_es_defaults__["a" /* default */])(partialOptions, { namespace: __WEBPACK_IMPORTED_MODULE_11__namespaceActions__["a" /* defaultNamespace */] });
  }

  var _getFullOptions = getFullOptions();

  var namespace = _getFullOptions.namespace;

  __WEBPACK_IMPORTED_MODULE_9_invariant___default()(identityActions.every(__WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__["a" /* default */]) && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__["a" /* default */])(actionMap) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash_es_isPlainObject__["default"])(actionMap)), 'Expected optional object followed by string action types');
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash_es_isString__["a" /* default */])(actionMap)) {
    return actionCreatorsFromIdentityActions([actionMap].concat(identityActions));
  }
  return _extends({}, actionCreatorsFromActionMap(actionMap, namespace), actionCreatorsFromIdentityActions(identityActions));
}

function actionCreatorsFromActionMap(actionMap, namespace) {
  var flatActionMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__namespaceActions__["b" /* flattenActionMap */])(actionMap, namespace);
  var flatActionCreators = actionMapToActionCreators(flatActionMap);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__namespaceActions__["c" /* unflattenActionCreators */])(flatActionCreators, namespace);
}

function actionMapToActionCreators(actionMap) {
  function isValidActionMapValue(actionMapValue) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_lodash_es_isFunction__["a" /* default */])(actionMapValue)) {
      return true;
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__["a" /* default */])(actionMapValue)) {
      var _actionMapValue = _slicedToArray(actionMapValue, 2);

      var _actionMapValue$ = _actionMapValue[0];
      var payload = _actionMapValue$ === undefined ? __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__["a" /* default */] : _actionMapValue$;
      var meta = _actionMapValue[1];

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_lodash_es_isFunction__["a" /* default */])(payload) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_lodash_es_isFunction__["a" /* default */])(meta);
    }
    return false;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__["a" /* default */])(Object.keys(actionMap), function (partialActionCreators, type) {
    var actionMapValue = actionMap[type];
    __WEBPACK_IMPORTED_MODULE_9_invariant___default()(isValidActionMapValue(actionMapValue), 'Expected function, undefined, or array with payload and meta ' + ('functions for ' + type));
    var actionCreator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash_es_isArray__["a" /* default */])(actionMapValue) ? __WEBPACK_IMPORTED_MODULE_8__createAction__["a" /* default */].apply(undefined, [type].concat(_toConsumableArray(actionMapValue))) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__createAction__["a" /* default */])(type, actionMapValue);
    return _extends({}, partialActionCreators, _defineProperty({}, type, actionCreator));
  });
}

function actionCreatorsFromIdentityActions(identityActions) {
  var actionMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__["a" /* default */])(identityActions, function (partialActionMap, type) {
    return _extends({}, partialActionMap, _defineProperty({}, type, __WEBPACK_IMPORTED_MODULE_1_lodash_es_identity__["a" /* default */]));
  });
  var actionCreators = actionMapToActionCreators(actionMap);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__arrayToObject__["a" /* default */])(Object.keys(actionCreators), function (partialActionCreators, type) {
    return _extends({}, partialActionCreators, _defineProperty({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__camelCase__["a" /* default */])(type), actionCreators[type]));
  });
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduce_reducers__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduce_reducers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reduce_reducers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__handleAction__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ownKeys__ = __webpack_require__(109);
/* unused harmony export default */
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







function handleActions(handlers, defaultState) {
  __WEBPACK_IMPORTED_MODULE_2_invariant___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["default"])(handlers), 'Expected handlers to be an plain object.');
  var reducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ownKeys__["a" /* default */])(handlers).map(function (type) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__handleAction__["a" /* default */])(type, handlers[type], defaultState);
  });
  var reducer = __WEBPACK_IMPORTED_MODULE_1_reduce_reducers___default.a.apply(undefined, _toConsumableArray(reducers));
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? defaultState : arguments[0];
    var action = arguments[1];
    return reducer(state, action);
  };
}

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createAction__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__handleAction__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__handleActions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combineActions__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createActions__ = __webpack_require__(105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createAction__["a"]; });
/* unused harmony reexport createActions */
/* unused harmony reexport handleAction */
/* unused harmony reexport handleActions */
/* unused harmony reexport combineActions */








/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__camelCase__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flattenActionMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return unflattenActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultNamespace; });



var defaultNamespace = '/';

function flattenActionMap(actionMap) {
  var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];
  var partialFlatActionMap = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  var partialFlatActionType = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

  function connectNamespace(type) {
    return partialFlatActionType ? '' + partialFlatActionType + namespace + type : type;
  }

  Object.getOwnPropertyNames(actionMap).forEach(function (type) {
    var nextNamespace = connectNamespace(type);
    var actionMapValue = actionMap[type];

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["default"])(actionMapValue)) {
      partialFlatActionMap[nextNamespace] = actionMap[type];
    } else {
      flattenActionMap(actionMap[type], namespace, partialFlatActionMap, nextNamespace);
    }
  });
  return partialFlatActionMap;
}

function unflattenActionCreators(flatActionCreators) {
  var namespace = arguments.length <= 1 || arguments[1] === undefined ? defaultNamespace : arguments[1];

  function unflatten(flatActionType) {
    var partialNestedActionCreators = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var partialFlatActionTypePath = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var nextNamespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__camelCase__["a" /* default */])(partialFlatActionTypePath.shift());
    if (partialFlatActionTypePath.length) {
      if (!partialNestedActionCreators[nextNamespace]) {
        partialNestedActionCreators[nextNamespace] = {};
      }
      unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
    } else {
      partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
    }
  }

  var nestedActionCreators = {};
  Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
    return unflatten(type, nestedActionCreators, type.split(namespace));
  });
  return nestedActionCreators;
}



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ownKeys;
function ownKeys(object) {
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    return Reflect.ownKeys(object);
  }

  var keys = Object.getOwnPropertyNames(object);

  if (typeof Object.getOwnPropertySymbols === 'function') {
    keys = keys.concat(Object.getOwnPropertySymbols(object));
  }

  return keys;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(127)

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(128)

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(131)

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(135)

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(175)

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(179)

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(30)

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(45)

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(74)

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(85)

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
module.exports = __webpack_require__(41);


/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domain_store__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        asyncactions: []
    };
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__domain_store__["b" /* AsyncTypes */].GENERIC_ENDED:
            return Object.assign({}, state, {
                asyncactions: [].concat(_toConsumableArray(state.asyncactions), [action.payload])
            });
        default:
            return state;
    }
};

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var AsyncList = function (_React$Component) {
    _inherits(AsyncList, _React$Component);

    function AsyncList() {
        _classCallCheck(this, AsyncList);

        return _possibleConstructorReturn(this, (AsyncList.__proto__ || Object.getPrototypeOf(AsyncList)).apply(this, arguments));
    }

    _createClass(AsyncList, [{
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                "div",
                null,
                this.props.async.asyncactions.map(function (a, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](
                        "div",
                        { style: { borderBottom: "1px solid #ccc", padding: "5px" }, key: i },
                        a.type + ": " + a.asyncExecTime + " ms"
                    );
                })
            );
        }
    }]);

    return AsyncList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
    return state;
}, {})(AsyncList));

/***/ })
/******/ ]);
//# sourceMappingURL=main-client.js.map