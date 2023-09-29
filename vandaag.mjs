import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeDag = await userInput.question('Welke dag van de week is het vandaag? ');
console.log(jeDag);

let jeMaand = await userInput.question('Welke maand zijn we vandaag? ');
console.log(jeMaand);

let jeAantal = await userInput.question('De hoeveelste dag van de maand is het? ');
console.log('Het is vandaag '+ jeDag + ' '+ jeAantal + ' '+ jeMaand +'. ');

process.exit();