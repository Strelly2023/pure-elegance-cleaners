document.addEventListener('DOMContentLoaded', () => {
  // === Auto update footer year ===
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // === Centralized rate update ===
  const PUBLIC_RATE = 0.25;
  document.querySelectorAll('#rateValue, #rateValue2').forEach(el => {
    if (el) el.textContent = PUBLIC_RATE.toFixed(2);
  });

  // === Handle all forms marked with [data-form] ===
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formType = form.getAttribute("data-form") || "contact";

      // Collect form data into an object
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      // Debug log for developer
      console.log(`Form submitted [${formType}]:`, formValues);

      // Feedback for user
      alert(`✅ Thank you! Your ${formType} request has been received.`);

      // Reset form after submit
      form.reset();
    });
  });

  // === Mobile menu toggle ===
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav ul');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});
