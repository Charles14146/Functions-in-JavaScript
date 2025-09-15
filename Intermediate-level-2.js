function processStudents(students) {
  const passed = students.filter(student => student.grade >= 70);
  passed.sort((a, b) => b.grade - a.grade);
  return passed;
}
const students = [
  { name: "Alice", grade: 85},
  { name: "Bob", grade: 65},
  { name: "Charlie", grade: 92},
  { name: "Diana", grade: 78},
  { name: "Eve", grade: 45}
];

console.log(processStudents(students));

function updateInventory(inventory, sales) {
  for (let sale of sales) {
    const item = sale.item;
    const quantity = sale.quantity;
    if (inventory[item] !== undefined) {
      inventory[item] -= quantity;
      if (inventory[item] < 0) {
        inventory[item] = 0;
      }
    }
  }
  return inventory;
}

const inventory = { apples: 50, bananas: 30, oranges: 25 };
const sales = [
  { item: "apples", quantity: 5},
  { item: "bananas", quantity: 8 },
  { item: "oranges", quantity: 3},
  { item: "apples", quantity: 2}
];

console.log(updateInventory(inventory, sales));


function analyzeText(text) {
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  const characterCount = text.replace(/\s+/g, "").length;
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  const wordFrequency = {};
  for (let word of words) {
    const lowerWord = word.toLowerCase();
    wordFrequency[lowerWord] = (wordFrequency[lowerWord] || 0) + 1;
  }
  return {
    wordCount,
    characterCount,
    longestWord,
    wordFrequency
  };
}
const text = "Hello world hello everyone in this world";
console.log(analyzeText(text));


function calculateCartTotal(cart, discounts) {
  let total =0;
  let totalQuantity = 0;
  for (let item of cart) {
    let { name, price, quantity } = item;
    if (discounts.percentage && discounts.percentage[name]) {
      let discountRate = discounts.percentage[name] / 100;
      price = price - (price  * discountRate);
    }
    if (discounts.buy2get1 && discounts.buy2get1.includes(name)) {
      let freeItems = Math.floor(quantity / 3);
      quantity = quantity - freeItems;
    }
    total += price * quantity;
    totalQuantity += item.quantity;
  }
  if (discounts.bulk && totalQuantity > discounts.bulk.threshold) {
    let bulkRate = discounts.bulk.discount / 100;
    total = total - (total * bulkRate);
  }
  return total;
}
const cart = [
  { name: "laptop", price: 1000, quantity: 1},
  { name: "mouse", price: 50, quantity: 3},
  { name: "keyboard", price: 100, quantity: 2}
];
const discounts = {
  percentage: { laptop: 10 },
  buy2get1: ["mouse"],
  bulk: { threshold: 5, discount: 5 }
};
console.log(calculateCartTotal(cart, discounts));

function generatePattern(rows, type) {
  let result = [];
  if (type === "triangle") {
    for (let i = 1; i <= rows; i++) {
      let line = "";
    for (let j = 1; j <= i; j++) {
      line += j;
    }
    result.push(line);
    }
  }
  else if (type === "pyramid") {
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += j;
      }
      for (let j = i - 1; j >= 1; j--) {
        line ==j;
      }
      result.push(line);
    }
  }
  else if (type === "fibonacci") 
    { let a = 0, b = 1;
  let sequence = [a, b];
  for (let i = 2; i < rows * 2; i++) {
    let next = a + b;
    sequence.push(next);
    a = b;
    b = next;
  }
  for (let i = 1; i <= rows; i++) {
    result.push(sequence.slice(0, i).join(""));
  }
}
return result;
}
console.log("Triangle:");
console.log(generatePattern(4, "triangle").join("\n"));
console.log("\npyramid:");
console.log(generatePattern(4, "pyramid").join("\n"));
console.log("\nFibonacci:");
console.log(generatePattern(5, "fibonacci").join("\n"));

function validateForm(formData, rules) {
  const errors {};
  for (let field in rules) {
    const value = formData [field];
    const rule = rules[field];
    let fieldErrors = [];
    if (rule.required && (value === undefined || value === "")) {
      fieldErrors.push("This field is required.");
    }
    if (rule.minLength && typeof value === "string" && value.length < rule.mixLength)
      fieldErrors.push(`Must be at least ${rule.minLength} characters long.`);
    if (rule.maxLength && typeof value === "string" && value.length > rule.maxLength)
      fieldErrors.push(`Must be no more than ${rule.maxLength} characters long.`);
  }
  if (rule.type === "email" && typeof value === "string") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      fieldErrors.push("Invalid email format.");
    }
  }
  if (rule.type === "number") {
    if (typeof value !== "number") {
      if (typeofvalue !== "number") fieldErrors.push("Must be a number.");
    } else {
      if (rule.min !== undefined && value < rule.min) {
        fieldErrors.push(`Must be at least ${rule.min}.`);
      }
      if (rule.max !== undefined && value > rule.max) {
        fieldErrors.push(`Must be no more than ${rule.max}.`);
      }
    }
  }
  if (fieldErrors.length > 0) {
    errors[field] = fieldErrors;
  }
}
return Object.keys(errors).length === 0
? { valid: true }
: { valid: false, errors };
console.log(validataForm(formData, rules));

function processNumbers(numbers) {
  const uniqueNumbers = [...new Set(numbers)];
  const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
  const even = [];
  const odd = [];
  for (let num of sortedNumbers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  return {
    unique: uniqueNumbers,
    sorted: sortedNumbers,
    even,
    odd
  };
}
const numbers = [5, 2, 8, 3, 2, 5, 7, 8, 10];
console.log(processNumbers(numbers));

function scheduleTask(tasks) {
  return tasks.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority;
    }
    return new Date(a.dueDate) - new Date(b.dueDare);

  });
}
console.log(scheduleTask(tasks));

function findWordCombinations(letters, dictionary) {
  const results = [];
function countLetters(str) {
  const count = {};
  for (let ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }
  return count;
}
const letterCount = countLetters (letters);
for (let word of dictionary) {
  const wordCount = countLetters(word);
  let canForm = true;
  for (let ch in wordCount) {
    if (!letterCount [ch] || wordCount[ch] > letterCount[ch]) {
      canForm = false;
      break;
    }
  }
  of (canForm) {
    results.push(word);
  }
}
return results;
}
const letters = "ate";
const dictionary = ["tea", "eat", "ate", "cat", "hat", "tape"];
console.log(findWordCombinations(letters, dictionary));

function calculator(expression) {
  try {
    const cleanExpr = expression.replace(/\s+/g, "");
    if (!/^[0-9+\-*().]+$/.test(cleanExpr)) {
      throw new Error("invalid characters in expression");
    }
    const result = new Function(`return ${cleanExpr}`)();
    return result;
  } catch (error) {
    return "Error: Invalid expression";
  }
}
console.log(calculator("2+3*4"));
console.log(calculator("((2+3)*4"));
console.log(calculator("10/(5-3)"));
console.log(calculator("2+5*(3+2)"));

const database = {};
function createTable(name, columns) {
  if (database[name]) {
    throw new Error(`Table '${name}' already exists`);
  }
  database[name] = { columns, records: [] };
}
function insertRecors(tableName, record) {
  const table = database[tableName];
  if (!table) throw new Error(`Table '${tableName}' does not exist`);
  for (let col of table.columns) {
    if (!(col in record)) {
      throw new Error(`Missing value for column '${col}'`);
    }
  }
  table.records.push(record);
}
function selectRecords(tableName, filterFunction = () => true) {
  const table = database[tableName];
  if (!table) throw new Error(`Table '${tableName}' does not exist`);
  return table.records.filter(filterFunction);
}
function updateRecords(tableName, filterFunction, updateFunction) {
  const table = database[tableName];
  if (!table) throw new Error(`Table '${tableName}' does not exist`);
  table.records = table.records.map(record => {
    if (filterFunction(record)) {
      return updateFunction({...record });
    }
    return record;
  })
}
