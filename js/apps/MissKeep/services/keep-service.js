import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";


const KEEP_KEY = 'notesDB'
const gNotes = _creatNotes();

export default {
    query,
    remove,
    addNote,

}


function query() {
    return storageService.query(KEEP_KEY)
}

function addNote(type, data) {
    console.log('Adding new note');
    console.log(type, data)
    var newNote = _createNewNoteObj(type, data)
    gNotes.push(newNote)
    return storageService.post( KEEP_KEY, newNote)

}

function remove(noteId) {
    return storageService.remove(KEEP_KEY, noteId)
  }


function _createNewNoteObj(type, data) {
    return {
        type,
        data,
        id: utilService.makeId(),
        date: new Date(),
    }
}


function _creatNotes() {
    var notes = utilService.loadFromStorage(KEEP_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                type: "NoteTxt",
                isPinned: true,
                info: {
                    txt: "Fullstack Me Baby!"
                }
            },
            {
                type: "NoteImg",
                info: {
                    url: "http://some-img/me",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            },
            {
                type: "NoteTodos",
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]
                }
            }
        ];
        utilService.saveToStorage(KEEP_KEY, notes)
    }
    return notes;
}

