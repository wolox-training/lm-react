import React, { Component } from 'react';
import './ListBooks.css';
import Book from './Book';

function ListBooks(props) {
  var rows = [];
  props.books.forEach(function(book) {
    rows.push(<Book book={book} key={book.id} />);
  });

  return (
    <ul className="list-books">
      {rows}
    </ul>
  );
}

export default ListBooks;
