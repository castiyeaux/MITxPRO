/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/

//Write your code here
////////////////////////////////////////
function isString(var1, var2, var3) {
    if (typeof (var1) === "string" && typeof (var2) === "string" && typeof (var3) === "string") {
        return "strings";
    }
    else {
        return "not strings";
    }
}
////////////////////////////////////////

//open the browser console to check results
console.log('isString results: ', isString('a', 'b', 'c'));

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = isString;
}
