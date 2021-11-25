function combine(input1, input2, resultType) {
    var result;
    if (resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //   if (resultType === "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
}
var combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);
var combineStringToNumber = combine("10", "20", "as-number");
console.log(combineStringToNumber);
var combineNumberToString = combine(40, 80, "as-string");
console.log(combineNumberToString);
var combinedNames = combine("Joe", "Anna", "as-string");
console.log(combinedNames);
function print(text, alignment) {
    console.log(text);
}
print("hello", "left");
