/* ═══════════════════════════════════════
   OMROY.DEV — Brutalist Paper
   Minimal, intentional JavaScript.
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Mobile Navigation Toggle --- */
    const toggle = document.querySelector('.nav-toggle');
    const overlay = document.querySelector('.nav-overlay');

    if (toggle && overlay) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow =
                overlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close overlay when a link is clicked
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    /* --- Scroll Reveal (IntersectionObserver) --- */
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        reveals.forEach(el => observer.observe(el));
    }

    /* --- Active Navigation Link --- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Desktop nav
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (
            href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')
        ) {
            link.classList.add('active');
        }
    });

    // Mobile overlay nav
    document.querySelectorAll('.nav-overlay a').forEach(link => {
        const href = link.getAttribute('href');
        if (
            href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')
        ) {
            link.style.color = 'var(--accent)';
        }
    });

});
