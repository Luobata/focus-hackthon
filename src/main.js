import match from 'lib-match';
import store from 'STORE/index';
import $$user from 'MODEL/user';

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


$$user.login({}, function(res) {
    if (res.code === '200') {
        store.commit('user/login', res.data);
        new vue({
            el: '#app',
            router,
            store,
            render (fn) {
                return fn(app);
            }
        });
    }
});


// hide loading
window.document.getElementById('loading').style.display = 'none';
