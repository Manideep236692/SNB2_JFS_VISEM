// Calculate and display the total fee as checkboxes change.
document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".subjects input[type='checkbox']");
  const totalAmount = document.getElementById("totalAmount");

  const updateTotal = () => {
    let total = 0;
    checkboxes.forEach((box) => {
      if (box.checked) {
        total += Number(box.dataset.price) || 0;
      }
    });
    totalAmount.textContent = total;
  };

  checkboxes.forEach((box) => box.addEventListener("change", updateTotal));
  updateTotal();

  const form = document.querySelector('.registration-form');
  const studentNameInput = document.getElementById('studentName');

  // Handle form submission: prevent default and show alert
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const studentName = (studentNameInput && studentNameInput.value) ? studentNameInput.value.trim() : '';

      // Gather selected subjects
      const selected = [];
      let total = 0;
      checkboxes.forEach((box) => {
        if (box.checked) {
          const lbl = document.querySelector(`label[for="${box.id}"]`);
          const text = lbl ? lbl.textContent.trim() : box.id;
          const price = Number(box.dataset.price) || 0;
          selected.push(text);
          total += price;
        }
      });

      // Validate: at least one subject required
      if (selected.length === 0) {
        alert('Please select at least one subject.');
        if (checkboxes[0]) checkboxes[0].focus();
        return;
      }

      // Build alert message
      let msg = 'Student: ' + (studentName || '[No name entered]') + '\n\n';
      msg += 'Selected subjects:\n';
      selected.forEach((s) => { msg += ' - ' + s + '\n'; });
      msg += '\nTotal Registration Fees: $' + total;

      alert(msg);
    });
  }
});
