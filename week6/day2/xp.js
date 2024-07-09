// //ex1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let clorosWhitSuffix = []
// colors.forEach((color,index) => {
//     clorosWhitSuffix.push(`${index+1}# choice is ${color}`);
// })
// console.log(clorosWhitSuffix.join(''));
// colors.includes('Violet') ? console.log('Yeah'):console.log('No...');

//ex2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// colors.forEach((color,index) => {
//    let newOrdinal = index === 0 ? ordinal[1]: index <3 ? ordinal[index +1]:ordinal[0]
//     console.log(`${index+1}${newOrdinal} choice is ${color}`);
// })

//ex3
//1- [bread,carrot,potato,chicken,apple,orange]
//2-[U,S,A]
//3undefined, undefined

//ex4
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents = []
// users.map((users)=> {
// welcomeStudents.push(`Hello ${users.firstName}`) })  
// console.log(welcomeStudents);   
// const fullStackResidents = []
// users.filter((user) =>{
//     if (user.role === 'Full Stack Resident')
//     fullStackResidents.push(`${user.firstName}`)})
// console.log(fullStackResidents);
// const lastName = users.filter(user => user.role === 'Full Stack Resident')
//                       .map(user => user.lastName)  
//                        console.log(lastName); 

//ex5
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// const str = epic.reduce((a,v) => a+' '+ v)
// console.log(str);

//ex6
// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];
// const result = students.filter(student => student.isPassed ).forEach(student => console.log(`Good job ${student.name}, you passed the couse in ${student.course}`) )
    