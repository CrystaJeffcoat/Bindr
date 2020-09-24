import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Book, LibraryBooks } from '@material-ui/icons';
import './styles.css';

const AppNav = ({ classes, ...props }) => {
    return (
        <div className={''}>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Book />
                    </IconButton>
                    <Typography variant="h6">Bindr</Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <LibraryBooks />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default AppNav;
