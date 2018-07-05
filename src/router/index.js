import Vue from 'vue';
import Router from 'vue-router';

import HomeComponent from '../components/HomeComponent';
import GalleryComponent from '../components/GalleryComponent';
import CommunicationComponent from '../components/CommunicationComponent/CommunicationComponent';
import NavigateToMeComponent from '../components/NavigateToMeComponent';

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
    },
    {
        path: '/navigate-to-me/:partType/:id',
        name: 'NavigateToMe',
        component: NavigateToMeComponent,
        //props: true
        // Use this to send route params as props instead
        // That way we dont couple the component with the router
        // See also NavigateToMeComponent
    }

    // Nested routes: https://router.vuejs.org/guide/essentials/nested-routes.html
    // Named views: https://router.vuejs.org/guide/essentials/named-views.html
    // Route guards: https://router.vuejs.org/guide/advanced/navigation-guards.html
]

export default new Router({
    routes,
    //mode: 'history' , no hash sign in url
});
