const DiaryService = require("./service/diaryService.js");

document.addEventListener("DOMContentLoaded", (event) => {
    displayData();
});

function displayData() {
    DiaryService.readAllDiaries()
        .then((res) => res.json())
        .then((data) => console.log(data));
}
