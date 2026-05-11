/* ============================================
   KROVOS MAIN JS — js/main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFadeUp();
});

/* ---------- MOBILE NAVIGATION ---------- */
function initNav() {
  const hamburger = document.querySelector('.nav__hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- FADE-UP SCROLL ANIMATIONS ---------- */
function initFadeUp() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el);
  });
}

/* ---------- ACTIVE NAV LINK ---------- */
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveNavLink();
