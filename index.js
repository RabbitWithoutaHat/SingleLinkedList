"use strict";
exports.__esModule = true;
var SingleLinkedList_1 = require("./SingleLinkedList");
function main() {
    var list = new SingleLinkedList_1["default"](1);
    list.insertValue(2);
    list.insertValue(0, 0);
    list.deleteValue(1);
    list.traverseList();
}
main();
