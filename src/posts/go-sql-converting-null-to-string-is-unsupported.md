---
title: Go/SQL - Fixing the error - Converting NULL to string is unsupported error
date: 2022-06-26T03:59:00.000Z
metatags: golang
description: Fixing the error - Converting NULL to string is unsupported error;
  thrown when querying a nullable field in Go.
cover: posts/luis-paico-NNTGEoohoE4-unsplash.webp
isPublished: true
isArchive: true
---

```
Converting NULL to string is unsupported error
```

The error above is thrown whenever a Go program tries to scan a query result that contains at least one column whose value is `NULL` to a struct defined with primitive types instead of `sql.NullString` type.

To solve this issue at the query level, the SQL function [`COALESCE`](https://www.postgresql.org/docs/14/functions-conditional.html#FUNCTIONS-COALESCE-NVL-IFNULL) comes in handy.

```go
package demo

type User struct {
    Id string
    FirstName string
    LastName string
}

func findUserByEmail(ctx context.Context, email string) {
    user := &User{}
	row := DbConn.QueryRowContext(ctx, `
		SELECT id, COALESCE(first_name, '') as first_name, COALESCE(last_name, '') as last_name
		FROM users
		WHERE email = $1
	`, email)
	err := row.Scan(&user.Id, &user.FirstName, &user.LastName)

    // ...
}
```

When the query above is executed, the function COALESCE will replace the `NULL` value of the columns `first_name` and `last_name` returned by the database for the value passed as second argument, which is an empty string.

## References

- [https://github.com/go-sql-driver/mysql/issues/34#issuecomment-158391340](https://github.com/go-sql-driver/mysql/issues/34#issuecomment-158391340)
- [https://www.postgresql.org/docs/14/functions-conditional.html#FUNCTIONS-COALESCE-NVL-IFNULL](https://www.postgresql.org/docs/14/functions-conditional.html#FUNCTIONS-COALESCE-NVL-IFNULL)
