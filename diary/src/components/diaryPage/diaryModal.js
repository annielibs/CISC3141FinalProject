import React, { useState } from "react";
import DiaryService from "../../service/diaryService";
import "../../styles/DiaryStyles/DiaryModal.css";

const DiaryForm = ({ name, nameHandler, description, descriptionHandler, formHandler }) => {
  return (
    <div className="modal-form-container">
      <form className="modal-form" onSubmit={formHandler}>
        <h2 className="diary-modal-header">Create A Diary</h2>
        <label className="diary-name-label">
          Diary Name:
          <input
            className="diary-name-input"
            type="text"
            value={name}
            onChange={nameHandler}
            placeholder="Diary name..."
          />
        </label>
        <label className="diary-description-label">
          Diary Description:
          <textarea
            rows="5"
            value={description}
            onChange={descriptionHandler}
            className="diary-description-input"
            placeholder="Diary description..."
          />
        </label>
        <button className="diary-modal-btn" type="submit">
          Save Diary
        </button>
      </form>
    </div>
  );
};

// specialized modal component to handle New Diary creation form
const DiaryModal = () => {
  const [diaryName, setDiaryName] = useState("");
  const [diaryDescription, setDiaryDescription] = useState("");

  const nameHandler = (event) => {
    setDiaryName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDiaryDescription(event.target.value);
  };

  const formSubmitHandler = (event) => {
    const newDiary = {
      diary_name: diaryName,
    };

    // POST new diary
    DiaryService.createDiary(newDiary)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal-display">
      <DiaryForm
        name={diaryName}
        nameHandler={nameHandler}
        description={diaryDescription}
        descriptionHandler={descriptionHandler}
        formHandler={formSubmitHandler}
      />
    </div>
  );
};

export default DiaryModal;
