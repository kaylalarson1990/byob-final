module.exports = {
  development: {
    client: "pg",
    //connection needs to link to the database created
    connection: "postgres://localhost:/kaylas_byob_db",
    migrations: {
      directory: "./migrations"
    },
    useNullAsDefault: true
  },
  seeds: {
    directory: "./seeds/dev"
  },
  // production is for heroku
  // the DATABASE_URL was created for us. This configuration will now tell Heroku to connect to postgres through the addon we installed. The ?ssl=true to the end of our connection string is because the Heroku Postgres addon requires it.
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: "./migrations"
    },
    useNullAsDefault: true
  },
  seeds: {
    directory: "./seeds/dev"
  }
};
