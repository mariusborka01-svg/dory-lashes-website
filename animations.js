gsap.registerPlugin(ScrollTrigger);

const ease = 'power3.out';
const fadeUp  = { y: 40, opacity: 0, duration: 0.8, ease };
const fadeLeft  = { x: -60, opacity: 0, duration: 0.9, ease };
const fadeRight = { x:  60, opacity: 0, duration: 0.9, ease };

function st(trigger, start) {
  return { scrollTrigger: { trigger, start: start || 'top 82%' } };
}

// ── Gold dividers: left-to-right reveal ──────────────────
gsap.utils.toArray('.gold-divider').forEach(el => {
  gsap.from(el, { scaleX: 0, transformOrigin: 'left center',
    duration: 0.7, ease, ...st(el) });
});

// ══════════════════════════════════════════════════════════
// INDEX PAGE
// ══════════════════════════════════════════════════════════
if (document.querySelector('.about')) {

  // About: photo from left, text stagger from right
  gsap.from('.about-photo', { ...fadeLeft, ...st('.about', 'top 78%') });
  gsap.from(['.about .label', '.about-heading', '.about-body', '.about-stats', '.about .btn-outline'], {
    ...fadeUp, stagger: 0.11, ...st('.about', 'top 78%')
  });

  // Portfolio: heading then grid stagger
  gsap.from(['.portfolio .label', '.portfolio-heading'], { ...fadeUp, stagger: 0.1, ...st('.portfolio') });
  gsap.from('.portfolio-item', { y: 60, opacity: 0, duration: 0.65, stagger: 0.07, ease, ...st('.portfolio-grid') });

  // Prices
  gsap.from('.prices-visual', { ...fadeLeft, ...st('.prices', 'top 78%') });
  gsap.from(['.prices .label', '.prices-heading', '.prices-body', '.prices .btn-gold'], {
    ...fadeUp, stagger: 0.1, ...st('.prices', 'top 78%')
  });

  // Testimonials
  gsap.from(['.testimonials .label', '.testimonials-heading'], { ...fadeUp, stagger: 0.1, ...st('.testimonials') });
  gsap.from('.testimonials .review-card', { y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease, ...st('.testimonials-grid') });

  // Course transition: split left / right
  gsap.from('.ct-left', { ...fadeLeft, ...st('.course-transition') });
  gsap.from('.course-transition .btn-gold', { ...fadeRight, ...st('.course-transition') });
}

// ══════════════════════════════════════════════════════════
// COURSE PAGE
// ══════════════════════════════════════════════════════════
if (document.querySelector('.c-hero')) {

  // Hero: stagger on load
  const tl = gsap.timeline({ delay: 0.2 });
  tl.from('.c-hero .label',     { ...fadeUp, duration: 0.6 })
    .from('.c-hero-heading',    { ...fadeUp, duration: 0.9 }, '-=0.3')
    .from('.c-hero-divider',    { scaleX: 0, transformOrigin: 'left center', duration: 0.6, ease }, '-=0.3')
    .from('.c-hero-sub',        { ...fadeUp, duration: 0.7 }, '-=0.3')
    .from('.c-hero .btn-gold',  { ...fadeUp, duration: 0.6 }, '-=0.3')
    .from('.c-hero-note',       { opacity: 0, duration: 0.6 }, '-=0.2');

  // Hero media: parallax
  gsap.to('.c-hero-media', {
    yPercent: 15, ease: 'none',
    scrollTrigger: { trigger: '.c-hero', start: 'top top', end: 'bottom top', scrub: true }
  });

  // For whom
  gsap.from(['.for-whom .label', '.for-whom-heading'], { ...fadeUp, stagger: 0.14, ...st('.fw-header', 'top 82%') });
  gsap.from('.fw-card', {
    y: -90, opacity: 0, scale: 0.94, rotation: -2,
    duration: 1.1, stagger: 0.18,
    ease: 'power4.out',
    ...st('.fw-grid', 'top 86%')
  });

  // Program
  gsap.from(['.program .label', '.program-heading'], { ...fadeUp, stagger: 0.1, ...st('.program') });
  gsap.from('.day-card', {
    y: 60, opacity: 0, rotationX: 8, transformOrigin: 'top center',
    duration: 0.75, stagger: 0.12, ease, ...st('.days-grid')
  });

  // Included (replace CSS animation with GSAP)
  gsap.from(['.included .label', '.included-heading'], { ...fadeUp, stagger: 0.1, ...st('.included') });
  gsap.from('.inc-item', { y: 28, opacity: 0, duration: 0.55, stagger: 0.07, ease, ...st('.included-grid') });

  // Teacher: photo from left, text stagger
  gsap.from('.teacher-photo', { ...fadeLeft, ...st('.teacher', 'top 80%') });
  gsap.from(['.teacher .label', '.teacher-name', '.teacher-tagline', '.teacher .gold-divider', '.teacher-bio', '.teacher .btn-outline'], {
    ...fadeUp, stagger: 0.1, ...st('.teacher', 'top 80%')
  });

  // Pricing: card floats up + subtle scale
  gsap.from(['.pricing .label', '.pricing-heading'], { ...fadeUp, stagger: 0.1, ...st('.pricing') });
  gsap.from('.plan-card', {
    y: 50, opacity: 0, scale: 0.96,
    duration: 0.9, ease, ...st('.plan-card', 'top 85%')
  });

  // Testimonials
  gsap.from(['.c-testimonials .label', '.c-testimonials-heading'], { ...fadeUp, stagger: 0.1, ...st('.c-testimonials') });
  gsap.from('.c-tcard', { y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease, ...st('.c-testi-grid') });

  // FAQ
  gsap.from(['.faq .label', '.faq-heading'], { ...fadeUp, stagger: 0.1, ...st('.faq') });
  gsap.from('.faq-item', { y: 25, opacity: 0, duration: 0.55, stagger: 0.08, ease, ...st('.faq-grid') });

  // Final CTA: immediateRender:false prevents opacity:0 being set before trigger fires
  gsap.from(['.final-cta .label', '.final-cta-heading', '.final-cta-sub', '.final-cta .btn-gold', '.final-cta-note'], {
    opacity: 0, y: 36, duration: 0.75, stagger: 0.12, ease,
    immediateRender: false,
    scrollTrigger: { trigger: '.final-cta', start: 'top bottom', once: true }
  });
}
