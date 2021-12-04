const express = require("express");
const {
  getAllDiaries,
  getDiaryByName,
  createSingleDiary,
  deleteSingleDiary,
  updateSingleDiary,
} = require("../controllers/diaryController");

const diaryRouter = express.Router();

// endpoints
diaryRouter.get("/", getAllDiaries);
diaryRouter.get("/:diaryName", getDiaryByName);
diaryRouter.post("/create-diary", createSingleDiary);
diaryRouter.patch("/update-diary/:diaryName", updateSingleDiary);
diaryRouter.delete("/delete-diary/:diaryName", deleteSingleDiary);

module.exports = diaryRouter;
