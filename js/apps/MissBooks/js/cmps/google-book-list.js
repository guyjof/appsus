import { bookService } from "../services/book-service.js";

export default {
    props: ['books'],
    template: `
    <ul class="google-book-list">
        <li v-for="book in books" :key="book.id" class="google-book-container">
                <span>{{book.volumeInfo.title}}</span>
                <button class="add-book" @click="addBook(book)">+</button>
        </li>
    </ul>
    `,
    methods: {
        addBook(book) {
            bookService.addGoogleBook(book)
        }
    },
    components: {

    },

};
