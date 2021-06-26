
import keepApp from "./pages/keep-app.js";
import noteHeader from "../../apps/MissKeep/cmps/note-header.js";

export default {
    template: `
        <section>
                <note-header />
                <keep-app />
        </section>
    `,
    data() {
        return {
        }
    },
    components: {
        keepApp,
        noteHeader
    }
};