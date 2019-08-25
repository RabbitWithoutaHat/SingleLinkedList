"use strict";
exports.__esModule = true;
var Node_1 = require("./Node");
var SingleLinkedList = /** @class */ (function () {
    function SingleLinkedList(value) {
        this._head = null;
        this._tail = null;
        var initialNode = new Node_1["default"](value);
        this._head = initialNode;
        this._tail = initialNode;
    }
    Object.defineProperty(SingleLinkedList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        set: function (node) {
            this._tail = node;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleLinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        set: function (node) {
            this._head = node;
        },
        enumerable: true,
        configurable: true
    });
    SingleLinkedList.prototype.insertValue = function (value, location) {
        var newNode = new Node_1["default"](value);
        // Insert at last pos
        if (location === undefined) {
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        // Insert at first pos
        if (location === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        else {
            var currentNode = this.head;
            for (var i = 0; i < location; i++) {
                currentNode = currentNode.next;
            }
            newNode = currentNode.next;
            currentNode.next = newNode;
        }
    };
    SingleLinkedList.prototype.traverseList = function () {
        var currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    };
    SingleLinkedList.prototype.findValue = function (value) {
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
    };
    SingleLinkedList.prototype.deleteValue = function (location) {
        var currentNode = this.head;
        var prevNode = this.head;
        for (var i = 0; i <= location; i++) {
            currentNode = currentNode.next;
        }
        for (var i = 0; i < location; i++) {
            prevNode.next = currentNode;
        }
        return true;
    };
    return SingleLinkedList;
}());
exports["default"] = SingleLinkedList;
