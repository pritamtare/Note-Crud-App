const chalk = require('chalk');
const fs = require('fs');
const { stringify } = require('querystring');

// --------------------------------------------add 

const addNotes = ( title , body )=>{
    const notes = loadNotes();

    const duplictaeNote = notes.filter((note)=>{
        return note.title === title
    })    


    if( duplictaeNote.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green('New note added'));
    }
else{
    console.log(chalk.red('note already taken'));
}
 
}


// -------------------------- save the notes
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}


//-------------------------load the notes
const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    }catch(e){
        return [];
    } 
}




// ---------------------------------------------- remove


const removeNote = (title)=>{
    const notes = loadNotes();
    // console.log(notes)
    const keepNotes = notes.filter((note)=>{
        return note.title !==  title
    })


    if(notes.length > keepNotes.length){
        saveNotes(keepNotes)
        console.log(chalk.inverse.green("Removed"))

    }else{
        console.log(chalk.inverse.red("no such title found"))   
    }
}

// ---------------------------------------list
const listNotes = ()=>{
    const notes =  loadNotes();
    console.log(chalk.inverse.yellow('Your list'));
    notes.forEach((note) => {
        console.log(  note.title);
    });
}


// ----------------------------------------read
const readNotes = (title,body)=>{
    const notes = loadNotes();
    const note = notes.find((note)=>{
        return note.title === title
    })

    if(note){
        console.log(chalk.white.inverse( note.title ))
        console.log(chalk.white.bold(note.body))
    }
    else{
        console.log("no note found")
    }
}




module.exports = { 
     addNotes:addNotes,
     removeNote:removeNote,
     listNotes:listNotes,
     readNotes :readNotes
    }