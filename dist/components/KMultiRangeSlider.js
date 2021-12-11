"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/slider.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 */
var KMultiRangeSlider = function KMultiRangeSlider(_ref) {
  var min = _ref.min,
      max = _ref.max,
      onChange = _ref.onChange;

  var _useState = (0, _react.useState)(min),
      _useState2 = _slicedToArray(_useState, 2),
      minVal = _useState2[0],
      setMinVal = _useState2[1];

  var _useState3 = (0, _react.useState)(max),
      _useState4 = _slicedToArray(_useState3, 2),
      maxVal = _useState4[0],
      setMaxVal = _useState4[1];

  var minValRef = (0, _react.useRef)(null);
  var maxValRef = (0, _react.useRef)(null);
  var range = (0, _react.useRef)(null);
  /**
   * Convert to percentage
   */

  var getPercent = (0, _react.useCallback)(function (value) {
    return Math.round((value - min) / (max - min) * 100);
  }, [min, max]);
  /**
   * Set width of the range to decrease from the left side
   */

  (0, _react.useEffect)(function () {
    if (maxValRef.current) {
      var minPercent = getPercent(minVal);
      var maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = "".concat(minPercent, "%");
        range.current.style.width = "".concat(maxPercent - minPercent, "%");
      }
    }
  }, [minVal, getPercent]);
  /**
   * Set width of the range to decrease from the right side
   */

  (0, _react.useEffect)(function () {
    if (minValRef.current) {
      var minPercent = getPercent(+minValRef.current.value);
      var maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = "".concat(maxPercent - minPercent, "%");
      }
    }
  }, [maxVal, getPercent]);
  /**
   * Get min and max values when their state changes
   */

  (0, _react.useEffect)(function () {
    onChange({
      min: minVal,
      max: maxVal
    });
  }, [minVal, maxVal, onChange]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "kslider"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: minVal,
    ref: minValRef,
    onChange: function onChange(event) {
      var value = Math.min(+event.target.value, maxVal - 1);
      setMinVal(value);
      event.target.value = value.toString();
    },
    className: (0, _classnames.default)("thumb thumb--zindex-3", {
      "thumb--zindex-5": minVal > max - 100
    })
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: maxVal,
    ref: maxValRef,
    onChange: function onChange(event) {
      var value = Math.max(+event.target.value, minVal + 1);
      setMaxVal(value);
      event.target.value = value.toString();
    },
    className: "thumb thumb--zindex-4"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "slider__track"
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: range,
    className: "slider__range"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider__left-value"
  }, minVal), /*#__PURE__*/_react.default.createElement("div", {
    className: "slider__right-value"
  }, maxVal)));
};

KMultiRangeSlider.propTypes = {
  min: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  onChange: _propTypes.default.func.isRequired
};
var _default = KMultiRangeSlider;
exports.default = _default;