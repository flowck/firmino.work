---
title: Go/SQL/PostgreSQL - Custom LastInsertId
date: 2022-07-01 21:33:00
metatags: golang
description: Using QueryRow to perform an INSERT and retrieve the id of the newly created row.
cover: "posts/golang.png"
---

I've just stumbled upon a challenge, where I needed a query to return the ID of the last inserted row, and I was querying using `ExecContext` and the method `LastInsertId()` to retrieve the `id`:

```go
result, err := Db.ExecContext(ctx, `INSERT INTO tenants (name) VALUES ($1)`, "My Awesome, Inc.")

if err != nil {
	// do something with the error
}

id, _ := result.LastInsertId()

fmt.Println(id) // 0
```

However, the `id` returned was always 0, despite the `id` type being set as a `VARCHAR`. After a quick digging I learned that unless the table's `id` has been created with a [`SEQUENCE`](https://www.postgresql.org/docs/9.5/sql-createsequence.html) generator, PostgreSQL won't return the `id` upon row insertion.

To overcome the challenge I've just described above, I've used the [`RETURNING`](https://www.postgresql.org/docs/9.5/dml-returning.html) clause, and replaced Go's `Db.ExecContext()` with `Db.QueryRowContext()` to gain access to the modified row.

Take a look at the full script:

```go
func FindTenantById(ctx context.Context, id string) (*Tenant, error) {
	tenant := &Tenant{}
    // Use QueryRowContext instead of ExecContext() to perform an INSERT
	row := Db.QueryRowContext(ctx, `INSERT INTO tenants (name) VALUES($1) RETURNING id`, id)
	err := row.Scan(&tenant.Id, &tenant.Name)

	if row.Err() == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, nil
	}

	return tenant, nil
}
```

That will be all for now, and don't forget to take a look at the links I've listed under references.

Cheers.

## References

- https://www.postgresql.org/docs/9.5/sql-createsequence.html
- https://stackoverflow.com/questions/33382981/go-how-to-get-last-insert-id-on-postgresql-with-namedexec
