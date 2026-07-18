/* ============================================
   Crypto With Shola — Scroll Motion & Subtle Animation
   IntersectionObserver-based reveals + subtle interactions
   ============================================ */

(function() {
  'use strict';

  // --- Scroll-triggered reveal via IntersectionObserver ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-stagger').forEach(el => revealObserver.observe(el));

  // --- Stagger delay for multiple reveal-stagger children ---
  document.querySelectorAll('.cards-3, .tiers, .testimonials, .features-grid, .results-strip').forEach(container => {
    const staggerEls = container.querySelectorAll('.reveal-stagger');
    if (staggerEls.length === 0) return;
    staggerEls.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.1}s`;
      revealObserver.observe(el);
    });
  });

  // --- Nav scroll shadow ---
  const nav = document.querySelector('.site-nav');
  if (nav) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- Subtle parallax on hero decorative elements ---
  const heroDecor = document.querySelector('.hero::after'); // pseudo-element, can't select directly
  // Instead, apply subtle movement to the hero photo and decorative shapes
  const heroPhoto = document.querySelector('.hero .hero-photo');
  if (heroPhoto) {
    let heroTicking = false;
    window.addEventListener('scroll', () => {
      if (!heroTicking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const shift = Math.min(y * 0.015, 20);
          heroPhoto.style.transform = `translateY(${-shift}px)`;
          heroTicking = false;
        });
        heroTicking = true;
      }
    }, { passive: true });
  }

  // --- FAQ smooth open/close (already CSS, just add class toggle) ---
  document.querySelectorAll('.faq-item h3').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const wasOpen = item.classList.contains('open');
      // Close all others (accordion behavior)
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });

})();
