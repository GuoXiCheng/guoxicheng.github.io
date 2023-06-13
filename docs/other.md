# Other

## 启停K8S命名空间下的所有部署

```bash title="停用K8S命名空间下的所有部署副本"
kubectl scale --replicas=0 deployment --all -n <namespace-name>
```

```bash title="启用K8S命名空间下的所有部署副本"
kubectl scale --replicas=1 deployment --all -n <namespace-name>
```

## npm 镜像源切换

```bash title="查看当前使用的镜像源"
npm config get registry
```

```bash title="切换官方镜像源"
npm config set registry https://registry.npmjs.org
```

## 替换字符串中的回车、空格和换行

```js
string.replace(/\n|\ +|\\/g, "")
```

## Test Coverage Examples

| Coverage                                     | Example                                                 |
| -------------------------------------------- | ------------------------------------------------------- |
| Simplecov (Ruby)                             | `/\(\d+.\d+\%\) covered/`                               |
| pytest-cov (Python)                          | `/(?i)total.*? (100(?:\.0+)?\%|[1-9]?\d(?:\.\d+)?\%)$/` |
| Scoverage (Scala)                            | `/Statement coverage[A-Za-z\.*]\s*:\s*([^%]+)/`         |
| pest --coverage --colors=never (PHP)         | `/^\s*Cov:\s*\d+\.\d+?%$/`                              |
| phpunit --coverage-text --colors=never (PHP) | `/^\s*Lines:\s*\d+.\d+\%/`                              |
| gcovr (C/C++)                                | `/^TOTAL.*\s+(\d+\%)$/`                                 |
| tap --coverage-report=text-summary (NodeJS)  | `/^Statements\s*:\s*([^%]+)/`                           |
| nyc npm test (NodeJS)                        | `/All files[^|]*\|[^|]*\s+([\d\.]+)/`                   |
| jest --ci --coverage (NodeJS)                | `/All files[^|]*\|[^|]*\s+([\d\.]+)/`                   |
| excoveralls (Elixir)                         | `/\[TOTAL\]\s+(\d+\.\d+)%/`                             |
| mix test --cover (Elixir)                    | `/\d+.\d+\%\s+\|\s+Total/`                              |
| JaCoCo (Java/Kotlin)                         | `/Total.*?([0-9]{1,3})%/`                               |
| go test -cover (Go)                          | `/coverage: \d+.\d+% of statements/`                    |
| .NET (OpenCover)                             | `/(Visited Points).*\((.*)\)/`                          |
| .NET (dotnet test line coverage)             | `/Total\s*\|\s*(\d+(?:\.\d+)?)/`                        |
| tarpaulin (Rust)                             | `/^\d+.\d+% coverage/`                                  |
| Pester (PowerShell)                          | `/Covered (\d+\.\d+%)/`                                 |
## Python启用虚拟环境

```bash title="创建虚拟环境"
python -m venv env
```

```bash title="激活虚拟环境"
.\env\Scripts\activate
```

```bash title="退出虚拟环境"
deactivate
```
