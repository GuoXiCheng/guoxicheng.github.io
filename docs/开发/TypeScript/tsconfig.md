# tsconfig.json配置文件

```json
{
  "compilerOptions": {
    // 编译过程中需要引入的库文件
    "lib": ["ESNext", "DOM"],          
    // 编译后的 JavaScript 目标版本                  
    "target": "es6",        
    // 指定生成哪个模块系统代码            
    "module": "commonjs",   
    // 开启严格类型检查 (1)              
    "strict": true,   
    // 启用 ES 模块的默认导入导出语法                    
    "esModuleInterop": true,        
    // 编译后的 JavaScript 文件输出目录   
    "outDir": "./dist",     
    // 要编译的 TypeScript 源代码目录            
    "rootDir": "./src",         
    // 决定如何处理模块 (2)          
    "moduleResolution": "node",         
    // 是否允许导入 JSON 文件  
    "resolveJsonModule": true,  
    // 是否允许编译 JavaScript 文件    
    "allowJs": true,   
    // 是否对JS文件进行类型检查，与allowJs配合使用 
    "checkJs": true,
    // 生成源映射文件，方便调试  
    "sourceMap": true, 
    // 是否将每个文件作为单独的模块
    "isolatedModules": true,     
    // 生成声明文件（.d.ts）             
    "declaration": true,           
    // 声明文件输出目录       
    "declarationDir": "./types",          
    // 不允许隐式的 any 类型
    "noImplicitAny": true,             
    // 开启严格的 null 检查   
    "strictNullChecks": true,   
    // 确保类的非undefined属性已经在构造函数里初始化。需要同时启用strictNullChecks
    "strictPropertyInitialization": true,  
    // 是否对函数的参数类型和返回值类型检查
    "strictFunctionTypes": true,   
    // 检查未使用的局部变量     
    "noUnusedLocals": true,        
    // 检查未使用的函数参数       
    "noUnusedParameters": true,      
    // 检查函数必须有返回值     
    "noImplicitReturns": true,            
    // 禁止 switch 语句贯穿（fallthrough）
    "noFallthroughCasesInSwitch": true,   
    // 启用 ES 模块的默认导入导出语法
    "esModuleInterop": true,
    // 编译后是否删除所有注释  
    "removeComments": true,
    // 是否跳过声明文件类型检查    
    "skipLibCheck": true,
    // 要包含的类型声明文件名列表
    "types": ["node"],   
    // 要包含的类型声明文件路径列表 
    "typeRoots": ["node_modules/@types"],
    // 解析非相对模块名的基准目录
    "baseUrl": ".",
    // 模块名到基于 baseUrl 的路径映射的列表
    "paths": {}
  },
  // 需要编译的 TypeScript 文件所在目录
  "include": [
    "src/**/*.ts"                         
  ],
  // 排除不需要编译的目录
  "exclude": [
    "node_modules"                        
  ],
  "extends": ""
}
``` 

1. `strict`
    启用`strict`相当于启用`noImplicitAny` `noImplicitThis` `alwaysStrict` `strictNullChecks` `strictFunctionTypes` `strictPropertyInitialization`

2. `moduleResolution` 
    - classic (默认) 从外层到内层方式查找
    - node 从内层到外层方式查找