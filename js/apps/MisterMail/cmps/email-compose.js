import { utilService } from "../../../services/util-service.js"
import { emailService } from "../services/email-service.js";
export default {
    template: `
            <section class="email-compose">
                <div class="email-compose-header">
                    <div class="email-compose-title">
                        <span>New Message</span>
                    </div>
                    <div class="email-compose-header-controls">
                        <button>_</button>
                        <button>⃞</button>
                        <button @click="$emit('close')">X</button>
                    </div>
                </div>
                <div class="email-compose-body">
                    <form @submit.prevent="sendEmail" id="myform">
                        <input v-model="newEmail.reciver" type="text" placeholder="Recipients">
                        <input v-model="newEmail.subject" type="text" placeholder="Subject">
                        <textarea name="" id="" style="resize: none; height: 300px;" v-model="newEmail.body"></textarea>
                    </form>
                </div>
                <div class="email-compose-footer">
                    <div class="email-compose-footer-controls">
                        <button type="submit" form="myform">Send</button>
                    </div>
                    <div class="email-compose-footer-delete">
                        <button @click="$emit('close')">X</button>
                    </div>
                </div>
            </section>
`,


    data() {
        return {
            newEmail: {
                id: '',
                body: '',
                isRead: false,
                sender: '',
                reciver: '',
                subject: '',
            }
        }
    },
    methods: {
        sendEmail() {
            if (!this.newEmail.body || !this.newEmail.reciver) return
            return emailService.sendEmail(this.newEmail)
                .then(email => {
                    this.newEmail = {
                        id: '',
                        body: '',
                        isRead: false,
                        sender: '',
                        reciver: '',
                        subject: '',
                    }
                    this.$emit('send')
                })
        },
    },
}

