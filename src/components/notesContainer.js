import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Note from "./note";

const NotesContainer = ({ notes }) => {
  return (
    <div className="notes-container">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Rechercher" />
      </div>
      {notes.map((note) => (
        <Note note={note} />
      ))}

      {/* <Note />
      <Note />
      <Note />
      <Note /> */}
    </div>
  );
};

export default NotesContainer;
