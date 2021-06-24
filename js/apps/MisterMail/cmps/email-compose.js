import { utilService } from "../../../services/util-service.js"
import { emailService } from "../services/email-service.js";
export default {
    template: `
            <section :class="{emailCompose:open,minimized:isDown}">
                <div @click="unMinimize" class="email-compose-header">
                    <div class="email-compose-title">
                        <span>New Message</span>
                    </div>
                    <div class="email-compose-header-controls">
                        <button><span @click.stop="minimize" class="material-icons">minimize</span></button>
                        <button><span class="material-icons">open_in_full</span></button>
                        <button @click="$emit('close')"><span class="material-icons">close</span></button>
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
                        <button class="submit" type="submit" form="myform">Send</button>
                    </div>
                    <div class="email-compose-footer-delete">
                        <button @click="$emit('close')">
                            <span class="material-icons">delete_outlined</span>
                        </button>
                    </div>
                </div>
            </section>
`,


    data() {
        return {
            open: true,
            isDown: false,
            newEmail: {
                id: '',
                body: '',
                isRead: false,
                sentAt: '',
                sender: {
                    name:'',
                    email:''
                },
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
                        sentAt: '',
                        sender: {
                            name:'',
                            email:''
                        },
                        subject: '',
                    }
                    this.$emit('send')
                })
        },
        minimize() {
            this.isDown = true
        },
        unMinimize() {
            this.isDown = false
        },
    },
}

