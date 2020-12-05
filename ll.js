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


	//find_node() => assume:in case of repetition, return the first position

	find_node(val) {
		
		if(!this.size) {
			console.log("List is empty...");
			return -1;
		}
		else {

			let curr = this.head;
			let found = false, pos = 0;
			while(curr) {
				if(curr.num === val) {
					found = true;
					break;
				}
				curr = curr.next;
				pos++;
			}

			if(found) {
				console.log(`Node with data ${val} is found at ${pos+1}.`);
				return pos+1;
			}
			else {
				console.log("Done searching, node not found with requested data. Try again.");
				return -1;
			}
		}
	}


	//remove_from_start()

	remove_from_start() {
		if(this.size === 0) console.log("List is empty...");

		else if(this.size === 1){
			this.head = null;
			this.size--;
		} 

		else {
			let curr = this.head;
			curr = curr.next;
			this.head = curr;
			this.size--;
		}

	}


	//remove_from_end()

	remove_from_end() {
		if(this.size === 0) console.log("List is empty...");

		else if(this.size === 1){
			this.head = null;
			this.size--;
		} 

		else {
			let curr = this.head;
			let prev = null;
			while(curr && curr.next) {
				prev = curr;
				curr = curr.next;
			}

			prev.next = null;
			this.size--;
		}

	}


	//remove_from_pos()

	remove_from_pos(pos) {
		if(this.size === 0) console.log("List is empty...");

		else if(this.size === 1){
			if(pos === 1) {
				this.head = null;
				this.size--;				
			} else {
				console.log("Position not available in list.")
			}
		} 

		else {
			let curr = this.head;
			let prev = null;
			let i = 0;

			while(curr && i < pos-1) {
				prev = curr;
				curr = curr.next;
				i++;
			}

			if(i !== pos-1)
				console.log("Position not available in list.")
			else {
				prev.next = curr.next;
				this.size--;
			}
		}
	}


	//find_and_remove()

	find_and_remove(val) {
		if(this.size === 0) console.log("List is empty...");

		else {
			let pos = this.find_node(val);

			if(pos === -1) console.log("Node not found in the list.");
			
			else this.remove_from_pos(pos);			
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
