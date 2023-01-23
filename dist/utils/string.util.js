"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = exports.FirstCharcterToLower = exports.FirstCharcterToUpper = void 0;
/**
 * CHANGE THE FIRST CHARACTER TO STRING
 * @param string
 * @returns
 */
const FirstCharcterToUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1);
};
exports.FirstCharcterToUpper = FirstCharcterToUpper;
const FirstCharcterToLower = (string) => {
    return string.charAt(0).toLowerCase() + string.substring(1);
};
exports.FirstCharcterToLower = FirstCharcterToLower;
const sanitize = (string) => {
    return string.replace(String.fromCharCode(92), "\\").trim();
};
exports.sanitize = sanitize;
