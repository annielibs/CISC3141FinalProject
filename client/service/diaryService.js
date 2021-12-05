const api = require("../api/index.js");

/*
  Client-side serivce class to call backend
*/

class DiaryService {
    createDiary() {
        return api.post("/diaries/create-diary");
    }

    readAllDiaries() {
        return api.get("/diaries/");
    }

    readOneDiary(diaryName) {
        return api.get(`/diaries/:${diaryName}`);
    }

    updateDiary(diaryName) {
        return api.patch(`/diaries/update-diary/:${diaryName}`);
    }

    deleteDiary(diaryName) {
        return api.delete(`/diaries/delete-diary/:${diaryName}`);
    }
}

module.exports = new DiaryService();
