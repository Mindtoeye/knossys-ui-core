"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _fa = require("react-icons/fa");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/tree.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var getPaddingLeft = function getPaddingLeft(level, type) {
  var paddingLeft = level * 15;
  if (type === 'file') paddingLeft += 5;
  return paddingLeft;
};

var getNodeLabel = function getNodeLabel(node) {
  var splitter = node.path.split('/');
  return splitter[splitter.length - 1];
};
/**
 *
 */


var KTreeNode = /*#__PURE__*/function (_Component) {
  _inherits(KTreeNode, _Component);

  var _super = _createSuper(KTreeNode);

  /**
   * 
   */
  function KTreeNode(props) {
    _classCallCheck(this, KTreeNode);

    return _super.call(this, props);
  }
  /**
   *
   */


  _createClass(KTreeNode, [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
    /**
     * 
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          node = _this$props.node,
          getChildNodes = _this$props.getChildNodes,
          level = _this$props.level,
          type = _this$props.type,
          onToggle = _this$props.onToggle,
          onNodeSelect = _this$props.onNodeSelect;
      var padding = getPaddingLeft(level, type);
      var treeclass;

      if (node.selected) {
        if (node.selected == true) {
          treeclass = "kselected";
        }
      }

      var chevron;
      var marginLeft = "0px";

      if (node.type == 'file') {
        marginLeft = "4px";
      }

      if (node.children) {
        if (node.children.length > 0) {
          chevron = /*#__PURE__*/_react.default.createElement("div", {
            key: this.uuidv4(),
            style: {
              marginRight: "5px"
            },
            onClick: function onClick() {
              return onToggle(node);
            }
          }, node.type === 'folder' && (node.isOpen ? /*#__PURE__*/_react.default.createElement(_fa.FaChevronDown, null) : /*#__PURE__*/_react.default.createElement(_fa.FaChevronRight, null)));
        }
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        key: this.uuidv4(),
        className: "ktreenode",
        style: {
          paddingLeft: padding
        }
      }, chevron, /*#__PURE__*/_react.default.createElement("div", {
        key: this.uuidv4(),
        style: {
          fontSize: "12px",
          marginRight: "4px",
          marginLeft: marginLeft
        }
      }, node.type === 'file' && /*#__PURE__*/_react.default.createElement(_fa.FaFile, null), node.type === 'folder' && node.isOpen === true && /*#__PURE__*/_react.default.createElement(_fa.FaFolderOpen, null), node.type === 'folder' && !node.isOpen && /*#__PURE__*/_react.default.createElement(_fa.FaFolder, null)), /*#__PURE__*/_react.default.createElement("span", {
        className: treeclass,
        role: "button",
        onClick: function onClick() {
          return onNodeSelect(node);
        }
      }, getNodeLabel(node))), node.isOpen && getChildNodes(node).map(function (childNode) {
        return /*#__PURE__*/_react.default.createElement(KTreeNode, _extends({
          key: _this.uuidv4()
        }, _this.props, {
          node: childNode,
          level: level + 1
        }));
      }));
    }
  }]);

  return KTreeNode;
}(_react.Component);

KTreeNode.propTypes = {
  node: _propTypes.default.object.isRequired,
  getChildNodes: _propTypes.default.func.isRequired,
  level: _propTypes.default.number.isRequired,
  onToggle: _propTypes.default.func.isRequired,
  onNodeSelect: _propTypes.default.func.isRequired
};
KTreeNode.defaultProps = {
  level: 0
};
var _default = KTreeNode;
exports.default = _default;