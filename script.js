// ===== Projects Data =====
const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with HTML, CSS, Bootstrap & JavaScript.",
      icon: "fa-solid fa-globe",
      link: "#"
    },
    {
      title: "To-Do App",
      desc: "A simple task manager built with JavaScript and localStorage.",
      icon: "fa-solid fa-list-check",
      link: "#"
    },
    {
      title: "Weather App",
      desc: "Fetches real-time weather data using a public API.",
      icon: "fa-solid fa-cloud-sun",
      link: "#"
    }
  ];
  
  // ===== Render Projects Dynamically =====
  function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    projects.forEach(project => {
      container.innerHTML += `
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <i class="${project.icon} fa-2x mb-3" style="color:var(--primary-color)"></i>
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.desc}</p>
              <a href="${project.link}" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-external-link-alt"></i> View
              </a>
            </div>
          </div>
        </div>
      `;
    });
  }
  renderProjects();
  
  // ===== Dark / Light Mode =====
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  
  themeToggle.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
  });
  
  // ===== Language Toggle (AR / EN) =====
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'en';
  
  function applyLanguage(lang) {
    document.querySelectorAll('[data-ar]').forEach(el => {
      el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }
  
  applyLanguage(currentLang);
  
  langToggle.addEventListener('click', function () {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(currentLang);
  });
  
  // ===== Contact Form =====
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById('form-msg');
    msg.innerHTML = '<div class="alert alert-success"><i class="fa-solid fa-check-circle"></i> Message sent successfully!</div>';
    this.reset();
    setTimeout(() => msg.innerHTML = '', 3000);
  });
  
  // ===== Back to Top (jQuery) =====
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  
  $('#back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
  });
  
  // ===== Smooth Scroll (jQuery) =====
  $('.nav-link').on('click', function (e) {
    const target = $(this).attr('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(target).offset().top - 70 }, 700);
      $('.navbar-collapse').collapse('hide');
    }
  });
  
  // ===== Navbar shadow on scroll (jQuery) =====
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled');
    } else {
      $('.navbar').removeClass('scrolled');
    }
  });
  
  