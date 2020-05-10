import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ShelfUpdater extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    updateShelf = (book, shelf) => {
        this.props.updateBookShelf(book, shelf);
    }

    render() {
        const {book, books} = this.props;
        // Determine the book shelf
        // First, set current shelf to none as default
        let currentShelf = 'none';

        // if book is in current list, set current shelf to book.shelf
        for (let item of books) {
            if (item.id === book.id) {
                currentShelf = item.shelf;
                break;
            }
        }

        return (
            <div className="book-shelf-changer">
                <select
                    onChange={(e) => this.updateShelf(book, e.target.value)}
                    defaultValue={currentShelf}
                >
                    <option value="none" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}

export default ShelfUpdater;
