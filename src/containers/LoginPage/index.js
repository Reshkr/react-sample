import React, { Component } from "react";
import "./Loginpage.css";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

class LoginPage extends Component {
  render() {
  return (
    <nav>
      <div className="LoginPage">
        <div className="LoginPage-loginback">
          <div className="LoginPage-login">
            <h>LOGIN</h>
          </div>
          <Input placeholderValue="Username" inputType="text" />
          <Input placeholderValue="Password" inputType="password" />
          <Link to="dashboard" style={{ textDecoration: "none" }}>
            <Button buttonText="SUBMIT" />
          </Link>
        </div>
      </div>
    </nav>
  );
  }
}

export default LoginPage;
