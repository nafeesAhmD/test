// <--Chapter 9 to 11 start-->

// Ques 01
// var userInp = prompt("Enter city");
// if(userInp === "karachi"){
//     document.write("Welcome to city of light")
// }else{
//     alert("No")
// }

// Ques 02
// var userInput = prompt("Enter Gender");
// if(userInput == "male"){
//     document.write("Good Morning Sir")
// }else if(userInput == "female"){
//     document.write("Good Morning Ma’am")
// }

// Ques 03
// var colorInput = prompt("Enter color");
// if(colorInput == "red"){
//     alert("Must Stop")
// }else if(colorInput == "yellow"){
//     alert("Ready to move")
// }else if(colorInput == "green"){
//     alert("Move now")
// }else{
//     alert("color not found")
// }

// Ques 04
// var inputFuel = prompt("Enter fuel in car")
// if(inputFuel > "0.25ltr"){
//     alert("okay done")
// }else if(inputFuel <  "0.25ltr"){
//     alert("Please refill the fuel in your car")
// } 

// Ques 05
// var a = 4;
// if (++a === 5){
// alert("a is true");
// }else {
//     alert("b is false")
// }

// var b = 82;
// if (b++ === 83){
// alert("b is true");
// }else{
//     alert("b is false")
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals " + totalCost);
// }

// if (true){
//     alert("True")
// }
// if(false){
//     alert("false")
// }


// if("car" <  "cat"){
//     alert("car is smaller than cat")
// }

// Ques 06
// var studentData = prompt("enter a percentage")
//  if(studentData > 100){
//     alert("max limit 100")
// }else if(studentData >= 80){
//    document.write("A-one")
// }
// else if(studentData >= 70){
//     alert("A")
//  }
// else if(studentData >= 60){
//     document.write("B")
// }
// else if(studentData >= 50){
//     alert("Fail")
// }

// else {
//     document.write("enter a correct parcentage")
// }


// Ques 07
// var secretNum = +prompt("guess the secret number")
// if(secretNum == 5){
//     alert("Bingo! Correct answer")

// }else{
//     alert("Close enough to the correct answer")
// }


// Ques 08
// var number = +(prompt("Enter a number:"));
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3.");
// } else {
//     alert(number +" is not divisible by 3.");
// }    


// Ques 09
// var number = prompt("Enter a number: ");
// if(number % 2 == 0) {
//     alert(number + " is even number.");
// }
// else {
//     alert(number + " is odd number.");
// }


// Ques 10
// var temp = prompt("Enter temperature");
// if(temp > 40){
//     document.write("It is too hot outside.");
// }else if(temp > 30){
//     document.write("The Weather today is Normal.");
// }else if(temp > 20){
//     document.write("Today’s Weather is cool.");
// }else if(temp > 10){
//     document.write("OMG! Today’s weather is so Cool.");
// }

// Ques 11
// var operator = prompt('Enter operator ( either +, -, * or / ): ');
// var number1 = +(prompt('Enter first number: '));
// var number2 = +(prompt('Enter second number: '));

// var result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// console.log(number1 + " "+ operator +" " + number2 +"="+ result);

// <--Ques End-->


// <--Chapter 12 to 13 start-->
// Ques 02
// var num1 = +(prompt("Enter the first integer:"));
// var num2 = +(prompt("Enter the second integer:"));

// if (num1 > num2) {
//      alert(num1 + " is larger than " + num2) ;
// } else if (num2 > num1) {
//      alert(num2 + " is larger than " + num1);
// } else {
//      alert("Both numbers are equal") ;
// }

// Ques 03

// var number = parseInt(prompt("Enter a number: "));

// if (number > 0) {
//     document.write("The number is positive");
// }

// else if (number == 0) {
//   document.write("The number is zero");
// }

// else {
//      document.write("The number is negative");
// }

// Ques 04
// var input = prompt("enter a character")
// if(input === 'a' || input === 'A'){
//     document.write("true")
// }else if(input === 'e' || input === 'E'){
//     document.write("true")
// }
// else if(input === 'e' || input === 'E'){
//     document.write("true")
// }
// else if(input === 'i' || input === 'I'){
//     document.write("true")
// }
// else if(input === 'o' || input === 'O'){
//     document.write("true")
// }
// else if(input === 'u' || input === 'U'){
//     document.write("true")
// }else{
//     document.write("false")
// }


// Ques 05
// var correctPass = "12345";
// var userPassword = prompt("enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password.");
// } else if (userPassword === correctPass) {
   
//     alert("Correct! the original password.");
// } else {
   
//     alert("Incorrect password.");
// }


// Ques 06
// var hour = prompt("enter hours");
// if (hour < 18) {
//     document.write("Good day");
// }
//  else {
//     document.write("Good evening")
// }


// Ques 07
// var time = prompt("enter the time")

// if(time >= 0 && time < 12){
//     console.log("Good Morning")
// }
// else if(time >= 12 && time < 17){
//     console.log("Good Afternoon")
// }
// else if(time >= 17 && time < 21){
//     console.log("Good Evening")
// }
// else if(time >= 21 && time < 23){
//     console.log("Good Night")
// }else{
//     console.log("Invalid Time")
// }

// <--Ques End-->



// <--Chapter 14 to 16 -->

// Ques 01
// var stdNames = [];

// Ques 02
// var studentNames = new Array();

// Ques 03
// var strArray = ['apple', 'banana', 'cherry'];

// Ques 04
// var numArray = [1, 2, 3, 4, 5];

// Ques 05
// var booleanArr = [true, false, true, true];

// Ques 06
// var mixedArray = ['apple', 1, true, 'banana', false, 3.14];


// Ques 08
// var numOfStud = 3;
// var studNames = ["Ali", "Usman","Ahmed"];
// var scores = [480, 385, 470]

// for(var i = 0; i < numOfStud; i++){
//     var name = studNames[i]
//     var score = scores[i] 

//     var percentage = (score / 500) * 100

//     console.log("Name: "+ name + "Score: " + score + "Percentage: " +percentage.toFixed(2) +"%")
// }

// Ques 09
// a
// var color = ["red","green","blue"];
// var addColor = prompt("Enter color")
// color.unshift(addColor);
// console.log(color)

// b
// var color = ["red","green","blue"];
// var addColor = prompt("Enter color")
// color.push(addColor);
// console.log(color)

// c
// var color = ["red","green","blue"];
// var addColor = prompt("Enter color")
// var addColor1 = prompt("Enter color2")
// color.unshift(addColor, addColor1);
// console.log(color)

// d
// var color = ["red","green","blue"];
// color.shift();
// console.log(color)

// e
// var color = ["red","green","blue"];
// color.pop();
// console.log(color)

// f
// var color = ["red","green","blue"];
// var addColor = prompt("Enter color")
// var addIndx = prompt("Enter Index number")
// color.splice(addIndx, 0, addColor)
// console.log(color);

// g

// Ques 10
// var score = [75,80,52,55,62]
// score.sort()
// console.log(score)

// Ques 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];
// var selectedCities = cities.slice(0, 3); 
// console.log(selectedCities);

// Ques 12
// var arr = ["This", "is", "my", "cat"];
// var joinArray = arr.join(" ");
// console.log(joinArray);

// Ques 13
// var fifo = ["keyboard","mouse","monitor","printer"];
// for(var i = 0; i < fifo.length; i++){
//     console.log(fifo[i])
// }

// Ques 14
// var lifo = ["keyboard","mouse","monitor","printer"];
// for(let i = lifo.length - 1; i >= 0; i--){
//     console.log(lifo[i])
// }


// <--Chapter 17 to 20 -->

// Ques 01
// var emptyArr = [];

// Ques 02
// var matrixArr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,1,0],
// ];

// Ques 03
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Ques 04
// var tableOfNum = +prompt("Enter table")
// var tableLength = +prompt("Enter table length")
// for(var i = 1; i <= tableLength; i++ ){
//     document.write(tableOfNum + "*" + i+ "=" +i*tableOfNum +"<br/>" )
// }

// Ques 05
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i]+ "<br/>")
// }

// Ques 06
// a
// for(var i = 1; i < 16; i++){
//     console.log(i)
// }

// b
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// c
// for(i = 0; i <= 20; i++){
//     if(i%2 == 0){
//         document.write(i +" " +"is" +" " +"even" +"<br>")
//     }
// } 

// d
// for(i = 0; i <= 20; i++){
//     if(i%2 !== 0){
//         document.write(i +" " +"is" +" " +"odd" +"<br>")
//     }
// } 

// e
// for(i = 2; i <= 20; i++){
//     if(i%2 == 0){
//         document.write(i +"k" +"<br>")
//     }
// } 

// Ques 07
// var flag = false
// var food = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item");

// for(var i = 0; i < food.length; i++){
//     if(userInput == food[i]){
//         alert(userInput + " is found in the list")
//         flag = true
//     }
// }
// if(flag == false){
//     alert(userInput + "  is not found in the list")
// }


// Ques 08
// var A = [24, 53, 78, 91, 12];

// var largestNumber = A[0]; 

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largestNumber) {
//         largestNumber = A[i]; 
//     }
// }
// console.log("The largest number in the array is:" +largestNumber);


// Ques 09
// var A = [24, 53, 78, 91, 12];

// var smallNumber = A[0]; 

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallNumber) {
//         smallNumber = A[i]; 
//     }
// }
// console.log("The largest number in the array is:" +smallNumber);

// Ques 10
// for (var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// <--Ques End-->














    



    



