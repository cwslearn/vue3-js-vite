# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### husky pre-commit

```
  husky pre-commit
  1.安装代码校验依赖
  npm i lint-staged husky -D
  npm set-script prepare "husky install" # 在package.json中添加脚本
  npm run prepare # 初始化husky,将 git hooks 钩子交由,husky执行
  复制代码

  初始化 husky, 会在根目录创建 .husky 文件夹
  npx husky add .husky/pre-commit "npx lint-staged"
  复制代码

  pre-commit 执行 npx lint-staged 指令
  根目录创建 .lintstagedrc.json 文件控制检查和操作方式
  {
      "*.{js,jsx,ts,tsx}": ["prettier --write .", "eslint  --fix"],
      "*.md": ["prettier --write"]
  }

  链接：https://juejin.cn/post/7038143752036155428

  package.json
  {
    "husky": {
        "hooks": {
          "pre-commit": "npm run lint-staged"
        }
      },
      "lint-staged": {
        "*.{js,vue}": [
          "prettier --write",
          "yarn lint"
        ]
      }
  }
```
