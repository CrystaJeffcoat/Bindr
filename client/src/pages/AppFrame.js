// React
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCover from '../components/BookCover';
import GenreSelect from '../components/GenreSelect';
import LikeDislike from '../components/LikeDislike';
const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
    },
}));
const AppFrame = ({ ...props }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BookCover />

            <GenreSelect />

            <LikeDislike />
        </div>
    );
};

export default AppFrame;
