
var userInput = prompt("Enter Name");
var sub1 = +prompt("Chemistry");
var sub2 = +prompt("English");
var sub3 = +prompt("Urdu");
var sub4 = +prompt("Math");
var sub5 = +prompt("Computer");

var total = sub1 + sub2 + sub3 + sub4 + sub5;

var percent = (total / 500 * 100);
document.write("Percetage"+  percent);

if(percent >= 80 && percent <= 100){
    document.write("Grade" + "A+")
} 
else if(percent >= 70 && percent <= 80){
    document.write("A")
} 
else if(percent >= 60 && percent <= 70){
    document.write("B")
} 
else if(percent >= 50 && percent <= 60){
    document.write("C")
} 
else if(percent >= 40 && percent <= 50){
    document.write("D")
} 
else if(percent >= 33 && percent <= 40){
    document.write("E")
} 
else if(percent >= 0 && percent <= 33){
    document.write("Fail")
}
else {
    document.write("you didnot write correct percentage");
}

