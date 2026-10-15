
// ---------------------------------------------------------------
// 1. Even or odd
// ---------------------------------------------------------------
// PSEUDOCODE:
//   set number
//   if number divided by 2 leaves remainder 0 -> print "even"
//   otherwise -> print "odd"
console.log("--- 1. Even or odd ---");
const number = 7;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ---------------------------------------------------------------
// 2. Grade calculator (with guard clause)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   function getGrade(score)
//     if score < 0 or score > 100 -> return "Invalid score" (guard clause)
//     if score >= 80 -> "A"
//     else if score >= 70 -> "B"
//     else if score >= 60 -> "C"
//     else if score >= 50 -> "D"
//     else -> "F"
console.log("\n--- 2. Grade calculator ---");
function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Invalid score (must be 0-100)";
  }
  if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}
for (const s of [95, 80, 75, 62, 50, 30, -5, 101]) {
  console.log(`${s} -> ${getGrade(s)}`);
}

// ---------------------------------------------------------------
// 3. Ticket price
// ---------------------------------------------------------------
// PSEUDOCODE:
//   function ticketPrice(age, isStudent)
//     if age > 65 -> 0 (free; checked first so it wins over everything)
//     else if age < 12 -> 2000
//     else if isStudent -> 3000
//     else -> 5000
console.log("\n--- 3. Ticket price ---");
function ticketPrice(age, isStudent) {
  if (age > 65) {
    return 0;
  } else if (age < 12) {
    return 2000;
  } else if (isStudent) {
    return 3000;
  } else {
    return 5000;
  }
}
console.log("Age 8:", ticketPrice(8, false), "RWF");
console.log("Age 20, student:", ticketPrice(20, true), "RWF");
console.log("Age 30, adult:", ticketPrice(30, false), "RWF");
console.log("Age 70:", ticketPrice(70, false), "RWF");

// ---------------------------------------------------------------
// 4. Day planner (switch)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   function planDay(day)
//     switch on day
//       case Mon..Fri -> print what happens in class, then break
//       case Sat, Sun -> print "No class"
//       default -> print "Unknown day"
console.log("\n--- 4. Day planner ---");
function planDay(day) {
  switch (day) {
    case "Mon":
      console.log("Mon: Onboarding and tooling setup");
      break;
    case "Tue":
      console.log("Tue: JavaScript fundamentals");
      break;
    case "Wed":
      console.log("Wed: Git and GitHub practice");
      break;
    case "Thu":
      console.log("Thu: Problem solving and logic");
      break;
    case "Fri":
      console.log("Fri: Project work and review");
      break;
    case "Sat":
    case "Sun":
      console.log(`${day}: No class`);
      break;
    default:
      console.log(`${day}: Unknown day`);
  }
}
for (const d of ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]) {
  planDay(d);
}

// ---------------------------------------------------------------
// 5. Countdown
// ---------------------------------------------------------------
// PSEUDOCODE:
//   for i from 10 down to 1
//     print i
//   print "Liftoff!"
console.log("\n--- 5. Countdown ---");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Liftoff!");

// ---------------------------------------------------------------
// 6. Sum and average (for...of)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   set numbers = [45, 78, 90, 62, 88]
//   set sum = 0
//   for each n of numbers -> sum = sum + n
//   average = sum / number of items
//   print sum and average
console.log("\n--- 6. Sum and average ---");
const marks = [45, 78, 90, 62, 88];
let sum = 0;
for (const n of marks) {
  sum += n;
}
const average = sum / marks.length;
console.log("Sum:", sum);
console.log("Average:", average);

// ---------------------------------------------------------------
// 7. Find the first number greater than 100 (break)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   set found = null
//   for each n of numbers
//     if n > 100 -> found = n, stop looping (break)
//   if found is not null -> print it, else print "none found"
console.log("\n--- 7. First number > 100 ---");
const values = [12, 45, 99, 130, 250, 7];
let found = null;
for (const n of values) {
  if (n > 100) {
    found = n;
    break;
  }
}
console.log(found !== null ? `First number > 100: ${found}` : "None found");

// ---------------------------------------------------------------
// 8. Skip negatives (continue)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   for each n of numbers
//     if n < 0 -> skip to the next item (continue)
//     print n
console.log("\n--- 8. Skip negatives ---");
const mixed = [5, -3, 8, -1, 0, 12, -9];
for (const n of mixed) {
  if (n < 0) {
    continue;
  }
  console.log(n);
}

// ---------------------------------------------------------------
// 9. Multiplication table (7 times table)
// ---------------------------------------------------------------
// PSEUDOCODE:
//   for i from 1 to 12
//     print "7 x i = (7 * i)"
console.log("\n--- 9. 7 times table ---");
for (let i = 1; i <= 12; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// ---------------------------------------------------------------
// 10. FizzBuzz, then the Kigali twist
// ---------------------------------------------------------------
// PSEUDOCODE (classic):
//   for i from 1 to 30
//     if i divisible by 3 AND 5 -> "FizzBuzz"   (most specific first!)
//     else if divisible by 3 -> "Fizz"
//     else if divisible by 5 -> "Buzz"
//     else -> i
console.log("\n--- 10a. FizzBuzz ---");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// PSEUDOCODE (changed version): numbers divisible by 7 print "Kigali"
//   for i from 1 to 30
//     if i divisible by 3 AND 5 -> "FizzBuzz"
//     else if divisible by 3 -> "Fizz"
//     else if divisible by 5 -> "Buzz"
//     else if divisible by 7 -> "Kigali"
//     else -> i
//   (Numbers like 21 and 35 hit Fizz/Buzz first because those checks come
//    earlier in the chain. Order decides the result.)
console.log("\n--- 10b. FizzBuzz with Kigali ---");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 === 0) {
    console.log("Kigali");
  } else {
    console.log(i);
  }
}

// ---------------------------------------------------------------
// Challenge: right-angled triangle of * with 5 rows
// ---------------------------------------------------------------
// PSEUDOCODE:
//   for row from 1 to 5
//     set line = ""
//     for col from 1 to row
//       line = line + "*"
//     print line
console.log("\n--- Challenge: triangle ---");
for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "*";
  }
  console.log(line);
}
