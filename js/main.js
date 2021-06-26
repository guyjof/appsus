import appMain from './pages/home-page.js'
import appFooter from './cmps/app-footer.js'
import userMsg from './cmps/user-msg.js';
import { router } from './router.js'
const options = {
    el: '#app',
    router,
    template: `
        <section class="main-app">
            <user-msg />
            <router-view />
        </section>
    `,
    components: {
        appMain,
        appFooter,
        userMsg,
    },
    created() {
    }
};

const app = new Vue(options);