class Node {
	constructor(num) {
		this.num = num;
		this.next = null;
	}
}

class LL {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	//add_to_start()

	add_to_start(num) {
		let node = new Node(num);		
		if(this.head === null) {
			this.head = node;
			this.size++;
		}
		else {
			node.next = this.head;
			this.head = node;
			this.size++;
		}
	}

	print_list() {
		if(this.size === 0) 
			console.log("List is empty...");
		else {
			let curr = this.head;
			console.log("Printing the list...");

			if(curr.next === null)
				console.log("LIST::  -> " + curr.num);
			else{
				let list = "";
				while(curr) {
					list += " -> " + curr.num;
					curr = curr.next;
				}
				console.log("LIST:: " + list);
			}
		}
	}

}



var obj = new LL();
obj.print_list();
console.log();

obj.add_to_start(5);
obj.print_list();
console.log();

obj.add_to_start(23);
obj.print_list();

