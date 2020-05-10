import React from "react";
import ShelfUpdater from "./ShelfUpdater";
import PropTypes from 'prop-types';


const BookItem = (props) => {
    const { book, books, updateBookShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}>
                    </div>
                    <ShelfUpdater
                        book={book}
                        books={books}
                        updateBookShelf={updateBookShelf}
                    />
                </div>
                <div className="book-title">{book.title ? book.title : 'No title specified'}</div>
                {/* Check for authors and render them */
                    book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
            </div>
        </li>
    );
};

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookItem;
