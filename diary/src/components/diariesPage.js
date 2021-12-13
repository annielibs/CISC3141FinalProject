import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryService from "../service/diaryService.js";
import { DiaryModal } from "./modalPopup.js";
import diaryImg from "../assets/diary.jpg";
import "../styles/DiaryStyles/DiaryPage.css";
import "../styles/DiaryStyles/DiaryModal.css";

// Button component opens Modal Form to create new Diary
const CreateDiaryButton = ({ openModalHandler }) => {
  return (
    <button onClick={openModalHandler} type="button">
      Create a Diary
    </button>
  );
};

// Diary card component
const Diary = ({ diary }) => {
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
      <Link to={"../Entries"} className="diary-card-button">
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
  const [diaryName, setDiaryName] = useState("");
  const [diaryDescription, setDiaryDescription] = useState("");

  const nameHandler = (event) => {
    event.preventDefault();
    setDiaryName(event.target.value);
    console.log(event.target.value);
  };

  const descriptionHandler = (event) => {
    event.preventDefault();
    setDiaryDescription(event.target.value);
    console.log(event.target.value);
  };

  // event handler for "Create a Diary" button
  const modalDiaryHandler = (event) => {
    event.preventDefault();
    setVisibleModal(true);
    console.log("popup");
  };

  // event handler Diary Form submission
  const submitDiaryFormHandler = (event) => {
    event.preventDefault();
    const newDiary = {
      diary_name: diaryName,
    };

    DiaryService.createDiary(newDiary)
      .then((res) => {
        setVisibleModal(false);
        console.log("success");
      })
      .catch((err) => {
        console.log("was not able to create diary");
        console.log(err);
      });

    // setDiaryName("");
    // setDiaryDescription("");
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
      <CreateDiaryButton openModalHandler={modalDiaryHandler} />
      <DiaryList diaries={diaries} />
      <DiaryModal
        formHandler={submitDiaryFormHandler}
        isVisible={isVisibleModal}
        name={diaryName}
        nameHandler={nameHandler}
        description={diaryDescription}
        descriptionHandler={descriptionHandler}
      />
    </div>
  );
};

export default DiaryPage;
