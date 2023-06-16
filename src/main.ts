/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import './main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMusic, faPlay, faPause, faAngleLeft, faAngleRight, faVolumeDown, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMusic, faPlay, faPause, faAngleLeft, faAngleRight, faVolumeDown, faMoon, faSun)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
