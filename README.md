# Protótipo — Fazenda Sol Nascente (Candidatura a Estágio)

Este repositório contém um protótipo de landing page desenvolvido como parte de uma candidatura a estágio em desenvolvimento web. O projeto representa um cliente fictício, **Fazenda Sol Nascente**, e foi criado para demonstrar conhecimentos práticos em front-end.

> ATENÇÃO: Substitua o marcador `[Seu Nome]` no `README.md` e no rodapé do HTML pelo seu nome antes de enviar a candidatura.

## Objetivo do protótipo

Apresentar um projeto pequeno e funcional que demonstre:

- Conhecimento de HTML5 semântico e uso de `id` para navegação.
- Organização de estilos com CSS3 externo, uso de variáveis e pseudoclasses.
- Interatividade com JavaScript: validação, feedback ao usuário e navegação suave.
- Uso de framework (Bootstrap) para layout responsivo e componentes.
- Boas práticas de acessibilidade (atributos ARIA, foco visível, feedback `aria-live`).

## Conteúdo do diretório

- `Landing trabalho facul.html` — página principal do protótipo.
- `styles.css` — estilos externos (tema, pseudoclasses, utilitários).
- `script.js` — código cliente (validação de formulário, smooth scroll, UX).
- `README.md` — este arquivo.

## Como testar localmente

1. Abra o arquivo `Landing trabalho facul.html` diretamente no navegador (duplo-clique).

2. Ou rode um servidor local (recomendado):

```powershell
# Ir para a pasta do projeto (ajuste o caminho se necessário)
cd "c:\Users\Castr\Desktop\Projetos VSCode\Trabalho facul\Landing"

# Com Python 3 instalado:
python -m http.server 8000

# Abrir no navegador:
http://localhost:8000/Landing%20trabalho%20facul.html
```

## Funcionalidades importantes (para apresentar na entrevista)

- Navegação por âncoras com `smooth scroll`.
- Cards com efeito `:hover` e layout responsivo com Bootstrap.
- Formulário com validação client-side e feedback inline (`invalid-feedback` do Bootstrap).
- Elementos acessíveis (atributos `aria-*`, `role`, `aria-live`).

## Como personalizar antes de enviar a candidatura

1. Substitua `[Seu Nome]` no rodapé do arquivo `Landing trabalho facul.html` e atualize o título do README com seu nome.
2. Adicione um arquivo `CV.pdf` ou link para o seu portfólio, se desejar.
3. Se quiser, capture screenshots e inclua em uma pasta `assets/` para anexar ao e-mail de candidatura.

## Checklist da apresentação (sugestão)

- [ ] Abrir o protótipo e navegar pelas seções.
- [ ] Mostrar o código-fonte (estruturas de HTML, CSS e JS).
- [ ] Explicar as decisões de design (por que Bootstrap, por que validação no cliente etc.).
- [ ] Enumerar melhorias futuras (integração backend, testes E2E, otimização de imagens).

## Sugestões de melhorias técnicas (para discutir na entrevista)

- Integração com um serviço real de envio de e-mails (ex.: Formspree, Netlify Forms ou backend próprio).
- Testes automatizados end-to-end (Cypress/Playwright) e linting (ESLint, Stylelint).
- Otimização para performance (compressão de imagens, critical CSS).

## Licença

Uso educacional. Sinta-se livre para adaptar o código; recomenda-se incluir crédito ao autor original quando reutilizar.

---
Protótipo preparado para candidatura — personalize o nome e envie boa sorte!
