// Configuração centralizada de links
const siteLinks = {
    // Páginas principais
    home: 'index.html',
    sobre: 'sobre_vigilancia.html',
    boletim: 'boletim_vigilancia.html',
    tipificacoes: 'tipificacoes.html',
    mapas: 'mapas.html',
    osc: 'osc.html',
    oscconheca: 'conheca_osc.html', 
    oscmodelos: 'modelos.html',
    oscmarcos: 'marcos_legais.html',
    assistencia: 'assistencia.html',
    
    //subpastas
    subhome: '../index.html',
    subsobre: '../sobre_vigilancia.html',
    subboletim: '../boletim_vigilancia.html',
    subtipificacoes: '../tipificacoes.html',
    submapas: '../mapas.html',
    subosc: '../osc.html',
    oscconheca: 'conheca_osc.html', 
    oscmodelos: 'modelos.html',
    oscmarcos: 'marcos_legais.html',
    subassistencia: '../assistencia.html',





};

// Função para aplicar os links
function applyMenuLinks() {
    // Seleciona todos os elementos com data-link
    const links = document.querySelectorAll('[data-link]');
    
    // Aplica os links correspondentes
    links.forEach(link => {
        const linkKey = link.getAttribute('data-link');
        if (siteLinks[linkKey]) {
            link.href = siteLinks[linkKey];
        }
    });
}

// Executa quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    applyMenuLinks();
    
    // Inicializa os dropdowns (função do seu script.js)
    if (typeof initDropdowns === 'function') {
        initDropdowns();
    }
});