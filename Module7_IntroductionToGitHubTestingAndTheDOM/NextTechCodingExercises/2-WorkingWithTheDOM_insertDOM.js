function addItem() {
    // TODO: add 'item' to the list of TODOs

    //Step 1: Identify the value of the myInput element.
    let inputValue = document.getElementById("myInput").value;
    if(inputValue === "") {
        return window.alert("Must enter to do item");
    }

    //Step 2: Create a text node containing that value.
    let textNode = document.createTextNode(inputValue);

    //Step 3: Create a new li element and append the text node to it.
    const li = document.createElement("li");
    li.appendChild(textNode);

    //Step 4: Append the li element to the existing myTODOs element.
    document.getElementById("myTODOs").appendChild(li);
}

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = addItem;
}