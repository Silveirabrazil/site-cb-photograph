# Documentação do Site César Brasil Fotografia

## Estrutura de Pastas

```
photograph-site-cb/
├── contato.html
├── depoimentos.html
├── ensaios.html
├── index.html
├── post-popup-content.html
├── css/
│   ├── styles.css
│   ├── styles.css.map
│   └── scss/
│       ├── base/
│       ├── components/
│       ├── layout/
│       └── utilities/
├── galerias/
│   ├── gallery-casamento-eveline.html
│   ├── gallery-familia.html
│   └── ...
├── img/
│   ├── bg1.jpg
│   ├── ...
│   ├── catalogos/
│   ├── depoimentos/
│   └── popups/
├── js/
│   ├── main.js
│   ├── modules/
│   └── vendors/
├── modules/
│   ├── footer.html
│   └── header.html
├── package.json
├── README.md
├── DOCUMENTACAO.md
└── ...
```

## Descrição das Pastas Principais

- **css/**: Arquivos de estilos CSS e SCSS organizados por base, componentes, layout e utilitários.
- **img/**: Imagens do site, separadas por categorias (catálogos, depoimentos, popups, etc).
- **js/**: Scripts JavaScript, com módulos separados e bibliotecas de terceiros em `vendors`.
- **modules/**: Componentes HTML reutilizáveis, como header e footer.
- **galerias/**: Páginas de galerias de fotos específicas.

## Páginas Principais
- `index.html`: Página inicial do site.
- `contato.html`: Página de contato.
- `depoimentos.html`: Página de depoimentos de clientes.
- `ensaios.html`: Página de ensaios fotográficos.
- `post-popup-content.html`: Conteúdo de pop-up para posts.

## Boas Práticas Adotadas
- Estrutura modular de CSS (SCSS) e JS.
- Imagens organizadas por tipo e uso.
- Componentização de header e footer para fácil manutenção.
- Uso de bibliotecas externas via CDN e pasta `vendors`.
- Separação clara entre arquivos de conteúdo, estilo e script.
- Nomes de arquivos e pastas em minúsculo e sem espaços.

## Como Atualizar o Site
1. Edite os arquivos desejados localmente.
2. Salve as alterações.
3. Use a extensão/configuração de FTP para enviar os arquivos para o servidor HostGator (diretório `public_html`).

## Observações
- As imagens devem estar no formato `.jpg` para padronização e compatibilidade.
- O site utiliza Swiper.js para o carrossel de imagens.
- O código é responsivo e utiliza SCSS para facilitar a manutenção dos estilos.

## Contato
Dúvidas ou sugestões: cesarbrasilfotografia@cesarbrasilfotografia.com.br

---