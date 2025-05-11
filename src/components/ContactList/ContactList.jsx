import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { selectContacts } from "../../redux/contacts/selectors";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      {filteredContacts.length === 0 ? (
        <p className={css.message}>No contacts found</p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className={css.item}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
