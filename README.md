# 官方文档

官方文档请查看 [https://github.com/ykfe/ssr](https://github.com/ykfe/ssr)

## getting start

```bash
$ npm start # 本地开发模式运行，单进程 支持 前端 HMR 前端静态资源走本地 webpack 服务
$ npm run prod # 模拟生产环境运行，多进程，前端资源走静态目录
$ npm run stop # 生产环境停止服务
```

目录结构
```angular2html
├── build # 默认作为服务端静态资源目录，负责存放web目录构建产物或者图片资源等静态文件
│   ├── client # 存放前端静态资源文件
│   └── server # 存放 external 后的服务端 bundle，
├── config.js # 定义应用的配置
├── config.prod.js # (可选) 若存在则视为生产环境的应用配置
├── f.yml # (可选)，仅在 Serverless 场景下使用，若调用 ssr deploy 检测到无此文件会自动创建
├── package.json
├── src # 存放服务端 Node.js 相关代码
│   └── index.ts
├── tsconfig.json # 服务端 Node.js 编译配置文件
├── web # 存放前端组件相关代码
│   ├── components # 存放公共组件
│   │   └── header # 公共头部
│   │   │   ├── index.less
│   │   │   └── index.tsx
│   │   └── layout # 页面 html 布局
│   │       └── index.tsx # 页面 html 布局，仅在服务端被渲染
│   │       └── App.tsx # 页面具体的组件内容，用于初始化公共配置
│   │       └── fetch.ts # layout 级别的 fetch，用于获取所有页面的公共数据，将会在每一个页面级别的fetch 调用之前调用
│   ├── pages # pages目录下的文件夹会映射为前端路由表，存放页面级别的组件
│   │   ├── index # index文件夹映射为根路由 /index => /
│   │   │   ├── fetch.ts # 定义fetch文件用来统一服务端/客户端获取数据的方式，通过 __isBrowser__ 变量区分环境，会在首页服务端渲染以及前端路由切换时被调用
│   │   │   ├── index.less
│   │   │   └── render.tsx # 定义render文件用来定义页面渲染逻辑
│   │   └── detail
│   │   │   ├── fetch.ts
│   │   │   ├── index.less
│   │   │   └── render$id.tsx # 映射为 /detail/:id
│   │   │   └── user
│   │   │        ├── fetch.ts
│   │   │        └── render$id.tsx # 多级路由按照规则映射为 /detail/user/:id
│   │   │        └── render$user$id.tsx # 多参数路由映射为 /detail/user/:user/:id
│   │   ├── bar
│   │   │   ├── fetch.ts
│   │   │   └── render.tsx
│   │   │   ├── fetch$id.ts
│   │   │   └── render$id.tsx # 当存在多个 render 类型的文件时，每个 render 文件对应与其同名的 fetch 文件，例如 render$id 对应 fetch$id
│   ├── tsconfig.json # web 目录下的 tsconfig 仅用于编辑器ts语法检测


```
