
import keepApp from "./pages/keep-app.js";


export default {
    template: `
        <section>
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
    }
};