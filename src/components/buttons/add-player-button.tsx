import React from "react";
import Fab from "@material-ui/core/Fab";

import "./add-player-button.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PersonIcon from "@material-ui/icons/Person";
const AddPlayerButton = () => {
  return (
    <div className={"add-players-wrapper"}>
      <div className="add-players-header">
        <PersonIcon />
      </div>
      <div className="add-players-actions">
        Number of players
        <Fab size="small" aria-label="add" component={"button"}>
          <RemoveIcon />
        </Fab>
        {0}
        <Fab size="small" aria-label="add" component={"button"}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default AddPlayerButton;
