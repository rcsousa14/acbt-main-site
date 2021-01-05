// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueSmoothScroll from 'vue2-smooth-scroll'

export default function(Vue, { router, head, isClient }) {

    // Set default layout as a global component
    Vue.use(VueSmoothScroll)
    Vue.component('Layout', DefaultLayout)
        // metadata stuff for SEO


    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap'
    })
}