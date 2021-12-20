const Sequelize = require("sequelize");
const db = require("../db");

const Diaries = db.define("diaries", {
  diary_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  diary_description: {
    type: Sequelize.STRING,
    defaultValue: "Diary description",
  },
});
module.exports = Diaries;
