import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const MenuItem = ({ icon, title }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-left">
        <FontAwesomeIcon icon={icon} />
        <h3>{title}</h3>
      </div>

      <FontAwesomeIcon icon={faEllipsisH} />
    </div>
  );
};

export default MenuItem;
