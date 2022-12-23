import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="main-login">
      <div className="login-page">
        <h5 style={{ textAlign: "center" }}>Users Login</h5>
        <label>Email</label>
        <br></br>
        <input className="form-control" type={"text"}></input>
        <br></br>
        <label>Password</label>
        <br></br>
        <input className="form-control" type={"password"}></input>
        <br></br>
        <Link className="btn btn-primary btn-sm mt-3" to="/nav/dash">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Login;
