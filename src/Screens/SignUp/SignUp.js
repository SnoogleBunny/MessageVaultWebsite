import React, { useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";
import "../../App.css";
import logo from "../../assets/11.png";
import "./SignUp.css";
import Footer from "../shared-components/Footer/Footer";
import Button from "../shared-components/Button/Button";
import Axios from "axios";

//  React component re-render when observables change.
const SignUp = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { getId, setId, setUser, getUser } = useStore();

  const handleClick = async (event) => {
    // update id object from store state
    setId(new Date().getTime());
    // update user object from store state
    setUser(
      Math.random().toString(36).substring(7),
      Math.random().toString(36).slice(3, 8)
    );
    try {
      await Axios.post(
        "https://cors-anywhere.herokuapp.com/https://the-message-vault.herokuapp.com/api/auth/login",
        {
          email: email,
          password: password,
        }
      ).then((res) => {
        if (res.data < 20) {
          setError(res.data);
        }
        if (res.data.length() > 20) {
          //const savedUser = res.data;
        }
      });
    } catch (err) {
      console.log(err);
    }
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-card-container">
          <img src={logo} alt="Login / Register card logo" />
          <h2>Login / Register</h2>
          {/* you can remove below 3 lines it's only for demo purpose I have printed so whenever you click on sign up button I am updating states*/}
          <h3>Id : {getId}</h3>
          <h3>username : {getUser.name || ""}</h3>
          <h3>userId : {getUser.userId || ""}</h3>
          <form>
            <p style={{ color: "red" }}>{error}</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              minLength="8"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--primary"
              type="submit"
              onClick={handleClick}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
});

export default SignUp;
