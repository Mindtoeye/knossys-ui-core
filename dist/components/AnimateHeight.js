"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ANIMATION_STATE_CLASSES = {
  animating: 'rah-animating',
  animatingUp: 'rah-animating--up',
  animatingDown: 'rah-animating--down',
  animatingToHeightZero: 'rah-animating--to-height-zero',
  animatingToHeightAuto: 'rah-animating--to-height-auto',
  animatingToHeightSpecific: 'rah-animating--to-height-specific',
  static: 'rah-static',
  staticHeightZero: 'rah-static--height-zero',
  staticHeightAuto: 'rah-static--height-auto',
  staticHeightSpecific: 'rah-static--height-specific'
};
var PROPS_TO_OMIT = ['animateOpacity', 'animationStateClasses', 'applyInlineTransitions', 'children', 'contentClassName', 'delay', 'duration', 'easing', 'height', 'onAnimationEnd', 'onAnimationStart'];

function omit(obj) {
  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  if (!keys.length) {
    return obj;
  }

  var res = {};
  var objectKeys = Object.keys(obj);

  for (var i = 0; i < objectKeys.length; i++) {
    var key = objectKeys[i];

    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }
  }

  return res;
} // Start animation helper using nested requestAnimationFrames


function startAnimationHelper(callback) {
  var requestAnimationFrameIDs = [];
  requestAnimationFrameIDs[0] = requestAnimationFrame(function () {
    requestAnimationFrameIDs[1] = requestAnimationFrame(function () {
      callback();
    });
  });
  return requestAnimationFrameIDs;
}

function cancelAnimationFrames(requestAnimationFrameIDs) {
  requestAnimationFrameIDs.forEach(function (id) {
    return cancelAnimationFrame(id);
  });
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isPercentage(height) {
  // Percentage height
  return typeof height === 'string' && height.search('%') === height.length - 1 && isNumber(height.substr(0, height.length - 1));
}

function runCallback(callback, params) {
  if (callback && typeof callback === 'function') {
    callback(params);
  }
}

var AnimateHeight = /*#__PURE__*/function (_React$Component) {
  _inherits(AnimateHeight, _React$Component);

  var _super = _createSuper(AnimateHeight);

  function AnimateHeight(props) {
    var _this;

    _classCallCheck(this, AnimateHeight);

    _this = _super.call(this, props);
    _this.animationFrameIDs = [];
    var height = 'auto';
    var overflow = 'visible';

    if (isNumber(props.height)) {
      // If value is string "0" make sure we convert it to number 0
      height = props.height < 0 || props.height === '0' ? 0 : props.height;
      overflow = 'hidden';
    } else if (isPercentage(props.height)) {
      // If value is string "0%" make sure we convert it to number 0
      height = props.height === '0%' ? 0 : props.height;
      overflow = 'hidden';
    }

    _this.animationStateClasses = _objectSpread(_objectSpread({}, ANIMATION_STATE_CLASSES), props.animationStateClasses);

    var animationStateClasses = _this.getStaticStateClasses(height);

    _this.state = {
      animationStateClasses: animationStateClasses,
      height: height,
      overflow: overflow,
      shouldUseTransitions: false
    };
    return _this;
  }

  _createClass(AnimateHeight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var height = this.state.height; // Hide content if height is 0 (to prevent tabbing into it)
      // Check for contentElement is added cause this would fail in tests (react-test-renderer)
      // Read more here: https://github.com/Stanko/react-animate-height/issues/17

      if (this.contentElement && this.contentElement.style) {
        this.hideContent(height);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props = this.props,
          delay = _this$props.delay,
          duration = _this$props.duration,
          height = _this$props.height,
          onAnimationEnd = _this$props.onAnimationEnd,
          onAnimationStart = _this$props.onAnimationStart; // Check if 'height' prop has changed

      if (this.contentElement && height !== prevProps.height) {
        var _cx;

        // Remove display: none from the content div
        // if it was hidden to prevent tabbing into it
        this.showContent(prevState.height); // Cache content height

        this.contentElement.style.overflow = 'hidden';
        var contentHeight = this.contentElement.offsetHeight;
        this.contentElement.style.overflow = ''; // set total animation time

        var totalDuration = duration + delay;
        var newHeight = null;
        var timeoutState = {
          height: null,
          // it will be always set to either 'auto' or specific number
          overflow: 'hidden'
        };
        var isCurrentHeightAuto = prevState.height === 'auto';

        if (isNumber(height)) {
          // If value is string "0" make sure we convert it to number 0
          newHeight = height < 0 || height === '0' ? 0 : height;
          timeoutState.height = newHeight;
        } else if (isPercentage(height)) {
          // If value is string "0%" make sure we convert it to number 0
          newHeight = height === '0%' ? 0 : height;
          timeoutState.height = newHeight;
        } else {
          // If not, animate to content height
          // and then reset to auto
          newHeight = contentHeight; // TODO solve contentHeight = 0

          timeoutState.height = 'auto';
          timeoutState.overflow = null;
        }

        if (isCurrentHeightAuto) {
          // This is the height to be animated to
          timeoutState.height = newHeight; // If previous height was 'auto'
          // set starting height explicitly to be able to use transition

          newHeight = contentHeight;
        } // Animation classes


        var animationStateClasses = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, this.animationStateClasses.animating, true), _defineProperty(_cx, this.animationStateClasses.animatingUp, prevProps.height === 'auto' || height < prevProps.height), _defineProperty(_cx, this.animationStateClasses.animatingDown, height === 'auto' || height > prevProps.height), _defineProperty(_cx, this.animationStateClasses.animatingToHeightZero, timeoutState.height === 0), _defineProperty(_cx, this.animationStateClasses.animatingToHeightAuto, timeoutState.height === 'auto'), _defineProperty(_cx, this.animationStateClasses.animatingToHeightSpecific, timeoutState.height > 0), _cx)); // Animation classes to be put after animation is complete

        var timeoutAnimationStateClasses = this.getStaticStateClasses(timeoutState.height); // Set starting height and animating classes
        // We are safe to call set state as it will not trigger infinite loop
        // because of the "height !== prevProps.height" check

        this.setState({
          // eslint-disable-line react/no-did-update-set-state
          animationStateClasses: animationStateClasses,
          height: newHeight,
          overflow: 'hidden',
          // When animating from 'auto' we first need to set fixed height
          // that change should be animated
          shouldUseTransitions: !isCurrentHeightAuto
        }); // Clear timeouts

        clearTimeout(this.timeoutID);
        clearTimeout(this.animationClassesTimeoutID);

        if (isCurrentHeightAuto) {
          // When animating from 'auto' we use a short timeout to start animation
          // after setting fixed height above
          timeoutState.shouldUseTransitions = true;
          cancelAnimationFrames(this.animationFrameIDs);
          this.animationFrameIDs = startAnimationHelper(function () {
            _this2.setState(timeoutState); // ANIMATION STARTS, run a callback if it exists


            runCallback(onAnimationStart, {
              newHeight: timeoutState.height
            });
          }); // Set static classes and remove transitions when animation ends

          this.animationClassesTimeoutID = setTimeout(function () {
            _this2.setState({
              animationStateClasses: timeoutAnimationStateClasses,
              shouldUseTransitions: false
            }); // ANIMATION ENDS
            // Hide content if height is 0 (to prevent tabbing into it)


            _this2.hideContent(timeoutState.height); // Run a callback if it exists


            runCallback(onAnimationEnd, {
              newHeight: timeoutState.height
            });
          }, totalDuration);
        } else {
          // ANIMATION STARTS, run a callback if it exists
          runCallback(onAnimationStart, {
            newHeight: newHeight
          }); // Set end height, classes and remove transitions when animation is complete

          this.timeoutID = setTimeout(function () {
            timeoutState.animationStateClasses = timeoutAnimationStateClasses;
            timeoutState.shouldUseTransitions = false;

            _this2.setState(timeoutState); // ANIMATION ENDS
            // If height is auto, don't hide the content
            // (case when element is empty, therefore height is 0)


            if (height !== 'auto') {
              // Hide content if height is 0 (to prevent tabbing into it)
              _this2.hideContent(newHeight); // TODO solve newHeight = 0

            } // Run a callback if it exists


            runCallback(onAnimationEnd, {
              newHeight: newHeight
            });
          }, totalDuration);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrames(this.animationFrameIDs);
      clearTimeout(this.timeoutID);
      clearTimeout(this.animationClassesTimeoutID);
      this.timeoutID = null;
      this.animationClassesTimeoutID = null;
      this.animationStateClasses = null;
    }
  }, {
    key: "showContent",
    value: function showContent(height) {
      if (height === 0) {
        this.contentElement.style.display = '';
      }
    }
  }, {
    key: "hideContent",
    value: function hideContent(newHeight) {
      if (newHeight === 0) {
        this.contentElement.style.display = 'none';
      }
    }
  }, {
    key: "getStaticStateClasses",
    value: function getStaticStateClasses(height) {
      var _cx2;

      return (0, _classnames.default)((_cx2 = {}, _defineProperty(_cx2, this.animationStateClasses.static, true), _defineProperty(_cx2, this.animationStateClasses.staticHeightZero, height === 0), _defineProperty(_cx2, this.animationStateClasses.staticHeightSpecific, height > 0), _defineProperty(_cx2, this.animationStateClasses.staticHeightAuto, height === 'auto'), _cx2));
    }
  }, {
    key: "render",
    value: function render() {
      var _cx3,
          _this3 = this;

      var _this$props2 = this.props,
          animateOpacity = _this$props2.animateOpacity,
          applyInlineTransitions = _this$props2.applyInlineTransitions,
          children = _this$props2.children,
          className = _this$props2.className,
          contentClassName = _this$props2.contentClassName,
          delay = _this$props2.delay,
          duration = _this$props2.duration,
          easing = _this$props2.easing,
          id = _this$props2.id,
          style = _this$props2.style;
      var _this$state = this.state,
          height = _this$state.height,
          overflow = _this$state.overflow,
          animationStateClasses = _this$state.animationStateClasses,
          shouldUseTransitions = _this$state.shouldUseTransitions;

      var componentStyle = _objectSpread(_objectSpread({}, style), {}, {
        height: height,
        overflow: overflow || style.overflow
      });

      if (shouldUseTransitions && applyInlineTransitions) {
        componentStyle.transition = "height ".concat(duration, "ms ").concat(easing, " ").concat(delay, "ms"); // Include transition passed through styles

        if (style.transition) {
          componentStyle.transition = "".concat(style.transition, ", ").concat(componentStyle.transition);
        } // Add webkit vendor prefix still used by opera, blackberry...


        componentStyle.WebkitTransition = componentStyle.transition;
      }

      var contentStyle = {};

      if (animateOpacity) {
        contentStyle.transition = "opacity ".concat(duration, "ms ").concat(easing, " ").concat(delay, "ms"); // Add webkit vendor prefix still used by opera, blackberry...

        contentStyle.WebkitTransition = contentStyle.transition;

        if (height === 0) {
          contentStyle.opacity = 0;
        }
      }

      var componentClasses = (0, _classnames.default)((_cx3 = {}, _defineProperty(_cx3, animationStateClasses, true), _defineProperty(_cx3, className, className), _cx3)); // Check if user passed aria-hidden prop

      var hasAriaHiddenProp = typeof this.props['aria-hidden'] !== 'undefined';
      var ariaHidden = hasAriaHiddenProp ? this.props['aria-hidden'] : height === 0;
      return /*#__PURE__*/_react.default.createElement("div", _extends({}, omit.apply(void 0, [this.props].concat(PROPS_TO_OMIT)), {
        "aria-hidden": ariaHidden,
        className: componentClasses,
        id: id,
        style: componentStyle
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: contentClassName,
        style: contentStyle,
        ref: function ref(el) {
          return _this3.contentElement = el;
        }
      }, children));
    }
  }]);

  return AnimateHeight;
}(_react.default.Component);

var heightPropType = function heightPropType(props, propName, componentName) {
  var value = props[propName];

  if (typeof value === 'number' && value >= 0 || isPercentage(value) || value === 'auto') {
    return null;
  }

  return new TypeError("value \"".concat(value, "\" of type \"").concat(_typeof(value), "\" is invalid type for ").concat(propName, " in ").concat(componentName, ". ") + 'It needs to be a positive number, string "auto" or percentage string (e.g. "15%").');
};

AnimateHeight.propTypes = {
  'aria-hidden': _propTypes.default.bool,
  animateOpacity: _propTypes.default.bool,
  animationStateClasses: _propTypes.default.object,
  applyInlineTransitions: _propTypes.default.bool,
  children: _propTypes.default.any.isRequired,
  className: _propTypes.default.string,
  contentClassName: _propTypes.default.string,
  delay: _propTypes.default.number,
  duration: _propTypes.default.number,
  easing: _propTypes.default.string,
  height: heightPropType,
  id: _propTypes.default.string,
  onAnimationEnd: _propTypes.default.func,
  onAnimationStart: _propTypes.default.func,
  style: _propTypes.default.object
};
AnimateHeight.defaultProps = {
  animateOpacity: false,
  animationStateClasses: ANIMATION_STATE_CLASSES,
  applyInlineTransitions: true,
  duration: 250,
  delay: 0,
  easing: 'ease',
  style: {}
};
var _default = AnimateHeight;
exports.default = _default;