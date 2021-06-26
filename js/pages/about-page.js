import appFooter from "../cmps/app-footer.js"
// import aboutHeader from "../cmps/about-header.js";

export default {
    template: `
        <section class="about-page app-main">
        <div class="back-btn"> 
        <router-link to="/" class="close-btn"><span class="material-icons">arrow_back</span> Back To Home Page</router-link>
        </div>

        <div class="about-main"> 

            <div class="profile-container">
                <img class="profile-img" src="img/profile/guy.jpg" alt="">
                <h2 class="about-header" ref="header">Guy Jofre Gonzales</h2>
                <p class="about-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas rerum ullam aspernatur quidem quae incidunt earum, alias est blanditiis!</p>
                <ul class="socials-container"> 


                <a href="https://www.facebook.com/GUYJOFRE"><li><span><i class="fab fa-facebook">  </i>  </span></li></a>
                <a href="https://github.com/guyjof"><li><span><i class="fab fa-github"></i> </span></li></a>
                <a href="https://www.linkedin.com/in/guyjof/"><li><span><i class="fab fa-linkedin"></i>  </span></li></a>
                </ul>
            </div>
            <div class="profile-container">
                <img class="profile-img" src="img/profile/arthur.jpg" alt="">
                <h2 class="about-header" ref="header">Arthur Shtein</h2>
                <p class="about-p"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quas rerum ullam aspernatur quidem quae incidunt earum, alias est blanditiis!</p>
                <ul class="socials-container"> 
                <a href="https://www.facebook.com/arthur.shtein.7/"><li><span><i class="fab fa-facebook">  </i>  </span></li></a>
                <a href="https://github.com/Spinier"><li><span><i class="fab fa-github"></i> </span></li></a>
                <a href="https://www.linkedin.com/in/arthur-shtein-1398111b4/"><li><span><i class="fab fa-linkedin"></i>  </span></li></a>
                </ul>
            </div>

        </div>
        <app-footer/>
        </section>
    `,


    components: {
        appFooter,
        // aboutHeader
    }
};

