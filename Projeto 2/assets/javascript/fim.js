
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("modal")
const trocarButao = document.getElementById("loginbutton")

password.addEventListener("click", funcaoAparece);

trocarButao.addEventListener("click", loading)
email.addEventListener("click", auteticacao)
