const form = document.getElementById('userForm');

document.getElementById('showBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  alert(`Name: ${name}\nAge: ${age}`);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    form.reset();
  }
});
