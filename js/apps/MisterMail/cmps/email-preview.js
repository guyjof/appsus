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
                    <div class="email-name">{{email.sender}}</div>
                <div class="content">
                    <div class="email-subject">{{email.subject}}</div>
                    <div class="email-content">{{email.body}}</div>
                </div>
                <div v-if="!isHover" class="email-time">{{emailSentTime}}</div>
                <email-preview-controls :email="email" v-else="isHover"/>
            </div>
    `,
    data() {
        return {
            time: this.email.sentAt,
        }
    },
    methods: {
        toggleIsHovered() {
            // this.isHovered = !this.isHoverd
        },
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
