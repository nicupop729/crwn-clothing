import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ProductCard from '../../components/ProductCard/ProductCard';

import { CategoriesContext } from '../../contexts/CategoriesContext';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={uuidv4()} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
