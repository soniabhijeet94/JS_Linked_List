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

