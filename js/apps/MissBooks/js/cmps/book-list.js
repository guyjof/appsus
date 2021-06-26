import bookPreview from './book-preview.js';

export default {
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container">
            <book-preview :book="book" @click.native="select(book)" />
            <div class="actions">
                <router-link @click="select(book)" :to="'/books/'+book.id">More Details</router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
        select(book) {
            this.$emit('selected', book);
        },
    },
    components: {
        bookPreview
    }

};

