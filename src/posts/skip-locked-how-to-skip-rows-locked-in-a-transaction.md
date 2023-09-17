---
title: "How to skip rows locked in a transaction (skip locked)"
date: 2023-09-17T15:00:00.000Z
metatags: SQL, PostgreSQL
description: Using the clause skip locked to avoid querying rows locked in a transaction
cover: posts/postgresql.png
isPublished: true
isArchive: false
---

If you've landed on this post, you probably know what you are looking for, so here is how to skip rows locked in another transaction (PostgreSQL):

```sql
BEGIN;

SELECT * FROM urls
FOR UPDATE
SKIP LOCKED
LIMIT 100;

END;
```

The key to achieve such skip, is to first ensure that the rows to be queried will actually be locked, hence the `FOR UPDATE` clause, and then the `SKIP LOCKED` clause to prevent the query from waiting for the RDBMS to release the locks that another query might have acquired.

> With SKIP LOCKED, any selected rows that cannot be immediately locked are skipped. Skipping locked rows provides an inconsistent view of the data, so this is not suitable for general purpose work, but can be used to avoid lock contention with multiple consumers accessing a queue-like table - [PostgreSQL Documentation: The Locking Clause](https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE)

## How was this useful to me?

I am working on a monitoring tool architected with the Leader-follower model where the service acting as the leader, and the service acting as a worker needs to be capable of working with multiple replicas of themselves. The leader needs to query data on an interval basis and publish events/messages to a queue to be consumed by the workers.

Due to the potential volume of data, and to prevent having a single point of failure I needed to foresee having multiple leaders running in a replicated fashion, which without proper concurrency control would have led to issues such as multiple leaders accessing the same rows for the same purpose.

<figure style="max-width:80%; margin-bottom: 20px;">
	<img alt="Mutli Leader architecture" src="/new-posts/skip-locked-arch-overview.png">
	<figcaption>Multi Leader architecture</figcaption>
</figure>

That's it for this post, thank you.
