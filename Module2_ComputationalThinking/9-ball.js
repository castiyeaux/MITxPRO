var size = data.length;

// your work goes here
// -----------------------
var i = 0;
while(i < size) {
    var circle = data[i];
    create(circle.x, circle.y, circle.color);
    i++;
}