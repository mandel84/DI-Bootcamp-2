//ex1
// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift()

// people[2] = 'Jason'
// people.push('Jorge')
// const maryIndex = people.indexOf('Mary')
// const people2 = people.slice(1,4)
// const foo = people.indexOf('foo')//because the index is from left to right
// const last = people2[2]
// const lenght = people2.length//the lenght count without 0
// // console.log(people);
// // console.log(maryIndex);
// // console.log(people2);
// // console.log(last);
// // console.log(lenght);

// for (let x of people2  ){
//     console.log(x)
//     if (x === 'Devon')
//         break;
// }

//
//ex2
// const colors = ['blue','black','green','gray']
// const suffixes = ['st','nd','rd','th']
// const colorNumbers = colors.forEach((color,index)=>{
//     console.log(`My #${index+1} choice is ${color}`);
// })
// const indexes = colors.forEach((color,index)=>{
//     const suffix = suffixes[index] 
//     console.log(`My ${index +1}${suffix} choice is ${color}`); 
// })


//ex3
// const userNumber = prompt('Give me a number: ')
// const checking = typeof userNumber
// console.log(checking);
// let userInput;
// do {
//     userInput = prompt('Please, enter a number: ')
//     let number = parseFloat(userInput);
//     if(number < 10 && ! isNaN(number)){
//         console.log(`You entered: ${number}`);
//     } else{
//     console.log('Please, enter a valid number smaller than 10');
// }
// } while (userInput===null || parseFloat(userInput) <10);


//ex4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfFloors);

// const floo1And3 = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor
// console.log(floo1And3);
// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);
// const sarahAndDavid = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]
// if (sarahAndDavid > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);


//ex5
// const family = {
//     'family name': 'Wolfson',
//     'family members': 9,
//     'dogs':3
// }
// for (let x in family){
//     console.log(x);
   
// }
// for (let y in family)  {
//     console.log(family[y]);
// }


//ex6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }
//   let result = '';
// for (let key in details){
//     result +=key + ' ' + details[key] + ' ' ;

// }
// console.log(result);


//ex7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const society = names.map(name => name[0]).sort().join(' ')
// console.log(society);


//ex8

  
