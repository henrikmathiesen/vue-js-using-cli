import Vue from 'vue';
import Router from 'vue-router';

import HomeComponent from '../components/HomeComponent';
import GalleryComponent from '../components/GalleryComponent';
import CommunicationComponent from '../components/CommunicationComponent/CommunicationComponent';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryComponent
    },
    {
        path: '/communication',
        name: 'Communication',
        component: CommunicationComponent
    }
]

export default new Router({
    routes
});
