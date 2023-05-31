import React from 'react';
import '../../css/product.css';

const ProductCard = ({ imageSrc, name, price, id }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      <div
        className={`product-card${isHovered ? ' product-card--hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imageSrc} alt={name} className="product-card__image" />
        <div className="product-card__name">{name}</div>
        <button className="product-card__button">
          {isHovered ? 'Купить' : `${price} €.`}
        </button>
      </div>
  );
};

export default ProductCard;
