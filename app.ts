let n : number = 20;
let o: {
	name: string,
	last_name: string
} = {
	name: "Leo",
	last_name: "Astros"
};
let t:[number, string, boolean] = [20, "tuple", true];
let msg: string = `Number is ${n}
Person: ${o.name} ${o.last_name}
Tuple: ${t}`;

// Creating an element
let element = document.createElement('h1');
element.textContent = msg;

// Appending element to the document
document.body.appendChild(element);
