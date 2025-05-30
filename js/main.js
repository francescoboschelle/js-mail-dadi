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
