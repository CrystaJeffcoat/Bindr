// React
import React from 'react';

import './styles.css';

const BookCover = ({ image, ...props }) => {
    return (
        <div className="root">
            <div className="book-cover">
                <img className="book" src={image} alt="book-cover" />
            </div>
        </div>
    );
};

export default BookCover;
