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

      // Basic HTML validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Collect form data
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());

      console.log(`Submitting form [${formType}]`, formValues);

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      // Create inline message element
      let msgEl = form.querySelector('.form-message');
      if (!msgEl) {
        msgEl = document.createElement('div');
        msgEl.className = 'form-message';
        msgEl.style.marginTop = '0.5rem';
        form.appendChild(msgEl);
      }
      msgEl.textContent = '';
      
      try {
        // Replace with your backend endpoint URL
        const response = await fetch('https://your-backend-endpoint.com/submit', {
          method: 'POST',
          headers: {
            // Use JSON or comment this line to submit as FormData
            'Accept': 'application/json'
          },
          body: formData
          // For JSON fallback, use:
          // body: JSON.stringify(formValues),
          // headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const result = await response.json();
        console.log('Server response:', result);

        // Show inline success message
        msgEl.textContent = `✅ Your ${formType} request has been received.`;
        msgEl.style.color = 'green';

        form.reset();
      } catch (error) {
        console.error('Form submission error:', error);
        msgEl.textContent = `⚠️ Sorry, there was a problem submitting your ${formType} request.`;
        msgEl.style.color = 'red';
      } finally {
        if (submitBtn) submitBtn.disabled = false;
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
