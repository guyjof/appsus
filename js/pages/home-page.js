import appHeader from '../cmps/app-header.js'
export default {
    template: `<section>
                <app-header />
                    <section class="home-page">
                        <router-link to="/mail"> 
                            <div class="mail-card">                   
                                <img src="img/Gmail_logo_PNG9.png" alt="Mister Mail">
                                <small>Mister Mail</small>
                            </div>
                        </router-link>

                        <router-link to="/note"> 
                            <div class="note-card">
                               <img src="img/google-keep-2-569459.png" alt="Miss Keep">
                                <small>Miss Keep</small></div></router-link>
                        
                        <router-link to="/book"> 
                            <div class="book-card">       
                                <img src="img/book.png" alt="Mister Mail">
                                <small>Miss Books</small>
                            </div>
                        </router-link>

                    </section>
                </section>
    `,
    created() {
    },
    components: {
        appHeader,
    },
}