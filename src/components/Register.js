import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useNavigate();
  const [text, setText] = useState({
    full_name: "",
    username: "",
    referral_id: "",
    email_id: "",
    country_row_id: "",
    mobile_number: "",
    password: "",
  });

  const onChange = ({ target: { name, value } }) => {
    setText({ ...text, [name]: value });
  };
  const handlesubmit = async (evt) => {
    evt.preventDefault();
    try {
      await axios.post(
        "https://lobster-app-ddwng.ondigitalocean.app/user/register",
        text,
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
        }
      );
      history("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1>Register</h1>
        <div className="registerForm">
          <form onSubmit={handlesubmit}>
            <input
              type="text"
              name="full_name"
              value={text.full_name}
              placeholder="full_name"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="username"
              value={text.username}
              placeholder="username"
              onChange={onChange}
              required
            />
            <input
              type="number"
              name="referral_id"
              value={text.referral_id}
              placeholder="referral_id"
              onChange={onChange}
            />
            <input
              type="email"
              name="email_id"
              value={text.email_id}
              placeholder="email_id"
              onChange={onChange}
              required
            />
            <input
              type="text"
              name="country_row_id"
              value={text.country_row_id}
              placeholder="country"
              onChange={onChange}
              required
            />
            <input
              type="number"
              name="mobile_number"
              value={text.mobile_number}
              placeholder="mobile_number"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="password"
              value={text.password}
              placeholder="password"
              onChange={onChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
