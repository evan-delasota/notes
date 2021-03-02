const fs = require('fs')

fs.writeFileSync("notes.txt", "This file was created by Node.js\n");

fs.appendFileSync('notes.txt', 'Appending this message to the file.\n');