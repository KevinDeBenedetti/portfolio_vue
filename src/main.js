import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* External Lib */
import Prism from 'prismjs';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faSymfony, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add( faHouse, faVuejs, faSymfony, faLinkedin, faGithub, faArrowUpRightFromSquare )

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Prism)
/* Use fontawesome components */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
