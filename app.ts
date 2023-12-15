class childElement {
	private tagName: string;
	private index: number;
	constructor(n: number) {
		this.index = n;
		this.tagName = `h${n}`;
	}
	element():HTMLElement {
		let el = document.createElement(this.tagName);
		el.textContent = `text for child ${this.index}`;
		return el;
	}
}

let n : number = 20;
let o: {
	name: string,
	last_name: string
} = {
	name: "Leo",
	last_name: "Astros"
};
let t:[number, string, boolean] = [20, "tuple", true];
let a:string[]=["one"];
a[1] = "two";
a.push("zero");
enum EnumName {value1, value2};
let e:EnumName = EnumName.value1;

let msg: string = `Number is ${n}
Person: ${o.name} ${o.last_name}
Tuple: ${t}
Array: ${a}
Enum: ${e}`;

// Creating an element
let element = document.createElement('h1');
element.textContent = msg;
// Appending element to the document
document.body.appendChild(element);
for(let i=0; i<5; i++) {
	//document.body.appendChild(fName(i + 2));
	let newElement = new childElement(i+2);
	document.body.appendChild(newElement.element());
}

function fName(n: number): HTMLElement {
	let element = document.createElement(`h${n}`);
	element.textContent = `text for child ${n}`;
	return element;
}
