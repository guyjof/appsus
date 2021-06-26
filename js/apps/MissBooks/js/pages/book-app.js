import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.js';
import bookFilter from '../cmps/book-filter.js';
import bookDetails from './book-details.js';

export default {
    template: `
        <section class="book-app">
            <book-details v-if="selectedBook" :book="selectedBook" @close="closeDetails" />
            <section v-else="selectedBook">
                <book-filter @filtered="setFilter" />
                <book-list :books="booksToShow" @selected="selectBook" />
            </section>
        </section>
    `,
    data() {
        return {
            books: [],
            selectedBook: null,
            filterBy: null,
        };
    },
    created() {
        this.loadBooks();
    },
    methods: {
        removeBook(id) {
            bookService.remove(id);
        },
        selectBook(book) {
            // console.log(book);
            this.selectedBook = book;
        },
        closeDetails() {
            this.selectedBook = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        loadBooks() {
            console.log('here');
            bookService.query()
                .then(books => {
                    console.log(books);
                    this.books = books
                });
        },
    },

    computed: {
        booksToShow() {
            if (!this.filterBy || this.filterBy.title === '') return this.books;
            if (this.filterBy.fromPrice === '') this.filterBy.fromPrice = 0;
            if (this.filterBy.toPrice === '') this.filterBy.toPrice = Infinity;
            const searchStr = this.filterBy.title.toLowerCase();
            const booksToShow = this.books.filter((book) => {
                return (
                    book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount < this.filterBy.toPrice
                );
            });
            return booksToShow;
        }
    },
    components: {
        bookList,
        bookFilter,
        bookDetails,
    },
};
