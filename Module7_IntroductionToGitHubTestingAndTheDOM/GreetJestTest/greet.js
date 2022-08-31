function greet(name) {
    let greeting = "Hello there!";

    if(name === null) {
        return greeting;
    }
    else if((Array.isArray(name) === true) && (name.length < 3)) {
        greeting = "Hello, " + name[0] + ", " + name[1];
    }
    else if(Array.isArray(name) === true) {
        greeting = "Hello, ";
        name.forEach((index) => {
            greeting = greeting + index  + ", ";
        });
        greeting = greeting.replace(/,\s*$/, "");
    }
    else if(name.toUpperCase() === name) {
        greeting = "HELLO " + name;
    }
    else {
        greeting = "Hello, " + name;
    }

    return greeting;
}

module.exports = greet;