// Simple form submission alert
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting Tech Web Code! I will get back to you soon.');
  form.reset();
});
