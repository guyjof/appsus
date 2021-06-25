export default {
    props: ['notes'],
    template: `
    <ul class="notes-list">
        <li class="note-container" v-for="note in notes" >
            {{note.type.data}}
        </li>
    </ul>
    `,

    created() {
        return {

        }
    },

    methods: {
    }
}