import React from 'react';
// import API from '../utils/API';
import TextBox from '../components/TextBox';

const placeholderContent = {
  title: 'Exhalation: Stories',
  author: 'Ted Chiang',
  genre: 'Scifi',
  description: 'In these nine stunningly original, provocative, and poignant stories, Ted Chiang tackles some...',
};

function SavedBooks({ ...props }) {
  return (
    <div className="saved-books-container">
      {Array.from(new Array(3)).map((book, index) => (
        <>
          <TextBox removeButton bookDetails={placeholderContent} genre={placeholderContent.genre} />
        </>
      ))}
    </div>
  );
}

export default SavedBooks;
