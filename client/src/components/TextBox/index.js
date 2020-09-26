import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';
import './styles.css';

function TextBox({ bookDetails, genre, removeButton = false, ...props }) {
    const bull = <span className={'bullet'}>•</span>;
    console.log(bookDetails);
    return bookDetails ? (
        <Card className={'card-root'} variant="outlined">
            <CardContent className="card-content">
                <div className="card-header">
                    <div className="title">{bookDetails.title}</div>
                    <Typography className="genre-label" noWrap>
                        {genre}
                    </Typography>
                </div>
                <div className={'author'}>by {bookDetails.author}</div>

                <div className="body">{bookDetails.description}</div>
            </CardContent>
            {removeButton ? <CancelOutlined className="remove-card-button" /> : null}
        </Card>
    ) : null;
}
export default TextBox;
