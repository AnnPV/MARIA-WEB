document.addEventListener('DOMContentLoaded', () => {

    // --- BOTÓN VOLVER ARRIBA ---
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const toggleScrollToTopButton = () => {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    };
    window.addEventListener('scroll', toggleScrollToTopButton);
    scrollToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- ANIMACIONES DE ENTRADA AL HACER SCROLL ---
    const sectionsToAnimate = document.querySelectorAll('.anim-fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });

    console.log("Página de María Luna Toys rediseñada y cargada.");
});