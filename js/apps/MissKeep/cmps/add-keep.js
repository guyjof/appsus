import keepService from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'

export default {
    template: `
    <section>
        <div class="add-keep-container"> 
            <div class="type-btn-container">
                    <!-- <input type="text" v-model="note.info.txt" v-bind:placeholder="this.placeholder" @keyup.enter="saveNewNote"/> -->
                    <input type="text" v-model="noteContent" v-bind:placeholder="this.placeholder" @keyup.enter="addNote"/>
                <!-- <button @click="changePlaceHolder('txt')"><span class="material-icons">title</span></button> -->
                <button @click="changeNoteType('noteTxt')"><span class="material-icons">title</span></button>
                <button  @click="changeNoteType('noteImg')"><span class="material-icons">image</span></button>
                <button  @click="changeNoteType('noteVideo')"><span class="material-icons">smart_display</span></button>
                <button  @click="changeNoteType('noteAudio')"><span class="material-icons">volume_up</span></button>
                <button  @click="changeNoteType('noteTodo')"><span class="material-icons">checklist</span></button>        
            </div>
        </div>
    </section>
    `,

    data() {
        return {
            noteType: 'noteTxt',
            noteContent: null,
            noteTitle: "",
            placeholder: "Enter New Note",

        }
    },

    computed: {

    },

    methods: {
        addNote() {
            if (!this.noteContent) return
            const newNote = keepService.getEmtyNote(this.noteType, this.noteContent)
            this.$emit('addNote', newNote) 
            this.noteContent = ""
        },

        changeNoteType(type) {
            this.noteType = type;
            console.log(this.noteType);
            // changePlaceHolder(type)
            if (type === 'noteTxt') return this.placeholder = "Enter new Note"
            if (type === 'noteImg') return this.placeholder = "Enter new Image URL"
            if (type === 'noteVideo') return this.placeholder = "Enter new Youtube URL"
            if (type === 'noteAudio') return this.placeholder = "Enter new Audio"
            if (type === 'noteTodo') return  this.placeholder = "Enter new Todo"
        } 
    },
}