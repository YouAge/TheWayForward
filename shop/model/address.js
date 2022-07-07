/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */
const {Users} = require("./users");
const {Sequelize, Model} = require('sequelize')
const {db} = require('../utils/db')

class Address extends Model {
}

Address.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,  // 主键
        autoIncrement: true // 自增长
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
        comment: '收件人'
    },
    phone:{
        type:Sequelize.STRING(11),
        allowNull: true,
        comment: '手机'
    },
    text:{
        type: Sequelize.STRING,
        allowNull: true,
        comment: '地址'
    },
    defa:{
        type: Sequelize.BOOLEAN,
        comment:'默认地址'
    }

}, {
    sequelize: db,
    modelName: 'address',
    tableName: 'address'
})


Address.belongsTo(Users,{
    foreignKey:'user_id',
    targetKey:'userId',
    constraints: false
})
Users.hasMany(Address, {
    foreignKey: 'user_id', // 外键
    sourceKey:'userId',
    constraints: false
});


module.exports = {
    Address
}
