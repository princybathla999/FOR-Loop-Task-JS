console.log("Printing all number between -10 and 19...");
for(counter =-10;counter <= 19;counter++) {
    console.log(counter);
}

console.log("Printing all even numbers between 10 and 40...");
for (counter =-10;counter <= 40;counter++) {
    if (counter % 2 == 0) {
        console.log(counter);
    }
}

console.log("Printing all odd numbers between 300 and 333...");
for (counter =300;counter <= 333;counter++) {
   if (counter % 2 != 0) {
        console.log(counter);
    }
}

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50..");
for (counter =5;counter <= 50;counter++) {
    if ((counter % 5 == 0) && (counter % 3 == 0)) {
        console.log(counter);
    }
}