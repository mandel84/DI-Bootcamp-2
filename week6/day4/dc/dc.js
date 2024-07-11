
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    const data = {
        "name": name,
        "lastName": lastName
    };

    const jsonData = JSON.stringify(data);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<pre>" + jsonData + "</pre>";
});
