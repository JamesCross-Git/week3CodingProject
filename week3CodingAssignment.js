// Step 1)

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 

// ages.push(5); // dynamic test

console.log(ages[ages.length-1] - ages[ages.length - ages.length]);

var ageAvg = 0;
for (var i = 0; i < ages.length; i++) {
    ageAvg += ages[i];
}
console.log(ageAvg / ages.length);





// Step 2)

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let total = 0;
for (var i = 0; i < names.length; i++) {
    total += names[i].length;
    var nameAvg = total / names.length;
}
console.log(nameAvg);


for (var i = 0; i < names.length; i++) {
    console.log(names.join(' ')); 
}


names.length;


// Step 3) You can access the last element of an 
// array by using array.length-1

// Step 4) You can access the first element of an 
// array by using array[0]





// Step 5) **

let nameLengths = [];

    nameLengths = names.map(function(element) {
    return element.length;
});
console.log(nameLengths);





// Step 6) **

let sum = nameLengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})
console.log(sum);





// Step 7) 

function wordMultiply (word, n) {
    for (let i = 0; i <= n; i++);
    return word.repeat(n);
}
console.log(wordMultiply('Finally', 3));





// Step 8)

function createFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var fullName = createFullName ('James', 'Cross');
console.log(fullName);




