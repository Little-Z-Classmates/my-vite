1. npm create vite@latest
2. npm i
3. vite.config.ts: 配置服务器端口: server
4. webstorm 引入 代码风格管理工具 Prettier,
   在设置中输入快捷键(format): Prettier,
   在项目根目录创建: .prettierrc 文件
```
   semi： 是否使用分号，默认true，使用分号
   singleQuote： 是否使用单引号，默认为false，不使用单引号，使用双引号
   bracketSpacing： 字面量对象括号中的空格，默认true
       true - Example: { foo: bar }.
       false - Example: {foo: bar}.
   trailingComma： 末尾逗号
       none 末尾没有逗号
       es5 es5有效的地方保留
       all 在可能的地方都加上逗号
       arrowParens： 箭头函数参数括号 默认avoid
       avoid 能省略括号的时候就省略 例如x => x
       always 总是有括号
```
5. 配置eslint: 
```
  npm install -D eslint eslint-plugin-vue
  npm init @eslint/config ( 初始化 eslint )
  npm i -D vite-plugin-eslint
  配置 vite.config.js 文件
  import eslintPlugin from 'vite-plugin-eslint'
```
6. vitejs/plugin-legacy: vite 的runtime是基于 native ESM 的，所以如果开发者需要打包代码在 传统浏览器 or 兼容性差的浏览器版本，就需要用到此插件
```
   npm i -D @vitejs/plugin-legacy
```
7. 访问环境变量: import.meta.env
```
import.meta.env.MODE: 当前构建模式，可以是"development"、"production"或"test"之一。
mport.meta.env.BASE_URL: 当前项目的基准URL。
import.meta.env.PROD: 一个布尔值，表示当前是否处于生产模式。
import.meta.env.DEV: 一个布尔值，表示当前是否处于开发模式。
```
8. 配置环境变量: 跟目录下新建: .env, .env.development 等等
```
package.json中: 
  "dev": "vite" --->  "dev": "vite --mode development" 
```
9. 搭载: element-plus
```
  npm install element-plus --save
```
