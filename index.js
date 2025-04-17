console.log('---------Question 1---------');
var age = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(age[age.length - 1] - age[0]);
console.log('---------Question 1 b---------');
age.push(75);
console.log(age[age.length - 1] - age[0]);
console.log('---------Question 1 c---------');
var averageAge = 0
for(let i = 0; i <= age.length - 1; i++) {
    averageAge += age[i];
}averageAge = averageAge/age.length;
console.log(averageAge.toFixed(2));

console.log('---------Question 2---------');
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var averageNameLength = 0;
for(let x = 0; x <= names.length - 1; x++) {
    averageNameLength += names[x].length; 
}averageNameLength = averageNameLength/names.length;
console.log(averageNameLength.toFixed(2));
console.log('---------Question 2 b---------');
//redo and use a loop for this question
console.log(names.join(' '))
console.log('---------Question 3---------');
//using the length method I can find the last element of any array even after new objects have been added
console.log(names[names.length-1])
console.log('---------Question 4---------');
//The first elemenet of any array will always be 0 for the index since this is the start
console.log(names[0])
console.log('---------Question 5---------');
let nameLengths = []
for(let x = 0; x <= names.length - 1; x++) {
    nameLengths.push(names[x].length); 
}console.log(nameLengths)

console.log('---------Question 6---------');
var sumOfNames = 0
for(let i = 0; i<= names.length-1; i++) {
    sumOfNames += names[i].length
}console.log(sumOfNames)
console.log('---------Question 7---------');
function wordJoin(word, n) {
    let wordSum = [];
    for(let i = 1; i<=n; i++) {
        wordSum.push(word);
    }wordSum.join();
     return(wordSum);
}
console.log(wordJoin('Hello', 4));
console.log('---------Question 8---------');
function fullNameCreator(firstName, lastName) {
    var fullName = `${firstName} ${lastName}`;
    return (fullName);
}
console.log(fullNameCreator('Blob', 'Marley'));
console.log('---------Question 9---------');;
function arraySum(array) {
    let x = 0;
    let greaterThan100 = false
    for(let i = 0; i <= array.length - 1; i++) {
        x += array[i];
    }if(x > 100) {
        greaterThan100 = true;
    }return(greaterThan100);
}
console.log(arraySum([5, 9, 11, 17, 20, 34, 76]));
console.log('---------Question 10---------');
function arrayAverage(array) {
    let x = 0;
    for(let i = 0; i <= array.length-1; i++) {
        x += array[i];
    }return(x/array.length);
}
console.log(arrayAverage([4, 10, 8, 20, 32]));
console.log('---------Question 11---------');
function greaterArray(array1, array2) {
    let x = 0;
    let y = 0;
    for(let i =0; i <= array1.length-1; i++) {
        x += array1[i];
    }for(let z =0; z <= array2.length-1; z++) {
        y += array2[z];
    }x = x/array1.length;
    y = y/array2.length;
    if(y < x) {
        return('True');
    }else {
        return('False');
    }
}
console.log(greaterArray([5,3,4,15,16], [6,8,9]));
console.log('---------Question 12---------');
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside == true) {
        if(moneyInPocket >= 10.50) {
            return('True I will buy a drink today');
        }else if (moneyInPocket < 10.50) {
            return('False I wont buy a drink today');
        }
    }else {
        return('False I wont buy a drink today');
    }
}
console.log(willBuyDrink(true, 10.50));
console.log('---------Question 13---------');
var apple = {
    price: 0.5, 
    quantity: 10};
var pear = {
    price: 0.35,
    quantity: 15};
var orange = {
    price: 0.6, 
    quantity: 8};
let wallet = 10

console.log(`We have ${apple.quantity} Apples, ${pear.quantity} Pears, and ${orange.quantity} Oranges`);
function buyingFruit(apple, pear, orange) {
    let leftOverCash = 0;    
    let total1 = ((apple * this.apple.price)+(pear*this.pear.price)+(orange*this.orange.price));
    leftOverCash += wallet -total1
    if(apple>this.apple.quantity || pear>this.pear.quantity || orange>this.orange.quantity) {
        return('We do not have enough fruit for your order');
    }else if (total1 > wallet) {
        return("You do not have enough money!!")
    }
    else {
        console.log(`You bought ${apple} Apples, ${pear} Pears, and ${orange} Oranges`);
        return(`You have $${leftOverCash.toFixed(2)} left over.`);
    }

}
console.log(buyingFruit(7, 9, 5))