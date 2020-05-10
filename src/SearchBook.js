import React from "react";
import {Link} from "react-router-dom";
import BookItem from "./BookItem";

const SearchBook = (props) => {
    const { books } = props;
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search"  />

                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        books.map( book => (<BookItem key={book.id} book ={book} />))
                    }
                </ol>
            </div>
        </div>
    );
};

export default SearchBook;
