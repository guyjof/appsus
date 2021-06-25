export default {
    props: ['note'],
    template: `
        <div> 
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