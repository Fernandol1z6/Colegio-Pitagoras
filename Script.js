document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeSwitch = document.getElementById('checkbox');
    const body = document.body;

    // ---- Menu Mobile e Scroll Suave ----
    if (navToggle && navMenu) {
        const toggleMenu = () => {
            // Alterna a classe 'active' no menu e no botão
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        };

        navToggle.addEventListener('click', toggleMenu);

        // Fecha o menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Remove as classes para fechar o menu e resetar o ícone
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ---- Tema Claro/Escuro ----
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeSwitch.checked = true;
        } else {
            body.classList.remove('dark-mode');
            themeSwitch.checked = false;
        }
    };
    
    // Verifica e aplica a preferência de tema ao carregar
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Se não houver preferência salva, usa a do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            applyTheme('dark');
        } else {
            applyTheme('light');
        }
    }

    themeSwitch.addEventListener('change', () => {
        const newTheme = themeSwitch.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // ---- Link do Google Maps ----
    const mapButton = document.querySelector('.map-btn');
    if (mapButton) {
        // Substitua por um endereço real
        const schoolAddress = encodeURIComponent("Avenida da Liberdade, Lisboa, Portugal");
        const mapLink = `https://www.google.com/maps/place/${schoolAddress}`;
        mapButton.href = mapLink;
    }
    
    
    // Seções do menu (para scroll suave)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
