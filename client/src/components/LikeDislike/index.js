// React
import React from 'react';
import { Fab, SvgIcon } from '@material-ui/core';
import { DoneOutline } from '@material-ui/icons';
import './styles.css';
import { ReactComponent as ClearIcon } from './clear.svg';
const LikeDislike = ({ ...props }) => {
    return (
        <div className="select-container">
            <Fab color="primary" aria-label="add">
                <SvgIcon component={ClearIcon} viewBox="0 0 24 24" color="#fff" />
            </Fab>
            <Fab color="secondary" aria-label="add">
                <DoneOutline />
            </Fab>
        </div>
    );
};

export default LikeDislike;
