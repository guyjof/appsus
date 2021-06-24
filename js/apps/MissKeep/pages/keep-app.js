
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
        <h1> Keep organized! Keep your notes</h1>
        <add-keep @save="saveNote"/>
        <!-- <keep-list :notes="notes" @remove="removeNote"/> -->

        <section  class="note-container" v-for="note in notes" :key="note.id"> 
            <component :is="note.type" :note="note" @remove="removeNote"/>
        </section>

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
                    console.log(notes);
                    this.notes = notes
                })
        },

        saveNote(note) {
            // console.log(this.note.data);
            console.log(note);
            keepService.addNote(note)
                .then(this.loadNotes)
        },

        removeNote(noteId) {
            console.log(noteId);
            keepService.remove(noteId)
                .then(this.loadNotes)
        },


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