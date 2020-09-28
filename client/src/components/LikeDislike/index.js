// React
import React from 'react';
import { IconButton, SvgIcon } from '@material-ui/core';
import { DoneOutline } from '@material-ui/icons';
import { ReactComponent as ClearIcon } from './clear.svg';
import './styles.css';

const LikeDislike = ({ onHandleSave, onHandleNext, disabled, ...props }) => {
    return (
        <div className="button-container">
            <IconButton
                classes={{ root: 'fab-button ', disabled: 'fab-disabled' }}
                onClick={onHandleNext}
                disabled={disabled}
                color={'primary'}>
                <SvgIcon htmlColor="#000" component={ClearIcon} viewBox="0 0 24 24" />
            </IconButton>
            <IconButton className="fab-button" onClick={onHandleSave}>
                <DoneOutline className="fab-icon" />
            </IconButton>
        </div>
    );
};

export default LikeDislike;
