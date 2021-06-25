import appHeader from '../cmps/app-header.js'
export default {
    template: `<section>
                <app-header />
                    <section class="home-page">
                        <router-link to="/mail"> <div class="mail-card"> Mister Mail</div></router-link>
                        <router-link to="/note"> <div class="note-card"> Miss Keep</div></router-link>
                        <router-link to="/about"> <div class="book-card"> Miss Books</div></router-link>
                    </section>
                </section>
    `,
    created() {
    },
    components: {
        appHeader,
    },
}