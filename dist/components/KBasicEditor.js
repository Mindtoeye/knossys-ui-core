"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactContenteditable = _interopRequireDefault(require("react-contenteditable"));

var _sanitizeHtml = _interopRequireDefault(require("sanitize-html"));

var _KToolbar = _interopRequireDefault(require("./KToolbar"));

var _KToolbarItem = _interopRequireDefault(require("./KToolbarItem"));

var _gr = require("react-icons/gr");

var _cg = require("react-icons/cg");

var _bi = require("react-icons/bi");

var _bs = require("react-icons/bs");

var _md = require("react-icons/md");

require("./styles/editable.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var sanitizeConf = {
  allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
  allowedAttributes: {
    a: ["href"]
  }
};
/**
 * Via: https://codesandbox.io/s/l91xvkox9l?file=/src/styles.css:0-214
 */

var KBasicEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(KBasicEditor, _React$Component);

  var _super = _createSuper(KBasicEditor);

  /**
   * 
   */
  function KBasicEditor(props) {
    var _this;

    _classCallCheck(this, KBasicEditor);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      //console.log ("handleChange ()");
      _this.setState({
        html: evt.target.value
      });

      if (_this.props.onEditChange) {
        _this.props.onEditChange(evt.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "sanitize", function () {
      _this.setState({
        html: (0, _sanitizeHtml.default)(_this.state.html, sanitizeConf)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var editableclass = "keditcontainer";

      if (_this.state.inverted == true) {
        editableclass = "keditcontainer-inverted";
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "keditor"
      }, /*#__PURE__*/_react.default.createElement(_KToolbar.default, null, /*#__PURE__*/_react.default.createElement(_KToolbarItem.default, {
        onClick: function onClick(e) {
          return _this.onEditBold(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_bi.BiBold, null)), /*#__PURE__*/_react.default.createElement(_KToolbarItem.default, {
        onClick: function onClick(e) {
          return _this.onEditItalic(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_cg.CgFormatItalic, null)), /*#__PURE__*/_react.default.createElement(_KToolbarItem.default, {
        onClick: function onClick(e) {
          return _this.onEditHeading(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_cg.CgFormatHeading, null)), /*#__PURE__*/_react.default.createElement(_KToolbarItem.default, {
        onClick: function onClick(e) {
          return _this.onEditInvert(e);
        }
      }, /*#__PURE__*/_react.default.createElement(_md.MdInvertColors, null)), /*#__PURE__*/_react.default.createElement(_KToolbarItem.default, {
        onClick: function onClick(e) {
          return _this.onEditToggle(e);
        },
        toggle: true,
        selected: true
      }, /*#__PURE__*/_react.default.createElement(_bs.BsCursorText, null))), /*#__PURE__*/_react.default.createElement("div", {
        className: editableclass
      }, /*#__PURE__*/_react.default.createElement(_reactContenteditable.default, {
        className: "keditable",
        tagName: "pre",
        html: _this.state.html // innerHTML of the editable div
        ,
        disabled: !_this.state.editable // use true to disable edition
        ,
        onChange: _this.handleChange // handle innerHTML change
        ,
        onBlur: _this.sanitize
      })));
    });

    _this.state = {
      html: "<p>Hello <b>World</b> !</p><p>Paragraph 2</p>",
      editable: true,
      inverted: false
    };
    _this.onEditBold = _this.onEditBold.bind(_assertThisInitialized(_this));
    _this.onEditItalic = _this.onEditItalic.bind(_assertThisInitialized(_this));
    _this.onEditHeading = _this.onEditHeading.bind(_assertThisInitialized(_this));
    _this.onEditInvert = _this.onEditInvert.bind(_assertThisInitialized(_this));
    _this.onEditLink = _this.onEditLink.bind(_assertThisInitialized(_this));
    _this.onEditToggle = _this.onEditToggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KBasicEditor, [{
    key: "onEditBold",
    value:
    /**
     * 
     */
    function onEditBold(e) {
      console.log("onEditBold ()");
      document.execCommand("bold", false, null); // Send the command to the browser
    }
    /**
     * 
     */

  }, {
    key: "onEditItalic",
    value: function onEditItalic(e) {
      console.log("onEditItalic ()");
      document.execCommand("italic", false, null); // Send the command to the browser
    }
    /**
     * 
     */

  }, {
    key: "onEditHeading",
    value: function onEditHeading(e) {
      console.log("onEditHeading ()");
      document.execCommand("formatBlock", false, "h1"); // Send the command to the browser
    }
  }, {
    key: "onEditInvert",
    value: function onEditInvert(e) {
      console.log("onEditLink ()");
      this.setState({
        inverted: !this.state.inverted
      });
    }
    /**
     * 
     */

  }, {
    key: "onEditLink",
    value: function onEditLink(e) {
      console.log("onEditLink ()");
      document.execCommand("createLink", false, "https://www.knossys.com"); // Send the command to the browser
    }
    /**
     * 
     */

  }, {
    key: "onEditToggle",
    value: function onEditToggle(e) {
      console.log("onEditToggle ()");
      this.setState({
        editable: !this.state.editable
      });
    }
    /**
     * 
     */

  }]);

  return KBasicEditor;
}(_react.default.Component);

var _default = KBasicEditor;
exports.default = _default;