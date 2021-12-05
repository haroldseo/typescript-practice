//Unknow Type
var userInput;
var userName;
userInput = 5;
userInput = "hello";
if (typeof userInput === "string") {
    userName = userInput;
}
//Utility function that generates error objects
//Never Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //Another example: infinite loop
}
generateError("Error occurred", 404);
