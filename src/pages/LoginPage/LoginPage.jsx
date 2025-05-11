import { LoginForm } from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Log In</h1>
      <LoginForm />
    </div>
  );
};
