import homePage from './pages/home-page.js'
import aboutPage from './pages/about-page.js'
import mailApp from './apps/MisterMail/mail-app.js'
import noteApp from './apps/MissKeep/pages/keep-app.js'
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
        path: '/note',
        component: noteApp
    },
    {
        path: '/about',
        component: aboutPage
    },
];

export const router = new VueRouter({ routes });