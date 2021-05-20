import React from "react";
import "./button.scss";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button type="button" className={"button"} {...props}>
      {label}
    </button>
  );
};
