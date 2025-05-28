document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent bubbling to document
    sidebar.classList.toggle('open');
    menuBtn.style.display = sidebar.classList.contains('open') ? 'none' : 'block';
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', function (e) {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
      sidebar.classList.remove('open');
      menuBtn.style.display = 'block';
    }
  });

  // Prevent closing when clicking inside the sidebar
  sidebar.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
