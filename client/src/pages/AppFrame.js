// React
import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import BookCover from '../components/BookCover';
import GenreSelect from '../components/GenreSelect';
import LikeDislike from '../components/LikeDislike';
import TextBox from '../components/TextBox';

const AppFrame = ({ ...props }) => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [genre, setGenre] = useState('');
    const [genreList, setGenreList] = useState([]);
    const [activeBook, setActiveBook] = useState('');
    const [activeBookIndex, setActiveBookIndex] = useState(0);
    const [maxCount, setMaxCount] = useState(0);

    useEffect(() => {
        getGenre();
    }, []);

    useEffect(() => {
        // On first render we don't call for books until user selects genre
        if (genreList.length > 0 && genre) {
            getBooks();
        }
    }, [genre, genreList]);

    // Loads genre type to call for book list
    async function getGenre() {
        setLoading(true);
        try {
            var response = await API.getGenre();
            setGenreList(response.data.results);
            setGenre(response.data.results[0].list_name_encoded);
        } catch (error) {
            console.error(genreList);
        }
    }
    // Loads all books and sets them to books
    async function getBooks() {
        try {
            var response = await API.getBooks(genre);
            setBooks(response.data.results.books);
            setMaxCount(response.data.num_results);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    const handleNext = () => {
        setActiveBookIndex((prevActiveBookIndex) => prevActiveBookIndex + 1);
        setActiveBook(books[activeBookIndex]);
    };

    const handleSaveBook = (book) => {
        // Write logic to connect with API for saving book to library
        console.log(`Just added ${activeBook.title} to favorite`);
    };

    return (
        !loading && (
            <div>
                <BookCover image={books.length > 0 ? books[activeBookIndex].book_image : null} />

                <GenreSelect selectOptions={genreList} setGenre={(value) => setGenre(value)} />

                <LikeDislike
                    onHandleSave={handleSaveBook}
                    onHandleNext={handleNext}
                    disabled={activeBookIndex === maxCount - 1}
                />
                <TextBox bookDetails={books[activeBookIndex]} genre={genre} />
            </div>
        )
    );
};

export default AppFrame;
