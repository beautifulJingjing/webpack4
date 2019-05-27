import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './play/route.config';
import Element from 'main/index.js';
import App from './play/views/index.vue';
import 'packages/theme-chalk/src/index.scss';
import './play/assets/common.scss';
import './play/assets/reset.scss';

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

Vue.use(VueRouter);
Vue.use(Element);

let a = new Vue({ // eslint-disable-line
  router,
  render: h => h(App)
}).$mount('#app');
