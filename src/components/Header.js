import React from "react";
import "../css/Header.css";
import avatar from "../img/user.png";
import logoCompany from "../img/logo-sign.png";
import like from "../img/ic_baseline-favorite-border.png";
import notification from "../img/mi_notification.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logoCompany} />
      <p className="header__title">
        at-<span className="header__title-bold">work</span>
      </p>
      <img className="header__like" src={like} />
      <img className="header__notification" src={notification} />
      <img className="header__user" src={avatar} />
      <p className="header__name">user</p>
    </div>
  );
};

export default Header;
