const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const express = require("express");
const app = express();
app.use(express.json());

app.set("port", process.env.PORT || 3000);
// app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined")); // allows you to get a log of your http requests in terminal

app.get("/api/v1/shows", (req, res) => {
  database("shows")
    .select("*")
    // pass in the name of the table. this is connecting knex to show our data
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(
      error =>
        res.status(500).json({ error: error.message, stack: error.stack })
      // creating the error message if anything goes wrong with pulling the data
    );
});

app.get("/api/v1/characters", (req, res) => {
    database("characters")
      .select("*")
      // pass in the name of the table. this is connecting knex to show our data
      .then(characters => {
        res.status(200).json(characters);
      })
      .catch(
        error =>
          res.status(500).json({ error: error.message, stack: error.stack })
        // creating the error message if anything goes wrong with pulling the data
      );
  });

app.get("/api/v1/shows/:id", (req, res) => {
  const { id } = req.params;
  database("shows")
    .select("*")
    .limit(1)
    .where({ id: id })
    .then(shows => res.status(200).json(shows))
    .catch(error =>
      res.status(500).json({ error: error.message, stack: error.stack })
    ); // creating the error message if anything goes wrong with pulling the data
});

app.get("/api/v1/characters/:id", (req, res) => {
    const { id } = req.params;
    database("characters")
      .select("*")
      .limit(1)
      .where({ id: id })
      .then(characters => res.status(200).json(characters))
      .catch(error =>
        res.status(500).json({ error: error.message, stack: error.stack })
      ); // creating the error message if anything goes wrong with pulling the data
  });

app.listen(app.get("port"), () => {
  console.log(
    `Successfully connected, your port is now running on http://localhost:${app.get(
      "port"
    )}.`
  );
});
