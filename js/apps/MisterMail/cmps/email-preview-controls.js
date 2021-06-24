import { eventBus } from "../../../services/event-bus-service.js";
export default {
    props: ['email'],
    template: `
            <div class="email-preview-controls">
<button @click.stop="remove(email)">
    <span class="material-icons">delete</span>
</button>

<button @click.stop="toggleRead(email)">
<span class="material-icons">mark_as_unread</span>
</button>

<button @click.stop="archive(email)">
    <span class="material-icons">archive</span>
</button>
            </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        remove(email) {
            eventBus.$emit('removeEmail', email.id)
        },
        toggleRead(email) {
            eventBus.$emit('toggleRead', email.id)
        },
        archive(email) {
            eventBus.$emit('archive', email.id)
        },
    },
};
