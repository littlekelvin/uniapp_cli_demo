(function () {
  console.log('process', process.env)
  let ENV_VAR
  //#ifdef H5
  ENV_VAR = require('./h5/env.' + process.env.NODE_ENV + '.js')
  //#endif
  //#ifndef H5
  ENV_VAR = require('./default/env.' + process.env.NODE_ENV + '.js')
  //#endif
  if (ENV_VAR) {
    process.uniEnv = Object.create({})
    for (const key in ENV_VAR) {
      process.uniEnv[key] = ENV_VAR[key]
    }
  }
})()
