/**ex1
 
 * 1- assignment to const variable
 * 2-first the funcThree read the global variable, and after the funcTwo, now the funcThree will console log the new value
 * 3-funcFive recongnize funcFour and print it 'hello'
 * 4-continues to display 'test'
 * 5-nothing change
 * /*/

//ex2
// const winBattle = () => true;
// let experiencePoints = winBattle() ? 10: 1;
// console.log(experiencePoints);

//ex3
// const checking = (param) => 
// typeof param === 'string' ? true:false;

// const output = checking('Jorge')
// console.log(output);
// console.log(checking(1,2,3,4));

//ex4
// const sum = (a,b) => a+b;
// console.log(sum(5,3))

//ex5
// function kgToGr(value){
//    let result = value * 1000
//     return result  
// }
// let result1 = kgToGr(2)
// console.log(result1);

// const modification = function (value) {
//     return value * 1000
// }   
// console.log((modification(5 )));
//* function expression can be invoked using the variable name *//

// const modified = value => value *1000;
// console.log(modified(7));

//ex6
// (function (numberOfChildren, partnerName, geographicLocation, jobTitle) {
//     let sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
//     let sentenceElement = document.createElement('p');
//     sentenceElement.textContent = sentence;
//     document.body.appendChild(sentenceElement);
// }) (3, 'Emma', 'New York', 'Software Engineer');

//ex7
(function(name) {
    const userInfoDiv = document.querySelector('.navbar .user-info');

    const img = document.createElement('img');
    img.src = 'week6/day1/20171020_080807.jpg';
    img.alt = 'Profile Picture';

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `Welcome, ${name}`;

    userInfoDiv.appendChild(img);
    userInfoDiv.appendChild(nameDiv);
})('John');


//ex8

// function makeJuice(size) {
//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
//     }

//     addIngredients('apple', 'orange', 'banana');
// }

// makeJuice('medium');

// function makeJuice(size) {
//     let ingredients = [];

//     function addIngredients(ingredient1, ingredient2, ingredient3) {
//         ingredients.push(ingredient1, ingredient2, ingredient3);
//     }
//     function displayJuice() {
//         console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}`);
//     }

//     addIngredients('apple', 'orange', 'banana');
//     addIngredients('strawberry', 'kiwi', 'pineapple');

//     displayJuice();
// }

// makeJuice('large');

//

