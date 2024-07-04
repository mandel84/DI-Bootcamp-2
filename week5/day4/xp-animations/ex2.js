function myMove() {
    var elem = document.getElementById("animate");
    var container = document.getElementById("container");
    var pos = 0;
    var id = setInterval(frame, 1); 

    function frame() {
        if (pos == container.clientWidth - elem.clientWidth) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}
