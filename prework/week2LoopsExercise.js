// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("Excercise 1\n");
let num = 1;
while(num <= 5) {
  console.log(num);
  num++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("\nExcercise 2\n");
let x = 1;
do{
  console.log(x);
  x++;
} while(x <= 5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log("\nExcercise 3\n");
for(let i = 1; i <= 5; i++) {
  console.log(i);
}

// Exercise 4. Now we want a loop that prints the integers 
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log("\nExcercise 4\n");
for(let count = 10; count >= 1; count--) {
  console.log(count);
}

console.log("\n");
let counter = 10;
while(counter >= 1) {
  console.log(counter);
  counter--;
}

console.log("\n");
let countDown = 10;
do{
  console.log(countDown);
  countDown--;
} while(countDown >= 1);


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this 
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log("\nExcercise 5\n");
for(let count = 7; count <= 27; count++) {
  console.log(count);
}

console.log("\n");
let counter7 = 7;
while(counter7 <= 27) {
  console.log(counter7);
  counter7++;
}

console.log("\n");
let counter7DoWhile = 7;
do{
  console.log(counter7DoWhile);
  counter7DoWhile++;
} while(counter7DoWhile <= 27);

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc. 
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log("\nExcercise 6\n");
for(let count = 0; count <= 100; count += 10) {
  console.log(count);
}

console.log("\n");
let counter10While = 0;
while(counter10While <= 100) {
  console.log(counter10While);
  counter10While += 10;
}

console.log("\n");
let counter10DoWhile = 0;
do{
  console.log(counter10DoWhile);
  counter10DoWhile += 10;
} while(counter10DoWhile <= 100);

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will 
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// The condition 'counterFour < 2' will always be true. The loop will continue running for infinite times.
console.log("\nExcercise 7\n");
let counterFour = 1;
while (counterFour >= -100) {
    console.log('HELP ME!')
    counterFour--;
}


// Exercise 8. Make a variable that contains your favorite integer. Write a loop 
// (your choice which type) that prints the integers from 0 to that number.
console.log("\nExcercise 8\n");
let favoriteNumber = 11;
for(let i = 0; i <= favoriteNumber; i++) {
  console.log(i);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's 
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
console.log("\nExcercise 9\n");
let myFavoriteNumber = 11;
for(let i = 0; i <= 100; i++) {
   if(i === myFavoriteNumber){
    console.log(`${i} my favorite number !`);
  } else {
    console.log(`${i} not my favorite number`);
  } 
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or 
// doing some research and write down your thoughts in a comment below:
/* 
For and While loops are entry-controlled loops. Both are quite similar. 
But For loop is preferable when you exactly know how many iterations of the loop are required.
And While loop is preferable when you do not know how many iterations of the loop will be needed.
Do While loop is used when you need to execute a block of statement 
atleast once before checking the conditions. It also requires more execution time than a while loop.
*/

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
console.log("\nExcercise 11\n");
for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
      console.log("inside", insideCounter);
  }
  console.log("***********************************")
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//Easy

// Email your file to us or commit your file to GitHub and email us a link.
