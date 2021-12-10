const api = require("axios");

const port = 5001; // change to correct port

const instance = axios.create({
  baseURL: `http://localhost:${port}/api`,
  headers: { "Content-type": "application/json" },
});

module.exports = instance;
