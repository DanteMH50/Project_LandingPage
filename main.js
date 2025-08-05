document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('toggleTheme');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const nav = document.querySelector('.nav-header');
  const pages = ['main', 'p1', 'p2', 'p3', 'curriculum'];

  const saved = localStorage.getItem('darkMode');
  const isDark = saved !== 'false';

  toggle.checked = !isDark;
  updateTheme();

  toggle.addEventListener('change', updateTheme);

  pages.forEach((id) => {
    const a = document.createElement('a');
    a.href = '#';
    a.id = 'link-' + id;
    if (id === 'main') a.textContent = 'About Me';
    else if (id === 'curriculum') a.textContent = 'Curriculum';
    else a.textContent = 'Proyecto ' + id.slice(1);
    a.addEventListener('click', (e) => {
      e.preventDefault();
      showSection(id);
    });
    nav.appendChild(a);
  });

  function updateTheme() {
    if (toggle.checked) {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('darkMode', 'false');
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    } else {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'true');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    }
  }

  function showSection(id) {
    pages.forEach((pageId) => {
      const section = document.getElementById(pageId);
      const link = document.getElementById('link-' + pageId);
      if (pageId === id) {
        section.style.display = 'block';
        link.classList.add('active');
      } else {
        section.style.display = 'none';
        link.classList.remove('active');
      }
    });
  }

  showSection('main');
});
