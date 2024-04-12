import axios from 'axios';

function sendRequest(form) {
  axios.post('/users').then((res) => {
    document.body.innerHTML = `<p>${res.data.message}</p>`;
  });
}
export default () => {
  const formContainer = document.querySelector('.form-container');
  const form = document.createElement('form');
  form.id = 'registrationForm';
  const divName = document.createElement('div');
  divName.className = 'form-group';
  const lableName = document.createElement('lable');
  lableName.for = 'inputName';
  lableName.textContent = 'Name';
  const inputName = document.createElement('input');
  inputName.type = 'text';
  inputName.className = 'form-control';
  inputName.id = 'inputName';
  inputName.placeholder = 'Введите ваше имя';
  inputName.name = 'name';
  inputName.required = true;
  divName.appendChild(lableName);
  divName.appendChild(inputName);
  form.appendChild(divName);
  const divEmail = document.createElement('div');
  divEmail.className = 'form-group';

  const lableEmail = document.createElement('lable');
  lableEmail.for = 'inputEmail';
  lableEmail.textContent = 'Email';
  const inputEmail = document.createElement('input');
  inputEmail.type = 'text';
  inputEmail.className = 'form-control';
  inputEmail.id = 'inputEmail';
  inputEmail.placeholder = 'Введите email';
  inputEmail.name = 'email';
  inputEmail.required = true;

  divEmail.appendChild(lableEmail);
  divEmail.appendChild(inputEmail);
  form.appendChild(divEmail);
  const submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Submit';
  submit.className = 'btn btn-primary';
  submit.disabled = true;
  form.appendChild(submit);
  formContainer.appendChild(form);
  inputName.onchange = (e) => {
    inputName.className = inputName.className.replace('is-valid', '').replace('is-invalid', '');
    const isvalid = e.target.value.replace(' ', '').length > 0;
    inputName.classList.add(isvalid ? 'is-valid' : 'is-invalid');
    submit.disabled = !(
      inputName.className.includes('is-valid') && inputEmail.className.includes('is-valid')
    );
  };
  inputEmail.onchange = (e) => {
    inputEmail.className = inputName.className.replace('is-valid', '').replace('is-invalid', '');
    const isvalid = !e.target.value.includes(' ') && e.target.value.split('@').length === 2;
    inputEmail.classList.add(isvalid ? 'is-valid' : 'is-invalid');
    submit.disabled = !(
      inputName.className.includes('is-valid') && inputEmail.className.includes('is-valid')
    );
  };
  submit.onclick = (e) => {
    e.preventDefault();
    sendRequest(null);
  };
};
