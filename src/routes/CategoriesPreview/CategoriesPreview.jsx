import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={uuidv4()} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
