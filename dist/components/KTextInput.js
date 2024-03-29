"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/textinput.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var extract = function extract(str, pattern) {
  return (str.match(pattern) || []).pop() || '';
};

var extractHexadecimal = function extractHexadecimal(str) {
  return extract(str, "0x[0-9a-fA-F]+");
};

var extractAlphanum = function extractAlphanum(str) {
  return extract(str, "[-+]*[0-9]+");
};

var extractAlphaFloat = function extractAlphaFloat(str) {
  return extract(str, "[-+]?([0-9]*\.[0-9]*)");
};

var extractBinary = function extractBinary(str) {
  return extract(str, "[0-1]+");
};

var not = function not(aValue) {
  if (aValue == true) {
    return false;
  }

  return true;
};
/**
 * 
 */


var KTextInput = /*#__PURE__*/function (_Component) {
  _inherits(KTextInput, _Component);

  var _super = _createSuper(KTextInput);

  /**
   * 
   */
  function KTextInput(props) {
    var _this;

    _classCallCheck(this, KTextInput);

    _this = _super.call(this, props);
    var type = KTextInput.TYPE_STRING;

    if (props.type) {
      type = props.type;
    }

    _this.state = {
      value: props.value,
      type: type
    };
    _this.handleTextChange = _this.handleTextChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KTextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {//console.log ("componentDidMount ()");
    }
    /**
     * 
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {//console.log ("componentWillUnmount ()");    
    }
    /**
     *
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
    /**
     * 
     */

  }, {
    key: "handleTextChange",
    value: function handleTextChange(aValue) {
      console.log("handleTextChange (" + aValue + ")");
      var value = aValue;

      if (this.state.type == KTextInput.TYPE_HEX) {
        if (aValue.length <= 2) {
          value = "0x0";
        } else {
          value = extractHexadecimal(aValue);
        }

        console.log("Hex value: " + value);
      }

      if (this.state.type == KTextInput.TYPE_ALPHANUMERIC) {
        if (aValue == "") {
          value = "0";
        } else {
          value = parseInt(extractAlphanum(aValue));
        }

        console.log("Integer value: " + value);
      }

      if (this.state.type == KTextInput.TYPE_ALPHAFLOAT) {
        if (aValue == "") {
          value = "0.0";
        } else {
          value = extractAlphaFloat(aValue);
        }

        console.log("Float value: " + value);
      }

      if (this.state.type == KTextInput.TYPE_BINARY) {
        if (aValue == "") {
          value = 0;
        } else {
          value = extractBinary(aValue);
        }

        console.log("Binary value: " + value);
      }

      if (this.props.handleChange) {
        //console.log ("Propagating ...");
        this.props.handleChange(value);
      }
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = "ktextinput ktextinput-regular";
      var style;

      if (this.props.size) {
        if (this.props.size == KTextInput.TINY) {
          classes = "ktextinput ktextinput-tiny";
        }

        if (this.props.size == KTextInput.REGULAR) {
          classes = "ktextinput ktextinput-regular";
        }

        if (this.props.size == KTextInput.MEDIUM) {
          classes = "ktextinput ktextinput-medium";
        }

        if (this.props.size == KTextInput.LARGE) {
          classes = "ktextinput ktextinput-large";
        }
      }

      if (this.props.style) {
        style = this.props.style;
      }

      if (this.props.classes) {
        classes = classes + " " + this.props.classes;
      }

      return /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        className: classes,
        style: style,
        value: this.state.value,
        onChange: function onChange(e) {
          return _this2.handleTextChange(e.target.value);
        }
      });
    }
  }]);

  return KTextInput;
}(_react.Component);

_defineProperty(KTextInput, "TINY", 'small');

_defineProperty(KTextInput, "REGULAR", 'regular');

_defineProperty(KTextInput, "MEDIUM", 'medium');

_defineProperty(KTextInput, "LARGE", 'large');

_defineProperty(KTextInput, "TYPE_STRING", 0);

_defineProperty(KTextInput, "TYPE_HEX", 1);

_defineProperty(KTextInput, "TYPE_ALPHANUMERIC", 2);

_defineProperty(KTextInput, "TYPE_ALPHAFLOAT", 3);

_defineProperty(KTextInput, "TYPE_BINARY", 4);

var _default = KTextInput;
exports.default = _default;