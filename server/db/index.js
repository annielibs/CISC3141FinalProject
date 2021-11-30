const express = require("express");
const db = require("./db.js");
require("dotenv").config();

// server port
const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json()); // work with JSON data

// test db connection and start server
db.authenticate()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(PORT, () => console.log(`Connected to server on Port: ${PORT}`));
  })
  .catch((err) => console.log("Unable to connect", err.message));

// routers to endpoints
const diaryRouter = require("./routes/diaryRoutes");
// const entriesRouter = require("./routes/entriesRoutes");
// const userRouter = require("./routes/userRoutes");

app.use("/api/diaries", diaryRouter);
// app.use("/api/entries", entriesRouter);
// app.use("/api/users", userRouter);
