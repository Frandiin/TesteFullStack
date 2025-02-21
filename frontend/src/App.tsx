import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';



function App() {
  return (
  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
