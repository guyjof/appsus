
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
                <li class="nav-regular nav-inbox">
                    <span class="material-icons">inbox</span>
                    Inbox
                </li>

                <li class="nav-regular nav-starred">
                    <span class="material-icons">star_outline</span>
                    Starred
                </li>
                <li class="nav-regular nav-sent"> 
                    <span class="material-icons">forward_to_inbox</span>
                    Sent Mail
                </li>
                <!-- <li class="nav-regular nav-drafts">
                    <span class="material-icons">
                    description
                    </span>
                    Drafts
                </li> -->
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {
    }
};