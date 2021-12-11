const axios = require("axios");

const instance = axios.create({
  baseURL: `https://jurnl-application.herokuapp.com/api`,
  headers: { "Content-type": "application/json" },
});

module.exports = instance;
