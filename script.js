var video = document.getElementById('video');
var seekbar = document.getElementById('myRange');   

// Move Range selector On Mouse Hover
var valueHover = 0;
function calcSliderPos(e) {
    return (e.offsetX / e.target.clientWidth) *  parseInt(e.target.getAttribute('max'),10);
}

document.getElementById('myRange').addEventListener('mousemove', function(e) {
    valueHover = calcSliderPos(e).toFixed(2);
    this.value = valueHover;
});

function updateFrame(){
    video.currentTime = video.duration * valueHover / 100;
};

setInterval(function () {
    updateFrame();
}, 100);
