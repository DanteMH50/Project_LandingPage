document.addEventListener('DOMContentLoaded', () => {
  // Conexión con los elementos del HTML
  const root = document.documentElement; 
  const toggle = document.getElementById('toggleTheme'); // El switch
  const sunIcon = document.querySelector('.sun-icon');   // Icono de sol
  const moonIcon = document.querySelector('.moon-icon'); // Icono de luna
  const nav = document.querySelector('.nav-header');     // Menú
  const pages = ['main', 'p1', 'p2', 'p3', 'curriculum']; // Secciones

  // Recupera el modo guardado (oscuro/claro)
  const saved = localStorage.getItem('darkMode');
  const isDark = saved !== 'false';

  toggle.checked = !isDark;
  updateTheme();

  // Detecta cuando cambias el switch y actualiza el tema
  toggle.addEventListener('change', updateTheme);

  // Crea los enlaces del menú y conecta cada uno a su sección
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

  // Cambia el tema visual y guarda la preferencia
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

  // Muestra solo la sección que seleccionaste
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

  // Al cargar, muestra la sección principal
  showSection('main');
});
