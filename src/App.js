import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from "./SearchBook";
import ListBooks from "./ListBooks";
import {Link, Route} from "react-router-dom";

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        // Get all books
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }));
            });
    }

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(response => {
            // Update book shelf
            book.shelf = shelf;
            const currentBookShelf = this.state.books.filter(book => book.id === book.id);
            currentBookShelf.concat(book);
            // update state with changed book. replace book with updated one
            this.setState(currentState => ({
                books: currentBookShelf
            }));
        });
    };

    render() {
        const {books} = this.state;

        return (
            <div className="app">
                <Route
                    exact
                    path='/'
                    render={() => (
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <ListBooks
                                books={books}
                                updateBookShelf={this.updateBookShelf}/>
                            <div className="open-search">
                                <Link to="/search">Search</Link>
                            </div>
                        </div>
                    )}

                />
                <Route path='/search' render={() => (
                    <SearchBook books={books} updateBookShelf={this.updateBookShelf}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
