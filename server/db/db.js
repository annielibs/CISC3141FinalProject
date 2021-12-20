const Sequelize = require("sequelize");
require("dotenv").config(); // requries dotenv
// for process.env.DATABASE_PASS either out password here it make an .env file and place password there/

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// const db = new Sequelize(
//     process.env.DATABASE_NAME,
//     process.env.DATABASE_USER,
//     process.env.DATABASE_PASS,
//     {
//         host: "localhost",
//         dialect: "postgres",
//     }
// );

module.exports = db;
