/* =====================================================
   CASAMENTO — CAMILA & GUILHERME
   js/main.js
   ===================================================== */

(function () {
    'use strict';

    /* -------------------------------------------------------
       1. CONTAGEM REGRESSIVA
    ------------------------------------------------------- */
    const weddingDate = new Date('2027-04-23T16:00:00-05:00'); // Horário de Cancún (CDT = UTC-5)

    function updateCountdown() {
        const now  = new Date();
        const diff = weddingDate - now;

        if (diff <= 0) {
            document.getElementById('days').textContent    = '0';
            document.getElementById('hours').textContent   = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent    = String(days).padStart(2, '0');
        document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* -------------------------------------------------------
       2. NAVBAR — EFEITO AO ROLAR
    ------------------------------------------------------- */
    const navbar = document.getElementById('navbar');

    function handleNavbarScroll() {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    /* -------------------------------------------------------
       3. MENU MOBILE
    ------------------------------------------------------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Fechar menu ao pressionar Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    /* -------------------------------------------------------
       4. FAQ — ACORDEÃO ACESSÍVEL
    ------------------------------------------------------- */
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const answer   = btn.nextElementSibling;
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros itens
            faqButtons.forEach(function (other) {
                if (other !== btn) {
                    other.setAttribute('aria-expanded', 'false');
                    other.nextElementSibling.classList.remove('open');
                }
            });

            // Alterna o atual
            btn.setAttribute('aria-expanded', String(!expanded));
            answer.classList.toggle('open', !expanded);
        });
    });

    /* -------------------------------------------------------
       5. SCROLL REVEAL — ANIMAÇÕES DE ENTRADA
    ------------------------------------------------------- */
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });

    /* -------------------------------------------------------
       6. SMOOTH SCROLL PARA LINKS INTERNOS
    ------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
                window.scrollTo({ top: top, behavior: 'smooth' });
            }
        });
    });

    /* -------------------------------------------------------
       7. COPIAR CHAVE PIX
    ------------------------------------------------------- */
    window.copyPixKey = function () {
        const keyEl  = document.getElementById('pixKeyValue');
        const msgEl  = document.getElementById('pixCopiedMsg');
        const keyText = keyEl ? keyEl.textContent.trim() : '';

        if (!keyText || keyText === 'SUA_CHAVE_PIX_AQUI') {
            return; // Chave ainda não configurada
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(keyText)
                .then(function () { showPixCopied(msgEl); })
                .catch(function () { fallbackCopy(keyText, msgEl); });
        } else {
            fallbackCopy(keyText, msgEl);
        }
    };

    function fallbackCopy(text, msgEl) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity  = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        try {
            document.execCommand('copy');
            showPixCopied(msgEl);
        } catch (_) {}
        document.body.removeChild(ta);
    }

    function showPixCopied(msgEl) {
        if (!msgEl) return;
        msgEl.style.display = 'block';
        setTimeout(function () { msgEl.style.display = 'none'; }, 3000);
    }

    /* -------------------------------------------------------
       8. FORMULÁRIO RSVP — VALIDAÇÃO E ENVIO
    ------------------------------------------------------- */
    const rsvpForm    = document.getElementById('rsvpForm');
    const rsvpSuccess = document.getElementById('rsvpSuccess');
    const submitBtn   = document.getElementById('submitBtn');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function (e) {
            if (!validateForm()) {
                e.preventDefault();
                return;
            }

            // Se o endpoint do Formspree ainda não foi configurado, mostrar alerta
            const action = rsvpForm.getAttribute('action') || '';
            if (action.includes('FORMSPREE_ENDPOINT_AQUI')) {
                e.preventDefault();
                alert(
                    'O formulário ainda não está configurado.\n\n' +
                    'Siga as instruções no comentário do index.html para ativar o Formspree.'
                );
                return;
            }

            // Desabilitar botão durante o envio
            if (submitBtn) {
                submitBtn.disabled  = true;
                submitBtn.textContent = 'Enviando...';
            }

            // Formspree redireciona para a mesma página após o envio.
            // Para capturar o sucesso via AJAX:
            e.preventDefault();
            const formData = new FormData(rsvpForm);

            fetch(rsvpForm.action, {
                method:  'POST',
                body:    formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(function (resp) {
                if (resp.ok) {
                    rsvpForm.style.display    = 'none';
                    rsvpSuccess.style.display = 'block';
                    rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    throw new Error('Erro no envio');
                }
            })
            .catch(function () {
                if (submitBtn) {
                    submitBtn.disabled    = false;
                    submitBtn.textContent = 'Confirmar Presença ♥';
                }
                alert('Ocorreu um erro ao enviar. Tente novamente ou entre em contato conosco.');
            });
        });
    }

    function validateForm() {
        let valid = true;

        const nomeInput  = document.getElementById('nome');
        const emailInput = document.getElementById('email');
        const nomeError  = document.getElementById('nomeError');
        const emailError = document.getElementById('emailError');

        // Valida nome
        if (!nomeInput.value.trim()) {
            nomeInput.classList.add('invalid');
            if (nomeError) nomeError.classList.add('visible');
            valid = false;
        } else {
            nomeInput.classList.remove('invalid');
            if (nomeError) nomeError.classList.remove('visible');
        }

        // Valida e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('invalid');
            if (emailError) emailError.classList.add('visible');
            valid = false;
        } else {
            emailInput.classList.remove('invalid');
            if (emailError) emailError.classList.remove('visible');
        }

        return valid;
    }

    // Remove o estado inválido ao digitar
    ['nome', 'email'].forEach(function (fieldId) {
        const input = document.getElementById(fieldId);
        if (input) {
            input.addEventListener('input', function () {
                input.classList.remove('invalid');
                const err = document.getElementById(fieldId + 'Error');
                if (err) err.classList.remove('visible');
            });
        }
    });

    /* -------------------------------------------------------
       9. INDICADOR DE SCROLL (hero) — ocultar ao rolar
    ------------------------------------------------------- */
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 120) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }, { passive: true });
    }

})();
