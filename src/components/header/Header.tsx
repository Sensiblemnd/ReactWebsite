import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/experiments">CSS Experiments</Link>
          </li>
          <li>
            <Link to="/habits">About</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
          <li>
            <Link to="dashboard">dashboard</Link>
          </li>
          <li>
            <Link to="history">history</Link>
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
