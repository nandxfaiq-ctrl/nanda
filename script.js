/**
 * PORTFOLIO JAVASCRIPT - NANDAA MANDIRA FAIQ
 * 11 RPL B - SMK NEGERI 1 TEMBARAK
 * Clean Vanilla JS for Navigation, Animations, Project Filter, Modal & Validation
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTypewriter();
  initProjectFilter();
  initProjectModal();
  initContactForm();
  initBackToTop();
  initScrollReveal();
  initImageFallback();
});

/* ==========================================================================
   1. NAVBAR & MOBILE MENU
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll effect for Navbar
  const handleNavScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active menu item
    const scrollPos = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // Mobile Hamburger Toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      const isExpanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ==========================================================================
   2. TYPEWRITER EFFECT IN HERO
   ========================================================================== */
function initTypewriter() {
  const target = document.getElementById('typewriter');
  if (!target) return;

  const phrases = [
    'Student RPL',
    'Web & Software Development Enthusiast',
    'Junior Programmer',
    'Tech Explorer'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      target.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      target.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 110;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(typeLoop, typingSpeed);
  }

  typeLoop();
}

/* ==========================================================================
   3. PROJECT FILTER
   ========================================================================== */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');
        
        if (filterCategory === 'all' || cardCategories.includes(filterCategory)) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   4. PROJECT DETAIL MODAL (PREVIEW)
   ========================================================================== */
const projectDetails = {
  'project-1': {
    title: 'Website Sederhana',
    category: 'HTML / CSS / JavaScript',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Website sederhana yang dibuat untuk melatih kemampuan HTML, CSS, dan JavaScript secara terstruktur dengan layout responsif dan interaktivitas modern.',
    features: [
      'Struktur semantik HTML5 yang rapi',
      'Desain responsif untuk berbagai ukuran layar',
      'Animasi transisi CSS dan manipulasi DOM menggunakan JavaScript',
      'Kode terstruktur dan mudah dimodifikasi'
    ],
    status: 'Ready for Demo',
    codeSnippet: `// Contoh script navigasi responsif\nconst navToggle = document.querySelector('.nav-toggle');\nnavToggle.addEventListener('click', () => {\n  document.body.classList.toggle('nav-open');\n});`
  },
  'project-2': {
    title: 'Program Kasir Java',
    category: 'Java Console / OOP',
    tech: ['Java', 'OOP', 'CLI'],
    description: 'Program kasir sederhana menggunakan Java untuk memproses transaksi penjualan, mengkalkulasi diskon, menghitung total pembayaran, serta mencetak struk belanja ke konsol.',
    features: [
      'Penerapan Object-Oriented Programming (Class Item, Transaksi)',
      'Perhitungan otomatis subtotal, pajak, dan diskon',
      'Validasi nominal pembayaran pelanggan',
      'Pencetakan ringkasan struk transaksi kasir yang rapi'
    ],
    status: 'Project Code Available',
    codeSnippet: `// Cuplikan kalkulasi pembayaran Java\npublic double hitungTotal(double subtotal, double diskon) {\n    return subtotal - (subtotal * (diskon / 100));\n}`
  },
  'project-3': {
    title: 'Aplikasi Catatan Harian',
    category: 'Web App / Local Storage',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Aplikasi sederhana untuk membuat, membaca, mencari, dan mengelola catatan harian kegiatan belajar siswa RPL dengan penyimpanan lokal di peramban.',
    features: [
      'Fitur Tambah, Edit, dan Hapus catatan harian',
      'Penyimpanan otomatis menggunakan Browser LocalStorage',
      'Pencarian catatan berdasarkan judul atau kata kunci',
      'Tampilan antarmuka kartu yang bersih dan nyaman dibaca'
    ],
    status: 'Ready for Demo',
    codeSnippet: `// Simpan catatan ke LocalStorage\nfunction simpanCatatan(catatan) {\n  localStorage.setItem('my_notes', JSON.stringify(catatan));\n}`
  },
  'project-4': {
    title: 'Program ATM Sederhana',
    category: 'Java Console Simulation',
    tech: ['Java', 'Algorithms'],
    description: 'Program simulasi ATM interaktif menggunakan Java dengan fitur otentikasi login PIN, cek saldo tabungan, penarikan tunai, setor tunai, serta riwayat mutasi rekening.',
    features: [
      'Keamanan login PIN sederhana dengan pembatasan percobaan gagal',
      'Operasi cek saldo dan histori mutasi saldo',
      'Validasi saldo mencukupi sebelum transaksi tarik tunai',
      'Menu CLI interaktif berbasis switch-case yang informatif'
    ],
    status: 'Project Code Available',
    codeSnippet: `// Validasi saldo tarik tunai\nif (nominalTarik <= saldoSaatIni) {\n    saldoSaatIni -= nominalTarik;\n    System.out.println("Penarikan sukses!");\n}`
  },
  'project-5': {
    title: 'Game / Animasi JavaScript',
    category: 'JavaScript Canvas & DOM',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS Animations'],
    description: 'Proyek interaktif berbasis web menggunakan JavaScript untuk membuat game sederhana atau simulasi animasi interaktif yang merespons input keyboard/mouse.',
    features: [
      'Loop animasi game 60 FPS menggunakan requestAnimationFrame',
      'Deteksi tabrakan (Collision Detection) objek 2D',
      'Sistem skor dan status Game Over / Restart',
      'Kontrol input keyboard yang responsif'
    ],
    status: 'Ready for Demo',
    codeSnippet: `// Game loop interaktif\nfunction gameLoop() {\n  updateGameState();\n  renderCanvas();\n  requestAnimationFrame(gameLoop);\n}`
  }
};

function initProjectModal() {
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');
  const viewBtns = document.querySelectorAll('.btn-view-project');

  if (!modalBackdrop) return;

  const openModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data) return;

    document.getElementById('modalProjectTitle').textContent = data.title;
    document.getElementById('modalProjectCategory').textContent = data.category;
    document.getElementById('modalProjectStatus').textContent = data.status;
    document.getElementById('modalProjectDesc').textContent = data.description;

    // Features
    const featuresList = document.getElementById('modalFeaturesList');
    featuresList.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    // Tech Tags
    const techContainer = document.getElementById('modalTechTags');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Code snippet
    const codeSnippetEl = document.getElementById('modalCodeSnippet');
    if (codeSnippetEl) {
      codeSnippetEl.textContent = data.codeSnippet;
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   5. CONTACT FORM VALIDATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      showFeedback('Mohon masukkan nama Anda.', 'error');
      return;
    }

    if (!email || !emailRegex.test(email)) {
      showFeedback('Mohon masukkan alamat email yang valid.', 'error');
      return;
    }

    if (!message || message.length < 5) {
      showFeedback('Mohon tuliskan pesan minimal 5 karakter.', 'error');
      return;
    }

    // Success validation feedback (no fake server submit)
    showFeedback(
      'Form berhasil divalidasi. Silakan gunakan email untuk menghubungi saya atau klik tombol "Send Email" di samping.',
      'success'
    );

    // Provide prefilled mailto launch link or action
    const mailtoUrl = `mailto:nandafaq04@gmail.com?subject=${encodeURIComponent('Pesan dari ' + name)}&body=${encodeURIComponent(message + '\n\nPengirim: ' + name + ' (' + email + ')')}`;
    
    // Create an explicit direct action button inside feedback
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1500);

    form.reset();
  });

  function showFeedback(text, type) {
    feedback.textContent = text;
    feedback.className = `form-feedback ${type}`;
    feedback.style.display = 'block';

    // Auto dismiss after 7 seconds
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 7000);
  }
}

/* ==========================================================================
   6. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   7. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   8. IMAGE FALLBACK HANDLER
   ========================================================================== */
function initImageFallback() {
  const profileImg = document.getElementById('profileImage');
  if (!profileImg) return;

  profileImg.addEventListener('error', () => {
    // Elegant SVG fallback with glowing monogram if file is missing
    profileImg.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="%231e293b"/><circle cx="150" cy="110" r="50" fill="%2338bdf8" opacity="0.8"/><path d="M70,250 C70,195 110,180 150,180 C190,180 230,195 230,250 Z" fill="%23818cf8" opacity="0.8"/><text x="150" y="280" font-family="sans-serif" font-size="14" fill="%23f8fafc" text-anchor="middle" font-weight="bold">Nandaa Mandira Faiq</text></svg>`;
  });
}
