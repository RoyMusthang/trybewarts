const btnLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

btnLogin.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function DeactivateButton() {
  btnSubmit.disabled = true;
}

function ActivateButton() {
  btnSubmit.disabled = false;
}
// https://pt.stackoverflow.com/questions/307752/habilitar-desabilitar-um-bot%C3%A3o-se-pelo-menos-um-checkbox-for-marcado
function checkAgreement() {
  agreement.addEventListener('change', () => {
    if (agreement.checked) {
      ActivateButton();
    } else {
      DeactivateButton();
    }
  });
}
checkAgreement();

document.getElementById('textarea').onkeyup = function piak() {
  document.getElementById('counter').innerHTML = `Caracteres: ${500 - this.value.length}`;
};

// document.querySelector('input[name="rate"]:checked').value;
// document.querySelectorAll('.checkbox:checked');
