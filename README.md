# Description

BYOB (Build your own backend) was an individual project done in 7 days. I created my own data set using a one-to-many relationship. I have my "one" being tv-shows and my "many" being the main characters on each show. Learning goals were to create a RESTful api using NodeJS Express, PostgreSQL, and Knex.

## Technologies

- Express
- Knex
- PostgreSQL

## Learning Objectives

- build RESTful API for a large dataset
- one-to-many relational database schema design
- deploy API to Heroku

## Installation
### (If you do not have PostgreSQL, please see instructions at the bottom for installation)
Clone down the repo - https://github.com/kaylalarson1990/byob-final

Run ```npm install``` from the root directory

Run ```npm start``` - visit localhost:3000/api/users - you should see a json response with a single user.

## Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3000/api/v1/shows` | GET | not needed | Array of all shows: `[{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com', characters: [{}] }]` |
| `http://localhost:3001/api/v1/shows/:id/characters/:show_id` | GET | not needed | Array of one specific character: `[{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }]` |
| `http://localhost:3001/api/v1/shows/:id` | GET | not needed | Array of one specific show: `[{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com' }]` |
| `http://localhost:3001/api/v1/shows/:id/characters` | GET | not needed | Array of characters for one specific show: `[{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }]` |
| `http://localhost:3001/api/v1/shows` | POST | `{title: <String>, date: <String>, tv_source: <String>, cover_image: <String>, characters: <String>}` | New show: `{ id: 12, title: 'Friends', date: 'August 18, 2019', tv_source: 'Netflix', cover_image: 'https://friends.com', characters: [{}] }` |
| `http://localhost:3001/api/v1/shows/:id/characters` | POST | `{show_name: <String>, char_name: <String>, ethnicity: <String>, name: <String>}` | New character: `{ id: 12, show_name: 'Friends', char_name: 'Rachel', ethnicity: 'American', name: 'Jennifer Anniston' }` |
| `http://localhost:3001/api/v1/shows/:id` | DELETE | not needed | `{ success: 'You have successfully deleted the show & characters associated with the id of 387' }` |
| `http://localhost:3001/api/v1/shows/:id/characters/:id` | DELETE | not needed | `{ success: 'You have successfully deleted the character associated with the id of 413' }` |


Note: All of these endpoints will return semantic errors if something is wrong with the request.

[Heroku Deployment Link](https://afternoon-springs-70039.herokuapp.com/api/v1/shows)

## Setup Postgresql

#### Installation:
* Head over to [Postgres.app](http://postgresapp.com/) to download and install PostgreSQL
* When you click `initialize`, you should now be able to see that postgreSQL is running
* To be able to use the command line tools, you will need to run the following commannd in your terminal to configure your $PATH `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* You will need to close your terminal window and re-open it for the changes to take effect

