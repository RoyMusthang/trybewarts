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

function CheckAgreement() {     
  const checkAgreement = document.getElementById('agreement');     
  checkAgreement.addEventListener('change', () => {     
    if (checkAgreement.checked) {
           ActivateButton();     } 
           else {     
             DeactivateButton();     
            }     
          });   
        }

function DeactivateButton() {
       submitBtn.disabled = true;
    }
function ActivateButton() {
       submitBtn.disabled = false;  
    }
