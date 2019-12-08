// const fs = require("fs")

// fs.writeFileSync("notes.txt", "This file was created by nodeJS")
// fs.appendFileSync("notes.txt", "\nps. JS rocks xD")
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command: "add",
    describe: "Adding a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note text",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Title: ${argv.title}`)
        console.log(argv.body);
    }
})

yargs.command({
    command: "remove",
    describe: "Removing a new note",
    handler: function () {
        console.log('remove an old note!')
    }
})

yargs.command({
    command: "list",
    describe: "Listing notes",
    handler: function () {
        console.log('listing all notes!')
    }
})

yargs.command({
    command: "read",
    describe: "Reading a note",
    handler: function () {
        console.log('read a note!')
    }
})

console.log(yargs.argv);