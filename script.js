const surnames = ["Alves de Sousa", "Viardo", "Saraiva", "Vidal de Lima", "Silva Caldas"];
const output = document.getElementById('output');
const log = document.getElementById('log');
const command = document.getElementById('command');
let currentIndex = 0;
let currentSurname = '';
let typingSpeed = 150;
let delayBetweenCommands = 1000;
let typing = true;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function typeSurname() {
    if (typing) {
        if (currentSurname.length < surnames[currentIndex].length) {
            currentSurname += surnames[currentIndex].charAt(currentSurname.length);
            command.textContent = currentSurname + ' '; // Adiciona espaço após o sobrenome
            setTimeout(typeSurname, typingSpeed);
        } else {
            typing = false;
            setTimeout(() => {
                log.textContent += `\nlooking for '${currentSurname}'...\n`;
                setTimeout(() => {
                    const results = getRandomInt(183);
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

// Inicia a digitação
setTimeout(typeSurname, typingSpeed);
