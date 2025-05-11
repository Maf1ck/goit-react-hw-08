import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^\+?[0-9\s-()]+$/,
      "Phone number must contain only digits, spaces, dashes, and parentheses"
    )
    .required("Phone number is required"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            className={css.input}
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.field}>
          <Field
            type="tel"
            name="number"
            placeholder="Phone number"
            className={css.input}
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};
