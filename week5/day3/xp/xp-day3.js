//ex1
function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % 23 === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log("Sum:", sum);
  }
  
  displayNumbersDivisible();

  function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log("Sum:", sum);
  }
  
  displayNumbersDivisible(); 
  displayNumbersDivisible(3); 
  displayNumbersDivisible(45);   


  //ex2
  const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

const shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--; 
        }
    }

    return total;
}

const totalBill = myBill();
console.log("Total Bill:", totalBill);


//ex3
function changeEnough(itemPrice, amountOfChange) {
    // Define the value of each type of coin
    const quartersValue = 0.25;
    const dimesValue = 0.10;
    const nickelsValue = 0.05;
    const penniesValue = 0.01;


    const totalChange = (amountOfChange[0] * quartersValue) +
                        (amountOfChange[1] * dimesValue) +
                        (amountOfChange[2] * nickelsValue) +
                        (amountOfChange[3] * penniesValue);

    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));;
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));


//ex4
function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost(destination) {
    const destinationCosts = {
        "London": 183,
        "Paris": 220
    };
    return destinationCosts[destination] || 300;
}

function rentalCarCost(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95; 
    }
    return totalCost;
}

function totalVacationCost() {
    let nights;
    do {
        nights = parseInt(prompt("How many nights would you like to stay in the hotel?"));
    } while (isNaN(nights) || nights <= 0);

    let destination;
    do {
        destination = prompt("What is your destination?");
    } while (!destination || !isNaN(destination));

    let days;
    do {
        days = parseInt(prompt("How many days would you like to rent the car?"));
    } while (isNaN(days) || days <= 0);

    const totalHotelCost = hotelCost(nights);
    const totalPlaneRideCost = planeRideCost(destination);
    const totalCarRentalCost = rentalCarCost(days);

    const totalCost = totalHotelCost + totalPlaneRideCost + totalCarRentalCost;

    console.log(`The car cost: $${totalCarRentalCost}, the hotel cost: $${totalHotelCost}, the plane tickets cost: $${totalPlaneRideCost}`);
    console.log(`Total vacation cost: $${totalCost}`);
}

totalVacationCost();


//ex5


//ex6




