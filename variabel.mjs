import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeGetal1 = parseFloat(await userInput.question('Geef een eerste getal in:'));
console.log(jeGetal1)

let jeGetal2 = parseFloat(await userInput.question('Geef een tweede getal in:'));
console.log( 'Je getallen waren ' + jeGetal1 + ' en ' + jeGetal2  +'.'
+
'De som van je getallen is ' + (jeGetal1 + jeGetal2) +' '+
'Het verschil is ' + (jeGetal1 - jeGetal2) + ' '+
'Het product is ' + (jeGetal1 * jeGetal2) + ' '+
'De deling is ' + (jeGetal1 / jeGetal2));

process.exit();