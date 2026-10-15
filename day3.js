

// 1. square - arrow function, implicit return
const square = (n) => n * n;
console.log("--- 1. square ---");
console.log(square(4));
console.log(square(-3));
console.log(square(0)); // edge case

// 2. isEven - returns a boolean
function isEven(n) {
  return n % 2 === 0;
}
console.log("\n--- 2. isEven ---");
console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(0));  // edge case
console.log(isEven(-3)); // edge case

// 3. Temperature conversion
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}
console.log("\n--- 3. temperature ---");
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(-40)); // edge case
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(212));
console.log(fahrenheitToCelsius(-40)); // edge case

// 4. formatPrice - default currency RWF
function formatPrice(amount, currency = "RWF") {
  return `${amount.toLocaleString("en-US")} ${currency}`;
}
console.log("\n--- 4. formatPrice ---");
console.log(formatPrice(5000));
console.log(formatPrice(1250000));
console.log(formatPrice(49.99, "USD"));
console.log(formatPrice(0)); // edge case

// 5. getGrade - guard clause for invalid input
function getGrade(score) {
  if (typeof score !== "number" || Number.isNaN(score) || score < 0 || score > 100) {
    return "Invalid score (must be a number from 0 to 100)";
  }
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}
console.log("\n--- 5. getGrade ---");
console.log(getGrade(85));
console.log(getGrade(64));
console.log(getGrade(49));
console.log(getGrade(80));    // edge case
console.log(getGrade(101));   // edge case
console.log(getGrade("abc")); // edge case

// 6. max - loop, no Math.max
function max(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let biggest = numbers[0];
  for (const n of numbers) {
    if (n > biggest) {
      biggest = n;
    }
  }
  return biggest;
}
console.log("\n--- 6. max ---");
console.log(max(3, 9, 2));
console.log(max(-5, -1, -20)); // edge case
console.log(max(42));          // edge case
console.log(max());            // edge case

// 7. capitalize
function capitalize(word) {
  if (word.length === 0) {
    return word;
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log("\n--- 7. capitalize ---");
console.log(capitalize("kigali"));
console.log(capitalize("RWANDA"));
console.log(capitalize("a"));  // edge case
console.log(capitalize(""));   // edge case

// 8. countVowels - case-insensitive
function countVowels(text) {
  const vowels = "aeiou";
  let count = 0;
  for (const letter of text.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
console.log("\n--- 8. countVowels ---");
console.log(countVowels("Kigali"));
console.log(countVowels("JAVASCRIPT")); // edge case
console.log(countVowels("rhythm"));     // edge case
console.log(countVowels(""));           // edge case

// 9. isPalindrome
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log("\n--- 9. isPalindrome ---");
console.log(isPalindrome("racecar"));
console.log(isPalindrome("kigali"));
console.log(isPalindrome("Level")); // edge case
console.log(isPalindrome(""));      // edge case

// 10. repeatAction - callback gets the round number
function repeatAction(times, callback) {
  for (let round = 1; round <= times; round++) {
    callback(round);
  }
}
console.log("\n--- 10. repeatAction ---");
repeatAction(3, (round) => console.log(`Round ${round}`));
repeatAction(2, (round) => console.log(`Squared: ${square(round)}`));
repeatAction(0, (round) => console.log(`Never runs ${round}`)); // edge case
console.log("done");

// 11. createCounter - closure keeps value private
function createCounter(start = 0) {
  let value = start;
  return {
    increment: () => {
      value++;
      return value;
    },
    decrement: () => {
      value--;
      return value;
    },
    getValue: () => value,
  };
}
console.log("\n--- 11. createCounter ---");
const counterA = createCounter();
counterA.increment();
counterA.increment();
console.log(counterA.getValue());
counterA.decrement();
console.log(counterA.getValue());
const counterB = createCounter(10);
counterB.increment();
console.log(counterB.getValue());
console.log(counterA.getValue());   // edge case: counters are independent
const counterC = createCounter();
counterC.decrement();
console.log(counterC.getValue());   // edge case: below zero
console.log(counterA.value);        // edge case: private, prints undefined

// 12. makeDiscount - returns a function
function makeDiscount(percent) {
  return (price) => price - (price * percent) / 100;
}
console.log("\n--- 12. makeDiscount ---");
const tenOff = makeDiscount(10);
const halfPrice = makeDiscount(50);
console.log(tenOff(5000));
console.log(halfPrice(5000));
console.log(makeDiscount(0)(5000));   // edge case
console.log(makeDiscount(100)(5000)); // edge case

// Scope puzzle
// Predictions: inner 3, function 2, global 1
// Each let x lives only inside its own { }, so the innermost one wins.
console.log("\n--- Scope puzzle ---");
let x = 1;
function a() {
  let x = 2;

  if (true) {
    let x = 3;
    console.log("inner", x);
  }
  console.log("function", x);
}
a();
console.log("global", x);
