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
    .select()
    // pass in the name of the table. this is connecting knex to show our data
    .then(shows => {
      if (shows.length) {
        res.status(200).json(shows);
      } else {
        res.status(404).json("No shows found");
      }
    })
    .catch(
      error =>
        res.status(500).json({ error: error.message, stack: error.stack })
      // creating the error message if anything goes wrong with pulling the data
    );
});

app.get("/api/v1/characters", (req, res) => {
  database("characters")
    .select()
    // pass in the name of the table. this is connecting knex to show our data
    .then(characters => {
      if (characters.length) {
        res.status(200).json(characters);
      } else {
        res.status(404).json("No characters found");
      }
    })
    .catch(
      error =>
        res.status(500).json({ error: error.message, stack: error.stack })
      // creating the error message if anything goes wrong with pulling the data
    );
});

app.get("/api/v1/shows/:id", (req, res) => {
  database("shows")
    .where("id", req.params.id)
    .select()
    .limit(1)
    .then(shows => {
      if (shows.length) {
          database("characters").where("show_id", req.params.id).select()
          .then(characters => {
              shows[0].characters = characters
              res.status(200).json(shows[0]);
          })
      } else {
        res.status(404).json({
          error: `No shows found with id: ${req.params.id}`
        });
      }
    })
    .catch(error =>
      res.status(500).json({ error: error.message, stack: error.stack })
    ); // creating the error message if anything goes wrong with pulling the data
});

app.get("/api/v1/shows/:id/characters", (req, res) => {
  database('characters').where('show_id', req.params.id).select()
    .then((characters) => {
    //   if(characters.length) {
      res.status(200).json(characters)
    //   } else {
    //     res.status(404).json('No characters found for this show')
    //   }
    })
      .catch((error) => {
        res.status(500).json({ error});
      }) // creating the error message if anything goes wrong with pulling the data
});


app.get('/api/v1/shows/:id/characters/:show_id', (req, res) => {
    database('characters').where('author_id', req.params.id).andWhere('id', req.params.show_id).select()
      .then((characters) => {
        if(characters.length) {
        res.status(200).json(characters)
        } else {
          res.status(404).json(`No character with this id: ${req.params.id} was found`)
        }
      })
        .catch((error) => {
          res.status(500).json({ error })
        })
  })

app.listen(app.get("port"), () => {
  console.log(
    `Successfully connected, your port is now running on http://localhost:${app.get(
      "port"
    )}.`
  );
});
