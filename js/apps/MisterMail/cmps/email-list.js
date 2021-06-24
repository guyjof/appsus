import emailPreview from "./email-preview.js";
import emailListNav from "./email-list-nav.js";
import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <email-list-nav />
            
            <ul>
                <li @mouseenter="toggleIsHovered(email.id)" 
                    @mouseleave="toggleIsHovered(email.id)" 
                    @click="select(email)" 
                    v-for="email in emails" 
                    :key="email.id" 
                    class="email-container" 
                    :class="{unRead:email.isRead}">

                    <email-preview  
                    @click="select(email)"
                    :email="email" 
                    :hover="emailHoverd"/>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            emailHoverd: null,
        }
    },
    methods: {
        select(email) {
            this.$emit('selected', email);
        },
        toggleIsHovered(id) {
            this.emailHoverd = id
        },
        onToggleRead(id) {
            emailService.getById(id)
                .then(email => {
                    email.isRead = !email.isRead
                    emailService.save(email)
                    this.$emit('update')
                })

        }
    },
    created() {
        eventBus.$on('toggleRead', this.onToggleRead)
    },
    components: {
        emailPreview,
        emailListNav,
    }
};