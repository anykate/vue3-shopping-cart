import App from '@/App.vue'
import router from '@/router'
import Toast, { POSITION } from 'vue-toastification'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'vue-toastification/dist/index.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

createApp(App)
    .use(router)
    .use(Toast, {
        // Setting the global default position
        position: POSITION.BOTTOM_RIGHT,
    })
    .use(createPinia())
    .mount('#app')
