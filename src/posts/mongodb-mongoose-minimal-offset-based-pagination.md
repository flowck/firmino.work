---
title: MongoDB/Mongoose minimal offset-based pagination
date: 2020-01-14 23:29:53
metatags: mongodb, express, nodejs, pagination, offset
description: Learn more about offset-based pagination using MongoDB and Mongoose
cover: "posts/mongodb-mongoose-minimal-offset-based-pagination.png"
---

It's minimal because I don't implement the following features in the pagination:

- Current page
- Previous page
- Next page
- Total items

Let's assume you have a collection called cars, and you don't want to return all the items at once, for the sake of your frontend application or API consumers. A quick way to implement simple and yet functional pagination is:

- To limit the query results. It's a good idea to set a default limit value.
- Enabling API consumers to set the results limit when performing a request, using query variables.
- Enabling API consumers to set the page or offset value when performing a query, using query variables.
- Ensuring that both query variables are integers, offset is equal or greater than 0, and the limit variable is equal or greater than 1 and less than the default limit.

To materialize what I just described, I will be using MongoDB with Mongoose, and Nodejs with Express:

<script src="https://gist.github.com/flowck/c4d18846b1b23c3e9522aadf0ba22f6c.js"></script>

In the code above, I:

- Set the default results limit value to 50.
- I assign the query variables `limit` and `offset` values as an integer in their respective constants, if they were defined or, if they were not defined, the default values 50 and 0 are used.
- I validate both parameters. As I told in the comments, I usually do this type of validations in the middleware level using [express-validation](https://www.npmjs.com/package/express-validation) and [joi](https://www.npmjs.com/package/joi).
- Then I finally perform the query on the `CarsModel` using the `.skip()` and `.limit()` methods.

## What's the purpose of .skip()?

From MongoDB documentation:

> Skips over the specified number of [documents](https://docs.mongodb.com/manual/reference/glossary/#term-document) that pass into the stage and passes the remaining documents to the next stage in the [pipeline](https://docs.mongodb.com/manual/reference/glossary/#term-pipeline).

In more simple words, when you specify `Model.find().limit(50).skip(1)` while performing a query, MongoDB ignores the first 50 results and only returns the results starting from 51 to 101.

## References

- [Query.prototype.skip()](https://mongoosejs.com/docs/api.html#query_Query-skip)
- [\$skip (aggregation)](https://docs.mongodb.com/manual/reference/operator/aggregation/skip/)
- [Post cover author](https://urlfy.xyz/AAAF2Jno)
