
export default {
    props: ['unread'],
    template: `
        <section class="email-nav">
            <div class="send-btn">
                <button @click="$emit('open')">
                    <span class="material-icons add-btn">add</span>
                     Compose
                </button>
            </div>
            <ul>
                <li class="nav-regular nav-inbox">
                    <div class="nav-title">
                        <span class="material-icons">inbox</span>
                        Inbox
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter">{{getUnread}}</span>
                    </div>
                </li>

                <li class="nav-regular nav-starred">
                <div class="nav-title">
                    <span class="material-icons">star_outline</span>
                    Starred
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular nav-sent"> 
                <div class="nav-title">
                    <span class="material-icons">forward_to_inbox</span>
                    Sent Mail
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {
        this.getUnread
    },
    computed: {
        getUnread() {
            if (!this.unread) return ''
            return this.unread
        }
    }
};