const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');

const successfulPrint = chalk.bold.green;
const failedPrint = chalk.bold.inverse.red;

const command = process.argv[2];

if (command === "add") {
    console.log("Adding note...\n");
} else if(command === "remove") {
    console.log("Removing note...\n");
} else {
    console.log("Invalid command, try using 'add' or 'remove' in the argument line.\n");
}