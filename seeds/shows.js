let showData = require("../data/shows.js");

const createShows = (knex, show) => {
  return knex("shows")
    .insert(
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
        charPromises.push(
          createChar(knex, {
            char_name: char.char_name,
            ethnicity: char.ethnicity,
            name: char.name,
            show_id: showId[0]
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

// exports.seed = (knex, Promise) => {
//   return knex('characters').del()
//   .then(() => {
//     return knex('shows').del()
//   })
//   .then(() => {
//     return knex('shows').insert(showData)
//   })
//   .then(() => {
//     let charPromises = [];
//     characterData.forEach((char) => {
//       charPromises.push(createChar(knex, char))
//     })
//     return Promise.all(charPromises)
//   })
// }

// const createChar = (knex, char) => {
//   return knex("shows").where("id", char.show_id).first()
//   .then((show) => {
//     return knex("characters").insert({
//       char_name: char.char_name,
//             ethnicity: char.ethnicity,
//             name: char.name,
//             show_id: showId.id
//     })
//   })
// }
