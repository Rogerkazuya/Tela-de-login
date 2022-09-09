
function funcaoAparece(){
    var x = document.getElementById('password');
    var y = document.getElementById('hide1');
    var z = document.getElementById('hide2');

    if(x.type == 'password') {
      x.type = "text";
      y.style.display = "block";
      z.style.display = "none";
    } else{
      x.type = "password";
      y.style.display = "none";
      z.style.display = "block";
    }
  };
 

  function validateFields() {
    const emailValid = isEmailValid();
    document.getElementById("recover-password-button").disabled = !emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !passwordValid;

}

function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}



let botao = document.querySelector('login-button');
botao.addEventListener("click", function(e) {
  e.preventDefault();
})