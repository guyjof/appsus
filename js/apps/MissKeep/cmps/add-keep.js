import keepService from '../services/keep-service.js'

export default {
    template: `
    <section>
        <div class="add-keep"> 
        <input class="add-keep-input" ref="inputNote"v-model="note.data" type="text" @keyup.enter="saveNewNote" :placeholder="holderTxt">
        
        </div>
    </section>
    `,
    data () {
        return {
            note: {
                data: null,
                type: 'txt',
            },
            holderTxt: 'Add a note'
        }
    },

    methods: {
        saveNewNote() {
            this.$emit('save', {...this.note})
            this.note.data = null;
        }
    } ,

    mounted() {
        var txtNote = this.$refs.inputNote
        txtNote.focus();
    }
}