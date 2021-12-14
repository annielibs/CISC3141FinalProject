const express = require("express");
const db = require("./db/index");
require("dotenv").config();
const cors = require("cors");

// server port
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json()); // work with JSON data

// test db connection and start server
db.authenticate()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(PORT, () => console.log(`Connected to server on Port: ${PORT}`));
  })
  .catch((err) => console.log("Unable to connect", err.message));

// routers to endpoints
const diaryRouter = require("./api/routes/diaryRoutes");
const entriesRouter = require("./api/routes/entriesRoutes");
const userRouter = require("./api/routes/userRoutes");
const authRouter = require("./api/routes/authRoutes");

app.use("/api/diaries", diaryRouter);
app.use("/api/entries", entriesRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

const syncDb = () => db.sync({ alter: true });
//use force:true if you want to clear the database tables
syncDb();