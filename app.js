
const validator  = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');

const notes = require('./notes');


//CREATE ADD COMMAND
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
            title:{
                describe:'Add Title',
                demandOption:true,
                type:'string'
            },
            body:{
                describe:'Add Body ',
                demandOption:true,
                type:'string'
            }
    },
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
    }
});

//REMOVE COMMAND
yargs.command({
    command:"remove",
    describe:'Remove a note',
   
    builder:{
            title:{
                describe:'Remove Title',
                demandOption:true,
                type:'string'
            },
            body:{
                decribe:'Remove body',
                // demandOption:true,
                // type:'string'
            }
    },
    handler:function(argv){
       notes.removeNote(argv.title);
    }
})

//LIST COMMAND
yargs.command({
    command:'list',
    describe:'List  all notes',
    builder:{
            title:{
                     describe:'Note title',
                    //  demandOption:true,
                    //  type:'string'
                },
                body:{
                    // describe:'Note Body',
                    // demandOption:true,
                    type:'string'
                }
            },
            
    handler:function(argv){
        notes.listNotes()
    }
});

//READ COMMAND

yargs.command({
    command:'read',
    describe:'Read  all notes',
    builder:{
            title:{
                     describe:'Note title',
                    //  demandOption:true,
                    //  type:'string'
                },
                body:{
                    // describe:'Note Body',
                    // demandOption:true,
                    type:'string'
                }
            },
            
    handler:function(argv){
        notes.readNotes(argv.title,argv.body);
    }
});

yargs.parse();