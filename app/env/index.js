(function () {
  console.log('process', process.env)
  const ENV_VAR = require('./env.' + process.env.NODE_ENV + '.js')
  if (ENV_VAR) {
    process.uniEnv = Object.create({})
    for (const key in ENV_VAR) {
      process.uniEnv[key] = ENV_VAR[key]
    }
  }
})()
