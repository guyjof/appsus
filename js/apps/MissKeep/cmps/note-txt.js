export default {
    props: ['note'],
    template: `
        <div :style="{backgroundColor: this.color}"> 
            <p class="note-txt"> {{note.info.txt}}</p>

            <div class="note-controls">
                <div class="color-btn">
                    <span class="material-icons color-palette">palette</span>
                    <input class="colorpicker" type="color" v-model="color" @change="updateColor(note.id)">
                </div>
                <div class="edit-btn">
                    <button><span class="material-icons">edit</span></button>
                </div>
                <div class="pin-btn">
                    <button><span class="material-icons">push_pin</span></button>
                </div>
                <div class="duplicate-btn">
                    <button><span class="material-icons">content_copy</span></button>
                </div>
                <div class="remove-btn">
                    <button @click="remove(note.id)"> <span class="material-icons">delete</span> </button>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            color: "this.note.style.backgroundColor"
        }
    },

    methods: {
        remove(noteId) {
            // console.log(noteId);
            this.$emit('remove', noteId)
        },

        // updateColor(noteId){ 
        //     console.log(this.note);
        //     console.log(this.color , noteId);

        updateColor(noteId) {
            this.$emit('setColor', this.color, noteId)
        }
    }
}