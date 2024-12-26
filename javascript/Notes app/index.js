const addNote = document.querySelector(".addNoteBtn") ;
addNote.addEventListener('click', notePopup) ;


const popupContainer = document.querySelector("#popupContainer") ;
function notePopup(){
    popupContainer.classList.add("active") ;
}

// Create note
const createNoteBtn = document.querySelector("#submitBtn") ;
createNoteBtn.addEventListener('click', createNote) ;

function createNote(){
    // const note = document.createElement("li") ;
    // note.classList.add("note") ;
    const notesText = document.querySelector(".notesText").value ;

    if(notesText.trim() !== ''){
        const note = {
            id: new Date().getTime() ,
            text : notesText
        } ;

        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        existingNotes.push(note);
        localStorage.setItem('notes', JSON.stringify(existingNotes));

        
        console.log("before removing");
        notesText.value = '' ;
        console.log("after removing");
        

        popupContainer.classList.remove("active") ;



    }



    document.querySelector("notesList").appendChild(note) ;
    notesText = "" ;
}

// Cancel Note 
const cancelNoteBtn = document.querySelector("#closeBtn") ;
cancelNoteBtn.addEventListener("click" , cancelNote) ;

function cancelNote(){
    popupContainer.classList.remove("active") ;
}


















































// const addNote = document.querySelector(".addNoteBtn");

// addNote.addEventListener("click" ,popup);

// function popup(){
//     const popupContainer = document.createElement("section") ;

//     popupContainer.innerHTML = `
//     <div id="popupContainer">
//     <h1> New Note</h1>
//     <textarea id="note-text" placeholder="Enter your note"...></textarea>
//         <div id="btnContainer">
//             <button id="submitBtn" onclick="createNote()">Create Note</button>
//             <button id="closeBtn" onclick="closePopup">Close </button>
//         </div>
//     </div>
//     `;
// }
// function closePopup(){
//     const popupContainer = document.getElementById("popupContainer");
//     if(popupContainer){
//         popupContainer.remove() ;
//     }
// }
// function createNote(){
//     const popupContainer = document.getElementById('popupContainer') ;
//     const noteText = document.getElementById('note-text').value ;

//     if(noteText.trim() !== ''){
//         const note = {
//             id : new Date.getTime() ,
//             text : noteText 
//         };
//     }

//     const existingNotes = JSON.parse(localStorage.getItem('notes')) || [] ;
//     existingNotes.push(note) ;

//     localStorage.setItem('notes', JSON.stringify(existingNotes)) ;
//     document.getElementById('notes-text').value ='' ;

//     popupContainer.remove() ;
//     displayNotes() ;
// }

// function displayNotes(){
//     const notesList = document.getElementById('notes-list');
//     notesList.innerHTML = '';

//     const notes = JSON.parse(localStorage.getItem('notes') || [] ) ;

//     notes.forEach(note =>{
//         const listItem =document.createElement('li') ;
//         listItem.innerHTML = `
//         <span>${note.text}</span>
//         <div id="noteBtns-Container>
//             <button id="editBtn" onclick="editNote(${note.id})">
//                 <i class="fa-solid fa-pen"></i>
//             </button>
//             <button id="deleteBtn" onclick="deleteNote(${note.id})">
//                 <i class="fa-solid fa-trash"></i>
//             </button>
//         </div>
//         `;

//         notesList.appendChild(listItem) ;
//     })
// }

// function editNote(noteId){
//     const notes = JSON.parse(localStorage.getItem("notes")) || [] ;
//     const noteToEdit = notes.find(note => note.id == noteId) ;
//     const noteText = noteToEdit?noteToEdit.text : '' ;
//     const editingPopoup = document.createElement("section") ;

//     editingPopoup.innerHTML = `
//     <div id="editingContainer" data-note-id= "${noteId}>
//         <h1> Edit Note</h1>
//         <textarea id="note-text">${noteText}</textarea>
//         <div id="btnContainer">
//             <button id="submitBtn" onclick="updateNote()"> Done</button>
//             <button id="closeBtn" onclick="closeEditPopup()"> Cancel </button>
//         </div>
//     </div>
//     `;

//     document.body.appendChild(editingPopoup) ;
// }

// function closeEditPopup(){
//     const editingPopoup = docement.getElementById("editingContainer") ;

//     if(editingPopoup){
//         editingPopoup.remove() ;
//     }
// }
// function updateNote(){
//     const noteText = document.getElementById('note-text').value.trim() ;
//     const editingPopoup = document.getElementById("editing-Container") ;
    
//     if(noteText !== ''){
//         const noteId = editingPopoup.getAttribute('data-note-id') ;
//         let notes = JSON.parse(localStorage.getItem('notes')) || [] ;
//         const updateNote = notes.map(note =>{
//             if(note.id == noteId){
//                 return { id: note.id, text:noteText };
//             }
//             return note ;
//         });

//         localStorage.setItem('notes', JSON.stringify(updateNote)) ;
//         editingPopoup.remove() ;
//         displayNotes() ;
//     }
// }

// // function deleteNote(note)