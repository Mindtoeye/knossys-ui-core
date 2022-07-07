"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fa = require("react-icons/fa");

var _KDataTools = _interopRequireDefault(require("./utils/KDataTools"));

require("./styles/toolbar.css");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 
 */
var KToolbar = /*#__PURE__*/function (_Component) {
  _inherits(KToolbar, _Component);

  var _super = _createSuper(KToolbar);

  /**
   * 
   */
  function KToolbar(props) {
    var _this;

    _classCallCheck(this, KToolbar);

    _this = _super.call(this, props);
    _this.dataTools = new _KDataTools.default();
    var dir = KToolbar.DIRECTION_HORIZONTAL;

    if (props.direction) {
      dir = props.direction;
    }

    var toggledIndex = -1;

    if (_this.props.children) {
      for (var i = 0; i < _this.props.children.length; i++) {
        if (_this.props.children[i].props.selected) {
          if (_this.props.children[i].props.selected == true) {
            toggledIndex = i;
          }
        }
      }
    }

    _this.state = {
      toggled: toggledIndex,
      direction: dir
    };
    _this.onItemToggle = _this.onItemToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KToolbar, [{
    key: "onItemToggle",
    value: function onItemToggle(e, anIndex) {
      console.log("onItemToggle (" + anIndex + ")");

      if (this.state.toggled == anIndex) {
        this.setState({
          toggled: -1
        });
        return;
      }

      this.setState({
        toggled: anIndex
      });
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var button;
      var classes = "";
      var style;
      var label;
      var children = [];

      if (this.props.style) {
        style = this.props.style;
      }

      if (this.props.label) {
        label = /*#__PURE__*/_react.default.createElement("div", {
          className: "ktoolbar-vertical-label"
        }, this.props.label);
      }

      if (this.state.direction == KToolbar.DIRECTION_VERTICAL) {
        classes = "ktoolbar-vertical";
      } else {
        classes = "ktoolbar-horizontal";
      }

      if (this.props.classes) {
        classes = classes + " " + this.props.classes;
      }

      if (this.props.children) {
        for (var i = 0; i < this.props.children.length; i++) {
          var toggleValue = "false";

          if (this.state.toggled == i) {
            toggleValue = "true";
          }

          var refactoredChild = /*#__PURE__*/_react.default.cloneElement(this.props.children[i], {
            key: this.dataTools.uuidv4(),
            onItemToggleInternal: this.onItemToggle,
            itemIndex: i,
            toggled: toggleValue
          });

          children.push(refactoredChild);
        }
      }

      if (this.state.direction == KToolbar.DIRECTION_VERTICAL) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classes,
          style: style
        }, label, /*#__PURE__*/_react.default.createElement("div", {
          className: "ktoolbar-vertical-ribbon"
        }, children));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes,
        style: style
      }, children, /*#__PURE__*/_react.default.createElement("div", {
        className: "ktoolbar-padding"
      }, "\xA0"));
    }
  }]);

  return KToolbar;
}(_react.Component);

_defineProperty(KToolbar, "DIRECTION_HORIZONTAL", 'horizontal');

_defineProperty(KToolbar, "DIRECTION_VERTICAL", 'vertical');

var _default = KToolbar;
exports.default = _default;