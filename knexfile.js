module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost:/kaylas_byob_db",
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds/dev/shows.js"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
