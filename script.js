document.addEventListener('DOMContentLoaded', function() {
  // Atualiza ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Form handling (simulado)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if(!name || !email){
        formMsg.style.color = 'red';
        formMsg.textContent = 'Por favor preencha nome e e‑mail.';
        return;
      }
      formMsg.style.color = 'green';
      formMsg.textContent = 'Pedido enviado! Vamos responder em até 24 horas. (Simulação)';
      form.reset();
      setTimeout(()=> formMsg.style.color = 'var(--muted)', 3000);
    });
  }

  // Gallery modal
  const gallery = document.getElementById('gallery');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');

  if (gallery && modal && modalImg) {
    gallery.addEventListener('click', function(e){
      const img = e.target.closest('img');
      if(!img) return;
      modalImg.src = img.src;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });

    modal.addEventListener('click', ()=> {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
    });

    // Accessibility: Enter to open images when focused
    gallery.querySelectorAll('img').forEach(img=>{
      img.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') img.click(); });
    });
  }

  // WhatsApp quick action (altere para o número real)
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', ()=> {
      window.open('https://wa.me/5511999999999?text=Ol%C3%A1%20Sandra%2C%20gostaria%20de%20um%20or%C3%A7amento','_blank');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length > 1){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
