console.log("EXERCISE 1:\n==========\n");

// Exercise 1 Section
function printOdds(count) {
  for (let i = 1; i <= Math.abs(count); i++) {
    if (i % 2 != 0) {
      console.log(i * Math.sign(count));
    }
  }
}

printOdds(-10);
printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(name, age) {
  
  let oldEnoughMsg = `Congrats, ${name}! You are permitted to drive!`;
  let tooYoungMsg = `Sorry, ${name}. You must wait ${16 - age} year(s) until you can drive.`;

  if (age < 16) {
    console.log(tooYoungMsg);
  } else {
    console.log(oldEnoughMsg);
  }
}

checkAge("John", 14);
checkAge("Jack", 16);
checkAge("Jerry", 24);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) {
  switch (true) {
    case x > 0 && y > 0:
      return "Quadrant 1";
    case x < 0 && y > 0:
      return "Quadrant 2";
    case x < 0 && y < 0:
      return "Quadrant 3";
    case x > 0 && y < 0:
      return "Quadrant 4";
    case x == 0 && y != 0:
      return "X Axis";
    case x != 0 && y == 0:
      return "Y Axis";
    default:
      return "Origin";
  }
}

console.log(checkQuadrant(11, 1));
console.log(checkQuadrant(-11, 1));
console.log(checkQuadrant(-1, -11));
console.log(checkQuadrant(1, -11));
console.log(checkQuadrant(0, -11));
console.log(checkQuadrant(11, 0));
console.log(checkQuadrant(0, 0));

console.log("EXERCISE 4:\n==========\n");
// Exercise 4
function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      return `Isosceles`;
    } else {
      return `Scalene`;
    } 
  }   else {
      return `Not a valid triangle`;
  }
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));



console.log("EXERCISE 5:\n==========\n");
// Exercise 5
function dataUsageFeedback(planLimit, day, usage) {
  let periodLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / periodLength;
  let remainingDays = periodLength - day;
  let remainingData = planLimit - usage;
  let projectedUsage = remainingDays * currentAvg;
  let statusMsg;

  if (currentAvg > projectedAvg) {
    statusMsg = "Exceeding";
  } else if (currentAvg < projectedAvg){
    statusMsg = "Under";
  } else {
    statusMsg = "At";
  }
  console.log(`${day} day(s) used, ${remainingData} day(s) remaining
    Average projected use: ${projectedAvg} GB/day.
    You are ${statusMsg} your average daily use (${currentAvg} GB/day),
    continuing this usage, you'll end up using ${planLimit - (usage + projectedUsage)}
     GB from your data limit.`);
}

dataUsageFeedback(50, 15, 25);