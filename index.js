let addnote=document.querySelector('#addnote');
let main=document.querySelector('#main');
let note=document.querySelector('.note');

//Saving Notes
const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes)
    //storing the note's value in an array in localstorage
    const data=[];
    notes.forEach((item) => {
      data.push(item.value);  
    });
    if (data.length===0) {
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
    console.log(data)
}
//Adding Note Section
const noteAdd=(text="")=>{
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
    <div class="tool">
        <i class="save far fa-save"></i>
        <i class="trash fa fa-trash"></i>            
    </div>
    <textarea>${text}</textarea>
`;
note.querySelector('.trash').addEventListener('click',()=>{
    note.remove();
    saveNotes();
});
note.querySelector('.save').addEventListener('click',()=>{
    saveNotes();
});
note.querySelector('textarea').addEventListener('focusout',()=>{
    saveNotes();
})
main.appendChild(note);
}

addnote.addEventListener('click',()=>{
    noteAdd();
});


(
    function(){
        const copies=JSON.parse(localStorage.getItem("notes"));
        if (copies===null) {
            noteAdd();
        }else{
            copies.forEach((copy)=>{
                noteAdd(copy);
            })
        }
        
        console.log(copies);
        
        // if (copies.length===0) {
        //     localStorage.removeItem("notes");
        // }else{
        //     noteAdd();
        // }
    }
)()
