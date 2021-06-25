import noteControls from "./note-controls.js"
export default {
    props: ['note'],
    template: `
        <div :style="{backgroundColor: note.style.backgroundColor}"> 
            <img :src="note.info.url" class="note-img">
            <note-controls :note="note" @remove="remove" @setColor="updateColor"/>
        </div>
    `,

    data() {
        return {
            color: null
        }
    },

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        updateColor(color, noteId) {
            this.color = color
            this.$emit('setColor', color, noteId)
        }
    },
    components: {
        noteControls
    }
}