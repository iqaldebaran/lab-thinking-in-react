import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import data from '../data.json'


class FiltrableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    }
  }

  componentWillMount(){
    let {data} = this.state;
    this.setState({data})
    console.log(data)
  }

  render() {
    

    return (
      <div>
        <SearchBar />
        <ProductTable data = {data.data}/>
      </div>
    );
  }
}

export default FiltrableProductTable;