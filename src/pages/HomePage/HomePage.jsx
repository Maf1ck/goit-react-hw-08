import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to Phonebook</h1>
      <p className={css.text}>
        This is a simple phonebook application where you can store and manage
        your contacts. Please register or log in to start using the application.
      </p>
    </div>
  );
};
