import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItem from "./BookItem";

class BookShelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    render() {
        const { books, updateBookShelf } = this.props;

        return (
            <ol className="books-grid">
                {books.map(book => (
                    <BookItem
                        book={book}
                        books={books}
                        key={book.id}
                        updateBookShelf={updateBookShelf}
                    />
                ))}
            </ol>
        );
    }
}

export default BookShelf;
