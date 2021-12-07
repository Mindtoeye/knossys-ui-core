"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/lists.css");

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
var KCheckListItem = /*#__PURE__*/function (_Component) {
  _inherits(KCheckListItem, _Component);

  var _super = _createSuper(KCheckListItem);

  /**
   * 
   */
  function KCheckListItem(props) {
    var _this;

    _classCallCheck(this, KCheckListItem);

    _this = _super.call(this, props);
    _this.state = {
      checked: false
    };
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KCheckListItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //console.log ("componentDidMount ()");
      if (this.props.register) {
        this.props.register(this.props.id);
      }
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
      //console.log ("onClick ("+this.state.checked+")");
      var toggle = this.state.checked; // flip the switch

      toggle = !toggle;
      this.setState({
        checked: toggle
      });

      if (this.props.onItemCheck) {
        this.props.onItemCheck(e, toggle);
      }
    }
    /**
     *
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = "kcheck-default";

      if (this.state.checked == true) {
        classes = "kcheck-checked";
      }

      return /*#__PURE__*/_react.default.createElement("li", {
        id: this.props.id,
        className: classes,
        onClick: function onClick(e) {
          return _this2.onClick(e);
        }
      }, this.props.children);
    }
  }]);

  return KCheckListItem;
}(_react.Component);

var _default = KCheckListItem;
exports.default = _default;