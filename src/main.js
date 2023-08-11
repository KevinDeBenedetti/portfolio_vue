import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* Import prismjs */
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faSymfony } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add( faHouse, faVuejs, faSymfony )


const app = createApp(App)

app.use(createPinia())
app.use(router)
/* Use fontawesome components */
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
