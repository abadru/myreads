import React, {Component} from "react";
import * as BooksAPI from "../api/BooksAPI";
import PropTypes from 'prop-types';
import SearchBox from "../components/SearchBox";
import BookItemList from "../components/BookItemList";


class SearchBook extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    state = {
        query: '',
        newBooks: [],
        error: false
    };

    getBooks = async (query) => {
        this.setState({query});

        // Get books only if user types something on the input box
        if (query) {

            const books = await BooksAPI.search(query.trim());
            books.length > 0
                ? this.setState({newBooks: books, error: false})
                : this.setState({newBooks: [], error: true});
        } else {
            this.setState({newBooks: [], error: false});
        }
    };


    render() {
        const {query, newBooks, error} = this.state;
        const {books, updateBookShelf} = this.props;
        return (
            <div className="search-books">
                <SearchBox query={query} getBooks={this.getBooks} />
                <div className="search-books-results">
                    {
                        newBooks.length > 0 && (
                            <BookItemList
                                books={books}
                                booksToList={newBooks}
                                updateBookShelf={updateBookShelf}
                            />
                        )
                    }

                    {error && (
                        <div className='alert alert-warning'>No books found. Please try again!</div>
                    )}
                </div>
            </div>
        );
    }

}

export default SearchBook;
