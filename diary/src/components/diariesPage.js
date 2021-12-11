import React, { useState, useEffect } from "react";
import DiaryService from "../service/diaryService.js";

const Diary = ({ diary }) => {
  return <div>{diary}</div>;
};

const DiaryList = ({ diaries }) => {
  return diaries.map((diary) => {
    return <Diary diary={diary} />;
  });
};

const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);

  DiaryService.readAllDiaries()
    .then((diaries) => console.log(diaries))
    .catch((err) => console.log(err));

  return (
    <div className="diary-hub">
      <DiaryList diaries={diaries} />
    </div>
  );
};

export default DiaryPage;
