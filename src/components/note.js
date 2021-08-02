import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note" key={note.id}>
      <span className="note-date">31 Juil</span>
      <h4 className="note-title">{note.title}</h4>
      <p className="note-content">{note.content}</p>
    </div>
  );
};

export default Note;
