import { bookService } from "../services/book-service.js";
import googleBookList from "./google-book-list.js";

export default {
    template: `
    <section class="book-filter">
        <div class="search">
            <label>Search</label>
            <input v-model="filterBy.title" type="text" @input="filter" placeholder="Search">
        </div>
        <div class="filter">
            <label>From</label>
            <input v-model.number="filterBy.fromPrice" type="number" @input="filter" placeholder="$0"> to
            <input v-model.number="filterBy.toPrice" type="number" @input="filter" placeholder="$250">
        </div>
        <div>
            <label>Add</label>
            <input v-model="bookSearch" type="text" @input="searchGoogleApi" placeholder="Search for a book">
            <google-book-list :books="searchResults" v-if="bookSearch"/>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            },
            bookSearch: '',
            searchResults: []
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', { ...this.filterBy });
        },
        searchGoogleApi() {
            bookService.searchBooks(this.bookSearch)
                .then(res => this.searchResults = res)
        }

    },
    components: {
        googleBookList
    },
};

