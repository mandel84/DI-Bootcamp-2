//ex1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    //ex2
    const resolveAfter4Seconds = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("success");
          }, 4000);
        });
      };
      
      resolveAfter4Seconds()
        .then(result => console.log(result))
        .catch(error => console.log(error));


        //ex3
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");
resolvedPromise
  .then(result => console.log(result))  
  .catch(error => console.log(error));

rejectedPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));  



      
  