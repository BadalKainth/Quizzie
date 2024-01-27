import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import classes from "./Auth.module.css";

function Auth() {
  const [authType, setAuthType] = useState("signup");
  event.preventDefault();

  return (
    <form className={classes.Form}>
      <div className={classes.FormContainer}>
        <h1>QUIZZIE</h1>
        <div className={classes.FormType}>
          <button
            onClick={() => setAuthType("signup")}
            className={classes.SignupBtn}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAuthType("login")}
            className={classes.LoginBtn}
          >
            Log In
          </button>
        </div>
        <div className={classes.FormInputs}>
          {authType === "signup" ? (
            <>
              <Signup />
              <button className={classes.RegisterBtn}>Sign-Up</button>{" "}
            </>
          ) : (
            <>
              <Login />
              <button className={classes.RegisterBtn}>LogIn</button>{" "}
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default Auth;
