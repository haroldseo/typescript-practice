//The return type is inferred to have a type of number
function add(n1, n2) {
    return n1 + n2;
}
//When there is no return statement
//The return type has an inferred type of void
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// let combineValues: Function;
var combineValues;
combineValues = add;
//combineValues = printResult; Error
console.log(combineValues(8, 8));
//Function Types and Callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
