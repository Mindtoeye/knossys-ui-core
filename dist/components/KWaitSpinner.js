"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/wait.css");

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
var KWaitSpinner = /*#__PURE__*/function (_Component) {
  _inherits(KWaitSpinner, _Component);

  var _super = _createSuper(KWaitSpinner);

  /**
   * 
   */
  function KWaitSpinner(props) {
    var _this;

    _classCallCheck(this, KWaitSpinner);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * 
   */


  _createClass(KWaitSpinner, [{
    key: "renderWait01",
    value: function renderWait01() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "none",
        stroke: "#cdc9c9",
        strokeWidth: "6",
        strokeMiterlimit: "15",
        strokeDasharray: "14.2472,14.2472",
        cx: "50",
        cy: "50",
        r: "47"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "5s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "none",
        stroke: "#cdc9c9",
        strokeWidth: "1",
        strokeMiterlimit: "10",
        strokeDasharray: "10,10",
        cx: "50",
        cy: "50",
        r: "39"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "5s",
        from: "0 50 50",
        to: "-360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("g", {
        fill: "#cdc9c9"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        x: "30",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.1"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "40",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.2"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "50",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.3"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "60",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.4"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "70",
        y: "35",
        width: "5",
        height: "30"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.5"
      }))));
    }
    /**
     * 
     */

  }, {
    key: "renderWait02",
    value: function renderWait02() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "none",
        stroke: "#cdc9c9",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        cx: "50",
        cy: "50",
        r: "48"
      }), /*#__PURE__*/_react.default.createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: "#cdc9c9",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "85",
        y2: "50.5"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("line", {
        fill: "none",
        strokeLinecap: "round",
        stroke: "#cdc9c9",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        x1: "50",
        y1: "50",
        x2: "49.5",
        y2: "74"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "15s",
        type: "rotate",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait03",
    value: function renderWait03() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "none",
        stroke: "#cdc9c9",
        strokeWidth: "4",
        cx: "50",
        cy: "50",
        r: "44",
        style: {
          opacity: "0.5"
        }
      }), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "#e74c3c",
        strokeWidth: "3",
        cx: "8",
        cy: "54",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "2s",
        type: "rotate",
        from: "0 50 48",
        to: "360 50 52",
        repeatCount: "indefinite"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait04",
    value: function renderWait04() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "6",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "opacity",
        dur: "1s",
        values: "0;1;0",
        repeatCount: "indefinite",
        begin: "0.1"
      })), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "26",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "opacity",
        dur: "1s",
        values: "0;1;0",
        repeatCount: "indefinite",
        begin: "0.2"
      })), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "46",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "opacity",
        dur: "1s",
        values: "0;1;0",
        repeatCount: "indefinite",
        begin: "0.3"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait05",
    value: function renderWait05() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "6",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 15 ; 0 -15; 0 15",
        repeatCount: "indefinite",
        begin: "0.1"
      })), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "30",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 10 ; 0 -10; 0 10",
        repeatCount: "indefinite",
        begin: "0.2"
      })), /*#__PURE__*/_react.default.createElement("circle", {
        fill: "#cdc9c9",
        stroke: "none",
        cx: "54",
        cy: "50",
        r: "6"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "1s",
        type: "translate",
        values: "0 5 ; 0 -5; 0 5",
        repeatCount: "indefinite",
        begin: "0.3"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait06",
    value: function renderWait06() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        fill: "none",
        stroke: "#cdc9c9",
        strokeWidth: "4",
        x: "25",
        y: "25",
        width: "50",
        height: "50"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        dur: "0.5s",
        from: "0 50 50",
        to: "180 50 50",
        type: "rotate",
        id: "strokeBox",
        attributeType: "XML",
        begin: "rectBox.end"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "27",
        y: "27",
        fill: "#cdc9c9",
        width: "46",
        height: "50"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        dur: "1.3s",
        attributeType: "XML",
        from: "50",
        to: "0",
        id: "rectBox",
        fill: "freeze",
        begin: "0s;strokeBox.end"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait07",
    value: function renderWait07() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fill: "#cdc9c9",
        d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "2s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("path", {
        fill: "#cdc9c9",
        d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "1s",
        from: "0 50 50",
        to: "-360 50 50",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("path", {
        fill: "#cdc9c9",
        d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "2s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait08",
    value: function renderWait08() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        fill: "#cdc9c9",
        width: "3",
        height: "100",
        transform: "translate(0) rotate(180 3 50)"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        attributeType: "XML",
        dur: "1s",
        values: "30; 100; 30",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "17",
        fill: "#cdc9c9",
        width: "3",
        height: "100",
        transform: "translate(0) rotate(180 20 50)"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        attributeType: "XML",
        dur: "1s",
        values: "30; 100; 30",
        repeatCount: "indefinite",
        begin: "0.1s"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "40",
        fill: "#cdc9c9",
        width: "3",
        height: "100",
        transform: "translate(0) rotate(180 40 50)"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        attributeType: "XML",
        dur: "1s",
        values: "30; 100; 30",
        repeatCount: "indefinite",
        begin: "0.3s"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "60",
        fill: "#cdc9c9",
        width: "3",
        height: "100",
        transform: "translate(0) rotate(180 58 50)"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        attributeType: "XML",
        dur: "1s",
        values: "30; 100; 30",
        repeatCount: "indefinite",
        begin: "0.5s"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "80",
        fill: "#cdc9c9",
        width: "3",
        height: "100",
        transform: "translate(0) rotate(180 76 50)"
      }, /*#__PURE__*/_react.default.createElement("animate", {
        attributeName: "height",
        attributeType: "XML",
        dur: "1s",
        values: "30; 100; 30",
        repeatCount: "indefinite",
        begin: "0.1s"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait09",
    value: function renderWait09() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("rect", {
        x: "20",
        y: "50",
        width: "4",
        height: "10",
        fill: "#cdc9c9"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "30",
        y: "50",
        width: "4",
        height: "10",
        fill: "#cdc9c9"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.2s",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), /*#__PURE__*/_react.default.createElement("rect", {
        x: "40",
        y: "50",
        width: "4",
        height: "10",
        fill: "#cdc9c9"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.4s",
        dur: "0.6s",
        repeatCount: "indefinite"
      })));
    }
    /**
     * 
     */

  }, {
    key: "renderWait10",
    value: function renderWait10() {
      return /*#__PURE__*/_react.default.createElement("svg", {
        className: "kwaitsvg",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/_react.default.createElement("path", {
        fill: "#cdc9c9",
        d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      }, /*#__PURE__*/_react.default.createElement("animateTransform", {
        attributeName: "transform",
        attributeType: "XML",
        type: "rotate",
        dur: "1s",
        from: "0 50 50",
        to: "360 50 50",
        repeatCount: "indefinite"
      })));
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

      var classes = "kwaitspinner kwaitspinnerdefaults";

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_01) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait01());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_02) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait02());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_03) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait03());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_04) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait04());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_05) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait05());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_06) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait06());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_07) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait07());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_08) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait08());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_09) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait09());
      }

      if (this.props.type == KWaitSpinner.SPINNER_STYLE_10) {
        return /*#__PURE__*/_react.default.createElement("div", {
          onClick: function onClick(e) {
            return _this2.onClick(e);
          },
          className: classes,
          style: this.props.style
        }, this.renderWait10());
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes,
        style: this.props.style
      }, this.renderWait01());
    }
  }]);

  return KWaitSpinner;
}(_react.Component);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_01", 1);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_02", 2);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_03", 3);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_04", 4);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_05", 5);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_06", 6);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_07", 7);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_08", 8);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_09", 9);

_defineProperty(KWaitSpinner, "SPINNER_STYLE_10", 10);

var _default = KWaitSpinner;
exports.default = _default;