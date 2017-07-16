/**
	Copyright: © 2017 sigod
	License: Subject to the terms of the MIT license, as written in the included LICENSE file.
	Authors: sigod
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  factory(global);
}(this, (function (exports) { 'use strict';

var LENGTH = 16;

function verifyEIC(EIC) {
	if (typeof EIC !== 'string' || EIC.length !== LENGTH) {
		return false;
	}

	var check_digit = generateEICCheckDigit(EIC);

	return EIC[LENGTH - 1] === check_digit;
}

function generateEICCheckDigit(EIC) {
	if (typeof EIC !== 'string' || EIC.length < LENGTH - 1) {
		return;
	}

	var total = 0;

	for (var i = 0, len = LENGTH - 1; i < len; i += 1) {
		var n = toNumber(EIC(i));

		if (n < 0 || n > 36) {
			return;
		}

		total += n * (LENGTH - i);
	}

	return toChar(36 - (total - 1) % 37);
}

function toNumber(e) {
	if (e > '9') return e.charCodeAt(0) - 55;
	if (e === '-') return 36;
	return +e;
}

function toChar(e) {
	if (e < 10) return e + '';
	if (e === 36) return '-';
	return String.fromCharCode(e + 55);
}

exports.verifyEIC = verifyEIC;
exports.generateEICCheckDigit = generateEICCheckDigit;

})));
