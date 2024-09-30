"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./customModal.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomModal = _ref => {
  let {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "modal-close-btn bg-indigo-600 text-white rounded-lg px-4 py-2 text-sm font-medium shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  }, "Close")));
};
var _default = exports.default = CustomModal;