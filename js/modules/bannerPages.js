// modules/bannerPages.js

// ... (qualquer outro código ou variáveis que você possa ter aqui) ...

export function initBanner() { // O nome da função permanece 'initBanner' para este módulo
    // ID definido para o banner das páginas internas, por exemplo, 'pageBannerImage'
    // Você precisará usar este ID no HTML das suas páginas internas.
    const bannerElement = document.getElementById('pageBannerImage');

    const images = [
        '/img/bg1.jpeg', // Adicione o caminho das suas imagens aqui
        '/img/bg2.jpeg',
        '/img/bg5.jpeg',
        '/img/bg19.jpeg',
        '/img/bg20.jpeg',
        '/img/bg22.jpeg'
    ];
    let currentBannerIndex = 0;

    function changeBannerImage() {
        // Usar a variável 'bannerElement' que foi definida
        if (bannerElement) {
            bannerElement.style.backgroundImage = `url('${images[currentBannerIndex]}')`;
            currentBannerIndex = (currentBannerIndex + 1) % images.length;
        } else {
            // Mensagem de erro atualizada para o ID e arquivo corretos
            console.error('Elemento "pageBannerImage" não encontrado em modules/bannerPages.js!');
        }
    }

    // A condição de inicialização deve verificar 'bannerElement'
    if (bannerElement && images.length > 0) {
        changeBannerImage();
        setInterval(changeBannerImage, 5000);
    }
}