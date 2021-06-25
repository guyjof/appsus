
import keepApp from "./pages/keep-app.js";
import appHeader from "../../cmps/app-header.js";

export default {
    template: `
        <section>
            <section> 
                <app-header />
            </section>
            <h1>Note App</h1>
            <keep-app/>
        </section>
    `,
    data() {
        return {

        }
    },

    components: {
        keepApp,
        appHeader
    }
};