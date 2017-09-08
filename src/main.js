import match from 'lib-match';
import store from 'STORE/index';

match.config({
    autoComplete: false
});

// vue
const vue = require('vue');
vue.config.devtools = true;


// vueResource
const vueResource = require('vue-resource');
vue.use(vueResource);


// element
const element = require('element-ui');
require('element-ui/lib/theme-default/index.css');
vue.use(element);

// vueRouter
const vueRouter = require('vue-router');
vue.use(vueRouter);


// res
require('./lib/reset.v3.1.1.css');
require('./lib/global.css');


// app
const app = require('./app.vue');
const routes = require('./script/route.js');
require('./lib/polyfill.js');

const router = new vueRouter({
    mode: 'hash',
    routes: routes
});


new vue({
    el: '#app',
    router,
    store,
        render (fn) {
            return fn(app);
        }
});
