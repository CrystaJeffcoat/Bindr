import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function NewUserBtn(props) {
  let history = useHistory();
  let username = props.userName;
  let password = props.password;

  function handleFormSubmit(event) {
    event.preventDefault();
    fetch("/api/user/add", {
      method: "post",
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then(function (response) {
      return response.json();
    });

    //fetch("/api/user/favorites").then(function (response) {
    //history.push("/home");
    // });

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
      Create New User
    </Button>
  );
}

export default NewUserBtn;
