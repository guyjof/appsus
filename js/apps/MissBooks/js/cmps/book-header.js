export default {
    template: `
            <header>
                <div class="header-left">
                    <button @click="$emit('openNav')">
                        <span class="material-icons">menu</span>
                    </button>
                    <router-link to="/book">
                    <div class="logo-container">
                        <div class="logo-img">
                            <img src="img/book.png" alt="Miss Books">
                        </div>
                        <div class="logo-text">
                            <p>Miss</p>
                            <p>Books</p>
                        </div>
                    </div>
                    </router-link>
                </div>

                <div class="header-middle">
                    <span class="material-icons">search</span>
                    <input v-model="filterBy" @input="filter" type="text" placeholder="Search Books" />
                </div>

                <div class="header-right">
                    <button @click="toggleModal"><span class="material-icons">apps</span></button>
                    <button><router-link to="/about"><span class="material-icons">account_circle</span></router-link></button>
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
                            <small>Miss Keep</small>
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
            isModalOpen: false,
            filterBy: ''
        }
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen
        },
        filter() {
            this.$emit('filter', this.filterBy);
        },
    }

}