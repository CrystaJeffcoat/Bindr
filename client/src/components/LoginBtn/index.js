import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function LoginBtn(props) {
  const history = useHistory();
  const username = props.userName;
  const password = props.password;

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("/api/user/", {
      method: "put",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(function (response) {
      return response.json();
    });

    history.push("/home");
  }

  const classes = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  return (
    <Button
      m= {0}
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      className={classes.submit}
      onClick={handleFormSubmit}
    >
      Sign In
    </Button>
  );
}

export default LoginBtn;
