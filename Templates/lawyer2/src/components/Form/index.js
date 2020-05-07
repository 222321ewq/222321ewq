"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleForm", function (e) {
      _axios.default.post("https://formcarry.com/s/XXXXXX", _this.state, {
        headers: {
          "Accept": "application/json"
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });

      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFields", function (e) {
      return _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _this.state = {
      Name: "",
      Phone: "",
      Email: "",
      Description: ""
    };
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("form", {
        onSubmit: this.handleForm,
        className: "contactForm"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-sm-6 col-12"
      }, _react.default.createElement("div", {
        className: "formInput"
      }, _react.default.createElement("input", {
        placeholder: "Full Name",
        id: "Name",
        name: "Name",
        onChange: this.handleFields,
        className: "form-control",
        type: "text"
      }))), _react.default.createElement("div", {
        className: "col-sm-6 col-12"
      }, _react.default.createElement("div", {
        className: "formInput"
      }, _react.default.createElement("input", {
        placeholder: "Phone",
        id: "Phone",
        name: "Phone",
        onChange: this.handleFields,
        className: "form-control",
        type: "phone"
      }))), _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("div", {
        className: "formInput"
      }, _react.default.createElement("input", {
        placeholder: "Email",
        id: "Email",
        name: "Email",
        onChange: this.handleFields,
        className: "form-control",
        type: "email"
      }))), _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("div", {
        className: "formInput"
      }, _react.default.createElement("textarea", {
        className: "form-control",
        id: "Description",
        onChange: this.handleFields,
        placeholder: "Case Description...",
        name: "Description"
      }))), _react.default.createElement("div", {
        className: "col-12"
      }, _react.default.createElement("button", {
        type: "submit"
      }, "Send Request"))));
    }
  }]);

  return Form;
}(_react.Component);

var _default = Form;
exports.default = _default;