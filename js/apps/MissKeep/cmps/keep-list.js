export default {
    props: ['notes'],
    template: `
    <ul class="notes-list">
        <li class="note-container" v-for="note in notes" >
            {{note.type.data}}

            <div class="btn-container"> 

                <button @click="remove(note.id)"> DELETE </button>
                <button @click="remove(note.id)"> CHANGE COLOR </button>
                <button @click="remove(note.id)"> DUPLICATE </button>
            </div>
        </li>
    </ul>
    `,

    created() {
        return {
            
        }
    },

    methods: {
        remove(noteId) {
            // console.log(noteId);
            this.$emit('remove', noteId)
        }
    }
}