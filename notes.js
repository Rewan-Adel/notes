const fs = require('fs');

const addNotes = function(title, body){
   const note = notesFile();
   const duplicateNote = note.filter(function (note){
      return note.title !== title
    });
   
    if(duplicateNote){
    note.push({
      "title": title,
      "body": body
    });

   saveNotes(note);
    console.log("note is added");
  }else console.log("title already exist");
};

const deleteNotes = function(title){
   const notes = notesFile();
   const noteRemoved  = notes.filter((note) => note.title !== title ); 

   if(notes.length > noteRemoved.length){
   saveNotes(noteRemoved);
   console.log('note is removed');
   }
   else console.log("title doesn't exist");
};

const gatNotes = function(){
   const notes = notesFile();
   notes.forEach(note => {
       console.log(note);
   });
};

const readNoteByTitle = function(title){
    const Notes = notesFile();
    const note = Notes.find((note) => note.title == title);
    if( !note ) console.log("note doesn't exist");
    console.log(note.body)
}

const notesFile = function(){
    try{
        const data = fs.readFileSync('./notes.json'); //read file
        const dataJSON = data.toString();  //converting to string
        return  JSON.parse(dataJSON);     //converting json String to obj
        
}catch(err){
    return [];
}
};

const saveNotes = function(note){
   //convert js object to json file
   const dataJSON = JSON.stringify(note); 
   fs.writeFileSync('./notes.json', dataJSON);
}; 

module.exports = {
    addNotes,
    deleteNotes,
    gatNotes,
    readNoteByTitle
};