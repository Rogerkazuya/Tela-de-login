function funcaoAparece(){
    var x = document.getElementById('input');
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



  const form = document.querySelector('.login-form')
  const button = document.getElementById('entrar')
  const animacao = document.getElementsByClassName('.loader')
  form.addEventListener('submit', paraEnvio);

  function paraEnvio(event){
    event.preventDefault();
    console.log('animacao');
  }
  

// var btn = document.querySelector('.entrar');
// var div = document.querySelector('.animacao');

// btn.addEventListener('click', function() {
//   if(div.style.display === 'block') {
//     div.style.display = 'none';
//   } else {
//     div.style.display = 'block'
//   }
// });