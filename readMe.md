## cli-hello

## Project setup
- install dependency
```
npm install
```
- setup eslit and prettier
webstorm -> settings -> search eslint -> 勾选 Auto Eslint Configuration 或者manual然后选择对应eslint的node_modules和配置即可 <br>
webstorm -> settings -> search prettier -> 选择 node, 然后选择prettier的node_modules即可 <br>
配置好之后就可以使用 ctrl+alt+shift+p 快捷键来格式化代码了 

### Compiles and hot-reloads for development
- run dev env for weixin platform
```
npm run dev
npm run dev:mp-weixin
```
- run dev env for dingtalk platform
```
npm run dev:custom mp-dingtalk
```

### Compiles and minifies for production
- run prod env for weixin platform
```
npm run build
npm run build:mp-weixin
```
- run prod env for dingtalk platform
```
npm run build:custom mp-dingtalk
```

### Test
```
npm install puppeteer --save-dev
npm run test
```

### 开发者工具创建项目打开
运行或者发行的minifies文件在 /dist/dev  /dist/build下，使用对应开发者工具打开新建项目即可

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
