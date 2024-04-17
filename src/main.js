import { createApp } from 'vue'
import App from './App.vue'
import router from './Routes'

//need to use router because the app goes through there first
//the app is established in indexhtml under div id=app
createApp(App).use(router).mount('#app')
