import React from "react";
import "../../styles/DiaryStyles/DiaryModal.css";

const DiaryForm = ({
  name,
  nameHandler,
  description,
  descriptionHandler,
  formHandler,
  btnText,
  headerText,
}) => {
  return (
    <div className="modal-form-container">
      <form className="modal-form" onSubmit={formHandler}>
        <h2 className="diary-modal-header">{headerText}</h2>
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
          {btnText}
        </button>
      </form>
    </div>
  );
};

// specialized modal component to handle New Diary creation form
const DiaryModal = ({
  modalClassName,
  formHandler,
  diaryName,
  nameHandler,
  diaryDescription,
  descriptionHandler,
  buttonText,
  headerText,
}) => {
  return (
    <div className={modalClassName}>
      <DiaryForm
        name={diaryName}
        nameHandler={nameHandler}
        description={diaryDescription}
        descriptionHandler={descriptionHandler}
        formHandler={formHandler}
        btnText={buttonText}
        headerText={headerText}
      />
    </div>
  );
};

export default DiaryModal;
