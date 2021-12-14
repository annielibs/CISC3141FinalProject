import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryService from "../../service/diaryService.js";
import DiaryModal from "./diaryModal.js";
import diaryImg from "../../assets/diary.jpg";
import "../../styles/DiaryStyles/DiaryPage.css";

// Button component opens Modal Form to create new Diary
const CreateDiaryButton = ({ createBtnHandler }) => {
  return (
    <div className="modal-popup-btn-container">
      <button className="diary-modal-popup-btn" onClick={createBtnHandler} type="button">
        Create a Diary
      </button>
    </div>
  );
};

// Diary card component
const Diary = ({ diary }) => {
  const diaryId = diary.id;

  return (
    <div className="diary-card-container">
      <div className="diary-image-container">
        <img src={diaryImg} alt="diary"></img>
      </div>
      <div className="diary-title">
        <h3>{diary.diary_name}</h3>
      </div>
      <div className="diary-description">
        <p>This is the decription of the diary</p>
      </div>
      <Link to={`/${diaryId}/entries-page`} className="diary-card-button">
        View Entries
      </Link>
    </div>
  );
};

// Diary card grouping component
const DiaryList = ({ diaries }) => {
  return (
    <div className="diary-card-list">
      {diaries.map((diary) => {
        console.log("reloading List");
        return <Diary diary={diary} />;
      })}
    </div>
  );
};

// Diary page display component
const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);
  const [isVisibleModal, setVisibleModal] = useState(false);

  // event handler for "Create a Diary" button
  const createButtonHandler = (event) => {
    setVisibleModal(true);
    console.log("popup");
  };

  // fetch all diaries from database - no page reload
  useEffect(() => {
    DiaryService.readAllDiaries()
      .then((diaryList) => {
        console.log("useeffect" + diaryList.data);
        setDiaries(diaryList.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="diary-hub">
      <h1 className="diary-hub-heading">Diaries</h1>
      {isVisibleModal ? (
        <DiaryModal />
      ) : (
        <CreateDiaryButton createBtnHandler={createButtonHandler} />
      )}
      <DiaryList diaries={diaries} />
    </div>
  );
};

export default DiaryPage;
