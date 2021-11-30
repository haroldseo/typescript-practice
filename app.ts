//The return type is inferred to have a type of number
function add(n1: number, n2: number) {
  return n1 + n2;
}

//When there is no return statement
//The return type has an inferred type of void
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
//combineValues = printResult; Error

console.log(combineValues(8, 8));
