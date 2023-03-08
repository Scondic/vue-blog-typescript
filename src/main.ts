import { createApp } from 'vue'

import App from './App.vue'

import { registerComponentsPlugin } from '@/plugins/components'

const app = createApp(App)

app.use(registerComponentsPlugin)

import './global.scss'

app.mount('#app')
