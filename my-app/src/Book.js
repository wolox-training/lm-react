import React, { Component } from 'react';
import './Book.css';
import defaultBook from './assets/default_book.svg';

function Book(props) {
  let classImg = 'book-cover';

  if(props.book.image_url) {
    classImg += ' img-book-set';
  }

  return (
    <li className="book">
      <div className="img-book">
        <img
          className={classImg}
          src={props.book.image_url ? props.book.image_url : defaultBook}
          alt={props.book.title} />
      </div>
      <h2 className="title-book">{props.book.title}</h2>
      <h3 className="subtitle-book">{props.book.author}</h3>
    </li>
  );
}

export default Book;
