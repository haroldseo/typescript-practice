//Unknown Type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "hello";

if (typeof userInput === "string") {
  userName = userInput;
}

//Utility function that generates error objects
//Never Type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //Another example: infinite loop
}

generateError("Error occurred", 404);
