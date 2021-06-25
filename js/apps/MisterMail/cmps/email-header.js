export default {
    template: `
            <header>
                <div class="header-left">
                    <button>
                        <span class="material-icons">menu</span>
                    </button>
                    <router-link to="/mail">
                    <div class="logo-container">
                        <div class="logo-img">
                            <img src="img/Gmail_logo_PNG9.png" alt="Mister Mail">
                        </div>
                        <div class="logo-text">
                            <p>Mister</p>
                            <p>Mail</p>
                        </div>
                    </div>
                    </router-link>
                </div>

                <div class="header-middle">
                    <span class="material-icons">search</span>
                    <input type="text" placeholder="Search Mail" />
                </div>

                <div class="header-right">
                    <button @click="toggleModal"><span class="material-icons">apps</span></button>
                    <button><span class="material-icons">account_circle</span></button>
                </div>
                <div v-if="isModalOpen" class="apps-modal">
                    <router-link to="/mail">
                        <div class="mail-modal-app">
                            <img src="img/Gmail_logo_PNG9.png" alt="Mister Mail">
                            <small>Mister Mail</small>
                        </div>
                    </router-link>
                    <router-link to="/note">
                        <div class="note-modal-app">
                            <img src="img/google-keep-2-569459.png" alt="Miss Keep">
                            <small>Miss Kepp</small>
                        </div>
                    </router-link>
                    <router-link to="/book">
                        <div class="book-modal-app">
                            <img src="img/book.png" alt="Mister Mail">
                            <small>Miss Books</small>
                        </div>
                    </router-link>
                </div>
            </header>
    `,
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen
        }
    }

}