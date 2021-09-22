import { createApp } from 'vue'
import Sandbox from './Sandbox.vue'
import { plugin as VueInputAutowidth } from '../../../src/'
import '../../src/app.css'

createApp(Sandbox).use(VueInputAutowidth).mount('#app')
