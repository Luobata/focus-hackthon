var routers = [
    {
        path: '/',
        component: require('COMPONENTS/layout/layout.vue'),
        children: [
            {
                path: 'index',
                component: require('COMPONENTS/index/index.vue'),
            }
        ]
    },
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: '/*',
        component: require('COMPONENTS/404/404.vue')
    }
];

module.exports = routers;
