import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    transform: "translate(-50%, -50%)",
    width: "40%",
  },
};

function NewTaskModal(props) {

  const [TaskLabel, setTaskLabel] = useState("");
  const [Pricing, setPricing] = useState("");
  const [buttonText, setbuttonText] = useState("Add to List");
  
  const Validate = () => {
    return Pricing.length > 0 && !isNaN(Pricing) && TaskLabel.length > 0;
  };

  const AddTask = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      `http://localhost:5000/addTask`,
      requestOptions
    );
    const result = await response.json();

    if (response.status === 202) {
      console.log(result);
      props.setIsLoading(true);
      props.closeModal();
    } else {
      setbuttonText("Something went wrong please try again");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      tasklabel: TaskLabel,
      pricing: Pricing,
    };

    AddTask(data);
  };

  return (
    <Modal
      ariaHideApp={true}
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="add task form"
    >
      <button
        onClick={props.closeModal}
        className="btn btn-danger btn-sm float-right"
      >
        <i className="fa fa-times-circle" aria-hidden="true"></i>
      </button>
      <h2 className="text-center">Add New Task</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="tasklabel" className="form-label">
            Task Label
          </label>
          <input
            type="text"
            className="form-control"
            id="tasklabel"
            value={TaskLabel}
            onChange={(e) => setTaskLabel(e.target.value)}
            placeholder="gardening"
          />
        </div>
        <label htmlFor="pricing" className="form-label">
          Pricing per Hour
        </label>
        <div className="input-group mb-3 flex-nowrap">
          <span className="input-group-text" id="pricing">
            $
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="4"
            value={Pricing}
            onChange={(e) => setPricing(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary px-5"
            disabled={!Validate()}
          >
            {buttonText}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default NewTaskModal;
