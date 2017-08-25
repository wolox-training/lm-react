import React, { Component } from 'react';
import './Book.css';
import defaultBook from './assets/default_book.svg';

class Book extends Component {
  render() {
    let classImg = 'book-cover';

    if(this.props.book.image_url) {
      classImg += ' img-book-set';
    }

    return (
      <li className="Book">
        <div className="img-book">
          <img
            className={classImg}
            src={this.props.book.image_url ? this.props.book.image_url : defaultBook}
            alt={this.props.book.title} />
        </div>
        <h2 className="title-book">{this.props.book.title}</h2>
        <h3 className="subtitle-book">{this.props.book.author}</h3>
      </li>
    );
  }
}

export default Book;
