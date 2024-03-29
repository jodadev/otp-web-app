"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveWhiteSpace = void 0;
/**
 * Removes any whitespace in front or back of a string and returns it back.
 * @param {string} text accepts the users raw input string.
 * @return {string} users input string trimmed of whitespace.
 */
const RemoveWhiteSpace = (text) => {
    return text.trim();
};
exports.RemoveWhiteSpace = RemoveWhiteSpace;
