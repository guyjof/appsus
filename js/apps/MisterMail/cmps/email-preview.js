export default {
    props: ['email'],
    template: `
            <div class="email">
                <input type="checkbox" name="">
                <div class="email-name">{{email.sender}}</div>
                <div class="email-subject">{{email.subject}}</div>
                <div class="email-content">{{email.body}}</div>
                <div class="email-time">{{emailSentTime}}</div>
            </div>
    `,
    data() {
        return {
            time: this.email.sentAt
        }
    },
    computed: {
        emailSentTime() {
            return '12:00'

        }
    }
};
