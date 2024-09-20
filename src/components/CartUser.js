import React, { useState } from "react";
import "../css/CartUser.css";
import avatar from "../img/user.png";
import change from "../img/change.png";
import { useNavigate } from "react-router-dom";

const CartUser = (props) => {
  const navigate = useNavigate(),
    navigateFunc = () => {
      navigate(`/change/:id${props.item.id}`);
    },
    [wrapper, setWrapper] = useState(false),
    item = props.item;

  return (
    <div className="user">
      <img className="user__img" src={avatar} alt="" />
      <div className="user__wrapper">
        <div className="wrapper__name">
          <h3 className="user__name">{item.username}</h3>
          <button
            className="user__change"
            onClick={() => {
              setWrapper(!wrapper);
            }}
          >
            <img className="user__change-img" src={change} alt="" />
          </button>
          {wrapper ? (
            <div className="user__menu">
              <button className="menu__button" onClick={navigateFunc}>
                <p className="menu__button-text">Редактировать</p>
              </button>
              <button
                className="menu__button"
                onClick={() => {
                  props.arhiveFunc(props.item.id);
                }}
              >
                <p className="menu__button-text">Архивировать</p>
              </button>
              <button
                className="menu__button"
                onClick={() => {
                  props.deleteFunc(props.item.id);
                }}
              >
                <p className="menu__button-text">Скрыть</p>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="user__company">{item.company.name}</p>
        <p className="user__city">{item.address.city}</p>
        <p></p>
      </div>
    </div>
  );
};

export default CartUser;
