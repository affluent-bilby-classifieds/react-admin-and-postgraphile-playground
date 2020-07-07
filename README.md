# React-Admin and  Postgraphile playground

We use Ubuntu 20.04 as a dev environment. We also run virtual-box with Ubuntu 20.04 as a guest for a testing environment. How you setup your environment is a matter of personal preference. 

This project is based on:

- [postgraphile](https://www.graphile.org/postgraphile/)
- [React-Admin](https://github.com/marmelab/react-admin)
- [`BowlingX/ra-postgraphile`](https://github.com/BowlingX/ra-postgraphile) (see https://github.com/graphile/graphile.github.io/issues/224)

## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/) (version `19.03.11`)
- [Docker Compose](https://docs.docker.com/compose/) (version `1.25.0`)
- [nodejs](https://nodejs.org/en/) (version `v12.10.0`)

Install nodejs 12.x from [nodesource](https://github.com/nodesource/distributions/blob/master/README.md)

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

Git clone this project to a working directory
```
git clone https://github.com/affluent-bilby-classifieds/react-admin-and-postgraphile-playground.git
```

next:

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



# Add the code to view and edit the menu database to react admin

Please note that I was unable to load the menu table from the menudb into React Admin.
I have instead created a new table (menu) by modifying /sqls/seed.sql
I have also created a table called menucategories so that we can create and modify each category for the menu. This is moving away from a flatfile database (json)
and becoming a normalized relational database. We still need to find a way (such as writing a script) to translate our json menu into the postgres relational database. 

