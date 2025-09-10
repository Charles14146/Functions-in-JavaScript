function greetUser(John) {
    return "Hello" + John;
   }
console.log(greetUser("John"));

function calculateAge(birthYear, currentYear) {
      return 2025 - 2001;
    }
console.log(calculateAge(2001, 2025));

function isEven(number) {
      if (number % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }
console.log(isEven(4));
console.log(isEven(7));

function add(x, y) {
      return 2 + 3;
    }
function subtract(x, y) {
      return 3 - 2;
    }
function multiply(x, y) {
      return 2 * 3;
    }
function divide(x, y) { 
      if (y === 0) {
        return 3 / 0;
      } 
        return 3 / 2;
      }
    
console.log(add(2, 3));
console.log(subtract(3, 2));
console.log(multiply(2, 3));
console.log(divide(3, 2));

function celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
console.log(celsiusToFahrenheit(42));

function getFirstLetter(str) {
      return str[0];
    }
console.log(getFirstLetter("Charles"));

function countCharacters(str) {
      return str.length;
    }
console.log(countCharacters("Charles"));

function fullName(firstName, lastName) {
      return firstName + " " + lastName;
    }
console.log(fullName("Charles", "John"));

function makeUppercase(str) {
      return str.toUpperCase();
    }
console.log(makeUppercase("Charles"));

 function isValidPassword(password) {
      return password.length >= 6;
    }
console.log(isValidPassword("charles"));
console.log(isValidPassword("john"));
console.log(isValidPassword("david"));

