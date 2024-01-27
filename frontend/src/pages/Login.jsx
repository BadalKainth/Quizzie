import classes from "./Login.module.css";

function Login() {
  return (
    <div className={classes.LogInCardContainer}>
      <div className={classes.FormLabels}>
        <label for="email">Email: </label>
        <input type="email" id="email" name="email" />
      </div>
      <div className={classes.FormLabels}>
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>
    </div>
  );
}

export default Login;
