"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/buttons.css");

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

/**
 * 
 */
var KButton = /*#__PURE__*/function (_Component) {
  _inherits(KButton, _Component);

  var _super = _createSuper(KButton);

  /**
   * 
   */
  function KButton(props) {
    var _this;

    _classCallCheck(this, KButton);

    _this = _super.call(this, props);
    /*
    this.state = {      
      enabled: true
    };
    */

    _this.state = {};
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KButton, [{
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
    key: "onClick",
    value: function onClick(e) {
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var button;
      var classes = "kbutton kbutton-regular";
      var style;

      if (this.props.enabled) {
        if (this.props.enabled == false) {
          classes = classes + " kbutton-disabled";
        }
      }

      if (this.props.size) {
        if (this.props.size == KButton.TINY) {
          classes = "kbutton kbutton-tiny";
        }

        if (this.props.size == KButton.REGULAR) {
          classes = "kbutton kbutton-regular";
        }

        if (this.props.size == KButton.MEDIUM) {
          classes = "kbutton kbutton-medium";
        }

        if (this.props.size == KButton.LARGE) {
          classes = "kbutton kbutton-large";
        }
      }

      if (this.props.style) {
        style = this.props.style;
      }

      if (this.props.classes) {
        classes = classes + " " + this.props.classes;
      }

      button = /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick(e) {
          return _this2.onClick(e);
        },
        className: classes,
        style: style
      }, this.props.children);
      return button;
    }
  }]);

  return KButton;
}(_react.Component);

_defineProperty(KButton, "TINY", 'small');

_defineProperty(KButton, "REGULAR", 'regular');

_defineProperty(KButton, "MEDIUM", 'medium');

_defineProperty(KButton, "LARGE", 'large');

var _default = KButton;
exports.default = _default;