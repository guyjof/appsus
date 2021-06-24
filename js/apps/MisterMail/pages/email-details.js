import { emailService } from "../services/email-service.js";
import emailHeader from "../cmps/email-header.js"
import emailNav from '../cmps/email-nav.js'
export default {
    props: ['email'],
    template: `
    <section class ="details-page">
        <div class="details-page-header">
            <email-header />
        </div>
            <div class="details-page-body">
                <email-nav />
     
                <section class="email-details">
                <div class="details-header">
                    <div class="details-header-subject">
                        <h2>{{emailSelected.subject}}</h2>
                    </div>
                    <div class="details-header-close">
                        <router-link @click.native="$emit('close')" to="/mail" class="close-btn"><span class="material-icons">close</span></router-link>
                    </div>
                </div>
                <div class="sender-info">
                    <span class="material-icons">account_circle</span>
                    <p>{{emailSelected.sender.name}}</p> <span class="sender-email">&lt;{{emailSelected.sender.email}}&gt;</span>
                </div>
                <div class="email-body">
                    <p>{{emailSelected.body}}</p>
                </div>
                </section>
            </div>
        </section>
`,
data(){
    return{
        emailSelected:{},
    }
},
    created() {
        const { mailId } = this.$route.params;
        emailService.getById(mailId)
        .then(email => this.emailSelected = email)
    },
    watch: {
        '$route.params.mailId': {
            immediate: true,
            handler() {
                const { mailId } = this.$route.params;
                emailService.getById(mailId)
            },
        }
    },
    components:{
        emailHeader,
        emailNav
    }
}