import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>
        Welcome, <span className={css.name}>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
};
