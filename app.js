const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const express = require("express");
const app = express();
app.use(express.json());

app.set("port", process.env.PORT || 3000);
// app.use(morgan(process.env.NODE_ENV !== "production" ? "dev" : "combined")); // allows you to get a log of your http requests in terminal

// GET endpoint that returns all shows data
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

// GET endpoint that returns all characters data
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

// GET endpoint that returns one show based off inputed id
app.get("/api/v1/shows/:id", (req, res) => {
  database("shows")
    .where("id", req.params.id)
    .select()
    .limit(1)
    .then(shows => {
      if (shows.length) {
        database("characters")
          .where("show_id", req.params.id)
          .select()
          .then(characters => {
            shows[0].characters = characters;
            res.status(200).json(shows[0]);
          });
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

// GET endpoint that returns all characters for one show based off inputed id
app.get("/api/v1/shows/:id/characters", (req, res) => {
  database("characters")
    .where("show_id", req.params.id)
    .select()
    .then(characters => {
      if (characters.length) {
        res.status(200).json(characters);
      } else {
        res.status(404).json("No characters found for this show");
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    }); // creating the error message if anything goes wrong with pulling the data
});

// GET endpoint that returns one character for one show based off inputed id's
app.get("/api/v1/shows/:id/characters/:show_id", (req, res) => {
  database("characters")
    .where("show_id", req.params.id)
    .andWhere("id", req.params.show_id)
    .select()
    .then(characters => {
      if (characters.length) {
        res.status(200).json(characters);
      } else {
        res.status(404).json(`No character with id ${req.params.id} was found`);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// POST endpoint for adding a new show
app.post("/api/v1/shows", (req, res) => {
  let show = req.body;
  for (let requiredParameter of [
    "title",
    "date",
    "tv_source",
    "cover_image",
    "characters"
  ]) {
    if (!show[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { title: <String>, date: <String>, tv_source: <String>, cover_image: <String>, characters: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }
  database("shows")
    .insert(show, "id")
    .then(show => {
      res.status(201).json({ id: show[0] });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

// POST endpoint for adding a character to a specific show
app.post("/api/v1/shows/:id/characters", (req, res) => {
  let character = req.body;
  for (let requiredParameter of [
    "show_name",
    "char_name",
    "ethnicity",
    "name"
  ]) {
    if (!character[requiredParameter]) {
      return res.status(422).send({
        error: `Expected format: { show_name: <String>, char_name: <String>, ethnicity: <String>, name: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }
  database("characters")
    .where("show_id", req.params.id)
    .insert(character, "id", "show_id")
    .then(char => {
      res.status(201).json({ id: char[0] });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete("/api/v1/shows/:id", (req, res) => {
  const { id } = req.params; // destructuring the id's from the params of the request
  const deleteShow = [
    database("characters") // this is making sure that the characters associated with the primary key of the show also gets deleted
      .where("show_id", id)
      .del(),
    database("shows") // deleting the show based on it's primary key id
      .where("id", id)
      .del()
  ];
  Promise.all(deleteShow)
    .then(() => {
      res.json({
        success: `You have successfully deleted the show & characters associated with the id of ${id}`
      });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.delete("/api/v1/shows/:id/characters/:id", (req, res) => {
  const { id } = req.params; // destructuring the id's from the params of the request
  const deleteShow = [
    database("characters") // deleting the character based on it's primary key id
      .where("id", id)
      .del()
  ];
  Promise.all(deleteShow)
    .then(() => {
      res.json({
        success: `You have successfully deleted the character associated with the id of ${id}`
      });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.listen(app.get("port"), () => {
  console.log(
    `Successfully connected, your port is now running on http://localhost:${app.get(
      "port"
    )}.`
  );
});
