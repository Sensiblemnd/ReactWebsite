import React from "react";
import "./avatar.scss";

export interface AvatarProps {
  imageUrl: string;
  size?: "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size, ...props }) => {
  return (
    <div className={["avatar", `avatar-${size}`].join(" ")} {...props}>
      <img src={imageUrl} alt="" />
    </div>
  );
};
