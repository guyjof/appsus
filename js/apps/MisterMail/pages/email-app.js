import emailNav from '../cmps/email-nav.js'
import emailList from '../cmps/email-list.js'
import { emailService } from '../services/email-service.js';
import emailFilter from '../cmps/email-filter.js';
import emailDetails from '../pages/email-details.js'
import { utilService } from '../../../services/util-service.js';
import emailCompose from '../cmps/email-compose.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="email-app">
            <!-- email header -->

            <div class="email-body">

                <div class="nav">
                    <email-nav @open="composeNewEmail" @close="closeNewEmail"/>
                </div>
                
                <div class="main">
                    <!-- email controls -->
                    <email-details v-if="selectedEmail" :email="selectedEmail" @close="closeDetails"/>
                    <email-list v-else="selectedEmail" :emails="this.emails" @selected="selectEmail" @update="loadEmails"/>
                    <email-compose v-if="newEmail" @close="closeNewEmail" @send="loadEmails"/>
                </div>
                
            </div>
            </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: '',
            newEmail: false
        }
    },
    created() {
        this.loadEmails();
        eventBus.$on('removeEmail', (emailId) => {
            emailService.remove(emailId)
                .then(() => this.loadEmails())

        })
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => this.emails = emails);
        },

        selectEmail(email) {
            this.selectedEmail = email;
        },
        closeDetails() {
            this.selectedEmail = null;
        },
        MarkAsRead() {

        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        composeNewEmail() {
            this.newEmail = true
        },
        closeNewEmail() {
            this.newEmail = false
        },
    },

    computed: {
        emailsToShow() {

        }
    },
    components: {
        emailNav,
        emailList,
        emailDetails,
        emailCompose
    }
};