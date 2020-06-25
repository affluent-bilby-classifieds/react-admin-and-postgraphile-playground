# React-Admin and  Postgraphile playground

We use Ubuntu 20.04 as a dev environment. We also run virtual-box with Ubuntu 20.04 as a guest for a testing environment. How you setup your environment is a matter of personal preference. 

This project is based on:

- [postgraphile](https://www.graphile.org/postgraphile/)
- [React-Admin](https://github.com/marmelab/react-admin)
- [`BowlingX/ra-postgraphile`](https://github.com/BowlingX/ra-postgraphile) (see https://github.com/graphile/graphile.github.io/issues/224)

## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/) (version `18.06.1-ce`)
- [Docker Compose](https://docs.docker.com/compose/) (version `1.22.0`)
- [nodejs](https://nodejs.org/en/) (version `v12.10.0`)

Install nodejs from [nodesource](https://github.com/nodesource/distributions/blob/master/README.md)

Then we need the [node version manager](https://github.com/nvm-sh/nvm/blob/master/README.md):

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
restart your terminal or ssh session then enter:

```
nvm install v12.10.0
```
```
nvm use v12.10.0
```

## Getting started

Git clone this project to a working directory, next:

```
sudo apt-get install jq -y
```
```
$ ./scripts/up.sh
```
You will see something like this:

![building](https://github.com/affluent-bilby-classifieds/react-admin-and-postgraphile-playground/blob/master/Screenshot%20from%202020-06-25%2010-16-28.png)


You can browse in database with [graphiql](https://github.com/graphql/graphiql) on this page: http://127.0.0.1:5000/graphiql
(or the ip of your VM)

Now that the backend has been started, go to [`frontend/`](frontend/) to start the « Contact Web Frontend ».

# Dummy Contact Web Frontend based on React-Admin

## Getting started

```
$ npm install
$ npm start
```

Open your browser on http://localhost:3000

# Install the menu database

```
docker-compose exec postgres /bin/bash
```

Inside the container now run:






```
psql --username=postgres

```

```
postgres=# create database menudb;
CREATE DATABASE
```

```
postgres=# grant all privileges on database menudb to postgres;
GRANT
```
```
\q
```
now back in bash (but still inside the docker container) we enter the following:


```
apk add jq
```

```
cd /sqls/json
```

Now we are loading the JSON into a Postgres JSONB column all thanks to the guide from: [(@kiwicopple)](https://dev.to/kiwicopple/loading-json-into-postgres-2l28)

```
cat menuItems.json | jq -cr '.[]' | sed 's/\\[tn]//g' > output.json
```
```
psql -h localhost -p 5432 menudb -U postgres -c "CREATE TABLE menu (data jsonb);"
```

```
cat output.json | psql -h localhost -p 5432 menudb -U postgres -c "COPY menu (data) FROM STDIN;"
```

Now we check the json has been imported to the jsonb table OK.

```
psql --username=postgres

```


```
postgres=# \l
                                 List of databases
   Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges   
-----------+----------+----------+------------+------------+-----------------------
 menudb    | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =Tc/postgres         +
           |          |          |            |            | postgres=CTc/postgres
 postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 | 
 template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
 template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
           |          |          |            |            | postgres=CTc/postgres
(4 rows)

```

```
postgres=# \c menudb
You are now connected to database "menudb" as user "postgres".
menudb=# \dt
        List of relations
 Schema | Name | Type  |  Owner   
--------+------+-------+----------
 public | menu | table | postgres
(1 row)
```

```
menudb=# SELECT * FROM menu;
                                                                                                                                           data                            
                                                                                                               
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
 {"id": 1, "img": "./images/item-1.jpeg", "desc": "AW Rootbear with a scoop of delicious icecream.", "price": "7.5", "title": "Compton rootbeer", "category": "Drinks"}
 {"id": 2, "img": "./images/item-2.jpeg", "desc": "Chickpea Pattie, Avocardo, Lettuce, Tomato, BBQ sauce, onion, Sweet Chilli. Vegan mayo.", "price": 13.99, "title": "Vega
n Paradise", "category": "Burgers"}
 {"id": 3, "img": "./images/item-3.jpeg", "desc": "The sweetest and most delicious Mexican soda. Loved by Gringos. Great with burgers.", "price": 6.99, "title": "Jarritos 
Mexican Soda", "category": "Drinks"}
 ...etc....
(34 rows)

```
Don't forget to quit: 

```
\q
```
# Add a boolean field so that a menu item can be enabled to disabled

# Add the code to view and edit the menu database to react admin

