// Update with your config settings.

module.exports = {

  development: {
    client: "postgresql",
    connection:
      "postgresql:///memory"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};
