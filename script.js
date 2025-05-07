document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe ativa ao item de menu da página atual
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
        
        // Para links que são apenas âncoras (#)
        if (link.getAttribute('href') === '#' && currentPage.includes(link.textContent.trim().toLowerCase())) {
            link.classList.add('active');
        }
    });
    
    // Melhorar a acessibilidade dos menus suspensos
    const dropdownItems = document.querySelectorAll('.nav-item');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (!dropdown) return;
        
        // Adiciona ARIA attributes para acessibilidade
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');
        
        item.addEventListener('mouseenter', function() {
            toggleDropdown(true);
        });
        
        item.addEventListener('mouseleave', function() {
            toggleDropdown(false);
        });
        
        // Para dispositivos touch e teclado
        link.addEventListener('focus', function() {
            toggleDropdown(true);
        });
        
        link.addEventListener('blur', function() {
            setTimeout(() => {
                if (!item.contains(document.activeElement)) {
                    toggleDropdown(false);
                }
            }, 100);
        });
        
        function toggleDropdown(show) {
            if (show) {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                link.setAttribute('aria-expanded', 'true');
            } else {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                link.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Fecha dropdowns ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-item')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.opacity = '0';
                menu.style.visibility = 'hidden';
                const link = menu.parentElement.querySelector('.nav-link');
                if (link) link.setAttribute('aria-expanded', 'false');
            });
        }
    });
});

// Funções da Galeria de imagens
function abrirLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Impede scroll
}

function fecharLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Fechar lightbox com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharLightbox();
    }
});

// Fechar lightbox clicando fora da imagem
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharLightbox();
    }
});