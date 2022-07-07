/**
 *@ 文件介绍: sequelize  数据库 交互
 */

 const Sequelize = require('sequelize')

 const  {dbName,host,port,password,user}  = require('../config').database


 const db = new Sequelize(dbName,user,password,{
     dialect: 'mysql', //'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';
     host,
     port,
     logging: false, // 是否输出log
     timezone: '+08:00', // 中国区时间相差八小时， 所有加上
     define:{
         timestamp:true,
         paranoid:true,
         createdAt:'created_at',
         updatedAt: 'updated_at',
         deletedAt: 'deleted_at',
         // 把驼峰命名转换为下划线
         underscored: true,
         scopes: {
             bh: {
                 attributes: {
                     exclude: ['password', 'updated_at', 'deleted_at', 'created_at']
                 }
             },
             iv: {
                 attributes: {
                     exclude: ['content', 'password', 'updated_at', 'deleted_at']
                 }
             }
         }
     }
 })

 //创建模型
 db.sync({
     force:false //
 })
 module.exports = {
     db
 }
