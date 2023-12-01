---
title: Pingging Postgres on the start up of a Go service
date: 2023-06-01T19:00:00.000Z
metatags: go, postgres
description: Using sql.Open() and sql.Ping() to properlly establish a connection to a Postgres server from a Go service.
cover: posts/go.png
isPublished: true
isArchive: false
---

Is opening a database connection using the `sql.Open()` method and checking for the error that such method returns enough to successfully establish a connection to a Postgres server? Maybe, but there is another method in the `sql` package that ensures that the connection has actually been established, and on this blog post I am going to talk about it.

The method `sql.Open("postgres", "connection-string")` allows Go programs to establish a connection to a Postgres server, and on success it returns struct of type [DB](https://pkg.go.dev/database/sql#DB) and `nil` as the error, and whenever it fails it returns the database handle as `nil` and a concrete error detailing what went wrong.

```go
db, err := sql.Open("postgres", "postgres://postgres:password@localhost:5432?sslmode=disable")
if err != nil {
    log.Fatalf("could not open a connection to postgres: %v", err)
}
// Rest of the program
```

If for some reason the Postgres server specified is not up, the credentials are incorrect, or the database name specified doesn't exist, an error will not be returned right away, the Go program will still proceed up until it attempts to actually interact with the database. The method `sql.Open()` is not actually responsible for establishing the connection to the database server. To support my claims I've pasted below a comment from the [source code](https://github.com/golang/go/blob/master/src/database/sql/sql.go#L805) of the `sql` package detailing the following:

```go
// Open may just validate its arguments without creating a connection
// to the database. To verify that the data source name is valid, call
// Ping.
```

From my little digging, it seems to me that a connection is only created or established when the Go program attempts to perform the first query, and I've prepared two figures to illustrate that:

<figure style="max-width:80%; margin-bottom: 20px;">
	<img alt="Connections before a query" src="/posts/golang-sql-conn-1.png">
	<figcaption>Number of database connections after calling sql.Open()</figcaption>
</figure>

<figure style="max-width:80%;">
	<img alt="Connections after a query" src="/posts/golang-sql-conn-2.png">
	<figcaption>Number of database connections after running the first query</figcaption>
</figure>

## Testing the database connection

To actually test the connection, the `DB` handle that `sql.Open()` returns has a method named `Ping()`, which is responsible for checking whether the connection to Postgres is alive. Here is a snippet of code that illustrates how it can be used in a Go program:

```go
db, err := sql.Open("postgres", "postgres://postgres:password@localhost:5432?sslmode=disable")
if err != nil {
    log.Fatalf("could not open a connection to postgres: %v", err)
}

if err = db.Ping(); err != nil {
    log.Fatalf("could not connect to the postgres server specified: %v", err)
}
// Rest of the program
```

Should you want to test it quickly, I've made available a demo in a [GitHub](https://github.com/flowck/blog_code_snippets/tree/main/ping_psql) repository with a docker-compose file and following code:

```go
// main.go
package main

import (
	"context"
	"database/sql"
	"log"
	"time"

	_ "github.com/lib/pq"
)

func main() {
	db, err := sql.Open("postgres", "postgres://postgres:password@localhost:5432?sslmode=disable")
	if err != nil {
		log.Fatalf("could not open a connection to postgres: %v", err)
	}

	if err = db.Ping(); err != nil {
		log.Fatalf("could not connect to the postgres server: %v", err)
	}

	log.Println("Checking the version of the Postgres server in 30s")
	time.Sleep(time.Second * 30)
	row := db.QueryRowContext(context.Background(), `SELECT version()`)
	if row.Err() != nil {
		log.Fatalf("unable to query: %v", row.Err())
	}

	postgresVersion := ""
	if err = row.Scan(&postgresVersion); err != nil {
		log.Fatalf("unable to scan query result into variable: %v", err)
	}

	log.Printf("The version of this postgres instance is %s", postgresVersion)
}
```

## Conclusion

The name of the method `sql.Open()` doesn't seem to truly express its intention to the point that it requires additional explanation via comments to help its consumers understand what behaviour is expected from it.

I hope that by now you have another technique under your tool belt that will help you ensure that by the time the service you are maintaining is ready to process requests it will have performed the necessary checks to Postgres.
