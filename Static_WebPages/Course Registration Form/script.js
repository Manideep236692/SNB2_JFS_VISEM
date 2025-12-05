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
  const summaryDiv = document.getElementById('submissionSummary');

  // Handle form submission: prevent default and show summary
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
        const errHtml = '<div class="error">Please select at least one subject.</div>';
        if (summaryDiv) summaryDiv.innerHTML = errHtml;
        if (checkboxes[0]) checkboxes[0].focus();
        return;
      }

      // Render summary below submit button
      if (summaryDiv) {
        let html = '';
        html += '<div class="summary">';
        html += '<p><strong>Student:</strong> ' + (studentName || '[No name entered]') + '</p>';
        html += '<p><strong>Selected subjects:</strong></p>';
        html += '<ol>';
        selected.forEach((s) => { html += '<li>' + s + '</li>'; });
        html += '</ol>';
        html += '<p><strong>Total Registration Fees:</strong> $' + total + '</p>';
        html += '</div>';
        summaryDiv.innerHTML = html;
        summaryDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
});
