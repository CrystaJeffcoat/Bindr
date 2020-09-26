import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function LoginBtn() {
  let history = useHistory();

  function handleFormSubmit(event) {
    // can insert user validation
    //if(user exists).then(history.push("/books"))

    event.preventDefault();
    history.push("/books");
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
