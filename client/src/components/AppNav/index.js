import React from 'react';
import { useHistory } from 'react-router-dom';
import {LoginForm, userName }from '../LoginForm';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@material-ui/core';
import { Book, LibraryBooks } from '@material-ui/icons';
import './styles.css';

const AppNav = ({ classes, ...props }) => {
  // useHistory hook gives you access to the history
  // https://reactrouter.com/web/api/Hooks/usehistory
  let history = useHistory();

  function handleClick(path) {
    history.push(path);
    console.log(userName)
  }

  return (
    <Container fixed maxWidth="xs" disableGutters={true}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <IconButton onClick={(e) => handleClick('/home')} edge="start" color="inherit" aria-label="menu">
            <Book />
          </IconButton>
          <Typography variant="h6">Bindr</Typography>
          <IconButton onClick={(e) => handleClick('/saved')} edge="start" color="inherit" aria-label="menu">
            <LibraryBooks />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default AppNav;
