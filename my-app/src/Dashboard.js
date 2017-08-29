import React, { Component } from 'react';
import './Dashboard.css';
import Filter from './Filter';
import ListBooks from './ListBooks';
import dataBooks from './books.json';

class Dashboard extends Component {
  state = { dataBooks: dataBooks, typeFilter: '', textFilter: '' };

  filterList = (event) => {
    event.preventDefault();
    const typeFilter = event.target.typeFilter.value;
    const textFilter = event.target.textFilter.value;

    if (typeFilter === '') {
        this.setState({ dataBooks: dataBooks});
    } else {
      const filterBooks = dataBooks.filter((book)=> {
        if (typeFilter === 'title') {
          const title = book.title.toLowerCase();
          return title.includes(textFilter.toLowerCase());
        } else if (typeFilter === 'author'){
          const author = book.author.toLowerCase();
          return author.includes(textFilter.toLowerCase());
        }
      });
      this.setState({ dataBooks: filterBooks, typeFilter: typeFilter, textFilter: textFilter});
    }

  }

  render() {
    return (
      <div className="dashboard">
        <Filter filterList={this.filterList} typeFilter={this.state.typeFilter} textFilter={this.state.textFilter}/>
        <ListBooks books={this.state.dataBooks}/>
      </div>
    );
  }
}

export default Dashboard;
