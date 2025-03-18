import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { register } from "../actions/auth.js";

const Register = () => {
  // const form = useRef();

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
/*

export default class Register extends React.Component {

    render() {
      const form = useRef();
      const checkBtn = useRef();
  
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const[successful, setSuccessful] = useState(false);
  
      const { message } = useSelector(state => state.message);
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
  
        setSuccessful(false);
  
        form.current.validateAll();
  
        if (checkBtn.current.context._errors.length === 0) {
          dispatch(register(username, email, password))
            .then(() => {
              setSuccessful(true);
            })
            .catch(() => {
              setSuccessful(false);
            });
        }
      };

      return (
        <div className="col-md-12">
          <div className="card card-container">
            <img
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
              alt="profile-img"
              className="profile-img-card"
            />
    
            <Form onSubmit={handleRegister} ref={form}>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
    
                  <div className="form-group">
                    <button className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
              )}
    
              {message && (
                <div className="form-group">
                  <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      );
    }
  };
  
  // export default Register;

*/
