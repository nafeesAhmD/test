// let value = prompt('Enter Plindrome value')
// // madam, racecar, tenet,rotor,121

// function revValue(){
//     let revVal = value.toString().split('').reverse().join('')
//     let strVal = value.toString()
//     if(strVal == revVal){
//         alert('plindrome')
//     }
//     else{
//         alert('not a plindrome')
//     }
// }
// revValue()


let num = +prompt('Enter num')
let fac = 1

for(num; num >= 1; num--){
    fac = fac * num
    alert(fac)

}

// for(var fact = 1; num > 1; num--){
//     fact = fact * num
//     alert(fact)
// }

