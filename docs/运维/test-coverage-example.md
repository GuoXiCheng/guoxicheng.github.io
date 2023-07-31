
# Test Coverage Example

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
