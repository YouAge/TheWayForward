

const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('koa2-cors')

const router = require('./routers')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')
const { Resolve } = require('./utils/resolve')

const session = require('koa-session')

// const views = require('koa-views')
const statics = require('koa-static-router')
const path = require("path");
const render = require('koa-art-template')
const resolve = new Resolve()
const app = new Koa()



// app.use(statics(__dirname +'/static',)) // 静态资源路径，static下使用，
// app.use(views('views',{  // 使用模板语言
//     map:{html:'art'},
//     // extension:'art'
// }))
render(app,{
    root:path.join(__dirname,'views'), //视图的位置
    extname:'.html', //后缀名
    // debug: process.env.NODE_ENV !== 'production' ////是否开启调试模式
    // debug: true
})
// // 配置服务端模板渲染引擎中间件
// app.use(views(path.join(__dirname, './views'), {
//     extension: 'ejs'
// }))

/** 多层嵌套路由， 今天资源问题*/
app.use(statics([
        {
            dir:'static',
           router: '/'
        },{
            dir: 'static', //静态资源
        router: 'shop-details' // 路由路径
        }
]))


app.keys = ['this is my secret and dsfuck you all'];
app.use(session({
    key:'xiao',
    maxAge:70000, // ms 秒
    autoCommit: true, /** 自动提交到响应头。(默认是 true) */
    overwrite: true, /** 是否允许重写 。(默认是 true) */
    httpOnly: true, /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */
    signed: true, /** 是否签名。(默认是 true) */
    rolling: true, /** 是否每次响应时刷新Session的有效期。(默认是 false) */
    renew: false, /** 是否在Session快过期时刷新Session的有效期。(默认是 false) */
},app))

//写一个中间件来配置公共信息, 模板中全局变量，直接使用userinfo， 判断当前登入的用户
app.use(async (ctx,next) =>{
    ctx.state.user =  ctx.session.user
    console.log(ctx.state)
    await next()
})

app.use(cors())
/***
 * 中间件
 *
 */
app.use(async (ctx,next)=>{
    try {
        await next()
    } catch (e) {
        ctx.body = resolve.error(e)
    }
})


// app.use(async (ctx,next)=>{
//     const path = ctx.request.path
//     if([
//         '/login'
//     ].includes(path)){
//         await next()
//     }else {
//         const token = ctx.request.header.shoptoken || ''
//         try {
//             jwt.verify(token, secret)
//             await next()
//         }catch (e) {
//             ctx.body = resolve.error({},'身份严重错误',402)
//         }
//     }
// })




/**
 * @ post参数解析 文件传输限制
 *
 */
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 50000 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }
}));


/***
 *
 * @ 路由注册
 */
app.use(router.routes()).use(router.allowedMethods())





// 监听端口
app.listen({
    host:'0.0.0.0',
    port:6452,
}, () => {
    console.log("服务器已启动，http://127.0.0.1:6452");
})
