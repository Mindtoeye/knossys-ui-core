"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _KDataTools = _interopRequireDefault(require("./utils/KDataTools"));

var _AnimateHeight = _interopRequireDefault(require("./AnimateHeight"));

require("./styles/accordion.css");

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
var KAccordion = /*#__PURE__*/function (_Component) {
  _inherits(KAccordion, _Component);

  var _super = _createSuper(KAccordion);

  /**
   * 
   */
  function KAccordion(props) {
    var _this;

    _classCallCheck(this, KAccordion);

    _this = _super.call(this, props);
    _this.dataTools = new _KDataTools.default();
    var prepped = [];

    for (var i = 0; i < props.data.length; i++) {
      var newItem = {
        id: i,
        title: props.data[i].title,
        content: props.data[i].content,
        open: false,
        height: 0
      };
      prepped.push(newItem);
    }

    _this.state = {
      data: prepped
    };
    _this.setIsActive = _this.setIsActive.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KAccordion, [{
    key: "setIsActive",
    value: function setIsActive(anIndex) {
      var newData = this.dataTools.deepCopy(this.state.data);

      for (var i = 0; i < newData.length; i++) {
        var item = newData[i];

        if (item.id == anIndex) {
          if (item.open == true) {
            item.open = false;
            item.height = 0;
          } else {
            item.open = true;
            item.height = "auto";
          }
        } else {
          item.open = false;
          item.height = 0;
        }
      }

      this.setState({
        data: newData
      });
    }
    /**
     * 
     */

  }, {
    key: "renderItem",
    value: function renderItem(i, anItem) {
      var _this2 = this;

      var content; //if (anItem.open==true) {

      content = /*#__PURE__*/_react.default.createElement(_AnimateHeight.default, {
        id: "panel-" + i,
        duration: 200,
        height: anItem.height
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "kaccordion-content"
      }, anItem.content)); //}

      return /*#__PURE__*/_react.default.createElement("div", {
        key: "accordion-item-" + i,
        className: "kaccordion-item"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "kaccordion-title",
        onClick: function onClick(e) {
          return _this2.setIsActive(i);
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, anItem.title), /*#__PURE__*/_react.default.createElement("div", null, anItem.open ? '-' : '+')), content);
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      var items = [];

      for (var i = 0; i < this.state.data.length; i++) {
        items.push(this.renderItem(i, this.state.data[i]));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "kaccordion"
      }, items);
    }
  }]);

  return KAccordion;
}(_react.Component);

var _default = KAccordion;
exports.default = _default;