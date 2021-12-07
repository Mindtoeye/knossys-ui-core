"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _KScrim = _interopRequireDefault(require("./KScrim"));

var _KButton = _interopRequireDefault(require("./KButton"));

var _KTextInput = _interopRequireDefault(require("./KTextInput"));

require("./styles/alert.css");

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
 * https://www.w3schools.com/js/js_popup.asp
 */
var KAlert = /*#__PURE__*/function (_Component) {
  _inherits(KAlert, _Component);

  var _super = _createSuper(KAlert);

  /**
   * 
   */
  function KAlert(props) {
    var _this;

    _classCallCheck(this, KAlert);

    _this = _super.call(this, props);
    _this.state = {
      title: window.location.href + " says:",
      message: props.message,
      default: props.default,
      type: props.type,
      ownUpdate: false
    };
    _this.onOk = _this.onOk.bind(_assertThisInitialized(_this));
    _this.onYes = _this.onYes.bind(_assertThisInitialized(_this));
    _this.onNo = _this.onNo.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Return null to indicate no change to state.
   */


  _createClass(KAlert, [{
    key: "onOk",
    value:
    /**
     *
     */
    function onOk() {
      if (this.props.onOk) {
        this.props.onOk();
      }
    }
    /**
     *
     */

  }, {
    key: "onYes",
    value: function onYes() {
      if (this.props.onYes) {
        this.props.onYes();
      }
    }
    /**
     *
     */

  }, {
    key: "onNo",
    value: function onNo() {
      if (this.props.onNo) {
        this.props.onNo();
      }
    }
    /**
     *
     */

  }, {
    key: "handleChange",
    value: function handleChange(aValue) {
      this.setState({
        default: aValue
      });
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var buttonBar;
      var input;
      var alertClass = "knossys-alert";
      var classes = alertClass;

      if (this.state.type === "alert") {
        buttonBar = /*#__PURE__*/_react.default.createElement("div", {
          className: "knossys-alert-buttonbar"
        }, /*#__PURE__*/_react.default.createElement(_KButton.default, {
          onClick: this.onOk,
          style: {
            marginLeft: "auto",
            marginRight: "auto"
          }
        }, "Ok"));
      } else {
        if (this.state.type === "confirm" || this.state.type === "prompt") {
          buttonBar = /*#__PURE__*/_react.default.createElement("div", {
            className: "knossys-alert-buttonbar"
          }, /*#__PURE__*/_react.default.createElement(_KButton.default, {
            onClick: this.onYes,
            style: {
              marginLeft: "auto",
              marginRight: "3px"
            }
          }, "Ok"), /*#__PURE__*/_react.default.createElement(_KButton.default, {
            onClick: this.onNo,
            style: {
              marginLeft: "3px",
              marginRight: "auto"
            }
          }, "Cancel"));
        } else {
          buttonBar = /*#__PURE__*/_react.default.createElement("div", {
            className: "knossys-alert-buttonbar"
          }, /*#__PURE__*/_react.default.createElement(_KButton.default, {
            onClick: this.onOk,
            style: {
              marginLeft: "auto",
              marginRight: "auto"
            }
          }, "Ok"));
        }
      }

      if (this.state.type == "prompt") {
        input = /*#__PURE__*/_react.default.createElement(_KTextInput.default, {
          size: _KTextInput.default.REGULAR,
          style: {
            width: "100%"
          },
          value: this.state.default,
          handleChange: this.handleChange
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "knossys-alert-title"
      }, this.state.title), /*#__PURE__*/_react.default.createElement("div", {
        className: "knossys-alert-content"
      }, this.state.message), input, buttonBar);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      //console.log ("getDerivedStateFromProps ()");
      if (!state.ownUpdate) {
        if (state.state !== nextProps.state) {
          return {
            state: nextProps.state,
            type: nextProps.type,
            ownUpdate: false
          };
        }
      } else {
        return {
          ownUpdate: false
        };
      }

      return null;
    }
  }]);

  return KAlert;
}(_react.Component);

var _default = KAlert;
exports.default = _default;