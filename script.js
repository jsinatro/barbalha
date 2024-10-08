  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 20;  // Tamanho padrão para Katakana
  const nameFontSize = 30; // Tamanho maior para sobrenomes
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height / fontSize));

  const chars = "א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת";
  const names = ["Saraiva", "Alves de Sousa", "Barbalha", "Viardo", "Saraiva", "Vidal de Lima", "Barbalha", "Alves de Sousa", "Silva Caldas"];

  function getRandomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drops.forEach((y, i) => {
      const isName = Math.random() > 0.98; // Reduzindo a frequência de sobrenomes
      const text = isName ? names[Math.floor(Math.random() * names.length)] : getRandomChar();
      ctx.fillStyle = isName ? '#0f0' : 'rgba(0, 255, 0, 0.6)'; // Verde mais claro para Katakana

      ctx.font = isName ? `${nameFontSize}px monospace` : `${fontSize}px monospace`; // Muda o tamanho da fonte
      ctx.fillText(text, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 0.75; // Aumentando a velocidade de queda das gotas
    });
  }

  setInterval(drawMatrix, 70); // Aumentando o intervalo para desacelerar um pouco

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  function entrar() {
    window.location.href = 'pagina_inicial.html'; // Altere para a URL da primeira página do seu site
  }
