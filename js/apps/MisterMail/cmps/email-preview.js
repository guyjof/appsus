import emailPreviewControls from "./email-preview-controls.js";
export default {
    props: ['email', 'hover'],
    template: `
            <div class="email">
                <div class="left-controls">
                <span class="material-icons">check_box_outline_blank</span>
                <span class="material-icons">star_outline</span>
                <span class="material-icons">label_important_outline</span>
                </div>
                    <div class="email-name" :class="{read:isRead}">{{email.sender}}</div>
                <div class="content">
                    <div class="email-subject" :class="{read:isRead}">{{email.body}}</div>
                </div>
                <div v-if="!isHover" class="email-time" :class="{read:isRead}">{{emailSentTime}}</div>
                <email-preview-controls :email="email" v-else="isHover"/>
            </div>
    `,
    data() {
        return {
            time: this.email.sentAt,
            read:true,
        }
    },
    methods: {
        // isRead(){
        //     return true
        // }
    },
    computed: {
        emailSentTime() {
            return '12:00'
        },
        isHover() {
            if (this.hover === this.email.id) return true
            return false
        }
    },
    components: {
        emailPreviewControls
    }
};
