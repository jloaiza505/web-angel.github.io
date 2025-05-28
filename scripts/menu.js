document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    menuBtn.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
  });

  document.addEventListener('click', function (e) {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
      sidebar.classList.remove('open');
      menuBtn.style.display = 'block';
    }
  });

  sidebar.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
