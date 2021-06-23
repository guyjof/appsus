
export default {
    template: `
        <section class="email-nav">
            <button @click="$emit('open')">+ Compose</button>
            <ul>
                <li class="nav-regular nav-inbox">Inbox</li>
                <li class="nav-regular">Starred</li>
                <li class="nav-regular">Snoozed</li>
                <li class="nav-regular">Sent</li>
                <li class="nav-regular">Drafts</li>
                <li class="nav-regular">Spam</li>
                <li class="nav-regular">categories</li>
                <li class="nav-regular">social</li>
                <li class="nav-regular">updates</li>
                <li class="nav-regular">forums</li>
                <li class="nav-regular">Promotion</li>
                <li class="nav-regular nav-more">More</li>
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