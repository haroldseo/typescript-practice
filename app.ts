type Sum = number | string;
type ConversionDescription = "as-number" | "as-string";

function combine(input1: Sum, input2: Sum, resultType: ConversionDescription) {
  let result;
  if (resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
}

const combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);

const combineStringToNumber = combine("10", "20", "as-number");
console.log(combineStringToNumber);

const combineNumberToString = combine(40, 80, "as-string");
console.log(combineNumberToString);

const combinedNames = combine("Joe", "Anna", "as-string");
console.log(combinedNames);

function print(text: string, alignment: "left" | "right" | "center") {
  console.log(text);
}

print("hello", "left");
