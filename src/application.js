import axios from 'axios';

function sendRequest() {
  axios.post('/users').then((res) => {
    document.body.innerHTML = `<p>${res.data.message}</p>`;
  });
}
export default () => {
  const formContainer = document.querySelector('.form-container');
  const formHtml = `<form id="registrationForm">
  <div class="form-group">
      <label for="inputName">Name</label>
      <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
  </div>
  <div class="form-group">
      <label for="inputEmail">Email</label>
      <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
  </div>
  <input type="submit" value="Submit" class="btn btn-primary" disabled>
</form>`;
  formContainer.innerHTML = formHtml;
  const inputName = document.querySelector('#inputName');
  const inputEmail = document.querySelector('#inputEmail');
  const submit = document.querySelector('input[type="submit"]');
  inputName.oninput = (e) => {
    e.preventDefault();
    const isvalid = e.target.value.trim().length > 0;
    if (isvalid) {
      inputName.classList.remove('is-invalid');
      inputName.classList.add('is-valid');
    } else {
      inputName.classList.remove('is-valid');
      inputName.classList.add('is-invalid');
    }
    submit.disabled = !(
      inputName.className.includes('is-valid') && inputEmail.className.includes('is-valid')
    );
  };
  inputEmail.oninput = (e) => {
    const isvalid = !e.target.value.includes(' ') && e.target.value.split('@').length === 2;
    if (isvalid) {
      inputEmail.classList.remove('is-invalid');
      inputEmail.classList.add('is-valid');
    } else {
      inputEmail.classList.remove('is-valid');
      inputEmail.classList.add('is-invalid');
    }
    submit.disabled = !(
      inputName.className.includes('is-valid') && inputEmail.className.includes('is-valid')
    );
  };
  submit.onclick = (e) => {
    e.preventDefault();
    sendRequest();
  };
};
