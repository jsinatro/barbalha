  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 20;  // Tamanho padrão para Katakana
  const nameFontSize = 30; // Tamanho maior para sobrenomes
  const columns = canvas.width / fontSize;
  const drops = Array.from({ length: columns }).map(() => Math.floor(Math.random() * canvas.height / fontSize));

const chars = "בראשית ברא אלהים את השמים ואת הארץ והארץ היתה תהו ובהו וחשך על פני תהום ורוח אלהים מרחפת על פני המים ויאמר אלהים יהי אור ויהי אור וירא אלהים את האור כי טוב ויבדל אלהים בין האור ובין החשך ויקרא אלהים לאור יום ולחשך קרא לילה ויהי ערב ויהי בקר יום אחד ויאמר אלהים יהי רקיע בתוך המים ויהי מבדיל בין מים למים ויעש אלהים את הרקיע ויבדל בין המים אשר מתחת לרקיע ובין המים אשר מעל לרקיע ויהי כן ויקרא אלהים לרקיע שמים ויהי ערב ויהי בקר יום שני ויאמר אלהים יקוו המים מתחת השמים אל מקום אחד ותראה היבשה ויהי כן ויקרא אלהים ליבשה ארץ ולמקוה המים קרא ימים וירא אלהים כי טוב"; 
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
