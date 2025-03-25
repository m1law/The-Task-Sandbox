import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../actions/auth.js";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(register(username, email, password));
  };

  return (
    <div className="card card-container">
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary btn-block" onClick={handleRegister}>Sign Up</button>
      </div>
    </div>
  );
};

export default Register;
