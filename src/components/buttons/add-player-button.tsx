import React, { useState, useEffect } from "react";
import Fab from "@material-ui/core/Fab";

import "./add-player-button.scss";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PersonIcon from "@material-ui/icons/Person";
const AddPlayerButton = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    count < 10 && setCount((prevCount) => prevCount + 1);
  };
  const handleSubtract = () => {
    count > 0 && setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={"add-players-wrapper"}>
      <div className="add-players-header">
        <PersonIcon />
      </div>
      <div className="add-players-actions">
        Number of players
        <Fab size="small" aria-label="add" component={"button"}>
          <RemoveIcon onClick={handleSubtract} />
        </Fab>
        {count}
        <Fab size="small" aria-label="add" component={"button"}>
          <AddIcon onClick={handleAdd} />
        </Fab>
      </div>
    </div>
  );
};

export default AddPlayerButton;
