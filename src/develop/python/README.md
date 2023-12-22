---
title: Python
index: false
icon: fa-brands fa-python
dir:
  link: true
---

::: code-tabs

@tab ①创建虚拟环境

```bash
python -m venv env
```

@tab ②激活虚拟环境

```bash
.\env\Scripts\activate
```

@tab ③退出虚拟环境

```bash
deactivate
```
:::


::: code-tabs

@tab 保存项目中的依赖

```bash
pip freeze > requirements.txt
```

@tab 批量安装依赖的包

```bash
pip install -r requirements.txt
```

@tab 批量卸载依赖的包

```bash
pip uninstall -r requirements.txt
```
:::