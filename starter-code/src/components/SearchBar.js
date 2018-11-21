import React from 'react'

const SearchBar = () => (
  <div>
    <div>
      <input type="text" placeholder="Search..." />
    </div>
    <div>
      <input type="checkbox" />
      <label htmlFor="">Only show products in stock</label>
    </div>
  </div>
)

export default SearchBar;


