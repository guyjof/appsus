import noteControls from "./note-controls.js"
export default {
    props: ['note'],
    template: `
        <div> 
            <h4> {{note.info.title}}</h4>
            <iframe :src="note.info.url" frameborder="0"></iframe>
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