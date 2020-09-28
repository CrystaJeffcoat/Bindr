import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function LoginBtn(props) {
  let history = useHistory();
  let username = props.userName;
  let password = props.password;

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("/", {
      method: "put", //cannot be a get request with body
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(function (response) {
      return response.json();
    });

    // method: get cannot have "body"
    // should use axios/API.getUser ?
    // what do we want this to actually send the user to?

    history.push("/home");
  }
  const classes = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  return (
    <Button
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
