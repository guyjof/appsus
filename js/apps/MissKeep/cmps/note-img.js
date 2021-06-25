export default {
    props: ['note'],
    template: `
        <div :style="{backgroundColor: note.style.backgroundColor}"> 
            <img :src="note.info.url">
            <button @click="remove(note.id)"> DELETE </button>
        </div>
    `,

    methods: {
        remove(noteId) {
            // console.log(noteId);
            this.$emit('remove', noteId)
        }
    }
}