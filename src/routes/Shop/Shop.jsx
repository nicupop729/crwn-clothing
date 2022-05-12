import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

import './Shop.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
