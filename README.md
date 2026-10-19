# Site Marcelo Vitorino

Página institucional de Marcelo Vitorino, professor e consultor de marketing político.
Site estático: HTML, CSS e JavaScript puros, sem build e sem dependências.

## Estrutura

```
index.html        conteúdo e estrutura da página
css/style.css     estilos, cores, animações e versões para celular
js/main.js        palavra rotativa, urna interativa, contadores, efeito dos cards e formulário do WhatsApp
assets/img/       pasta para fotos e imagens (vazia)
```

## Como abrir

Abra o `index.html` direto no navegador. Para testar como num servidor:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Cores

Todas as cores ficam em variáveis no topo de `css/style.css`, no bloco `:root`.
O tema escuro do sistema redefine as mesmas variáveis logo abaixo.

| Variável     | Uso                                         | Valor     |
|--------------|---------------------------------------------|-----------|
| `--pad`      | Azul-marinho das faixas, cards e rodapé     | `#03182C` |
| `--casing`   | Fundo gelo das seções claras                | `#F5F8FA` |
| `--pad-ink`  | Texto branco sobre o azul                   | `#FFFFFF` |
| `--cta`      | Botões de ação                              | `#FFFFFF` |
| `--hl`       | Destaque sobre o azul (azul-aço claro)      | `#8DB4D9` |
| `--hl-2`     | Destaque sobre o gelo (azul profundo)       | `#2F5F8C` |

## Fontes

Carregadas do Google Fonts: Archivo (títulos), Public Sans (texto) e IBM Plex Mono (rótulos e números).

## Pontos para editar

- **Fotos:** coloque os arquivos em `assets/img/` e insira com `<img src="assets/img/arquivo.jpg" alt="...">`.
- **WhatsApp:** o número aparece em `index.html` e em `js/main.js` (`5561998156161`).
- **Palavras rotativas da abertura:** lista `words` no início de `js/main.js`.
- **Números da urna:** lista `stats` em `js/main.js`.
- **Animações:** respeitam a preferência "reduzir movimento" do sistema. As que aparecem ao rolar usam `animation-timeline: view()`. Em navegadores sem suporte, o conteúdo aparece normalmente, sem a animação.

## Publicar

Por ser estático, funciona em qualquer hospedagem: GitHub Pages, Netlify, Vercel, Cloudflare Pages ou o servidor atual do site.
