let books = 10;
let i = 0;

console.log("i: " + i);

i = countUp(i);
console.log("i: " + i);

i = countDown(i);
console.log("i: " + i);

function countUp(counter) {
    if (counter < books) {
        return counter += 1;
    }
}

function countDown(counter) {
    if (counter < books) {
        return counter -= 1;
    }
}

// ---- Loop Over Array and Add To Objects
let contacts = [
    {name: "amy", email: "amy@mit.edu", course: "web dev"},
    {name: "frank", email: "frank@mit.edu", course: "web dev"},
    {name: "anne", email: "anne@mit.edu", course: "web dev"}
];

// 1. Change the course that Anne is taking to "frontend dev"
// 2. Add a new contact to contacts by using contacts[3] = ???

changeCourse("anne", "frontend dev");
addContact("andrea", "andrea@mit.edu", "frontend dev");
console.log(contacts);

function changeCourse(name, courseName
    ) {
    for(let index in contacts) {
        for(let key in contacts[index]) {
            if(contacts[index][key] === name) {
                return contacts[index].course = courseName
                ;
            }
        }
    }
    return "changeCourse didn't work";
}

function addContact(name, email, course) {
    let contactsLength = contacts.length;
        // Not using "- 1" at end because I want to push to end of array AKA the next available index AKA actually contacts.length
    let newContact = {
        name: name,
        email: email,
        course: course
    };
    return contacts[contactsLength] = newContact;
}