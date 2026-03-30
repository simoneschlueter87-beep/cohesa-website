// COHESA — Main JavaScript
// Header scroll shadow, fade-in animations, smooth scroll

(function () {
    'use strict';

    // Header scroll shadow
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.scrollY > 20);
        }, { passive: true });
    }

    // Intersection Observer fade-in
    const fadeEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    if (fadeEls.length && 'IntersectionObserver' in window) {
        const obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.15 });
        fadeEls.forEach(function (el) { obs.observe(el); });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id.length > 1) {
                const target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
})();
