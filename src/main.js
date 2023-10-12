import App from '@/App.vue'
import router from '@/router'
import Toast from 'vue-toastification'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

createApp(App).use(router, createPinia(), Toast).mount('#app')
