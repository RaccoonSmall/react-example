import React from 'react'
import {Redirect} from 'react-router-dom'
import Loadable from 'react-loadable'


/**
 * 组件异步加载装置 => react-loadables
 * @param {String} filename 
 */
const loadables = (filename) => Loadable({
    loader:() => import(`@/view/${filename}`),
    loading:() => <div></div>
});



/**
 * 根路由集合
 */
const rootRouters = [
    {
        //根路由匹配
        path:'/',
        exact:true,
        component:() => <Redirect to='/react-example'/>
    },
    {
        // 首页
        path:'/react-example',
        component:Loadable({
            loader:() => import('@/components/list/list'),
            loading:() => ('')
        })
    },
    {
        // 404 匹配
        path:'*',
        component:loadables('404')
    }
];

/**
 *  嵌套路由集合
 */
const routers = [
    {
        // 组件中状态管理 => state 属性的使用
        path:'/reactState',
        component:loadables('reactState')
    },
    {
        // 数据传递，Props 属性
        path:'/reactProps',
        component:loadables('reactProps')
    },
    {
        // React的事件处理
        path:'/reactEvent',
        component:loadables('reactEvent')
    },
    {
        //React 条件渲染
        path:'/reactRendering',
        component:loadables('reactRendering')
    },
    {
        // React 列表循环
        path:'/reactList',
        component:loadables('reactList')
    },
    {
        // React 生命周期
        path:'/componentLife',
        component:loadables('componentLife')
    },
    {
        // React 中如何执行Ajax 异步请求
        path:'/reactAjax',
        component:loadables('reactAjax')
    },
    {
        // React Form 表单的处理
        path:'/reactForm',
        component:loadables('reactForm')
    },
    {
        // 父子，子父组件之间的通讯
        path:'/components',
        component:loadables('componentMes')
    },
    {
        // 获取组件对象
        path:'/refs',
        component:loadables('getElement')
    },
    {
        // React Context 属性的介绍和使用
        path:'/context',
        component:loadables('reactContext')
    },
    {
        path:'/lagacyContext',
        component:loadables('legacyContext')
    }

];


export {
    rootRouters,
    routers,
}