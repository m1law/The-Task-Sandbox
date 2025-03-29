import React from "react";
import { useDispatch } from "react-redux";
import { create } from "../actions/task.js";

const Create = () => {
  // put a useState here for storing the actual description of a task
  const dispatch = useDispatch();
  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      create("If you can see this task, the message has made it successfully.")
    );
  };
  return (
    <div className="card card-container">
      <button className="btn btn-primary" onClick={handleCreate}>
        Click me to make a task!
      </button>
    </div>
  );
};

export default Create;
