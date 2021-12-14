import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryService from "../../service/diaryService.js";
import DiaryModal from "./diaryModal.js";
import diaryImg from "../../assets/diary.jpg";
import "../../styles/DiaryStyles/DiaryPage.css";

// Button component opens Modal Form to create new Diary
const CreateDiaryButton = ({ createBtnHandler }) => {
  return (
    <>
      <button className="diary-modal-popup-btn" onClick={createBtnHandler} type="button">
        Create a Diary
      </button>
    </>
  );
};

const EditDiaryButton = ({ editHandler }) => {
  return (
    <>
      <button className="edit-diary-btn" onClick={editHandler} type="button">
        Edit
      </button>
    </>
  );
};

const DeleteDiaryButton = ({ btnClassName, deleteHandler }) => {
  return (
    <>
      <button className={btnClassName} onClick={deleteHandler} type="button">
        X
      </button>
    </>
  );
};

// Diary card component
const Diary = ({ diary, canEdit, deleteBtnHandler }) => {
  const diaryId = diary.id;
  const diaryName = diary.diary_name;

  const btnClassName = canEdit ? "delete-diary-btn" : "delete-diary-btn-hidden";
  const deleteDiary = () => {
    deleteBtnHandler(diaryName);
  };

  return (
    <div className="diary-card-container">
      <DeleteDiaryButton btnClassName={btnClassName} deleteHandler={deleteDiary} />
      <div className="diary-image-container">
        <img src={diaryImg} alt="diary"></img>
      </div>
      <div className="diary-title">
        <h3>{diaryName}</h3>
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
const DiaryList = ({ diaries, canEdit, deleteHandler }) => {
  return (
    <div className="diary-card-list">
      {diaries.map((diary) => {
        console.log("reloading List");
        return <Diary diary={diary} canEdit={canEdit} deleteBtnHandler={deleteHandler} />;
      })}
    </div>
  );
};

// Diary page display component
const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [isEditable, setEditable] = useState(false);

  // event handler for "Create a Diary" button
  const createButtonHandler = (event) => {
    setVisibleModal(true);
    console.log("popup");
  };

  const editButtonHandler = (event) => {
    setEditable(!isEditable);
    console.log("show delete buttons");
  };

  const deleteButtonHandler = (diaryName) => {
    DiaryService.deleteDiary(diaryName)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
      {() => {
        if (isVisibleModal) return <DiaryModal />;
      }}
      <div className="modal-popup-btn-container">
        <CreateDiaryButton createBtnHandler={createButtonHandler} />
        <EditDiaryButton editHandler={editButtonHandler} />
      </div>
      <DiaryList diaries={diaries} canEdit={isEditable} deleteHandler={deleteButtonHandler} />
    </div>
  );
};

export default DiaryPage;
