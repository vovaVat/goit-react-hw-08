import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import style from "./ContactForm.module.css";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!!!")
      .max(50, "Too Long!!!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!!!")
      .max(50, "Too Long!!!")
      .required("Required"),
  });

  return (
    <div className={style.contain}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <div className={style.inputContain}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={style.inputContain}>
            <label htmlFor={numberId}>Number</label>
            <Field type="tel" name="number" id={numberId} />
            <ErrorMessage
              name="number"
              component="div"
              className={style.message}
            />
          </div>

          <button type="submit" className={style.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
