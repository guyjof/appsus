import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/async-storage-service.js";

const EMAILS_KEY = 'emails';
const gEmails = [
    {
        id: '1',
        sender: {
            name: 'Guy',
            email: 'guy@guyjof.com'
        },
        subject: 'עד מתי camay21',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isRead: false,
        sentAt: Date.now(),
        isChecked: false,
        isStarred: false,
        isSent: false,
        isImportant: false,
    },
    {
        id: '2',
        sender: {
            name: 'Puki',
            email: 'Puki@puk.com'
        },
        subject: 'This is vue',
        body: 'Mauris sed sapien eget nisi fringilla lacinia ut aliquam purus.',
        isRead: false,
        sentAt: Date.now(),
        isChecked: false,
        isStarred: false,
        isSent: false,
        isImportant: false,
    },
    {
        id: '3',
        sender: {
            name: 'Lolo',
            email: 'Lolo@lolo.com'
        },
        subject: 'Whats up?',
        body: 'Duis maximus, tortor at auctor commodo.',
        isRead: false,
        sentAt: Date.now(),
        isChecked: false,
        isStarred: false,
        isSent: false,
        isImportant: false,
    },
    {
        id: '4',
        sender: {
            name: 'Chipi',
            email: 'Chipi@chip.com'
        },
        subject: '(no subject)',
        body: 'magna velit molestie nunc, in rhoncus augue orci non nisl.',
        isRead: false,
        sentAt: Date.now(),
        isChecked: false,
        isStarred: false,
        isSent: false,
        isImportant: false,
    },
    {
        id: '5',
        sender: {
            name: 'Shuki',
            email: 'Shuki@shuk.com'
        },
        subject: 'Aviv\'s Extensions LTD',
        body: 'Curabitur consequat blandit posuere. Vivamus tincidunt massa dui.',
        isRead: false,
        sentAt: Date.now(),
        isChecked: false,
        isStarred: false,
        isSent: false,
        isImportant: false,
    },
]

export const emailService = {
    query,
    remove,
    save,
    getById,
    sendEmail,
    randomUserApi
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
    let mainUser = {}
    return emailService.randomUserApi()
        .then(user => mainUser = user)
        .then(user => {
            mainUser = user
            email.sender.name = user[0].fname
            // email.sender.name += ' ' + user[0].lname 
            email.sender.email = user[0].email
            if (!email.subject) email.subject = "(no subject)"
            email.id = utilService.makeId()
            email.sentAt = Date.now()
            return storageService.post(EMAILS_KEY, email)
        })
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

function randomUserApi() {
    const url1 = 'http://www.filltext.com/?rows=1&fname={firstName}&lname={lastName}&email={email}&phone={phone}&org={lorem}&title={lorem}&address={addressObject}'
    const url2 = 'https://randomuser.me/api/'
    return fetch(url1)
        .then(res => res.json())
        .then(data => data)
}


