// Local Storage for data - no backend needed
const form = document.getElementById('reportForm');
const list = document.getElementById('reportList');
const reportBtn = document.getElementById('reportBtn');
const formSection = document.getElementById('reportFormSection');

let reports = JSON.parse(localStorage.getItem('reports') || '[]');

reportBtn.onclick = () => formSection.classList.toggle('hidden');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newReport = {
    id: Date.now(),
    type: document.getElementById('type').value,
    location: document.getElementById('location').value,
    description: document.getElementById('description').value,
    date: new Date().toLocaleDateString(),
    fixed: false
  };
  reports.unshift(newReport);
  localStorage.setItem('reports', JSON.stringify(reports));
  form.reset();
  formSection.classList.add('hidden');
  render();
});

function render() {
  list.innerHTML = reports.map(r => `
    <div class="report-card">
      <strong>${r.type}</strong> - ${r.location} <small>(${r.date})</small>
      <p>${r.description}</p>
      <button onclick="toggleFix(${r.id})">${r.fixed ? 'Fixed ✓' : 'Mark as Fixed'}</button>
    </div>
  `).join('');
  document.getElementById('totalReports').textContent = reports.length;
  document.getElementById('fixedReports').textContent = reports.filter(r=>r.fixed).length;
}

function toggleFix(id){
  reports = reports.map(r => r.id===id ? {...r, fixed: !r.fixed} : r);
  localStorage.setItem('reports', JSON.stringify(reports));
  render();
}
render();