let books = 10;
let i = 0;

countUp(i);
countDown(i);

function countUp(i) {
    if (i < books) {
        i++;
    }
}

function countDown(i) {
    if (i < books) {
        i--;
    }
}