import homePage from './pages/home-page.js'
import aboutPage from './pages/about-page.js'
import mailApp from './apps/MisterMail/pages/email-app.js'
import mailDetails from './apps/MisterMail/pages/email-details.js'
import noteApp from './apps/MissKeep/note-app.js'
const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
    {
        path: '/note',
        component: noteApp
    },
    {
        path: '/about',
        component: aboutPage
    },
];

export const router = new VueRouter({ routes });