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

    updateBookShelf = (updatedBook, shelf) => {
        BooksAPI.update(updatedBook, shelf).then(response => {
            // Update book shelf
            updatedBook.shelf = shelf;
            // filter the updated book
            const currentBook= this.state.books.filter(book => book.id !== updatedBook.id);

            // Add updated book into the shelf
            const currentBookShelf = [...currentBook, updatedBook];
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
                                <Link to="/search"><button>Search</button></Link>
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
