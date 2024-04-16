import { createApp } from 'vue'
import App from './App.vue'
import Primeiro from 'primevue/config';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu'
import PrimeVue from "primevue/config";


createApp(App)
    .use(PrimeVue,{ripple:true})
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-menubar',Menubar)
    .component('pv-menu',Menu)
