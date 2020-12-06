const LL = require('./LL');

var obj = new LL();

console.log("Print initial list:")
obj.print_list();

console.log();
console.log("Add 5 to start:")
obj.add_to_start(5);
obj.print_list();

console.log();
console.log("Add 23 to start:")
obj.add_to_start(23);
obj.print_list();

console.log();
console.log("Add 17 to end:")
obj.add_to_end(17);
obj.print_list();

console.log();
console.log("Add 45 to position 2:")
obj.add_to_pos(45, 3);
obj.print_list();

console.log();
console.log("Add 5 to start:")
obj.add_to_start(5);
obj.print_list();

console.log();
console.log("Add 23 to start:")
obj.add_to_start(23);
obj.print_list();

console.log();
console.log("Add 17 to end:")
obj.add_to_end(17);
obj.print_list();

console.log();
console.log("Add 45 to position 2:")
obj.add_to_pos(45, 3);
obj.print_list();

console.log();
console.log("Find position for 17:")
let found = obj.find_node(17);
obj.print_list();

console.log();
console.log("Remove node from start:")
obj.remove_from_start();
obj.print_list();

console.log();
console.log("Remove node from end:")
obj.remove_from_end();
obj.print_list();

console.log();
console.log("Remove node from position 3:")
obj.remove_from_pos(3);
obj.print_list();

console.log();
console.log("Find & remove node with data 45:")
obj.find_and_remove(45);
obj.print_list();

console.log();
console.log("Print current list size:")
obj.length();
obj.print_list();

console.log();
console.log("Is the list empty? " + obj.isEmpty());
obj.print_list();

console.log();
console.log("Index of element 45 is:" + obj.indexOf(45));
obj.print_list();

console.log();
console.log("Add 123 to pos 2: ")
obj.add_to_pos(123, 2);
obj.print_list();

console.log();
console.log("Remove all elements from the list: ");
obj.removeAll();
obj.print_list();

console.log();
console.log("Add 115 to pos 5: ")
obj.add_to_pos(123, 5);
obj.print_list();

console.log();
console.log("Add 115 to start: ")
obj.add_to_start(115);
obj.print_list();

