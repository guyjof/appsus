import emailHeader from "../cmps/email-header.js"
import emailNav from '../cmps/email-nav.js'
import emailNavClosed from '../cmps/email-nav-closed.js'
import emailList from '../cmps/email-list.js'
import emailCompose from '../cmps/email-compose.js';
import emailDetails from '../pages/email-details.js'
import appFooter from "../../../cmps/app-footer.js";
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="email-app">
            <email-header @filtered="setFilter" @openNav="toggleNav" />

            <div class="email-body">

                <div class="nav">
                    <email-nav 
                    v-if="navOpen" 
                    @open="composeNewEmail" 
                    @close="closeNewEmail" 
                    @setfilterCategory="setfilterCategory"
                    class="email-nav-cmp"/>
                    <email-nav-closed v-else="navOpen"
                    @open="composeNewEmail" 
                    @close="closeNewEmail" 
                    @setfilterCategory="setfilterCategory"
                    class="email-nav-cmp"/>
                </div>
                
                <div class="main">
                    <email-details v-if="selectedEmail" :email="selectedEmail" @close="closeDetails"/>
                    <email-list v-else="selectedEmail" :emails="emailsToShow" @selected="selectEmail" @update="loadEmails" @count="markAsRead"/>
                    <email-compose v-if="newEmail" @close="closeNewEmail" @send="loadEmails"/>
                    <div class="mobile-compose-btn">
                        <button @click="composeNewEmail">
                            <span class="material-icons">edit</span>
                        </button>
                    </div>

                </div>
                
            </div>
            <app-footer />
            </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: '',
            newEmail: false,
            unreadCount: 0,
            navOpen: true,
            filterBy: {
                all: true,
                txt: true,
                text: '',
                read: null,
                unread: null,
                starred: null,
                sent: null,
                important: null
            },
        }
    },

    created() {
        this.loadEmails();
        eventBus.$on('removeEmail', (emailId) => {
            emailService.remove(emailId)
                .then(() => this.loadEmails())
                .then(() => this.getUnread)
                .then(() => this.unreadCount = this.getUnread())
        })
    },
    methods: {
        loadEmails() {
            this.getUnread
            emailService.query()
                .then(emails => this.emails = emails);
        },

        selectEmail(email) {
            this.selectedEmail = email;
        },

        closeDetails() {
            this.selectedEmail = null;
        },

        markAsRead(email) {
            this.getUnread
            this.loadEmails
        },

        setFilter(filterBy) {
            this.filterBy.text = filterBy;
        },

        setfilterCategory(category) {
            if (category === 'inbox') {
                this.filterBy.all = true
                this.filterBy.starred = false
                this.filterBy.sent = false
                this.filterBy.txt = true
                this.filterBy.important = false
                this.filterBy.read = false
                this.filterBy.unread = false
                this.emailsToShow
                return
            }
            if (category === 'starred') {
                this.filterBy.all = false
                this.filterBy.starred = true
                this.filterBy.sent = false
                this.filterBy.txt = false
                this.filterBy.important = false
                this.filterBy.read = false
                this.filterBy.unread = false
                this.emailsToShow

                return
            }
            if (category === 'sent') {
                this.filterBy.all = false
                this.filterBy.starred = false
                this.filterBy.sent = true
                this.filterBy.txt = false
                this.filterBy.important = false
                this.filterBy.read = false
                this.filterBy.unread = false
                this.emailsToShow
                return
            }
            if (category === 'important') {
                this.filterBy.all = false
                this.filterBy.starred = false
                this.filterBy.sent = false
                this.filterBy.txt = false
                this.filterBy.important = true
                this.filterBy.read = false
                this.filterBy.unread = false
                this.emailsToShow
                return
            }
            if (category === 'read') {
                this.filterBy.all = false
                this.filterBy.starred = false
                this.filterBy.sent = false
                this.filterBy.txt = false
                this.filterBy.important = false
                this.filterBy.read = true
                this.filterBy.unread = false
                this.emailsToShow
                return
            }
            if (category === 'unread') {
                this.filterBy.all = false
                this.filterBy.starred = false
                this.filterBy.sent = false
                this.filterBy.txt = false
                this.filterBy.important = false
                this.filterBy.read = false
                this.filterBy.unread = true
                this.emailsToShow
                return
            }
        },

        composeNewEmail() {
            this.newEmail = true
        },

        closeNewEmail() {
            this.newEmail = false
        },

        toggleNav() {
            this.navOpen = !this.navOpen
        }
    },
    computed: {
        getUnread() {
            if (this.filterBy.txt) {
                let counter = 0;
                const emailsNotRead = this.emails.filter((email) => {
                    if (!email.isRead) counter++
                });
                return counter
            }

            let counter = 0;
            for (let i = 0; i < this.emails.length; i++) {
                if (!this.emails[i].isRead) {
                    counter++
                }
            }
            this.unreadCount = counter
            return counter
        },
        emailsToShow() {
            // if (!this.filterBy || this.filterBy.text === '') return this.emails;
            if (this.filterBy.txt) {
                const searchStr = this.filterBy.text.toLowerCase();
                const emailsToShow = this.emails.filter((email) => {
                    return (
                        email.body.toLowerCase().includes(searchStr) ||
                        email.sender.name.toLowerCase().includes(searchStr) ||
                        email.sender.email.toLowerCase().includes(searchStr)
                    );
                });
                return emailsToShow;
            }
            if (this.filterBy.starred) {
                const emailsToShow = this.emails.filter((email) => {
                    return (
                        email.isStarred
                    );
                });
                return emailsToShow;
            }
            if (this.filterBy.sent) {
                const emailsToShow = this.emails.filter((email) => {
                    return (
                        email.isSent
                    );
                });
                return emailsToShow;
            }
            if (this.filterBy.important) {
                const emailsToShow = this.emails.filter((email) => {
                    return (
                        email.isImportant
                    );
                });
                return emailsToShow;
            }
            if (this.filterBy.read) {
                const emailsToShow = this.emails.filter((email) => {
                    return email.isRead;
                });
                return emailsToShow;
            }
            if (this.filterBy.unRead) {
                const emailsToShow = this.emails.filter((email) => {
                    return !email.isRead
                });
                return emailsToShow;
            }
        },
    },
    components: {
        emailHeader,
        emailNav,
        emailNavClosed,
        emailList,
        emailDetails,
        emailCompose,
        appFooter
    }
};