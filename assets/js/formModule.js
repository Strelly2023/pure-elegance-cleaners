// formModule.js
export function showForm(formId) {
  // Hide all forms first
  document.querySelectorAll('.form-section').forEach(f => f.classList.add('hidden'));

  // Show the requested form
  const form = document.getElementById(formId);
  if (form) form.classList.remove('hidden');
}

export function initFormToggles(buttonSelectors) {
  buttonSelectors.forEach(({ button, formId }) => {
    const btn = document.querySelector(button);
    if (btn) {
      btn.addEventListener('click', () => showForm(formId));
    }
  });
}
