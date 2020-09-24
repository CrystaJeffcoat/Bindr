// React
import React from 'react';

import './styles.css';

const BookCover = ({ classes, ...props }) => {
    return (
        <div className="root">
            <div className="book-cover">
                <img className="book" src="/bookcover.png" />
            </div>
        </div>
    );
};

export default BookCover;
