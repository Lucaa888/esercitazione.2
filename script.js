function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroCasuale = generateRandomInteger(1, 100);
let tentativi = 5;

const input = document.querySelector('#userInput');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', gioca);

function gioca() {
    const numeroUtente = parseInt(input.value);

    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
        message.textContent = "Input non valido. Inserisci un numero tra 1 e 100.";
        return;
    }

    if (numeroUtente === numeroCasuale) {
        message.textContent = "Bravo, hai vinto! Il numero era " + numeroCasuale;
        input.disabled = true;
        submitBtn.disabled = true;
        return;
    } else if (numeroUtente > numeroCasuale) {
        message.textContent = "Troppo grande.";
    } else {
        message.textContent = "Troppo piccolo.";
    }

    tentativi--;

    if (tentativi === 0) {
        message.textContent = "Mi dispiace, hai esaurito i tentativi. Il numero corretto era " + numeroCasuale;
        input.disabled = true;
        submitBtn.disabled = true;
    } else {
        message.textContent += " Ti rimangono " + tentativi + " tentativi.";
    }
}