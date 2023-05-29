import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const api = 'https://vtech-json-server.herokuapp.com/'

let app = createApp(App)

app.config.globalProperties.api = api

app.use(router).mount('#app')
