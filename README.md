# 前言
```
本demo是本人练习vue所写
注：此项目纯属个人瞎搞
```
## 项目运行

### 1. 安装依赖
```
npm install
```

### 2. 编译并启动服务
```
npm run serve
```

## 打包
```
npm run build
```

### 技术栈
```
vue2 + vuex + vue-router + webpack + ES6/7 + sass + flex + axios
```

###项目布局
```
├──public
│   ├──api                                   // 模拟数据
│   │   ├──city.json                         // 城市数据
│   │   ├──cn.json                           // 国内数据
│   │   ├──details.json                      // 详情页数据
│   │   └──index.json                        // 首页数据
│   ├──img                                   // 公共图片
│   ├──favicon.ico                           // 图标
│   └──index.html                            // 入口html文件
├──src                                       // 源码目录
│   ├──assets                                // 公共文件
│   │   ├──css                               // 公共样式文件
│   │   ├──font                              // 公共字体文件
│   │   ├──img                               // 公共图片文件
│   │   ├──js                                // 公共js文件
│   │   └──userimg                           // user页图片
│   ├──components                            // 公共组件
│   │   ├──alertTip.vue                      // 弹窗组件
│   │   ├──footer.vue                        // 底部公共组件
│   │   ├──header.vue                        // 头部公共组件
│   │   ├──loading.vue                       // 加载动画组件
│   │   └──top.vue                           // 置顶组件
│   ├──pages
│   │   ├──address
│   │   │   └──address.vue                   //收货地址页
│   │   ├──batches
│   │   │   └──batches.vue                   //购买页
│   │   ├──book
│   │   │   ├──children
│   │   │   │   └──index.vue                 // 确认订单页
│   │   │   └──book.vue
│   │   ├──channel
│   │   │   ├──children                      // 九宫格子组件
│   │   │   └──channel.vue                   // 九宫格详情页
│   │   ├──city
│   │   │   └──city.vue                      // 城市页
│   │   ├──coupon
│   │   │   └──coupon.vue                    // 优惠卷页
│   │   ├──details
│   │   │   ├──children                      // 详情页子组件
│   │   │   └──details.vue                   // 景点详情页
│   │   ├──home
│   │   │   ├──children                      // 首页子组件
│   │   │   └──home.vue                      // 首页
│   │   ├──login
│   │   │   └──login.vue                     // 登录页
│   │   ├──myorders
│   │   │   └──myorders.vue                  // 我的订单页
│   │   ├──order
│   │   │   ├──children                      // 订单页子组件
│   │   │   └──order.vue                     // 订单页
│   │   ├──passenger
│   │   │   └──passenger.vue                 // 常用出行人页
│   │   ├──search
│   │   │   ├──children                      // 搜索页子组件
│   │   │   └──search.vue                    // 搜索页
│   │   ├──shop
│   │   │   └──shop.vue                      // 购物车页
│   │   ├──user
│   │   │   ├──children                      // 用户页子组件
│   │   │   └──user.vue                      // 用户页
│   │   ├──visas
│   │   │   └──visas.vue                     // 签证订单列表页
│   ├──App.vue                               // 页面入口文件
│   ├──main.js                               // 程序入口文件，加载各种公共组件
│   ├──router.js                             // 路由配置
│   └──store.js                              // vuex的状态管理
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
