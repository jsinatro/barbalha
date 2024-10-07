// Variáveis globais para os sobrenomes e elementos do DOM
const surnames = [" Alves de Sousa", " Viardo", " Saraiva", " Vidal de Lima", " Silva Caldas"];
const output = document.getElementById('output');
const log = document.getElementById('log');
const command = document.getElementById('command');
let currentIndex = 0;
let currentSurname = '';
let typingSpeed = 150;
let delayBetweenCommands = 1000;
let typing = true;

// Função para gerar um número aleatório
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Função para digitar os sobrenomes no terminal
function typeSurname() {
    if (typing) {
        if (currentSurname.length < surnames[currentIndex].length) {
            currentSurname += surnames[currentIndex].charAt(currentSurname.length);
            command.textContent = currentSurname + ' '; // Adiciona espaço após o sobrenome
            setTimeout(typeSurname, typingSpeed);
        } else {
            typing = false;
            setTimeout(() => {
                const results = getRandomInt(183);
                log.textContent += `\nlooking for '${currentSurname}'...\n`;
                setTimeout(() => {
                    log.textContent += `${results} results found.\n`;
                    typing = false;

                    // Limpa o log se o terminal estiver cheio
                    if (log.scrollHeight >= log.clientHeight) {
                        currentSurname = 'clear';
                        command.textContent = currentSurname;
                        setTimeout(() => {
                            log.textContent += `\n${currentSurname}\n`;
                            setTimeout(() => {
                                log.textContent = ''; // Limpa o log
                                command.textContent = ''; // Limpa o comando
                                currentIndex = (currentIndex + 1) % surnames.length;
                                currentSurname = '';
                                typing = true;
                                setTimeout(typeSurname, delayBetweenCommands);
                            }, 1000); // Espera 1 segundo para limpar
                        }, 200);
                    } else {
                        currentIndex = (currentIndex + 1) % surnames.length;
                        currentSurname = '';
                        command.textContent = '';
                        typing = true;
                        setTimeout(typeSurname, delayBetweenCommands);
                    }
                }, 2000);
            }, 500);
        }
    }
}

// Inicia a digitação somente na página index
if (document.title === "Terminal de Sobrenomes") {
    setTimeout(typeSurname, typingSpeed);
}

// Adiciona evento para abrir a biografia
document.getElementById('avelina-link').addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    log.innerHTML += `<br>Maria Avelina de Sousa:<br>`;
    log.innerHTML += `
        No dia 10 de novembro de 1935, em uma época de grandes mudanças globais e políticas, nascia Maria Avelina de Sousa, em Barbalha, Ceará. No Brasil, Getúlio Vargas estava no poder, conduzindo o país através de um governo centralizador, enquanto, no Vaticano, o Papa Pio XI liderava a Igreja Católica. A região do Cariri, onde Barbalha está situada, era marcada por uma economia baseada na agricultura e pecuária, com uma população majoritariamente católica e devota. A cidade, conhecida por suas tradições religiosas e culturais, vivia o clima das celebrações de fim de ano e preparativos para as festividades locais.

Avelina foi batizada no mesmo dia de seu nascimento pelo Padre José Correia Lima, tendo como padrinhos Joaquim Francisco de Sá e sua tia, Idelzuite Alves da Silva (Tia Dé). Era filha de João de Sousa Lima e Maria do Carmo de Sousa e cresceu em uma grande família com dez irmãos: Francisco, Maria das Dores (Bil), Maria de Lourdes, José (Zuca), Pedro, Antônio, Mariana, Vicente Paulo e Raimundo Apolinário. Dos irmãos, apenas Avelina, Zuca e Vicente Paulo ainda estão vivos.

Ela tem uma linhagem familiar rica, sendo neta de Raimundo Alves de Sousa e Ana Vidal de Lima pelo lado paterno, e de João da Silva Caldas e Maria Mimosa de Sousa pelo lado materno. Seus bisavós incluem figuras como o Capitão Reinaldo Alves de Sousa e Sebastiana Maria da Conceição, personagens influentes em sua genealogia.

Em 28 de novembro de 1956, Avelina casou-se com Raimundo Severino de Sousa, conhecido como Abel. A união, além de amorosa, carregava uma ligação familiar profunda, pois Avelina e Abel eram primos, uma vez que Abel era filho de Severino Saraiva de Sousa e Maria de Sousa Lima, irmã de João de Sousa Lima. A cerimônia foi celebrada em Barbalha pelo Padre Erfo Roters, com as testemunhas Joaquim Aliceral Caldas e Horácio Cornélio da Silva.

Do casamento de Avelina e Abel, nasceram oito filhos: Maria do Rosário de Sousa, José Zilton de Sousa (Dedé), Antônio Severino de Sousa, Maria do Socorro de Sousa, Francisco de Assis de Sousa (Assis), Severino de Sousa Neto (Sousa), João Batista de Sousa e Vicente Severino de Sousa. José Zilton, pai de Cícero Tiago e Paulo Jeferson, faleceu em 2021, e Antônio faleceu em 1985.

Avelina tem uma extensa descendência, com quinze netos: João Sinatro e Sabrina (filhos de Maria do Rosário); Paulo Jeferson e Cícero Tiago (filhos de José Zilton); Maria Rayane (filha de Socorro); Maria Tainá, João Thailan e Thifany (filhos de Assis); Stefane e Talia (filhas de Sousa); Mikaelly, Matthews e Maisa (que faleceu pouco após o nascimento, filhos de João Batista); e Victor Luan e Maria Alice (filhos de Vicente). Além disso, tem doze bisnetos: Miyuki, Harumi e Akemi (filhas de João Sinatro); Jenifer, Maria Eduarda e Eduardo (filhos de Sabrina); Laura Beatriz e Ana Lívia (filhas de Paulo Jeferson); João Miguel e Emanuel Tobias (filhos de Maria Rayane); Maria Sophia (filha de Maria Tainá); e João Hércules (filho de Stefane). E já tem uma trineta: Stela Maria, filha de Jenifer.

Apesar das dificuldades e perdas ao longo da vida, como a morte de seu marido Abel em 29 de junho de 2016, e de três filhos que faleceram pouco após o nascimento (Maria de Fátima, em 1957, José Zilton, em 1958, e João Batista, em 1974), Avelina continua viva aos 88 anos, rodeada de sua grande e amorosa família, mantendo vivas as tradições e a história de seus antepassados.

    `;
    log.scrollTop = log.scrollHeight; // Rola para o final do log
});
