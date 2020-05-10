import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from "./SearchBook";
import ListBooks from "./ListBooks";
import {Route} from "react-router-dom";

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                console.log('Books', books);
                this.setState(() => ({
                    books
                }));
            });
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                    />
                )}/>
                <Route path='/search' render={({history}) => (
                    <SearchBook books={this.state.books}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
