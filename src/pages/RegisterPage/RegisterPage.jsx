import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <RegisterForm />
    </div>
  );
};
