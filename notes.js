const fs = require("fs")
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.magenta('Your notes:'))
        notes.forEach((note) => {
            console.log(`Title: ${note.title}`)
            console.log(note.body)
        })
    } else {
        console.log(chalk.red('No notes!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.body);
    } else {
        console.log(chalk.red('Note not found'))
    }
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        console.log(chalk.green.inverse('Added note.'))
        saveNotes(notes)
    } else {
        console.log(chalk.red.inverse('Note title used!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => {
        return note.title !== title
    })

    if (newNotes.length === notes.length) {
        console.log(chalk.red.inverse('Note not found!'));
    } else {
        console.log(chalk.green.inverse('Note removed.'));
        saveNotes(newNotes)
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (err) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    listNotes,
    readNote,
    addNote,
    removeNote
};