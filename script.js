document.addEventListener("DOMContentLoaded", () => {
    // Płynne pojawianie się elementów przy przewijaniu
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));

    // Płynne przewijanie do sekcji
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Obsługa zmiany języka
    window.changeLang = function(lang) {
        alert("Zmieniono język na: " + lang);
        // Tu można dodać logikę dynamicznej zmiany tekstów na stronie
    };
});
