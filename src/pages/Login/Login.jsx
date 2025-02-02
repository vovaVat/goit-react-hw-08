import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";

export default function Login() {
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
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        const info = {
          email: values.email,
          password: values.password,
        };
        dispatch(login(info));
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
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
