document.addEventListener('DOMContentLoaded', () => {
  // Auto update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Set your public rate here and it updates everywhere
  const PUBLIC_RATE = 0.25;
  document.querySelectorAll('#rateValue, #rateValue2').forEach(el => {
    if (el) el.textContent = PUBLIC_RATE.toFixed(2);
  });

  // Handle all forms with [data-form] attribute
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data
      const formData = new FormData(form);
      const formValues = {};
      formData.forEach((value, key) => {
        formValues[key] = value;
      });

      console.log("Form submitted:", form.getAttribute("data-form"), formValues);

      // Feedback for user
      alert(`Thank you! Your ${form.getAttribute("data-form")} form has been submitted.`);

      // Reset form
      form.reset();
    });
  });
});
