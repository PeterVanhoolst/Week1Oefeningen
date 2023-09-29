import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeTassenKoffie = parseFloat(await userInput.question('Hoeveel tassen koffie drink je gemiddeld per dag'));
console.log('Op jaarbasis drinkt u gemiddeld ' + (jeTassenKoffie * 365) + ' tassen koffie.')

process.exit();