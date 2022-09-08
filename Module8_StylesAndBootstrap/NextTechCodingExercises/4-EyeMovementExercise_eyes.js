const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    // Given - for one eye
    // balls[0].style.left = x;
    // balls[0].style.top = y;
    // balls[0].transform = 'translate(-' + x + ',-' + y + ')';

    // For second eye
    // balls[1].style.left = x;
    // balls[1].style.top = y;
    // balls[1].transform = 'translate(-' + x + ',-' + y + ')';

    // For any amount of eyes
    for(let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ", -" + y + ")";
    }
};