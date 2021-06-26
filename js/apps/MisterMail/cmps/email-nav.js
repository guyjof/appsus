
export default {
    template: `
        <section class="email-nav">
            <div class="send-btn">
                <button @click="$emit('open')">
                    <span class="material-icons add-btn">add</span>
                     Compose
                </button>
            </div>
            <ul>
                <li @click="toggleInbox" class="nav-regular nav-inbox" :class={activeInbox:inbox}>
                    <div class="nav-title">
                        <button>
                            <span class="material-icons nav-inbox">inbox</span>
                            Inbox
                        </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>

                <li @click="toggleStarred" class="nav-regular nav-starred" :class={activeStarred:starred}>
                <div class="nav-title">
                    <button >
                        <span class="material-icons nav-starred">star_outline</span>
                        Starred
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
            
                <li @click="toggleSent" class="nav-regular nav-sent" :class={activeSent:sent}> 
                <div class="nav-title">
                    <button >
                        <span class="material-icons nav-sent">forward_to_inbox</span>
                        Sent Mail
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>

                <li @click="toggleImportant" class="nav-regular nav-important" :class={activeImportant:important}> 
                <div class="nav-title">
                    <button >
                        <img src="img/icons/label_black_24dp.svg" alt="">
                        Important
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>

                <li @click="toggleRead" class="nav-regular nav-read" :class={activeRead:read}> 
                <div class="nav-title">
                    <button>
                        <img src="img/icons/mark_email_read_black_24dp.svg" alt="">
                        Read
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>

                <li @click="toggleUnread" class="nav-regular nav-unread" :class={activeUnread:unread}> 
                <div class="nav-title">
                    <button >
                        <img src="img/icons/markunread_black_24dp.svg" alt="">
                        Unread
                    </button>
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
            inbox: true,
            starred: false,
            sent: false,
            important: false,
            read: false,
            unread: false,
        }
    },
    created() {

    },
    methods: {
        toggleInbox() {
            this.inbox = true
            this.starred = false
            this.sent = false
            this.important = false
            this.read = false
            this.unread = false
            this.$emit('setfilterCategory', 'inbox')
        },
        toggleStarred() {
            this.starred = true
            this.inbox = false
            this.sent = false
            this.important = false
            this.read = false
            this.unread = false
            this.$emit('setfilterCategory', 'starred')
        },
        toggleSent() {
            this.sent = true
            this.inbox = false
            this.starred = false
            this.important = false
            this.read = false
            this.unread = false
            this.$emit('setfilterCategory', 'sent')
        },
        toggleImportant() {
            this.sent = false
            this.inbox = false
            this.starred = false
            this.important = true
            this.read = false
            this.unread = false
            this.$emit('setfilterCategory', 'important')
        },
        toggleRead() {
            this.sent = false
            this.inbox = false
            this.starred = false
            this.important = false
            this.read = true
            this.unread = false
            this.$emit('setfilterCategory', 'read')
        },
        toggleUnread() {
            this.sent = false
            this.inbox = false
            this.starred = false
            this.important = false
            this.read = false
            this.unread = true
            this.$emit('setfilterCategory', 'unread')
        },
    }
};