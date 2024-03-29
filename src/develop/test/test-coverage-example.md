
# Test Coverage Example

<table>
    <tr>
        <th>Coverage</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>Simplecov (Ruby)</td>
        <td><code>/\(\d+.\d+\%\) covered/</code></td>
    </tr>
    <tr>
        <td>pytest-cov (Python)</td>
        <td><code>/(?i)total.*? (100(?:\.0+)?\%|[1-9]?\d(?:\.\d+)?\%)$/</code></td>
    </tr>
    <tr>
        <td>Scoverage (Scala)</td>
        <td><code>/Statement coverage[A-Za-z\.*]\s*:\s*([^%]+)/</code></td>
    </tr>
    <tr>
        <td>pest --coverage --colors=never (PHP)</td>
        <td><code>/^\s*Cov:\s*\d+\.\d+?%$/</code></td>
    </tr>
    <tr>
        <td>phpunit --coverage-text --colors=never (PHP)</td>
        <td><code>/^\s*Lines:\s*\d+.\d+\%/</code></td>
    </tr>
    <tr>
        <td>gcovr (C/C++)</td>
        <td><code>/^TOTAL.*\s+(\d+\%)$/</code></td>
    </tr>
    <tr>
        <td>tap --coverage-report=text-summary (NodeJS)</td>
        <td><code>/^Statements\s*:\s*([^%]+)/</code></td>
    </tr>
    <tr>
        <td>nyc npm test (NodeJS)</td>
        <td><code>/All files[^|]*\|[^|]*\s+([\d\.]+)/</code></td>
    </tr>
    <tr>
        <td>jest --ci --coverage (NodeJS)</td>
        <td><code>/All files[^|]*\|[^|]*\s+([\d\.]+)/</code></td>
    </tr>
    <tr>
        <td>excoveralls (Elixir)</td>
        <td><code>/\[TOTAL\]\s+(\d+\.\d+)%/</code></td>
    </tr>
    <tr>
        <td>mix test --cover (Elixir)</td>
        <td><code>/\d+.\d+\%\s+\|\s+Total/</code></td>
    </tr>
    <tr>
        <td>JaCoCo (Java/Kotlin)</td>
        <td><code>/Total.*?([0-9]{1,3})%/</code></td>
    </tr>
    <tr>
        <td>go test -cover (Go)</td>
        <td><code>/coverage: \d+.\d+% of statements/</code></td>
    </tr>
    <tr>
        <td>.NET (OpenCover)</td>
        <td><code>/(Visited Points).*\((.*)\)/</code></td>
    </tr>
    <tr>
        <td>.NET (dotnet test line coverage)</td>
        <td><code>/Total\s*\|\s*(\d+(?:\.\d+)?)/</code></td>
    </tr>
    <tr>
        <td>tarpaulin (Rust)</td>
        <td><code>/^\d+.\d+% coverage/</code></td>
    </tr>
    <tr>
        <td>Pester (PowerShell)</td>
        <td><code>/Covered (\d+\.\d+%)/</code></td>
    </tr>
</table>
