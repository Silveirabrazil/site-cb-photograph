// js/postPopup.js
export function showPostPopup() {
    const isHome =
        window.location.pathname === '/' ||
        window.location.pathname.endsWith('/index.html');

    if (!isHome) return;

    // Remove any existing popups before creating a new one
    // This prevents multiple popups if the function is called again
    const existingOverlay = document.getElementById('post-popup-overlay');
    if (existingOverlay) existingOverlay.remove();
    const existingPopup = document.getElementById('post-popup');
    if (existingPopup) existingPopup.remove();


    setTimeout(async () => {
        // Creates the popup overlay
        const overlay = document.createElement('div');
        overlay.id = 'post-popup-overlay';
        overlay.classList.add('post-popup-overlay');

        // Creates the popup content container
        const popup = document.createElement('div');
        popup.id = 'post-popup';
        popup.classList.add('post-popup');

        try {
            // --- VERIFIQUE ESTE CAMINHO NOVAMENTE ---
            // Certifique-se de que 'post-popup-content.html' está no lugar certo
            // Se 'js/postPopup.js' está em 'js/' e 'post-popup-content.html' está na raiz do seu projeto,
            // então o caminho 'post-popup-content.html' está correto.
            // Se 'post-popup-content.html' estiver em uma pasta 'html/', o caminho seria '../html/post-popup-content.html'
            // se o js estiver em 'js/'.
            const response = await fetch('post-popup-content.html'); 

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const popupHtmlContent = await response.text();
            popup.innerHTML = popupHtmlContent;

            // --- CORREÇÃO AQUI: ANEXAR O POPUP AO OVERLAY, E ENTÃO O OVERLAY AO BODY ---
            overlay.appendChild(popup); // O popup agora é um filho do overlay
            document.body.appendChild(overlay); // O overlay (com o popup dentro) vai para o body
            // --- FIM DA CORREÇÃO ---
            
            // Trava o scroll do body enquanto o popup está ativo
            document.body.style.overflow = 'hidden';

            // Add event listener for the close button
            // Certifique-se que o botão de fechar dentro do 'post-popup-content.html' tem o ID 'close-post-popup'
            const closeButton = document.getElementById('close-post-popup');
            if (closeButton) {
                closeButton.onclick = () => {
                    overlay.classList.remove('active');
                    popup.classList.remove('active');
                    document.body.style.overflow = ''; // Restaura o scroll
                    setTimeout(() => {
                        overlay.remove();
                        // popup.remove(); // Não é mais necessário, pois o popup será removido junto com o overlay
                    }, 300);
                };
            }

            // Add event listener to close popup by clicking overlay
            overlay.addEventListener('click', (event) => {
                if (event.target === overlay) { // Verifica se o clique foi diretamente no overlay
                    overlay.classList.remove('active');
                    popup.classList.remove('active');
                    document.body.style.overflow = ''; // Restaura o scroll
                    setTimeout(() => {
                        overlay.remove();
                        // popup.remove(); // Não é mais necessário
                    }, 300);
                }
            });

            // Add event listener to close popup by pressing ESC key
            document.addEventListener('keydown', (event) => {
                // Apenas remove se o popup estiver realmente visível (evita remover listeners desnecessariamente)
                if (event.key === 'Escape' && overlay.classList.contains('active')) { 
                    overlay.classList.remove('active');
                    popup.classList.remove('active');
                    document.body.style.overflow = ''; // Restaura o scroll
                    setTimeout(() => {
                        overlay.remove();
                        // popup.remove(); // Não é mais necessário
                    }, 300); // Mantenha o delay consistente com os outros
                }
            });

            // Activate the popup (add 'active' class to show and animate)
            // Small delay to ensure elements are in the DOM before transition
            setTimeout(() => {
                overlay.classList.add('active');
                popup.classList.add('active');
            }, 50);

        } catch (error) {
            console.error("Erro ao carregar o conteúdo do pop-up:", error);
            // Optional: display an error message or a fallback popup
            // Se houver um erro, remova os elementos criados para não deixar lixo no DOM
            if (overlay.parentNode === document.body) overlay.remove();
            if (popup.parentNode === document.body) popup.remove();
            document.body.style.overflow = ''; // Garante que o scroll seja restaurado em caso de erro
        }
    }, 1000); // Atraso inicial para mostrar o popup (opcional)
}