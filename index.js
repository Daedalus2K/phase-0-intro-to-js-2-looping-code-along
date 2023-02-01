// Code your solutions in this file
/*Basic premise of "For" loop:
for([initialization]; [condition];[iteration]){
    [loop body]
}
also: for (let index = 0; index < array.length; index++) {
    const element = array[index];   
}
*/

/*for (let age = 30; age < 40; age++) {
    console.log(`I'm , ${age} years old. Happy birthday to me!`)
    ;
}
*/

/*
//For with Arrays
const gifts = ["teddy bear", "drone" ,"doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts);
*/


/*Note: Recall the difference between logging and returning values from a function. 
When we log information we are simply outputting text to a terminal or console. 
When we return data from a function we will be able to reference and use that information
elsewhere because the data is being passed out of the function.
*/

/*const gifts = ["teddy bear", "drone" ,"doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }
    return gifts;
}
wrapGifts(gifts)
*/

const friends = ["Guadalupe", "Ollie", "Aki"]

function writeCards(friends) {
    let  basket = []
    for (let list = 0; list < friends.length; list++) {
        basket.push(`Thank you, ${friends[list]}, for the wonderful surprise gift!`)
    }
    return basket;
    
}//console.log(writeCards(friends)) 

/*
How "while" works:
while ([condition]) {
  [loop body]
}*/


function countDown() {
    let currentNumber = 10
    while (currentNumber > -1) {
        console.log(currentNumber--);
     
    }
    
}// console.log(countDown())


//Experiment:
/*
function countDown() {
    let slotMachine = []
    let currentNumber = 10
    while (currentNumber > -1) {
        slotMachine.push(currentNumber--);
    } return slotMachine
    
} console.log(countDown())
*/