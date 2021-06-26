(function () {
  console.log('process', process.env)
  let ENV_VAR
  switch (process.env.VUE_APP_PLATFORM) {
    case 'h5':
      ENV_VAR = require('./h5/env.' + process.env.NODE_ENV + '.js')
      break
    default:
      ENV_VAR = require('./default/env.' + process.env.NODE_ENV + '.js')
      break
  }
  if (ENV_VAR) {
    process.uniEnv = Object.create({})
    for (const key in ENV_VAR) {
      process.uniEnv[key] = ENV_VAR[key]
    }
  }
})()
