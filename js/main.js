// js/main.js

import { setupModal } from './modules/modal.js';
import { setupMenuToggle } from './modules/menuToggle.js';
import { initBanner as initBannerHome } from './modules/bannerHome.js';
import { initBanner as initBannerPages } from './modules/bannerPages.js';
import { initLayoutLoader } from './modules/layoutLoader.js';
import { initializeGalleryModal } from './modules/galleryModal.js';
import { showPostPopup } from './modules/postPopup.js'; // ✅ Novo módulo incluído

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente carregado. Inicializando scripts.');

    // Inicializa banner da Home ou das Páginas
    if (document.querySelector('.hero-section')) {
        console.log('Elemento .hero-section encontrado. Inicializando banner da Home.');
        initBannerHome();
    } else if (document.querySelector('.page-banner-section')) {
        console.log('Elemento .page-banner-section encontrado. Inicializando banner das Páginas.');
        initBannerPages();
    } else {
        console.log('Nenhum banner principal ou de página encontrado para inicializar.');
    }

    // Inicializa carrossel Swiper se necessário
    if (document.querySelector('.mySwiper')) {
        import('./modules/carousel.js')
            .then(({ initSwiperCarousel }) => {
                console.log('Elemento .mySwiper encontrado. Inicializando carrossel.');
                initSwiperCarousel();
            })
            .catch(error => {
                console.error('Erro ao carregar o módulo carousel.js:', error);
            });
    }

    // Inicializa galeria genérica
    if (
        document.querySelector('.gallery-section') ||
        document.querySelector('.portfolio-category') ||
        document.getElementById('galleryModal')
    ) {
        console.log('Elementos para galeria de fotos encontrados. Inicializando modal de galeria genérico.');
        initializeGalleryModal();
    }

    // Inicializa galeria de portfólio
    if (document.querySelector('.portfolio-category')) {
        import('./modules/portfolioGallery.js')
            .then(({ initPortfolioGallery }) => {
                console.log('Elemento .portfolio-category encontrado. Inicializando galeria de portfólio.');
                initPortfolioGallery();
            })
            .catch(error => {
                console.error('Erro ao carregar o módulo portfolioGallery.js:', error);
            });
    }

    // ✅ Inicializa pop-up de postagem recomendada
    showPostPopup();

    // Inicializa header e footer (layout)
    initLayoutLoader()
        .then(success => {
            if (success) {
                console.log('Layout carregado com sucesso. Inicializando módulos dependentes.');
                setupMenuToggle();
                setupModal();
            } else {
                console.error('Falha ao carregar o layout. Alguns módulos podem não funcionar.');
            }
        })
        .catch(error => {
            console.error('Erro crítico na inicialização do layout:', error);
        });
});