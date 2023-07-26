# tsconfig.json配置文件

```json
{
  "compilerOptions": {
    "lib": [],                            // 编译过程中需要引入的库文件(1)
    "target": "es6",                      // 编译后的 JavaScript 目标版本
    "module": "commonjs",                 // 指定生成哪个模块系统代码(2)
    "strict": true,                       // 开启严格类型检查
    "esModuleInterop": true,              // 启用 ES 模块的默认导入导出语法
    "outDir": "./dist",                   // (4)
    "rootDir": "./src",                   // (3)
    "moduleResolution": "node",           // 决定如何处理模块 (5)
    "resolveJsonModule": true,            // 允许导入 JSON 文件
    "sourceMap": true,                    // 生成源映射文件，方便调试
    "declaration": true,                  // 生成声明文件（.d.ts）
    "declarationDir": "./types",          // 声明文件输出目录
    "noImplicitAny": true,                // 不允许隐式的 any 类型
    "strictNullChecks": true,             // 开启严格的 null 检查
    "noUnusedLocals": true,               // 检查未使用的局部变量
    "noUnusedParameters": true,           // 检查未使用的函数参数
    "noImplicitReturns": true,            // 检查函数必须有返回值
    "noFallthroughCasesInSwitch": true,   // 禁止 switch 语句贯穿（fallthrough）
    "esModuleInterop": true               // 启用 ES 模块的默认导入导出语法
  },
  "include": [
    "src/**/*.ts"                         // 需要编译的 TypeScript 文件所在目录
  ],
  "exclude": [
    "node_modules"                        // 排除不需要编译的目录
  ],
  "extends": ""
}
```

1. `lib` 编译过程中需要引入的库文件

2. `module` 指定生成哪个模块系统代码

3. `rootDir` 要编译的 TypeScript 源代码目录

4. `outDir` 编译后的 JavaScript 文件输出目录

5. `moduleResolution` 
    - classic (默认) 从外层到内层方式查找
    - node 从内层到外层方式查找