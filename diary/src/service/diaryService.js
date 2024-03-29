const api = require("../api/index.js");

/*
  Client-side serivce class to call backend
*/

class DiaryService {
  createDiary(diary) {
    return api.post("/diaries/create-diary", diary);
  }

  readAllDiaries() {
    return api.get("/diaries/");
  }

  readOneDiary(diaryName) {
    return api.get(`/diaries/${diaryName}`);
  }

  updateDiary(diaryName, updatedDiary) {
    return api.patch(`/diaries/update-diary/${diaryName}`, updatedDiary);
  }

  deleteDiary(diaryName) {
    return api.delete(`/diaries/delete-diary/${diaryName}`);
  }
}

export default new DiaryService();
