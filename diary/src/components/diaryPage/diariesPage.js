import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiaryService from "../../service/diaryService.js";
import DiaryModal from "./diaryModal.js";
import diaryImg from "../../assets/diary.jpg";
import "../../styles/DiaryStyles/DiaryPage.css";
import editLogo from "../../assets/Edit-icon.png";

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

const DeleteDiaryButton = ({ btnClassName, deleteHandler, diaryName }) => {
  return (
    <>
      <button className={btnClassName} onClick={() => deleteHandler(diaryName)} type="button">
        X
      </button>
    </>
  );
};

const UpdateDiaryButton = ({ btnClassName, updateHandler, diaryName }) => {
  return (
    <>
      <button className={btnClassName} onClick={() => updateHandler(diaryName)} type="button">
        <img src={editLogo} alt="edit-icon"></img>
      </button>
    </>
  );
};

// Diary card component
const Diary = ({ diary, canEdit, deleteBtnHandler, updateHandler }) => {
  const diaryId = diary.id;
  const diaryName = diary.diary_name;
  const description = diary.diary_description;

  const deleteBtnClassName = canEdit ? "delete-diary-btn" : "delete-diary-btn-hidden";
  const updateBtnClassName = canEdit ? "update-diary-btn" : "update-diary-btn-hidden";

  return (
    <div className="diary-card-container">
      <DeleteDiaryButton
        btnClassName={deleteBtnClassName}
        deleteHandler={deleteBtnHandler}
        diaryName={diaryName}
      />
      <UpdateDiaryButton
        btnClassName={updateBtnClassName}
        updateHandler={updateHandler}
        diaryName={diaryName}
      />
      <div className="diary-image-container">
        <img src={diaryImg} alt="diary"></img>
      </div>
      <div className="diary-title">
        <h3>{diaryName}</h3>
      </div>
      <div className="diary-description">
        <p>{description}</p>
      </div>
      <Link to={`/${diaryId}/entries-page`} className="diary-card-button">
        View Entries
      </Link>
    </div>
  );
};

// Diary card grouping component
const DiaryList = ({ diaries, canEdit, deleteHandler, updateHandler }) => {
  return (
    <div className="diary-card-list">
      {diaries.map((diary) => {
        return (
          <Diary
            key={diary.id}
            diary={diary}
            canEdit={canEdit}
            deleteBtnHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        );
      })}
    </div>
  );
};

// Diary page display component
const DiaryPage = () => {
  const [diaries, setDiaries] = useState([]);
  const [isVisibleModal, setVisibleModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isEditable, setEditable] = useState(false);
  const [selectedDiary, setSelectedDiary] = useState("");
  const [newDiaryName, setNewDiaryName] = useState("");
  const [diaryDescription, setDiaryDescription] = useState("");

  // fetch all diaries from database - no page reload
  useEffect(() => {
    DiaryService.readAllDiaries()
      .then((diaryList) => {
        console.log("useeffect" + diaryList.data);
        setDiaries(diaryList.data);
      })
      .catch((err) => console.log(err));
  }, [diaries]);

  // modal name and description input
  const nameHandler = (event) => {
    setNewDiaryName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDiaryDescription(event.target.value);
  };

  // event handler for "Create a Diary" button
  const createButtonHandler = (event) => {
    setVisibleModal(true);
  };

  const updateButtonHandler = (diaryName) => {
    setSelectedDiary(diaryName);
    setUpdate(true);
  };

  const editButtonHandler = (event) => {
    setEditable(!isEditable);
  };

  // api service calls
  const deleteHandler = (diaryName) => {
    DiaryService.deleteDiary(diaryName)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateFormHandler = (event) => {
    event.preventDefault();
    const updatedDiary = { diary_name: newDiaryName, diary_description: diaryDescription };

    DiaryService.updateDiary(selectedDiary, updatedDiary)
      .then((res) => console.log(res))
      .then((err) => console.log(err));

    setDiaries((diaries) => [...diaries]);
    setNewDiaryName("");
    setDiaryDescription("");
    setUpdate(false);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newDiary = {
      diary_name: newDiaryName,
      diary_description: diaryDescription,
    };

    // POST new diary
    DiaryService.createDiary(newDiary)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setDiaries((diaries) => [...diaries, newDiary]);
    setNewDiaryName("");
    setDiaryDescription("");
    setVisibleModal(false);
  };

  return (
    <div className="diary-hub">
      <h1 className="diary-hub-heading">Diaries</h1>
      <div className="modal-popup-btn-container">
        <CreateDiaryButton createBtnHandler={createButtonHandler} />
        <EditDiaryButton editHandler={editButtonHandler} />
      </div>
      <DiaryList
        diaries={diaries}
        canEdit={isEditable}
        deleteHandler={deleteHandler}
        updateHandler={updateButtonHandler}
      />
      {isVisibleModal ? (
        <DiaryModal
          modalClassName={"modal-display"}
          formHandler={formSubmitHandler}
          diaryName={newDiaryName}
          nameHandler={nameHandler}
          diaryDescription={diaryDescription}
          descriptionHandler={descriptionHandler}
          buttonText={"Save Diary"}
          headerText={"Create New Diary"}
        />
      ) : (
        <DiaryModal
          modalClassName={"modal-display-none"}
          formHandler={formSubmitHandler}
          diaryName={newDiaryName}
          nameHandler={nameHandler}
          diaryDescription={diaryDescription}
          descriptionHandler={descriptionHandler}
          buttonText={"Save Diary"}
          headerText={"Create New Diary"}
        />
      )}
      {update ? (
        <DiaryModal
          modalClassName={"modal-display"}
          formHandler={updateFormHandler}
          diaryName={newDiaryName}
          nameHandler={nameHandler}
          diaryDescription={diaryDescription}
          descriptionHandler={descriptionHandler}
          buttonText={"Save Updates"}
          headerText={"Update Diary"}
        />
      ) : (
        <DiaryModal
          modalClassName={"modal-display-none"}
          formHandler={updateFormHandler}
          diaryName={newDiaryName}
          nameHandler={nameHandler}
          diaryDescription={diaryDescription}
          descriptionHandler={descriptionHandler}
          buttonText={"Save Updates"}
          headerText={"Update Diary"}
        />
      )}
    </div>
  );
};

export default DiaryPage;
