# Protótipo — Fazenda Sol Nascente

Protótipo de uma landing page criado como parte de uma candidatura a estágio. O projeto demonstra a integração de HTML5, CSS3 e JavaScript para uma solução fictícia do setor agrícola — **Fazenda Sol Nascente**.

## Conteúdo

- `Landing trabalho facul.html` — página principal do protótipo.
- `styles.css` — estilos personalizados.
- `script.js` — comportamento e validação do formulário.
- `README.md` — documentação do repositório.

## Como visualizar localmente

1. Abra `Landing trabalho facul.html` no navegador (duplo clique).

2. (Opcional) Executar um servidor local para testar rotas/recursos:

```powershell
cd "C:\Users\Castr\Desktop\Projetos VSCode\Trabalho facul\Landing"
python -m http.server 8000
# Em seguida abra: http://localhost:8000/Landing%20trabalho%20facul.html
```

## Principais funcionalidades

- Layout responsivo com Bootstrap.
- Cards de soluções com estilos e efeitos CSS.
- Formulário de contato com validação client-side e feedback acessível.
- Boas práticas de acessibilidade (atributos `aria-*`, `aria-live`, navegação por teclado).

## Melhorias sugeridas

- Conectar o formulário a um serviço de backend (API / serviço de e-mail).
- Adicionar testes E2E (Playwright/Cypress) e linting (ESLint/Stylelint).
- Otimização de imagens e build pipeline (minificação, cache).

## Autor

Giulliano Castro Andrade Rocha

## Licença

Este repositório pode ser usado para fins educacionais. Se desejar, posso adicionar uma `LICENSE` (MIT) neste repositório.

Repositório: https://github.com/ayelley/landing-trabalho-facul
# Protótipo — Fazenda Sol Nascente (Candidatura a Estágio)

Este repositório contém um protótipo de landing page desenvolvido como parte de um trabalho da faculdade em desenvolvimento web. O projeto representa um cliente fictício, **Fazenda Sol Nascente**, e foi criado para demonstrar conhecimentos práticos em front-end.

## Objetivo do protótipo

Apresentar um projeto pequeno e funcional que demonstre:

- Conhecimento de HTML5 semântico e uso de id para navegação.
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


## Sugestões de melhorias técnicas (para discutir na entrevista)

- Integração com um serviço real de envio de e-mails (ex.: Formspree, Netlify Forms ou backend próprio).
- Testes automatizados end-to-end (Cypress/Playwright) e linting (ESLint, Stylelint).
- Otimização para performance (compressão de imagens, critical CSS).

## Licença

Uso educacional. Sinta-se livre para adaptar o código;