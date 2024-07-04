const form = document.getElementById('userForm');
console.log(form);
const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput);
console.log(lnameInput);

const fnameByName = document.querySelector('input[name="firstname"]');
const lnameByName = document.querySelector('input[name="lastname"]');
console.log(fnameByName);
console.log(lnameByName);

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const firstName = fnameInput.value.trim();
    const lastName = lnameInput.value.trim();

    if (firstName === '' || lastName === '') {
        alert('Please fill in both fields');
        return;
    }

    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = ''; 

    const li1 = document.createElement('li');
    li1.textContent = firstName;
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = lastName;
    ul.appendChild(li2);
});
