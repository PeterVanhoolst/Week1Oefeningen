import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeTemperatuur = parseFloat(await userInput.question('Hoeveel graden Celcius is het daar?'));
jeTemperatuur = ((jeTemperatuur*9/5+32))
alert("Het is daar " + jeTemperatuur + " graden Fahrenheit." );

process.exit();