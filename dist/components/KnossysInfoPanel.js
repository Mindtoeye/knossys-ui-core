"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/main.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 
 */
class KnossysInfoPanel extends _react.Component {
  /**
   * 
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
   * 
   */


  componentDidMount() {
    console.log("componentDidMount ()");
  }
  /**
   * 
   */


  componentWillUnmount() {}
  /**
   *
   */


  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "kinfopanel",
      style: {
        left: this.props.x + "px",
        top: this.props.y + "px"
      }
    }, /*#__PURE__*/_react.default.createElement("p", null, "This is the most basic panel in Knossys. It is mainly used to build fixed-location info panels. It is not the basis for windows and dialogs. It does use the theme."));
  }

}

var _default = KnossysInfoPanel;
exports.default = _default;