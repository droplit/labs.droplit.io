import { RouteConfig } from 'vue-router';

import PageNotFound from './page-not-found.vue';
import Home from './home.vue';

import Main from './main.vue';

// Routes resolved in order
export const Routes: RouteConfig[] = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            }
        ],
    },
    { path: '**', component: PageNotFound }
];