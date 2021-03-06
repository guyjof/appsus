import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";


const KEEP_KEY = 'notesDB'
const gNotes = _creatNotes();

export default {
    query,
    remove,
    addNote,
    newColor,
    getNoteById,
    getEmtyNote,
    addNewNote

}

function getEmtyNote(noteType, noteContent) {

    if (noteType === "noteVideo") {
        noteContent = noteContent.replace('watch?v=', 'embed/')
    }


    let newNote = {
        id: utilService.makeId(),
        type: noteType,
        isPinned: false,
    }

    switch (noteType) {
        case 'noteTxt':
            newNote.info = {
                txt: noteContent
            }
            newNote.style = {
                backgroundColor: "#fbf396"
            }
            return newNote;
            break;
        case 'noteImg':
            newNote.info = {
                url: `${noteContent}`,
                title: "",
            },
                newNote.style = {
                    backgroundColor: "#fbf396"
                }
            return newNote;
            break;
        case 'noteVideo':
            newNote.info = {
                url: `${noteContent}`,
                title: "",
            },
                newNote.style = {
                    backgroundColor: "#fbf396"
                }
            return newNote;
            break;

    }
}

function newColor(note, color) {
    note.style.backgroundColor = color
    return storageService.put(KEEP_KEY, note)
}


function query() {
    return storageService.query(KEEP_KEY)
}

function addNote({ type, info }) {
    var newNote = _createNewNoteObj(type, info)
    gNotes.push(newNote)
    return storageService.post(KEEP_KEY, newNote)

}
function remove(noteId) {
    return storageService.remove(KEEP_KEY, noteId)
}

function addNewNote(note) {
    return storageService.post(KEEP_KEY, note)
}


function _createNewNoteObj(type, info) {
    console.log("info:", info, "type:", type)
    return {
        id: utilService.makeId(),
        type,
        info,
        style: { backgroundColor: "#fbf396" }
        // date: new Date(),
    }
}

function getNoteById(noteId) {
    return storageService.get(KEEP_KEY, noteId)
}


function _creatNotes() {
    var notes = utilService.loadFromStorage(KEEP_KEY)
    if (!notes || !notes.length) {  
        notes = [ 
            {
                id: utilService.makeId(),
                type: "noteVideo",
                info: {
                    url: 'https://www.youtube.com/embed/5qap5aO4i9A',
                    title: 'Keep calm and listen to lofi'
                },
                style: {
                    backgroundColor: "#fbf396"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteTxt",
                info: {
                    txt: "Real programmers count from 0"
                },
                style: {
                    backgroundColor: "#ea96fb"
                },
            },
            {
                id: utilService.makeId(),
                type: "noteImg",
                info: {
                    url: "https://www.success.com/wp-content/uploads/legacy/sites/default/files/new2.jpg",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#fbf396"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteVideo",
                info: {
                    url: 'https://www.youtube.com/embed/xANnLy9aljg',
                    title: 'Seal Sneeze'
                },
                style: {
                    backgroundColor: "#fbf396"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteImg",
                info: {
                    url: "https://miro.medium.com/max/2625/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#fbf396"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteTxt",
                info: {
                    txt: "Why did the programmer quit his job? Because he didn't get arrays"
                },
                style: {
                    backgroundColor: "#ea96fb"
                },
            },
            {
                id: utilService.makeId(),
                type: "noteTxt",
                info: {
                    txt: "Fullstack Me Baby!"
                },
                style: {
                    backgroundColor: "#fbf396"
                },
            },
            {
                id: utilService.makeId(),
                type: "noteImg",
                info: {
                    url: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#fbf396"
                }
            },
            {
                id: utilService.makeId(),
                type: "noteTodo",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: "#fbf396"
                },
            },
            {
                id: utilService.makeId(),
                type: "noteVideo",
                info: {
                    url: 'https://www.youtube.com/embed/lO7XpDalr5g',
                    title: 'Daily Dose of Internet'
                },
                style: {
                    backgroundColor: "#fbf396"
                },
            }
        ];
        utilService.saveToStorage(KEEP_KEY, notes)
    }
    return notes;
}

