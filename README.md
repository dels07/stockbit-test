# Stockbit Backend Engineer Test

## Test #1

The test is in folder **test-1**, I included both DDL & DML that can be run using MySQL.

Also I add a dbfiddle for this: https://www.db-fiddle.com/f/uLqo9jJSv2uRdT3nJYXWow/0

---

## Test #2

The test is in folder **test-2**, I made simple express app structure which contain service & repository for API

### Specifications

- Node 14.x (I currently using M1, so no node version below 14 available)
- MySQL
- Knex for ORM
- Axios for service call
- Jest & Supertest for unit test

### How to Run

```bash
# change directory & install dependencies
$ cd test-2
$ npm i
$ npm i -g knex

# please modify .env for db access & omdb api key
$ cp .env.example .env

# run migration to create necessary tables
$ knex migrate:up

# to run app server, by default will run in http://localhost:3000
$ npm start

# to run unit test
$ npm test
```

### Endpoints

```json
// endpoint information
GET /

// search movie/series based on keyword
GET /search?keyword=(keyword)

// view information detail based on title id
GET /detail/(id)
```

---

## Test #3

Test test is in folder **test-3**, I made simple assertions before doing refactor to ensure function currently match expectations.

You can check the assertions from line **21 - 31**, to run this you can use jsfiddle/jsbin, browser console or if you have node already setup type this in your terminal:

```bash
node "./test-3/index.js"
```

---

## Test #4

Test test is in folder **test-4**, I tried to build object that have keys as sorted characters and then push/set string we pass if the object property is empty.

```javascript
{
  'a,i,k,t': [ 'kita', 'atik', 'tika' ],
  'a,k,u': [ 'aku', 'kua' ],
  'a,i,k': [ 'kia' ],
  'a,a,k,m,n': [ 'makan' ]
}
```

Then I used `Object.values()` to just get the values.

To run this you can use jsfiddle/jsbin, browser console or if you have node already setup type this in your terminal:

```bash
node "./test-4/index.js"
```
