import React from 'react';
import BookItem from "./BookItem";
import PropTypes from "prop-types";

const BookItemList = (props) => {
    const {books, booksToList, updateBookShelf} = props;

    return (
        <ol className="books-grid">
            {
                booksToList.map(book => (
                        <BookItem
                            key={book.id}
                            book={book}
                            books={books}
                            updateBookShelf={updateBookShelf}
                        />
                    )
                )
            }
        </ol>
    );
};

BookItemList.propTypes = {
    books: PropTypes.array.isRequired,
    booksToList: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};


export default BookItemList;
