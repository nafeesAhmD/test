// <--chapter 02 start-->
// Ques 01
// var userName;

// Ques 02
// var myName = "Ahmed";
// document.write(myName);

// Ques 03
// var abc;
// abc = "Hello world";
// alert(abc);

// Ques 04
// var name_ = "Zain";
// alert(name_);
// var age = 20;
// alert(age);
// var occupation = "Mobile Application Development";
// alert(occupation);

// Ques 05
// var pizza = "Pizza\n"+ "Pizz\n"+"Piz\n"+"Pi\n"+"P"
// alert(pizza);

// ques 06
// var email = prompt("Enter Email");
// alert("My email address is" +" "+email);

// Ques 07
// var abc1 = " I am trying to learn from book";
// var abc = "A smarter way to learn JavaScript";
// alert(abc1 +" "+ abc);

// Ques 08
// var js = "Yah! I can write HTML content through JavaScript";
// document.write(js);

// Ques 09
// var str = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// document.write(str);
// alert(str);

//  <--Question End-->




//  <--chapter 03 start-->
// Question 01
// var age = 23;
// alert("I am " +age+ " years old");

// Question 03
// var birth = 1999;
// document.write("My birth year is " + birth);

// Question 04
// var visitor = "john Doe";
// var productTitle = "T-shirts";
// var quantity = 5;
// document.write(visitor+ " ordered " + quantity + " "+ productTitle + " on xyz clothing store");

//  <--Question End-->


//  <--chapter 04 start-->
// Ques 01
// var variable1 = "Hello " + " World" + " Testing";
// document.write(variable1);

// Ques 02
// legal character 
//  name, $name,_name,name12,firstName;     
// Ilegal character 
// 12name,-name, @name, a bc, function

// Ques 03
// var xyz = "Rules for naming JS variable";
// document.write(xyz);

//  <--Question End-->


// <--chapter 05 start-->
// Ques 03
// a
// var myCar;
// b
// var myVar;
// document.write("Value after variable declaration is:", myVar);
// document.write(myVar);
// c
// var myNum = 10;
// d
// var intialVal = 5;
// e
// intialVal++
// console.log(intialVal);
// f
// var x = 5;
// x++; 
// console.log("Value after increment is: " + x);
// g
// var sum = x + 7
// h
// document.write(sum);
// i
// sum--
// document.write(sum)
// k
// var num = 12;
// var remainder = num % 3;
// l
// console.log(remainder);

// Ques 04

// var ticketPrice = 600; 
// var numberOfTickets = 5;
// var totalCost = ticketPrice * numberOfTickets;
// console.log("Cost of buying", numberOfTickets, "tickets:", totalCost, "PKR");

// Ques 08
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Percentage: " + percentage + "%");

// Ques 09

// var usdAmount = 10; 
// var riyalAmount = 25; 

// var usdToPkrRate = 278.04;   // 1 US Dollar = 278.04 Pakistani Rupees
// var riyalToPkrRate = 74.11;  // 1 Saudi Riyal = 74.11 Pakistani Rupees

// var totalusd = usdAmount * usdToPkrRate; 
// var totalriyal = riyalAmount * riyalToPkrRate;

// var totalPkr = totalusd + totalriyal;

// console.log("Total in Pakistani Rupees: " + totalPkr);

// Ques 10
// var number = 10;
// var result = ((number + 5) * 10) / 2

// document.write(result); 
// console.log(result);

// Ques 11 
// var currentYear = +prompt("Enter current year");
// var birthYear = +prompt("Enter birth year");

// var age = currentYear - birthYear
// document.write("Your age is " + age);

// Ques 12

// var radius = 20;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;
// console.log(area)


// console.log("Radius of a circle" + radius);
// console.log("The circumference is " + circumference);
// console.log("The area is " + area);

//  <--Question End-->

// <--chapter 6 to 9 start-->

// Ques 01
// var a = 10;
// var a1 = ++a;
// var a2 = ++a;
// var a3 = --a;
// var a4 = a--;
// console.log(a);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);

// Ques 02
// var a = 2;
// var b = 1;
//  --2 - --1 + ++1 + 1-- 
// var result = 1 - 0 + 1 + 1
// console.log(result)
 
// Ques 03

// var userName = prompt("Enter your name?");
// alert(userName);

// Ques 06
//  var subject1 = prompt("Enter name of first subject:");
//  var subject2 = prompt("Enter name of second subject:");
//  var subject3 = prompt("Enter name of third subject:");

//  var totalMarks = 100;

//  var marksSubject1Str = prompt("Enter obtained marks for " + subject1 + ":");
//  var marksSubject1 = parseInt(marksSubject1Str);

//  var marksSubject2Str = prompt("Enter obtained marks for " + subject2 + ":");
//  var marksSubject2 = parseInt(marksSubject2Str);

//  var marksSubject3Str = prompt("Enter obtained marks for " + subject3 + ":");
//  var marksSubject3 = parseInt(marksSubject3Str);

//  var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;
//  var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
 
//  var resultTable = "<h2>Subject Marks and Percentage</h2>";
//  resultTable += "<table border='1' cellpadding='10'>";
//  resultTable += "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>";
//  resultTable += "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSubject1 + "</td></tr>";
//  resultTable += "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSubject2 + "</td></tr>";
//  resultTable += "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSubject3 + "</td></tr>";
//  resultTable += "</table>";
//  resultTable += "<h3>Total Obtained Marks: " + totalObtainedMarks + "</h3>";
//  resultTable += "<h3>Percentage: " + percentage + "%</h3>";

// document.write(resultTable);



