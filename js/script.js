document.addEventListener('DOMContentLoaded', () => {

    // --- BOTÓN VOLVER ARRIBA ---
    const scrollToTopButton = document.getElementById('scroll-to-top');
    if (scrollToTopButton) {
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
    }

    // --- ANIMACIONES DE ENTRADA AL HACER SCROLL (VERSIÓN CORREGIDA Y OPTIMIZADA) ---
    const sectionsToAnimate = document.querySelectorAll('.anim-fade-in');
    
    // Verificamos si hay elementos que animar antes de crear el observador
    if (sectionsToAnimate.length > 0) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                // Cuando un elemento entra en la vista
                if (entry.isIntersecting) {
                    // Añadimos la clase para hacerlo visible
                    entry.target.classList.add('visible');
                    // ¡LA PARTE CLAVE DE LA SOLUCIÓN!
                    // Dejamos de observar este elemento para que no se vuelva a activar
                    // y para mejorar el rendimiento.
                    observerInstance.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // La animación se activa cuando el 10% del elemento es visible
        });

        // Le decimos al observador que vigile cada una de las secciones
        sectionsToAnimate.forEach(section => {
            observer.observe(section);
        });
    }

    console.log("Página de María Luna Toys cargada con script optimizado.");
});
