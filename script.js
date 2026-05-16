// ===== Projects Data =====
const projects = [
  {
    title_en: "Project One",
    title_ar: "المشروع الأول",
    desc_en: "Description of project one",
    desc_ar: "وصف المشروع الأول",
    icon: "fa-solid fa-globe",
    link: "#"
  },
  {
    title_en: "Project Two",
    title_ar: "المشروع الثاني",
    desc_en: "Description of project two",
    desc_ar: "وصف المشروع الثاني",
    icon: "fa-solid fa-list-check",
    link: "#"
  },
  {
    title_en: "Project Three",
    title_ar: "المشروع الثالث",
    desc_en: "Description of project three",
    desc_ar: "وصف المشروع الثالث",
    icon: "fa-solid fa-cloud-sun",
    link: "#"
  }
];

function renderProjects() {
  const container = document.getElementById('projects-container');
  const lang = localStorage.getItem('lang') || 'en';
  container.innerHTML = '';
  projects.forEach(project => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-body">
            <i class="${project.icon} fa-2x mb-3" style="color:var(--primary-color)"></i>
            <h5 class="card-title">${lang === 'ar' ? project.title_ar : project.title_en}</h5>
            <p class="card-text">${lang === 'ar' ? project.desc_ar : project.desc_en}</p>
            <a href="${project.link}" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-external-link-alt"></i>
              ${lang === 'ar' ? 'عرض' : 'View'}
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


    function applyLanguage(lang) {
      document.querySelectorAll('[data-ar]').forEach(el => {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        } else {
          el.textContent = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        }
      });
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      localStorage.setItem('lang', lang);
      renderProjects(); // ← أضف هذا السطر
    }
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
  
  