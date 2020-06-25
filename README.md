# React-Admin and  Postgraphile playground

We use Ubuntu 20.04 as a dev environment.

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

Git clone this project a working directory, next:

```
sudo apt-get install jq -y
```
```
$ ./scripts/up.sh
```
You will see something like this:

![building](https://github.com/affluent-bilby-classifieds/react-admin-and-postgraphile-playground/blob/master/Screenshot%20from%202020-06-25%2010-11-25.png)


You can browse in database with [graphiql](https://github.com/graphql/graphiql) on this page: http://127.0.0.1:5000/graphiql

Now that the backend has been started, go to [`frontend/`](frontend/) to start the « Contact Web Frontend ».
