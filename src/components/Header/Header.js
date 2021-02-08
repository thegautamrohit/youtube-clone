import React, { useState } from "react";
import "../Header/Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import Avatar from "@material-ui/core/Avatar";

function Header({ onFormSubmit }) {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(inputSearch);
    console.log(inputSearch);
  };

  return (
    <div className="header">
      <div className="Header__left">
        <MenuIcon />
        <a href="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="YouTube"
          />
        </a>
      </div>

      <form className="header__input" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <SearchIcon
          className="header__inputButton"
          type="submit"
          onClick={handleSubmit}
        />
      </form>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsActiveIcon className="header__icon" />
        <Avatar
          src="https://avatars2.githubusercontent.com/u/69152777?s=460&u=6f9aae6de8cbc8f1940dcca6be120f988c1a53a8&v=4"
          alt="thegautamrohit"
        />
      </div>
    </div>
  );
}

export default Header;
