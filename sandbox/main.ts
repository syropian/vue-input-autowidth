import { createApp } from 'vue'
import Sandbox from './Sandbox.vue'
import { plugin as VueInputAutowidth } from '../lib'
import './app.css'

createApp(Sandbox).use(VueInputAutowidth).mount('#app')
