# Brief: 

All developers need a break from coding, but sometimes it is hard to figure out what to do!

Build an API the connects a database filled with fun activities and places to go in your favourite city!

Users should be able to add new things to the database, or just view the existing activities.

No front end is needed! Try and use a new db technology.

You will be pairing with the same person for the next two days.

You will be conducting a code review with another pair this afternoon.

There should be tests!

# User Stories:

As a user, I want to be able to search a city for activities
As a user, I want to be able to find activities searching by city
As a user, I want to be able to find cities searching by country 

# Starting instructions:

1. npm install
2. CREATE DATABASE activities
3. CREATE DATABASE activities_test
4. knex migrate:latest
5. knex seed:run
6. node app.js to start
7. npm test to test

# Database Structure

1 table containing:
    - id
    - city
    - country
    - array of activities
    - array of places

# Installs:

npm install express
npm install knex
npm install pg
npm install dotenv
npm install mocha + chai
npm install nodemon
npm install chai-http
npm install body-parser
npm install cookie parser
npm install path

# Technologies

express
node
mocha
chai
git
knex
postgres
postman
body-parser