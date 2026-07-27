import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/framer-motion@11.1.7/dom/+esm";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Hero Animations
  const heroH1 = document.querySelector(".hero h1");
  const heroLead = document.querySelector(".hero .lead");
  const heroPhoto = document.querySelector(".hero .hero-photo");

  if (heroH1) {
    animate(heroH1, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, type: "spring", bounce: 0.2 });
  }
  if (heroLead) {
    animate(heroLead, { opacity: [0, 1], y: [40, 0] }, { duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 });
  }
  if (heroPhoto) {
    animate(heroPhoto, { opacity: [0, 1], x: [40, 0] }, { duration: 1, delay: 0.3, type: "spring", bounce: 0.2 });
  }

  // 2. Staggered Grid Reveals (Cards, Tiers, Results)
  document.querySelectorAll('.cards-3, .tiers, .testimonials, .features-grid, .results-strip, .bento-3, .grid-table, .true-bento, .blog-grid').forEach(container => {
    // We select children that we want to stagger. 
    // Fallback to container's direct children if no specific reveal class exists.
    let items = container.querySelectorAll('.reveal-stagger, .bento-card, .tier-card, .grid-cell, .stat, .blog-card');
    if (items.length === 0) {
        items = container.children;
    }
    
    // Set initial state
    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
    });

    inView(container, () => {
      animate(
        items,
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6, delay: stagger(0.15), type: "spring", bounce: 0.3 }
      );
    }, { amount: 0.1 });
  });

  // 3. Individual Reveal Elements
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    // Stop CSS animations from fighting
    el.style.animation = "none";
    el.style.opacity = "0";
    
    const xOffset = el.classList.contains('reveal-left') ? -40 : el.classList.contains('reveal-right') ? 40 : 0;
    const yOffset = xOffset === 0 ? 40 : 0;
    
    inView(el, () => {
      animate(
        el,
        { opacity: [0, 1], x: [xOffset, 0], y: [yOffset, 0] },
        { duration: 0.8, type: "spring", bounce: 0.2 }
      );
    }, { amount: 0.2 });
  });

  // 4. Buttons interaction
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      animate(btn, { scale: 1.05 }, { duration: 0.2, type: "spring", bounce: 0.5 });
    });
    btn.addEventListener("mouseleave", () => {
      animate(btn, { scale: 1 }, { duration: 0.2 });
    });
  });

  // 5. Nav scroll shadow
  const nav = document.querySelector('.site-nav, .brutalist-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }, { passive: true });
  }

  // 6. FAQ Accordion
  document.querySelectorAll('.faq-item h3').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
          openItem.classList.remove('open');
          const content = openItem.querySelector('.faq-content');
          if(content) animate(content, { height: 0, opacity: 0 }, { duration: 0.3 });
      });
      if (!wasOpen) {
        item.classList.add('open');
        const content = item.querySelector('.faq-content');
        if(content) {
            content.style.height = "auto";
            const targetHeight = content.offsetHeight;
            animate(content, { height: [0, targetHeight], opacity: [0, 1] }, { duration: 0.3, type: "spring", bounce: 0 });
        }
      }
    });
  });
});
