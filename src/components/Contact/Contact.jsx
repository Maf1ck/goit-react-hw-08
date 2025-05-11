import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <div className={css.info}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
      </div>
      <button type="button" onClick={handleDelete} className={css.button}>
        Delete
      </button>
    </li>
  );
};
