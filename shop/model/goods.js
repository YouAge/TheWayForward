/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */


const {Users} = require("./users");
const {Sequelize, Model} = require('sequelize')
const {db} = require('../utils/db')


class Goods extends Model {}

Goods.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,  // 主键
        autoIncrement: true // 自增长
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        comment: '商品名称'
    },
    image:{
        type:Sequelize.STRING,
        allowNull: true,
        comment: '商品图片地址'
    },
    image2:{
        type:Sequelize.STRING,
        allowNull: true,
        comment: '商品图片地址2'
    },
    text:{
        type: Sequelize.STRING,
        allowNull: true,
        comment: '商品介绍'
    },
    price:{
        type: Sequelize.STRING,
        comment:'商品原价格'
    },
    discountPrice:{
        type:Sequelize.STRING,
        comment:'商品打折价格'
    },
    sales:{
        type: Sequelize.INTEGER,
        comment:'销量'
    },
    new:{
        type: Sequelize.INTEGER,
        comment:'新物品权重'
    }

}, {
    sequelize: db,
    modelName: 'goods',
    tableName: 'goods'
})



/** 购物车， 购买*/
class UserGoods extends Model {}
UserGoods.init({
    // id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true, // 主键
    //     autoIncrement: true // 自增长
    // },
}, {

    sequelize: db,
    modelName: 'user_goods',
    tableName: 'user_goods'
})
Users.belongsToMany(Goods, {
    through: {
        model: UserGoods,
        unique: false
    },
    foreignKey: 'userId', // 自己
    constraints: false
})

Goods.belongsToMany(Users, {
    through: {
        model: UserGoods,
        unique: false
    },
    foreignKey: 'goods_id',
    constraints: false
})



module.exports = {
    Goods,
    UserGoods
}
