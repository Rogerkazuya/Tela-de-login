
function funcaoAparece() {
    let x = document.getElementById('password');
    let y = document.getElementById('hide1');
    let z = document.getElementById('hide2');

    if (x.type == 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
};
function loading(e){
    e.preventDefault();
    let troca = loginbutton.value;
    loginbutton.innerHTML = `<div class="loader"></div>`;
    
}


function auteticacao() { 
    email.value
    password.value

    if(email == "roger@gmail.com" && password == "123")
    {
        console.log("Login bem sucedido !!")
    }
    else{
        console.log("email ou senha invalidos")
    }
    console.log(email.value, password.value)

 }
 