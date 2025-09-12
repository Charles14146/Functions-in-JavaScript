function findLargestNumber(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([6, 4, 5, 10, 11]));

function reverseString (text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
  }
  return reversed;
} 
console.log(reverseString("Charles"));
console.log(reverseString("John"));

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  }
  else if (score >= 80 && score <= 89) {
    return "B";
  }
  else if (score >= 70 && score <= 79) {
    return "C";
  }
  else if (score >= 60 && score <= 69) {
    return "D";
  }
  else {
    return "F";
  }
}
console.log(getGrade(93));
console.log(getGrade(81));
console.log(getGrade(77));
console.log(getGrade(85));
console.log(getGrade(44));
console.log(getGrade(65));

function countWords(sentence) {
  let cleanSentence = sentence.trim();

  let words = cleanSentence.split(" ");

  let filteredWords = words.filter(word => word !== "");

  return filteredWords.length;
}
console.log(countWords("Hello world"));
console.log(countWords("I Love Programming In JavaScript"));

function checkGuess(guess,target) {
  if (guess > target) {
    return "Too high";
  }
  else if (guess < target) {
    return "Too low";
  }
  else {
    return "Correct!";
  }
}
console.log(checkGuess(50, 44));
console.log(checkGuess(32, 56));
console.log(checkGuess(76, 13));
console.log(checkGuess(50, 50));

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([10, 20, 30, 40, 50]));

function isValidEmail(email) {
  let hasAt = email.includes("@");
  let hasDot = email.includes(".");
  if (hasAt && hasDot) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidEmail("john@gmail.com"));
console.log(isValidEmail("johngmail.com"));
console.log(isValidEmail("test@site.org"));

function calculateTotal(prices, taxRate) {
  let subtotal = 0;
  for (let i = 0; i < prices.length; i++) {
    subtotal = subtotal + prices[i];
  }
  let tax = subtotal * taxRate;
  let total = subtotal + tax;
  return total;
}
console.log(calculateTotal([10, 20, 5],0.08));
console.log(calculateTotal([15, 25], 0.10));

function countVowels(word) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    if (vowels.includes(letter)) {
      count = count + 1;
    }
  }

  return count;
}
console.log(countVowels("hello"));
console.log(countVowels("programming"));

function isPalindrome(word) {
  let lowerWord = word.toLowerCase();
  let reversed = "";
  for (let i = lowerWord.length - 1; i >= 0; i--) {
    reversed = reversed + lowerWord[i];
  }
  if (lowerWord === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("Level"));
console.log(isPalindrome("Peter"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("John"));
console.log(isPalindrome("Madam"));

function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}
console.log(fizzBuzz(10));
console.log(fizzBuzz(15));
console.log(fizzBuzz(20));