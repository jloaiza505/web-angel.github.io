// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggle');
  const icon = document.getElementById('toggleIcon');

  // Apply saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', function () {
    const isDark = document.body.classList.toggle('dark-mode');
    icon.textContent = isDark ? '🌙' : '🌞';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
