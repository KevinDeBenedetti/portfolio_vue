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
import { faHouse, faArrowUpRightFromSquare, faDatabase, faLink } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faSymfony, faLinkedinIn, faGithub, faHtml5, faCss3Alt, faJs, faBootstrap, faMarkdown, faPhp, faNode, faWordpress, faFigma } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add( faHouse, faVuejs, faSymfony, faLinkedinIn, faGithub, faArrowUpRightFromSquare, faHtml5, faCss3Alt, faJs, faBootstrap, faMarkdown, faPhp, faNode, faWordpress, faDatabase, faFigma, faLink )

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Prism)
/* Use fontawesome components */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
