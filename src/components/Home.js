import "../css/Home.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, fetchUsers } from "../redux/slices/userSlices";
import { useEffect } from "react";
import CartUser from "./CartUser";
import CartArchive from "./CartArchive";

import { addArchive } from "../redux/slices/archiveSlices";

const Home = (props) => {
  const { items, status } = useSelector((state) => {
    return state.user;
  });
  console.log(items);

  const { archive } = useSelector((state) => {
    return state.archive;
  });

  const resArchive = structuredClone(archive);
  const resItems = structuredClone(items);

  const dispatch = useDispatch();

  const archiveFunc = (id) => {
    const result = items.filter((el) => {
      return Number(el.id) !== id;
    });
    dispatch(changeUser(result));

    const resultArchive = items.find((el) => {
      return Number(el.id) === id;
    });

    resArchive.push(resultArchive);

    dispatch(addArchive(resArchive));
  };

  const deleteFunc = (id) => {
    const result = items.filter((el) => {
      return Number(el.id) !== id;
    });
    dispatch(changeUser(result));
  };

  const archiveActivate = (id) => {
    const result = archive.filter((el) => {
      return Number(el.id) !== id;
    });
    dispatch(addArchive(result));

    console.log(result);

    const resultItems = archive.find((el) => {
      return Number(el.id) === id;
    });

    resItems.push(resultItems);

    dispatch(changeUser(resItems));
  };

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  useEffect(() => {
    if (props.firstLoading.current) {
      getUsers();
      props.firstLoading.current = false;
    }
  }, []);

  const users = items?.map((obj) => {
    return (
      <CartUser
        key={obj.id}
        item={{ ...obj }}
        deleteFunc={deleteFunc}
        arhiveFunc={archiveFunc}
      />
    );
  });

  const userArchive = archive?.map((obj) => {
    return (
      <CartArchive
        key={obj.id}
        item={{ ...obj }}
        archiveActivate={archiveActivate}
      />
    );
  });

  return (
    <div className="home">
      {status === "loading" ? (
        <div className="loading">
          <p className="loading__text">Идет загрузка...</p>
        </div>
      ) : (
        <div>
          <p className="home__title">Активные</p>
          <div className="home__active">{users}</div>
          <h3 className="home__title">Архив</h3>
          <div className="home__active">{userArchive}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
