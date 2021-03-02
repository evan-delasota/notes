const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');

const successfulPrint = chalk.bold.green;
const failedPrint = chalk.bold.red;

const msg = notes();
const url = 'https://mead.io';
const badUrl = 'https:/mead.io';

console.log(msg);
console.log(successfulPrint(validator.isEmail('username@example.com')));
console.log(successfulPrint(validator.isURL(url)));


if (validator.isURL(badUrl)) {
    console.log(successfulPrint('true')); 
} else {
    console.log(failedPrint('false'));   
}