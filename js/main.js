// Mail

const emails = [
  "francesco@gmail.com",
  "marco@gmail.com",
  "fabio@gmail.com",
  "paolo@gmail.com",
  "artur@gmail.com",
];

const input = prompt("Inserisci la tua email");

if (input) {
  let isEmailAllowed = false;
  for (let i = 0; i <= emails.length - 1; i++) {
    if (input === emails[i]) {
      isEmailAllowed = true;
    }
  }

  if (isEmailAllowed) {
    alert("Accesso garantito. Divertiti alla festa!");
  } else {
    alert("Accesso negato. Prova a contattare l'organizzatore.");
  }
} else {
  alert("Devi inserire un email!");
}

// Gioco dei dadi

const userScore = Math.floor(Math.random() * (6 - 1) + 1);
const computerScore = Math.floor(Math.random() * (6 - 1) + 1);

if (userScore === computerScore) {
  alert(`Avete pareggiato! Punteggio: ${userScore}`);
} else if (userScore > computerScore) {
  alert(
    `Hai vinto contro il computer! Il tuo punteggio: ${userScore}. Punteggio del computer: ${computerScore}`
  );
} else {
  alert(
    `Ha vinto il computer! Il tuo punteggio: ${userScore}. Punteggio del computer: ${computerScore}`
  );
}
