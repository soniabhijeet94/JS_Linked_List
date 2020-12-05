const Node = require('./create_node');

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


	//add_to_end()

	add_to_end(num) {
		let node = new Node(num);		
		if(this.head === null) {
			this.head = node;
			this.size++;
		}
		else {
			let curr = this.head;

			while(curr.next) curr = curr.next;
			curr.next = node;
			this.size++;

		}
	}


	//add_to_pos()

	add_to_pos(num, pos) {
		let node = new Node(num);		
		if(this.head === null) {
			this.head = node;
			this.size++;
		}
		else {
			let curr = this.head;
			let prev = null;
			let i = 0;

			while(curr.next && i < pos-1) {
				prev = curr;
				curr = curr.next;
				i++;
			}

			prev.next = node;
			node.next = curr;
			this.size++;
		}
	}


	//print the list
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

module.exports = LL;
