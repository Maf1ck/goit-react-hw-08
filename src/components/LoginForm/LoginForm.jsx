import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className={css.input}
          />
          <ErrorMessage name="email" component="div" className={css.error} />
        </div>

        <div className={css.field}>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className={css.input}
          />
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};
