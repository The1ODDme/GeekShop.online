import React from 'react';
import '../../css/product_properties.css';

class Table extends React.Component {
  render() {
    const data = JSON.parse(this.props.json);

    return (
      <table className="product-table">
        <thead>
          <tr>
            <th>Вес</th>
            <th>Размер упаковки</th>
            <th>Возрастная рекомендация</th>
            <th>Производитель</th>
            <th>Материал</th>
            <th>Тема</th>
            <th>Модель</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.weight}</td>
              <td>{item.packageSize}</td>
              <td>{item.ageRecommendation}</td>
              <td>{item.manufacturer}</td>
              <td>{item.material}</td>
              <td>{item.theme}</td>
              <td>{item.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
