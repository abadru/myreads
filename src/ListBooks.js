import React from "react";
import {Link} from "react-router-dom";
import BookItem from "./BookItem";

const ListBooks = (props) => {
    const {books} = props;

    const booksCurrentlyReading = books.filter (book => book.shelf === 'currentlyReading');
    const booksWantToRead = books.filter (book => book.shelf === 'wantToRead');
    const booksRead = books.filter (book => book.shelf === 'read');

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        booksCurrentlyReading.length > 0 && (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            booksCurrentlyReading.map(book => (<BookItem key={book.id} book={book}/>))
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    }

                    {
                        booksWantToRead.length > 0 && (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            booksWantToRead.map(book => (<BookItem key={book.id} book={book}/>))
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    }

                    {
                        booksRead.length > 0 && (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {
                                            booksRead.map(book => (<BookItem key={book.id} book={book}/>))
                                        }
                                    </ol>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    <button>Add Book</button>
                </Link>
            </div>
        </div>
    );
};

export default ListBooks;
