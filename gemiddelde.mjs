import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som;

let jeGetal1 = parseFloat(await userInput.question('Geef een eerste getal in:'));
console.log(jeGetal1)

let jeGetal2 = parseFloat(await userInput.question('Geef een tweede getal in:'));
console.log(jeGetal2)

let jeGetal3 = parseFloat(await userInput.question('Geef een derde getal in:'));
console.log(jeGetal3)

let jeGetal4 = parseFloat(await userInput.question('Geef een laatste getal in:'));
som = (jeGetal1+jeGetal2+jeGetal3+jeGetal4)
console.log("Het gemiddelde van deze getallen is " + (som/4) + ".")

process.exit();