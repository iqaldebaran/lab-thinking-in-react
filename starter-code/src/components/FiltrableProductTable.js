import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json'

class FiltrableProductTable extends Component {

  constructor(){
    super();
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}

export default FiltrableProductTable;