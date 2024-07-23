import React from 'react';
// import ProductCard from '../ui/ProductCard';
import DisplayProducts from './products/DisplayProducts';
import Counter from './Counter';
import Drawer from '../components/drawer/Drawer';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Counter />
      <DisplayProducts />
      <Drawer />
    </div>
  );
}

export default Home;
