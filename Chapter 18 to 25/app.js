// ques 1 
// for(i= 1; i<= 5; i++){
//     document.write("Hello World" +"<br>")
// }

// ques 2
// for(i = 1; i < 11; i++){
//     document.write(i +"<br>")
// }

// ques 3
// var user = prompt("enter table")
// for(i = 1; i < 11; i++){
//     document.write(`${user} x ${i} = ${user*i}` +"<br>")
// }

// var user = prompt("enter value")
// var length = prompt("enter lenght")
// for(i = 1; i < length ; i++){
//     document.write(`${user} x ${i} = ${user*i} ` +"<br>")
// }

// ques 4
// var arr = ["Nokia","Samsung","Apple","Sony","Huawei"]
// for(i = 0; i < arr.length; i++){
//     document.write(arr[i] +"<br>")
// }

// ques 5
// var fruits = ["apple","banana","mango","orange","Strawberry"]
// for(i = 0; i < fruits.length; i++){
//     document.write(fruits[i] +"<br>")
// }

// document.write(fruits[0] +"<br>")
// document.write(fruits[1] +"<br>")
// document.write(fruits[2] +"<br>")
// document.write(fruits[3] +"<br>")
// document.write(fruits[4] +"<br>")
// document.write(fruits[5] +"<br>")

// ques 7
// for(i = 1; i < 16; i++){
//     document.write(i +"<br>")
// }

// for(i = 10; i > 0; i--){
//     document.write(i +"<br>")
// }

// even num loop
// for(i =2; i <= 22; i+=2){
//     document.write(i +"<br>")
// }

// odd num loop
// for(i = 0; i <= 20; i++){
//     if(i % 2 !=0){
//         document.write(i +"<br>")
//     }
// }


// for(i =2; i <= 20; i+=2){
//     document.write(i+"k" +"<br>")
// }

// ques 8
// var flag = false
// var user = prompt('enter val')
// var a = ["cake","apple pie","cookie","chips","petties"]
// for(i = 0; i < a.length; i++){
//     if(user == a[i]){
//         flag = true
//         break
//     }  
// }
// if(flag == true){
//     alert("Available")
// }
// else{
//     alert("Not Available")
// }

// ques 9 
// var arr = [24,53,78,91,12]
// var largest = arr[0]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }
// document.write(largest)

// ques 10
// var arr = [24,53,78,91,12]
// var minval = arr[0]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] < minval){
//         minval = arr[i]
//     }
// }
// document.write(minval)

// ques 11
// var arr = [24,53,78,91,12]
// var largest = arr[0]
// var minval = arr[0]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
//     else if(arr[i] < minval){
//         minval = arr[i]
//     }
// }
// document.write(`The largest number is ${largest}` +"<br>")
// document.write(`The smallest number is ${minval}`)

// ques 12
// for(i = 5; i <= 20; i++){
//     document.write( `${i} x ${i} = ${i*5}`+"<br>")
// }

// ques 13
// var student = ["Ali","Sami","Taha","Ahmed"]
// var score = [58,73,89,90]

// for(i = 0; i < score.length; i++){
//     for(j = 0; j < student.length; j++){
//     }
//     document.write(student[i] +" ")
//     document.write(score[i] +"<br>")
// }

// ques 15
// var a = [[1,2,3],[4,5,6],[7,8,9]]
// for(i = 0; i < a.length; i++){

//     document.write(a[i] +"<br>")
// }


// ques 17
// for(i = 0; i <= 20; i++){
//     if(i%2 == 0){
//         document.write(i +" " +"is" +" " +"even" +"<br>")
//     }
//     if(i%2 !== 0){
//         document.write(i +" " +"is" +" " +"odd" +"<br>")
//     }
// }

// ques 18
// var multi = 1
// for(i = 0; i <=7; i++){
//     if(i%2 !== 0){
//         document.write(i)
        
//     }
// }

// ques 19
// for(let i = 7; i >= 1; i--){
//     for(j = 1; j <= i; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// ques 20

// for(let i = 1; i <= 4; i++){
//     for(j = 1; j <= 5; j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for(let i = 1; i <=5; i++){
//     for(let j = 1; j<= i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// for(let i = 5; i >= 1; i-- ){
//     for(j = 1; j <= i; j++ ){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// STRINGS METHODS
// quse 1
// var first = prompt("enter name")
// var last = prompt("enter name")
// document.write(first +" "+ last)


// ques 2
// var fav = prompt("You are favourite phone")
// var strLen = fav.length
// document.write(strLen)

// ques 3
// var pak = "pakistan"
// var idxPak = pak.charAt(7)
// document.write(idxPak)

// ques 4
// var a = "Hello World"
// var b = a.charAt(9)
// alert(b)

// ques 5
// var pk = "pakistan"
// var aPk = pk.charAt(3)
// document.write(aPk)

// ques 6
// var first = "Ahmed"
// var last = "ALi"
// var b = first.concat(" "+ last)
// document.write(b)

// ques 7
// var hyd = "Hyderabad"
// var replac = hyd.replace("Hyderabad", "Karachi")
// document.write(replac)

// ques 8
// var khi = "karachi ,karachi"
// var rep = khi.replace(/karachi/g, "Isalmabad" )
// document.write(rep)

// ques 9
// var num = 472
// var conv = num.toString()
// console.log(typeof conv)

// var num1 = 394
// console.log(typeof num1)

// ques 10
// var user = prompt("enter URL")
// document.write("www." + user + ".com")

// ques 11 
// var user = prompt("enter value")
// var uCase = user.toLocaleUpperCase()
// document.write(uCase)

// ques 12
// var user = prompt("enter value")
// var lowCase = user.toLocaleLowerCase()
// document.write(lowCase)

// ques 13
// var user = prompt("enter value")
// var userC1 = user.slice(0,1).toLocaleUpperCase()
// var userC2 = user.slice(1).toLowerCase()
// var res = userC1 + userC2
// console.log(res)


// ques 14
// var num = 35.36
// var num1 = num.toString()
// num1 = num1.replace(".","")
// document.write(num1)

// ques 15
// var a = "3"
// var b = "3"
// var c = a + b
// document.write(c)

// ques 16
// var a = "3"
// var b = "3"
// var c = a - b
// document.write(c)

// ques 18
// var flag = false
// var arr = ["cake","apple pie","cookie","chips","patties"]
// var userInput = prompt("enter value")
// var userInp = userInput.toLowerCase()
// for(i = 0; i < arr.length; i++){
//     if(userInp == arr[i]){
//         flag = true
    
//     } 
// }
// if(flag == true){
//     document.write(userInp," " +"available at"+ " "+i +" "+ "index")
// }
// else {
//     document.write("Not available ")
// }

// ques 19
// var car = "car"
// var cab = "cab"
// if(car > cab){
//     document.write("car is greater than cab")
// }

// ques 22
// var userInp = prompt("Enter Text")
// var textLen = userInp.charAt(userInp.length -1)
// console.log(textLen)

// ques 24
// var str = "Pakistan"
// let reg = /[aeiou]/gi
// var char = str.match(reg)
// document.write(char +"<br>")
// document.write(char.length)




