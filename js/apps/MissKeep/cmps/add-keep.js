import keepService from '../services/keep-service.js'
import { utilService } from '../../../services/util-service.js'

export default {
    template: `
    <section>
        <div class="add-keep-container"> 
            <h2> Add new note: </h2>
            <!-- <h3> Choose note type:</h3> -->
            <div class="type-btn-container">
                <!-- <button @click="changeType('noteTxt')"> noteTxt </button>
                <button  @click="changeType('noteTodo')"> noteTodo </button>
                <button  @click="changeType('noteImg')"> noteImg </button>
                <button  @click="changeType('noteVideo')"> noteVideo </button> -->
            </div>
        <input class="add-keep-title" ref="inputNote" v-model="note.info.txt" type="text" @keyup.enter="saveNewNote" placeholder="Create new note">
        <!-- <textarea name="note-txt" id="" cols="30" rows="3" v-model="note.info.txt"></textarea> -->

        <button class="add-note-btn" @click="saveNewNote"> + </button>


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
                }
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
                }
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