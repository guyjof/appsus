
export default {
    props: ['unread'],
    template: `
        <section class="email-nav-closed">
            <div class="send-btn-closed">
                <button @click="$emit('open')">
                <span class="material-icons">edit</span>
                </button>
            </div>
            <ul class="closed-ul">
                <li class="nav-regular-closed nav-inbox">
                    <div class="nav-title-closed">
                        <button>
                            <span class="material-icons">inbox</span>
                        </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular-closed nav-starred">
                <div class="nav-title-closed">
                    <button>
                        <span class="material-icons">star_outline</span>
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular-closed nav-sent"> 
                <div class="nav-title-closed">
                    <button>
                        <span class="material-icons">forward_to_inbox</span>
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular-closed nav-sent"> 
                <div class="nav-title-closed">
                <button >
                        <img class="nav-closed-img" src="img/icons/label_black_24dp.svg" alt="">
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular-closed nav-sent"> 
                <div class="nav-title-closed">
                <button>
                        <img class="nav-closed-img" src="img/icons/mark_email_read_black_24dp.svg" alt="">
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
                <li class="nav-regular-closed nav-sent"> 
                <div class="nav-title-closed">
                <button >
                        <img class="nav-closed-img" src="img/icons/markunread_black_24dp.svg" alt="">
                    </button>
                    </div>
                    <div class="unread-counter-container">
                        <span class="unread-counter"></span>
                    </div>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    created() {
    },
};