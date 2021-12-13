import React from "react";

// base modal component
const GenericModal = ({ formHandler, isVisible, formChildren, buttonText, formBtnClassName }) => {
  const modalVisibilityClassName = isVisible ? "modal-display" : "modal-display-none";

  return (
    <div className={modalVisibilityClassName}>
      <div className="modal-form-container">
        <form className="modal-form" onSubmit={formHandler}>
          {formChildren}
          <button className={formBtnClassName} type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

// specialized modal component to handle New Diary creation form
const DiaryModal = ({
  formHandler,
  isVisible,
  name,
  nameHandler,
  description,
  descriptionHandler,
}) => {
  const newDiaryFormChildren = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <GenericModal
      formHandler={formHandler}
      isVisible={isVisible}
      formChildren={newDiaryFormChildren()}
      buttonText={"Save Diary"}
      formBtnClassName={"diary-submit-button"}
    />
  );
};

export { DiaryModal };
