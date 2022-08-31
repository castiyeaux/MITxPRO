/*
Importing our function (which we have assumed we will create in the future) to be tested from the app.js file to out test file.
*/
const { add, subtract, multiply, divide } = require("./calculator");

// Our Jest methods containing tests that define our objectives
describe("add", () => {
    // Test 1 - addition
    it("should add both numbers and return the sum", () => {
        let number1 = 4;
        let number2 = 6;
        expect(add(number1, number2)).toEqual(10);
    });
});

describe("subtract", () => {
    // Test 2 - subtraction
    it("should subtract both numbers and return the difference", () => {
        let number1 = 10;
        let number2 = 6;
        expect(subtract(number1, number2)).toEqual(4);
    });
});

describe("multiply", () => {
    // Test 3 - multiplication
    it("should multiply both numbers and return the product", () => {
        let number1 = 3;
        let number2 = 4;
        expect(multiply(number1, number2)).toEqual(12);
    });
});

describe("divide", () => {
    // Test 4 - division
    it("should divide both numbers and return the quotient", () => {
        let number1 = 8;
        let number2 = 2;
        expect(divide(number1, number2)).toEqual(4);
    });
});