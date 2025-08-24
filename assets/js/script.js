document.addEventListener('DOMContentLoaded', () => {
  // === Auto update footer year ===
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // === Centralized rate update ===
  const PUBLIC_RATE = 0.25;
  document.querySelectorAll('#rateValue, #rateValue2').forEach(el => {
    if (el) el.textContent = PUBLIC_RATE.toFixed(2);
  });

  // === Handle all forms marked with [data-form] ===
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formType = form.getAttribute("data-form") || "contact";

      // Collect form data
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      console.log(`Submitting form [${formType}]`, formValues);

      try {
        // Replace with your backend endpoint URL
        const response = await fetch('https://your-backend-endpoint.com/submit', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const result = await response.json();
        console.log('Server response:', result);

        // Feedback for user
        alert(`✅ Thank you! Your ${formType} request has been successfully submitted.`);

        // Reset form after submit
        form.reset();
      } catch (error) {
        console.error('Form submission error:', error);
        alert(`⚠️ Sorry, there was a problem submitting your ${formType} request. Please try again.`);
      }
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
