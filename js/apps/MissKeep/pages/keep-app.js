
import addKeep from "../cmps/add-keep.js"
import keepList from "../cmps/keep-list.js"
import keepService from "../services/keep-service.js"

import noteTxt from "../cmps/note-txt.js"
import noteVideo from "../cmps/note-video.js"
import noteTodo from "../cmps/note-todo.js"
import noteImg from "../cmps/note-img.js"


export default {
    template: `
    <section class="keep-app"> 
        <add-keep @addNote="addNote"/>
        <div class="test-container"> 

            <div class="note-container"> 
                <section v-for="note in notes" :key="note.id"> 
                    <component class="comp" :is="note.type" :note="note" @remove="removeNote" @setColor="updateColor"/>
                </section>
            </div>
            
        </div>
    </section>
    `,

    data() {
        return {
            notes: []
        }
    },

    created() {
        this.loadNotes()
    },

    methods: {
        loadNotes() {
            keepService.query()
                .then(notes => {
                    this.notes = notes
                })
        },

        addNote(newNote) {
            keepService.addNewNote(newNote).then(note => {
                this.notes.unshift(note)
            })
        },

        removeNote(noteId) {
            keepService.remove(noteId)
                .then(this.loadNotes)
        },

        updateColor(color, noteId) {
            keepService.getNoteById(noteId)
                .then((note) => keepService.newColor(note, color))
                    .then(this.loadNotes)
        }
    },

    components: {
        addKeep,
        keepList,
        noteTxt,
        noteVideo,
        noteTodo,
        noteImg

    }
}