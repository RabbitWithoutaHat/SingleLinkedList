"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value) {
        this._next = null;
        this._value = null;
        this._value = value;
    }
    Object.defineProperty(Node.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (node) {
            this._next = node;
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
exports["default"] = Node;
