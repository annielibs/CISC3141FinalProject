const express = require("express");
const {
  getAllDiaries,
  createSingleDiary,
  deleteSingleDiary,
  updateSingleDiary,
} = require("../controllers/diaryController");

const diaryRouter = express.Router();

// endpoints
diaryRouter.get("/", getAllDiaries);
diaryRouter.post("/create-diary", createSingleDiary);
diaryRouter.patch("/update-diary/:diaryName/:newDiaryName", updateSingleDiary);
diaryRouter.delete("/delete-diary/:diaryName", deleteSingleDiary);

module.exports = diaryRouter;
