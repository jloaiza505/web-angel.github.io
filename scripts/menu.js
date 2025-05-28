document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
      menuBtn.style.display = 'none';  // hide immediately when open
    } else {
      // delay showing hamburger by 300ms after closing
      setTimeout(() => {
        menuBtn.style.display = 'block';
      }, 300);
    }
  });

  document.addEventListener('click', function (e) {
    if (sidebar.classList.contains('open') && !sidebar.contains(e.target)) {
      sidebar.classList.remove('open');
      // delay showing hamburger by 300ms after closing
      setTimeout(() => {
        menuBtn.style.display = 'block';
      }, 300);
    }
  });

  sidebar.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});
