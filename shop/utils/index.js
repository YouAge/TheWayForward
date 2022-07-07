// const {Teacher} = require("../modes/teacher");
// const {StudentCourse} = require("../modes/course");
// const {Course} = require("../modes/course");
// const {Student} = require("../modes/students");
// const {College} = require("../modes/college");


const {Users} = require("../model/users");
const {UserGoods} = require("../model/goods");
const {Goods} = require("../model/goods");

async function showScore(userId){
  const data = await Student.findOne({
    where: {
      userId,
      deleted_at: null
    },
    include: [
      {
        model: College,
        as: 'college'
      },
      {
        model: Course,
        as: 'courses',
        include: [
          {
            model: Teacher,
            as: 'teacher' // 别名
          },
          {
            model: Student
          }
        ]
      }
    ]
  })
console.log(data)
}


async function findUser (userId) {
  const data = await Teacher.findOne({
    where: {
      userId,
      deleted_at: null
    },
    include: [{
      model: College,
      as: 'college',
      attributes:['id','name']
    },{
      model: Course,
      // as: 'Course'
    }
    ]
  })
  console.log(data.dataValues)
}
// findUser('0003')

let t ={
  a:'1',b:2,f:undefined
}
if(Object.values(t).some(item=>!item)){
  console.log('121')
}







function api(url){
  return new Promise((r,j)=>{
    fetch(url)
      .then(Response => Response.json())
      .then(JSON => {
        r(JSON)
      }).catch(e =>j(e) )
  })
}







let goods = [
  {title:'商品1',price:'',discount_price:'',new:2,
    image:'assets/images/product-image/1.jpg',image2:'assets/images/product-image/2.jpg'},


]



async function crateGoods() {

 // goods.forEach( async item=>{
 //
 //    const data = new Goods(item)
 //    await user.save()
 // })

  for (let i =0;i<16;){
    let item =   {title:'商品1',price:'',discount_price:'',new:2,
        image:'assets/images/product-image/1.jpg',image2:'assets/images/product-image/2.jpg'}
    item.title = `商品${i+17}`
    item.image = `assets/images/product-image/${i+1}.jpg`
    item.image2 = `assets/images/product-image/${i+2}.jpg`
    item.new = Math.round(Math.random()*100)
    item.sales = parseInt(Math.random()*(10000+1),0) // 销量
    item.price = (Math.random()*1000).toFixed(2)
    i=i+2
       const data = new Goods(item)
       await data.save()
  }

}



async function top() {
  const data =  await Goods.findAll({
    order: [ ['id','DESC']]
  })
  console.log(data)
}

const crateUserGoods =async (user_id,goods_id)=>{
  return  await UserGoods.create({
    userId:user_id,goods_id
  })

}
crateUserGoods('123456','2')
const showUserGoods = async (user)=>{
  const data = await Users.findOne({
    where: {
      userId:user,
      deleted_at: null
    },
    include:{model:Goods,}
  })
  console.log(data)
}

