// React
import React from 'react';
import { IconButton, SvgIcon } from '@material-ui/core';
import { DoneOutline } from '@material-ui/icons';
import { ReactComponent as ClearIcon } from './clear.svg';
import './styles.css';

const LikeDislike = ({ onHandleLike, onHandleNext, ...props }) => {
    return (
        <div className="button-container">
            <IconButton className="fab-button " onClick={onHandleNext}>
                <SvgIcon component={ClearIcon} viewBox="0 0 24 24" />
            </IconButton>
            <IconButton className="fab-button" onClick={onHandleLike} color="primary" aria-label="add">
                <DoneOutline className="fab-icon" />
            </IconButton>
        </div>
    );
};

export default LikeDislike;
