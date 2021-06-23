import appMain from './pages/home-page.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import userMsg from './cmps/user-msg.js';
import { router } from './router.js'

const options = {
    el: '#app',
    router,
    template: `
        <section class="main-app">
        <user-msg />
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        appHeader,
        appMain,
        appFooter,
        userMsg,
    },
    created() {
    }
};
const app = new Vue(options);