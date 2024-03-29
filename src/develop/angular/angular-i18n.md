---
date: 2023-10-18
---

# 多国语系设置

## 读取浏览器设置语言

```ts
const lang = (localStorage.getItem('currentLanguage') 
    || window.navigator.language || '').includes('zh') ? 'zh' : 'en';

```

## 安装依赖

```bash
npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader  --save
```

## 在 `app.module.ts` 导入

```ts
// 自定义的语言处理
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// https://github.com/ngx-translate/core
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ]
});

```

## 添加自定义语言包

在 `assets` 文件夹下新建 `i18n/*.json`

::: code-tabs

@tab zh-CN.json

```json 
{
	"delete": "删除",
	"generate compressed code": "生成压缩码",
	"download": "下载",
	"file": "文件"
}
```

@tab en-US.json

```json
{
	"delete": "Delete",
	"generate compressed code": "Generate compressed code",
	"download": "Download",
	"file": "File"
}
```
:::

## 在 `app.component.ts` 中初始化

```ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) {
    
  }

  async ngOnInit() {
    const lang = (
        localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang() || ''
    ).includes('zh') ? 'zh' : 'en';
    
    switch(lang) {
      case 'zh':
        this.translate.use('zh-CN');
        break;
      case 'en':
        this.translate.use('en-US');
        break;
      default:
        this.translate.use('en-US');
        break;
    }
  }
}
```

## 使用多国语言

```html
<a href="#">{{ 'download' | translate }}</a>

<a href="#" [title]="'name' | translate">title</a>
```