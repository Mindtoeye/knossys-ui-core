"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Use this class as a middle layer to store data to either network, disk (Electron) or local storage
 * 
 * We switched from using cookies to local storage:
 *
 * The size of a cookie contains entire cookie, including name, value, expiry date etc. A cookie can 
 * contains data upto 4096 Bytes only that is the maximum size of a cookie which can be. If you want 
 * to support most browsers, then do not exceed 50 cookies per domain, and 4093 bytes per domain.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
var KSessionStorage = /*#__PURE__*/function () {
  /**
   *
   */
  function KSessionStorage(aKey) {
    _classCallCheck(this, KSessionStorage);

    console.log("KSessionStorage ()");
    this.cookieJar = {};
    this.permanence = null;
    this.equalCharacter = "=";
    this.key = aKey;

    if (this.key == undefined) {
      this.key = "knossys";
    } else {
      if (this.key == null) {
        this.key = "knossys";
      }
    }

    this.permanence = this;
    this.permanence.reload();
  }
  /**
   * Deprecated, use value access methods
   */


  _createClass(KSessionStorage, [{
    key: "setCookie",
    value: function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    /**
     * Deprecated, use value access methods
     */

  }, {
    key: "getCookie",
    value: function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      return "";
    }
    /**
     * Deprecated, use value access methods
     */

  }, {
    key: "checkCookie",
    value: function checkCookie() {
      var username = getCookie("username");

      if (username != "") {
        alert("Welcome again " + username);
      } else {
        username = prompt("Please enter your name:", "");

        if (username != "" && username != null) {
          setCookie("username", username, 365);
        }
      }
    }
    /**
     *
     */

  }, {
    key: "setValue",
    value: function setValue(aKey, aValue) {
      //console.log ("setValue ()");
      this.cookieJar[aKey] = aValue;
      this.permanence.save();
    }
    /**
     *
     */

  }, {
    key: "getValue",
    value: function getValue(aKey, aDefault) {
      if (this.cookieJar.hasOwnProperty(aKey)) {
        return this.cookieJar[aKey];
      }

      return aDefault;
    }
    /**
     *
     */

  }, {
    key: "setBooleanValue",
    value: function setBooleanValue(aKey, aValue) {
      this.setValue(aKey, aValue.toString());
    }
    /**
     *
     */

  }, {
    key: "getBooleanValue",
    value: function getBooleanValue(aKey) {
      var booleanString = this.getValue(aKey, false);

      if (booleanString) {
        if (booleanString.toLowerCase() == "true") {
          return true;
        }
      }

      return false;
    }
    /**
     *
     */

  }, {
    key: "setIntegerValue",
    value: function setIntegerValue(aKey, aValue) {
      this.setValue(aKey, aValue.toString());
    }
    /**
     *
     */

  }, {
    key: "getIntegerValue",
    value: function getIntegerValue(aKey) {
      var integerString = this.getValue(aKey, 0);

      if (integerString) {
        return parseInt(integerString);
      }

      return false;
    }
    /**
     *
     */

  }, {
    key: "setFloatValue",
    value: function setFloatValue(aKey, aValue) {
      this.setValue(aKey, aValue.toString());
    }
    /**
     *
     */

  }, {
    key: "getFloatValue",
    value: function getFloatValue(aKey) {
      var floatString = this.getValue(aKey, 0.0);

      if (floatString) {
        return parseFloat(floatString);
      }

      return false;
    }
    /**
     *
     */

  }, {
    key: "setJSONObject",
    value: function setJSONObject(aKey, anObject) {
      var jsonString = JSON.stringify(anObject);
      this.setValueEncoded(aKey, jsonString);
    }
    /**
     *
     */

  }, {
    key: "getJSONObject",
    value: function getJSONObject(aKey) {
      var jsonString = this.getValueEncoded(aKey);
      return JSON.parse(jsonString);
    }
    /**
     *
     */

  }, {
    key: "setValueEncoded",
    value: function setValueEncoded(aKey, aValue) {
      //console.log ("setValueEncoded ()");
      //console.log (aValue);
      this.permanence.setValue(aKey, btoa(aValue));
    }
    /**
     * This is a problem because W10= decodes to [] and that might not be
     * a very good default value
     */

  }, {
    key: "getValueEncoded",
    value: function getValueEncoded(aKey) {
      //console.log ("getValueEncoded ()");
      var raw = this.permanence.getValue(aKey, "W10="); //console.log (raw);

      return atob(raw);
    }
    /**
     *
     */

  }, {
    key: "save",
    value: function save() {
      //console.log ("save ()");
      //console.log (cookieJar);
      var data = "";
      var index = 0;

      for (var _i = 0, _Object$entries = Object.entries(this.cookieJar); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        var separator = ";";

        if (index == 0) {
          separator = "";
        }

        data = data + separator + key + this.equalCharacter + value;
        index++;
      }

      window.localStorage.setItem(this.key, data); // Make sure that our internal model is the same as what's on disk

      this.permanence.reload();
    }
    /**
     *
     */

  }, {
    key: "reload",
    value: function reload() {
      //console.log ("reload ()");
      var allCookies = window.localStorage.getItem(this.key);

      if (allCookies != null) {
        this.permanence.parse(allCookies);
      }
    }
    /**
     *
     */

  }, {
    key: "parse",
    value: function parse(data) {
      //console.log ("parse ()");
      var splitter = data.split(";");
      this.cookieJar = {};

      for (var i = 0; i < splitter.length; i++) {
        var kv = splitter[i].split(this.equalCharacter);

        if (kv.length > 1) {
          this.cookieJar[kv[0].trim()] = kv[1].trim();
        }
      }
    }
  }]);

  return KSessionStorage;
}();

var _default = KSessionStorage;
exports.default = _default;