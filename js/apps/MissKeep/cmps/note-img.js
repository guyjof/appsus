export default {
    props: ['note'],
    template: `
        <div> 
            <h2> {{note.id}}</h2>
            <!-- <p> {{note.info.txt}}</p> -->
            <img :src="note.info.url">
            </>
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