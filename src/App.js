import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductData } from './redux/productSlice';
import jsonData from './stackline_frontend_assessment_data_2021.json'; // Adjust the path to where your JSON file is located

import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import SalesGraph from './components/SalesGraph';
import SalesTable from './components/SalesTable';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product.data); // Accessing the product data from the state


  useEffect(() => {
    dispatch(setProductData(jsonData));
    console.log('Data loaded:', jsonData);
  }, [dispatch]);

  console.log('Product Details:', product);
  // Check if the product data is loaded
  if (!product) {
    return <div>Loading...</div>; // Show loading message until the data is loaded
  }

  return (

   <div className="container">
    <Header />

      <div className="product-section">
        <ProductDetails />
      </div>
      <div className="graph-and-table-section">
        <div className="graph-section">
          <SalesGraph />
        </div>
        <div className="table-section">
          <SalesTable />
        </div>
      </div>
    </div>
  );
}

export default App;
