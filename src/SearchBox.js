import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

/*
    This stateless component is intended to only render the search bar text box
 */

const SearchBox = (props) => {
    const {query, getBooks } = props;
    return (
        <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => getBooks(event.target.value)}
                />
            </div>
        </div>
    );
};

SearchBox.propTypes = {
    query: PropTypes.object.isRequired,
    getBooks: PropTypes.func.isRequired
};

export default SearchBox;
