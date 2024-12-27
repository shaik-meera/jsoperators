// arithmetic operators
var a = parseInt(prompt("Enter the number1: "));
var b = parseInt(prompt("Enter the number2: "));
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

var c = parseInt(prompt("Enter the number1: "));
var d = parseInt(prompt("Enter the number2: "));
console.log(c**d)

// comparison operators

var a =parseInt(prompt("Enter the number1: "));;
var b = parseInt(prompt("Enter the number2: "));
console.log(a<b)
console.log(a>b)
console.log(a == b)
console.log(a===b)
console.log(a!==b)
console.log(a!=b)

// assignment operator
var a =parseInt(prompt("Enter the number: "));
a+=5;
console.log(a)


// fullname
var frstName = prompt("Enter the firstname: ");
var lastName = prompt("Enter the lastname: ");
var full = frstName + lastName;
console.log(full);
(full.length >=10) ? console.log("name is longer than 10") :  console.log("name is not greater than 10")

 
let age = parseFloat(prompt("Enter your age"));
(age>=18) ?console.log("eligible for vote") : console.log("not eglibile for vote")

// 3
var a = parseInt(prompt("Enter the number1: "));
var b = parseInt(prompt("Enter the number2: "));
console.log(a%b)
console.log(a**b)

let num1 = parseInt(prompt("Enter the number1: "));
let num2 = parseInt(prompt("Enter the number2: "));
console.log(num1>=num2)
console.log(num1<=num2)

const number = parseInt(prompt("Enter the number: "));
number & 1?console.log("odd"):console.log("even")
// const result = number % 2 == 0 ?"Even":"odd";
// console.log(result)

// 4
var a = parseInt(prompt("Enter the number1: "));
var b =parseInt(prompt("Enter the number2: "));
var c = parseInt(prompt("Enter the number3: "));
var d = a+b;
console.log(d);
console.log(d<c);
(d>50 && c<100) ? console.log(`${d} is greaterthan 50`):console.log(`${c} is lessthan 100`)


// 5
let firstName1 = prompt("Enter the firstname: ");
let lastName1 = prompt("Enter the lastname: ");
var number1 = 150;
console.log(firstName1+" "+lastName1)
console.log(number1)
console.log(typeof number1)
number1+=10;
console.log(number1)

// 6
let totalAmount = parseInt(prompt("Enter total amount:"))
let discount=(totalAmount>150)?totalAmount*0.85 : totalAmount
console.log(discount)

// 7
var sentence = prompt("Enter a sentence: ");
console.log(sentence);
var reverse = sentence.split('').reverse().join('');
var b = reverse.length > 15 ? "reversed sentence has more than 15 charcters" : "not having more than 15";
var originalorReverse = sentence.length>20 || reverse.lenght>20 ? "original or reverse sentence having length more than 20" : "not having";
console.log(b);
console.log(originalorReverse);

// 8
var number1 = parseFloat(prompt("Enter the number1: "));
var number2 = parseFloat(prompt("Enter the number2: "));
console.log(number1 & number2)
console.log(number1 | number2)
console.log(number1 ^ number2)

var number1 = parseFloat(prompt("Enter the number: "));
var shift = number1 << 2;
console.log(shift)
console.log(number1 < shift)
console.log(number1 <= shift)
console.log(number1 > shift)
console.log(number1 >= shift)
console.log(number1 == shift)
console.log(number1 === shift)
console.log(number1 != shift)
console.log(number1 !== shift)

// 9
var personAge = parseFloat(prompt("Enter the age:"));
var personSalary = parseFloat(prompt("Enter the salary: "));
var personCreditscore = parseFloat(prompt("Enter the credit score: "));
(personAge >= 21 && personSalary > 30000 || personCreditscore > 650)?console.log("Eligible for loan"):console.log("Not Eligible for loan");

// 10
var score1 = parseFloat(prompt("Enter the score1: "));
var score2 = parseFloat(prompt("Enter the score2: "));
var score3 = parseFloat(prompt("Enter the score3: "));
var totalScore = score1 + score2 + score3;
console.log(totalScore);
(totalScore >= 60) ? console.log("Passed") : console.log("Failed");
totalScore = totalScore < 60 ? totalScore+=5 :totalScore;
console.log(totalScore)