// ques 1
// var name = "ahmed"
// alert(name)

// ques 2
// var user = prompt("enter name")
// alert(user)

// ques 3
// var userInput = prompt("Enter Value")
// var len = prompt("enter lenght")
// for(i = 1; i <= len; i++){
//     document.write(userInput +" " +"x" + i + " "+ "="+ " "+ userInput*i+"<br>")
// }

// ques 4 
// var user = prompt("enter city")
// var city = "karachi"
// if(user == city){
//     alert("wellcome to light of city")
// }
// else{
//     alert("not found")
// }

// ques 5
// var user = prompt("enter color")
// var red = "red"
// var yellow = "yellow"
// var green = "green"
// if(user == red){
//     alert("vehicles must stop")
// }
// else if(user == yellow){
//     alert("vehicles should get ready to move")
// }
// else if(user == green){
//     alert("vehicles can move now")
// }
// else{
//     alert("invalid")
// }

// ques 6
// var user = prompt("enter age")
// if(user >= 18){
//     alert(" you can vote")
// }
// else {
//     alert("you can not vote")
// }

// ques 7
// var user = prompt("enter the fuel price")
// if(user >= 306){
//     document.write("fuel has fill")
// }
// else{
//     alert("please refill the fuel")
// }

// ques 8
// var a = 4
// if(++a === 5){
//     alert("given condition for variable a is true")
// }
// else {
//     alert("variable is a false")
// }

// var b = 82
// if(b++ === 83){
//     alert("given condition for variable a is true")
// }
// else {
//     alert("variable is a false")
// }

// var c = 12
// if(c++ ===13){
//     alert("condition 1 is true")
// }

// if(c ===13){
//     alert("condition 2 is true")
// }

// if(++c < 14){
//     alert("condition 3 is true")
// }

// if(c === 14){
//     alert("condition 4 is true")
// }


// var materialCost = 2000
// var laborcost = 2000
// var materialCost = +prompt("Material Coast")
// var laborcost = +prompt("labor Cost")

// var totalCost  = materialCost + laborcost
// if(totalCost === laborcost + materialCost){
//     alert("The cost equal"  + " "+ totalCost)
// }

// if(null){
//     alert("true")
// }
// else{
//     alert("false")
// }

// if("car" < "cat"){
//     alert("car is smaller then cat")
// }


// var val = prompt("enter value")
// var conVal = val.toString().split('').reverse().join('')
// var strVal = val.toString()
// if(strVal == conVal){
//     alert("palindrome")
// }
// else{
//     alert("not palindrome")
// }


// var num = +prompt("enter value")
// var fac = 1

// for(num; num >= 1; num--){
//     fac = fac * num
//     alert(fac)
//     console.log(fac)
// }

// var num = +prompt("enter value")
//     for(var fact = 1; num > 1; num--){
//         fact = fact * num
//         alert(fact)
// }


// ques 9
// var urdu = +prompt("Enter Marks")
// var english = +prompt("Enter Marks")
// var comp = +prompt("Enter Marks")

// var total = urdu + english + comp
// var percent = total / 300 * 100

// if(percent >= 80 && percent <= 100){
//     alert("Grade A+")
// }
// else if(percent >= 70 && percent <= 80){
//     alert("Grade A")
// }
// else if(percent >= 60 && percent <= 70){
//     alert("Grade B")
// }
// else if(percent >= 50 && percent <= 60){
//     alert("Grade C")
// }
// else if(percent >= 40 && percent <= 33){
//     alert("Fail")
// }
// else{
//     alert("result not found")
// }

// ques 10
// var t_shirt = 2000
// var price_of_usb = 2100
// var shippingCharges = 250

// var total = t_shirt + price_of_usb + shippingCharges
// var dicount = 10/100 * total
// var discountPrice = total - dicount
// document.write(`Total ${total} and 10% discount price is ${discountPrice}`)

// ques 11 guess game
// var random = Math.floor(Math.random() * 10) 

// var number = +prompt("Guess a num from 1 to 10")
// if(number == random){
//     alert("Correct Answer")
// }
// else {
//     alert("Wrong Answer")
// }

// ques 12
// var user = +prompt("enter number")
// if(user%3 == 0){
//     alert("correct ans")
// }
// else{
//     alert("wrong ans")
// }

// ques 13
// var randomNum = Math.floor(Math.random() * 2)
// console.log(randomNum)
// var team = prompt("enter num")
// if(randomNum == team){
//     alert("Babar is win")
// }
// else{
//     alert("Khuli is winx")
// }

// ques 14
// var str = "pakistan"
// var num = 28
// var bolean = true
// document.write(typeof str +"<br>")
// document.write(typeof num)
// console.log(typeof bolean)

// ques 15 
// var user = prompt("enter num")
// if(user%2 == 0){
//     document.write(user+ " "+ "is even")
// }
// else{
//     document.write(user+ " "+ "is odd")
// }

// ques 16
// var temp = prompt("Enter Temprature")
// if(temp > 40){
//     document.write("It is ti hot outside")
// }
// else if(temp > 30){
//     document.write("The Weather today is Normal")
// }
// else if(temp > 20){
//     document.write("Today's Weather is cool")
// }
// else if(temp > 10){
//     document.write("OMG! Today's Weather is so cool")
// }
// else {
//     alert("Tempratue is not valid")
// }

// ques 17
// var num1 = +prompt("Enter Num")
// var num2 = +prompt("Enter Num")
// var oper = prompt("Enter Operator")
// if(oper == '+'){
//     result = num1 + num2
//     alert(result)
// }
// else if(oper == '-'){
//     result = num1 - num2
//     alert(result)
// }
// else if(oper == '*'){
//     result = num1 * num2
//     alert(result)
// }
// else if(oper == '/'){
//     result = num1 / num2
//     alert(result)
// }
// else if(oper == '%'){
//     result = num1 % num2
//     alert(result)
// }
// else {
//     alert("operator not valid")
// }

// ques 18
// var mon = 'monday'
// var weekend = 'saturday'
// var holiday = 'sunday'
// var user = prompt('Enter Day')
// if(user == mon){
//     document.write("It is a week day")
// }
//     else if(user == weekend){
//         document.write("It's Weekend")
//     }
//     else if(user == holiday){
//         document.write("It's holiday")
//     }
//     else {
//         alert("write a correct days")
//     }

// ques 19
// var user =prompt("enter num")
// if(user > 50){
//     alert("You are passed")
// }
// else{
//     alert("Try Again")
// }
