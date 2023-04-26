// le mie variabili
let userNome, userCognome, userColore, userEta, annoNascita, messaggio

// aggiungo costante per anno in cui ci troviamo
const annoCorrente = 2023;

// chiediamo all'utente il suo nome
userNome = prompt("Inserisci il tuo nome")
console.log(userNome)

// chiediamo all'utente il suo cognome
userCognome = prompt("Inserisci il tuo cognome")
console.log(userCognome)

// chiediamo all'utente il suo colore preferito
userColore = prompt("Inserisci il tuo colore preferito")
console.log(userColore)

// chiediamo all'utente la sia età
userEta = prompt("Inserisci la tua età")
console.log(userEta)

// sottraiamo l'anno di nascita all'anno corrente
annoNascita = annoCorrente - userEta;
console.log(annoNascita)

// creiamo messaggio per l'utente
messaggio = `La tua password è ${ userNome + userCognome + userColore + annoNascita}`;

// e gli diciamo quale sarà la sua password
document.getElementById("mio_id").innerHTML = messaggio;
