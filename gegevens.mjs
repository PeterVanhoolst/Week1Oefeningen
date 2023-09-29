import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam;
let geboorteJaar;
let huidigJaar;
let leeftijd;

naam = await userInput.question('Wat is je naam? ');
console.log(naam);

geboorteJaar = parseFloat(await userInput.question('In welk jaar bent u geboren?'));
huidigJaar = 2023
leeftijd =  (huidigJaar - geboorteJaar);

console.log("Hallo " + naam + ", je bent " + leeftijd + " jaar");

process.exit();

