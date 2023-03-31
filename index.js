// JavaScript program to illustrate for loop

let arr = ["abc", 19, 122, "aaabb", 1221, 3434];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// JavaScript program to illustrate while loop

let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// JavaScript program to illustrate Continue, if, else
i = 0;
while (i < arr.length) {
  if (i % 2 == 0) {
    i++;
    continue;
  } else {
    console.log(arr[i]);
    i++;
  }
}

// JavaScript program to illustrate Switch

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

// JavaScript program to illustrate Recursion

function binarySearch(values_Sorted, target) {
  function perform_search(beg, end) {
    if (beg > end) {
      return null;
    }
    if (values_Sorted[beg] === target) {
      return beg;
    }
    if (values_Sorted[end] === target) {
      return end;
    }

    var mid = Math.floor((beg + end) / 2);
    var mid_value = values_Sorted[mid];
    if (mid_value > target) {
      return perform_search(beg + 1, mid);
    } else if (mid_value < target) {
      return perform_search(mid, end - 1);
    }
    return mid;
  }
  return perform_search(0, values_Sorted.length - 1);
}
var res = binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
console.log("We got value as: " + res);

// JavaScript program to illustrate Clouser

function foo(outer_arg) {

	function inner(inner_arg) {
		return outer_arg + inner_arg;
	}
	return inner;
}
var get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));

/* Explanation: In the above example we used a parameter function rather than a default one. 
Note even when we are done with the execution of foo(5) we can access the outer
_arg variable from the inner function. And on the execution of the inner 
function produce the summation of outer_arg and inner_arg as desired.*/

// JavaScript program to illustrate Binary Search Tree
// Node class
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

// Binary Search tree class
class BinarySearchTree
{
	constructor()
	{
		// root of a binary search tree
		this.root = null;
	}

	// function to be implemented
	 insert(data)
	 remove(data)
	 search(node, data)
}

insert(data)
{
	var newNode = new Node(data);
	if(this.root === null)
		this.root = newNode;
	else
		this.insertNode(this.root, newNode);
}
insertNode(node, newNode)
{  
    if(newNode.data < node.data)
	{
		if(node.left === null)
			node.left = newNode;
		else
			this.insertNode(node.left, newNode);
	}
	else
	{
		if(node.right === null)
			node.right = newNode;
		else
			this.insertNode(node.right,newNode);
	}
}

remove(data)
{
	this.root = this.removeNode(this.root, data);
}
removeNode(node, key)
{
	if(node === null)
		return null;
	else if(key < node.data)
	{
		node.left = this.removeNode(node.left, key);
		return node;
	}
	else if(key > node.data)
	{
		node.right = this.removeNode(node.right, key);
		return node;
	}
	else
	{
		if(node.left === null && node.right === null)
		{
			node = null;
			return node;
		}
		if(node.left === null)
		{
			node = node.right;
			return node;
		}
		
		else if(node.right === null)
		{
			node = node.left;
			return node;
		}
		var aux = this.findMinNode(node.right);
		node.data = aux.data;

		node.right = this.removeNode(node.right, aux.data);
		return node;
	}

}

search(node, data)
{
	if(node === null)
		return null;
	else if(data < node.data)
		return this.search(node.left, data);
	else if(data > node.data)
		return this.search(node.right, data);
	else
		return node;
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.remove(5);
BST.remove(7);
BST.remove(15);

// Impletation of getElementById

function getElementById(id) {
    let elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getAttribute("id") === id) {
        return elements[i];
      }
    }
    return null;
  }


  //Function to check prime number and get the difference between the consecutive prime numbers
		function p() {
			
			var n, i, flag = true;
			
			// Getting the value from text
			// field using DOM
			n = document.myform.n.value;
			n = parseInt(n)
			for(i = 2; i <= n - 1; i++)
				if (n % i == 0) {
					flag = false;
					break;
				}
				
				// Check and display alert message
			if (flag == true)
				alert(n + " is prime");
			else
				alert(n + " is not prime");
            if(flag){
                let m = n+1;let flag_new = false;
                while(flag_new == false){
                for(i = 2; i <= m - 1; i++){
				if (m % i == 0) {
					flag_new = false;
					break;
				}
            }
            m++;
            }
            m--;
            document.write(m-n);
        }
		}
	

  


