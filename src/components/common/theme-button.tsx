import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";

import { motion } from "framer-motion";
import BrightnessHigh from "@material-ui/icons/BrightnessHigh";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const ThemeButton = () => {
  const { theme, dispatch } = useContext(AppContext);

  const changeTheme = () => {
    dispatch &&
      dispatch({
        type: "TOGGLE_THEME",
      });
  };

  return (
    <IconButton className="theme-button" type="button" onClick={changeTheme}>
      <motion.span
        title="Light Mode"
        className="theme-button-icon"
        animate={{
          opacity: theme === "dark" ? 1 : 0,
          zIndex: theme === "dark" ? 1 : 0,
        }}
      >
        <BrightnessHigh />
      </motion.span>
      <motion.span
        className="theme-button-icon"
        title="Dark Mode"
        animate={{
          opacity: theme === "light" ? 1 : 0,
          zIndex: theme === "light" ? 1 : 0,
        }}
      >
        <Brightness4Icon />
      </motion.span>
    </IconButton>
  );
};

export default ThemeButton;
