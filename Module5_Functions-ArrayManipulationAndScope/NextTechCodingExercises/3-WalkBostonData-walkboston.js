// Show all employees and salaries
function renderPosts(city, element) {
    const people = city.data;
    const len = people.length;
    let htmlCode = "";

    for(let i = 0; i < len; i++) {
        htmlCode += '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>' + '</li>';
    }
    // TODO: add code to display the htmlCode variable inside a ul element with id="data"
    // Hint: you can use the element/container parameter's innerHTML property to insert Html tags
    element.innerHTML = "<ul id = \"data\">" + htmlCode + "</ul>";
}
// renderPosts(boston, document.getElementById("container"));


// Show people with top five highest salaries
function renderTopSalaries(city, element) {
    const people = city.data;
    let topSalaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
        /*
        Had to look at solution
        Kept messing with something like this inside the for loop:
        let sortedSalaries = people[i][11].sort(function(a, b) {
            return a - b;
        });
        */
    const len = topSalaries.length;
    let htmlCode = "";

    for(let i= 0; i < len; i++) {
        htmlCode += '<li class="top">' + '<h2>' + topSalaries[i][8] + '</h2>' + '<h3>' + topSalaries[i][11] + '</h3>' + '</li>';
    }
    element.innerHTML = "<ul id=\"topSalaries\">" + htmlCode + "</ul>";
}
// renderTopSalaries(boston , document.getElementById("container"));


// Show everyone who makes more than 200k
function renderTopEmployees(city, element) {
    const people = city.data;
    let topEmployees = people.filter((a) => a[11] > 200000);
        // Had to look at the solution for this one too, but I think it wasn't working because line 53 originally was calling topEmployees()
    const len = topEmployees.length;
    let htmlCode = "";

    for(let i = 0; i < len; i++) {
        htmlCode += '<li class="top">' + '<h2>' + topEmployees[i][8] + '</h2>' + '<h3>' + topEmployees[i][11] + '</h3>' + '</li>';
    }

    element.innerHTML = "<ul id=\"topEmployees\">" + htmlCode + "</ul>";
}
renderTopEmployees(boston, document.getElementById("container"));