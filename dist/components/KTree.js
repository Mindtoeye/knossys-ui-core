"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _KDataTools = _interopRequireDefault(require("./utils/KDataTools"));

var _KTreeNode = _interopRequireDefault(require("./KTreeNode"));

require("./styles/tree.css");

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
var KTree = /*#__PURE__*/function (_Component) {
  _inherits(KTree, _Component);

  var _super = _createSuper(KTree);

  /**
   *
   */
  function KTree(props) {
    var _this;

    _classCallCheck(this, KTree);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getRootNodes", function () {
      var nodes = _this.state.nodes;
      var rootNodes = [];

      for (var item in nodes) {
        var testNode = nodes[item];

        if (testNode.isRoot) {
          if (testNode.isRoot == true) {
            rootNodes.push(testNode);
          }
        }
      }

      return rootNodes;
    });

    _defineProperty(_assertThisInitialized(_this), "getChildNodes", function (node) {
      var nodes = _this.state.nodes;
      if (!node.children) return [];
      return node.children.map(function (path) {
        return nodes[path];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (node) {
      var nodes = _this.state.nodes;
      nodes[node.path].isOpen = !node.isOpen;

      _this.setState({
        nodes: nodes
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNodeSelect", function (node) {
      var onSelect = _this.props.onSelect;

      var prepped = _this.dataTools.deepCopy(_this.state.nodes);

      for (var item in prepped) {
        var testNode = prepped[item];
        testNode.selected = false;

        if (testNode.path == node.path) {
          console.log("Selecting node: " + node.path);
          testNode.selected = true;
        }
      }

      _this.setState({
        nodes: prepped
      }, function (e) {
        onSelect(node);
      });
    });

    _this.dataTools = new _KDataTools.default();
    _this.state = {
      nodes: _this.prep(props.data)
    };
    _this.onNodeSelect = _this.onNodeSelect.bind();
    return _this;
  }
  /**
   *
   */


  _createClass(KTree, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        this.setState({
          nodes: this.prep(this.props.data)
        });
      }
    }
    /**
     *
     */

  }, {
    key: "prep",
    value: function prep(data) {
      var prepped = this.dataTools.deepCopy(data);

      for (var item in prepped) {
        var testNode = prepped[item];

        if (!testNode.id) {
          testNode.id = this.dataTools.uuidv4();
        }

        if (!testNode.selected) {
          testNode.selected = false;
        }
      }

      return prepped;
    }
    /**
     *
     */

  }, {
    key: "render",
    value:
    /**
     *
     */
    function render() {
      var nodes = [];
      var rootNodes = this.getRootNodes();

      for (var i = 0; i < rootNodes.length; i++) {
        nodes.push( /*#__PURE__*/_react.default.createElement(_KTreeNode.default, {
          key: "treenode-root-" + i,
          node: rootNodes[i],
          getChildNodes: this.getChildNodes,
          onToggle: this.onToggle,
          onNodeSelect: this.onNodeSelect
        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: "treeroot",
        className: "ktree " + this.props.classes,
        style: this.props.style
      }, nodes);
    }
  }]);

  return KTree;
}(_react.Component);

KTree.propTypes = {
  onSelect: _propTypes.default.func.isRequired
};
var _default = KTree;
exports.default = _default;