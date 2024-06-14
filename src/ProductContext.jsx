import React, { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Produkt 1',
      description: 'Opis produktu 1',
      price: 100.0,
      category: 'Laptopy',
      recommendedProduct: true,
    },
    {
      id: 2,
      title: 'Produkt 2',
      description: 'Opis produktu 2',
      price: 150.0,
      category: 'Smartfony',
      recommendedProduct: true,
    },
    {
      id: 4,
      title: 'Bestseller 1',
      description: 'Opis bestsellera 1',
      price: 120.0,
      category: 'Smartfony',
      bestseller: true,
    },
    {
      id: 5,
      title: 'Bestseller 2',
      description: 'Opis bestsellera 2',
      price: 180.0,
      category: 'Smartfony',
      bestseller: true,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
