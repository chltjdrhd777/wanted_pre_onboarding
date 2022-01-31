const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  dev: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "submit",
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: false,
  },
  prod: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "submit",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  },
};
