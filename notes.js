const fs = require("fs")

const getNotes = function (fileName) {
    const myNotes = fs.readFileSync(fileName);

    return "your notes..."
    return myNotes;
}

module.exports = getNotes;