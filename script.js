// script.js - validação com feedback Bootstrap, spinner e smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll para âncoras internas (ignora links vazios e externos)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        e.preventDefault();
        const el = document.querySelector(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const form = document.getElementById('form-contato');
  const result = document.getElementById('form-result');
  const limpar = document.getElementById('limpar');
  const submitBtn = document.getElementById('submitBtn');
  const btnSpinner = document.getElementById('btnSpinner');
  const btnText = document.getElementById('btnText');

  function showMessage(text, kind) {
    if (!result) return;
    result.textContent = text;
    result.className = kind === 'error' ? 'text-danger' : kind === 'success' ? 'text-success' : 'text-muted';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setInvalid(field) {
    if (!field) return;
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
  }

  function setValid(field) {
    if (!field) return;
    field.classList.remove('is-invalid');
    field.classList.add('is-valid');
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // limpar estados anteriores
      form.querySelectorAll('.is-invalid, .is-valid').forEach(el => el.classList.remove('is-invalid', 'is-valid'));
      showMessage('', '');

      const nome = form.querySelector('#nome');
      const email = form.querySelector('#email');
      const telefone = form.querySelector('#telefone');
      const mensagem = form.querySelector('#mensagem');
      const consent = form.querySelector('#consent');

      let valid = true;

      if (!nome.value.trim()) { setInvalid(nome); if (valid) nome.focus(); valid = false; } else setValid(nome);

      if (!email.value.trim() || !isValidEmail(email.value.trim())) { setInvalid(email); if (valid) email.focus(); valid = false; } else setValid(email);

      if (telefone && telefone.value.trim()) {
        if (!telefone.checkValidity()) { setInvalid(telefone); if (valid) telefone.focus(); valid = false; } else setValid(telefone);
      }

      if (!consent || !consent.checked) {
        if (consent) { setInvalid(consent); if (valid) consent.focus(); }
        valid = false;
      } else if (consent) {
        consent.classList.remove('is-invalid');
      }

      if (!mensagem.value.trim()) { setInvalid(mensagem); if (valid) mensagem.focus(); valid = false; } else setValid(mensagem);

      if (!valid) { showMessage('Existem erros no formulário. Corrija-os e tente novamente.', 'error'); return; }

      // mostrar spinner e desabilitar botão
      if (submitBtn) { submitBtn.disabled = true; }
      if (btnSpinner) { btnSpinner.classList.remove('visually-hidden'); btnSpinner.setAttribute('aria-hidden', 'false'); }
      if (btnText) { btnText.textContent = 'Enviando...'; }
      showMessage('Enviando...', 'muted');

      // simula envio
      setTimeout(function () {
        showMessage('Obrigado, ' + nome.value.trim() + '. Recebemos sua solicitação e entraremos em contato em breve.', 'success');
        form.reset();
        form.querySelectorAll('.is-valid, .is-invalid').forEach(el => el.classList.remove('is-valid', 'is-invalid'));
        if (submitBtn) { submitBtn.disabled = false; }
        if (btnSpinner) { btnSpinner.classList.add('visually-hidden'); btnSpinner.setAttribute('aria-hidden', 'true'); }
        if (btnText) { btnText.textContent = 'Enviar'; }
      }, 1200);
    });
  }

  if (limpar && form) {
    limpar.addEventListener('click', function () {
      form.reset();
      showMessage('', '');
      form.querySelectorAll('.is-invalid, .is-valid').forEach(el => el.classList.remove('is-invalid', 'is-valid'));
      form.querySelector('input, textarea')?.focus();
    });
  }
});
