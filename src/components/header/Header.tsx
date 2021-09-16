import React from "react";

import NetworkAlert from "../common/network-alert";
import ThemeButton from "../common/theme-button";
import "./header.css";

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => (
  <header className="header" data-testid="Header">
    <div className="header-nav">
      <nav>
        <ul>
          <li>
            <a href="#1">About</a>
          </li>
          <li>
            <a href="#2">Issues</a>
          </li>
          <li>
            <a href="#3">Documentation</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header-status">
      <ThemeButton />
      <NetworkAlert />
    </div>
  </header>
);
