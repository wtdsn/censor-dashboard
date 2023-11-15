# 开发记录

## 初始化项目
使用 Vite 初始化项目，项目使用的框架是 React + TypeScript + Vite

项目 node 使用 nvs 进行管理，如果有使用 nvs , 输入 nvs use 即可设置到对应 node 版本。
如果没有请使用 18.14.0 的 node !

包根据使用 pnpm ，项目使用的 pnpm 的版本是 8.6.5 。如果出现问题可尝试切换为 8.6.5

### less 使用
安装 Less  即可使用 less 。即 less 文件默认会被 vite 使用 less  处理
对于 less 的配置 ，参考 https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
和 https://lesscss.org/usage/#less-options

### node 类型
在使用 node 包时，ts 会报错
安装
`pnpm install @types/node --D`

### 路径别名
vite.congif.ts 配置路径别名
```ts
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
```

ts 也需要配置，否则ts 识别不了
```json
// tsconfig.json
{
  "compilerOptions":{
    "baseUrl": "./",
    "paths": {
      "@/*":["./src/*"]
    }
  }
}

```

### 路由配置
路由使用 react-router-dom . 基本使用参考
https://reactrouter.com/en/main/start/tutorial#tutorial


### ant-design
https://ant.design/index-cn

`pnpm install antd --save`

配置国际化
https://ant.design/docs/react/i18n-cn

### git 钩子

#### pre-commit


