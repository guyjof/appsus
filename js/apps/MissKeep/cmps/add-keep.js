import keepService from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'

export default {
    template: `
    <section>
        <div class="add-keep-container"> 
            <div class="type-btn-container">
                <input type="text" placeholder="Add New Note" />
                <button @click="changeType('noteTxt')"><span class="material-icons">title</span></button>
                <button  @click="changeType('noteImg')"><span class="material-icons">image</span></button>
                <button  @click="changeType('noteVideo')"><span class="material-icons">smart_display</span></button>
                <button  @click="changeType('noteAudio')"><span class="material-icons">volume_up</span></button>
                <button  @click="changeType('noteTodo')"><span class="material-icons">checklist</span></button>        
                <button class="add-note-btn" @click="saveNewNote">+</button>
            </div>
        <!-- <input class="add-keep-title" ref="inputNote" v-model="note.info.txt" type="text" @keyup.enter="saveNewNote" placeholder="Create new note"> -->
        </div>
    </section>
    `,

    data() {
        return {
            inputText: '',
            note: {
                id: utilService.makeId(),
                type: "noteTxt",
                info: {
                    txt: "Create new Note"
                },
                style: {
                    backgroundColor: "#00d"
                },
            }
        }
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
                    backgroundColor: "#00d"
                },
            }
        },


        // changeType(type) {
        //     if (type === "noteTxt") return this.note = { id: utilService.makeId(), type: "noteTxt", info: { txt: "Create new Note" } }
        //     if (type === "noteImg") return this.note = { id: utilService.makeId(), type: "noteImg", info: { url: "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", title: "Me playing Mi" }, style: { backgroundColor: "#00d" } }
        //     if (type === "noteTodo") return this.note = { id: utilService.makeId(), type: "noteTodo", info: { label: "How was it:", todos: [{ txt: "Do that", doneAt: null }, { txt: "Do this", doneAt: Date.now() }] } }
        //     if (type === "noteVideo") return this.note = { id: utilService.makeId(), type: "noteVideo", info: { url: 'https://www.youtube.com/embed/lO7XpDalr5g', title: 'Daily Dose of Internet' } }
        // }

    },
}