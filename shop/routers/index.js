/**
 *@ 文件介绍:
 */
const Router = require('koa-router')
const {showUserGoods} = require("./controller");
const {crateUserGoods} = require("./controller");
const {showOneGoods} = require("./controller");
const {showGoods} = require("./controller");
const {Users} = require("../model/users");
const {showUser} = require("./controller");

const router = new Router()






router.get('/',async (ctx)=>{
    ctx.state = {
        title:"家具商城",
        userinfo : ctx.session.user
    }
    const {count,rows} = await showGoods()
    await ctx.render('index',{goods:rows})
})


router.get('/shop-list',async (ctx)=>{
    ctx.state = {
        navName:"商品列表",
        title:'商品列表',
        userinfo : ctx.session.user
    }
    const t = ctx.request.query || {}
    const serial = t.serial || 'created_at'
    const page = t.page || 1
    console.log(t,serial)
    const {count ,rows} = await showGoods(serial,page,8)
    if(serial === 'created_at' && page===1){
        // 获取商品， 按条件排序 ,初始页面全部加载
        await ctx.render('shop-list',{goods:rows,t,total:count})
    }else {
        // 筛选，下一页， 数据接口加载
        await ctx.render('include/good-list',{goods:rows,t,total:count})
    }

})




router.get('/about',async (ctx)=>{
    await ctx.render('shop-list',{title:'商品列表'})
})


router.get('/shop-details/:id',async (ctx)=>{
    ctx.state={
        navName:'商品详情',
        title:'商品详情',
        userinfo : ctx.session.user
    }
    console.log(ctx.params)
    const id = ctx.params.id
    const data = await  showOneGoods(id)

    await ctx.render('shopdatail',{goods:data})
})


/** 添加购物车*/
router.post('/cart',async (ctx)=>{
    const id = ctx.request.body.id
    const user = ctx.session.user
    if(id){
        try {
            console.log(id,user)
            await crateUserGoods(user,id)
            ctx.body = {
                msg:'添加购物车成功',
            }
        }catch (e) {
            ctx.body={
                msg: e
            }
        }

    }else {
        ctx.body={
            msg: '请正确输入商品号'
        }
    }
})

router.get('/cart',async ctx=>{
    ctx.state={
        navName:'购物车',
        title:'购物车',
        userinfo : ctx.session.user
    }
    if(ctx.session.user){
        const goods = await showUserGoods(ctx.session.user)
        await ctx.render('shop-cart',{goods})
        return
    }
    await ctx.render('shop-cart')
})



router.get('/login',async (ctx)=>{
    const navName = '登入'
    await ctx.render('login',{title:'商品列表',navName})
})

router.post('/login',async (ctx)=>{
    const {username,password} = ctx.request.body
    const dbUser =await showUser(username)
    if(dbUser){
        if(dbUser.password === password){
            ctx.session.user = username
            ctx.response.redirect('/') //重定向
        }else {
            ctx.response.redirect('/login',{msg:'账号密码错误'}) //重定向
        }
    }else {
        ctx.response.redirect('/login',{msg:'账号密码错误'}) //重定向
    }

})

/** 注册*/
router.post('/register',async (ctx)=>{
    ctx.state={
        navName:'注册',
        title:'家具商城',
        userinfo : ctx.session.user
    }
    const {username,password} = ctx.request.body
    if(username && password ){
        const dbUser =await showUser(username)
        if(dbUser){
            //存在
            ctx.response.redirect('/login',{msg:'账号以存在'}) //重定向
        }else {
            // 创建
            const user = new Users({userId:username, password})
            await user.save()
            //登入，跳转首页
            ctx.session.user = username
            ctx.response.redirect('/') //重定向
        }

    }else {
        ctx.response.redirect('/login',{msg:'账号密码不能为空'}) //重定向
    }
})


router.get('/logout',async (ctx)=>{
    ctx.session= null
    ctx.response.redirect('/') //重定向
})
module.exports = router
