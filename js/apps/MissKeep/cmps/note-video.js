export default {
    props: ['note'],
    template: `
        <div> 
            <h4> {{note.info.title}}</h4>
            <iframe :src="note.info.url" frameborder="0"></iframe>

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