
const scriptURL = 'https://script.google.com/macros/s/AKfycbwk7SiGNV4rq6iQB1M5PZDBMNpY2rOv86dhlIpz-lxq2vZcJIa-q2_toh0nwtisWWvy3A/exec';
const form = document.getElementById('signup-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    email: form.email.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    status.textContent = 'Thanks for signing up!';
    form.reset();
  })
  .catch(error => {
    status.textContent = 'Oops! Something went wrong.';
  });
});
