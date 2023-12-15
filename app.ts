let n : number = 20;
let msg: string = `Number is ${n}`;

// Creating an element
let element = document.createElement('h1');
element.textContent = msg;

// Appending element to the document
document.body.appendChild(element);
