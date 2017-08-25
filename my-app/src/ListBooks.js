import React, { Component } from 'react';
import './ListBooks.css';
import Book from './Book';

class ListBooks extends Component {
  render() {
    var rows = [];
    this.props.books.forEach(function(book) {
      rows.push(<Book book={book} key={book.id} />);
    });
    return (
      <ul className="ListBooks">
        {rows}
      </ul>
    );
  }
}

export default ListBooks;
