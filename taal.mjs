import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});




let geldigeTaal = await userInput.question("Maak uw keuze tussen NL, FR en EN.");

if(geldigeTaal == "NL"){

console.log("Hallo. U hebt NL gekozen.");

}else if(geldigeTaal == "FR"){
    console.log("Bonjour. Vous avez selecter FR.");
}else if(geldigeTaal == "EN"){
console.log("Hello. You selected EN.");
}else{ console.log("Ongeldige taal!");
}

process.exit();