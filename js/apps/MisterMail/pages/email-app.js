import emailHeader from "../cmps/email-header.js"
import emailNav from '../cmps/email-nav.js'
import emailList from '../cmps/email-list.js'
import emailCompose from '../cmps/email-compose.js';
import emailDetails from '../pages/email-details.js'
import emailFilter from '../cmps/email-filter.js';
import { utilService } from '../../../services/util-service.js';
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="email-app">
            <email-header />

            <div class="email-body">

                <div class="nav">
                    <email-nav @open="composeNewEmail" @close="closeNewEmail" :unread="unreadCount"/>
                </div>
                
                <div class="main">
                    <email-details v-if="selectedEmail" :email="selectedEmail" @close="closeDetails"/>
                    <email-list v-else="selectedEmail" :emails="this.emails" @selected="selectEmail" @update="loadEmails" @count="markAsRead"/>
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
            newEmail: false,
            unreadCount:0
        }
    },
    created() {
        this.loadEmails();
        eventBus.$on('removeEmail', (emailId) => {
            emailService.remove(emailId)
                .then(() => this.loadEmails())
                .then(()=>  this.getUnread)
                .then(()=>  this.unreadCount = this. getUnread)
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
        getUnread(){
            let counter =0;
            for (let i = 0; i < this.emails.length; i++){
                if(!this.emails[i].isRead){
                    counter++
                }
            }
            this.unreadCount = counter
            return counter
        },
        // emailsToShow() {

        // },
    },
    components: {
        emailHeader,
        emailNav,
        emailList,
        emailDetails,
        emailCompose,
    }
};