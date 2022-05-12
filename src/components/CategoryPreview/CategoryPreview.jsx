import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../ProductCard/ProductCard';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={uuidv4()} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
