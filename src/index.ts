import Vue from 'vue';

// Libraries

import VueRouter from 'vue-router';
import VueRx from 'vue-rx';

Vue.use(VueRouter);
Vue.use(VueRx);

import './styles/styles.scss';


// App
import { Routes } from './routes';

export const router = new VueRouter({
    routes: Routes
});

router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
});

const app = new Vue({
    router
}).$mount('#app');