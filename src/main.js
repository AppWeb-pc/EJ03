import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';


//Impotaciones generales
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


//Los componentes que se utilizaran
import Card from 'primevue/card'
import Toolbar from 'primevue/toolbar';
import Menubar from 'primevue/menubar';
import Menu from 'primevue/menu'


//Se inicializan los componentes
createApp(App)
    .use(PrimeVue,{ripple:true})
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-menubar',Menubar)
    .component('pv-menu',Menu)
    .mount('#app')
