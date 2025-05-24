import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Register</h1>
      <RegistrationForm />
    </div>
  );
};
