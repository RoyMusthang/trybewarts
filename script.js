const btnLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const password = document.getElementById('password');
const agreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const inputName = document.querySelector('#input-name');
const inputLastN = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const house = document.querySelector('#house');
const textArea = document.querySelector('#textarea');

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

function GetFamilySelected() {
  const family = document.getElementsByName('family');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      return family[index].value;
    }
  }
}

function GetSubjectsSelected() {
  const subjects = document.getElementsByClassName('subject');
  let subjectsSelected = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      subjectsSelected += `${subjects[index].value}, `;
    }
  }
  return subjectsSelected;
}

function GetUserEvaluation() {
  const evaluation = document.getElementsByName('rate');
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked) {
      return evaluation[index].value;
    }
  }
}

function FillInputs() {
  const familySelected = GetFamilySelected();
  const subjectsSelected = GetSubjectsSelected();
  const userEvaluation = GetUserEvaluation();
  const form = document.getElementsByTagName('form')[1];
  form.innerHTML = '';
  form.innerHTML += `Nome: ${inputName.value} ${inputLastN.value} <br>`;
  form.innerHTML += `Email: ${inputEmail.value} <br>`;
  form.innerHTML += `Casa: ${house.value} <br>`;
  form.innerHTML += `Família: ${familySelected} <br>`;
  form.innerHTML += `Matérias: ${subjectsSelected} <br>`;
  form.innerHTML += `Avaliação: ${userEvaluation} <br>`;
  form.innerHTML += `Observações: ${textArea.value}`;
}
btnSubmit.addEventListener('click', FillInputs);
