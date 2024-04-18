#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const question = chalk.bgGray, ans = chalk.green, heading = chalk.blueBright.underline, notification = chalk.red;
let characterCount = 0, wordsWithWhitespace = 0, showNotification = false;
const words = []; //,
let characters = [];
const userParagraph = await inquirer.prompt({
    name: 'text',
    type: 'input',
    message: question('Enter your paragraph to check count of words & characters:')
});
const textArray = userParagraph.text.split(' ');
textArray.forEach(arrayValue => {
    if (arrayValue.trim() !== '' && arrayValue.includes('\t') === false) {
        words.push(arrayValue);
        characters.push(arrayValue.split(''));
        characterCount += arrayValue.length;
    }
    else {
        wordsWithWhitespace += 1;
        showNotification = true;
    }
});
console.log(heading('\tProvided Text Contains'));
console.log(ans(`${ans(words.length)} correctly typed words with ${ans(characterCount)} characters`));
if (showNotification !== false) {
    if (wordsWithWhitespace > 1) {
        console.log(notification(wordsWithWhitespace, 'words skipped due to whitespaces'));
    }
    else {
        console.log(notification(wordsWithWhitespace, 'word skipped due to whitespaces'));
    }
}
// console.log('words array:',words);//check elements if required
// console.log('characters array:',characters);//check elements if required
