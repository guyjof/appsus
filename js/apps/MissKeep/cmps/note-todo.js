export default {
    props: ['note'],
    template: `
        <div> 
            <h2> {{note.id}}</h2>
            <!-- <p> {{note.info.txt}}</p> -->

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