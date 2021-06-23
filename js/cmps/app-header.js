export default {
    template: `
    <header class="app-header">
        <router-link to="/"><h1>Appsus</h1></router-link>
        <nav>
            <ul class="header-nav">
                <router-link to="/"><li>Home</li></router-link>
                <router-link to="/mail"><li>Mail</li></router-link>
                <router-link to="/note"><li>Notes</li></router-link>
                <router-link to="/about"><li>About</li></router-link>
            </ul>
        </nav>
    </header>
    `,
};
