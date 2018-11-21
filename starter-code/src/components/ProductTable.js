import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ data }) => (
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
        </tr>
      ))}
    </table>
  </div>
)

export default ProductTable;