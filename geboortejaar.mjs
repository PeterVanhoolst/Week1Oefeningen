import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam?');
console.log(jeNaam)
let jeLeeftijd = await userInput.question('Wat is je leeftijd? ');

let geboortejaar = (2023 - jeLeeftijd)
console.log('Hallo '+ jeNaam +'. Je bent geboren in: '+ geboortejaar);

process.exit();