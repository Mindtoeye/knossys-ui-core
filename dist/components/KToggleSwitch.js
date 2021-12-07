"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/toggle.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/**
 * 
 */
var KToggleSwitch = /*#__PURE__*/function (_Component) {
  _inherits(KToggleSwitch, _Component);

  var _super = _createSuper(KToggleSwitch);

  /**
   *
   */
  function KToggleSwitch(props) {
    var _this;

    _classCallCheck(this, KToggleSwitch);

    _this = _super.call(this, props);
    _this.state = {};
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   */


  _createClass(KToggleSwitch, [{
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      if (e.keyCode !== 32) {
        return;
      }

      e.preventDefault();
      onChange(!checked);
    }
    /**
     *
     */

  }, {
    key: "onChange",
    value: function onChange(checked) {
      if (this.props.onChange) {
        this.props.onChange(checked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = this.props.id;
      var name = this.props.name;
      var checked = this.props.checked;
      var disabled = this.props.disabled;
      var optionLabels = this.props.optionLabels;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "toggle-switch"
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "checkbox",
        name: name,
        className: "toggle-switch-checkbox",
        id: id,
        checked: checked,
        onChange: function onChange(e) {
          return _this2.onChange(e.target.checked);
        },
        disabled: disabled
      }), /*#__PURE__*/_react.default.createElement("label", {
        className: "toggle-switch-label",
        tabIndex: disabled ? -1 : 1,
        onKeyDown: function onKeyDown(e) {
          return handleKeyPress(e);
        },
        htmlFor: id
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: disabled ? "toggle-switch-inner toggle-switch-disabled" : "toggle-switch-inner",
        "data-yes": optionLabels[0],
        "data-no": optionLabels[1],
        tabIndex: -1
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: disabled ? "toggle-switch-switch toggle-switch-disabled" : "toggle-switch-switch",
        tabIndex: -1
      })));
    }
  }]);

  return KToggleSwitch;
}(_react.Component); // Set optionLabels for rendering.


KToggleSwitch.defaultProps = {
  optionLabels: ["Yes", "No"]
};
KToggleSwitch.propTypes = {
  id: _propTypes.default.string.isRequired,
  checked: _propTypes.default.bool.isRequired,
  onChange: _propTypes.default.func.isRequired,
  name: _propTypes.default.string,
  optionLabels: _propTypes.default.array,
  small: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
var _default = KToggleSwitch;
exports.default = _default;