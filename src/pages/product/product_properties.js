import React from 'react';
import '../../css/product_properties.css';

class Table extends React.Component {
  render() {
    const { material, type, weight, width, height } = JSON.parse(this.props.json);

    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Материал</th>
            <th>Тип</th>
            <th>Вес</th>
            <th>Ширина</th>
            <th>Высота</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{material}</td>
            <td>{type}</td>
            <td>{weight}</td>
            <td>{width}</td>
            <td>{height}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
