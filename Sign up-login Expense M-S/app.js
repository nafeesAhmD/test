let allUsers = [];

let users = localStorage.getItem('users');


if(users !== null){
    allUsers = JSON.parse(users)
}

function signup(){
    
    let email = document.getElementById('uemail');
    let password = document.getElementById('upassword');
    let user = {
        name: name.value,
        email: email.value,
        password: password.value
        
    }

    allUsers.push(user)
    localStorage.setItem('users',JSON.stringify(allUsers))
    location.href = './signin.html'
}


function login(){
    let email = document.getElementById('lemail');
    let password = document.getElementById('lpassword');

    let filterUser = allUsers.filter(data=> data.email === email.value && data.password === password.value);

    if(filterUser.length){
        alert("user login succesful")
    }else{
        alert("email/password incorrect")
    }
    location.href = './index.html'
}

