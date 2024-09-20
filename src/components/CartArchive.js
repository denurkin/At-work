import React, { useState } from "react";
import "../css/CartArchive.css";
import avatar from "../img/userArchive.png";
import change from "../img/change.png";

const CartArchive = (props) => {
  const [wrapper, setWrapper] = useState(false),
    item = props.item;

  return (
    <div className="archive">
      <img className="archive__img" src={avatar} alt="" />
      <div className="archive__wrapper">
        <div className="wrapper__archive">
          <h3 className="archive__name">{item.username}</h3>
          <button
            className="archive__change"
            onClick={() => {
              setWrapper(!wrapper);
            }}
          >
            <img className="archive__change-img" src={change} alt="" />
          </button>
          {wrapper ? (
            <div className="archive__menu">
              <button
                className="menu__button-archive"
                onClick={() => {
                  props.archiveActivate(props.item.id);
                }}
              >
                <p className="menu__button-textArchive">Активировать</p>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="archive__company">{item.company.name}</p>
        <p className="archive__city">{item.address.city}</p>
        <p></p>
      </div>
    </div>
  );
};

export default CartArchive;
