export {};

abstract class SQLQueryBuilder {
    protected query: string = "";
    protected tableName: string = "";
    protected fields: string[] = ["*"];
    protected orderClause: string = "";
    protected limitClause: string = "";
    protected offsetClause: string = "";

    select(table: string, fields: string[] = ["*"]): this {
        this.tableName = table;
        this.fields = fields;
        return this;
    }

    orderBy(column: string): this {
        this.orderClause = ` ORDER BY ${column}`;
        return this;
    }

    abstract limit(limit: number): this;
    abstract offset(offset: number): this;

    abstract build(): string;
}

class MySQLQueryBuilder extends SQLQueryBuilder {
    limit(limit: number): this {
        this.limitClause = ` LIMIT ${limit}`;
        return this;
    }

    offset(offset: number): this {
        this.offsetClause = ` OFFSET ${offset}`;
        return this;
    }

    build(): string {
        this.query = `SELECT ${this.fields.join(", ")} FROM ${this.tableName}${this.orderClause}${this.limitClause}${this.offsetClause}`;
        return this.query;
    }
}

class OracleQueryBuilder extends SQLQueryBuilder {
    limit(limit: number): this {
        this.limitClause = ` FETCH NEXT ${limit} ROWS ONLY`;
        return this;
    }

    offset(offset: number): this {
        this.offsetClause = ` OFFSET ${offset} ROWS`;
        return this;
    }

    build(): string {
        this.query = `SELECT ${this.fields.join(", ")} FROM ${this.tableName}${this.orderClause}${this.offsetClause}${this.limitClause}`;
        return this.query;
    }
}

const mysqlQuery = new MySQLQueryBuilder()
    .select("users", ["name", "email"])
    .orderBy("name")
    .limit(10)
    .offset(20)
    .build();

console.log(mysqlQuery);

const oracleQuery = new OracleQueryBuilder()
    .select("users", ["name", "email"])
    .orderBy("name")
    .limit(10)
    .offset(20)
    .build();

console.log(oracleQuery);
