export default {
    props: ['reviews'],
    template: `
    <ul class="user-reviews">
        <li v-for="review in reviews" :key="review.id" class="review-container">
            <div class="user-review-container">
                <p class="user-name">{{review.name}}</p >
                <button @click="$emit('delete',review.id)">X</button>
                <p class="user-review">{{review.txt}}</p>
            </div>
        </li>
    </ul>
    `,
    data() {
        return {
        }
    },
    created() {
    },
    computed: {

    }
};
