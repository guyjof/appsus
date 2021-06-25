import appHeader from '../cmps/app-header.js'
export default {
    template: `<section>
                <app-header />
                    <section class="home-page">
                        <div class="mail-card"> <router-link to="/mail">Mister Mail</router-link></div>
                        <div class="note-card"> <router-link to="/mail">Miss Keep</router-link></div>
                        <div class="book-card"> <router-link to="/mail">Miss Books</router-link></div>
                    </section>
                </section>
    `,
    created() {
    },
    components: {
        appHeader,
    },
}