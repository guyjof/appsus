import { emailService } from "../services/email-service.js";
import { storageService } from "../../../services/async-storage-service.js";
import emailPreviewControls from "./email-preview-controls.js";
export default {
    props: ['email', 'hover'],
    template: `
            <div class="email">
                    <div class="left-controls">
                        <button @click.stop="toggleChecked" v-if="isChecked"><img class="check-btn" src="img/icons/outline_check_box_black_24dp.png" alt="Checked"> </button>
                        <button @click.stop="toggleChecked" v-else="isChecked"><span class="material-icons">check_box_outline_blank</span></button>
                        <button @click.stop="toggleStarred" v-if="isStarred"><span class="material-icons star-btn">star</span></button>
                        <button @click.stop="toggleStarred" v-else="isStarred"><span class="material-icons">star_outline</span></button>
                        <button @click.stop="toggleImportant" v-if="isImportant"><span class="material-icons important-btn">label_important</span></button>
                        <button @click.stop="toggleImportant" v-else="isImportant"><span class="material-icons">label_important_outline</span></button>
                    </div>
                <div class="email-name" :class="{read:email.isRead}">{{email.sender.name}}</div>
                <div class="content">
                    <div class="email-subject" :class="{read:isRead}">{{email.body}}</div>
                </div>
                <div v-if="!isHover" class="email-time" :class="{read:isRead}">
                    {{timestampInHours}}
                </div>
                <email-preview-controls :email="email" v-else="isHover"/>
            </div>
        
    `,
    data() {
        return {
            time: this.email.sentAt,
            read: false,
            isStarred: this.email.isStarred,
            isImportant: this.email.isImportant,
            isChecked: this.email.isChecked
        }
    },
    methods: {
        isRead() {
            this.read = !this.read
            return this.read
        },
        toggleChecked() {
            this.isChecked = !this.isChecked
            this.email.isChecked = !this.email.isChecked
            storageService.put('emails', this.email);
        },
        toggleStarred() {
            this.isStarred = !this.isStarred
            this.email.isStarred = !this.email.isStarred
            storageService.put('emails', this.email);
        },
        toggleImportant() {
            this.isImportant = !this.isImportant
            this.email.isImportant = !this.email.isImportant
            storageService.put('emails', this.email);
        },
    },
    computed: {
        isHover() {
            if (this.hover === this.email.id) return true
            return false
        },
        timestampInHours() {
            var date = new Date(this.time)
            date = date.toLocaleString("en-il")
            date = date.split(',')
            date = date[1].split(':')
            date = date.splice(0, 2)
            date = date.join(':')
            return date
        },
    },
    components: {
        emailPreviewControls
    }
};
