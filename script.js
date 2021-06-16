const btnlogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const password = document.getElementById('password');



btnlogin.addEventListener('click', function(){
  if (login.value === 'tryber@teste.com' && password.value === '123456'){
    alert("Olá, Tryber!");
  }
  else {
    alert("Login ou senha inválidos.");
  }
})
