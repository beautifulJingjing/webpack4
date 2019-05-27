import Vue from 'vue'


Vue.use(Router)

export default new Router({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: ForgotPassword,
        },
        {
            path: '/frame',
            name: 'frame',
            component: Frame,
            redirect: { name: 'flowanalysis' },
            children: [
                {
                    name: 'dataindex',
                    path: 'dataimanage',
                    meta: {
                        title: '数据中心',
                        is_enter: 0
                    },
                    component: DataIndex,
                    children: [
                        {
                            path: 'flowanalysis',
                            name: 'flowanalysis',
                            meta: {
                                title: '客流分析',
                            },
                            component: DataFlow
                        },
                        {
                            path: 'translateanalysis',
                            name: 'translateanalysis',
                            meta: {
                                title: '商品转化分析',
                            },
                            component: DatatTranslate
                        },
                    ]
                },
                {
                    path: 'screenmanage',
                    meta: {
                        title: '屏幕显示管理'
                    },
                    name: 'screenmanage',
                    component: ScreenIndex
                },
                {
                    path: 'addscreen',
                    name: 'addscreen',
                    meta: {
                        title: '新增',
                        matched: [
                            { name: 'screenmanage', meta: {title: '屏幕显示管理' }, parent: true},
                        ]
                    },
                    component: ScreenAdd
                },
                {

                    path: 'screendetail',
                    name: 'screendetail',
                    meta: {
                        title: '显示内容详情',
                        matched: [
                            { name: 'screenmanage', meta: {title: '屏幕显示管理' }, parent: true},
                        ]
                    },
                    component: ScreenDetail
                },
                /*{
                    path: 'shelfgoods',
                    name: 'shelfgoods',
                    meta: {
                        title: '货架商品概览',
                        matched: [
                            { meta: { title: '商品管理'}, parent: true},
                        ]
                    },
                    component: GoodsShelf
                },
                {
                    path: 'addgoods',
                    name: 'addgoods',
                    meta: {
                        title: '新增',
                        matched: [
                            { meta: { title: '商品管理'}, parent: true},
                            { name: 'goodsinfo', meta: {title: '商品资料库' }, parent: true},
                        ]
                    },
                    component: GoodsAdd
                },
                {
                    path: 'goodsinfo',
                    name: 'goodsinfo',
                    meta: {
                        title: '商品资料库',
                        matched: [
                            { meta: { title: '商品管理'}, parent: true},
                        ]
                    },
                    component: GoodsInfo
                },
                {
                    path: 'goodsdetail',
                    name: 'goodsdetail',
                    meta: {
                        title: '商品详情页',
                        matched: [
                            { meta: { title: '商品管理'}, root: true},
                            { name: 'goodsinfo', meta: {title: '商品资料库' }, parent: true},
                        ]
                    },
                    component: GoodsDetail
                },*/
                {
                    name: 'goodsindex',
                    path: 'goodsmanage',
                    meta: {
                        title: '商品管理',
                        is_enter: 0
                    },
                    component: GoodsIndex,
                    children: [
                        {
                            path: 'shelfgoods',
                            name: 'shelfgoods',
                            meta: {
                                title: '货架商品概览',
                                matched: [
                                    { meta: { title: '商品管理'}, parent: true},
                                ]
                            },
                            component: GoodsShelf
                        },
                        {
                            path: 'addgoods',
                            name: 'addgoods',
                            meta: {
                                title: '新增',
                                matched: [
                                    { meta: { title: '商品管理'}, parent: true},
                                    { name: 'goodsinfo', meta: {title: '商品资料库' }, parent: true},
                                ]
                            },
                            component: GoodsAdd
                        },
                        {
                            path: 'goodsinfo',
                            name: 'goodsinfo',
                            meta: {
                                title: '商品资料库'
                            },
                            component: GoodsInfo
                        },
                        {
                            path: 'goodsdetail',
                            name: 'goodsdetail',
                            meta: {
                                title: '商品详情页',
                                matched: [
                                    { meta: { title: '商品管理'}, root: true},
                                    { name: 'goodsinfo', meta: {title: '商品资料库' }, parent: true},
                                ]
                            },
                            component: GoodsDetail
                        },
                    ]
                },
                {
                    path: 'customermanage',
                    meta: {
                        title: '顾客管理'
                    },
                    name: 'customermanage',
                    component: CustomerIndex,
                },
                {
                    path: 'storesmanage',
                    meta: {
                        title: '门店管理'
                    },
                    name: 'storesmanage',
                    component: StoresIndex
                },
                {
                    path: 'addstores',
                    name: 'addstores',
                    meta: {
                        title: '新增',
                        matched: [
                            { name: 'storesmanage', meta: { title: '门店管理'}, parent: true},
                        ]
                    },
                    component: StoresAdd
                },
                /*{
                    path: 'deviceworking',
                    name: 'deviceworking',
                    meta: {
                        title: '设备运行情况',
                        matched: [
                            { meta: {title: '设备管理'}, parent: true}
                        ]
                    },
                    component: DeviceWroking
                },
                {
                    path: 'devicemaintenance',
                    name: 'devicemaintenance',
                    meta: {
                        title: '设备维护',
                        matched: [
                            { meta: {title: '设备管理'}, parent: true}
                        ]
                    },
                    component: DeviceMaintenance
                },
                {
                    path: 'adddevice',
                    name: 'adddevice',
                    meta: {
                        title: '新增',
                        matched: [
                            {  meta: { title: '设备管理'}, root: true},
                            { name: 'devicemaintenance', meta: {title: '设备维护' }, parent: true},
                        ]
                    },
                    component: DeviceAdd
                },*/
                {
                    path: 'addsensor',
                    name: 'addsensor',
                    meta: {
                        title: '新增',
                        matched: [
                            { name: 'sensoremanage', meta: { title: '传感器管理'}, parent: true},
                        ]
                    },
                    component: DensorAdd
                },
                {
                    name: 'deviceindex',
                    path: 'devicemanage',
                    meta: {
                        title: '设备管理',
                        is_enter: 0
                    },
                    component: DeviceIndex,
                    children: [
                        {
                            path: 'deviceworking',
                            name: 'deviceworking',
                            meta: {
                                title: '设备运行情况'
                            },
                            component: DeviceWroking
                        },
                        {
                            path: 'devicemaintenance',
                            name: 'devicemaintenance',
                            meta: {
                                title: '设备维护'
                            },
                            component: DeviceMaintenance
                        },
                        {
                            path: 'adddevice',
                            name: 'adddevice',
                            meta: {
                                title: '新增',
                                matched: [
                                    { name: 'devicemanage', meta: { title: '设备管理'}, root: true},
                                    { name: 'devicemaintenance', meta: {title: '设备维护' }, parent: true},
                                ]
                            },
                            component: DeviceAdd
                        }
                    ]
                },
                {
                    path: 'sensoremanage',
                    meta: {
                        title: '传感器管理'
                    },
                    name: 'sensoremanage',
                    component: DensorIndex,
                }
            ]
        },
        {
            path: '*',
            component: NotFound,
        },
	]
})
