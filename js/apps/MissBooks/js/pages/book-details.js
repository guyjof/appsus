import { i18nService } from '../services/i18n-service.js'
import { bookService } from '../services/book-service.js';
import bookReviews from '../cmps/book-reviews.js';
import { utilService } from '../services/util-service.js';
import { storageService } from '../services/async-storage-service.js';
export default {
    props: ['book'],
    template: `
    <section v-if="bookSelected" class="book-details">
        <router-link @click="$emit('close')" to="/books" class="close-btn">Close X</router-link>
    <img :src="bookSelected.thumbnail">
    <h3>{{bookSelected.title}}</h3>
    <span class="authors">{{bookSelected.authors.join(',')}}</span>
    <p>Subtitle: <span>{{bookSelected.subtitle}}</span></p>
    <p>Published Date: <span>{{bookSelected.publishedDate}} {{bookAge}}</span></p>
    <p>Price: <span>{{getCurrentCurrncy}}</span></p>
    <p>Page Count: <span>{{bookSelected.pageCount}} pages {{readingLength}}</span></p>
    <p>Categories: <span>{{bookSelected.categories.join(', ')}}</span></p>
    <p>Language: <span>{{bookSelected.language}}</span></p>

    <p>Id: <span>{{bookSelected.id}}</span></p>
    <div class="text">
            {{getDescriptionLength}}
            <button @click="toggleShow" class="show-more-btn">{{getButtonText}}</button>
    </div>
        <pre v-if="bookSelected.listPrice.isOnSale">SALE!!!!</pre>

    <div class="book-reviews">
        <h3>Readers Reviews</h3>
        <p>Leave a review:</p> 

        <form @submit.prevent="saveReview">
            <select v-model="reviewToEdit.rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <label for="username">Name: </label> <input v-model="reviewToEdit.name" id="username" type="text" placeholder="Enter your name">
            <textarea v-model="reviewToEdit.txt" style="resize: none;" placeholder="Enter your review" ></textarea>
            <button>SUBMIT</button>
        </form>

        <div class="readers-reviews">
            <book-reviews :reviews="getReviews" @delete="deleteReview(id)"/>
        </div>
    </div>
        <router-link to="/books">Back</router-link>
        <router-link :to="'/books/' + prevBookId">Privious Book</router-link>
        <router-link :to="'/books/' + nextBookId">Next Book</router-link>
    </section>
    `,
    data() {
        return {
            bookSelected: null,
            isRed: null,
            isGreen: null,
            isOpen: false,
            isModalOpen: false,
            reviewToEdit: {
                id: null,
                name: '',
                rating: 1,
                date: null,
                txt: ''
            },
            prevBookId: null,
            nextBookId: null,
        }
    },
    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => this.bookSelected = book);
    },
    watch: {
        '$route.params.bookId': {
            immediate: true,
            handler() {
                const { bookId } = this.$route.params;
                bookService.getById(bookId)
                    .then(book => this.bookSelected = book);
                bookService.getNextBookId(bookId)
                    .then(bookId => this.nextBookId = bookId);
                bookService.getNextBookId(bookId)
                    .then(bookId => this.prevBookId = bookId);

            },
        }
    },
    computed: {
        readingLength() {
            if (this.bookSelected.pageCount > 500) return 'Long Reading'
            if (this.bookSelected.pageCount > 200) return 'Decent Reading'
            if (this.bookSelected.pageCount < 100) return 'Light Reading'
        },
        bookAge() {
            const currYear = new Date().getFullYear()
            const yearPublished = this.bookSelected.publishedDate
            const diff = (currYear - yearPublished)
            if (diff <= 1) return 'New'
            if (diff > 10) return 'Veteran Book'
        },
        getCurrentCurrncy() {
            return i18nService.getCurrency(this.bookSelected);
        },
        isOnSale() {
            return this.book.listPrice.isOnSale;
        },
        getDescriptionLength() {
            if (!this.isOpen) return this.bookSelected.description.substring(0, 100);
            else return this.bookSelected.description;
        },
        getButtonText() {
            return this.isOpen ? 'Show less' : 'Show more';
        },
        getReviews() {
            return this.bookSelected.reviews
        }
    },
    methods: {
        toggleShow() {
            this.isOpen = !this.isOpen;
        },
        closePreview() {
            this.isModalOpen = !this.isModalOpen;
        },
        deleteReview(reviewId) {
            booksService.removeReview(this.book.id, reviewId).then(book => {
                this.book = book;
            })
        },
        saveReview() {
            if (!this.reviewToEdit.txt) return
            let { bookId } = this.$route.params;
            bookService.addReview(bookId, this.reviewToEdit)
                .then(book => {
                    this.bookSelected = book
                    this.reviewToEdit = {
                        id: null,
                        name: '',
                        rating: '',
                        date: null,
                        txt: ''
                    }
                })
        }
    },
    components: {
        bookReviews
    }
};

const gEmails = [
    {
        id: '1',
        sender: 'Guy',
        subject: '0Wassap?',
        body: '0Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: '2',
        sender: 'Puki',
        subject: '1Wassap?',
        body: '1Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: '3',
        sender: 'Lolo',
        subject: '2Wassap?',
        body: '2Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: '4',
        sender: 'Chipi',
        subject: '3Wassap?',
        body: '3Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: '5',
        sender: 'Lala',
        subject: '4Wassap?',
        body: '4Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
]