# 制作 npm 第三方库

## 初始化项目

使用`npm init`命令新建一个 npm 项目，这将生成一个`package.json`文件，用于定义项目的元数据和依赖项。

在根目录下新建`src`目录用于存放源码文件。

在`src`目录下新建`__tests__`目录用于存放测试文件。

## 安装 Typescript

```bash
npm install --save-dev typescript @types/node
```

在根目录下创建一个`tsconfig.json`文件来配置 Typescript 编译选项：

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "module": "ESNext",
        "target": "ES5",
        "declaration": true, // 生成类型声明文件
        "strict": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "**/__tests__/*"]
}
```

## 使用 rollup 打包

```bash
npm install --save-dev rollup @rollup/plugin-typescript
```

在根目录下创建一个名为`rollup.config.js`的文件，用于配置 rollup 打包选项：

```javascript
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts", // 入口文件
    output: [
        {
            file: "dist/bundle.cjs.js", // CommonJS 格式的输出
            format: "cjs",
        },
        {
            file: "dist/bundle.esm.js", // ES 模块格式的输出
            format: "esm",
        },
    ],
    plugins: [
        typescript(), // 使用 TypeScript 插件
    ],
};
```

在`package.json`文件中添加`"type": "module"`，以指示 NodeJS 将 js 文件视为 ES 模块。

## 合并类型声明文件

安装`rollup-plugin-dts`插件用于合并类型声明文件：

```bash
npm install --save-dev rollup-plugin-dts
```

修改`tsconfig.json`文件：

```json
{
  "compilerOptions": {
    // ...

    "declaration": true,
    "declarationDir": "./dist/types", // 指定类型声明文件的输出目录
    // ...
  }
}
```

修改`rollup.config.js`文件：

```js
import dts from "rollup-plugin-dts";

export default [
    {
      // ...
    },
    /* 单独生成声明文件 */
    {
        input: "dist/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "es" }],
        plugins: [dts()],
    },
];
```

## 添加构建命令

安装`rimraf`用于在构建前清除`dist`目录：

```bash
npm install --save-dev rimraf
```

在`package.json`文件中添加构建命令：

```json
{
    "scripts": {
        "clean": "rimraf dist",
        "build": "npm run clean && rollup -c"
    }
}
```

当执行`npm run build`命令时，会先清理`dist`目录，然后使用 rollup 打包。

## 使用 jest 编写测试

```bash
npm install --save-dev jest ts-jest @types/jest
```

在根目录下创建一个名为`jest.config.js`的文件，用于配置 jest 测试选项：

```javascript
export default {
    testTimeout: 30000, // 设置测试超时时间
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true, // 开启测试覆盖率
    coverageDirectory: "coverage", // 指定覆盖率报告输出目录
    collectCoverageFrom: [ // 指定需要收集覆盖率的文件
        "src/**/*.ts", // 包括 src 目录下所有的 TypeScript 文件
        "!src/**/*.d.ts", // 排除 TypeScript 声明文件
        "!src/__tests__/**/*.ts"
    ],
    testMatch: ["<rootDir>/src/__tests__/*.test.ts"], // 指定测试文件的匹配规则
    testPathIgnorePatterns: [] // 指定需要忽略的测试文件
}
```

在`src/__tests__`目录下创建测试用例

```ts
// example.test.ts
import { yourFunction } from './yourModule';

test('description of your test', () => {
  expect(yourFunction()).toBe(/* expected result */);
});
```

在`package.json`文件中添加测试命令：

```json
{
    "scripts": {
        "test": "jest --coverage"
    }
}
```

使用`npm run test`命令执行测试，并在指定的`coverage`目录中会生成测试覆盖率报告。

## 构建 npm 库

首先确保在`package.json`文件中添加
- `"main": "dist/bundle.cjs.js"`指向CommonJS版本的入口点。
- `"module": "dist/bundle.esm.js"`指向ES模块版本的入口点。
- `"types": "dist/index.d.ts"`指向类型声明文件。
- `"files": ["dist"]`指定发布的文件。

然后在每次发布前先执行`npm run build`命令构建最新版本的库，再手动修改`package.json`文件中的`version`字段。遵循[语义化版本控制](https://semver.org/)。

## 测试构建后的库

在根目录下执行`npm pack`命令，将会在根目录下生成一个`*.tgz`文件，然后在另一个项目中使用`npm install <path-to-tgz-file>`命令安装该库。

## 发布 npm 库

使用`npm login`命令登录到公共镜像仓库，如果是私有镜像仓库，可以在根目录下新建`.npmrc`文件，添加`registry`字段指向私有镜像仓库地址，例如：`registry=https://npm.example.com`。

最后使用`npm publish`命令发布 npm 库。

## 自动发布

首先在 npm 账户中生成一个新的访问令牌，并添加到 Github 仓库的 Actions Secrets 中。

在项目根目录的`.github/workflows`目录下创建一个名为`publish.yml`的文件，用于配置 Github Actions，并确保在每次发布前更新`package.json`文件中的`version`版本。

```yaml
name: Publish npm package

on:
  push:
    branches:
      - publish

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 18
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm install

      - name: Build package
        run: npm run build 

      - name: Publish to npm
        run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
