export {};

interface SQLQueryBuilder {
    select(table: string, fields: string[]): SQLQueryBuilder;
    where(conditions: string): SQLQueryBuilder;
    orderBy(field: string, direction: 'ASC' | 'DESC'): SQLQueryBuilder;
    getQuery(): string;
}

class SQLQuery implements SQLQueryBuilder {
    private query: string = '';

    select(table: string, fields: string[]): SQLQueryBuilder {
        this.query += `SELECT ${fields.join(', ')} FROM ${table}`;
        return this;
    }

    where(conditions: string): SQLQueryBuilder {
        this.query += ` WHERE ${conditions}`;
        return this;
    }

    orderBy(field: string, direction: 'ASC' | 'DESC'): SQLQueryBuilder {
        this.query += ` ORDER BY ${field} ${direction}`;
        return this;
    }

    getQuery(): string {
        return this.query;
    }
}

const queryBuilder = new SQLQuery();
const query = queryBuilder
    .select("users", ["name", "age", "email"])
    .where("age > 18")
    .orderBy("name", "ASC")
    .getQuery();

// 输出: SELECT name, age, email FROM users WHERE age > 18 ORDER BY name ASC
console.log(query); 
