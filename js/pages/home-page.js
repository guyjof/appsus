import appHeader from '../cmps/app-header.js'
export default {
    template: `<section>
                <app-header />
                    <section class="home-page">
                        <h1>Welcome!</h1>
                    </section>
                </section>
    `,
    created() {
    },
    components: {
        appHeader,
    },
}