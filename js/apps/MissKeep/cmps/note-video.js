export default {
    props: ['note'],
    template: `
        <div> 
            <h2> {{note.id}}</h2>
            <!-- <p> {{note.info.url}}</p> -->

            <h2> {{note.info.title}}</h2>

            <iframe :src="note.info.url" frameborder="0"></iframe>
            <!-- <video :src="note.info.url" > asdasdsad</video> -->
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