import "../css/Change.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { changeUser } from "../redux/slices/userSlices";
import { useNavigate } from "react-router-dom";
import comeback from "../img/arrow-left.png";
import ok from "../img/Icon@2x.png";

const Change = () => {
  const { items } = useSelector((state) => {
      return state.user;
    }),
    id = window.location.href.slice(-1),
    element = items?.find((el) => el.id === Number(id)),
    [name, setName] = useState(element?.name),
    [username, setUsername] = useState(element?.username),
    [email, setEmail] = useState(element?.email),
    [city, setCity] = useState(element?.address.city),
    [phone, setPhone] = useState(element?.phone),
    [company, setCompany] = useState(element?.company.name),
    dispatch = useDispatch(),
    navigate = useNavigate(),
    [savePopup, setSavePopup] = useState(false);

  const onChangeInput = (event, setFunction) => {
    setFunction(event.target.value);
  };
  const arr = structuredClone(items);

  const changeSave = () => {
    switch ("") {
      case name:
        break;
      case username:
        break;
      case email:
        break;
      case city:
        break;
      case phone:
        break;
      case company:
        break;
      default:
        const arrRes = arr.map((el) => {
          if (el.id === Number(id)) {
            el.name = name;
            el.username = username;
            el.email = email;
            el.phone = phone;
            el.address.city = city;
            el.company.name = company;
          }

          return el;
        });

        dispatch(changeUser(arrRes));
        navigate("/");
        break;
    }
  };

  return (
    <>
      <div className="comeback">
        <button
          className="comeback__button"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="comeback__img" src={comeback} alt="" />
          <p className="comeback__text">Назад</p>
        </button>
      </div>
      <div className="wrapper">
        <div className="profile">
          <p className="profile__img"></p>
          <h3 className="profile__title">Данные профиля</h3>
          <p className="profile__text">Рабочее пространство</p>
          <p className="profile__text">Приватность</p>
          <p className="profile__text">Безопасность</p>
        </div>
        <div className="change">
          <h3 className="change__title">Данные профиля</h3>
          <div className="change__wrapper">
            <p className="change__text">Имя</p>
            <input
              type="text"
              value={name}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setName);
              }}
              placeholder="Name"
            ></input>
            <p className="change__text">Никнейм</p>
            <input
              type="text"
              value={username}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setUsername);
              }}
              placeholder="Username"
            ></input>
            <p className="change__text">Почты</p>
            <input
              type="text"
              value={email}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setEmail);
              }}
              placeholder="Email"
            ></input>
            <p className="change__text">Город</p>
            <input
              type="text"
              value={city}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setCity);
              }}
              placeholder="City"
            ></input>
            <p className="change__text">Телефон</p>
            <input
              type="text"
              value={phone}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setPhone);
              }}
              placeholder="Phone"
            ></input>
            <p className="change__text">Название компании</p>
            <input
              type="text"
              value={company}
              className="change__input"
              onChange={(event) => {
                onChangeInput(event, setCompany);
              }}
              placeholder="Company"
            ></input>
            <button
              className="change__save"
              onClick={() => {
                setSavePopup(true);

                setTimeout(() => {
                  changeSave();
                }, 4000);
              }}
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
      {savePopup ? (
        <div>
          <div className="save">
            <button
              className="save__button"
              onClick={() => {
                setSavePopup(false);
              }}
            ></button>
            <img className="save__img" src={ok} alt=""></img>
            <p className="save__text">Изменения сохранены!</p>
          </div>
          <div className="opacity"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Change;
