import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './components/HomePage.vue';
import ThankYou from './components/ThankYou.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',  // Removes the hash (#) from the URLs
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/thankyou',
      name: 'ThankYou',
      component: ThankYou
    }
  ]
});
