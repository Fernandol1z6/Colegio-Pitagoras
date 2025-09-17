// Script.js

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const themeSwitch = document.getElementById('checkbox');
    const body = document.body;

    // ---- Menu Mobile ----
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Troca o ícone do menu (hambúrguer/X)
            const icon = navToggle.querySelector('.fas');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fecha o menu ao clicar em um link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.querySelector('.fas').classList.remove('fa-times');
                navToggle.querySelector('.fas').classList.add('fa-bars');
            });
        });
    }

    // ---- Tema Claro/Escuro ----
    // Verifica se há uma preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        // Se não houver preferência salva, verifica a preferência do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-mode');
            themeSwitch.checked = true;
        }
    }

    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // ---- Link do Google Maps ----
    // Substitua 'ENDERECO_DO_COLEGIO' pelo endereço real
    // O Google Maps geralmente interpreta endereços corretamente.
    // Para um link direto para coordenadas:
    // const latitude = 37.7749; // Exemplo: Latitude
    // const longitude = -122.4194; // Exemplo: Longitude
    // const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const mapButton = document.querySelector('.map-btn');
    if (mapButton) {
        // Substitua "Avenida da Liberdade, Lisboa, Portugal" pelo endereço exato da escola
        // Se você tiver coordenadas exatas, pode usar um formato como:
        // const mapLink = `https://www.google.com/maps?q=38.7223, -9.1393`; (Exemplo para Lisboa)
        const schoolAddress = encodeURIComponent("[Endereço Completo do Colégio]"); // Lembre-se de substituir este placeholder!
        const mapLink = `https://www.google.com/maps?q=${schoolAddress}`;

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