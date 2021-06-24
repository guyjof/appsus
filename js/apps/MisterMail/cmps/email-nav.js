
export default {
    template: `
        <section class="email-nav">
            <div class="send-btn">
                <button @click="$emit('open')">
                    <span class="material-icons">add</span>
                     Compose
                </button>
            </div>
            <ul>
                <li class="nav-regular nav-inbox">
                    <span class="material-icons">inbox</span>
                    Inbox
                </li>

                <li class="nav-regular">
                    <span class="material-icons">star_outline</span>Starred</li>
                <li class="nav-regular"> 
                    <span class="material-icons">schedule</span>Snoozed</li>
                <!-- <li class="nav-regular">Sent</li>
                <li class="nav-regular">Drafts</li>
                <li class="nav-regular">Spam</li>
                <li class="nav-regular">Categories</li>
                <li class="nav-regular">Social</li>
                <li class="nav-regular">updates</li>
                <li class="nav-regular">Forums</li>
                <li class="nav-regular">Promotion</li>
                <li class="nav-regular nav-more">More</li> -->
                <!-- <li>Important</li>
                <li>Chats</li>
                <li>Scheduled</li>
                <li>All Mail</li>
                <li>Trash</li>
                <li>Manage Labels</li>
                <li>Create new label</li> -->
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