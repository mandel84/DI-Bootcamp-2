const containerDiv = document.getElementById('container');
console.log(containerDiv);
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';
lists[1].children[1].remove();
lists.forEach(list => {
    list.children[0].textContent = 'YourName'; // Replace 'YourName' with your actual name
});
lists.forEach(list => {
    list.classList.add('student_list');
});
lists[0].classList.add('university', 'attendance');
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';
const lastLi = lists[1].children[lists[1].children.length - 1];
if (lastLi.textContent === 'Dan') {
    lastLi.style.display = 'none';
}
const richardLi = Array.from(lists[0].children).find(li => li.textContent === 'Richard');
if (richardLi) {
    richardLi.style.border = '1px solid black';
}
document.body.style.fontSize = '16px';
if (containerDiv.style.backgroundColor === 'lightblue') {
    const users = Array.from(lists[0].children).map(li => li.textContent).join(' and ');
    alert(`Hello ${users}`);
}
