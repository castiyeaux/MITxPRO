// Step 1: use slice to find elements in an array
    /*
    slice(): Copies a given section of an array and returns a new array containing that copy. *It does not change the original array.*
    givenArray.slice(from, until);
    from: Slice givenArray starting at this element index.
    until: Slice givenArray *up to but not including* this element index.
    */
function sliceElements(givenArray) {
    //TODO: return last 3 elements of givenArray
    let length = givenArray.length;
    return givenArray.slice(length - 3, length);
    // return givenArray.slice(-3);
        // Shorthand; Would also work
}

// Step 2: use splice to find elements in an array
    /*
    splice(): *Changes the original array* by removing or replacing elements from it.
    Splice takes at least one argument, but can include more optional arguments:
        -The first argument is the starting index where you want to start removing items.
        -The second argument is the number of elements you want to remove.
        -The third (optional) argument is any new elements that would replace other elements in the array. Splice returns an array with the removed elements.
    givenArray.splice(index, numberOfElementsToRemove, optionalElementToInsert1, optionalElementToInsert2, ...optionalElementToInsertN);
    index: The index is the starting point of where to remove elements.
    numberOfElementsToRemove: This is the number of elements to remove. If left empty, every element starting from the given index (the first argument) will be removed from the array.
    optionalElementsToInsert: When defined, these elements will be inserted into the array at the specified index in the second argument.
        -Example: givenArray(1, 2, "h", "i").
        Add elements to the array without removing any other elements:
    -Set your count (the second argument) to zero
    givenArray.splice(2, 0, "x", "y");
    Replace elements:
        -Pass the index number of where you want to start replacing elements along with any new elements as additional parameters to the method.
        -Can also replace elements with more than one element by adding extra arguments with the elements you want to insert.
    givenArray.splice(indexToStartReplacing, numberOfElementsToReplace, elementToAdd1, elementToAdd2, ...elementToAddN);
    */
function spliceElements(givenArray, element1, element2) {
    //TODO: remove the last element of givenArray and add element1 and element2 at that position
    givenArray.splice(givenArray.length - 1, 1, element1, element2);
        // Returning Line 30 would return the new array created with the removed element(s): [5]
    return givenArray;
}

// Step 3: use splice to find elements in an array
    /*
    split(): Used for strings (splice() and slice() are used for arrays). It divides a string into substrings and returns them in an array.
    givenString.split(separator, limit);
    separator: Describes *how to split* a string, by defining on what to split the string. This can be done, for example, on every comma, space, special character.
    limit: Defines the number of splits.
    Examples:
    -givenString.split(" ");
        -Splits givenString on every empty space
    -givenString.split("");
        -Splits givenString on every character
    -givenString.split(" ", 3);
        -Splits givenString on every space AND returns only the first three elements in the resulting array
    */
function splitElements(givenString) {
    //TODO: convert givenString into an array of words
    return givenString.split(" ");
}

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5]));
    // should return ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], "JavaScript"]));
    // should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101));
    // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";
console.log(splitElements(str));
    // should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = { sliceElements, spliceElements, splitElements };
}
