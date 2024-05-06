import React from 'react';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const product = useSelector(state => state.product.data[0]);

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} style={{ width: '150px' }} />
      <h1>{product.title}</h1>
      <h2>{product.subtitle}</h2>
      <div>{product.tags.map(tag => <span key={tag} className="tag" style={{ marginRight: '10px' }}>{tag}</span>)}</div>
    </div>
  );
};

export default ProductDetails;
