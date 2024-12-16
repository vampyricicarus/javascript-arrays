let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape'); 

let removedFruit = fruits.pop();
console.log(fruits);
console.log(removedFruit);

let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log(numbers); 

let doubledNumbers = numbers.map(num => num * 2);  
console.log(doubledNumbers);

let oddNumbers = numbers.filter(num => num % 2 !== 0);  
console.log(oddNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);  
console.log(sum);

let message = "Hello, World!";

let lengthOfMessage = message.length;
console.log(lengthOfMessage); 

let text = "Hello, World!";

let upperCaseText = text.toUpperCase();
console.log(upperCaseText); 

let lowerCaseText = text.toLowerCase();
console.log(lowerCaseText);

let sentence = "The quick brown fox jumps over the lazy dog";

let extractedSubstring = sentence.substring(4, 9);  
console.log(extractedSubstring);

let newSentence = "The quick brown fox";

let wordsArray = newSentence.split(" ");
console.log(wordsArray);

