import emailPreview from "./email-preview.js";
import emailListNav from "./email-list-nav.js";
import { emailService } from "../services/email-service.js"
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <email-list-nav class="email-list-nav-cmp"/>
            <ul>
                <li @mouseenter="toggleIsHovered(email.id)" 
                @mouseleave="toggleIsHovered(email.id)" 
                v-for="email in emails" 
                @click="select(email), isRead(email.id)"
                :key="email.id" 
                class="email-container" 
                :class="{unRead:email.isRead}">
                
                <email-preview  
                @click="select(email)"
                :email="email" 
                :hover="emailHoverd"/>
                
                <section v-if="false" class="email-modal">
                    <div class="email-modal-header">
                        <div class="modal-subject">
                            <h2>{{email.subject}}</h2>
                        </div>
                        <div class="email-modal-controls">
                            <router-link @click.native="$emit('close')" to="/mail" class="close-btn">Close X</router-link>
                            <button>open</button>
                        </div>
                    </div>
                    <div class="email-content">
                        <p>{{email.sender}} <span>&lt;guy@gmail.com&gt;</span></p>
                        <div class="email-body">
                            <p>{{email.body}}</p>
                        </div>
                    </div>
                </section>
                
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
            this.$router.push('/mail/' + email.id)
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
                    this.$emit('count', email)
                })
        },
        isRead(id) {
            emailService.getById(id)
                .then(email => {
                    email.isRead = true
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