var n = 20;
var o = {
    name: "Leo",
    last_name: "Astros"
};
var t = [20, "tuple", true];
var msg = "Number is ".concat(n, "\nPerson: ").concat(o.name, " ").concat(o.last_name, "\nTuple: ").concat(t);
// Creating an element
var element = document.createElement('h1');
element.textContent = msg;
// Appending element to the document
document.body.appendChild(element);
