import {createWebHistory, createRouter} from 'vue-router'
import MainHome from './components/MainHome.vue'
import MainProducts from './components/MainProducts.vue'
import MainContacts from './components/MainContacts.vue'

const routes = [
    {
        name: 'MainHome',
        path: '/',
        component: MainHome
    },
    {
        name: 'MainProducts',
        path: '/products',
        component: MainProducts
    },
    {
        name: 'MainContacts',
        path: '/contacts',
        component: MainContacts
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router