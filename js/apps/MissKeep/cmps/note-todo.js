export default {
    props: ['note'],
    template: `
        <div> 
            <ul> 
                <li v-for="todo in note.info.todos"> {{todo.txt}}</li>
            </ul>

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