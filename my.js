// jQuery syntax
// let docs = $(content)
// console.log(docs)

// javascript
// let eli = document.getElementById("content").innerText
// console.log(eli)

// EventListener
// let submit = document.getElementById("submit")
// submit.addEventListener("click", function(){
//     alert("hello")
// })

// jQuery
// let submit = $("#submit")
// submit.onabort("click", function(){
//     let username = $("#username").val()
//     let pwd = $("#pwd").val()
//     console.log(username, pwd)
// })

jQuery
let username = $("#username");
let email = $("#email");
let password = $("#password");
let password2 = $("#password2");

function validate () {
let valueUsername = username.val().trim();
let valueEmail = email.val().trim();
let valuePassword = password.val().trim();
let valuePassword2 = password2.val().trim();

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


