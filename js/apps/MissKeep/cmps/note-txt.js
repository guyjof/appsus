export default {
    props: ['note'],
    template: `
        <div :style="{backgroundColor: note.style.backgroundColor}"> 
            <p class="note-txt"> {{note.info.txt}}</p>
            <button @click="remove(note.id)"> DELETE </button>
            <input type="color" v-model="color" @change="updateColor(note.id)">
        </div>
    `,

    data() {
        return {
            color: ""
        }
    },

    methods: {
        remove(noteId) {
            // console.log(noteId);
            this.$emit('remove', noteId)
        },

        updateColor(noteId){ 
            console.log(this.note);
            // console.log(this.color , noteId);
            this.$emit('setColor', this.color, noteId)
        }
    }
}