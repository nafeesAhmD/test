// function bulbOn(){
//     document.getElementById('img').src = "/images/BulbOn.PNG"
// }
// function bulbOff(){
//     document.getElementById('img').src="./images/BulbOff.PNG"
// }



// function changeImg(){
//     let img = document.getElementById('img')
//     if(img.src.match("./images/BulbOff.PNG")){
//         img.src = "./images/BulbOn.PNG"
//     }
//     else {
//         img.src = "./images/BulbOff.PNG"
//     }
// }


function changeImg(){
    var img = document.getElementById('img')
  var imgChange = (img.src.match("./images/BulbOff.PNG") ? img.src = "./images/BulbOn.PNG" :  img.src = "./images/BulbOff.PNG")
}