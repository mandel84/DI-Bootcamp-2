setTimeout(function() {
    alert("Hello World");
}, 2000);

setTimeout(function() {
    var container = document.getElementById('container');
    var p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

var interval = setInterval(function() {
    var container = document.getElementById('container');
    var paragraphs = container.getElementsByTagName('p');
    var p = document.createElement('p');
    p.textContent = "Hello World";
    container.appendChild(p);

    if (paragraphs.length === 5) {
        clearInterval(interval); 
    }
}, 2000);

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    clearInterval(interval);
});
