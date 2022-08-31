const greet = require("./greet");

describe("greet", () => {

    // Test 1 - simple greeting
    it("should take a name and return a greeting with that name", () => {
        let name = "Elizabeth";
        expect(greet(name)).toBe("Hello, " + name);
    });

    // Test 2 - null name
    it("should return a default greeting if name is null", () => {
        let name = null;
        expect(greet(name)).toBe("Hello there!");
    });

    // Test 3 - shout greeting
    it("should shout greeting if name is all caps", () => {
        let name = "JOSE";
        expect(greet(name)).toBe("HELLO " + name);
    });

    // Test 4 - two names
    it("should return greeting with two names, if given an array of two names", () => {
        let name = ["Jose", "Pep"];
        expect(greet(name)).toBe("Hello, " + name[0] + ", " + name[1]);
    });

    // Test 5 - multiple names
    it("should return greeting with multiple names, if given an array of multiple names", () => {
        let name = ["Alex", "Arsene", "Jose", "Zidane"];
        expect(greet(name)).toBe("Hello, " + name[0] + ", " + name[1] + ", " + name[2] + ", " + name[3]);
    });

});