function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroCasuale = generateRandomInteger(1, 100);
let tentativi = 5;

function gioca() {
    let input = document.getElementById('userInput').value;
    let numeroUtente = parseInt(input);
    let message = document.getElementById('message');

    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 100) {
        message.textContent = "Input non valido. Inserisci un numero tra 1 e 100.";
        return;
    }

    if (numeroUtente === numeroCasuale) {
        message.textContent = "Bravo, hai vinto! Il numero era " + numeroCasuale;
        document.getElementById('userInput').disabled = true;
        return;
    } else if (numeroUtente > numeroCasuale) {
        message.textContent = "Troppo grande.";
    } else {
        message.textContent = "Troppo piccolo.";
    }

    tentativi--;

    if (tentativi === 0) {
        message.textContent = "Mi dispiace, hai esaurito i tentativi. Il numero corretto era " + numeroCasuale;
        document.getElementById('userInput').disabled = true;
    } else {
        message.textContent += " Ti rimangono " + tentativi + " tentativi.";
    }
}