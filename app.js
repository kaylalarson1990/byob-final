const express = require("express");
// const morgan = require("morgan");
// const dbConnection = require("./connection");
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined")); // allows you to get a log of your http requests in terminal

app.get("/api/v1/shows", (req, res) => {
    res.send("hello world!")
//   dbConnection("show") // pass in the name of the table. this is connecting knex to show our data
//     .select("*") // selecting all the data from the show table
//     .then(shows => res.status(200).json(shows))
//     .catch(error =>
//       res.status(500).json({ error: error.message, stack: error.stack })
//     ); // creating the error message if anything goes wrong with pulling the data
});

// app.get("/api/v1/shows/:id", (req, res) => {
//   const { id } = req.params;
//   dbConnection("show")
//     .select("*")
//     .limit(1)
//     .where({ id: id })
//     .then(show => res.status(200).json(show))
//     .catch(error =>
//       res.status(500).json({ error: error.message, stack: error.stack })
//     ); // creating the error message if anything goes wrong with pulling the data
// });

app.listen(PORT, console.log(`Successfully connected to port ${PORT}...`));
