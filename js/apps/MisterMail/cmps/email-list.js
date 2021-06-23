import emailPreview from "./email-preview.js";
import emailPreviewControls from "./email-preview-controls.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
<!-- add new nav to list -->
            <ul>
                <li @click="select(email)" v-for="email in emails" :key="email.id" class="email-container">
                    <email-preview @click="select(email)" @mouseover.native="emailControls(email)" :email="email"/>
                    <!-- <email-preview-controls  :email="email"/> -->
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            isMouseOver: false
        }
    },
    methods: {
        select(email) {
            this.$emit('selected', email);
        },
        emailControls(email) {
            this.isMouseOver = true
        }
    },
    components: {
        emailPreview,
        emailPreviewControls,
    }
};