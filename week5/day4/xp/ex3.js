let allBoldItems;
function getBoldItems() {
    const paragraph = document.querySelector('p');
    allBoldItems = paragraph.querySelectorAll('strong');
}

function highlight() {
    if (!allBoldItems) {
        getBoldItems(); 
    }
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

function returnItemsToDefault() {
    if (!allBoldItems) {
        getBoldItems(); 
    }
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
