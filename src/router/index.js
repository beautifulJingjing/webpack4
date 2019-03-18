import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/views/index'
// import List from '@/views/list'

const Index = () => import ('@/views/Index');
const List = () => import ('@/views/List');

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})
