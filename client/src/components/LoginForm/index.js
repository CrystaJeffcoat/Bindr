import React, { useState, Component } from "react";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LoginBtn from "../LoginBtn";
import NewUserBtn from "../NewUserBtn";

let useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const username = [userName, setUserName] = useState("");
const password = [password, setPassword] = useState("");

class LoginForm extends Component {
  classes = useStyles();

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            Bindr
        </Typography>
          <Typography component="h2" variant="h5">
            Judge a Book by its Cover
        </Typography>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={userName}
              id="username"
              label="Username"
              name="username"
              autofocustype="text"
              onChange={(e) => setUserName(e.target.value)}
            ></TextField>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <LoginBtn userName={userName} password={password} />
          <br></br>
          <NewUserBtn userName={userName} password={password} />
        </div>
      </Container>
    );
  }
}

export default LoginForm;
