export default {
    template: `
    <nav>
        <article class="red" @click="toggleInbox">
            <button>
                <span class="material-icons">inbox</span>
                <h4>Inbox</h4>
            </button>
        </article>
        
        <article class="orange"  @click="toggleStarred">
            <button>
                <span class="material-icons">star_outline</span>
                <h4>Starred</h4>
            </button>
        </article>
        
        <article class="green" @click="toggleSent">
            <button>
                <span class="material-icons">forward_to_inbox</span>
                <h4>Sent Mail</h4>
            </button>
        </article>
    </nav>
    `,
    methods: {
        toggleInbox() {
            this.$emit('setfilterCategory', 'inbox')
        },
        toggleStarred() {
            this.$emit('setfilterCategory', 'starred')
        },
        toggleSent() {
            this.$emit('setfilterCategory', 'sent')
        },
    }
}