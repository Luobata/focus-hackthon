var routers = [
    {
        path: '/',
        component: require('COMPONENTS/layout/layout.vue'),
        children: [
            {
                path: 'index',
                component: require('COMPONENTS/index/index.vue'),
            },
            {
                path: 'estate',
                component: require('COMPONENTS/estate/list.vue'),
            },
            {
                path: 'detail/:detailId',
                component: require('COMPONENTS/detail/detail.vue'),
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
