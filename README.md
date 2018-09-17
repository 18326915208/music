# musics

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
<!-- vue开发 去除浏览器的各种 Eslint 报错 
进入项目的 build / webpack.base.conf.js
找到 Eslint，并注释掉-->
module:{
    rules:[
        //...(config.dev.useEslint ? [createLintingRule()] : []),
    ]
}
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
