import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import { Filter } from "../../components/Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import css from "./ContactsPage.module.css";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {isLoading && <p className={css.loading}>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};
