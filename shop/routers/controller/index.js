/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


const {UserGoods} = require("../../model/goods");
const {Sequelize} = require("sequelize");
const {Users} = require("../../model/users");
const {Goods} = require("../../model/goods");
const {Address} = require("../../model/address");
/** 获取商品首页, 最新的商品*/
const showGoods = async (value='created_at',pages=1,pageSize=6)=>{

    const order = value ==='aprice'?['price','DESC']:value
    console.log(order)
  return  await Goods.findAndCountAll({
      order: [order],
      limit:  pageSize, // 一页多少条
      offset: (pages - 1) * pageSize // 跳过
    })
}


const showOneGoods = async (id)=>{
    return await Goods.findOne({
        where:{
            id
        }
    })
}

const showUser = async (username)=>{
    return await Users.findOne({
        where: {
            userId:username,
            deleted_at: null
        }
    })
}


const showUserGoods = async (user)=>{
    return await Users.findOne({
        where: {
            userId:user,
            deleted_at: null
        },
        include:{model:Goods,}
    })
}

const crateUserGoods =async (user_id,goods_id)=>{
   return  await UserGoods.create({
       userId:user_id,goods_id
    })

}



module.exports ={
    showGoods,
    showUser,
    showOneGoods,
    crateUserGoods,
    showUserGoods
}
