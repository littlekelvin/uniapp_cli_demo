const path = require('path')
module.exports = {
  globalTeardown: '@dcloudio/uni-automator/dist/teardown.js',
  testEnvironment: '@dcloudio/uni-automator/dist/environment.js',
  testEnvironmentOptions: {
    compile: true,
    'mp-weixin': {
      port: 9420, // 默认 9420
      account: '', // 测试账号
      args: '', // 指定开发者工具参数
      cwd: '', // 指定开发者工具工作目录
      launch: true, // 是否主动拉起开发者工具
      teardown: 'disconnect', // 可选值 "disconnect"|"close" 运行测试结束后，断开开发者工具或关闭开发者工具
      remote: false, // 是否真机自动化测试
      executablePath: 'C:/softwareinstalled/wechatTools/微信web开发者工具/cli.bat' // 开发者工具cli路径，默认会自动查找,  windows: C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat", mac: /Applications/wechatwebdevtools.app/Contents/MacOS/cli
    }
  },
  testTimeout: 15000,
  reporters: ['default'],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'json'],
  rootDir: path.resolve(__dirname, '../../'),
  testMatch: ['<rootDir>/test/unit/specs/**/*spec.js'], // 测试文件目录
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '<rootDir>/test/unit/coverage'
}
