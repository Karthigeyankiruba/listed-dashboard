import React from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

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

          <form className="form" autoComplete="">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Enter email address"
            />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="password"
              placeholder="Enter Password"
              min={6}
              max={10}
            />
            <p className="forget-password">Forget Password?</p>
            <button onClick={handleClick} className="btn">
              SignIn
            </button>
          </form>

          <p className="register">
            Don’t have an account? <a href="">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
