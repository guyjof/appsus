import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const EMAILS_KEY = 'emails';
const gEmails = [
    {
        id: 1,
        sender: 'Guy',
        subject: '0Wassap?',
        body: '0Pick up!',
        isRead: Date.now()
    },
    {
        id: 2,
        sender: 'Puki',
        subject: '1Wassap?',
        body: '1Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 3,
        sender: 'Lolo',
        subject: '2Wassap?',
        body: '2Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 4,
        sender: 'Chipi',
        subject: '3Wassap?',
        body: '3Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: 5,
        sender: 'Lala',
        subject: '4Wassap?',
        body: '4Pick up!',
        isRead: false,
        sentAt: Date.now()
    },
]

// const ts = Date.now() 
// const ts = Date.now()
// const newDate = new Date(ts)
// newDate.toLocaleString("en-il")
// "23/06/2021, 16:18:17"


export const emailService = {
    query,
    remove,
    save,
    getById,
    sendEmail,
};

function query() {
    return storageService.query(EMAILS_KEY)
        .then(emails => {
            if (!emails.length) {
                emails = gEmails
                storageService.postMany(EMAILS_KEY, gEmails)
            }
            return emails
        })
}

function sendEmail(email) {
    if (!email.subject) email.subject = "(no subject)"
    return storageService.post(EMAILS_KEY, email)
}

function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}
