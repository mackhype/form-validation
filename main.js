//let form = document.get
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

function validate () {
let valueUsername = username.value.trim();
let valueEmail = email.value.trim();
let valuePassword = password.value.trim();
let valuePassword2 = password2.value.trim();

if(valueUsername === ""){
    showError(username, "username must not be empty")
        //show error if username is empty     
    }else if(valueUsername.length < 3){
    showError(username, "username must not  bee less than 3")
        //show error if username is less than 3
    }else if(valueUsername.length > 8){
    showError(username, "username must not be greater than 8")
        //show error if username is greater than 8
    }
    else{
    showSuccess(username, "welcome user")
    }

if(valueEmail === ""){
    showError(email, "email must not be empty")
        //show error if email is empty     
    }else if(valueEmail.length < 3){
    showError(email, "email must not be less than 3")
        //show error if email is less than 3
    }else if(valueEmail.length > 8){
    showError(email, "email must not be greater than 8")
        //show error if email is greater than 8
    }
    else{
    showSuccess(email, "welcome user")
    }

if(valuePassword === ""){
    showError(password, "password must not be empty")
        //show error if password is empty     
    }else if(valuePassword.length < 3){
    showError(password, "password must not be less than 3")
        //show error if password is less than 3
    }else if(valuePassword.length > 8){
    showError(password, "password must not be greater than 8")
        //show error if password is greater than 8
    }else if(valuePassword !== valuePassword2){
    showError(password, "password is not correct")
    }
    else{
    showSuccess(password, "welcome user")
    }


//if(valuePassword !== valuePassword2){
//showError(password, "password is not correct")
//}
if(valuePassword2 === ""){
    showError(password2, "password must not be empty")
}
else if(valuePassword2 !== valuePassword){
showError(password2, "password is not correct")
}else{
showSuccess(password2, "welcome user")
}
};



//display if value is wrong
function showError (input, message) {
    let formError = input.parentElement;
    formError.className = ("form-control error")
    let smallError = formError.querySelector("small");
    smallError.innerText = message
    //smallError.style.visibility = visible
}

//show success
function showSuccess (input, message) {
    let formError = input.parentElement;
    formError.className = ("form-control success")
    let smallError = formError.querySelector("small");
    smallError.innerText = message
    //smallError.style.visibility = visible
}



//     if(valueUsername === ""){
//         alert("you did not enter your username")
//     }else if(valueUsername.length < 3){
//         alert("username must not be less than 3");
//     }else if(valueUsername.length > 8){
//         alert("username must not be greater than 8")
//     }
//     else{
//         alert("welcome user")
//     }
// };

// if(valueUsername.length < 3){
    //     alert("username must be greater than 2");
    // }else if(valueUsername.length > 8){
    //     alert("username must be less than 9")
    // }
    // else{
    //     alert("welcome user")
    // }