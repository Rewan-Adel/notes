const { updateStrings } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');

//yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe : "add new notes",
    //define all Options will be given by commands
    builder: {
        title: {
            describe : "note title",
            demandOption : true, //mean that this property is required
            type: "string"
        },
        body: {
            describe : "note body",
            demandOption : true,
            type: "string"
        }
    },
    //execution function
    handler: function(argv){
        notes.addNotes(argv.title, argv.body);
    }
});

//create remove command
yargs.command({
    command:"remove",
    describe : 'Remove note',
    builder:{
        title:{
            describe: "Notes title",
            demandOption: true,
            type:"string" 
        },
    },
    handler: function(argv){
        return notes.deleteNotes(argv.title);
    }
});

yargs.command({
    command : 'get',
    describe: "Get all notes",
    handler: function(){
        return notes.gatNotes();
    }
});

yargs.command({
    command : 'read',
    describe: "Read note",
    builder:{
        title : {
            describe:"note's title",
            demandOption:true,
            type : "string"
        }
    },
    handler: function(argv){
        return notes.readNoteByTitle(argv.title);
    }
});

//to access the argv in yargs
yargs.parse();