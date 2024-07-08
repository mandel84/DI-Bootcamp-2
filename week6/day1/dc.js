//dc
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach((cv)=>{
        console.log(cv);

    })
}
displayGroceries()

const cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    let shopping = groceries
    groceries.totalPrice = '35$'
    groceries.paid = false
    console.log(shopping);
}
// Yes, because the identity
//yes, the total in shopping will be 35
//yes, the same reason
cloneGroceries()