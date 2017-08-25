import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <div className="Filter">
        <form className="FilterForm" onSubmit={this.props.filterList}>
          <select name="typeFilter" className="input-select">
            <option value="" selected>Seleccionar filtro...</option>
            <option value="title">Nombre</option>
            <option value="author">Autor</option>
          </select>
          <div className="input-search">
            <input
              name="textFilter"
              className="input-text"
              type="text" placeholder="Buscar..." />
            <button
              className="icon-button"
              type="submit" >
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
