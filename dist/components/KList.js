"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _KDataTools = _interopRequireDefault(require("./utils/KDataTools"));

require("./styles/lists.css");

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
var KList = /*#__PURE__*/function (_Component) {
  _inherits(KList, _Component);

  var _super = _createSuper(KList);

  /**
   * 
   */
  function KList(props) {
    var _this;

    _classCallCheck(this, KList);

    _this = _super.call(this, props);
    _this.dataTools = new _KDataTools.default();
    _this.state = {
      list: props.list
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   */


  _createClass(KList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.list !== prevProps.list) {
        this.setState({
          list: this.props.list
        });
      }
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
    key: "renderItems",
    value: function renderItems() {
      var items = [];

      for (var i = 0; i < this.state.list.length; i++) {
        items.push( /*#__PURE__*/_react.default.createElement("li", {
          key: this.dataTools.uuidv4(),
          id: i,
          className: this.props.itemclass
        }, this.state.list[i]));
      }

      return items;
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var classes = "klist klist-regular";
      var style;
      var items;

      if (this.props.size) {
        if (this.props.size == KButton.TINY) {
          classes = "klist klist-tiny";
        }

        if (this.props.size == KButton.REGULAR) {
          classes = "klist klist-regular";
        }

        if (this.props.size == KButton.MEDIUM) {
          classes = "klist klist-medium";
        }

        if (this.props.size == KButton.LARGE) {
          classes = "klist klist-large";
        }
      }

      if (this.props.style) {
        style = this.props.style;
      }

      if (this.props.classes) {
        classes = classes + " " + this.props.classes;
      }

      items = this.renderItems();
      return /*#__PURE__*/_react.default.createElement("ul", {
        className: classes,
        style: style
      }, items);
    }
  }]);

  return KList;
}(_react.Component);

_defineProperty(KList, "TINY", 'small');

_defineProperty(KList, "REGULAR", 'regular');

_defineProperty(KList, "MEDIUM", 'medium');

_defineProperty(KList, "LARGE", 'large');

var _default = KList;
exports.default = _default;