import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(Buefy)
Vue.use(AutoCompletePlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')