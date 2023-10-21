import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { RecycleScroller } from 'vue-virtual-scroller'
 
Vue.component('RecycleScroller', RecycleScroller)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
