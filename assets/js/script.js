
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Set your public rate here and it updates everywhere
  const PUBLIC_RATE = 0.25;
  document.querySelectorAll('#rateValue, #rateValue2').forEach(el => {
    if (el) el.textContent = PUBLIC_RATE.toFixed(2);
  });

  // Simple form handler (demo)
  const form = document.querySelector('form[data-contact-form]');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Thanks! We'll reach out shortly.");
      form.reset();
    });
  }
});
