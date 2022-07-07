/**
 *@ 文件介绍: 异常定义
 */

class HttpException extends Error {
  constructor (msg = '服务器异常', errorCode = 5000, code = 500) {
    super()
    this.errorCode = errorCode
    this.code = code
    this.msg = msg
  }
}

class ParameterException extends HttpException {
  constructor (msg, errorCode) {
    super()
    this.code = 400
    this.msg = msg || '参数错误'
    this.errorCode = errorCode || 4000
  }
}

class AuthFailed extends HttpException {
  constructor (msg, errorCode) {
    super()
    this.code = 401
    this.msg = msg || '授权失败'
    this.errorCode = errorCode || 10004
  }
}

class SequelizeUniqueConstraintError extends HttpException {
  constructor (msg, errorCode) {
    super()
    this.code = 403
    this.msg = msg || '创建数据重复'
    this.errorCode = errorCode || 10004
  }
}

module.exports = {
  HttpException,
  ParameterException,
  AuthFailed,
  SequelizeUniqueConstraintError
}
