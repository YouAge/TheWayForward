class Resolve{

  success(data={},msg='success',code=200,errorCode=0){
      return {
          data,
          msg,
          code,
          errorCode
      }
  }

  error(data={},msg='error',code=400,errorCode=0){
      return {
          data,
          msg,
          code,
          errorCode
      }
  }



}

module.exports= {
  Resolve
}
