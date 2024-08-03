import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [text, setText] = useState({
    login_id: "",
    password: "",
  });

  const onChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };

  const handlesubmit = async (evt) => {
    evt.preventDefault();

    try {
      const url = await axios.post(
        " https://lobster-app-ddwng.ondigitalocean.app/user/login",
        text,
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
        }
      );
      localStorage.setItem("auth", JSON.stringify(url.data.message));
      history("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Login</h1>
        <div className="loginForm">
          <form onSubmit={handlesubmit}>
            <input
              id="email"
              className="form-control"
              type="email"
              name="login_id"
              value={text.login_id}
              placeholder="email_id"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="password"
              value={text.password}
              placeholder="password"
              onChange={onChange}
              className="form-control"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="signup">
          <Link className="link" to="/register">
            Sign-Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
