var childElement = /** @class */ (function () {
    function childElement(n) {
        this.index = n;
        this.tagName = "h".concat(n);
    }
    childElement.prototype.element = function () {
        var el = document.createElement(this.tagName);
        el.textContent = "text for child ".concat(this.index);
        return el;
    };
    return childElement;
}());
var n = 20;
var o = {
    name: "Leo",
    last_name: "Astros"
};
var t = [20, "tuple", true];
var a = ["one"];
a[1] = "two";
a.push("zero");
var EnumName;
(function (EnumName) {
    EnumName[EnumName["value1"] = 0] = "value1";
    EnumName[EnumName["value2"] = 1] = "value2";
})(EnumName || (EnumName = {}));
;
var e = EnumName.value1;
var msg = "Number is ".concat(n, "\nPerson: ").concat(o.name, " ").concat(o.last_name, "\nTuple: ").concat(t, "\nArray: ").concat(a, "\nEnum: ").concat(e);
// Creating an element
var element = document.createElement('h1');
element.textContent = msg;
// Appending element to the document
document.body.appendChild(element);
for (var i = 0; i < 5; i++) {
    //document.body.appendChild(fName(i + 2));
    var newElement = new childElement(i + 2);
    document.body.appendChild(newElement.element());
}
function fName(n) {
    var element = document.createElement("h".concat(n));
    element.textContent = "text for child ".concat(n);
    return element;
}
