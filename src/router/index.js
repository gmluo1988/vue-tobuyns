//导入相关引用
import Vue from 'vue';
import Router from 'vue-router';
//使用路由
Vue.use(Router);
//页面路由映射配置
export default new Router({
    mode: 'history', //切换路径模式，变成history模式
    base: '/tobuyns', //定义基本路径,这样访问页面时的路径就是http://www.gmluo.cn/tobuyns+页面path名称
    scrollBehavior: () => ({
        y: 0
    }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        //	使用重定向(redirect)配置默认页面
        {
            path: '/',
            redirect: '/dashboard'
        },
        //	配置登录页面地址
        {
            path: '/login',
            component: resolve => require(['../components/pages/Login.vue'], resolve)
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {
                title: '自述文件'
            },
            children: [{
                    path: '/dashboard',
                    component: resolve => require(['../components/pages/Dashboard.vue'], resolve),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: '/usermanage',
                    component: resolve => require(['../components/pages/usermanage/UserManage.vue'],
                        resolve),
                    meta: {
                        title: '用户管理'
                    }
                },
                {
                    path: '/bebetterme',
                    component: resolve => require(['../components/pages/bebetterme/BeBetterMe.vue'],
                        resolve),
                    meta: {
                        title: 'BeBetterMe'
                    }
                },
                {
                    path: '/searchsource',
                    component: resolve => require(['../components/pages/searchsource/SearchSource.vue'],
                        resolve),
                    meta: {
                        title: '搜索报文'
                    }
                },
                {
                    path: '/intervention1',
                    component: resolve => require(['../components/pages/intervention/Intervention1.vue'],
                        resolve),
                    meta: {
                        title: 'Intervention1'
                    }
                },
                {
                    path: '/intervention2',
                    component: resolve => require(['../components/pages/intervention/Intervention2.vue'],
                        resolve),
                    meta: {
                        title: 'Intervention2'
                    }
                }

            ]
        },
        {
            path: '/404',
            component: resolve => require(['../components/pages/404.vue'], resolve)
        },
        {
            path: '/403',
            component: resolve => require(['../components/pages/403.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
