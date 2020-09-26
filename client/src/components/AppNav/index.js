import React from 'react';
import { useHistory } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Book, LibraryBooks } from '@material-ui/icons';
import './styles.css';

const AppNav = ({ classes, ...props }) => {
    let history = useHistory();

    function handleClick(path) {
        history.push(path);
    }
    return (
        <div className={''}>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <IconButton onClick={(e) => handleClick('/')} edge="start" color="inherit" aria-label="menu">
                        <Book />
                    </IconButton>
                    <Typography variant="h6">Bindr</Typography>
                    <IconButton onClick={(e) => handleClick('/saved')} edge="start" color="inherit" aria-label="menu">
                        <LibraryBooks />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppNav;
