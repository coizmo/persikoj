import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// for PrimeVue
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

// for PrimeVue themes
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

// create vue application
const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component('Button', Button);

app.mount("#app");
