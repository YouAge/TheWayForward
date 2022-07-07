/**
 *@ github： https://github.com/YouAge
 *@ 文件介绍:
 */

const {Sequelize, Model} = require('sequelize')
const {db} = require('../utils/db')

class Users extends Model {
}

Users.init({
    // id: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,  // 主键
    //     autoIncrement: true // 自增长
    // },
    userId: {
        type: Sequelize.STRING(64),
        field: 'user_id',
        allowNull: false,
        comment: "登入账号",
        primaryKey: true,  // 主键
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '密码'
    }

}, {
    sequelize: db,
    modelName: 'users',
    tableName: 'users'
})


module.exports = {
    Users
}
