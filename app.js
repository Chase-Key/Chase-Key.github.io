const app = Vue.createApp({
    component: ('font-awesome-icon', FontAwesomeIcon)
});
app.mount("#app")
import MainCard from './components/MainCard.vue'
import ProjectCard from './components/ProjectCard.vue'
import './assets/main.css'


// import { createApp } from 'vue'
// import App from './src/App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faGithub, faLinkedin)

// createApp(App)
// .component('font-awesome-icon', FontAwesomeIcon)
// .mount('#app')


