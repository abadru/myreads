import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from "./SearchBook";
import ListBooks from "./ListBooks";
import {Route} from "react-router-dom";

class BooksApp extends React.Component {
    state = {
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                console.log('Books', books);
                this.setState(() => ({
                    books,
                    currentlyReading: books.filter (book => book.shelf === 'currentlyReading'),
                    wantToRead: books.filter (book => book.shelf === 'wantToRead'),
                    read: books.filter (book => book.shelf === 'read')
                }));
            });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        booksCurrentlyReading = {this.state.currentlyReading}
                        booksWantToRead = {this.state.wantToRead}
                        booksRead = {this.state.read}
                    />
                )}/>
                <Route path='/search' render={({history}) => (
                    <SearchBook books ={this.state.books} />
                )}/>
            </div>
        )
    }
}

export default BooksApp
