import React from "react";
import classes from "./Signup.module.css";

function Signup() {
  return (
    <div className={classes.SignUpCardContainer}>
      <div className={classes.FormLabels}>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" />
      </div>
      <div className={classes.FormLabels}>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={classes.FormLabels}>
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>
      <div className={classes.FormLabels}>
        <label for="confirm password">Confirm Password: </label>
        <input type="password" id="confirm password" name="confirm password" />
      </div>
    </div>
  );
}

export default Signup;
