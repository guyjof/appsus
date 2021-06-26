export default {
    props: ['book'],
    template: `
    <div class="book-preview">
    <router-link :to="'/books/'+book.id">
        <div class="thumbnail">
            <img :src="book.thumbnail">
        </div>
    </router-link>

    <router-link :to="'/books/'+book.id">
        <p class="title">{{book.title}}</p>
    </router-link>

    <router-link :to="'/books/'+book.id">
        <p class="author">{{book.authors.join(', ')}}</p>
    </router-link>
        
    </div>
    `,
};
