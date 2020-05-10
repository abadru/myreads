import React, { Component } from "react";
import {Link} from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "./BooksAPI";

class SearchBook extends Component {
    state = {
        books: [],
    };

    updateQuery = (query) => {
        if (query.trim() !== '') {
            BooksAPI.search(query)
                .then((books) => {
                    this.setState(() => ({
                        books: books
                    }));
                }).catch((err) => {
                console.log(err);
                this.setState(() => ({
                    books: []
                }));
            });
        } else {
            this.setState(() => ({
                books: []
            }));
        }
    }


    render() {
        const { books } = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search"  />

                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    {
                        books.length > 0  && (
                            <ol className="books-grid">
                                {
                                    books.map( book => (<BookItem key={book.id} book ={book} />))
                                }
                            </ol>
                        )
                    }
                </div>
            </div>
        );
    }

}

export default SearchBook;
