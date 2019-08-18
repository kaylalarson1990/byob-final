let showData = require("../data/shows.js");

const createShows = (knex, show) => {
  return knex("shows")
    .insert(
      // this is allowing for knex to insert the data from the data set, in the way the "shows" table/schema requested it be
      {
        title: show.title,
        date: show.date,
        tv_source: show.tv_source,
        cover_image: show.cover_image
      },
      "id"
    )
    .then(showId => {
      let charPromises = [];
      show.characters.forEach(char => {
        // this is iterating through the character data and pushing them into a new array with the data requested in the table/schema
        charPromises.push(
          createChar(knex, {
            char_name: char.char_name,
            show_name: char.show_name,
            ethnicity: char.ethnicity,
            name: char.name,
            show_id: showId[0] // giving me a link to the primary key of the shows
          })
        );
      });
      return Promise.all(charPromises);
    });
};

const createChar = (knex, char) => {
  return knex("characters").insert(char);
};

exports.seed = knex => {
  return knex("characters")
    .del()
    .then(() => knex("shows").del())
    .then(() => {
      let showPromises = [];
      showData.forEach(show => {
        showPromises.push(createShows(knex, show));
      });
      return Promise.all(showPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
