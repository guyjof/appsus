import keepService from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'

export default {
    template: `
    <section>
        <div class="add-keep-container"> 
            <div class="type-btn-container">
                    <!-- <input type="text" v-model="note.info.txt" v-bind:placeholder="this.placeholder" @keyup.enter="saveNewNote"/> -->
                    <input type="text" v-model="noteContent" v-bind:placeholder="this.placeholder" @keyup.enter="saveNewNote"/>
                <!-- <button @click="changePlaceHolder('txt')"><span class="material-icons">title</span></button> -->
                <button @click="changeNoteType('noteTxt')"><span class="material-icons">title</span></button>
                <button  @click="changePlaceHolder('img')"><span class="material-icons">image</span></button>
                <button  @click="changePlaceHolder('vid')"><span class="material-icons">smart_display</span></button>
                <button  @click="changePlaceHolder('aud')"><span class="material-icons">volume_up</span></button>
                <button  @click="changePlaceHolder('todo')"><span class="material-icons">checklist</span></button>        
            </div>
        </div>
    </section>
    `,

    data() {
        return {

            noteType: null,
            noteContent: null,

            // inputText: '',
            placeholder: "Enter New Note",
            note: {
                id: utilService.makeId(),
                type: "noteTxt",
                info: {
                    txt: ""
                },
                style: {
                    backgroundColor: "#fbf396"
                },
            }
        }
    },

    computed: {

    },

    methods: {
        saveNewNote() {

            this.$emit('save', { ...this.note })
            // this.$emit('save', { info: this.inputText, type: this.note.type })
            this.note = {
                id: "",
                type: "noteTxt",
                info: {
                    txt: ""
                },
                style: {
                    backgroundColor: "#fbf396"
                },
            }
        },

        changeNoteType(type) {
            this.noteType = type;
            const newNote = keepService.getEmtyNote(this.noteType, this.noteContent)
            this.$emit('')
            // console.log(this.noteType);
        },

        changePlaceHolder(txt) {
            if (txt === 'img') return this.placeholder = "Enter new image URL"
            if (txt === 'txt') return this.placeholder = "Enter new Note"
            if (txt === 'vid') return this.placeholder = "Enter new video URL"
            if (txt === 'aud') return this.placeholder = "Enter new audio URL"
            if (txt === 'todo') return this.placeholder = "Enter new todo list"
        },

    },
}