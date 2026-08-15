"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexObj = void 0;
exports.validateField = validateField;
exports.regexObj = {
    name: /^[a-zA-Z]{3,30}$/,
    email: /^[\w.]+@[a-z]\.[a-zA-Z]{2,}$/,
    phone: /^\d{10}$/
};
function validateField(field, value) {
    const pattern = exports.regexObj[field];
    if (!pattern)
        true;
    return pattern.test(value);
}
