import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddNoteButton = () => {
  return (
    <button className="add">
      <FontAwesomeIcon icon={faPlus} /> Ajouter une Note
    </button>
  );
};

export default AddNoteButton;
