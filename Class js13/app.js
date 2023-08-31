
function signup(){
    var uEmail = document.getElementById('uemail').value
    var uPass = document.getElementById('upass').value
    localStorage.setItem('Email',uEmail)
    localStorage.setItem('Password',uPass)
    location.href = './signin.html'

    
}
function signin(){
    var iEmail = document.getElementById('iemail').value
    var iPass = document.getElementById('ipass').value
    if(localStorage.getItem('Email') == iEmail && localStorage.getItem('Password') == iPass){
        alert('Wellcome User')
        location.href = './well.html'
        
    }
    else{
        alert('go to sign up page')
        location.href = './signup.html'
    }
}

function logout(){
    localStorage.clear()
    location.href = './signup.html'
}


