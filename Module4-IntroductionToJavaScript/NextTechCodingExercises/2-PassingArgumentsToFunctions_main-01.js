/*
Instructions
Compare Objects
- Define a function, `compareCities`, that accepts two objects as arguments.

compareCities({ name: 'Dresden' }, { name: 'Dresden' }) // -> true
compareCities({ name: 'Raleigh' }, { name: 'Raleigh', income_pc: 1200000 }) // -> false
*/
function compareCities(c1, c2) {
    // Add your code here
    // console.log("c1: " + c1);
    // console.log("c2: " + c2);

    const cKeys1 = Object.keys(c1);
    const cKeys2 = Object.keys(c2);

    if (c1.cKeys1 === c2.cKeys2) {
        return true;
    }

    if (cKeys1.length !== cKeys2.length) {
        return false;
    }

    for (let key in c1) {
        // console.log("c1 key: " + key);
        // console.log("c1[key]: " + c1[key]);

        for (let key in c2) {
            // console.log("c2 key: " + key);
            // console.log("c2[key]: " + c2[key]);

            if (c1[key] === c2[key]) {
                // console.log("c1 === c2");
                return true;
            }
            // else {
            //     console.log("lol c1 !== c2");
            //     return false;
            // }
        }
    }
    return false;
}

//uncomment next lines to console log results
console.log(compareCities({}, {}));
console.log(compareCities({ name: 'San Jose' }, { name: 'San Jose' }));
console.log(compareCities({ name: 'San Jose' }, { otherkey: 'San Jose' }));

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = {
        compareCities,
    };
}
