import SingleLinkedList from "./SingleLinkedList";

function main() {
  const list: SingleLinkedList<Number> = new SingleLinkedList(1);
  list.insertValue(2);
  list.insertValue(0, 0);
  list.deleteValue(1);
  list.traverseList();
}

main();
