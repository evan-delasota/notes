const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Ddd, Remove, Read, List command creation
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note!');
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note...');
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List the current notes',
    handler: function() {
        console.log('Listing out all the notes...');
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reads the note', 
    handler: function() {
        console.log('Reading out the note')
    }
})
