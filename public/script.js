document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos.');
    return;
  }

  // Aqui só vai exibir a resposta, pois não tem backend para processar ainda
  document.getElementById('resposta').innerText = `Obrigado, ${nome}! Sua mensagem foi recebida.`;

  this.reset();
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // tira o salto automático
    const id = this.getAttribute('href').substring(1); // 'sobre'
    const section = document.getElementById(id);
    const offset = window.innerHeight / 2; // metade da tela
    const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href').substring(1);
    const section = document.getElementById(id);
    if (!section) return; // evita erro se id não existir

    const offset = window.innerHeight / 2;
    const topPos = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-leia-mais");
  const textoCompleto = document.querySelector(".texto-completo");

  btn.addEventListener("click", () => {
    if (textoCompleto.style.display === "none") {
      textoCompleto.style.display = "block";
      btn.textContent = "Leia menos";
    } else {
      textoCompleto.style.display = "none";
      btn.textContent = "Leia mais";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-leia-mais');
  const textoCompleto = document.querySelector('.texto-completo');
  const resumo = document.querySelector('.resumo');

  btn.addEventListener('click', () => {
    if (textoCompleto.style.display === 'none' || textoCompleto.style.display === '') {
      textoCompleto.style.display = 'block';
      resumo.style.display = 'none';
      btn.textContent = 'Leia menos';
    } else {
      textoCompleto.style.display = 'none';
      resumo.style.display = 'block';
      btn.textContent = 'Leia mais';
    }
  });
});
