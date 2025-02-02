import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";

export default function Register() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be at least 6 characters long"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", name: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const info = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        dispatch(register(info));
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <div>
            <Field type="email" name="email" placeholder="Email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
