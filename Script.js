document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navCloseBtn = document.querySelector('.nav-close');
    const themeSwitch = document.getElementById('checkbox');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // ---- Menu Mobile e Scroll Suave ----
    if (navToggle && navMenu) {
        const openMenu = () => {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            // mostra o botão de fechar (se existir)
            if (navCloseBtn) navCloseBtn.style.display = 'inline-block';
        };

        const closeMenu = () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            if (navCloseBtn) navCloseBtn.style.display = 'none';
        };

        navToggle.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) closeMenu(); else openMenu();
        });

        // Fecha o menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Botão de fechar dentro do menu
        if (navCloseBtn) {
            navCloseBtn.addEventListener('click', () => {
                closeMenu();
            });
            // Esconde por padrão
            navCloseBtn.style.display = 'none';
        }
    }

    // ---- Tema Claro/Escuro ----
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            // altera ícone do botão
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i>';
        } else {
            body.classList.remove('dark-mode');
            if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i>';
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
            localStorage.setItem('theme', 'dark');
        } else {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    // Clique no novo botão de alternância de tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = body.classList.contains('dark-mode');
            const newTheme = isDark ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // ---- Link do Google Maps ----
    const mapButton = document.querySelector('.map-btn');
    if (mapButton) {
        // Link para pesquisa do Google Maps por 'colegio pitagoras'
        const mapLink = 'https://www.google.com/maps/search/?api=1&query=colegio+pitagoras';
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
// (Removida integração direta com Google Maps — usamos um link que pesquisa por 'colegio pitagoras')
