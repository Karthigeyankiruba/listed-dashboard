import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { schema } from "../../schemas";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    // console.log(values);
    // console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    navigate("/dashboard");
  };
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit,
  });

  return (
    <div className="login">
      <div className="board">Board.</div>
      <div className="signIn">
        <div className="wrapper">
          <div className="title">
            <h1 className="title-signin">Sign In</h1>
            <p className="desc">Sign in to your account</p>
          </div>
          <div className="socialLinks">
            <div className="google">
              <img
                className="img"
                src="https://img.icons8.com/color/512/google-logo.png"
                alt="Google"
              />
              <div className="name">Sign in with Google</div>
            </div>
            <div className="apple">
              <img
                className="img"
                src="https://img.icons8.com/color/512/mac-os.png"
                alt="apple"
              />
              <div className="name">Sign in with Apple</div>
            </div>
          </div>

          <form className="form" autoComplete="off" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              // className="input"
              type="email"
              placeholder="Enter email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? "input-error" : "input"
              }
            />
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}

            <p className="forget-password">Forget Password?</p>
            <button disabled={isSubmitting} type="submit" className="btn">
              SignIn
            </button>
          </form>

          <p className="register">
            Don’t have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
