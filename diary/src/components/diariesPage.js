import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryService from "../service/diaryService.js";
import "../styles/Diary.css";
import diaryImg from "../assets/diary.jpg";

// card display
const Diary = ({ diary }) => {
  return (
    <div className="diary-card-container">
      <div className="diary-image-container">
        <img src={diaryImg} alt="diary-image"></img>
      </div>
      <div className="diary-title">
        <h3>{diary.diary_name}</h3>
      </div>
      <div className="diary-description">
        <p>This is the decription of the diary</p>
      </div>
      <Link to={"../Entries"} className="diary-card-button">
        <button>View Entries</button>
      </Link>
    </div>
  );
};

const DiaryList = ({ diaries }) => {
  return (
    <div className="diary-card-list">
      {diaries.map((diary) => {
        console.log(diary);
        return <Diary diary={diary} />;
      })}
    </div>
  );
};

// main display component
const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    DiaryService.readAllDiaries()
      .then((diaries) => {
        setDiaries(diaries.data);
        console.log(diaries.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="diary-hub">
      <h1 className="diary-hub-heading">Diaries</h1>
      <DiaryList diaries={diaries} />
    </div>
  );
};

export default DiaryPage;
