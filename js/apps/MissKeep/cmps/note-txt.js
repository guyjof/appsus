export default {
    props: ['note'],
    template: `
        <div> 
            <p class="note-txt"> {{note.info.txt}}</p>
            <button @click="remove(note.id)"> DELETE </button>
            <input type="color" v-model="color" @change="updateColor(note.id)">
        </div>
    `,

    data() {
        return {
            color: this.note.style.backgroundColor
        }
    },

    methods: {
        remove(noteId) {
            // console.log(noteId);
            this.$emit('remove', noteId)
        },

        updateColor(noteId){ 
            this.$emit('setColor', this.color, noteId)
        }
    }
}