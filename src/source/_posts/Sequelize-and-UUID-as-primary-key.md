---
title: Sequelize and UUID as primary key
date: 2020-02-06 14:07:25
metatags: database, sequelize, orm
description: Learn more about offset-based pagination using MongoDB and Mongoose
cover: "blog-images/sequelize-and-uuid-as-primary-key.jpg"
---

By default sequelize models and migrations are generated with the column `id` as the primary key with the data type `INTEGER` and, with the option `autoIncrement` set to `true`. This means that each row will have a sequential `id` starting from `0`.

```javascript
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
```

This is a classical approach and works perfectly, but when your application needs to expose data to the outside world, for instance, through a REST API, HTTP API or even GraphQL, special attention is required to the `id` column to avoid common situations like:

* Users trying to guess the table records frrom the primary key value
* A rare and extreme situation, your database may ran out of integers, just like it happend to [Basecamp](https://medium.com/signal-v-noise/update-on-basecamp-3-being-stuck-in-read-only-as-of-nov-8-9-22am-cst-c41df1a58352).

If you want to learn more the pros and cons of using UUIDs as primary key, here are two blog posts that may enlight you:

* [UUID or GUID as Primary Keys? Be Careful!](https://medium.com/signal-v-noise/update-on-basecamp-3-being-stuck-in-read-only-as-of-nov-8-9-22am-cst-c41df1a58352)
* [Do you really need a UUID/GUID?](https://rclayton.silvrback.com/do-you-really-need-a-uuid-guid)



> UUIDs will consume extra space in your database due to the length of each UUID value. Also, keep in mind that indexing a column with a complex value like a UUID may cause performance issues.



## Using UUIDs

The Sequelize module has already prebuilt properties either to define the datatype and to generate a new UUID in execution time. Let's refactor the migration file:

### User migration

```javascript
// Migration

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
```

In the code above the following changes were made:

* The property `autoIncrement` was removed. There's no point in having it since the UUID datatype is not incrementable.
* The property `type`  received the value `Sequelize.UUID`
* The property `defaultValue` was added and assigned the value `Sequelize.UUIDV4`, so every time an `INSERT` operation is made, Sequelize will take care of the process of generating a new UUID value, on this case, it will use the [version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)), which is purely random.

### User model

To keep every database base definitions consistent across the project codebase, the changes in the migration files need to reflect in the User model file too.

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
  	id: {
    	allowNull: false,
	    primaryKey: true,
    	type: DataTypes.UUID,
    	defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
```

Just like in the migration file, and property `autoIncrement` was removed, and type property was changed to UUID, but this time, using the object `DataTypes` instead of `Sequelize`, and also the property `defaultValue` was added to the column `id`.

## Another use cases for UUIDs

I have other two use cases for UUIDs as the data type of columns: 

* **Email account verification**: when a user is created, a unique token is generated so the user can verify his account. In this case, a link with the same token is sent to the user's mail address, once the user clicks on it, the column holding the token is updated to `null`.
* **Password reset**: when the user resets his password, a mail with a token is sent to his email account. In this case, when the user clicks in the link, if the expiry date is less or equal than the current time, then the column holding the token is set to `null`. 

For both cases I usually have the following columns:

* `mailConfirmationToken : UUID`
* `passwordResetToken : UUID`
* `passwordResetTokenExpiryDate : Date`

### User migration

```javascript
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
      mailConfirmationToken: {
        type: Sequelize.UUID
      },
      passwordResetToken: {
        type: Sequelize.UUID
      },
      passwordResetTokenExpiryDate: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
```



### User model

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
  	id: {
    	allowNull: false,
	    primaryKey: true,
    	type: DataTypes.UUID,
    	defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    mailConfirmationToken: DataTypes.UUID,
    passwordResetToken: DataTypes.UUID,
    passwordResetTokenExpiryDate: DataTypes.DATE
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
```


## References

* [UUIDs are Popular, but Bad for Performance — Let’s Discuss](https://www.percona.com/blog/2019/11/22/uuids-are-popular-but-bad-for-performance-lets-discuss/)
* [Universally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))
* [Post cover by Samantha Lam](https://unsplash.com/photos/zFy6fOPZEu0) 

