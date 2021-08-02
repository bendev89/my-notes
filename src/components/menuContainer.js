import React from "react";
import MenuItem from "./menuItem";
import {
  faStickyNote,
  faCheck,
  faBook,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import AddNoteButton from "./addNoteButton";

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <AddNoteButton />
      <MenuItem icon={faStickyNote} title="Mes notes" />
      <MenuItem icon={faCheck} title="To-do" />
      <MenuItem icon={faBook} title="Liste de lecture" />
      <MenuItem icon={faProjectDiagram} title="Projets" />
    </div>
  );
};

export default MenuContainer;
