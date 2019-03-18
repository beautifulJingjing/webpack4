/**
 * Created by caojingjing on 2019/3/16.
 */
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
