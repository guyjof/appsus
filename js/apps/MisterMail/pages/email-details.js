import { emailService } from "../services/email-service.js";
export default {
    props: ['email'],
    template: `
        <section v-if="email" class="email-details">
            <router-link @click.native="$emit('close')" to="/mail" class="close-btn">Close X</router-link>
            <article class="email-content">
                <h2>{{email.subject}}</h2>
                <p>{{email.sender}} <span>&lt;guy@gmail.com&gt;</span></p>
                <div class="email-body">
                    <p>{{email.body}}</p>
                </div>
            </article>

        </section>
`,
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then(email => this.emailSelected = email);
    },
}