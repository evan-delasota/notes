const fs = require('fs')
const chalk = require('chalk');

const success = chalk.green.inverse;
const error = chalk.red.inverse;

const getNotes = () => {
    return 'Your notes...\n';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title, 
            body: body
        });
        saveNotes(notes);
        console.log(success("New note successfully added."));
    } else {
        console.log(error("Note title already taken."));
    }  
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });
    
    if (notesToKeep.length !== notes.length) {
        console.log(success('Note successfully removed!'))
        saveNotes(notesToKeep);
    } else {
        console.log(error('Note does not exist.'))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    if (notes.length === 0) {
        console.log(error("Note list is empty."))
    } else {
        console.log(chalk.inverse('Your note list'));
        notes.forEach((note) => {
            console.log("Title: " + note.title);
        });
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const targetNote = notes.find((note) => note.title === title);
    if (!targetNote) {
        console.log(error('No match found'))
    } else {
        console.log("Title: " + targetNote.title +"\nBody: " + targetNote.body);
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};